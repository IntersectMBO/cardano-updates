"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[95016],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,h=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},54053:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={title:"Consensus Team Update",slug:"2024-04-03-consensus",authors:"dnadales",tags:["consensus"],hide_table_of_contents:!1},l=void 0,s={permalink:"/2024-04-03-consensus",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2024-04-03-consensus.md",source:"@site/blog/2024-04-03-consensus.md",title:"Consensus Team Update",description:"High level summary",date:"2024-04-03T00:00:00.000Z",formattedDate:"April 3, 2024",tags:[{label:"consensus",permalink:"/tags/consensus"}],readingTime:.685,hasTruncateMarker:!1,authors:[{name:"Damian Nadales",title:"Consensus Team Lead",url:"https://github.com/dnadales",imageURL:"https://github.com/dnadales.png",key:"dnadales"}],frontMatter:{title:"Consensus Team Update",slug:"2024-04-03-consensus",authors:"dnadales",tags:["consensus"],hide_table_of_contents:!1},prevItem:{title:"Hydra Team Update",permalink:"/2024-04-05-hydra"},nextItem:{title:"Mithril Team Update",permalink:"/2024-04-03-mithril"}},i={authorsImageUrls:[void 0]},c=[{value:"High level summary",id:"high-level-summary",level:2}],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/ouroboros-consensus/issues/1009"},"Made")," the ",(0,r.kt)("inlineCode",{parentName:"li"},"LocalTxMonitor")," ",(0,r.kt)("inlineCode",{parentName:"li"},"HasTx")," cross-era behavior less surprising."),(0,r.kt)("li",{parentName:"ul"},"Finalized the tests in ",(0,r.kt)("inlineCode",{parentName:"li"},"ouroboros-consensus")," for the UTXO-HD branch, except the mempool-parallel test which is still failing sometimes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/stevana/quickcheck-state-machine/pull/43"},"Fixed")," an upstream complication in ",(0,r.kt)("inlineCode",{parentName:"li"},"quickcheck-state-machine")," related to Parallel state machines which should allow us for an easier and more understandable setup of the parallel mempool tests."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/quickcheck-dynamic/pull/72"},"Drafted")," parallel state machine testing infrastructure for ",(0,r.kt)("inlineCode",{parentName:"li"},"quickcheck-dynamic"),". Eventually could be used to replace the QSM infra for mempool parallel tests."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-api/pull/503"},"Cleaned")," up the ",(0,r.kt)("inlineCode",{parentName:"li"},"Cardano.API.LedgerState")," module, required for UTXO-HD integration."),(0,r.kt)("li",{parentName:"ul"},"We have been working on Node release 8.10. The changes upstream are integrated all the way to Node. Tests and benchmarks are pending. The versions of Consensus, Ledger, and Networking are released, and we will focus next on releasing CLI, API, and finally Node.")))}m.isMDXComponent=!0}}]);