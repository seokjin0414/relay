"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[91581],{3905:(e,r,t)=>{t.r(r),t.d(r,{MDXContext:()=>u,MDXProvider:()=>m,mdx:()=>y,useMDXComponents:()=>c,withMDXComponents:()=>s});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},o.apply(this,arguments)}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var u=a.createContext({}),s=function(e){return function(r){var t=c(r.components);return a.createElement(e,o({},r,{components:t}))}},c=function(e){var r=a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},m=function(e){var r=c(e.components);return a.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},h=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),s=c(t),m=n,h=s["".concat(i,".").concat(m)]||s[m]||p[m]||o;return t?a.createElement(h,l(l({ref:r},u),{},{components:t})):a.createElement(h,l({ref:r},u))}));function y(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=h;var l={};for(var d in r)hasOwnProperty.call(r,d)&&(l[d]=r[d]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},68629:(e,r,t)=>{t.d(r,{Z:()=>p});var a=t(39960),n=t(86341),o=t(67294);function i(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function l(e){var r=e.children;return o.createElement("div",{className:"docsRating",id:"docsRating"},o.createElement("hr",null),r)}var d=function(){var e=o.useState(!1),r=e[0],t=e[1],a=function(e){t(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return r?"Thank you for letting us know!":o.createElement(o.Fragment,null,"Is this page useful?",o.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(1)}},o.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),o.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(0)}},o.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},u=function(){return o.createElement("p",null,"Let us know how these docs can be improved by",o.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:i},"Filing a task"))},s=function(){return o.createElement("p",null,"Help us make the site even better by"," ",o.createElement(a.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},c=function(){return o.createElement(l,null,o.createElement(u,null),o.createElement(d,null),o.createElement(s,null))},m=function(){return o.createElement(l,null,o.createElement(d,null),o.createElement(s,null))};const p=function(){return(0,n.fbContent)({internal:o.createElement(c,null),external:o.createElement(m,null)})}},82573:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>d,metadata:()=>s,toc:()=>m});var a=t(83117),n=t(80102),o=(t(67294),t(3905)),i=t(68629),l=(t(86341),["components"]),d={id:"load-query",title:"loadQuery",slug:"/api-reference/load-query/",description:"API reference for loadQuery, which imperatively fetches data for a query, retains that query and returns a query reference",keywords:["preload","fetch","query","render-as-you-fetch","retain","query reference"]},u=void 0,s={unversionedId:"api-reference/hooks/load-query",id:"version-v13.0.0/api-reference/hooks/load-query",title:"loadQuery",description:"API reference for loadQuery, which imperatively fetches data for a query, retains that query and returns a query reference",source:"@site/versioned_docs/version-v13.0.0/api-reference/hooks/load-query.md",sourceDirName:"api-reference/hooks",slug:"/api-reference/load-query/",permalink:"/docs/v13.0.0/api-reference/load-query/",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v13.0.0/api-reference/hooks/load-query.md",tags:[],version:"v13.0.0",lastUpdatedBy:"facebook-github-bot",lastUpdatedAt:1713548961,formattedLastUpdatedAt:"Apr 19, 2024",frontMatter:{id:"load-query",title:"loadQuery",slug:"/api-reference/load-query/",description:"API reference for loadQuery, which imperatively fetches data for a query, retains that query and returns a query reference",keywords:["preload","fetch","query","render-as-you-fetch","retain","query reference"]},sidebar:"version-v13.0.0/docs",previous:{title:"useQueryLoader",permalink:"/docs/v13.0.0/api-reference/use-query-loader/"},next:{title:"useLazyLoadQuery",permalink:"/docs/v13.0.0/api-reference/use-lazy-load-query/"}},c={},m=[{value:"<code>loadQuery</code>",id:"loadquery",level:2},{value:"Arguments",id:"arguments",level:3},{value:"Flow Type Parameters",id:"flow-type-parameters",level:3},{value:"Return Value",id:"return-value",level:3},{value:"Behavior",id:"behavior",level:3}],p={toc:m};function h(e){var r=e.components,t=(0,n.Z)(e,l);return(0,o.mdx)("wrapper",(0,a.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.mdx)("h2",{id:"loadquery"},(0,o.mdx)("inlineCode",{parentName:"h2"},"loadQuery")),(0,o.mdx)("p",null,"This function is designed to be used with the ",(0,o.mdx)("inlineCode",{parentName:"p"},"usePreloadedQuery()"),' hook to implement the "render-as-you-fetch".'),(0,o.mdx)("p",null,"Query references returned from ",(0,o.mdx)("inlineCode",{parentName:"p"},"loadQuery")," will leak data into the Relay store if ",(0,o.mdx)("inlineCode",{parentName:"p"},".dispose()")," is not called on them once they are no longer referenced. As such, prefer calling ",(0,o.mdx)("inlineCode",{parentName:"p"},"useQueryLoader")," when possible, which ensures that query references are disposed for you."),(0,o.mdx)("p",null,"See the ",(0,o.mdx)("a",{parentName:"p",href:"../use-preloaded-query"},(0,o.mdx)("inlineCode",{parentName:"a"},"usePreloadedQuery"))," docs for a more complete example."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"const MyEnvironment = require('MyEnvironment');\nconst {loadQuery} = require('react-relay');\n\nconst query = graphql`\n  query AppQuery($id: ID!) {\n    user(id: $id) {\n      name\n    }\n  }\n`;\n\n// Note: you should generally not call loadQuery at the top level.\n// Instead, it should be called in response to an event (such a route navigation,\n// click, etc.).\nconst queryReference = loadQuery(\n  MyEnvironment,\n  query,\n  {id: '4'},\n  {fetchPolicy: 'store-or-network'},\n);\n\n// later: pass queryReference to usePreloadedQuery()\n// Note that query reference should have .dispose() called on them,\n// which is missing in this example.\n")),(0,o.mdx)("h3",{id:"arguments"},"Arguments"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"environment"),": A Relay Environment instance on which to execute the request. If you're starting this request somewhere within a React component, you probably want to use the environment you obtain from using ",(0,o.mdx)("a",{parentName:"li",href:"#userelayenvironment"},(0,o.mdx)("inlineCode",{parentName:"a"},"useRelayEnvironment")),"."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"query"),": GraphQL query to fetch, specified using a ",(0,o.mdx)("inlineCode",{parentName:"li"},"graphql")," template literal, or a preloadable concrete request, which can be acquired by requiring the file ",(0,o.mdx)("inlineCode",{parentName:"li"},"<name-of-query>$Parameters.graphql"),". Relay will only generate the ",(0,o.mdx)("inlineCode",{parentName:"li"},"$Parameters")," file if the query is annotated with ",(0,o.mdx)("inlineCode",{parentName:"li"},"@preloadable"),"."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"variables"),": Object containing the variable values to fetch the query. These variables need to match GraphQL variables declared inside the query."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"options"),": ",(0,o.mdx)("em",{parentName:"li"},(0,o.mdx)("em",{parentName:"em"},"[Optional]"))," options object",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"fetchPolicy"),": Determines if cached data should be used, and whether to send a network request based on the cached data that is currently available in the Relay store (for more details, see our ",(0,o.mdx)("a",{parentName:"li",href:"../../guided-tour/reusing-cached-data/fetch-policies"},"Fetch Policies")," and ",(0,o.mdx)("a",{parentName:"li",href:"../../guided-tour/reusing-cached-data/availability-of-data"},"Garbage Collection")," guides):",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},'"store-or-network": ',(0,o.mdx)("strong",{parentName:"li"},"(default)")," ",(0,o.mdx)("em",{parentName:"li"},"will")," reuse locally cached data and will ",(0,o.mdx)("em",{parentName:"li"},"only")," send a network request if any data for the query is missing. If the query is fully cached, a network request will ",(0,o.mdx)("em",{parentName:"li"},"not")," be made."),(0,o.mdx)("li",{parentName:"ul"},'"store-and-network": ',(0,o.mdx)("em",{parentName:"li"},"will")," reuse locally cached data and will ",(0,o.mdx)("em",{parentName:"li"},"always")," send a network request, regardless of whether any data was missing from the local cache or not."),(0,o.mdx)("li",{parentName:"ul"},'"network-only": ',(0,o.mdx)("em",{parentName:"li"},"will not")," reuse locally cached data, and will ",(0,o.mdx)("em",{parentName:"li"},"always")," send a network request to fetch the query, ignoring any data that might be locally cached in Relay."))),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"networkCacheConfig"),": ",(0,o.mdx)("em",{parentName:"li"},(0,o.mdx)("em",{parentName:"em"},"[Optional]"))," Default value: ",(0,o.mdx)("inlineCode",{parentName:"li"},"{force: true}"),". Object containing cache config options for the ",(0,o.mdx)("em",{parentName:"li"},"network layer"),". Note that the network layer may contain an ",(0,o.mdx)("em",{parentName:"li"},"additional")," query response cache which will reuse network responses for identical queries. If you want to bypass this cache completely (which is the default behavior), pass ",(0,o.mdx)("inlineCode",{parentName:"li"},"{force: true}")," as the value for this option."))),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"environmentProviderOptions"),": ",(0,o.mdx)("em",{parentName:"li"},"[Optional]")," options object",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"Options passed to an ",(0,o.mdx)("inlineCode",{parentName:"li"},"environmentProvider")," used in ",(0,o.mdx)("inlineCode",{parentName:"li"},"prepareSurfaceEntryPoint.js"),".")))),(0,o.mdx)("h3",{id:"flow-type-parameters"},"Flow Type Parameters"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"TQuery"),": Type parameter that should correspond to the Flow type for the specified query. This type is available to import from the the auto-generated file: ",(0,o.mdx)("inlineCode",{parentName:"li"},"<query_name>.graphql.js"),"."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"TEnvironmentProviderOptions"),": The type of the ",(0,o.mdx)("inlineCode",{parentName:"li"},"environmentProviderOptions")," parameter.")),(0,o.mdx)("h3",{id:"return-value"},"Return Value"),(0,o.mdx)("p",null,"A query reference with the following properties:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"dispose"),": a method that will release the query reference from being retained by the store. This can cause the data referenced by the query reference to be garbage collected.")),(0,o.mdx)("p",null,"The exact format of the return value is ",(0,o.mdx)("em",{parentName:"p"},"unstable and highly likely to change"),". We strongly recommend not using any other properties of the return value, as such code would be highly likely to break when upgrading to future versions of Relay. Instead, pass the result of ",(0,o.mdx)("inlineCode",{parentName:"p"},"loadQuery()")," to ",(0,o.mdx)("inlineCode",{parentName:"p"},"usePreloadedQuery()"),"."),(0,o.mdx)("h3",{id:"behavior"},"Behavior"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"loadQuery()")," will fetch data if passed a query, or data and the query if passed a preloadable concrete request. Once both the query and data are available, the data from the query will be written to the store. This differs from the behavior of ",(0,o.mdx)("inlineCode",{parentName:"li"},"preloadQuery_DEPRECATED"),", which would only write data to the store if the query was passed to ",(0,o.mdx)("inlineCode",{parentName:"li"},"usePreloadedQuery"),"."),(0,o.mdx)("li",{parentName:"ul"},"the query reference returned from ",(0,o.mdx)("inlineCode",{parentName:"li"},"loadQuery")," will be retained by the relay store, preventing it the data from being garbage collected. Once you call ",(0,o.mdx)("inlineCode",{parentName:"li"},".dispose()")," on the query reference, it can be garbage collected."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"loadQuery()")," will throw an error if it is called during React's render phase.")),(0,o.mdx)(i.Z,{mdxType:"DocsRating"}))}h.isMDXComponent=!0}}]);