(self.webpackChunk=self.webpackChunk||[]).push([[97634],{3905:(e,r,n)=>{"use strict";n.d(r,{Zo:()=>u,kt:()=>m});var t=n(67294);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=t.createContext({}),d=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},u=function(e){var r=d(e.components);return t.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},c=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=i,h=c["".concat(s,".").concat(m)]||c[m]||p[m]||a;return n?t.createElement(h,o(o({ref:r},u),{},{components:n})):t.createElement(h,o({ref:r},u))}));function m(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=c;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<a;d++)o[d]=n[d];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},71046:(e,r,n)=>{"use strict";n.r(r),n.d(r,{frontMatter:()=>l,metadata:()=>s,toc:()=>d,default:()=>p});var t=n(22122),i=n(19756),a=(n(67294),n(3905)),o=["components"],l={id:"new-in-relay-modern",title:"New in Relay Modern",original_id:"new-in-relay-modern"},s={unversionedId:"new-in-relay-modern",id:"version-v1.7.0/new-in-relay-modern",isDocsHomePage:!1,title:"New in Relay Modern",description:"A summary of the improvements and new features in Relay Modern.",source:"@site/versioned_docs/version-v1.7.0/Modern-NewInRelayModern.md",sourceDirName:".",slug:"/new-in-relay-modern",permalink:"/docs/v1.7.0/new-in-relay-modern",editUrl:"https://github.com/facebook/relay/edit/master/website/versioned_docs/version-v1.7.0/Modern-NewInRelayModern.md",version:"v1.7.0",lastUpdatedBy:"Abhijeet Singh",lastUpdatedAt:1623693547,formattedLastUpdatedAt:"6/14/2021",frontMatter:{id:"new-in-relay-modern",title:"New in Relay Modern",original_id:"new-in-relay-modern"},sidebar:"version-v1.7.0/docs",previous:{title:"GraphQL Server Specification",permalink:"/docs/v1.7.0/graphql-server-specification"},next:{title:"Compatibility Mode",permalink:"/docs/v1.7.0/relay-compat"}},d=[{value:"Modern API",id:"modern-api",children:[]},{value:"Modern Runtime",id:"modern-runtime",children:[{value:"Performance",id:"performance",children:[]},{value:"Smaller Bundle Size",id:"smaller-bundle-size",children:[]},{value:"Garbage Collection",id:"garbage-collection",children:[]},{value:"GraphQL Subscriptions &amp; Live Queries",id:"graphql-subscriptions--live-queries",children:[]},{value:"Injectable Custom Field Handlers",id:"injectable-custom-field-handlers",children:[]},{value:"Simpler Mutation API",id:"simpler-mutation-api",children:[]},{value:"Client Schema Extensions (Experimental)",id:"client-schema-extensions-experimental",children:[]},{value:"Flow Type Generation",id:"flow-type-generation",children:[]}]},{value:"Fewer Requirements around Routing",id:"fewer-requirements-around-routing",children:[]},{value:"Extensible Core",id:"extensible-core",children:[]}],u={toc:d};function p(e){var r=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,"A summary of the improvements and new features in Relay Modern."),(0,a.kt)("h2",{id:"modern-api"},"Modern API"),(0,a.kt)("p",null,"Compared to Relay Classic, the Relay Modern API has the following differentiating features:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A simpler, more predictable mutation API. The restrictions on mutation queries from Relay Classic are also removed: mutation queries are static, fields can be arbitrarily nested, and may use arbitrary arguments."),(0,a.kt)("li",{parentName:"ul"},"When using ",(0,a.kt)("a",{parentName:"li",href:"./query-renderer"},(0,a.kt)("inlineCode",{parentName:"a"},"QueryRenderer")),", the restrictions on queries from Relay Classic are removed: queries may contain multiple root fields that use arbitrary arguments and return singular or plural values. The ",(0,a.kt)("inlineCode",{parentName:"li"},"viewer")," root field is now optional."),(0,a.kt)("li",{parentName:"ul"},"Routes are now optional: ",(0,a.kt)("inlineCode",{parentName:"li"},"QueryRenderer")," can be used without defining a route. More in the ",(0,a.kt)("a",{parentName:"li",href:"./routing"},"routing guide"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"QueryRenderer")," supports rendering small amounts of data directly, instead of requiring a container to access data. ",(0,a.kt)("a",{parentName:"li",href:"./fragment-container"},"Containers")," are optional and can be used as your application grows in size and complexity."),(0,a.kt)("li",{parentName:"ul"},"The API is overall simpler and more predictable.")),(0,a.kt)("p",null,"You can use ",(0,a.kt)("a",{parentName:"p",href:"./relay-compat"},"Compat mode")," to incrementally adopt Relay Modern APIs in an existing Relay app."),(0,a.kt)("h2",{id:"modern-runtime"},"Modern Runtime"),(0,a.kt)("p",null,"For new Relay apps or existing apps that have been fully converted to the Modern/Compat API, the Relay Modern runtime can be enabled to activate even more features. In addition to those described above, this includes:"),(0,a.kt)("h3",{id:"performance"},"Performance"),(0,a.kt)("p",null,"The new Relay Modern core is more light-weight and significantly faster than the previous version. It is redesigned to work with static queries, which allow us to push more work to build/compilation time. The Modern core is much smaller as a result of removing a lot of the complex features required for dynamic queries. The new core is also an order of magnitude faster in processing the response with an optimized parsing instruction set that is generated at build time. We no longer keep around tracking information needed for dynamic query generation, which drastically reduces the memory overhead of using Relay. This means more memory is left for making the UI feel responsive. Relay Modern also supports persisted queries, reducing the upload size of the request from the full query text to a simple id."),(0,a.kt)("h3",{id:"smaller-bundle-size"},"Smaller Bundle Size"),(0,a.kt)("p",null,"The Relay runtime bundle is roughly 20% of the size of Relay Classic."),(0,a.kt)("h3",{id:"garbage-collection"},"Garbage Collection"),(0,a.kt)("p",null,"The runtime automatically removes cached data that is no longer referenced, helping to reduce memory usage."),(0,a.kt)("h3",{id:"graphql-subscriptions--live-queries"},"GraphQL Subscriptions & Live Queries"),(0,a.kt)("p",null,"Relay Modern supports GraphQL Subscriptions, using the imperative update API to allow modifications to the store whenever a payload is received. It also features experimental support for GraphQL Live Queries via polling."),(0,a.kt)("h3",{id:"injectable-custom-field-handlers"},"Injectable Custom Field Handlers"),(0,a.kt)("p",null,"Some fields - especially those for paginated data - can require post-processing on the client in order to merge previously fetched data with new information. Relay Modern supports custom field handlers that can be used to process these fields to work with various pagination patterns and other use cases."),(0,a.kt)("h3",{id:"simpler-mutation-api"},"Simpler Mutation API"),(0,a.kt)("p",null,"An area we've gotten a lot of questions on was mutations and their configs. Relay Modern introduces a new mutation API that allows records and fields to be updated in a more direct manner."),(0,a.kt)("h3",{id:"client-schema-extensions-experimental"},"Client Schema Extensions (Experimental)"),(0,a.kt)("p",null,"The Relay Modern Core adds support for client schema extensions. These allow Relay to conveniently store some extra information with data fetched from the server and be rendered like any other field fetched from the server. This should be able to replace some use cases that previously required a Flux/Redux store on the side."),(0,a.kt)("h3",{id:"flow-type-generation"},"Flow Type Generation"),(0,a.kt)("p",null,"Relay Modern comes with automatic Flow type generation for the fragments used in Relay containers based on the GraphQL schema. Using these Flow types can help make an application less error-prone, by ensuring all possible ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," cases are considered even if they don't happen frequently."),(0,a.kt)("h2",{id:"fewer-requirements-around-routing"},"Fewer Requirements around Routing"),(0,a.kt)("p",null,"Routes no longer need to know anything about the query root in Relay Modern. Relay components can be rendered anywhere wrapped in a ",(0,a.kt)("inlineCode",{parentName:"p"},"QueryRenderer"),". This should bring more flexibility around picking routing frameworks."),(0,a.kt)("h2",{id:"extensible-core"},"Extensible Core"),(0,a.kt)("p",null,"Relay Modern's core is essentially an un-opinionated store for GraphQL data. It can be used independent of rendering views using React and can be extended to be used with other frameworks."))}p.isMDXComponent=!0}}]);