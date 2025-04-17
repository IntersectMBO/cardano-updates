"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[52993],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(r),c=i,d=m["".concat(s,".").concat(c)]||m[c]||h[c]||a;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},84657:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(87462),i=(r(67294),r(3905));const a={title:"Mithril Team Update",slug:"2024-03-27-mithril",authors:"jpraynaud",tags:["mithril"],hide_table_of_contents:!1},o=void 0,l={permalink:"/2024-03-27-mithril",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2024-03-27-mithril.md",source:"@site/blog/2024-03-27-mithril.md",title:"Mithril Team Update",description:"High level overview",date:"2024-03-27T00:00:00.000Z",formattedDate:"March 27, 2024",tags:[{label:"mithril",permalink:"/tags/mithril"}],readingTime:1.475,hasTruncateMarker:!1,authors:[{name:"Jean-Philippe Raynaud",title:"Mithril Tech Lead",url:"https://github.com/jpraynaud",imageURL:"https://github.com/jpraynaud.png",key:"jpraynaud"}],frontMatter:{title:"Mithril Team Update",slug:"2024-03-27-mithril",authors:"jpraynaud",tags:["mithril"],hide_table_of_contents:!1},prevItem:{title:"Ledger Team Update",permalink:"/2024-03-27-ledger"},nextItem:{title:"Performance & Tracing Update",permalink:"/2024-03-27-performance-and-tracing"}},s={authorsImageUrls:[void 0]},p=[{value:"High level overview",id:"high-level-overview",level:2},{value:"Low level overview",id:"low-level-overview",level:2}],u={toc:p},m="wrapper";function h(e){let{components:t,...r}=e;return(0,i.kt)(m,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"high-level-overview"},"High level overview"),(0,i.kt)("p",null,"This week, the Mithril team released a new ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/mithril/releases/tag/2412.0"},(0,i.kt)("inlineCode",{parentName:"a"},"Mithril distribution 2412.0")),". This release includes several critical updates and enhancements, such as support for the Prometheus metrics endpoint in signer, deprecation of the ",(0,i.kt)("inlineCode",{parentName:"p"},"snapshot")," command in the client CLI, full Pallas-based implementation of the chain observer, and support for Cardano node v.8.9.0. "),(0,i.kt)("p",null,"The team continued implementing the certification of Cardano transactions in Mithril networks. They focused on scaling the signature and proof generation for ",(0,i.kt)("inlineCode",{parentName:"p"},"mainnet"),", kept implementing a more versatile beaconing mechanism, reducing the latency of transactions signature, and continued investigating a bug in the block parser that prevents some Conway transactions from being signed. Additionally, they started working on a prototype to decentralize signer registration with the relay and a peer-to-peer (P2P) network."),(0,i.kt)("p",null,"Finally, the team completed the implementation of some community-requested features to verify the output folder structure made by the client, and kept investigating a source of flakiness in the CI end-to-end test."),(0,i.kt)("h2",{id:"low-level-overview"},"Low level overview"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Released the new distribution ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/releases/tag/2412.0"},(0,i.kt)("inlineCode",{parentName:"a"},"2412.0"))),(0,i.kt)("li",{parentName:"ul"},"Publication of a ",(0,i.kt)("a",{parentName:"li",href:"https://mithril.network/doc/dev-blog/2024/03/26/mithril-signer-prometheus-endpoint"},"dev blog post")," about the ",(0,i.kt)("strong",{parentName:"li"},"Mithril signer Prometheus endpoint release")),(0,i.kt)("li",{parentName:"ul"},"Publication of a ",(0,i.kt)("a",{parentName:"li",href:"https://mithril.network/doc/dev-blog/2024/03/26/client-cli-deprecated-command"},"dev blog post")," about the ",(0,i.kt)("strong",{parentName:"li"},"Mithril client CLI ",(0,i.kt)("inlineCode",{parentName:"strong"},"snapshot")," command deprecation")),(0,i.kt)("li",{parentName:"ul"},"Completed the issue ",(0,i.kt)("strong",{parentName:"li"},"Implement a Block Range Merkle Tree for ",(0,i.kt)("inlineCode",{parentName:"strong"},"Cardano Transactions"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1533"},"#1533")),(0,i.kt)("li",{parentName:"ul"},"Completed the issue ",(0,i.kt)("strong",{parentName:"li"},"Do not require the mithril client to create the DB directory")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1572"},"#1572")),(0,i.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,i.kt)("strong",{parentName:"li"},"Support multiple beacon types in signer/aggregator")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1562"},"#1562")),(0,i.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,i.kt)("strong",{parentName:"li"},"Mithril relay broadcasts signer registrations with P2P PubSub")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1587"},"#1587")),(0,i.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,i.kt)("strong",{parentName:"li"},"Provide fake aggregator data in an aggregated form")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1594"},"#1594")),(0,i.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,i.kt)("strong",{parentName:"li"},"Some transactions are not signed in ",(0,i.kt)("inlineCode",{parentName:"strong"},"testing-sanchonet"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1577"},"#1577")),(0,i.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,i.kt)("strong",{parentName:"li"},"End to end tests are flaky in CI")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1558"},"#1558"))))}h.isMDXComponent=!0}}]);