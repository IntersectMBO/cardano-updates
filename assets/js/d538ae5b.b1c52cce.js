"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[9866],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(a),m=n,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||l;return a?r.createElement(h,i(i({ref:t},c),{},{components:a})):r.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},52008:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const l={title:"Ledger Team Update",slug:"2025-01-15-ledger",authors:"lehins",tags:["ledger"],hide_table_of_contents:!1},i=void 0,o={permalink:"/2025-01-15-ledger",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2025-01-15-ledger.md",source:"@site/blog/2025-01-15-ledger.md",title:"Ledger Team Update",description:"High level summary",date:"2025-01-15T00:00:00.000Z",formattedDate:"January 15, 2025",tags:[{label:"ledger",permalink:"/tags/ledger"}],readingTime:4.315,hasTruncateMarker:!1,authors:[{name:"Alexey Kuleshevich",title:"Ledger Team Software Engineer",url:"https://github.com/lehins",imageURL:"https://github.com/lehins.png",key:"lehins"}],frontMatter:{title:"Ledger Team Update",slug:"2025-01-15-ledger",authors:"lehins",tags:["ledger"],hide_table_of_contents:!1},prevItem:{title:"SRE Team Update",permalink:"/2025-01-17-sre"},nextItem:{title:"Mithril Team Update",permalink:"/2025-01-15-mithril"}},p={authorsImageUrls:[void 0]},s=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Low level summary",id:"low-level-summary",level:2},{value:"Features",id:"features",level:3},{value:"Testing",id:"testing",level:3},{value:"Infrastructure and releasing",id:"infrastructure-and-releasing",level:3}],c={toc:s},u="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,n.kt)("p",null,"Due to the holiday season this time around the Ledger report will be from a period of 6 weeks\ninstead of the usual 2 weeks. That being said, this is also the time when everyone goes on\nvacation. Therefore the report is larger than usual, but not as big as if two periods of reporting\nwere skipped at a usual time."),(0,n.kt)("p",null,"Most of the effort was spent on polishing up some of the Conway features before the upcoming Plomin\nhard fork that is scheduled to happen some time in January, as well as continued testing of the\nConway features in order to improve our confidence in the upcoming hard fork. Because of this effort\nwe nailed a couple of serious bugs, fixes for which are included in the latest release, which is why\nan upgrade for all SPOs to the newest version of ",(0,n.kt)("inlineCode",{parentName:"p"},"cardano-node-10.1.4")," is highly advisable."),(0,n.kt)("p",null,"Another big allocation of effort was towards tackling some of the technical debt accrued over the years."),(0,n.kt)("p",null,"The most significant change by far in this report is the removal of crypto parameterization from\nevery era definition in Ledger. This change was not only a huge simplification for the Ledger\ncodebase, but it will be just as big of a simplification for all of the downstream users of\nLedger. Most importantly, this change will finally allow us to switch to the newer version of the\nGHC compiler, because it addresses the performance regression that the newer compiler version was\nsusceptible to."),(0,n.kt)("p",null,"One more major accomplishment that we can share is a drastic change to how serialization of UTxO\nhappens in the ledger state. This change is planned to solve a long standing problem with blocks\nbeing missed due to the garbage collector kicking in at the time when the ledger snapshot was being\ncreated. Moreover this change will have a significant positive impact on UTxOHD performance when it\nwill finally be released."),(0,n.kt)("p",null,"Another big milestone, with respect to tackling technical debt is a release of our cryptographic\nlibrary, which was undergoing some major changes throughout the last couple of years. It was finally\nreleased and integrated into Ledger with all of the other downstream components set to follow."),(0,n.kt)("p",null,"We can also finally conclude our work on defining CDDL specification in Haskell as is it is now\ncompletely generated from a Haskell definition for all of the eras. Thanks to this effort we not\nonly have a better confidence in the accuracy of our CDDL specification, due to extra type checking\nand testing we now get thanks to Haskell, but it also reduces duplication and complexity that usedq\nto stem from manual serialization specification definition for every Ledger era."),(0,n.kt)("h2",{id:"low-level-summary"},"Low level summary"),(0,n.kt)("h3",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4778"},"pull-4778")," - Huddle for Alonzo"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4790"},"pull-4790")," - Add functions to convert hashes to and from ",(0,n.kt)("inlineCode",{parentName:"li"},"VRFVerKeyHash")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4785"},"pull-4785")," - CDDL:babbage: Switch to using Huddle/Cuddle"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4792"},"pull-4792")," - Refactor Conway CDDL to reuse Babbage CDDL"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4776"},"pull-4776")," - Create CLI for ",(0,n.kt)("inlineCode",{parentName:"li"},"plutus-debug")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4788"},"pull-4788")," - Get rid of crypto parametrization"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4800"},"pull-4800")," - Move Crypto class to ",(0,n.kt)("inlineCode",{parentName:"li"},"cardano-protocol-tpraos")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4810"},"pull-4810")," - Deprecate ",(0,n.kt)("inlineCode",{parentName:"li"},"AuxiliaryDataHash")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4813"},"pull-4813")," - Add a check to ",(0,n.kt)("inlineCode",{parentName:"li"},"MEMPOOL")," rule that prevents unelected CC from voting"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4828"},"pull-4828")," - Fix cddl for ",(0,n.kt)("inlineCode",{parentName:"li"},"update_committee")," cold credential"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4831"},"pull-4831")," - Cleanup pointer serialization"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4811"},"pull-4811")," - Integration of MemPack")),(0,n.kt)("h3",{id:"testing"},"Testing"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4783"},"pull-4783")," - Fixed the certStateSpec"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4780"},"pull-4780")," - Fix issues that prevent basic ",(0,n.kt)("inlineCode",{parentName:"li"},"sumbitTx")," from passing conformance"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4766"},"pull-4766")," - Use non-zero costmodels in Imp tests"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4791"},"pull-4791")," - Move the list of predicate failures inside ",(0,n.kt)("inlineCode",{parentName:"li"},"OpaqueErrorString")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4796"},"pull-4796")," - Made it possible to use Imp logging in the conformance hook"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4740"},"pull-4740")," - Constrained generators for ",(0,n.kt)("inlineCode",{parentName:"li"},"EPOCH")," rule"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4732"},"pull-4732")," - Tools for constrained generation of types that need witnessing"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4812"},"pull-4812")," - Enumerate individual conway tests in conformance ",(0,n.kt)("inlineCode",{parentName:"li"},"Imp")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4801"},"pull-4801")," - Updated ",(0,n.kt)("inlineCode",{parentName:"li"},"SpecTranslate")," instance of ",(0,n.kt)("inlineCode",{parentName:"li"},"AlonzoScript"),", debug info improvements"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4817"},"pull-4817")," - Included the hash in plutus script translation"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4821"},"pull-4821")," - Enable Imp conformance for DELEG"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4822"},"pull-4822")," - Improve error handling in constrained ",(0,n.kt)("inlineCode",{parentName:"li"},"genFromSpec")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4819"},"pull-4819")," - Removed hash size proofs")),(0,n.kt)("h3",{id:"infrastructure-and-releasing"},"Infrastructure and releasing"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4787"},"pull-4787")," - Use cabal-gild to format cabal files"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4793"},"pull-4793")," - Fix bounds on ",(0,n.kt)("inlineCode",{parentName:"li"},"quichckeck-instances")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"cardano-crypto-class")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4795"},"pull-4795")," - Update haskellNix and CHaP and upgrade ghc-9.8.2 to 9.8.4"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4699"},"pull-4699")," - Upgrade cardano-base dependency"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4803"},"pull-4803")," - Add missing version bump in ",(0,n.kt)("inlineCode",{parentName:"li"},"cardano-ledger-shelley-ma-test")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4805"},"pull-4805")," - Add missing version bump in ",(0,n.kt)("inlineCode",{parentName:"li"},"cardano-ledger-alonzo-test")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4809"},"pull-4809")," - Fix formal-ledger-specifications SRP check in ci"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4816"},"pull-4816")," - Backport release ",(0,n.kt)("inlineCode",{parentName:"li"},"cardano-ledger-conway-1.18.1.0")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4815"},"pull-4815")," - Backport release ",(0,n.kt)("inlineCode",{parentName:"li"},"cardano-ledger-conway-1.17.4.0")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4824"},"pull-4824")," - Pin ghc version in gen-hie CI job"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4825"},"pull-4825")," - Bump jinja2 from 3.1.4 to 3.1.5 in /doc"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4833"},"pull-4833")," - cabal.project: Update index-states")))}d.isMDXComponent=!0}}]);