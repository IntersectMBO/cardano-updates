"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[50645],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),p=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=p(r),c=n,d=h["".concat(s,".").concat(c)]||h[c]||m[c]||a;return r?i.createElement(d,o(o({ref:t},u),{},{components:r})):i.createElement(d,o({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<a;p++)o[p]=r[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}c.displayName="MDXCreateElement"},84821:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=r(87462),n=(r(67294),r(3905));const a={title:"Mithril Team Update",slug:"2024-06-12-mithril",authors:"jpraynaud",tags:["mithril"],hide_table_of_contents:!1},o=void 0,l={permalink:"/2024-06-12-mithril",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2024-06-12-mithril.md",source:"@site/blog/2024-06-12-mithril.md",title:"Mithril Team Update",description:"High level overview",date:"2024-06-12T00:00:00.000Z",formattedDate:"June 12, 2024",tags:[{label:"mithril",permalink:"/tags/mithril"}],readingTime:1.4,hasTruncateMarker:!1,authors:[{name:"Jean-Philippe Raynaud",title:"Mithril Tech Lead",url:"https://github.com/jpraynaud",imageURL:"https://github.com/jpraynaud.png",key:"jpraynaud"}],frontMatter:{title:"Mithril Team Update",slug:"2024-06-12-mithril",authors:"jpraynaud",tags:["mithril"],hide_table_of_contents:!1},prevItem:{title:"Mithril Team Update",permalink:"/2024-06-19-mithril"},nextItem:{title:"Hydra Team Update",permalink:"/2024-06-10-hydra"}},s={authorsImageUrls:[void 0]},p=[{value:"High level overview",id:"high-level-overview",level:2},{value:"Low level overview",id:"low-level-overview",level:2}],u={toc:p},h="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(h,(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-level-overview"},"High level overview"),(0,n.kt)("p",null,"This week, the Mithril team released the new distribution ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/mithril/releases/tag/2423.0"},(0,n.kt)("inlineCode",{parentName:"a"},"2423.0")),", which includes the removal of the ",(0,n.kt)("inlineCode",{parentName:"p"},"snaphot")," command of the client CLI, as well as bug fixes and optimizations. They also continued implementing the certification of Cardano transactions in Mithril networks and improved the throughput of the prover route of the aggregator by fixing some bottlenecks in the Merkle proof computation. Additionally, the team made progress on low-latency certification by working on the retrieval of the transactions with the chain sync mini-protocol and Pallas, as well as the handling of rollbacks of the chain."),(0,n.kt)("p",null,"Finally, they kept working on the threat modeling explainer for the documentation website and provided support for multiple TLS implementations in the client library thanks to a community contribution."),(0,n.kt)("h2",{id:"low-level-overview"},"Low level overview"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Released the new distribution ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/releases/tag/2423.0"},(0,n.kt)("inlineCode",{parentName:"a"},"2423.0"))),(0,n.kt)("li",{parentName:"ul"},"Publication of a ",(0,n.kt)("a",{parentName:"li",href:"https://mithril.network/doc/dev-blog/2024/06/12/client-cli-removed-command"},"dev blog post")," about the ",(0,n.kt)("strong",{parentName:"li"},"removed Mithril client CLI 'snapshot' command")),(0,n.kt)("li",{parentName:"ul"},"Completed the issue ",(0,n.kt)("strong",{parentName:"li"},"Client verification fails with an already stored but non certified yet transaction")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1719"},"#1719")),(0,n.kt)("li",{parentName:"ul"},"Completed the issue ",(0,n.kt)("strong",{parentName:"li"},"Computation of Merkle proof has bottleneck with multiple transactions")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1730"},"#1730")),(0,n.kt)("li",{parentName:"ul"},"Completed the issue ",(0,n.kt)("strong",{parentName:"li"},"Automatic rollback on SQL transactions")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1741"},"#1741")),(0,n.kt)("li",{parentName:"ul"},"Completed the issue ",(0,n.kt)("strong",{parentName:"li"},"Allow the underlying TLS implementation to be selectable when using a library.")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1737"},"#1737")),(0,n.kt)("li",{parentName:"ul"},"Completed the issue ",(0,n.kt)("strong",{parentName:"li"},"Release ",(0,n.kt)("inlineCode",{parentName:"strong"},"2423")," distribution")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1695"},"#1695")),(0,n.kt)("li",{parentName:"ul"},"Completed the issue ",(0,n.kt)("strong",{parentName:"li"},"Mithril Signer Local Error Policy : Error 182 - MuxError")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1632"},"#1632")),(0,n.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,n.kt)("strong",{parentName:"li"},"Handle rollbacks in Cardano transactions")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1724"},"#1724")),(0,n.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,n.kt)("strong",{parentName:"li"},"Pooled resources should be reset when given back")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1743"},"#1743")),(0,n.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,n.kt)("strong",{parentName:"li"},"Threat modeling and risk analysis")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1350"},"#1350")),(0,n.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,n.kt)("strong",{parentName:"li"},"Import Cardano transactions with ",(0,n.kt)("inlineCode",{parentName:"strong"},"ChainReader"))," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1705"},"#1705"))))}m.isMDXComponent=!0}}]);