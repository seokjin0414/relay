(self.webpackChunk=self.webpackChunk||[]).push([[23803],{3905:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>p,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(t),m=o,b=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return t?r.createElement(b,a(a({ref:n},p),{},{components:t})):r.createElement(b,a({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5740:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>a,metadata:()=>s,toc:()=>c,default:()=>p});var r=t(22122),o=t(19756),i=(t(67294),t(3905)),a={id:"subscriptions",title:"Subscriptions",original_id:"subscriptions"},s={unversionedId:"subscriptions",id:"version-v1.5.0/subscriptions",isDocsHomePage:!1,title:"Subscriptions",description:"Relay exposes the following APIs to create subscriptions.",source:"@site/versioned_docs/version-v1.5.0/Modern-Subscriptions.md",sourceDirName:".",slug:"/subscriptions",permalink:"/docs/v1.5.0/subscriptions",editUrl:"https://github.com/facebook/relay/edit/master/website/versioned_docs/version-v1.5.0/Modern-Subscriptions.md",version:"v1.5.0",lastUpdatedBy:"Jordan Eldredge",lastUpdatedAt:1622667711,formattedLastUpdatedAt:"6/2/2021",frontMatter:{id:"subscriptions",title:"Subscriptions",original_id:"subscriptions"},sidebar:"version-v1.5.0/docs",previous:{title:"Mutations",permalink:"/docs/v1.5.0/mutations"},next:{title:"Relay Store",permalink:"/docs/v1.5.0/relay-store"}},c=[{value:"Example",id:"example",children:[]}],l={toc:c};function p(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Relay exposes the following APIs to create subscriptions."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const {requestSubscription} = require('react-relay');\n\ntype Variables = {[name: string]: any};\n\nrequestSubscription(\n  environment: Environment,\n  config: {\n    subscription: GraphQLTaggedNode,\n    variables: Variables,\n    onCompleted?: ?() => void,\n    onError?: ?(error: Error) => void,\n    onNext?: ?(response: ?Object) => void,\n    updater?: ?(store: RecordSourceSelectorProxy, data: SelectorData) => void,\n    configs?: Array<RelayMutationConfig>,\n  },\n);\n")),(0,i.kt)("p",null,"Now let's take a closer look at the ",(0,i.kt)("inlineCode",{parentName:"p"},"config"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"subscription"),": the ",(0,i.kt)("inlineCode",{parentName:"li"},"graphql")," tagged subscription query."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"variables"),": an object that contains the variables needed for the subscription."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"onCompleted"),": a callback function executed when the subscription is closed by\nthe peer without error."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"onError"),": a callback function executed when Relay or the server encounters an\nerror processing the subscription."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"onNext"),": a callback function executed each time a response is received from\nthe server, with the raw GraphQL response payload."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"updater"),": an optional function that can supply custom logic for updating the\nin-memory Relay store based on the server response."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"configs"),": an array containing the updater configurations. It is the same as ",(0,i.kt)("a",{parentName:"li",href:"./mutations#configs"},(0,i.kt)("inlineCode",{parentName:"a"},"configs"))," in ",(0,i.kt)("inlineCode",{parentName:"li"},"commitMutation"),".")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"In a simple subscription, you only need ",(0,i.kt)("inlineCode",{parentName:"p"},"subscription")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"variables"),". This is\nappropriate when you are only changing the properties of existing records that\ncan be identified by their ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const {\n  requestSubscription,\n  graphql,\n} = require('react-relay');\n\nconst subscription = graphql`\n  subscription MarkReadNotificationSubscription(\n    $storyID: ID!\n  ) {\n    markReadNotification(storyID: $storyID) {\n      notification {\n        seenState\n      }\n    }\n  }\n`;\n\nconst variables = {\n  storyID,\n};\n\nrequestSubscription(\n  yourEnvironment, // see Environment docs\n  {\n    subscription,\n    variables,\n    // optional but recommended:\n    onCompleted: () => {\n      // server closed the subscription\n    },\n    onError: error => console.error(error),\n  }\n);\n")),(0,i.kt)("h1",{id:"updating-the-client-on-each-response"},"Updating the client on each response"),(0,i.kt)("p",null,"For more complex use-cases, you may wish to perform custom logic to update\nRelay's in-memory cache when each subscription response is received. To do so,\npass an ",(0,i.kt)("inlineCode",{parentName:"p"},"updater")," function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const {ConnectionHandler} = require('relay-runtime');\n\nrequestSubscription(\n  environment,\n  {\n    subscription,\n    variables,\n    updater: store => {\n      // Get the notification\n      const rootField = store.getRootField('markReadNotification');\n      const notification = rootField.getLinkedRecord('notification');\n      // Add it to a connection\n      const viewer = store.getRoot().getLinkedRecord('viewer');\n      const notifications =\n        ConnectionHandler.getConnection(viewer, 'notifications');\n      const edge = ConnectionHandler.createEdge(\n        store,\n        notifications,\n        notification,\n        '<TypeOfNotificationsEdge>',\n      );\n      ConnectionHandler.insertEdgeAfter(notifications, edge);\n    },\n  },\n);\n")))}p.isMDXComponent=!0}}]);