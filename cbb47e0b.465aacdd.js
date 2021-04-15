(window.webpackJsonp=window.webpackJsonp||[]).push([[846],{1142:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,f=p["".concat(i,".").concat(m)]||p[m]||b[m]||o;return n?a.a.createElement(f,c(c({ref:t},l),{},{components:n})):a.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},925:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(8),o=(n(0),n(1142)),i={id:"fetch-query",title:"fetchQuery",original_id:"fetch-query"},c={unversionedId:"fetch-query",id:"version-v4.0.0/fetch-query",isDocsHomePage:!1,title:"fetchQuery",description:"You can use the fetchQuery function to imperatively make GraphQL Requests. This is useful for cases where you want to make requests outside of React but still utilize the Relay store and network layer.",source:"@site/versioned_docs/version-v4.0.0/Modern-fetchQuery.md",slug:"/fetch-query",permalink:"/docs/v4.0.0/fetch-query",editUrl:"https://github.com/facebook/relay/edit/master/website/versioned_docs/version-v4.0.0/Modern-fetchQuery.md",version:"v4.0.0",lastUpdatedBy:"Andrey Lunyov",lastUpdatedAt:1618501470,sidebar:"version-v4.0.0/docs",previous:{title:"Relay Store",permalink:"/docs/v4.0.0/relay-store"},next:{title:"Routing",permalink:"/docs/v4.0.0/routing"}},u=[{value:"Arguments",id:"arguments",children:[]},{value:"Return Value",id:"return-value",children:[]}],l={toc:u};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You can use the ",Object(o.b)("inlineCode",{parentName:"p"},"fetchQuery")," function to imperatively make GraphQL Requests. This is useful for cases where you want to make requests outside of React but still utilize the Relay store and network layer."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"import {fetchQuery, graphql} from 'relay-runtime';\n\nconst query = graphql`\n  query ExampleQuery($pageID: ID!) {\n    page(id: $pageID) {\n      name\n    }\n  }\n`;\n\nconst variables = {\n  pageID: '110798995619330',\n};\n\nfetchQuery(environment, query, variables)\n  .then(data => {\n    // access the graphql response\n  });\n")),Object(o.b)("h2",{id:"arguments"},"Arguments"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"environment"),": The ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"./relay-environment"}),"Relay Environment")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"query"),": The ",Object(o.b)("inlineCode",{parentName:"li"},"graphql")," tagged query. ",Object(o.b)("strong",{parentName:"li"},"Note:")," ",Object(o.b)("inlineCode",{parentName:"li"},"relay-compiler")," enforces the query to be named as ",Object(o.b)("inlineCode",{parentName:"li"},"<FileName>Query"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"variables"),": Object containing set of variables to pass to the GraphQL query, i.e. a mapping from variable name to value.")),Object(o.b)("h2",{id:"return-value"},"Return Value"),Object(o.b)("p",null,"The function returns a ",Object(o.b)("inlineCode",{parentName:"p"},"Promise")," that resolves with an object containing data obtained from the query."))}s.isMDXComponent=!0}}]);