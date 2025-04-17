"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[71806],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,g=m["".concat(u,".").concat(d)]||m[d]||c[d]||l;return r?n.createElement(g,i(i({ref:t},s),{},{components:r})):n.createElement(g,i({ref:t},s))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[m]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},96790:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const l={title:"Ledger Team Update",slug:"2025-03-26-ledger",authors:"lehins",tags:["ledger"],hide_table_of_contents:!1},i=void 0,o={permalink:"/2025-03-26-ledger",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2025-03-26-ledger.md",source:"@site/blog/2025-03-26-ledger.md",title:"Ledger Team Update",description:"High level summary",date:"2025-03-26T00:00:00.000Z",formattedDate:"March 26, 2025",tags:[{label:"ledger",permalink:"/tags/ledger"}],readingTime:.775,hasTruncateMarker:!1,authors:[{name:"Alexey Kuleshevich",title:"Ledger Team Software Engineer",url:"https://github.com/lehins",imageURL:"https://github.com/lehins.png",key:"lehins"}],frontMatter:{title:"Ledger Team Update",slug:"2025-03-26-ledger",authors:"lehins",tags:["ledger"],hide_table_of_contents:!1},prevItem:{title:"SRE Team Update",permalink:"/2025-03-28-sre"},nextItem:{title:"Mithril Team Update",permalink:"/2025-03-26-mithril"}},u={authorsImageUrls:[void 0]},p=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Low level summary",id:"low-level-summary",level:2},{value:"Features",id:"features",level:3},{value:"Testing",id:"testing",level:3},{value:"Infrastructure and releasing",id:"infrastructure-and-releasing",level:3}],s={toc:p},m="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,a.kt)("p",null,"Few minor touchups were implemented for the upcoming ",(0,a.kt)("inlineCode",{parentName:"p"},"cardano-node-10.3")," release. Other than that\nfocus was mostly on removing redundant complexity and improvements to our test suites."),(0,a.kt)("h2",{id:"low-level-summary"},"Low level summary"),(0,a.kt)("h3",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4924"},"pull-4924")," - Make instantStake deserialization backwards compatible for ",(0,a.kt)("inlineCode",{parentName:"li"},"Conway")," era"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4933"},"pull-4933")," - Add required CBOR instances for NonZero"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4926"},"pull-4926")," - Remove bytestring from ",(0,a.kt)("inlineCode",{parentName:"li"},"Block")," type"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4938"},"pull-4938")," - Remove redundant bytes memoization from ",(0,a.kt)("inlineCode",{parentName:"li"},"WitVKey")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"BootstrapWitness"))),(0,a.kt)("h3",{id:"testing"},"Testing"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4944"},"pull-4944")," - Implement more Alonzo UTxOW Imp tests"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4953"},"pull-4953")," - Implement the remaining Alonzo UTxOW test and remove the old module")),(0,a.kt)("h3",{id:"infrastructure-and-releasing"},"Infrastructure and releasing"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4942"},"pull-4942")," - Add bounds on ",(0,a.kt)("inlineCode",{parentName:"li"},"cardano-crypto-wrapper")," in packages that also use ",(0,a.kt)("inlineCode",{parentName:"li"},"crypton")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4946"},"pull-4946")," - Post-release bump versions in changelogs and cabal-files"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4951"},"pull-4951")," - Add a shellcheck workflow to GitHub CI")))}c.isMDXComponent=!0}}]);