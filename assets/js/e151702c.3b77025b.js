(self.webpackChunk=self.webpackChunk||[]).push([[59569],{3905:(e,t,n)=>{"use strict";n.r(t),n.d(t,{MDXContext:()=>l,MDXProvider:()=>u,mdx:()=>y,useMDXComponents:()=>d,withMDXComponents:()=>p});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){return function(t){var n=d(t.components);return o.createElement(e,a({},t,{components:n}))}},d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(n),u=r,f=p["".concat(i,".").concat(u)]||p[u]||m[u]||a;return n?o.createElement(f,c(c({ref:t},l),{},{components:n})):o.createElement(f,c({ref:t},l))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},33877:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>c,contentTitle:()=>s,metadata:()=>l,toc:()=>p,default:()=>u});var o=n(74034),r=n(79973),a=(n(67294),n(3905)),i=["components"],c={id:"introduction-to-relay",title:"Introduction to Relay",original_id:"introduction-to-relay",slug:"/"},s=void 0,l={unversionedId:"introduction-to-relay",id:"version-v10.1.0/introduction-to-relay",isDocsHomePage:!1,title:"Introduction to Relay",description:"Relay is a JavaScript framework for building data-driven React applications powered by GraphQL, designed from the ground up to be easy to use, extensible and, most of all, performant. Relay accomplishes this with static queries and ahead-of-time code generation.",source:"@site/versioned_docs/version-v10.1.0/Introduction-IntroductionToRelay.md",sourceDirName:".",slug:"/",permalink:"/docs/v10.1.0/",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v10.1.0/Introduction-IntroductionToRelay.md",tags:[],version:"v10.1.0",lastUpdatedBy:"Jianfeng Chen",lastUpdatedAt:1656434206,formattedLastUpdatedAt:"6/28/2022",frontMatter:{id:"introduction-to-relay",title:"Introduction to Relay",original_id:"introduction-to-relay",slug:"/"},sidebar:"version-v10.1.0/docs",next:{title:"Prerequisites",permalink:"/docs/v10.1.0/prerequisites"}},p=[],d={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.mdx)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"Relay is a JavaScript framework for building data-driven React applications powered by GraphQL, designed from the ground up to be easy to use, extensible and, most of all, performant. Relay accomplishes this with static queries and ahead-of-time code generation."),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"https://facebook.github.io/react/"},"React")," allows views to be defined as components where every component is responsible for rendering a part of the UI. Composing other components is how to build complex UIs. Each React component doesn't need to know the inner workings of the composed components."),(0,a.mdx)("p",null,"Relay couples React with GraphQL and develops the idea of encapsulation further. It allows components to specify what data they need and the Relay framework provides the data. This makes the data needs of inner components opaque and allows composition of those needs. Thinking about what data an app needs becomes localized to the component making it easier to reason about what fields are needed or no longer needed."))}u.isMDXComponent=!0}}]);