"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[78584],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),p=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(a),m=n,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||l;return a?r.createElement(h,i(i({ref:t},s),{},{components:a})):r.createElement(h,i({ref:t},s))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},98826:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const l={title:"Node API & CLI Team Update",slug:"20240806-node-cli-api",authors:"Jimbo4350",tags:["cli-api"],hide_table_of_contents:!1},i="Node-Api-Cli Update",o={permalink:"/20240806-node-cli-api",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2024-08-06-node-cli-api.md",source:"@site/blog/2024-08-06-node-cli-api.md",title:"Node API & CLI Team Update",description:"High level summary",date:"2024-08-06T00:00:00.000Z",formattedDate:"August 6, 2024",tags:[{label:"cli-api",permalink:"/tags/cli-api"}],readingTime:.715,hasTruncateMarker:!1,authors:[{name:"Jordan Millar",title:"Node Team Lead",url:"https://github.com/Jimbo4350",imageURL:"https://github.com/Jimbo4350.png",key:"Jimbo4350"}],frontMatter:{title:"Node API & CLI Team Update",slug:"20240806-node-cli-api",authors:"Jimbo4350",tags:["cli-api"],hide_table_of_contents:!1},prevItem:{title:"Mithril Team Update",permalink:"/2024-08-07-mithril"},nextItem:{title:"Hydra Team Update",permalink:"/2024-07-31-hydra"}},c={authorsImageUrls:[void 0]},p=[{value:"High level summary",id:"high-level-summary",level:2},{value:"cardano-cli",id:"cardano-cli",level:3},{value:"cardano-api",id:"cardano-api",level:3},{value:"cardano-node",id:"cardano-node",level:3},{value:"cardano-testnet",id:"cardano-testnet",level:3}],s={toc:p},u="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"2024-07-22---2024-08-06"},"2024-07-22 - 2024-08-06"),(0,n.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-node/releases/tag/9.1.0"},"Cardano-node 9.1.0 release summary"))),(0,n.kt)("h3",{id:"cardano-cli"},"cardano-cli"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-cli/pull/847"},"Release cardano-cli-9.2.1.0")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-cli/pull/846"},"Release cardano-cli-9.2.0.0")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-cli/pull/852"},"Use ",(0,n.kt)("inlineCode",{parentName:"a"},"IsList(toList,fromList)")," instead of specialised functions")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-cli/pull/851"},"Fix invalid sync percentage display in ",(0,n.kt)("inlineCode",{parentName:"a"},"query tip"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-cli/pull/845"},'Add "query treasury" command')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-cli/pull/822"},"Plutus V3 script updates"))),(0,n.kt)("h3",{id:"cardano-api"},"cardano-api"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-api/pull/593"},"Release cardano-api-9.1.0.0")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-api/pull/603"},"Remove CPP extension from ",(0,n.kt)("inlineCode",{parentName:"a"},"Cardano.Api.Fees"),".  Use ",(0,n.kt)("inlineCode",{parentName:"a"},"IsList(toList,fromList)")," instead of specialised functions.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-api/pull/599"},"Make it build with ghc-9.10")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-api/pull/598"},"Expose ",(0,n.kt)("inlineCode",{parentName:"a"},"querySPOStakeDistribution")," query")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-api/pull/595"},"Modify TxCertificates allow multiple script witnesses for a single stake credential"))),(0,n.kt)("h3",{id:"cardano-node"},"cardano-node"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-node/pull/5910"},"Cardano-node 9.1.0 release")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-node/pull/5896"},"Make Plutus v2 cost model decoding era dependent")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-node/pull/5924"},"New tracing system: actually trace GSM events"))),(0,n.kt)("h3",{id:"cardano-testnet"},"cardano-testnet"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-node/pull/5919"},"cardano-testnet | Add ",(0,n.kt)("inlineCode",{parentName:"a"},"cardano-cli query treasury"),"  check in treasury growth test")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-node/pull/5896"},"Make Plutus v2 cost model decoding era dependent")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-node/pull/5875"},"[cardano-testnet] Fix flaky test workspace cleanup and node port allocation"))))}d.isMDXComponent=!0}}]);