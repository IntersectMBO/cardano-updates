"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[13604],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(r),c=i,d=m["".concat(s,".").concat(c)]||m[c]||h[c]||a;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},21881:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(87462),i=(r(67294),r(3905));const a={title:"Mithril Team Update",slug:"2024-07-24-mithril",authors:"jpraynaud",tags:["mithril"],hide_table_of_contents:!1},o=void 0,l={permalink:"/2024-07-24-mithril",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2024-07-24-mithril.md",source:"@site/blog/2024-07-24-mithril.md",title:"Mithril Team Update",description:"High level overview",date:"2024-07-24T00:00:00.000Z",formattedDate:"July 24, 2024",tags:[{label:"mithril",permalink:"/tags/mithril"}],readingTime:1.25,hasTruncateMarker:!1,authors:[{name:"Jean-Philippe Raynaud",title:"Mithril Tech Lead",url:"https://github.com/jpraynaud",imageURL:"https://github.com/jpraynaud.png",key:"jpraynaud"}],frontMatter:{title:"Mithril Team Update",slug:"2024-07-24-mithril",authors:"jpraynaud",tags:["mithril"],hide_table_of_contents:!1},prevItem:{title:"Hydra Team Update",permalink:"/2024-07-24-hydra"},nextItem:{title:"Performance & Tracing Update",permalink:"/2024-07-23-performance-and-tracing"}},s={authorsImageUrls:[void 0]},p=[{value:"High level overview",id:"high-level-overview",level:2},{value:"Low level overview",id:"low-level-overview",level:2}],u={toc:p},m="wrapper";function h(e){let{components:t,...r}=e;return(0,i.kt)(m,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"high-level-overview"},"High level overview"),(0,i.kt)("p",null,"This week, the Mithril team focused on preparing for the upcoming release of Cardano transaction certification in Mithril networks. They fixed a bug that was preventing the import of transactions close to the tip of the chain, investigated performance issues on imports from mainnet and SanchoNet, refactored some types used for block and slot numbers, and thoroughly benchmarked performance and tested edge cases."),(0,i.kt)("p",null,"Finally, the team continued working on the certification of the Cardano stake distribution and redacting a CIP for the diffusion of Mithril signatures through the Cardano network."),(0,i.kt)("h2",{id:"low-level-overview"},"Low level overview"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Completed the issue ",(0,i.kt)("strong",{parentName:"li"},"Cleanup Immutable File in Cardano transaction")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1825"},"#1825")),(0,i.kt)("li",{parentName:"ul"},"Completed the issue ",(0,i.kt)("strong",{parentName:"li"},"Upgrade ",(0,i.kt)("inlineCode",{parentName:"strong"},"testing-sanchonet")," for respin with Cardano ",(0,i.kt)("inlineCode",{parentName:"strong"},"9.0.0"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1822"},"#1822")),(0,i.kt)("li",{parentName:"ul"},"Completed the issue ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"testing-sanchonet")," does not sign Cardano transactions")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1845"},"#1845")),(0,i.kt)("li",{parentName:"ul"},"Completed the issue ",(0,i.kt)("strong",{parentName:"li"},"Refactor ",(0,i.kt)("inlineCode",{parentName:"strong"},"BlockNumber")," type")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1755"},"#1755")),(0,i.kt)("li",{parentName:"ul"},"Completed the issue ",(0,i.kt)("strong",{parentName:"li"},"Cleanup Immutable File in Cardano transaction")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1825"},"#1825")),(0,i.kt)("li",{parentName:"ul"},"Completed the issue ",(0,i.kt)("strong",{parentName:"li"},"Make Certificate messages beacon field optional")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1807"},"#1807")),(0,i.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,i.kt)("strong",{parentName:"li"},"Implement signable and artifacts builders for Cardano Stake Distribution")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1832"},"#1832")),(0,i.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,i.kt)("strong",{parentName:"li"},"CIP for Mithril signature diffusion through Cardano network")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1775"},"#1775")),(0,i.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,i.kt)("strong",{parentName:"li"},"Test Cardano transaction chain rollbacks")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1840"},"#1840")),(0,i.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,i.kt)("strong",{parentName:"li"},"Refactor ",(0,i.kt)("inlineCode",{parentName:"strong"},"SlotNumber")," type")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1851"},"#1851")),(0,i.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,i.kt)("strong",{parentName:"li"},"Slow import of Cardano transactions in ",(0,i.kt)("inlineCode",{parentName:"strong"},"testing-mainnet"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1849"},"#1849")),(0,i.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"ChainReader")," is stuck in ",(0,i.kt)("inlineCode",{parentName:"strong"},"Agency is theirs")," error")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1836"},"#1836")),(0,i.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,i.kt)("strong",{parentName:"li"},"Benchmark signer footprint on SPO infrastructure")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1826"},"#1826"))))}h.isMDXComponent=!0}}]);