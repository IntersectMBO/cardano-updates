"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[47263],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),h=r,m=c["".concat(l,".").concat(h)]||c[h]||d[h]||o;return n?a.createElement(m,s(s({ref:t},p),{},{components:n})):a.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:r,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},53615:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const o={title:"Consensus Quarterly Update",slug:"2023-04-25-consensus",authors:"dnadales",tags:["consensus"],hide_table_of_contents:!1},s=void 0,i={permalink:"/quarterly/2023-04-25-consensus",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/quarterly/2023-04-25-consensus.md",source:"@site/quarterly/2023-04-25-consensus.md",title:"Consensus Quarterly Update",description:"Consensus Quarterly Update",date:"2023-04-25T00:00:00.000Z",formattedDate:"April 25, 2023",tags:[{label:"consensus",permalink:"/quarterly/tags/consensus"}],readingTime:2.3,hasTruncateMarker:!1,authors:[{name:"Damian Nadales",title:"Consensus Team Lead",url:"https://github.com/dnadales",imageURL:"https://github.com/dnadales.png",key:"dnadales"}],frontMatter:{title:"Consensus Quarterly Update",slug:"2023-04-25-consensus",authors:"dnadales",tags:["consensus"],hide_table_of_contents:!1},prevItem:{title:"SRE Q3 2024 Update",permalink:"/quarterly/2024-Q3-sre"},nextItem:{title:"Network Q1 2023 Update",permalink:"/quarterly/2023-04-04-network"}},l={authorsImageUrls:[void 0]},u=[{value:"Consensus Quarterly Update",id:"consensus-quarterly-update",level:2},{value:"2023-01 - 2023-03",id:"2023-01---2023-03",level:2},{value:"Main achievements",id:"main-achievements",level:3},{value:"UTxO HD",id:"utxo-hd",level:4},{value:"Genesis",id:"genesis",level:4},{value:"Support",id:"support",level:4},{value:"Conway era",id:"conway-era",level:4},{value:"Technical debt",id:"technical-debt",level:4},{value:"Fostering collaboration",id:"fostering-collaboration",level:4},{value:"Next steps",id:"next-steps",level:3},{value:"UTxO HD",id:"utxo-hd-1",level:4},{value:"Genesis",id:"genesis-1",level:4},{value:"Support",id:"support-1",level:4},{value:"Tech debt",id:"tech-debt",level:4},{value:"Fostering collaboration",id:"fostering-collaboration-1",level:4}],p={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"consensus-quarterly-update"},"Consensus Quarterly Update"),(0,r.kt)("h2",{id:"2023-01---2023-03"},"2023-01 - 2023-03"),(0,r.kt)("h3",{id:"main-achievements"},"Main achievements"),(0,r.kt)("h4",{id:"utxo-hd"},"UTxO HD"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We finished the testing activities for the prototype, which involved adding\nnew tests, and fixing and enabling temporarily disabled tests."),(0,r.kt)("li",{parentName:"ul"},"We spent a substantial amount of effort refactoring and cleaning the\nprototype."),(0,r.kt)("li",{parentName:"ul"},"We audited the UTxO HD prototype to make sure it can accommodate the migration\nof other tables (eg stake-keys registration) from memory to disk. The result\nof the audit was positive."),(0,r.kt)("li",{parentName:"ul"},"We ran ad-hoc benchmarks for reading keys and flushing values to disk. No\nunexpected costs found."),(0,r.kt)("li",{parentName:"ul"},"We ran the first system level benchmarks. The performance regressions reported\nwere due to an unrealistic snapshotting rate. We need to re-run them again\nafter we design a more fine grained locking mechanism.")),(0,r.kt)("h4",{id:"genesis"},"Genesis"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We elaborated a roadmap of the remaining work for Genesis."),(0,r.kt)("li",{parentName:"ul"},"We presented the design to the IOG Researchers and PNSol on February 20. The\ndesign was well received. We updated the Genesis design with the researcher's\nfeedback.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"We plugged the new DoS vector identified during the aforementioned\npresentation."))),(0,r.kt)("li",{parentName:"ul"},"We developed a generator for adversarial leader schedules that satisfy key\nOuroboros properties, which will be used to test the Genesis design.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The generator enables use of smaller Ouroboros parameters, which makes\nextrema more likely and counterxamples easier interpret."))),(0,r.kt)("li",{parentName:"ul"},"We wrote up the latest design iteration."),(0,r.kt)("li",{parentName:"ul"},"We continued benchmarking the Chain Sync Jumping prototype. In particular:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"We debugged the prototype's performance regression, and unmasked the\nactual cause by patching our initial theory (bad queuing behavior)"),(0,r.kt)("li",{parentName:"ul"},"We identified and validated the actual cause (a pathological case in\nBlockFetch tiebreaker).")))),(0,r.kt)("h4",{id:"support"},"Support"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We created two new tools. One for dumping CBOR encoded blocks to JSON. Ahother\nto serve a local immutable DB.")),(0,r.kt)("h4",{id:"conway-era"},"Conway era"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We integrated the Conway era into consensus.")),(0,r.kt)("h4",{id:"technical-debt"},"Technical debt"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We fixed a bug with followers, which was discovered by property tests."),(0,r.kt)("li",{parentName:"ul"},"We developed a DSL for specifying and running ChainDB test cases."),(0,r.kt)("li",{parentName:"ul"},"We fixed failing tests with iterators."),(0,r.kt)("li",{parentName:"ul"},"We created micro-benchmarks for adding transactions to the mempool.")),(0,r.kt)("h4",{id:"fostering-collaboration"},"Fostering collaboration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We released a new technical documentation site for consensus."),(0,r.kt)("li",{parentName:"ul"},"We factored out several packages to external repositories. Some of this work\noriginated in the UTxO HD workstream.")),(0,r.kt)("h3",{id:"next-steps"},"Next steps"),(0,r.kt)("h4",{id:"utxo-hd-1"},"UTxO HD"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-consensus/issues/28"},"https://github.com/input-output-hk/ouroboros-consensus/issues/28"))),(0,r.kt)("h4",{id:"genesis-1"},"Genesis"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-consensus/issues/33"},"https://github.com/input-output-hk/ouroboros-consensus/issues/33")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-consensus/issues/32"},"https://github.com/input-output-hk/ouroboros-consensus/issues/32")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-consensus/issues/31"},"https://github.com/input-output-hk/ouroboros-consensus/issues/31"))),(0,r.kt)("h4",{id:"support-1"},"Support"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Design Consensus side of hardfork-enactment in the Voltaire phase\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-network/issues/4180"},"#4180"),")."),(0,r.kt)("li",{parentName:"ul"},"Estimate the number of file descriptors Consensus needs\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-consensus/issues/20"},"#20"),".")),(0,r.kt)("h4",{id:"tech-debt"},"Tech debt"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Identify Quantitative Timeliness Agreements (QTAs) metrics that we can define\nfor consensus. Pick one and implement benchmarks for it.")),(0,r.kt)("h4",{id:"fostering-collaboration-1"},"Fostering collaboration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Onboard a new team member.")))}d.isMDXComponent=!0}}]);