"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[54421],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>h});var l=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=l.createContext({}),u=function(e){var t=l.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=u(e.components);return l.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(a),d=r,h=m["".concat(p,".").concat(d)]||m[d]||c[d]||n;return a?l.createElement(h,i(i({ref:t},s),{},{components:a})):l.createElement(h,i({ref:t},s))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<n;u++)i[u]=a[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}d.displayName="MDXCreateElement"},61874:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>o,toc:()=>u});var l=a(87462),r=(a(67294),a(3905));const n={title:"Ledger Team Update",slug:"2024-01-10-ledger",authors:"lehins",tags:["ledger"],hide_table_of_contents:!1},i=void 0,o={permalink:"/2024-01-10-ledger",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2024-01-10-ledger.md",source:"@site/blog/2024-01-10-ledger.md",title:"Ledger Team Update",description:"High level summary",date:"2024-01-10T00:00:00.000Z",formattedDate:"January 10, 2024",tags:[{label:"ledger",permalink:"/tags/ledger"}],readingTime:3.005,hasTruncateMarker:!1,authors:[{name:"Alexey Kuleshevich",title:"Ledger Team Software Engineer",url:"https://github.com/lehins",imageURL:"https://github.com/lehins.png",key:"lehins"}],frontMatter:{title:"Ledger Team Update",slug:"2024-01-10-ledger",authors:"lehins",tags:["ledger"],hide_table_of_contents:!1},prevItem:{title:"Consensus Team Update",permalink:"/2024-01-10-consensus"},nextItem:{title:"Mithril Team Update",permalink:"/2024-01-10-mithril"}},p={authorsImageUrls:[void 0]},u=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Low level summary",id:"low-level-summary",level:2},{value:"Conway",id:"conway",level:3},{value:"Testing",id:"testing",level:3},{value:"Improvements",id:"improvements",level:3},{value:"Releasing",id:"releasing",level:3}],s={toc:u},m="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,l.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,r.kt)("p",null,"Major Conway related development was the refactoring of how we distinguish Plutus\nlanguage versions in every era, thus drasticly improving the type safety and getting us\nmuch closer to PlutusV3 integration."),(0,r.kt)("p",null,"There has also been many bug fixes and improvements since the last update. Some important bug\nfixes are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"missing ",(0,r.kt)("inlineCode",{parentName:"li"},'"protocolVersion"')," field in JSON instance for Babbage and Conway protocol parameters"),(0,r.kt)("li",{parentName:"ul"},"requiring witnesses for DRep registration"),(0,r.kt)("li",{parentName:"ul"},"new committee governance action ratification was implemented incorrectly"),(0,r.kt)("li",{parentName:"ul"},"guard against invalid protocol versions in hard fork initiation proposals"),(0,r.kt)("li",{parentName:"ul"},"failures during updates of Plutus CostModels were not retained"),(0,r.kt)("li",{parentName:"ul"},"fixed the types for some protocol parameters in order to prevent values that are too large"),(0,r.kt)("li",{parentName:"ul"},"serialization and CDDL fixes")),(0,r.kt)("p",null,"A few useful features have been also implemented, like new ledger events, doubling the\nlimit for Url length, consensus query, JSON instances and so on. It was also required\nfor testing to implement a reliable transaction fee estimation function, which is now\navailable not only for testing, but also for cardano-cli."),(0,r.kt)("h2",{id:"low-level-summary"},"Low level summary"),(0,r.kt)("h3",{id:"conway"},"Conway"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/3915"},"pull-3915")," - Utilize ",(0,r.kt)("inlineCode",{parentName:"li"},"Inject")," type class for ",(0,r.kt)("inlineCode",{parentName:"li"},"Val"),"'s ",(0,r.kt)("inlineCode",{parentName:"li"},"inject")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/3899"},"pull-3899")," - Bring Plutus language version to the type level"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/3917"},"pull-3917")," - Ensure DRepRegistration certificate requires a witness"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/3921"},"pull-3921")," - Fix committee validation in Ratify"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/3935"},"pull-3935")," - Fixed a bug in ",(0,r.kt)("inlineCode",{parentName:"li"},"Conway.Rules.Gov")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/3956"},"pull-3956")," - Allow 128 byte Url and DnsNames for decoder version atleast 9."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/3954"},"pull-3954")," - Fix how we update ",(0,r.kt)("inlineCode",{parentName:"li"},"CostModels")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/3947"},"pull-3947")," - Change the type of some pparam fields to align with how they are represented in Consensus"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/3951"},"pull-3951")," - Conway genesis DRep injection"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/3961"},"pull-3961")," - Switch ContextError to an injective type family from a data family"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/3963"},"pull-3963")," - Abstract ",(0,r.kt)("inlineCode",{parentName:"li"},"getWitsVKeyNeeded")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/3933"},"pull-3933")," - Improve cbor serialization of TxWits in Conway"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/3971"},"pull-3971")," - ToJson instances for context error"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/3977"},"pull-3977")," - Added ",(0,r.kt)("inlineCode",{parentName:"li"},"GetAccountStateQuery")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/3975"},"pull-3975")," - Add policy hash protection to ",(0,r.kt)("inlineCode",{parentName:"li"},"TreasuryWithdrawals")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"ParameterChange"))),(0,r.kt)("h3",{id:"testing"},"Testing"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/3892"},"pull-3892")," - Translate DRep expiry test from ",(0,r.kt)("inlineCode",{parentName:"li"},"ConwayFeatures")," to Imp ",(0,r.kt)("inlineCode",{parentName:"li"},"GovSpec")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/3913"},"pull-3913")," - Add certs to conformance testing"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/3911"},"pull-3911")," - Add a Preds to generate valid GovActionStates."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/3929"},"pull-3929")," - Improve comment on ",(0,r.kt)("inlineCode",{parentName:"li"},"unit_interval")," in cddl"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/3950"},"pull-3950")," - Use discard to avoid bad traces for fixOutput"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/3935"},"pull-3935")," - Add some Imp tests for HardForkInitiation."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/3964"},"pull-3964")," - Ignore thunks in ",(0,r.kt)("inlineCode",{parentName:"li"},"utxosDeposited")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/3962"},"pull-3962")," - Add ",(0,r.kt)("inlineCode",{parentName:"li"},"estimateMinFeeTx")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/3976"},"pull-3976")," - Introduce accurate min fee calculation function: ",(0,r.kt)("inlineCode",{parentName:"li"},"calcMinFeeTx"))),(0,r.kt)("h3",{id:"improvements"},"Improvements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/3930"},"pull-3930")," - Change type of ",(0,r.kt)("inlineCode",{parentName:"li"},"mintedTxBodyL")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"PolicyID")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/3924"},"pull-3924")," - Split type classes out of eras Core module"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/3934"},"pull-3934")," - Type safety bugfixes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/3949"},"pull-3949")," - Add FromJSON BabbagePParams instance"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/3953"},"pull-3953")," - Babbage / Conway PParams JSON serialization"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/3946"},"pull-3946")," - Epoch interval instances"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/3932"},"pull-3932")," - Add ledger event TxUTxODiff"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/3969"},"pull-3969")," - Add missing stake key deposit in formal spec"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/3973"},"pull-3973")," - Move functionality of Cardano.Ledger.Pretty  to Test.Cardano.Ledger.Generic.PrettyCore")),(0,r.kt)("h3",{id:"releasing"},"Releasing"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/3918"},"pull-3918")," - Bump Plutus to 1.18"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/3955"},"pull-3955")," - Bump Plutus to 1.19"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/3938"},"pull-3938")," - chap: migrate to chap.intersectmbo.org"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/3966"},"pull-3966")," - Update cddl gem and dependencies"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/3877"},"pull-3877")," - Make it build with ghc-9.8")))}c.isMDXComponent=!0}}]);