"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[50386,8710,97150,56435],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>l,MDXProvider:()=>m,mdx:()=>b,useMDXComponents:()=>c,withMDXComponents:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){return function(t){var n=c(t.components);return r.createElement(e,i({},t,{components:n}))}},c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(o,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,s(s({ref:t},l),{},{components:n})):r.createElement(f,s({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},68629:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(39960),a=n(86341),i=n(67294);function o(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function s(e){var t=e.children;return i.createElement("div",{className:"docsRating",id:"docsRating"},i.createElement("hr",null),t)}var p=function(){var e=i.useState(!1),t=e[0],n=e[1],r=function(e){n(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?"Thank you for letting us know!":i.createElement(i.Fragment,null,"Is this page useful?",i.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(1)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),i.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(0)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},l=function(){return i.createElement("p",null,"Let us know how these docs can be improved by",i.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:o},"Filing a task"))},d=function(){return i.createElement("p",null,"Help us make the site even better by"," ",i.createElement(r.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},c=function(){return i.createElement(s,null,i.createElement(l,null),i.createElement(p,null),i.createElement(d,null))},m=function(){return i.createElement(s,null,i.createElement(p,null),i.createElement(d,null))};const u=function(){return(0,a.fbContent)({internal:i.createElement(c,null),external:i.createElement(m,null)})}},75530:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>m,toc:()=>f});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),o=n(68629),s=n(86341),p=n(38085),l=["components"],d={id:"use-subscription",title:"useSubscription",slug:"/api-reference/use-subscription/",description:"API reference for useSubscription, a React hook used to subscribe and unsubscribe from a subscription",keywords:["subscription"]},c=void 0,m={unversionedId:"api-reference/hooks/use-subscription",id:"version-v13.0.0/api-reference/hooks/use-subscription",title:"useSubscription",description:"API reference for useSubscription, a React hook used to subscribe and unsubscribe from a subscription",source:"@site/versioned_docs/version-v13.0.0/api-reference/hooks/use-subscription.md",sourceDirName:"api-reference/hooks",slug:"/api-reference/use-subscription/",permalink:"/docs/v13.0.0/api-reference/use-subscription/",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v13.0.0/api-reference/hooks/use-subscription.md",tags:[],version:"v13.0.0",lastUpdatedBy:"Monica Tang",lastUpdatedAt:1707780434,formattedLastUpdatedAt:"Feb 12, 2024",frontMatter:{id:"use-subscription",title:"useSubscription",slug:"/api-reference/use-subscription/",description:"API reference for useSubscription, a React hook used to subscribe and unsubscribe from a subscription",keywords:["subscription"]},sidebar:"version-v13.0.0/docs",previous:{title:"useMutation",permalink:"/docs/v13.0.0/api-reference/use-mutation/"},next:{title:"useEntryPointLoader",permalink:"/docs/v13.0.0/api-reference/use-entrypoint-loader/"}},u={},f=[{value:"<code>useSubscription</code>",id:"usesubscription",level:2},{value:"Arguments",id:"arguments",level:3},{value:"Flow Type Parameters",id:"flow-type-parameters",level:3},{value:"Behavior",id:"behavior",level:3}],b={toc:f};function h(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.mdx)("wrapper",(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h2",{id:"usesubscription"},(0,i.mdx)("inlineCode",{parentName:"h2"},"useSubscription")),(0,i.mdx)("p",null,"Hook used to subscribe and unsubscribe to a subscription."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"import {graphql, useSubscription} from 'react-relay';\nimport {useMemo} from 'react';\n\nconst subscription = graphql`\n  subscription UserDataSubscription($input: InputData!) {\n    # ...\n  }\n`;\n\nfunction UserComponent({ id }) {\n  // IMPORTANT: your config should be memoized.\n  // Otherwise, useSubscription will re-render too frequently.\n  const config = useMemo(() => ({\n    variables: {id},\n    subscription,\n  }), [id, subscription]);\n\n  useSubscription(config);\n\n  return (/* ... */);\n}\n")),(0,i.mdx)("h3",{id:"arguments"},"Arguments"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"config"),": a config of type ",(0,i.mdx)("a",{parentName:"li",href:"#type-graphqlsubscriptionconfigtsubscriptionpayload"},(0,i.mdx)("inlineCode",{parentName:"a"},"GraphQLSubscriptionConfig"))," passed to ",(0,i.mdx)("a",{parentName:"li",href:"../request-subscription/"},(0,i.mdx)("inlineCode",{parentName:"a"},"requestSubscription"))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"requestSubscriptionFn"),": ",(0,i.mdx)("inlineCode",{parentName:"li"},"?<TSubscriptionPayload>(IEnvironment, GraphQLSubscriptionConfig<TSubscriptionPayload>) => Disposable"),". An optional function with the same signature as ",(0,i.mdx)("a",{parentName:"li",href:"../request-subscription/"},(0,i.mdx)("inlineCode",{parentName:"a"},"requestSubscription")),", which will be called in its stead. Defaults to ",(0,i.mdx)("inlineCode",{parentName:"li"},"requestSubscription"),".")),(0,i.mdx)(p.default,{mdxType:"GraphQLSubscriptionConfig"}),(0,i.mdx)("h3",{id:"flow-type-parameters"},"Flow Type Parameters"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"TSubscriptionPayload"),": The type of the payloads vended by the subscription. You should pass the flow type imported from the auto-generated ",(0,i.mdx)("inlineCode",{parentName:"li"},".graphql")," file corresponding to the subscription, e.g. use ",(0,i.mdx)("inlineCode",{parentName:"li"},"UserDataSubscription")," as the type parameter, from ",(0,i.mdx)("inlineCode",{parentName:"li"},"import type {UserDataSubscription} from './__generated__/UserDataSubscription.graphql'"),";")),(0,i.mdx)("h3",{id:"behavior"},"Behavior"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"This is only a thin wrapper around the ",(0,i.mdx)("inlineCode",{parentName:"li"},"requestSubscription")," API. It will:",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"Subscribe when the component is mounted with the given config"),(0,i.mdx)("li",{parentName:"ul"},"Unsubscribe when the component is unmounted"),(0,i.mdx)("li",{parentName:"ul"},"Unsubscribe and resubscribe with new values if the environment, config or ",(0,i.mdx)("inlineCode",{parentName:"li"},"requestSubscriptionFn")," changes."))),(0,i.mdx)("li",{parentName:"ul"},"If you have the need to do something more complicated, such as imperatively requesting a subscription, please use the ",(0,i.mdx)("a",{parentName:"li",href:"../request-subscription/"},(0,i.mdx)("inlineCode",{parentName:"a"},"requestSubscription"))," API directly."),(0,i.mdx)("li",{parentName:"ul"},"See the ",(0,i.mdx)("a",{parentName:"li",href:"../../guided-tour/updating-data/graphql-subscriptions/"},"GraphQL Subscriptions Guide")," for a more detailed explanation of how to work with subscriptions.")),(0,i.mdx)(s.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,i.mdx)("admonition",{type:"note"},(0,i.mdx)("p",{parentName:"admonition"},(0,i.mdx)("inlineCode",{parentName:"p"},"useSubscription")," doesn't automatically add ",(0,i.mdx)("inlineCode",{parentName:"p"},"client_subscription_id"),". You may need to provide an arbitrary ",(0,i.mdx)("inlineCode",{parentName:"p"},"client_subscription_id")," to ",(0,i.mdx)("inlineCode",{parentName:"p"},"config.variables.input")))),(0,i.mdx)(o.Z,{mdxType:"DocsRating"}))}h.isMDXComponent=!0},55723:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),o=["components"],s={},p=void 0,l={unversionedId:"api-reference/types/CacheConfig",id:"version-v13.0.0/api-reference/types/CacheConfig",title:"CacheConfig",description:"Type CacheConfig",source:"@site/versioned_docs/version-v13.0.0/api-reference/types/CacheConfig.md",sourceDirName:"api-reference/types",slug:"/api-reference/types/CacheConfig",permalink:"/docs/v13.0.0/api-reference/types/CacheConfig",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v13.0.0/api-reference/types/CacheConfig.md",tags:[],version:"v13.0.0",lastUpdatedBy:"Monica Tang",lastUpdatedAt:1707780434,formattedLastUpdatedAt:"Feb 12, 2024",frontMatter:{}},d={},c=[{value:"Type <code>CacheConfig</code>",id:"type-cacheconfig",level:4}],m={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.mdx)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h4",{id:"type-cacheconfig"},"Type ",(0,i.mdx)("inlineCode",{parentName:"h4"},"CacheConfig")),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"An object with the following fields:",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"force"),": ",(0,i.mdx)("em",{parentName:"li"},(0,i.mdx)("em",{parentName:"em"},"[Optional]"))," A boolean. If true, causes a query to be issued unconditionally, regardless of the state of any configured response cache."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"poll"),": ",(0,i.mdx)("em",{parentName:"li"},(0,i.mdx)("em",{parentName:"em"},"[Optional]"))," A number. Causes a query to live-update by polling at the specified interval, in milliseconds. (This value will be passed to ",(0,i.mdx)("inlineCode",{parentName:"li"},"setTimeout"),")."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"liveConfigId"),": ",(0,i.mdx)("em",{parentName:"li"},(0,i.mdx)("em",{parentName:"em"},"[Optional]"))," A string. Causes a query to live-update by calling GraphQLLiveQuery; it represents a configuration of gateway when doing live query."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"metadata"),": ",(0,i.mdx)("em",{parentName:"li"},(0,i.mdx)("em",{parentName:"em"},"[Optional]"))," An object. User-supplied metadata."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"transactionId"),": ",(0,i.mdx)("em",{parentName:"li"},(0,i.mdx)("em",{parentName:"em"},"[Optional]"))," A string. A user-supplied value, intended for use as a unique id for a given instance of executing an operation.")))))}u.isMDXComponent=!0},38085:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>b,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),o=n(88842),s=n(55723),p=["components"],l={},d=void 0,c={unversionedId:"api-reference/types/GraphQLSubscriptionConfig",id:"version-v13.0.0/api-reference/types/GraphQLSubscriptionConfig",title:"GraphQLSubscriptionConfig",description:"Type GraphQLSubscriptionConfig",source:"@site/versioned_docs/version-v13.0.0/api-reference/types/GraphQLSubscriptionConfig.md",sourceDirName:"api-reference/types",slug:"/api-reference/types/GraphQLSubscriptionConfig",permalink:"/docs/v13.0.0/api-reference/types/GraphQLSubscriptionConfig",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v13.0.0/api-reference/types/GraphQLSubscriptionConfig.md",tags:[],version:"v13.0.0",lastUpdatedBy:"Monica Tang",lastUpdatedAt:1707780434,formattedLastUpdatedAt:"Feb 12, 2024",frontMatter:{}},m={},u=[{value:"Type <code>GraphQLSubscriptionConfig&lt;TSubscriptionPayload&gt;</code>",id:"type-graphqlsubscriptionconfigtsubscriptionpayload",level:4}],f={toc:u};function b(e){var t=e.components,n=(0,a.Z)(e,p);return(0,i.mdx)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h4",{id:"type-graphqlsubscriptionconfigtsubscriptionpayload"},"Type ",(0,i.mdx)("inlineCode",{parentName:"h4"},"GraphQLSubscriptionConfig<TSubscriptionPayload>")),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"An object with the following fields:",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"cacheConfig"),": ",(0,i.mdx)("em",{parentName:"li"},(0,i.mdx)("em",{parentName:"em"},"[Optional]"))," ",(0,i.mdx)("a",{parentName:"li",href:"#type-cacheconfig"},(0,i.mdx)("inlineCode",{parentName:"a"},"CacheConfig"))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"subscription"),": ",(0,i.mdx)("inlineCode",{parentName:"li"},"GraphQLTaggedNode"),". A GraphQL subscription specified using a ",(0,i.mdx)("inlineCode",{parentName:"li"},"graphql")," template literal"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"variables"),": The variables to pass to the subscription"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"onCompleted"),": ",(0,i.mdx)("em",{parentName:"li"},(0,i.mdx)("em",{parentName:"em"},"[Optional]"))," ",(0,i.mdx)("inlineCode",{parentName:"li"},"() => void"),". An optional callback that is executed when the subscription is established"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"onError"),": ",(0,i.mdx)("em",{parentName:"li"},(0,i.mdx)("em",{parentName:"em"},"[Optional]"))," ",(0,i.mdx)("inlineCode",{parentName:"li"},"(Error) => {}"),". An optional callback that is executed when an error occurs"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"onNext"),": ",(0,i.mdx)("em",{parentName:"li"},(0,i.mdx)("em",{parentName:"em"},"[Optional]"))," ",(0,i.mdx)("inlineCode",{parentName:"li"},"(TSubscriptionPayload) => {}"),". An optional callback that is executed when new data is received"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"updater"),": ",(0,i.mdx)("em",{parentName:"li"},(0,i.mdx)("em",{parentName:"em"},"[Optional]"))," ",(0,i.mdx)("a",{parentName:"li",href:"#type-selectorstoreupdater"},(0,i.mdx)("inlineCode",{parentName:"a"},"SelectorStoreUpdater")),".")))),(0,i.mdx)(s.default,{mdxType:"CacheConfig"}),(0,i.mdx)(o.default,{mdxType:"SelectorStoreUpdater"}))}b.isMDXComponent=!0},88842:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>p,metadata:()=>d,toc:()=>m});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),o=n(44996),s=["components"],p={},l=void 0,d={unversionedId:"api-reference/types/SelectorStoreUpdater",id:"version-v13.0.0/api-reference/types/SelectorStoreUpdater",title:"SelectorStoreUpdater",description:"Type SelectorStoreUpdater",source:"@site/versioned_docs/version-v13.0.0/api-reference/types/SelectorStoreUpdater.md",sourceDirName:"api-reference/types",slug:"/api-reference/types/SelectorStoreUpdater",permalink:"/docs/v13.0.0/api-reference/types/SelectorStoreUpdater",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v13.0.0/api-reference/types/SelectorStoreUpdater.md",tags:[],version:"v13.0.0",lastUpdatedBy:"Monica Tang",lastUpdatedAt:1707780434,formattedLastUpdatedAt:"Feb 12, 2024",frontMatter:{}},c={},m=[{value:"Type <code>SelectorStoreUpdater</code>",id:"type-selectorstoreupdater",level:4}],u={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.mdx)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h4",{id:"type-selectorstoreupdater"},"Type ",(0,i.mdx)("inlineCode",{parentName:"h4"},"SelectorStoreUpdater")),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"A function with signature ",(0,i.mdx)("inlineCode",{parentName:"li"},"(store: RecordSourceSelectorProxy, data) => void")),(0,i.mdx)("li",{parentName:"ul"},"This interface allows you to ",(0,i.mdx)("em",{parentName:"li"},"imperatively")," write and read data directly to and from the Relay store. This means that you have full control over how to update the store in response to the subscription payload: you can ",(0,i.mdx)("em",{parentName:"li"},"create entirely new records"),", or ",(0,i.mdx)("em",{parentName:"li"},"update or delete existing ones"),". The full API for reading and writing to the Relay store is available ",(0,i.mdx)("a",{href:(0,o.default)("docs/api-reference/store/#recordsourceselectorproxy")},"here"),".")))}f.isMDXComponent=!0}}]);