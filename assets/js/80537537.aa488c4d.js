"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[43140],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>h});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var l=n.createContext({}),u=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},c=function(t){var e=u(t.components);return n.createElement(l.Provider,{value:e},t.children)},m="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,l=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),m=u(a),s=r,h=m["".concat(l,".").concat(s)]||m[s]||d[s]||i;return a?n.createElement(h,o(o({ref:e},c),{},{components:a})):n.createElement(h,o({ref:e},c))}));function h(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,o=new Array(i);o[0]=s;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=t,p[m]="string"==typeof t?t:r,o[1]=p;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},88265:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const i={title:"Node API & CLI Team Update",slug:"2023-08-01-node-cli-api",tags:["cli-api"],authors:"carlos",hide_table_of_contents:!1},o="Node-Api-Cli Update",p={permalink:"/2023-08-01-node-cli-api",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2023-08-01-node-cli-api.md",source:"@site/blog/2023-08-01-node-cli-api.md",title:"Node API & CLI Team Update",description:"High level summary",date:"2023-08-01T00:00:00.000Z",formattedDate:"August 1, 2023",tags:[{label:"cli-api",permalink:"/tags/cli-api"}],readingTime:1.76,hasTruncateMarker:!1,authors:[{name:"Carlos LopezDeLara",title:"Node Product Owner",url:"https://github.com/CarlosLopezDeLara",imageURL:"https://github.com/CarlosLopezDeLara.png",key:"carlos"}],frontMatter:{title:"Node API & CLI Team Update",slug:"2023-08-01-node-cli-api",tags:["cli-api"],authors:"carlos",hide_table_of_contents:!1},prevItem:{title:"SRE Team Update",permalink:"/2023-08-04-sre"},nextItem:{title:"Network Team Update",permalink:"/2023-07-31-network"}},l={authorsImageUrls:[void 0]},u=[{value:"High level summary",id:"high-level-summary",level:2},{value:"cardano-cli",id:"cardano-cli",level:3},{value:"cardano-api",id:"cardano-api",level:3},{value:"cardano-node",id:"cardano-node",level:3},{value:"cardano-testnet",id:"cardano-testnet",level:3},{value:"docs",id:"docs",level:3},{value:"CI &amp; project maintenance",id:"ci--project-maintenance",level:3}],c={toc:u},m="wrapper";function d(t){let{components:e,...a}=t;return(0,r.kt)(m,(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"2023-07-19---2023-08-01"},"2023-07-19 - 2023-08-01"),(0,r.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Release of Node 8.2.0",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Updates to the ledger packages extend progress on the Conway ledger era to support new governance features via CIP-1694."),(0,r.kt)("li",{parentName:"ul"},"This release is phase 1 of the SanchoNet roll out"),(0,r.kt)("li",{parentName:"ul"},"Allows SPOs to vote on changes to the on-chain constitution."),(0,r.kt)("li",{parentName:"ul"},"Ability to start the node in block production mode with no secrets loaded using the --non-producing-node flag."),(0,r.kt)("li",{parentName:"ul"},"Updates to the networking packages prepare the road for peer sharing."))),(0,r.kt)("li",{parentName:"ul"},"cardano-cli and cardano-api continue to integrate Conway era features"),(0,r.kt)("li",{parentName:"ul"},"Continue refactoring of cardano-testnet")),(0,r.kt)("h3",{id:"cardano-cli"},"cardano-cli"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-cli/pull/116"},"Use AnyShelleyToBabbageEra from cardano-api instead")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-cli/pull/115"},"Update to ",(0,r.kt)("inlineCode",{parentName:"a"},"cardano-api-8.10.2.0"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-cli/pull/113"},"Add rendering for ",(0,r.kt)("inlineCode",{parentName:"a"},"ConwayCertificate")," in ",(0,r.kt)("inlineCode",{parentName:"a"},"Cardano.Cli.Json.Friendly"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-cli/pull/111"},"Update to ",(0,r.kt)("inlineCode",{parentName:"a"},"cardano-api-8.10.1.0"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-cli/pull/110"},"Add DRep registration certificate command")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-cli/pull/109"},"Add options to delegate voting stake ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-cli/pull/107"},"Share MIR certificates code between era-based and legacy CLI parsers")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-cli/pull/106"},"Release cardano-cli 8.4.0.0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-cli/pull/103"},"Update to",(0,r.kt)("inlineCode",{parentName:"a"},"cardano-api-8.10.0.0"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-cli/pull/100"},"Change directory structure from Options/.. to EraBased/..")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-cli/pull/98"},"Era-sensitive command structure")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-cli/pull/90"},"#86 Set default era to Babbage in stake-address, stake-pool and governance commmands"))),(0,r.kt)("h3",{id:"cardano-api"},"cardano-api"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-api/pull/155"},"Deprecate ",(0,r.kt)("inlineCode",{parentName:"a"},"shelleyCertificateConstraints")," and ",(0,r.kt)("inlineCode",{parentName:"a"},"conwayCertificateConstraints"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-api/pull/154"},"Deprecate ",(0,r.kt)("inlineCode",{parentName:"a"},"TxVotesSupportedInEra"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-api/pull/152"},"Add SerialiseAsBech32 instances for committee cold and hot keys")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-api/pull/151"},"Deprecate some constraint functions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-api/pull/150"},"Deprecate ",(0,r.kt)("inlineCode",{parentName:"a"},"TxGovernanceActionSupportedInEra"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-api/pull/149"},"More ",(0,r.kt)("inlineCode",{parentName:"a"},"shelleyBasedEraConstraint")," constraints")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-api/pull/148"},"New version ",(0,r.kt)("inlineCode",{parentName:"a"},"cardano-api-8.10.2.0"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-api/pull/147"},"Expose shelleyCertificateConstraints and conwayCertificateConstraints")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-api/pull/146"},"Remove unnecessary function ",(0,r.kt)("inlineCode",{parentName:"a"},"getShelleyEraTxBodyConstraint"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-api/pull/143"},"Provide additional constraints in ",(0,r.kt)("inlineCode",{parentName:"a"},"shelleyBasedEraConstraints"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-api/pull/142"},"Update changelogs for ",(0,r.kt)("inlineCode",{parentName:"a"},"cardano-api-8.10.1.0"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-api/pull/141"},"handleFileForWritingWithOwnerPermissionImpl: Fix permisions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-api/pull/138"},"Update DRepKey with correct ",(0,r.kt)("inlineCode",{parentName:"a"},"Voting")," keyrole")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-api/pull/137"},"Support more constraints for Conway witnesses")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-api/pull/135"},"New version ",(0,r.kt)("inlineCode",{parentName:"a"},"cardano-api-8.10.0.0"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-api/pull/134"},"Expose toShelleyPoolParams for conway integration")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-api/pull/131"},(0,r.kt)("inlineCode",{parentName:"a"},"FeatureInEra")," instance for ",(0,r.kt)("inlineCode",{parentName:"a"},"ShelleyBasedEra"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-api/pull/130"},"Expose more functionality from cardano-api")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-api/pull/128"},"Improved feature ergonomics")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-api/pull/127"},"Rename ",(0,r.kt)("inlineCode",{parentName:"a"},"AtMostBabbageEra")," to ",(0,r.kt)("inlineCode",{parentName:"a"},"ShelleyToBabbageEra")))),(0,r.kt)("h3",{id:"cardano-node"},"cardano-node"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/5412"},"Fix stubbed LogFormatting instances")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/5411"},"8.2.0 version bumps")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/5409"},"Bump network packages version")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/5404"},"Fix missing ",(0,r.kt)("inlineCode",{parentName:"a"},"ToObject")," tracing instances.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/5401"},"input-output-hk/cardano-cli#85 Fix node crashing in babbage"))),(0,r.kt)("h3",{id:"cardano-testnet"},"cardano-testnet"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/5411"},"8.2.0 version bumps")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/5409"},"Bump network packages version")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/5404"},"Fix missing ",(0,r.kt)("inlineCode",{parentName:"a"},"ToObject")," tracing instances.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/5400"},"Fix plutus script costing in cardano-testnet"))),(0,r.kt)("h3",{id:"docs"},"docs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/5409"},"Bump network packages version"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/blob/05c0392b4722d7fe2f82db1854b28de4f28a917b/doc/getting-started/understanding-config-files.md?plain=1#L84C1-L97C42"},"WarmValency"))))),(0,r.kt)("h3",{id:"ci--project-maintenance"},"CI & project maintenance"))}d.isMDXComponent=!0}}]);