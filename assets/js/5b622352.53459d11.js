"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[73659],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>h});var a=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,l=function(e,t){if(null==e)return{};var r,a,l={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var p=a.createContext({}),u=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,l=e.mdxType,n=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(r),d=l,h=c["".concat(p,".").concat(d)]||c[d]||m[d]||n;return r?a.createElement(h,i(i({ref:t},s),{},{components:r})):a.createElement(h,i({ref:t},s))}));function h(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=r.length,i=new Array(n);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:l,i[1]=o;for(var u=2;u<n;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},48727:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>n,metadata:()=>o,toc:()=>u});var a=r(87462),l=(r(67294),r(3905));const n={title:"Ledger Team Update",slug:"2024-04-10-ledger",authors:"lehins",tags:["ledger"],hide_table_of_contents:!1},i=void 0,o={permalink:"/2024-04-10-ledger",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2024-04-10-ledger.md",source:"@site/blog/2024-04-10-ledger.md",title:"Ledger Team Update",description:"High level summary",date:"2024-04-10T00:00:00.000Z",formattedDate:"April 10, 2024",tags:[{label:"ledger",permalink:"/tags/ledger"}],readingTime:1.22,hasTruncateMarker:!1,authors:[{name:"Alexey Kuleshevich",title:"Ledger Team Software Engineer",url:"https://github.com/lehins",imageURL:"https://github.com/lehins.png",key:"lehins"}],frontMatter:{title:"Ledger Team Update",slug:"2024-04-10-ledger",authors:"lehins",tags:["ledger"],hide_table_of_contents:!1},prevItem:{title:"SRE Team Update",permalink:"/2024-04-12-sre"},nextItem:{title:"Mithril Team Update",permalink:"/2024-04-10-mithril"}},p={authorsImageUrls:[void 0]},u=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Conway",id:"conway",level:3},{value:"Testing",id:"testing",level:3},{value:"Infrastructure and releasing",id:"infrastructure-and-releasing",level:3},{value:"Low level summary",id:"low-level-summary",level:2}],s={toc:u},c="wrapper";function m(e){let{components:t,...r}=e;return(0,l.kt)(c,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,l.kt)("p",null,"Most notable progress is on testing. In particular data generation for conformance test\nhas been improved and the implementation organized. Addition of various Conway related\nunit and property tests."),(0,l.kt)("h3",{id:"conway"},"Conway"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4236"},"pull-4236")," - Fix typo in ",(0,l.kt)("inlineCode",{parentName:"li"},"ToJSON")," of ",(0,l.kt)("inlineCode",{parentName:"li"},"ConwayGovState")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4250"},"pull-4250")," - Add some ToJSON instances needed by cardano-node")),(0,l.kt)("h3",{id:"testing"},"Testing"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4221"},"pull-4221")," - Fix a NoThunks test failure on nightly builds"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4214"},"pull-4214")," - Fix ",(0,l.kt)("inlineCode",{parentName:"li"},"estimateMinFeeTx")," w/ bootstrap test"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4189"},"pull-4189")," - Imptests - treasury withdrawals"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4207"},"pull-4207")," - Added tests from a bug report"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4238"},"pull-4238")," - Imptests: ParameterChange affects ratification for in-flight proposals"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4243"},"pull-4243")," - Convert ",(0,l.kt)("inlineCode",{parentName:"li"},"small-steps")," testsuite to ",(0,l.kt)("inlineCode",{parentName:"li"},"Hspec")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4248"},"pull-4248")," - Fix withdrawals test data generation in ",(0,l.kt)("inlineCode",{parentName:"li"},"EnactSpec")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4212"},"pull-4212")," - Update and reorganize conformance tests"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4242"},"pull-4242")," - Added UnitTestTools and IncrementalStakeTest")),(0,l.kt)("h3",{id:"infrastructure-and-releasing"},"Infrastructure and releasing"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4219"},"pull-4219")," - Fixes for 8.10 release"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4225"},"pull-4225")," - Post release updates"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4235"},"pull-4235")," - Revert to full formolu runs on CI"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4239"},"pull-4239")," - Use the Cabal-syntax package instead of the Cabal package"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4234"},"pull-4234")," - Add separate ",(0,l.kt)("inlineCode",{parentName:"li"},"devShell")," for ",(0,l.kt)("inlineCode",{parentName:"li"},"pre-commit")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4245"},"pull-4245")," - Plutus 1.25.0.0"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4246"},"pull-4246")," - Changelog for node release 8.10"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4249"},"pull-4249")," - Update tooling and minor fixups")),(0,l.kt)("h2",{id:"low-level-summary"},"Low level summary"))}m.isMDXComponent=!0}}]);