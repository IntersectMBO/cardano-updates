"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[20605],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>h});var a=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,l=function(e,t){if(null==e)return{};var r,a,l={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var p=a.createContext({}),u=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,l=e.mdxType,n=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(r),d=l,h=c["".concat(p,".").concat(d)]||c[d]||m[d]||n;return r?a.createElement(h,i(i({ref:t},s),{},{components:r})):a.createElement(h,i({ref:t},s))}));function h(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=r.length,i=new Array(n);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:l,i[1]=o;for(var u=2;u<n;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},86247:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>n,metadata:()=>o,toc:()=>u});var a=r(87462),l=(r(67294),r(3905));const n={title:"Ledger Team Update",slug:"2024-06-19-ledger",authors:"lehins",tags:["ledger"],hide_table_of_contents:!1},i=void 0,o={permalink:"/2024-06-19-ledger",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2024-06-19-ledger.md",source:"@site/blog/2024-06-19-ledger.md",title:"Ledger Team Update",description:"High level summary",date:"2024-06-19T00:00:00.000Z",formattedDate:"June 19, 2024",tags:[{label:"ledger",permalink:"/tags/ledger"}],readingTime:1.37,hasTruncateMarker:!1,authors:[{name:"Alexey Kuleshevich",title:"Ledger Team Software Engineer",url:"https://github.com/lehins",imageURL:"https://github.com/lehins.png",key:"lehins"}],frontMatter:{title:"Ledger Team Update",slug:"2024-06-19-ledger",authors:"lehins",tags:["ledger"],hide_table_of_contents:!1},prevItem:{title:"Node API & CLI Team Update",permalink:"/2024-06-21-node-cli-api"},nextItem:{title:"Mithril Team Update",permalink:"/2024-06-19-mithril"}},p={authorsImageUrls:[void 0]},u=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Low level summary",id:"low-level-summary",level:2},{value:"Conway",id:"conway",level:3},{value:"Testing",id:"testing",level:3},{value:"Infrastructure and releasing",id:"infrastructure-and-releasing",level:3}],s={toc:u},c="wrapper";function m(e){let{components:t,...r}=e;return(0,l.kt)(c,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,l.kt)("p",null,"Major milestone was reached this period. We've implemented\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/cardano-foundation/CIPs/tree/master/CIP-0069"},"CIP-0069")," that improves\n",(0,l.kt)("inlineCode",{parentName:"p"},"PlutusV3")," functionality by making spending datums optional and enforcing all scripts to\nhave exactly one argument. This feature allows for spending scripts to be usable for other\npurposes, like minting for example."),(0,l.kt)("p",null,"Couple of important bugs have been fixed:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Script execution for certificates with the same plutus script did not execute correctly."),(0,l.kt)("li",{parentName:"ul"},"Prevent delegation to a non-existent pool.")),(0,l.kt)("p",null,"With this feature complete and a few bug fixes we were also able to mark Conway era and\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/cardano-foundation/CIPs/tree/master/CIP-1694"},"CIP-1694")," as feature\ncomplete and ready for release. Naturally, testing of Conway era will continue all the way\ninto the hard fork."),(0,l.kt)("h2",{id:"low-level-summary"},"Low level summary"),(0,l.kt)("h3",{id:"conway"},"Conway"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4374"},"pull-4374")," - CIP-0069"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4394"},"pull-4394")," - Fix Certifying Redeemer issue"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4400"},"pull-4400")," - Check that the pool being delegated to exists for ",(0,l.kt)("inlineCode",{parentName:"li"},"ConwayDelegCert")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4409"},"pull-4409")," - Update to plutus-ledger-api-1.30")),(0,l.kt)("h3",{id:"testing"},"Testing"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4384"},"pull-4384")," - Re-enabled Full NewEpochstate test"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4397"},"pull-4397")," - Add a lens to HasSubState"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4399"},"pull-4399")," - New simple examples for maps"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4403"},"pull-4403")," - ",(0,l.kt)("inlineCode",{parentName:"li"},"constrained-generators"),": Add ",(0,l.kt)("inlineCode",{parentName:"li"},"lookup_")," for maps"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4414"},"pull-4414")," - ",(0,l.kt)("inlineCode",{parentName:"li"},"constrained-generators"),": Hotfix failing test"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4411"},"pull-4411")," - ",(0,l.kt)("inlineCode",{parentName:"li"},"constrained-generators"),": introduce a hook for naming variables")),(0,l.kt)("h3",{id:"infrastructure-and-releasing"},"Infrastructure and releasing"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4424"},"pull-4424")," - GHA: Downgrade the version of actions/upload-artifact"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4426"},"pull-4426")," - Take care of all compiler warnings for GHC-9.8"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4407"},"pull-4407")," - Change the default ghc version to 9.6.5"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4416"},"pull-4416")," - Bump urllib3 from 1.26.18 to 1.26.19 in /doc")))}m.isMDXComponent=!0}}]);