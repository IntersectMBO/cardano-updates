"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[48817],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>h});var a=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,l=function(e,t){if(null==e)return{};var r,a,l={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var p=a.createContext({}),u=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,l=e.mdxType,n=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(r),m=l,h=c["".concat(p,".").concat(m)]||c[m]||d[m]||n;return r?a.createElement(h,i(i({ref:t},s),{},{components:r})):a.createElement(h,i({ref:t},s))}));function h(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=r.length,i=new Array(n);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:l,i[1]=o;for(var u=2;u<n;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},93377:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>o,toc:()=>u});var a=r(87462),l=(r(67294),r(3905));const n={title:"Ledger Team Update",slug:"2024-11-06-ledger",authors:"lehins",tags:["ledger"],hide_table_of_contents:!1},i=void 0,o={permalink:"/2024-11-06-ledger",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2024-11-06-ledger.md",source:"@site/blog/2024-11-06-ledger.md",title:"Ledger Team Update",description:"High level summary",date:"2024-11-06T00:00:00.000Z",formattedDate:"November 6, 2024",tags:[{label:"ledger",permalink:"/tags/ledger"}],readingTime:1.35,hasTruncateMarker:!1,authors:[{name:"Alexey Kuleshevich",title:"Ledger Team Software Engineer",url:"https://github.com/lehins",imageURL:"https://github.com/lehins.png",key:"lehins"}],frontMatter:{title:"Ledger Team Update",slug:"2024-11-06-ledger",authors:"lehins",tags:["ledger"],hide_table_of_contents:!1},prevItem:{title:"Network Team Update",permalink:"/2024-11-08-network"},nextItem:{title:"Mithril Team Update",permalink:"/2024-11-06-mithril"}},p={authorsImageUrls:[void 0]},u=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Low level summary",id:"low-level-summary",level:2},{value:"Features",id:"features",level:3},{value:"Testing",id:"testing",level:3},{value:"Infrastructure and releasing",id:"infrastructure-and-releasing",level:3}],s={toc:u},c="wrapper";function d(e){let{components:t,...r}=e;return(0,l.kt)(c,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,l.kt)("p",null,"Features that were implemented this period are mostly internal improvements to the quality of code. The only feature that stands out from this is the addition of a new query that allows users to learn the default vote for a particular Stake Pool Operator. Much improvement has also happened on the conformance testing side, as well as to the rest of the test suite."),(0,l.kt)("h2",{id:"low-level-summary"},"Low level summary"),(0,l.kt)("h3",{id:"features"},"Features"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4666"},"pull-4666")," - Mismatch for Conway predicate failures"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4711"},"pull-4711")," - Use Mismatch for Shelley, Mary, Allegra, Alonzo, Babbage"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4722"},"pull-4722")," - Create specialized newtype ",(0,l.kt)("inlineCode",{parentName:"li"},"VRFVerKeyHash")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4557"},"pull-4557")," - Define CDDL via Huddle in shelley-ma"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4733"},"pull-4733")," - Alternative approach to ",(0,l.kt)("inlineCode",{parentName:"li"},"Annotator")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4735"},"pull-4735")," - Add ",(0,l.kt)("inlineCode",{parentName:"li"},"queryStakePoolDefaultVote")," state query"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4737"},"pull-4737")," - Remove deprecated and unused definitions")),(0,l.kt)("h3",{id:"testing"},"Testing"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4718"},"pull-4718")," - Avoid intermittent test failures in constrained-generators"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4712"},"pull-4712")," - (NonEmpty x) in MemberSpec"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4713"},"pull-4713")," - Better bootstrap-aware Imp tests"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4730"},"pull-4730")," - ",(0,l.kt)("inlineCode",{parentName:"li"},"constrained-generators"),": fix flaky test"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4729"},"pull-4729")," - Added ",(0,l.kt)("inlineCode",{parentName:"li"},"RewardUpdate")," spec translation"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4720"},"pull-4720")," - Add CC removal imptest with UpdateCommittee"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4728"},"pull-4728")," - Add a balanced TxBody specification"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4736"},"pull-4736")," - Pass the signature checking function to Agda"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4719"},"pull-4719")," - ",(0,l.kt)("inlineCode",{parentName:"li"},"constrained-generators"),": Better shrinking for SuspendedSpec")),(0,l.kt)("h3",{id:"infrastructure-and-releasing"},"Infrastructure and releasing"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4717"},"pull-4717")," - Speedup CI by disabling unnecessary steps"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4714"},"pull-4714")," - Add changelog entry for ",(0,l.kt)("inlineCode",{parentName:"li"},"cardano-node-10.1")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4734"},"pull-4734")," - Update index state")))}d.isMDXComponent=!0}}]);