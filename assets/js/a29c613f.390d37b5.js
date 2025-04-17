"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[23928],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(r),c=a,d=m["".concat(s,".").concat(c)]||m[c]||h[c]||i;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},79550:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={title:"Mithril Team Update",slug:"2024-01-31-mithril",authors:"jpraynaud",tags:["mithril"],hide_table_of_contents:!1},o=void 0,l={permalink:"/2024-01-31-mithril",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2024-01-31-mithril.md",source:"@site/blog/2024-01-31-mithril.md",title:"Mithril Team Update",description:"High level overview",date:"2024-01-31T00:00:00.000Z",formattedDate:"January 31, 2024",tags:[{label:"mithril",permalink:"/tags/mithril"}],readingTime:1.22,hasTruncateMarker:!1,authors:[{name:"Jean-Philippe Raynaud",title:"Mithril Tech Lead",url:"https://github.com/jpraynaud",imageURL:"https://github.com/jpraynaud.png",key:"jpraynaud"}],frontMatter:{title:"Mithril Team Update",slug:"2024-01-31-mithril",authors:"jpraynaud",tags:["mithril"],hide_table_of_contents:!1},prevItem:{title:"Ledger Team Update",permalink:"/2024-01-31-ledger"},nextItem:{title:"Node API & CLI Team Update",permalink:"/2024-01-31-node-cli-api"}},s={authorsImageUrls:[void 0]},p=[{value:"High level overview",id:"high-level-overview",level:2},{value:"Low level overview",id:"low-level-overview",level:2}],u={toc:p},m="wrapper";function h(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"high-level-overview"},"High level overview"),(0,a.kt)("p",null,"This week, the Mithril team continued implementing a new data type for certifying Cardano transactions within Mithril networks. They completed the signature of the transactions set and implemented the aggregator route, responsible for generating proofs of membership for a list of Cardano transactions. Additionally, they finalized the manual workflow to test the NPM client package in the CI and enhanced the resilience of computing the list of immutable files in a Cardano node database. The team also expanded the coverage of end-to-end tests in the CI to accommodate multiple versions of the Cardano node and various hard fork scenarios."),(0,a.kt)("p",null,"Finally, they completed the enhanced node communications between Mithril and Cardano for retrieving UTXOs and kept working on the threat modeling and risk analysis for P2P networking."),(0,a.kt)("h2",{id:"low-level-overview"},"Low level overview"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Completed the issue ",(0,a.kt)("strong",{parentName:"li"},"Light Wallet: Compute message to sign for ",(0,a.kt)("inlineCode",{parentName:"strong"},"CardanoTransactions"))," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1436"},"#1436")),(0,a.kt)("li",{parentName:"ul"},"Completed the issue ",(0,a.kt)("strong",{parentName:"li"},"Light Wallet: Implement proof generation route in the aggregator")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1467"},"#1467")),(0,a.kt)("li",{parentName:"ul"},"Completed the issue ",(0,a.kt)("strong",{parentName:"li"},"Enhance ImmutableFile list computation resilience")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1450"},"#1450")),(0,a.kt)("li",{parentName:"ul"},"Completed the issue ",(0,a.kt)("strong",{parentName:"li"},"Enhance end to end test for Cardano hard forks")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1464"},"#1464")),(0,a.kt)("li",{parentName:"ul"},"Completed the issue ",(0,a.kt)("strong",{parentName:"li"},"Add WASM client step in Mithril Client multi-platform test")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1408"},"#1408")),(0,a.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,a.kt)("strong",{parentName:"li"},"P2P threat modeling and risk analysis")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1350"},"#1350")),(0,a.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,a.kt)("strong",{parentName:"li"},"Create a test network on ",(0,a.kt)("inlineCode",{parentName:"strong"},"SanchoNet"))," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1173"},"#1173")),(0,a.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,a.kt)("strong",{parentName:"li"},"Enhance Mithril/Cardano node communication")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1315"},"#1315")),(0,a.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,a.kt)("strong",{parentName:"li"},"Generate automatic documentation for CLIs")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1471"},"#1471"))))}h.isMDXComponent=!0}}]);