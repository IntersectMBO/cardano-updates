"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[96229],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,f=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},15203:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={title:"SRE Q1 2024 Update",slug:"2024-Q1-sre",authors:"johnalotoski",tags:["sre"],hide_table_of_contents:!1},i=void 0,l={permalink:"/quarterly/2024-Q1-sre",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/quarterly/2024-Q1-sre.md",source:"@site/quarterly/2024-Q1-sre.md",title:"SRE Q1 2024 Update",description:"2024-01 - 2024-03",date:"2024-04-17T19:23:42.000Z",formattedDate:"April 17, 2024",tags:[{label:"sre",permalink:"/quarterly/tags/sre"}],readingTime:1.97,hasTruncateMarker:!1,authors:[{name:"John Lotoski",title:"Service Reliability Engineer",url:"https://github.com/johnalotoski",imageURL:"https://github.com/johnalotoski.png",key:"johnalotoski"}],frontMatter:{title:"SRE Q1 2024 Update",slug:"2024-Q1-sre",authors:"johnalotoski",tags:["sre"],hide_table_of_contents:!1},prevItem:{title:"SRE Q2 2024 Update",permalink:"/quarterly/2024-Q2-sre"},nextItem:{title:"Performance & Tracing Q4 2023 Update",permalink:"/quarterly/2023-Q4-performance-and-tracing"}},s={authorsImageUrls:[void 0]},p=[{value:"2024-01 - 2024-03",id:"2024-01---2024-03",level:2},{value:"Main achievements",id:"main-achievements",level:3},{value:"Next steps",id:"next-steps",level:3}],c={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"2024-01---2024-03"},"2024-01 - 2024-03"),(0,r.kt)("h3",{id:"main-achievements"},"Main achievements"),(0,r.kt)("p",null,"In addition to ongoing general maintenance and support of cardano environments,\nmain SRE achievements for this quarter include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"All cardano release environments, including preview, preprod, mainnet legacy\nand mainnet new clusters were upgraded through cardano-node releases of\n8.7.3, 8.9.0 and finally into 8.9.1 by the end of March")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"All cardano pre-release environments, including sanchonet, private chain, and\nshelley-qa clusters were upgraded through cardano-node releases of 8.7.3,\n8.8.0-pre, 8.8.1-pre, 8.9.0 and finally into 8.9.1 by the end of March")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Sanchonet and private chain environments were both re-spun once each during\nthis quarter to support new pre-release versions of cardano-node in the Conway era")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cardano-parts added a cardano-db-sync process-compose stack for each\nenvironment")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cardano-parts added a cardano-node process-compose stack for each environment")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cardano-parts added enhancements for topology related nixos modules and\nfunctions to accomodate new bootstrapPeer functionality, new topology\nattributes and increased complexity network deployments.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cardano-parts added support for mithril signers integrated with block\nproducers and a mithril-signer-verifier service for monitoring")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Sanchonet, preview, preprod and mainnet IOG block producers are now signing\nmithril certificates")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cardano-parts added support for mithril clients in nixos cardano-node systemd\nservice, process-compose job stacks and nix cardano-node entrypoint, all of\nwhich also require any mithril snapshot to be signed by a trusted IOG pool\nprior to use")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cardano-parts added ip integration tooling, so that similar to other deployer\ntools like nixops, nixosConfigurations possess ip information which can be\nused in module configuration")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cardano-db-sync snapshots server migration from legacy mainnet cluster to new\nmainnet cluster with a rewrite of the snapshot service was completed")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cardano metadata server migration to Cardano Foundation was completed")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"BlockPerf, a cardano-node performance monitoring tool, was integrated into the\nnew mainnet cluster relays")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cardano-node bootstrapPeer functionality was added with node 8.9.x, requiring\neffort to align nixos service module code between cardano-node nixos\nservices, iohk-nix topology generation, cardano-ops legacy code, and\ncardano-parts module compatibility as well as feature test under various edge\ncases")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cardano-playground added govtool backend support for private chain voltaire\ntesting team"))),(0,r.kt)("h3",{id:"next-steps"},"Next steps"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Add support for the new cardano-node metrics system")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Add IPv6 cardano-parts support")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Extend govtool frontend and backend to a process-compose stack")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Adapt network spin-up tooling for the new create-testnet-data cardano-cli command")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Continue cardano-parts and operations improvements"))))}m.isMDXComponent=!0}}]);