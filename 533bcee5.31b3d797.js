(window.webpackJsonp=window.webpackJsonp||[]).push([[368],{1142:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),p=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},m=function(e){var t=p(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),m=p(a),O=n,j=m["".concat(l,".").concat(O)]||m[O]||u[O]||c;return a?r.a.createElement(j,b(b({ref:t},i),{},{components:a})):r.a.createElement(j,b({ref:t},i))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,l=new Array(c);l[0]=O;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:n,l[1]=b;for(var i=2;i<c;i++)l[i]=a[i];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},456:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(8),c=(a(0),a(1142)),l={id:"compatibility-cheatsheet",title:"Compatibility Cheatsheet",original_id:"compatibility-cheatsheet"},b={unversionedId:"compatibility-cheatsheet",id:"version-v1.6.1/compatibility-cheatsheet",isDocsHomePage:!1,title:"Compatibility Cheatsheet",description:"What works with what? Relay Compat ('react-relay/compat') is the most flexible.",source:"@site/versioned_docs/version-v1.6.1/Modern-CompatibilityCheatsheet.md",slug:"/compatibility-cheatsheet",permalink:"/docs/v1.6.1/compatibility-cheatsheet",editUrl:"https://github.com/facebook/relay/edit/master/website/versioned_docs/version-v1.6.1/Modern-CompatibilityCheatsheet.md",version:"v1.6.1",lastUpdatedBy:"Andrey Lunyov",lastUpdatedAt:1618501470,sidebar:"version-v1.6.1/docs",previous:{title:"Converting Mutations",permalink:"/docs/v1.6.1/converting-mutations"},next:{title:"API Cheatsheet",permalink:"/docs/v1.6.1/api-cheatsheet"}},o=[{value:"Can RelayRootContainer use:",id:"can-relayrootcontainer-use",children:[]},{value:"Can QueryRenderer using Classic Environment (<code>Store</code> in <code>react-relay/classic</code>) use:",id:"can-queryrenderer-using-classic-environment-store-in-react-relayclassic-use",children:[]},{value:"Can QueryRenderer using Modern Environment use:",id:"can-queryrenderer-using-modern-environment-use",children:[]},{value:"Can React Modern Component use:",id:"can-react-modern-component-use",children:[]},{value:"Can React Compat Component use:",id:"can-react-compat-component-use",children:[]},{value:"Can React Classic Component use:",id:"can-react-classic-component-use",children:[]}],i={toc:o};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"What works with what? Relay Compat (",Object(c.b)("inlineCode",{parentName:"p"},"'react-relay/compat'"),") is the most flexible.\nCompat components and mutations can be used by everything. Compat components can also have any kind of children."),Object(c.b)("p",null,"However components using the Relay Modern API (",Object(c.b)("inlineCode",{parentName:"p"},"'react-relay'"),") and the Relay Classic API (",Object(c.b)("inlineCode",{parentName:"p"},"'react-relay/classic'"),") cannot be used with each other."),Object(c.b)("h3",{id:"can-relayrootcontainer-use"},"Can RelayRootContainer use:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Classic Component"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Compat Component"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Modern Component"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Classic Mutation"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Compat Mutation"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Modern Mutation"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))),Object(c.b)("h3",{id:"can-queryrenderer-using-classic-environment-store-in-react-relayclassic-use"},"Can QueryRenderer using Classic Environment (",Object(c.b)("inlineCode",{parentName:"h3"},"Store")," in ",Object(c.b)("inlineCode",{parentName:"h3"},"react-relay/classic"),") use:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Classic Component"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Compat Component"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Modern Component"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Classic Mutation"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Compat Mutation"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Modern Mutation"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))),Object(c.b)("h3",{id:"can-queryrenderer-using-modern-environment-use"},"Can QueryRenderer using Modern Environment use:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Classic Component"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Compat Component"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Modern Component"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Classic Mutation"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Compat Mutation"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Modern Mutation"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")))),Object(c.b)("h3",{id:"can-react-modern-component-use"},"Can React Modern Component use:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Classic Component"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Compat Component"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Modern Component"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Classic Mutation"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Compat Mutation"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Modern Mutation"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")))),Object(c.b)("h3",{id:"can-react-compat-component-use"},"Can React Compat Component use:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Classic Component"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Compat Component"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Modern Component"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Classic Mutation"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Compat Mutation"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Modern Mutation"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes","*"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")))),Object(c.b)("p",null,"*"," Modern API doesn't support mutation fragments. You might have to inline the mutation fragments from your legacy mutation in the fragment of the component."),Object(c.b)("h3",{id:"can-react-classic-component-use"},"Can React Classic Component use:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Classic Component"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Compat Component"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Modern Component"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Classic Mutation"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Compat Mutation"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Modern Mutation"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))))}p.isMDXComponent=!0}}]);