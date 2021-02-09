/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

use crate::LSPExtraDataProvider;
use crate::{
    lsp::set_initializing_status,
    lsp_process_error::{LSPProcessError, LSPProcessResult},
    lsp_runtime_error::LSPRuntimeResult,
    node_resolution_info::{get_node_resolution_info, NodeResolutionInfo},
    utils::{extract_executable_definitions_from_text, extract_executable_document_from_text},
};
use common::{PerfLogEvent, PerfLogger, Span};
use crossbeam::Sender;
use graphql_ir::Program;
use graphql_syntax::{ExecutableDefinition, ExecutableDocument, GraphQLSource};
use interner::StringKey;
use log::debug;
use lsp_server::Message;
use lsp_types::{TextDocumentPositionParams, Url};
use relay_compiler::{
    compiler::Compiler, compiler_state::CompilerState, config::Config, errors::BuildProjectError,
    FileCategorizer, FileSource, FileSourceResult, FileSourceSubscription,
    FileSourceSubscriptionNextChange,
};
use schema::SDLSchema;
use std::{
    collections::{HashMap, HashSet},
    path::PathBuf,
    sync::atomic::AtomicI8,
    sync::atomic::Ordering,
    sync::{Arc, RwLock},
};
use tokio::{
    sync::Notify,
    task::{self, JoinHandle},
};
/// This structure contains all available resources that we may use in the Relay LSP message/notification
/// handlers. Such as schema, programs, extra_data_providers, etc...
pub(crate) struct LSPState<TPerfLogger: PerfLogger + 'static> {
    config: Arc<Config>,
    compiler: Option<Compiler<TPerfLogger>>,
    root_dir: PathBuf,
    pub extra_data_provider: Box<dyn LSPExtraDataProvider>,
    file_categorizer: FileCategorizer,
    schemas: Arc<RwLock<HashMap<StringKey, Arc<SDLSchema>>>>,
    source_programs: Arc<RwLock<HashMap<StringKey, Program>>>,
    synced_graphql_documents: HashMap<Url, Vec<GraphQLSource>>,
    perf_logger: Arc<TPerfLogger>,
}

/// This structure is responsible for keeping schemas/programs in sync with the current state of the world
struct LSPStateResources<TPerfLogger: PerfLogger + 'static> {
    config: Arc<Config>,
    perf_logger: Arc<TPerfLogger>,
    schemas: Arc<RwLock<HashMap<StringKey, Arc<SDLSchema>>>>,
    source_programs: Arc<RwLock<HashMap<StringKey, Program>>>,
    compiler: Compiler<TPerfLogger>,
    errors: Arc<RwLock<Vec<String>>>,
    // 0 - no updates
    // 1 - update started
    // 2 - update completed
    source_code_update_status: Arc<AtomicI8>,
    notify_sender: Arc<Notify>,
    notify_receiver: Arc<Notify>,
    sender: Sender<Message>,
}

impl<TPerfLogger: PerfLogger + 'static> LSPStateResources<TPerfLogger> {
    pub fn new(
        config: Arc<Config>,
        perf_logger: Arc<TPerfLogger>,
        schemas: Arc<RwLock<HashMap<StringKey, Arc<SDLSchema>>>>,
        source_programs: Arc<RwLock<HashMap<StringKey, Program>>>,
        sender: Sender<Message>,
    ) -> Self {
        let compiler = Compiler::new(Arc::clone(&config), Arc::clone(&perf_logger));
        let notify_sender = Arc::new(Notify::new());
        let notify_receiver = notify_sender.clone();
        Self {
            config,
            perf_logger,
            schemas,
            source_programs,
            compiler,
            errors: Default::default(),
            sender,
            source_code_update_status: Arc::new(AtomicI8::new(0)),
            notify_sender,
            notify_receiver,
        }
    }

    /// Create an end-less loop of keeping the resources up-to-date with the source control changes
    async fn watch(&self) -> LSPProcessResult<()> {
        loop {
            set_initializing_status(&self.sender);

            let setup_event = self
                .perf_logger
                .create_event("lsp_state_initialize_resources");

            let file_source = FileSource::connect(&self.config, &setup_event)
                .await
                .map_err(LSPProcessError::CompilerError)?;
            let (mut compiler_state, file_source_subscription) = file_source
                .subscribe(&setup_event, self.perf_logger.as_ref())
                .await
                .map_err(LSPProcessError::CompilerError)?;

            let pending_file_source_changes =
                Arc::clone(&compiler_state.pending_file_source_changes);

            // Start a separate task to receive watchman subscription updates
            // this process will notify, when the change is detected
            let subscription_handle = self.watchman_subscription_handler(
                file_source_subscription,
                pending_file_source_changes,
            );

            // Run initial build, before entering the watch changes loop
            self.initial_build(&compiler_state, &setup_event)?;
            compiler_state.complete_compilation();
            self.perf_logger.complete_event(setup_event);

            self.log_errors("lsp_state_error");

            // Here we will wait for changes from watchman
            loop {
                self.notify_receiver.notified().await;

                // SC Started, we can ignore all pending changes, and wait for it to complete,
                // we may change the status bar to `Source Control Update...`
                if self.source_code_update_status.load(Ordering::Relaxed) == 1 {
                    continue;
                }

                // SC Update completed, we need to abort current subscription, and re-initialize resource for LSP
                if self.source_code_update_status.load(Ordering::Relaxed) == 2 {
                    subscription_handle.abort();
                    break;
                }

                let log_event = self.perf_logger.create_event("lsp_state_watchman_event");
                let log_time = log_event.start("lsp_state_watchman_event_time");

                let has_new_changes = compiler_state
                    .merge_file_source_changes(
                        &self.config,
                        &log_event,
                        self.perf_logger.as_ref(),
                        false,
                    )
                    .unwrap();

                // If changes contains schema files we need to rebuild schemas
                if has_new_changes {
                    if compiler_state.has_schema_changes() {
                        self.build_schemas(&compiler_state, &log_event)?;
                    }

                    self.build_source_programs(
                        &compiler_state,
                        Some(self.get_affected_projects(&compiler_state)),
                        &log_event,
                    )?;

                    compiler_state.complete_compilation();

                    self.log_errors("lsp_state_user_error");
                }

                log_event.stop(log_time);
                self.perf_logger.complete_event(log_event);
                self.perf_logger.flush();
            }
        }
    }

    fn initial_build(
        &self,
        compiler_state: &CompilerState,
        log_event: &impl PerfLogEvent,
    ) -> LSPProcessResult<()> {
        debug!("Initial build started...");
        self.build_schemas(compiler_state, log_event)?;
        self.build_source_programs(compiler_state, None, log_event)?;

        Ok(())
    }

    fn build_schemas(
        &self,
        compiler_state: &CompilerState,
        log_event: &impl PerfLogEvent,
    ) -> LSPProcessResult<()> {
        debug!("Building schemas");

        // Stop building programs if we detect source code update
        if self.source_code_update_status.load(Ordering::Relaxed) == 1 {
            return Ok(());
        }

        let (next_schemas, build_errors) = self.compiler.build_schemas(&compiler_state, log_event);
        self.schemas
            .write()
            .expect("LSPState::watch_and_update_schemas: expect to acquire write lock on schemas")
            .clone_from(&next_schemas);

        if !build_errors.is_empty() {
            self.write_errors(vec![BuildProjectError::ValidationErrors {
                errors: build_errors,
            }]);
        }

        Ok(())
    }

    fn build_source_programs(
        &self,
        compiler_state: &CompilerState,
        affected_projects: Option<HashSet<&StringKey>>,
        log_event: &impl PerfLogEvent,
    ) -> LSPProcessResult<()> {
        debug!("Building source programs");

        // Stop building programs if we detect source code update
        if self.source_code_update_status.load(Ordering::Relaxed) == 1 {
            return Ok(());
        }

        // This will build programs, but won't apply any transformations to them
        // that should be enough for LSP to start showing fragments information
        let (programs, build_errors) = self.compiler.build_raw_programs(
            compiler_state,
            &self
                .schemas
                .read()
                .expect("LSPState::build_in_watch_mode: expect to acquire read lock on schemas"),
            affected_projects,
            log_event,
        )?;

        if !build_errors.is_empty() {
            self.write_errors(build_errors);
        }

        let mut source_programs_write_lock = self.source_programs.write().expect(
            "LSPState::build_in_watch_mode: expect to acquire write lock on source_programs",
        );

        for (program_name, program) in programs {
            // NOTE: Currently, we rely on the fact that `build_raw_programs`
            // will always return a full program, so we can safely replace it in the current
            // list of source_programs
            source_programs_write_lock.insert(program_name, program);
        }

        Ok(())
    }

    fn watchman_subscription_handler(
        &self,
        mut file_source_subscription: FileSourceSubscription,
        pending_file_source_changes: Arc<RwLock<Vec<FileSourceResult>>>,
    ) -> JoinHandle<()> {
        let source_code_update_status = self.source_code_update_status.clone();
        let notify_sender = self.notify_sender.clone();
        task::spawn(async move {
            loop {
                match file_source_subscription.next_change().await {
                    Err(_) => {
                        // do nothing? compiler should panic, and restart the lsp
                    }
                    Ok(FileSourceSubscriptionNextChange::None) => {}
                    Ok(FileSourceSubscriptionNextChange::SourceControlUpdateEnter) => {
                        source_code_update_status.store(1, Ordering::Relaxed);
                        notify_sender.notify_one();
                    }
                    Ok(FileSourceSubscriptionNextChange::SourceControlUpdateLeave) => {
                        source_code_update_status.store(2, Ordering::Relaxed);
                        notify_sender.notify_one();
                    }
                    Ok(FileSourceSubscriptionNextChange::Result(file_source_changes)) => {
                        pending_file_source_changes
                            .write()
                            .expect("LSPState::watch_and_update_schemas: expect to acquire write lock on pending_file_source_changes")
                            .push(file_source_changes);

                        notify_sender.notify_one();
                    }
                }
            }
        })
    }

    fn get_affected_projects(&self, compiler_state: &CompilerState) -> HashSet<&StringKey> {
        self.config
            .projects
            .keys()
            .filter(|project_name| compiler_state.project_has_pending_changes(**project_name))
            .collect::<HashSet<_>>()
    }

    fn log_errors(&self, log_event_name: &str) {
        if let Ok(read_lock) = self.errors.try_read() {
            if !read_lock.is_empty() {
                let error_message = read_lock
                    .iter()
                    .map(|err| format!("{:?}", err))
                    .collect::<Vec<String>>()
                    .join("\n");
                let error_event = self.perf_logger.create_event(log_event_name);
                error_event.string("error", error_message);
                self.perf_logger.complete_event(error_event);
                self.perf_logger.flush();
            }
        }
        if let Ok(mut write_lock) = self.errors.try_write() {
            write_lock.clear();
        }
    }

    fn write_errors(&self, errors: Vec<BuildProjectError>) {
        let mut write_lock = self.errors.write().unwrap();
        for error in errors {
            write_lock.push(error.to_string());
        }
    }
}

impl<TPerfLogger: PerfLogger + 'static> LSPState<TPerfLogger> {
    /// Private constructor
    fn new(
        config: Arc<Config>,
        perf_logger: Arc<TPerfLogger>,
        extra_data_provider: Box<dyn LSPExtraDataProvider>,
    ) -> Self {
        let file_categorizer = FileCategorizer::from_config(&config);
        let root_dir = &config.root_dir.clone();
        Self {
            config,
            compiler: None,
            extra_data_provider,
            file_categorizer,
            root_dir: root_dir.clone(),
            schemas: Default::default(),
            source_programs: Default::default(),
            synced_graphql_documents: Default::default(),
            perf_logger,
        }
    }

    /// This method is responsible for creating schema/source_programs for LSP internal state
    /// - so the LSP can provide these to Hover/Completion/GoToDefinition requests.
    /// It also creates a watchman subscription that is responsible for keeping these resources up-to-date.
    pub(crate) fn create_state(
        config: Arc<Config>,
        perf_logger: Arc<TPerfLogger>,
        extra_data_provider: Box<dyn LSPExtraDataProvider>,
        sender: Sender<Message>,
    ) -> LSPProcessResult<Self> {
        let mut lsp_state = Self::new(config, perf_logger, extra_data_provider);

        // Preload schema documentation - this will warm-up schema documentation cache in the LSP Extra Data providers
        lsp_state.preload_documentation();

        let config_clone = Arc::clone(&lsp_state.config);
        let perf_logger_clone = Arc::clone(&lsp_state.perf_logger);
        let schemas = Arc::clone(&lsp_state.schemas);
        let source_programs = Arc::clone(&lsp_state.source_programs);

        task::spawn(async move {
            let resources = LSPStateResources::new(
                config_clone,
                perf_logger_clone,
                schemas,
                source_programs,
                sender,
            );
            resources.watch().await.unwrap();
        });

        lsp_state.compiler = Some(Compiler::new(
            Arc::clone(&lsp_state.config),
            Arc::clone(&lsp_state.perf_logger),
        ));

        Ok(lsp_state)
    }

    pub(crate) fn get_schemas(&self) -> Arc<RwLock<HashMap<StringKey, Arc<SDLSchema>>>> {
        self.schemas.clone()
    }

    pub(crate) fn get_source_programs_ref(&self) -> &Arc<RwLock<HashMap<StringKey, Program>>> {
        &self.source_programs
    }

    pub(crate) fn resolve_node(
        &self,
        params: TextDocumentPositionParams,
    ) -> LSPRuntimeResult<NodeResolutionInfo> {
        get_node_resolution_info(
            params,
            &self.synced_graphql_documents,
            &self.file_categorizer,
            &self.root_dir,
        )
    }

    pub(crate) fn resolve_executable_definitions(
        &self,
        params: &TextDocumentPositionParams,
    ) -> LSPRuntimeResult<Vec<ExecutableDefinition>> {
        extract_executable_definitions_from_text(params, &self.synced_graphql_documents)
    }

    pub(crate) fn root_dir(&self) -> &PathBuf {
        &self.root_dir
    }

    pub(crate) fn insert_synced_sources(&mut self, url: Url, sources: Vec<GraphQLSource>) {
        self.start_compiler_once();
        self.synced_graphql_documents.insert(url, sources);
    }

    pub(crate) fn remove_synced_sources(&mut self, url: &Url) {
        self.synced_graphql_documents.remove(url);
    }

    pub(crate) fn extract_executable_document_from_text(
        &mut self,
        position: TextDocumentPositionParams,
        index_offset: usize,
    ) -> LSPRuntimeResult<(ExecutableDocument, Span, StringKey)> {
        extract_executable_document_from_text(
            position,
            &self.synced_graphql_documents,
            &self.file_categorizer,
            &self.root_dir,
            index_offset,
        )
    }

    fn start_compiler_once(&mut self) {
        if let Some(compiler) = self.compiler.take() {
            tokio::spawn(async move { compiler.watch().await });
        }
    }

    fn preload_documentation(&self) {
        for project_config in self.config.enabled_projects() {
            self.extra_data_provider
                .get_schema_documentation(self.get_schema_name_for_project(&project_config.name));
        }
    }

    pub fn get_schema_name_for_project(&self, project_name: &StringKey) -> String {
        for project_config in self.config.enabled_projects() {
            if project_name == &project_config.name {
                return project_config
                    .schema_name
                    .clone()
                    .unwrap_or_else(|| project_name.lookup().to_string());
            }
        }

        panic!("Expected to find project with name {}", project_name)
    }
}
