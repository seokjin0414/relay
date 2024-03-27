"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[90563],{3905:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>c,MDXProvider:()=>u,mdx:()=>v,useMDXComponents:()=>s,withMDXComponents:()=>p});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),p=function(e){return function(t){var r=s(t.components);return n.createElement(e,a({},t,{components:r}))}},s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):d(d({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(r),u=i,g=p["".concat(o,".").concat(u)]||p[u]||m[u]||a;return r?n.createElement(g,d(d({ref:t},c),{},{components:r})):n.createElement(g,d({ref:t},c))}));function v(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=g;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:i,o[1]=d;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},23646:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>v,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var n,i=r(83117),a=r(80102),o=(r(67294),r(3905)),d=["components"],l={id:"declarative-mutation-directives",title:"Debugging Declarative Mutation Directives",slug:"/debugging/declarative-mutation-directives/",description:"Debugging declarative mutation directives",keywords:["debugging","troubleshooting","declarative mutation directive","deleteRecord","handlerProvider","appendEdge","prependEdge","appendNode","prependNode"]},c=void 0,p={unversionedId:"debugging/declarative-mutation-directives",id:"version-v14.0.0/debugging/declarative-mutation-directives",title:"Debugging Declarative Mutation Directives",description:"Debugging declarative mutation directives",source:"@site/versioned_docs/version-v14.0.0/debugging/declarative-mutation-directives.md",sourceDirName:"debugging",slug:"/debugging/declarative-mutation-directives/",permalink:"/docs/v14.0.0/debugging/declarative-mutation-directives/",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v14.0.0/debugging/declarative-mutation-directives.md",tags:[],version:"v14.0.0",lastUpdatedBy:"J.T. Conklin",lastUpdatedAt:1711581825,formattedLastUpdatedAt:"Mar 27, 2024",frontMatter:{id:"declarative-mutation-directives",title:"Debugging Declarative Mutation Directives",slug:"/debugging/declarative-mutation-directives/",description:"Debugging declarative mutation directives",keywords:["debugging","troubleshooting","declarative mutation directive","deleteRecord","handlerProvider","appendEdge","prependEdge","appendNode","prependNode"]},sidebar:"docs",previous:{title:"Inconsistent Typename Error",permalink:"/docs/v14.0.0/debugging/inconsistent-typename-error/"},next:{title:"Why Is My Field Null?",permalink:"/docs/v14.0.0/debugging/why-null/"}},s={},u=[],m=(n="FbEnvHandlerExample",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",e)}),g={toc:u};function v(e){var t=e.components,r=(0,a.Z)(e,d);return(0,o.mdx)("wrapper",(0,i.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"If you see an error similar to:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"RelayFBHandlerProvider: No handler defined for `deleteRecord`. [Caught in: An uncaught error was thrown inside `RelayObservable`.]\n")),(0,o.mdx)("p",null,"or"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"RelayModernEnvironment: Expected a handler to be provided for handle `deleteRecord`.\n")),(0,o.mdx)("p",null,"This probably means that you are using a Relay environment to which a ",(0,o.mdx)("inlineCode",{parentName:"p"},"handlerProvider")," is passed. However, the handler provider does not know how to accept the handles ",(0,o.mdx)("inlineCode",{parentName:"p"},'"deleteRecord"'),", ",(0,o.mdx)("inlineCode",{parentName:"p"},'"appendEdge"')," or ",(0,o.mdx)("inlineCode",{parentName:"p"},'"prependEdge"'),". If this is the case, you should return ",(0,o.mdx)("inlineCode",{parentName:"p"},"MutationHandlers.DeleteRecordHandler"),", ",(0,o.mdx)("inlineCode",{parentName:"p"},"MutationHandlers.AppendEdgeHandler"),", or ",(0,o.mdx)("inlineCode",{parentName:"p"},"MutationHandlers.PrependEdgeHandler")," respectively (these can be imported from ",(0,o.mdx)("inlineCode",{parentName:"p"},"relay-runtime"),")."),(0,o.mdx)(m,{mdxType:"FbEnvHandlerExample"}))}v.isMDXComponent=!0}}]);