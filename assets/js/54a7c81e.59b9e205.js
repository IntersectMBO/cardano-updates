"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[16878],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>s});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),u=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},c=function(t){var e=u(t.components);return n.createElement(p.Provider,{value:e},t.children)},d="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),d=u(a),h=r,s=d["".concat(p,".").concat(h)]||d[h]||m[h]||i;return a?n.createElement(s,l(l({ref:e},c),{},{components:a})):n.createElement(s,l({ref:e},c))}));function s(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=h;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[d]="string"==typeof t?t:r,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},10396:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const i={title:"Node API & CLI Team Update",slug:"2023-10-24-node-cli-api",authors:"carlos",tags:["cli-api"],hide_table_of_contents:!1},l="Node-Api-Cli Update",o={permalink:"/2023-10-24-node-cli-api",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2023-10-24-node-cli-api.md",source:"@site/blog/2023-10-24-node-cli-api.md",title:"Node API & CLI Team Update",description:"High level summary",date:"2023-10-24T00:00:00.000Z",formattedDate:"October 24, 2023",tags:[{label:"cli-api",permalink:"/tags/cli-api"}],readingTime:1.68,hasTruncateMarker:!1,authors:[{name:"Carlos LopezDeLara",title:"Node Product Owner",url:"https://github.com/CarlosLopezDeLara",imageURL:"https://github.com/CarlosLopezDeLara.png",key:"carlos"}],frontMatter:{title:"Node API & CLI Team Update",slug:"2023-10-24-node-cli-api",authors:"carlos",tags:["cli-api"],hide_table_of_contents:!1},prevItem:{title:"Mithril Team Update",permalink:"/2023-10-25-mithril"},nextItem:{title:"Hydra Team Update",permalink:"/2023-10-20-hydra"}},p={authorsImageUrls:[void 0]},u=[{value:"High level summary",id:"high-level-summary",level:2},{value:"cardano-cli",id:"cardano-cli",level:3},{value:"cardano-api",id:"cardano-api",level:3},{value:"cardano-node",id:"cardano-node",level:3},{value:"cardano-testnet",id:"cardano-testnet",level:3},{value:"docs",id:"docs",level:3},{value:"CI &amp; project maintenance",id:"ci--project-maintenance",level:3}],c={toc:u},d="wrapper";function m(t){let{components:e,...a}=t;return(0,r.kt)(d,(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"2023-10-11---2023-10-24"},"2023-10-11 - 2023-10-24"),(0,r.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,r.kt)("p",null,"CARDANO-CLI"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Disambiguate cardano-cli stake credential related flags on treasury withdrawal governance actions making it easy to identify which is used for the deposit refund and which for the destination of the funds from the treasury if the action is ratified."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"stake-address-info")," now shows deposits balance."),(0,r.kt)("li",{parentName:"ul"},"Added ",(0,r.kt)("inlineCode",{parentName:"li"},"conway governance action view")," to allow to inspect governance action files before submitting them on a transaction."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"build-raw")," support for ",(0,r.kt)("inlineCode",{parentName:"li"},"--vote-file")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"--proposal-file"))),(0,r.kt)("p",null,"CARDANO-API"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Support DRep extended keys"),(0,r.kt)("li",{parentName:"ul"},"Support Plutus V1 in Conway")),(0,r.kt)("h3",{id:"cardano-cli"},"cardano-cli"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-cli/pull/394"},"Upgrade to ",(0,r.kt)("inlineCode",{parentName:"a"},"cardano-api-8.28.0.0"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-cli/pull/393"},"Simplify ",(0,r.kt)("inlineCode",{parentName:"a"},"toTxOutInAnyEra"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-cli/pull/390"},"Upgrade to ",(0,r.kt)("inlineCode",{parentName:"a"},"cardano-api-8.27.0.0"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-cli/pull/389"},"Upgrade to ",(0,r.kt)("inlineCode",{parentName:"a"},"cardano-api-8.26.0.0"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-cli/pull/380"},"Check that poll answer index is not negative, to avoid a Prelude.!! error")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-cli/pull/379"},"drep registration-certificate: add a golden test")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-cli/pull/378"},"Disambiguate treasury withdrawal flags")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-cli/pull/375"},"Make ",(0,r.kt)("inlineCode",{parentName:"a"},"stake-address-info")," query also return deposit")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-cli/pull/374"},"Add ",(0,r.kt)("inlineCode",{parentName:"a"},"conway governance action view"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-cli/pull/372"},"Ch/clearer anchor flags")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-cli/pull/371"},"Command argument types for ",(0,r.kt)("inlineCode",{parentName:"a"},"transaction")," commands")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-cli/pull/370"},"Remove eras' constitution-hash")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-cli/pull/368"},"Shelley to Alonzo: add create-genesis-key-delegation-certificate to governance")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-cli/pull/367"},"Enable reading of Conway ",(0,r.kt)("inlineCode",{parentName:"a"},"TxWitness"),"es")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-cli/pull/366"},"Make ",(0,r.kt)("inlineCode",{parentName:"a"},"governance action create-protocol-parameters-update")," Conway onwards only")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-cli/pull/365"},(0,r.kt)("inlineCode",{parentName:"a"},"transaction build-raw")," support for ",(0,r.kt)("inlineCode",{parentName:"a"},"--vote-file")," and ",(0,r.kt)("inlineCode",{parentName:"a"},"--proposal-file"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-cli/pull/364"},"Command argument types for governance key commands")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-cli/pull/363"},"Add test of voting using a cc hot key"))),(0,r.kt)("h3",{id:"cardano-api"},"cardano-api"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-api/pull/338"},"Add Show instance for FoldBlocksError")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-api/pull/336"},"Upgrade typed-protocols to 1.1.1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-api/pull/332"},"Improved validity range handling")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-api/pull/331"},"New version ",(0,r.kt)("inlineCode",{parentName:"a"},"cardano-api-8.28.0.0"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-api/pull/330"},"Delete ",(0,r.kt)("inlineCode",{parentName:"a"},"AlonzoEraOnly"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-api/pull/329"},"New ",(0,r.kt)("inlineCode",{parentName:"a"},"shelleyToAlonzoEraToShelleyToBabbageEra")," function")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-api/pull/327"},"DRep extended key: add CastVerificationKeyRole")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-api/pull/326"},"New version ",(0,r.kt)("inlineCode",{parentName:"a"},"cardadno-api-8.27.0.0"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-api/pull/325"},"Delete unnecessary calls to ",(0,r.kt)("inlineCode",{parentName:"a"},"shelleyBasedEraConstraints"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-api/pull/324"},"New version ",(0,r.kt)("inlineCode",{parentName:"a"},"cardadno-api-8.27.0.0"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-api/pull/323"},"Support Plutus V1 in Conway")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-api/pull/322"},"Parameterize GovernanceAction on era ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-api/pull/320"},"Support DRep extended keys")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-api/pull/317"},"New version ",(0,r.kt)("inlineCode",{parentName:"a"},"cardano-api-8.26.0.0"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-api/pull/314"},"Haddock document the case functions, so that their behavior is easier to understand when calling them")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-api/pull/313"},"Avoid ",(0,r.kt)("inlineCode",{parentName:"a"},"IsShelleyBasedEra")," and ",(0,r.kt)("inlineCode",{parentName:"a"},"IsCardanoEra")," where possible")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-api/pull/312"},"New ",(0,r.kt)("inlineCode",{parentName:"a"},"MaryEraOnly")," eon. Disjoint functions"))),(0,r.kt)("h3",{id:"cardano-node"},"cardano-node"),(0,r.kt)("h3",{id:"cardano-testnet"},"cardano-testnet"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/5515"},"Factor out file creation for SPO"))),(0,r.kt)("h3",{id:"docs"},"docs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/5504"},"Tracer documentation generation enhacements "))),(0,r.kt)("h3",{id:"ci--project-maintenance"},"CI & project maintenance"))}m.isMDXComponent=!0}}]);