"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[24384],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,d=p["".concat(l,".").concat(m)]||p[m]||h[m]||o;return n?a.createElement(d,i(i({ref:t},c),{},{components:n})):a.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},99968:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const o={title:"Consensus Q2 2023 Update",slug:"2023-Q2-consensus",authors:"dnadales",tags:["consensus"],hide_table_of_contents:!1},i=void 0,s={permalink:"/quarterly/2023-Q2-consensus",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/quarterly/2023-Q2-consensus.md",source:"@site/quarterly/2023-Q2-consensus.md",title:"Consensus Q2 2023 Update",description:"2023-04 -- 2023-06",date:"2024-12-30T17:58:14.000Z",formattedDate:"December 30, 2024",tags:[{label:"consensus",permalink:"/quarterly/tags/consensus"}],readingTime:4.47,hasTruncateMarker:!1,authors:[{name:"Damian Nadales",title:"Consensus Team Lead",url:"https://github.com/dnadales",imageURL:"https://github.com/dnadales.png",key:"dnadales"}],frontMatter:{title:"Consensus Q2 2023 Update",slug:"2023-Q2-consensus",authors:"dnadales",tags:["consensus"],hide_table_of_contents:!1},nextItem:{title:"Network Q2 2023 Update",permalink:"/quarterly/2023-Q2-network"}},l={authorsImageUrls:[void 0]},u=[{value:"2023-04 -- 2023-06",id:"2023-04----2023-06",level:2},{value:"Main achievements",id:"main-achievements",level:3},{value:"UTxO HD",id:"utxo-hd",level:4},{value:"Genesis",id:"genesis",level:4},{value:"Support",id:"support",level:4},{value:"Technical debt",id:"technical-debt",level:4},{value:"Fostering collaboration",id:"fostering-collaboration",level:4},{value:"Next steps",id:"next-steps",level:3},{value:"UTxO HD",id:"utxo-hd-1",level:4},{value:"Genesis",id:"genesis-1",level:4}],c={toc:u},p="wrapper";function h(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"2023-04----2023-06"},"2023-04 -- 2023-06"),(0,r.kt)("h3",{id:"main-achievements"},"Main achievements"),(0,r.kt)("h4",{id:"utxo-hd"},"UTxO HD"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We finished a major prototype refactoring, which includes:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A better and finer grained DB lock mechanism."),(0,r.kt)("li",{parentName:"ul"},"Elimination of race conditions."),(0,r.kt)("li",{parentName:"ul"},"Support for configuring batch query size and flushing rate. This is crucial to allow node users to tweak performance."),(0,r.kt)("li",{parentName:"ul"},"Architectural simplifications and performance improvements."))),(0,r.kt)("li",{parentName:"ul"},"We implemented a new package to support db-sync integration with UTxO-HD."),(0,r.kt)("li",{parentName:"ul"},"We ran another set of ad-hoc benchmarks:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"We uncovered a performance regression on the Network component when using ",(0,r.kt)("inlineCode",{parentName:"li"},"GHC-9.2/9.4"),"."),(0,r.kt)("li",{parentName:"ul"},"The synchronization and replay speed are as expected."),(0,r.kt)("li",{parentName:"ul"},"However, we uncovered memory consumption issues (see figure below).",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The in-memory backend is consuming more memory than the baseline."),(0,r.kt)("li",{parentName:"ul"},"The LMDB backend shows an unexpected memory usage peak."),(0,r.kt)("li",{parentName:"ul"},"Investigation on these issues is ongoing."))))),(0,r.kt)("li",{parentName:"ul"},"We integrated the latest changes in ",(0,r.kt)("inlineCode",{parentName:"li"},"main")," branch.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This required a re-design of the mempool to include the mempool fairness\nimprovement.")))),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(49718).Z,width:"2500",height:"1700"})),(0,r.kt)("h4",{id:"genesis"},"Genesis"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The Genesis work for this PI focused on an high-priority issue from the IOG Researchers' feedback on the proposal.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This particular question was not anticipated when the Q2 PI was planned."),(0,r.kt)("li",{parentName:"ul"},"As a result, the chain generators work, the ChainSync Jumping performance work, and the Genesis node prototype work were deprioritized."),(0,r.kt)("li",{parentName:"ul"},"That work has accordingly been rolled over into the Statement of Work for the first Genesis vendor work package."))),(0,r.kt)("li",{parentName:"ul"},"The IOG Researchers' feedback on the design was very valuable. It had two primary effects."),(0,r.kt)("li",{parentName:"ul"},'Outcome 1: We re-introduced distinct behaviors when the node is "syncing" versus when it is "caught up".',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This eliminated a DoS vector introduced by the proposal, instead of having to argue that it was well-mitigated."),(0,r.kt)("li",{parentName:"ul"},"The additional design complexity is relatively small."))),(0,r.kt)("li",{parentName:"ul"},"Outcome 2: The issue that was unanticipated is whether the Cardano chain is consistently dense enough to rely on Genesis without any checkpointing.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The determination so far is that---assuming the adversary never controls more than four of the seven genesis keys---the most vulnerable segment is in the pure Praos era."),(0,r.kt)("li",{parentName:"ul"},"All the preceding windows are significantly more robust, including the entire Byron and Transitional Praos eras."),(0,r.kt)("li",{parentName:"ul"},"Thus checkpointing is not necessary for the initial Genesis release, though it still may be a reasonable addition later."),(0,r.kt)("li",{parentName:"ul"},"The primary invention was a model for bounding how much benefit the adversary's long-range attack could possibly gain from Praos's natural short forks."))),(0,r.kt)("li",{parentName:"ul"},"Relevant questions that the IOG Researchers are still assessing.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"These do not block the Genesis implementation, but do affect the ultimate values of specific parameters."),(0,r.kt)("li",{parentName:"ul"},"Question 1: what is the upper bound on the duration of an eclipse that a healthy Praos node will survive?"),(0,r.kt)("li",{parentName:"ul"},"Question 2: what is the upper bound on how much grinding can improve the adversary's leader schedule within some Genesis window?")))),(0,r.kt)("h4",{id:"support"},"Support"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We performed an analysis on number of file descriptors used by Consensus, this\ninformation can be used by the node operators to check if the number of file\ndescriptors they want to support are enough, thus improving the user (eg node\noperator) experience."),(0,r.kt)("li",{parentName:"ul"},"We implemented a mempool fairness improvement, by which transactions are\nguaranteed to be processed irrespective of their size.")),(0,r.kt)("h4",{id:"technical-debt"},"Technical debt"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We fixed a bug in followers logic, which was discovered by our ",(0,r.kt)("inlineCode",{parentName:"li"},"QuickCheck"),"\nproperty tests."),(0,r.kt)("li",{parentName:"ul"},"We created an ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-consensus/pull/68"},"immutable DB\nserver"),". This tool allows to serve blocks from the immutable DB to a node that connects to it. This has a remarkable value for testing and benchmarking purposes. For instance, by using this component, we can benchmark the performance of different aspects of Consensus, such as syncing from scratch, without adding Network interference in the performance results."),(0,r.kt)("li",{parentName:"ul"},"We created a ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-consensus/pull/70"},(0,r.kt)("inlineCode",{parentName:"a"},"db-truncater"))," tool, which can be used in disaster recovery and benchmarking scenarios."),(0,r.kt)("li",{parentName:"ul"},"We created a ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-consensus/pull/161"},"benchmarks comparison tool")," that we plan on using for comparing the performance of two Consensus releases. This will allow us to catch performance regressions early on in the process, before they make it to the node (and show in the system level benchmark tests), thus greatly saving development costs. As an example, the graph below shows the performance ",(0,r.kt)("em",{parentName:"li"},"improvements")," introduced by the Ledger team in version ",(0,r.kt)("inlineCode",{parentName:"li"},"0.6.0.0")," of Consensus wrt version ",(0,r.kt)("inlineCode",{parentName:"li"},"0.5.0.0"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(23425).Z,width:"1840",height:"1372"})),(0,r.kt)("h4",{id:"fostering-collaboration"},"Fostering collaboration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We released ",(0,r.kt)("inlineCode",{parentName:"li"},"fs-sim")," as open-source repository. This lowers the barrier to entry for external contributors, which will indirectly benefit the Cardano project."),(0,r.kt)("li",{parentName:"ul"},"We migrated the consensus code to a ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-consensus"},"new repository"),", splitting\nit from the ",(0,r.kt)("inlineCode",{parentName:"li"},"ouroboros-network")," repository. This will save development effort for both the Network and the Consensus teams, since there will be less interference (for instance when making releases)."),(0,r.kt)("li",{parentName:"ul"},"We made several improvements to our release processes, which will translate in time savings. As an example, we went from 16 to 4 packages, which makes the release process simpler and smother. Our release process now makes it easier to align versions and make releases (both for us and for our downstream users)."),(0,r.kt)("li",{parentName:"ul"},"We added an explanation of the hardfork-combinator forecast horizon, that will benefit not only our team, but future external contributors.")),(0,r.kt)("h3",{id:"next-steps"},"Next steps"),(0,r.kt)("h4",{id:"utxo-hd-1"},"UTxO HD"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We will ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-consensus/issues/28"},"get UTxO-HD ready for handover"),".")),(0,r.kt)("h4",{id:"genesis-1"},"Genesis"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We will regularly liaise with the vendor(s) satisfying the Genesis Statement(s) of Work.")))}h.isMDXComponent=!0},23425:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2023-Q2-beacon-graph-ded65e814bfe6d927faa1c5c66bbbfad.png"},49718:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2023-Q2-utxo-hd-sync-ad-hoc-benchmarks-74f9d76c2602f09652f584cc4d6a0962.png"}}]);