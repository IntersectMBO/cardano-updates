"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[37994],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,h=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return a?n.createElement(h,l(l({ref:t},s),{},{components:a})):n.createElement(h,l({ref:t},s))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},34231:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={title:"Node API & CLI Team Update",slug:"2024-12-04-node-cli-api",authors:"Jimbo4350",tags:["cli-api"],hide_table_of_contents:!1},l="Node-Api-Cli Update",o={permalink:"/2024-12-04-node-cli-api",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2024-12-04-node-cli-api.md",source:"@site/blog/2024-12-04-node-cli-api.md",title:"Node API & CLI Team Update",description:"High level summary",date:"2024-12-04T00:00:00.000Z",formattedDate:"December 4, 2024",tags:[{label:"cli-api",permalink:"/tags/cli-api"}],readingTime:1.155,hasTruncateMarker:!1,authors:[{name:"Jordan Millar",title:"Node Team Lead",url:"https://github.com/Jimbo4350",imageURL:"https://github.com/Jimbo4350.png",key:"Jimbo4350"}],frontMatter:{title:"Node API & CLI Team Update",slug:"2024-12-04-node-cli-api",authors:"Jimbo4350",tags:["cli-api"],hide_table_of_contents:!1},prevItem:{title:"Mithril Team Update",permalink:"/2024-12-04-mithril"},nextItem:{title:"SRE Team Update",permalink:"/2024-11-29-sre"}},c={authorsImageUrls:[void 0]},p=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Major Enhancements",id:"major-enhancements",level:3},{value:"API Enhancements",id:"api-enhancements",level:3},{value:"cardano-cli",id:"cardano-cli",level:3},{value:"cardano-api",id:"cardano-api",level:3},{value:"cardano-node",id:"cardano-node",level:3},{value:"cardano-testnet",id:"cardano-testnet",level:3},{value:"docs",id:"docs",level:3},{value:"CI &amp; project maintenance",id:"ci--project-maintenance",level:3}],s={toc:p},m="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"2024-11-20t000000z---2024-12-04t000000z"},"2024-11-20T00:00:00Z - 2024-12-04T00:00:00Z"),(0,r.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,r.kt)("h3",{id:"major-enhancements"},"Major Enhancements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Byron Genesis Support: Added capability to create Byron genesis files in the create-testnet-data command"),(0,r.kt)("li",{parentName:"ul"},"HTTP Support for Anchor Data: Modified anchor-data checking to allow HTTP schema (with warnings) for testing purposes"),(0,r.kt)("li",{parentName:"ul"},"Minting Script Witness Refactoring: Introduced MintScriptWitnessWithPolicyId as a first step toward deprecating ScriptWitnessFiles, making the code more maintainable and flexible"),(0,r.kt)("li",{parentName:"ul"},"Code Sharing Improvements: Implemented shared code between genesis commands and query fields, reducing duplication and improving maintainability")),(0,r.kt)("h3",{id:"api-enhancements"},"API Enhancements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Released cardano-api-10.3.0.0"),(0,r.kt)("li",{parentName:"ul"},"Implemented and exported the Convert typeclass for better eon type conversion handling"),(0,r.kt)("li",{parentName:"ul"},"Exposed functions for converting datums and scripts to JSON")),(0,r.kt)("h3",{id:"cardano-cli"},"cardano-cli"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-cli/pull/979"},"Allow and add warning for HTTP anchor-data")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-cli/pull/974"},"create-testnet-data: create byron genesis")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-cli/pull/973"},"genesis creation: share code")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-cli/pull/971"},"Minting script witness refactor")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-cli/pull/971"},"Minting script witness refactor")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-cli/pull/970"},"Remove usage of experimental api in transaction balancing")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-cli/pull/970"},"Remove usage of experimental api in transaction balancing")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-cli/pull/985"},"Share code in fields of queries"))),(0,r.kt)("h3",{id:"cardano-api"},"cardano-api"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-api/pull/688"},"Export GovActionIx from the ledger")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-api/pull/696"},"Export the Convert class")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-api/pull/689"},"Expose ",(0,r.kt)("inlineCode",{parentName:"a"},"EraTxWits"),", ",(0,r.kt)("inlineCode",{parentName:"a"},"TxDats"),", and functions for converting datums and scripts to JSON")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-api/pull/692"},"fromProposalProcedure: return StakeCredential")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-api/pull/690"},"Implement Convert typeclass")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-api/pull/663"},"Refactor ",(0,r.kt)("inlineCode",{parentName:"a"},"TxMintValue"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-api/pull/686"},"Release cardano-api-10.3.0.0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-api/pull/683"},"Update ScriptErrorEvaluationFailed with DebugPlutusFailure"))),(0,r.kt)("h3",{id:"cardano-node"},"cardano-node"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"None ")),(0,r.kt)("h3",{id:"cardano-testnet"},"cardano-testnet"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"None")),(0,r.kt)("h3",{id:"docs"},"docs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"None ")),(0,r.kt)("h3",{id:"ci--project-maintenance"},"CI & project maintenance"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"None")))}u.isMDXComponent=!0}}]);