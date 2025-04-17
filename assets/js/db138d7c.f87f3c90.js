"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[18634],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||c[h]||o;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},78238:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const o={title:"Consensus Quarterly Update",slug:"2023-01-18-consensus",authors:"dnadales",tags:["consensus"],hide_table_of_contents:!1},i=void 0,s={permalink:"/quarterly/2023-01-18-consensus",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/quarterly/2023-01-18-consensus.md",source:"@site/quarterly/2023-01-18-consensus.md",title:"Consensus Quarterly Update",description:"Consensus Quarterly Update",date:"2023-01-18T00:00:00.000Z",formattedDate:"January 18, 2023",tags:[{label:"consensus",permalink:"/quarterly/tags/consensus"}],readingTime:3.205,hasTruncateMarker:!1,authors:[{name:"Damian Nadales",title:"Consensus Team Lead",url:"https://github.com/dnadales",imageURL:"https://github.com/dnadales.png",key:"dnadales"}],frontMatter:{title:"Consensus Quarterly Update",slug:"2023-01-18-consensus",authors:"dnadales",tags:["consensus"],hide_table_of_contents:!1},prevItem:{title:"Ledger Team Update",permalink:"/quarterly/2023-04-03-ledger"},nextItem:{title:"Network Quarterly Update",permalink:"/quarterly/2023-01-13-network"}},l={authorsImageUrls:[void 0]},u=[{value:"Consensus Quarterly Update",id:"consensus-quarterly-update",level:2},{value:"2022-12 - 2023-01",id:"2022-12---2023-01",level:2},{value:"Main achievements",id:"main-achievements",level:3},{value:"UTxO HD",id:"utxo-hd",level:4},{value:"Genesis",id:"genesis",level:4},{value:"Support",id:"support",level:4},{value:"Conway era",id:"conway-era",level:4},{value:"Technical debt",id:"technical-debt",level:4},{value:"Fostering collaboration",id:"fostering-collaboration",level:4},{value:"Next steps",id:"next-steps",level:3},{value:"UTxO HD",id:"utxo-hd-1",level:4},{value:"Genesis",id:"genesis-1",level:4},{value:"Support",id:"support-1",level:4},{value:"Tech debt",id:"tech-debt",level:4},{value:"Fostering collaboration",id:"fostering-collaboration-1",level:4},{value:"Risks",id:"risks",level:3},{value:"UTxO HD",id:"utxo-hd-2",level:4}],p={toc:u},d="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"consensus-quarterly-update"},"Consensus Quarterly Update"),(0,r.kt)("h2",{id:"2022-12---2023-01"},"2022-12 - 2023-01"),(0,r.kt)("h3",{id:"main-achievements"},"Main achievements"),(0,r.kt)("h4",{id:"utxo-hd"},"UTxO HD"),(0,r.kt)("p",null,"The prototype is feature complete and thoroughly tested at the consensus level.\nIn particular, we invested a lot of time in writing property-test for the\nmempool, and other crucial new parts of the prototype. Now we are ready to run\nintegration tests and system-level benchmarks."),(0,r.kt)("h4",{id:"genesis"},"Genesis"),(0,r.kt)("p",null,"We identified and fixed a slowdown in cross-era forecasting that was inhibiting\nour efforts to benchmark the ChainSync Jumping prototype. This resulted in a 7%\nspeedup in full sync times in the baseline."),(0,r.kt)("p",null,"We also started prototyping a self-contained implementation of the Genesis\ndynamics (in particular of the parts intentionally not part of the ChainSync\nJumping prototype) that furthered our understanding of subtleties and edge\ncases."),(0,r.kt)("h4",{id:"support"},"Support"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We worked on designing integration of new VRF and KES crypto into consensus.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Crypto")," class was split into two parts: ",(0,r.kt)("inlineCode",{parentName:"li"},"Crypto")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"HeaderCrypto"),"."),(0,r.kt)("li",{parentName:"ul"},"With the Ledger team's help, we refactored ",(0,r.kt)("inlineCode",{parentName:"li"},"cardano-ledger")," to use a proxy\ntype for VRF.")))),(0,r.kt)("h4",{id:"conway-era"},"Conway era"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"PR went through its second review round. It is about to be merged, but it got\ndelayed due to people's availability during Christmas break.")),(0,r.kt)("h4",{id:"technical-debt"},"Technical debt"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We improved the capabilities of our ",(0,r.kt)("inlineCode",{parentName:"li"},"io-sim")," library, which is key for testing\nand simulating Cardano components."),(0,r.kt)("li",{parentName:"ul"},"We removed thunks from epoch translations in the ledger, which is important\nfor reducing memory consumption of the Cardano node.")),(0,r.kt)("h4",{id:"fostering-collaboration"},"Fostering collaboration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We added a tutorial on how to instantiate the Consensus layer to run custom\nledgers. This should be a valuable resource to people looking to roll their\nown custom blockchain (either for commercial or research purposes)."),(0,r.kt)("li",{parentName:"ul"},"We added an overview of consensus to the ",(0,r.kt)("a",{parentName:"li",href:"https://ouroboros-network.cardano.intersectmbo.org/"},"top level\ndocumentation")," of\nouroboros-network. This overview describes the consensus components and adds a\nhyperlinked map to the modules documentation.")),(0,r.kt)("h3",{id:"next-steps"},"Next steps"),(0,r.kt)("h4",{id:"utxo-hd-1"},"UTxO HD"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Evaluate the extensibility of the prototype. Moving the UTxO to disk is only\nthe first step towards reducing the memory requirements of Cardano node, and\nensuring its long term sustainability. In the future, we plan on moving other\nlarge maps, such as delegation maps. The prototype should be able to\naccommodate these changes without any major modifications."),(0,r.kt)("li",{parentName:"ul"},"Start the integration with other downstream components, such as the wallet and\ndb-sync. The idea is to identify and address any potential pain points that\nmight arise during this integration."),(0,r.kt)("li",{parentName:"ul"},"Run integration tests and system-level benchmarks.")),(0,r.kt)("h4",{id:"genesis-1"},"Genesis"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Finish benchmarking and tuning the fast-path ChainSync Jumping prototype"),(0,r.kt)("li",{parentName:"ul"},"Expand and optimize the self-contained implementation of the Disconnect Rule\n(including density comparisons and the LoE)"),(0,r.kt)("li",{parentName:"ul"},"Develop documentation and smoke tests for these components."),(0,r.kt)("li",{parentName:"ul"},"Start modifying the ChainSync Client for the LoP and LoR.")),(0,r.kt)("h4",{id:"support-1"},"Support"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Help the Network team with diagnosing performance regression in block\nproduction.")),(0,r.kt)("h4",{id:"tech-debt"},"Tech debt"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fix property-test failures concerning iterators (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-network/issues/3999"},"#3999")," and\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-network/issues/4183"},"#4183"),").")),(0,r.kt)("h4",{id:"fostering-collaboration-1"},"Fostering collaboration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Finish ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-network/issues/4145"},"mapping consensus"),".")),(0,r.kt)("h3",{id:"risks"},"Risks"),(0,r.kt)("h4",{id:"utxo-hd-2"},"UTxO HD"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Moving other parts of the ledger state to disk might require a major redesign\nof the prototype. For instance, if it turns out that the epoch change rules\nrequire access to the ",(0,r.kt)("em",{parentName:"li"},"full")," ledger state. If this is the case, we might\naccept this risk and do the redesign after the initial release of UTxO-HD."),(0,r.kt)("li",{parentName:"ul"},"Integration with downstream clients might require more work than we\nanticipate."),(0,r.kt)("li",{parentName:"ul"},"Access to the benchmarking's team time and resources."),(0,r.kt)("li",{parentName:"ul"},"Benchmarking results might show significant performance degradation, which\nwill require additional work if such performance degradation is not accepted\nby other stakeholders."),(0,r.kt)("li",{parentName:"ul"},"The prototype's performance might not be accepted by other stakeholders. Here\nwe need to clearly communicate that this is necessary to ensure that as the\nblockchain size grows, the node can operate within reasonable memory\nconstraints.")))}c.isMDXComponent=!0}}]);