"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[97556],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),u=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(r),d=n,g=c["".concat(p,".").concat(d)]||c[d]||m[d]||l;return r?a.createElement(g,i(i({ref:t},s),{},{components:r})):a.createElement(g,i({ref:t},s))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:n,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},80516:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const l={title:"Ledger Team Update",slug:"2024-11-20-ledger",authors:"lehins",tags:["ledger"],hide_table_of_contents:!1},i=void 0,o={permalink:"/2024-11-20-ledger",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2024-11-20-ledger.md",source:"@site/blog/2024-11-20-ledger.md",title:"Ledger Team Update",description:"High level summary",date:"2024-11-20T00:00:00.000Z",formattedDate:"November 20, 2024",tags:[{label:"ledger",permalink:"/tags/ledger"}],readingTime:1.23,hasTruncateMarker:!1,authors:[{name:"Alexey Kuleshevich",title:"Ledger Team Software Engineer",url:"https://github.com/lehins",imageURL:"https://github.com/lehins.png",key:"lehins"}],frontMatter:{title:"Ledger Team Update",slug:"2024-11-20-ledger",authors:"lehins",tags:["ledger"],hide_table_of_contents:!1},prevItem:{title:"Mithril Team Update",permalink:"/2024-11-27-mithril"},nextItem:{title:"Mithril Team Update",permalink:"/2024-11-20-mithril"}},p={authorsImageUrls:[void 0]},u=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Low level summary",id:"low-level-summary",level:2},{value:"Features",id:"features",level:3},{value:"Testing",id:"testing",level:3},{value:"Infrastructure and releasing",id:"infrastructure-and-releasing",level:3}],s={toc:u},c="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,n.kt)("p",null,"The most notable change this period is extraction of a testing framework ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ImpSpec"},(0,n.kt)("inlineCode",{parentName:"a"},"ImpSpec"))," that we developed for testing Ledger implementation. This meant extracting reusable functionality, packaging into a seperate library and ",(0,n.kt)("a",{parentName:"p",href:"https://hackage.haskell.org/package/ImpSpec"},"releasing it to Hackage"),"."),(0,n.kt)("p",null,"Most of the efforts are still dedicated to improving our tests and working on conformance testing."),(0,n.kt)("h2",{id:"low-level-summary"},"Low level summary"),(0,n.kt)("h3",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4765"},"pull-4765")," - Pass epochNo from BBODY instead of re-computing it in downstream rules")),(0,n.kt)("h3",{id:"testing"},"Testing"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4743"},"pull-4743")," - Fix looping issue in constrained-generators"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4741"},"pull-4741")," - Various executable spec improvements"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4746"},"pull-4746")," - Added ",(0,n.kt)("inlineCode",{parentName:"li"},"LEDGERS")," conformance"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4747"},"pull-4747")," - Fixed translation of  ",(0,n.kt)("inlineCode",{parentName:"li"},"StakeReference")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4700"},"pull-4700")," - Test SPO vote counting"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4744"},"pull-4744")," - Guardrail in Imp genesis"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4745"},"pull-4745")," - Extract ",(0,n.kt)("inlineCode",{parentName:"li"},"ImpSpec")," into its own package"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4739"},"pull-4739")," - Improve the propagation of explanations when a Spec fails."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4755"},"pull-4755")," - ",(0,n.kt)("inlineCode",{parentName:"li"},"constrained-generators"),": Fix test failure related to narrowing of fold specs"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4708"},"pull-4708")," - Continue implementing the tests in ",(0,n.kt)("inlineCode",{parentName:"li"},"Alonzo.Imp.UtxowSpec.Valid")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4756"},"pull-4756")," - Updated spec to fix a conformance failure")),(0,n.kt)("h3",{id:"infrastructure-and-releasing"},"Infrastructure and releasing"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4750"},"pull-4750")," - Update CHaP and Hackage"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4763"},"pull-4763")," - Move ",(0,n.kt)("inlineCode",{parentName:"li"},"ImpSpec")," into its own repo"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4758"},"pull-4758")," - Add a hidden skiplist file for ",(0,n.kt)("inlineCode",{parentName:"li"},"git fsck")," and a note about using it"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4759"},"pull-4759")," - Documented ",(0,n.kt)("inlineCode",{parentName:"li"},"RatifyState"))))}m.isMDXComponent=!0}}]);