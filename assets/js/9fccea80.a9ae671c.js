"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[52584],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var c=n.createContext({}),p=function(t){var e=n.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},u=function(t){var e=p(t.components);return n.createElement(c.Provider,{value:e},t.children)},m="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,c=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),m=p(a),d=r,h=m["".concat(c,".").concat(d)]||m[d]||s[d]||i;return a?n.createElement(h,l(l({ref:e},u),{},{components:a})):n.createElement(h,l({ref:e},u))}));function h(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o[m]="string"==typeof t?t:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},38496:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={title:"Node API & CLI Team Update",slug:"2025-02-28-node-cli-api",authors:"Jimbo4350",tags:["cli-api"],hide_table_of_contents:!1},l="Node-Api-Cli Update",o={permalink:"/2025-02-28-node-cli-api",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2025-02-28-node-cli-api.md",source:"@site/blog/2025-02-28-node-cli-api.md",title:"Node API & CLI Team Update",description:"High level summary",date:"2025-02-28T00:00:00.000Z",formattedDate:"February 28, 2025",tags:[{label:"cli-api",permalink:"/tags/cli-api"}],readingTime:1.74,hasTruncateMarker:!1,authors:[{name:"Jordan Millar",title:"Node Team Lead",url:"https://github.com/Jimbo4350",imageURL:"https://github.com/Jimbo4350.png",key:"Jimbo4350"}],frontMatter:{title:"Node API & CLI Team Update",slug:"2025-02-28-node-cli-api",authors:"Jimbo4350",tags:["cli-api"],hide_table_of_contents:!1},prevItem:{title:"Mithril Team Update",permalink:"/2025-03-05-mithril"},nextItem:{title:"SRE Team Update",permalink:"/2025-02-28-sre"}},c={authorsImageUrls:[void 0]},p=[{value:"High level summary",id:"high-level-summary",level:2},{value:"cardano-cli",id:"cardano-cli",level:3},{value:"cardano-api",id:"cardano-api",level:3},{value:"cardano-node",id:"cardano-node",level:3},{value:"cardano-testnet",id:"cardano-testnet",level:3},{value:"docs",id:"docs",level:3},{value:"CI &amp; project maintenance",id:"ci--project-maintenance",level:3}],u={toc:p},m="wrapper";function s(t){let{components:e,...a}=t;return(0,r.kt)(m,(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"2025-02-15t000000z---2025-02-28t000000z"},"2025-02-15T00:00:00Z - 2025-02-28T00:00:00Z"),(0,r.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"cardano-cli updates")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added Plutus script cost calculation for existing transactions"),(0,r.kt)("li",{parentName:"ul"},"Implemented property test watchdog for better testing"),(0,r.kt)("li",{parentName:"ul"},"Bumped cardano-api dependency to 10.9.0.0"),(0,r.kt)("li",{parentName:"ul"},"Set hex as default output format for binary query utxo"),(0,r.kt)("li",{parentName:"ul"},"Began RIO monad integration (part 1)"),(0,r.kt)("li",{parentName:"ul"},"Refactored module structure to be domain-oriented"),(0,r.kt)("li",{parentName:"ul"},"Standardized on fourmolu for code formatting"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"cardano-api improvements")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added execution units check in transaction autobalancing tests"),(0,r.kt)("li",{parentName:"ul"},"Included transaction creation examples in Haddock docs"),(0,r.kt)("li",{parentName:"ul"},"Fixed governance action handling in transaction balancing"),(0,r.kt)("li",{parentName:"ul"},"Enhanced witness count estimation to include simple scripts"),(0,r.kt)("li",{parentName:"ul"},"Split compatible transaction building and signing logic"),(0,r.kt)("li",{parentName:"ul"},"Migrated from cryptonite to crypton library"),(0,r.kt)("li",{parentName:"ul"},"Standardized on fourmolu for code formatting"),(0,r.kt)("li",{parentName:"ul"},"Updated CHaP index and flake inputs"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"cardano-testnet updates")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Fixed testnet test configuration"),(0,r.kt)("li",{parentName:"ul"},"Optimized testnet code by removing unused indirections"),(0,r.kt)("li",{parentName:"ul"},"Removed unused custom node configuration file option"),(0,r.kt)("li",{parentName:"ul"},"Updated transaction submission handling")))),(0,r.kt)("h3",{id:"cardano-cli"},"cardano-cli"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-cli/pull/1031"},"Add command to calculate plutus script costs from an already constructed transaction")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-cli/pull/1072"},"Add watchdog for property tests in cardano-cli-test")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-cli/pull/1068"},"Bump ",(0,r.kt)("inlineCode",{parentName:"a"},"cardano-api")," to 10.9.0.0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-cli/pull/1066"},"Default to hex for binary query utxo output")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-cli/pull/1033"},"Integrate RIO monad part 1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-cli/pull/1071"},"Refactor modules structure to make it more domain-related instead of function-related")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-cli/pull/1069"},"Remove stylish haskell. Use only fourmolu for formatting."))),(0,r.kt)("h3",{id:"cardano-api"},"cardano-api"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-api/pull/764"},"Add execution units check in transaction autobalancing test")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-api/pull/698"},"Added examples of transaction creation to Haddock")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-api/pull/765"},"Fix missing gov action on balance transaction")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-api/pull/754"},"Fix typo in cardano-api's change log")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-api/pull/755"},"Modify ",(0,r.kt)("inlineCode",{parentName:"a"},"estimateTransactionKeyWitnessCount")," to estimate simple scripts too")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-api/pull/756"},"Remove stylish haskell. Use only fourmolu for formatting.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-api/pull/750"},"Split compatible transaction building and signing")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-api/pull/762"},"Switch cryptonite to crypton")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-api/pull/752"},"Update CHaP index state and flake input"))),(0,r.kt)("h3",{id:"cardano-node"},"cardano-node"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-node/pull/6129"},"cardano-testnet-test: fix a test stanza")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-node/pull/6134"},"cardano-testnet: avoid a useless indirection")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-node/pull/6118"},"cardano-testnet: remove possibility to programmatically pass a custom node configuration file (it was unused)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-node/pull/6003"},'cardano-testnet: use new output of "transaction submit"'))),(0,r.kt)("h3",{id:"cardano-testnet"},"cardano-testnet"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"None")),(0,r.kt)("h3",{id:"docs"},"docs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"None")),(0,r.kt)("h3",{id:"ci--project-maintenance"},"CI & project maintenance"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"None")))}s.isMDXComponent=!0}}]);