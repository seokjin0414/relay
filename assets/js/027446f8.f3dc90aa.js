"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[74569],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>s,MDXProvider:()=>d,mdx:()=>f,useMDXComponents:()=>u,withMDXComponents:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){return function(t){var n=u(t.components);return r.createElement(e,o({},t,{components:n}))}},u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=u(n),d=a,y=c["".concat(i,".").concat(d)]||c[d]||m[d]||o;return n?r.createElement(y,l(l({ref:t},s),{},{components:n})):r.createElement(y,l({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=y;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},74882:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=["components"],l={id:"migration-setup",title:"Migration Setup",original_id:"migration-setup"},p=void 0,s={unversionedId:"migration-setup",id:"version-v1.7.0/migration-setup",title:"Migration Setup",description:"Installation",source:"@site/versioned_docs/version-v1.7.0/Modern-MigrationSetup.md",sourceDirName:".",slug:"/migration-setup",permalink:"/docs/v1.7.0/migration-setup",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v1.7.0/Modern-MigrationSetup.md",tags:[],version:"v1.7.0",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1705600135,formattedLastUpdatedAt:"Jan 18, 2024",frontMatter:{id:"migration-setup",title:"Migration Setup",original_id:"migration-setup"},sidebar:"version-v1.7.0/docs",previous:{title:"Compatibility Mode",permalink:"/docs/v1.7.0/relay-compat"},next:{title:"Conversion Playbook",permalink:"/docs/v1.7.0/conversion-playbook"}},c={},u=[{value:"Installation",id:"installation",level:2},{value:"Set up babel-plugin-relay for Relay Classic",id:"set-up-babel-plugin-relay-for-relay-classic",level:2},{value:"Set up babel-plugin-relay for &quot;compatibility mode&quot;",id:"set-up-babel-plugin-relay-for-compatibility-mode",level:2},{value:"Additional Options",id:"additional-options",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.mdx)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h2",{id:"installation"},"Installation"),(0,o.mdx)("p",null,"Follow the installation instructions from the ",(0,o.mdx)("a",{parentName:"p",href:"/docs/v1.7.0/installation-and-setup"},"Installation and Setup")," guide."),(0,o.mdx)("h2",{id:"set-up-babel-plugin-relay-for-relay-classic"},"Set up babel-plugin-relay for Relay Classic"),(0,o.mdx)("p",null,"With some additional configuration, the ",(0,o.mdx)("inlineCode",{parentName:"p"},'"relay"')," babel plugin can also translate\nRelay Classic ",(0,o.mdx)("inlineCode",{parentName:"p"},"Relay.QL")," literals. Most importantly, include a reference to your GraphQL Schema as either a json file or graphql schema file."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},'{\n  "plugins": [\n    ["relay", {"schema": "path/schema.graphql"}]\n  ]\n}\n')),(0,o.mdx)("h2",{id:"set-up-babel-plugin-relay-for-compatibility-mode"},'Set up babel-plugin-relay for "',(0,o.mdx)("a",{parentName:"h2",href:"/docs/v1.7.0/relay-compat"},"compatibility mode"),'"'),(0,o.mdx)("p",null,"When incrementally converting a Relay Classic app to Relay Modern, ",(0,o.mdx)("inlineCode",{parentName:"p"},"graphql"),"\nliterals can be translated to be usable by ",(0,o.mdx)("em",{parentName:"p"},"both")," runtimes if configured to use\ncompatibility mode:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},'{\n  "plugins": [\n    ["relay", {"compat": true, "schema": "path/schema.graphql"}]\n  ]\n}\n')),(0,o.mdx)("h2",{id:"additional-options"},"Additional Options"),(0,o.mdx)("p",null,"The Relay Classic and Relay Compat modes produce generated content inline and may\ncatch and log any detected GraphQL validation errors, leaving those errors to be\nthrown at runtime."),(0,o.mdx)("p",null,"When compiling code for production deployment, the plugin can be configured to immediately throw upon encountering a validation problem. The plugin can be further customized for different environments with the following options:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},'{\n  "plugins": [\n    ["relay", {\n      "compat": true,\n      "schema": "path/schema.graphql",\n    }]\n  ]\n}\n')))}m.isMDXComponent=!0}}]);