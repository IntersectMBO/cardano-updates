"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[67644],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=p(r),c=n,d=h["".concat(s,".").concat(c)]||h[c]||m[c]||i;return r?a.createElement(d,o(o({ref:t},u),{},{components:r})):a.createElement(d,o({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},52843:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const i={title:"Mithril Team Update",slug:"2024-05-29-mithril",authors:"jpraynaud",tags:["mithril"],hide_table_of_contents:!1},o=void 0,l={permalink:"/2024-05-29-mithril",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2024-05-29-mithril.md",source:"@site/blog/2024-05-29-mithril.md",title:"Mithril Team Update",description:"High level overview",date:"2024-05-29T00:00:00.000Z",formattedDate:"May 29, 2024",tags:[{label:"mithril",permalink:"/tags/mithril"}],readingTime:1.425,hasTruncateMarker:!1,authors:[{name:"Jean-Philippe Raynaud",title:"Mithril Tech Lead",url:"https://github.com/jpraynaud",imageURL:"https://github.com/jpraynaud.png",key:"jpraynaud"}],frontMatter:{title:"Mithril Team Update",slug:"2024-05-29-mithril",authors:"jpraynaud",tags:["mithril"],hide_table_of_contents:!1},prevItem:{title:"Consensus Team Update",permalink:"/2024-05-29-consensus"},nextItem:{title:"Hydra Team Update",permalink:"/2024-05-27-hydra"}},s={authorsImageUrls:[void 0]},p=[{value:"High level overview",id:"high-level-overview",level:2},{value:"Low level overview",id:"low-level-overview",level:2}],u={toc:p},h="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(h,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-level-overview"},"High level overview"),(0,n.kt)("p",null,"This week, the Mithril team released a new ",(0,n.kt)("a",{parentName:"p",href:"https://lookerstudio.google.com/u/0/reporting/8b05ea4b-6a43-45ea-aef2-237906ec7a42/page/kem0D?s=oi6CR5eZrnQ"},(0,n.kt)("strong",{parentName:"a"},"Mithril protocol insights dashboard"))," and a new explorer page displaying active and deregistered SPOs for the latest Cardano epochs. They also continued implementing the certification of Cardano transactions in Mithril networks by improving the throughput of the prover route of the aggregator and making progress on low-latency certification by completing the implementation of a chain block reader from the Cardano mini-protocol with Pallas."),(0,n.kt)("p",null,"Additionally, the team started working on a new beacon for signing Cardano transactions based on the chain point. Finally, they refactored the persistence library, enhanced their testing tools for Cardano transactions, and fixed a block parsing problem that prevented the signature of Cardano transactions in the test networks."),(0,n.kt)("h2",{id:"low-level-overview"},"Low level overview"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Released the ",(0,n.kt)("a",{parentName:"li",href:"https://lookerstudio.google.com/u/0/reporting/8b05ea4b-6a43-45ea-aef2-237906ec7a42/page/kem0D?s=oi6CR5eZrnQ"},(0,n.kt)("strong",{parentName:"a"},"Mithril Protocol Insights Dashboard"))),(0,n.kt)("li",{parentName:"ul"},"Completed the issue ",(0,n.kt)("strong",{parentName:"li"},"Prototype optimizations for increasing Cardano transactions proof generation throughput")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1687"},"#1687")),(0,n.kt)("li",{parentName:"ul"},"Completed the issue ",(0,n.kt)("strong",{parentName:"li"},"Retrieve Cardano blocks with ",(0,n.kt)("inlineCode",{parentName:"strong"},"chainsync")," in ",(0,n.kt)("inlineCode",{parentName:"strong"},"pallas")," PoC")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1590"},"#1590")),(0,n.kt)("li",{parentName:"ul"},"Completed the issue ",(0,n.kt)("strong",{parentName:"li"},"Explorer display in/out SPOs in registered signers page")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1686"},"#1686")),(0,n.kt)("li",{parentName:"ul"},"Completed the issue ",(0,n.kt)("strong",{parentName:"li"},"Create a test Cardano transactions builder")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1667"},"#1667")),(0,n.kt)("li",{parentName:"ul"},"Completed the issue ",(0,n.kt)("strong",{parentName:"li"},"Cardano signatures are not produced on ",(0,n.kt)("inlineCode",{parentName:"strong"},"testing-sanchonet")," and ",(0,n.kt)("inlineCode",{parentName:"strong"},"testing-mainnet"))," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1681"},"#1681")),(0,n.kt)("li",{parentName:"ul"},"Completed the issue ",(0,n.kt)("strong",{parentName:"li"},"Remove ",(0,n.kt)("inlineCode",{parentName:"strong"},"snapshot")," command in client CLI")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1690"},"#1690")),(0,n.kt)("li",{parentName:"ul"},"Completed the issue ",(0,n.kt)("strong",{parentName:"li"},"Block Streamer returns ",(0,n.kt)("inlineCode",{parentName:"strong"},"ChainScannedBlocks"))," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1704"},"#1704")),(0,n.kt)("li",{parentName:"ul"},"Completed the issue ",(0,n.kt)("strong",{parentName:"li"},"Remove connections coupling with providers in database")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1711"},"#1711")),(0,n.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,n.kt)("strong",{parentName:"li"},"Implement Resource Pooling for Block Range Merkle maps")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1698"},"#1698")),(0,n.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,n.kt)("strong",{parentName:"li"},"Sign Cardano transactions with ChainPoint based beacon")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1697"},"#1697")),(0,n.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,n.kt)("strong",{parentName:"li"},"Import Cardano transactions with ",(0,n.kt)("inlineCode",{parentName:"strong"},"ChainReader"))," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1705"},"#1705")),(0,n.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,n.kt)("strong",{parentName:"li"},"Mithril Signer Local Error Policy : Error 182 - MuxError")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1632"},"#1632"))))}m.isMDXComponent=!0}}]);