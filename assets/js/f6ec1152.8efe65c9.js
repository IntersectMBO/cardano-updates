"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[11254],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),p=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(r),d=n,g=m["".concat(u,".").concat(d)]||m[d]||c[d]||l;return r?a.createElement(g,i(i({ref:t},s),{},{components:r})):a.createElement(g,i({ref:t},s))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[m]="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},53954:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const l={title:"Ledger Team Update",slug:"2023-10-13-ledger",authors:"lehins",tags:["ledger"],hide_table_of_contents:!1},i=void 0,o={permalink:"/2023-10-13-ledger",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2023-10-13-ledger.md",source:"@site/blog/2023-10-13-ledger.md",title:"Ledger Team Update",description:"High level summary",date:"2023-10-13T00:00:00.000Z",formattedDate:"October 13, 2023",tags:[{label:"ledger",permalink:"/tags/ledger"}],readingTime:.965,hasTruncateMarker:!1,authors:[{name:"Alexey Kuleshevich",title:"Ledger Team Software Engineer",url:"https://github.com/lehins",imageURL:"https://github.com/lehins.png",key:"lehins"}],frontMatter:{title:"Ledger Team Update",slug:"2023-10-13-ledger",authors:"lehins",tags:["ledger"],hide_table_of_contents:!1},prevItem:{title:"Hydra Team Update",permalink:"/2023-10-13-hydra"},nextItem:{title:"SRE Team Update",permalink:"/2023-10-13-sre"}},u={authorsImageUrls:[void 0]},p=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Low level summary",id:"low-level-summary",level:2},{value:"Conway era",id:"conway-era",level:3},{value:"Integration and releasing",id:"integration-and-releasing",level:3},{value:"Testing",id:"testing",level:3}],s={toc:p},m="wrapper";function c(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,n.kt)("p",null,"The Ledger team has been shifting focus from implementing Conway related features to\ntesting. For this reason there is a very little amount features that are reported this\ntime aorund. Notable Conway related changes are a specialized ledger query for getting\nConstitutional Committee state and prevention of submitting proposal procedures that have\nno valid path to enactment."),(0,n.kt)("p",null,"Testing related work was mainly on a constraint base system as well as on roundtrip\nserialization. As a result of this extra testing a bug in Conway Genesis serialization\nwas eliminated."),(0,n.kt)("h2",{id:"low-level-summary"},"Low level summary"),(0,n.kt)("h3",{id:"conway-era"},"Conway era"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3768"},"pull-3768")," - Fail proposal on invalid prevGovActionId"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3781"},"pull-3781")," - CommitteeState query")),(0,n.kt)("h3",{id:"integration-and-releasing"},"Integration and releasing"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3774"},"pull-3774")," - Bump urllib3 from 1.26.10 to 1.26.17 in /doc"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3770"},"pull-3770")," - cabal.project: Bump index states"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3778"},"pull-3778")," - Bump plutus to 1.14")),(0,n.kt)("h3",{id:"testing"},"Testing"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3769"},"pull-3769")," - Add roundtrip testing by validating FlatTerm"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3783"},"pull-3783")," - Update TranslationInstance.hs"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3775"},"pull-3775")," - Refactor and improve constraint based STS tests"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3793"},"pull-3793")," - Fix sums with negative RHS.")))}c.isMDXComponent=!0}}]);