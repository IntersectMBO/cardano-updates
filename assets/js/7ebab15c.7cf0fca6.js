"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[41088],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),u=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(r),s=n,d=m["".concat(p,".").concat(s)]||m[s]||h[s]||i;return r?a.createElement(d,o(o({ref:t},c),{},{components:r})):a.createElement(d,o({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:n,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},1192:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const i={title:"Hydra Team Update",slug:"2024-06-10-hydra",authors:["locallycompact"],tags:["hydra"],hide_table_of_contents:!1},o=void 0,l={permalink:"/2024-06-10-hydra",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2024-06-10-hydra.md",source:"@site/blog/2024-06-10-hydra.md",title:"Hydra Team Update",description:"High-level Summary",date:"2024-06-10T00:00:00.000Z",formattedDate:"June 10, 2024",tags:[{label:"hydra",permalink:"/tags/hydra"}],readingTime:.735,hasTruncateMarker:!1,authors:[{name:"Daniel Firth",title:"Hydra Software Engineer",url:"https://github.com/locallycompact",imageURL:"https://github.com/locallycompact.png",key:"locallycompact"}],frontMatter:{title:"Hydra Team Update",slug:"2024-06-10-hydra",authors:["locallycompact"],tags:["hydra"],hide_table_of_contents:!1},prevItem:{title:"Mithril Team Update",permalink:"/2024-06-12-mithril"},nextItem:{title:"Ledger Team Update",permalink:"/2024-06-05-ledger"}},p={authorsImageUrls:[void 0]},u=[{value:"High-level Summary",id:"high-level-summary",level:3},{value:"What did the team achieve this sprint?",id:"what-did-the-team-achieve-this-sprint",level:3},{value:"What are the goals of the next sprint?",id:"what-are-the-goals-of-the-next-sprint",level:3}],c={toc:u},m="wrapper";function h(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"high-level-summary"},"High-level Summary"),(0,n.kt)("p",null,"This sprint, the Hydra team updated the node to be compatible with cardano-node 8.11-pre. We continued work on increment decommits, investigating adversarial attacks on the smart contract and preparing it to be merged. We also discussed options for the incremental commit work, including designs for a ",(0,n.kt)("inlineCode",{parentName:"p"},"hydra-ledger"),"."),(0,n.kt)("p",null,"Next sprint we aim to merge incremental decommits and make further progress on the incremental commit design."),(0,n.kt)("h3",{id:"what-did-the-team-achieve-this-sprint"},"What did the team achieve this sprint?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Update to cardano-node 8.11-pre ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/pull/1439"},"#1439")),(0,n.kt)("li",{parentName:"ul"},"Allow committing internal wallet utxos ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/pull/1442"},"#1442")),(0,n.kt)("li",{parentName:"ul"},"Rewrite introduction section and fknown issues section. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/pull/1451"},"#1451")),(0,n.kt)("li",{parentName:"ul"},"Make specification editing in markdown possible ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/pull/1187"},"#1187")),(0,n.kt)("li",{parentName:"ul"},"Fix ignored hydra-plutus tests ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/pull/1458"},"#1458")),(0,n.kt)("li",{parentName:"ul"},"Re-open internal head with blueprint commits.")),(0,n.kt)("h3",{id:"what-are-the-goals-of-the-next-sprint"},"What are the goals of the next sprint?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Incremental decommit ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/pull/1057"},"#1057")),(0,n.kt)("li",{parentName:"ul"},"Make progress on the design for incremental commit ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/pull/199"},"#199")),(0,n.kt)("li",{parentName:"ul"},"Test combinations of decrement/close/fanout ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/pull/1390"},"#1390"))))}h.isMDXComponent=!0}}]);