"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[12023],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,h=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},16926:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={title:"SRE Team Update",slug:"2024-04-12-sre",authors:"johnalotoski",tags:["sre"],hide_table_of_contents:!1},l=void 0,i={permalink:"/2024-04-12-sre",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2024-04-12-sre.md",source:"@site/blog/2024-04-12-sre.md",title:"SRE Team Update",description:"High level summary",date:"2024-04-12T00:00:00.000Z",formattedDate:"April 12, 2024",tags:[{label:"sre",permalink:"/tags/sre"}],readingTime:1.435,hasTruncateMarker:!1,authors:[{name:"John Lotoski",title:"Service Reliability Engineer",url:"https://github.com/johnalotoski",imageURL:"https://github.com/johnalotoski.png",key:"johnalotoski"}],frontMatter:{title:"SRE Team Update",slug:"2024-04-12-sre",authors:"johnalotoski",tags:["sre"],hide_table_of_contents:!1},prevItem:{title:"Hydra Team Update",permalink:"/2024-04-12-hydra"},nextItem:{title:"Ledger Team Update",permalink:"/2024-04-10-ledger"}},p={authorsImageUrls:[void 0]},s=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Lower level summary",id:"lower-level-summary",level:2},{value:"Cardano-parts",id:"cardano-parts",level:3},{value:"Cardano-mainnet",id:"cardano-mainnet",level:3},{value:"Cardano-perf",id:"cardano-perf",level:3},{value:"Cardano-playground",id:"cardano-playground",level:3},{value:"Iohk-nix",id:"iohk-nix",level:3}],u={toc:s},d="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,r.kt)("p",null,"The SRE team continues work on cardano environment improvements and general\nenvironment maintenance."),(0,r.kt)("p",null,"Some notable recent changes, updates or improvements include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Private chain for Voltaire team was respun for cardano-node 8.10.0-pre\npre-release and re-hard forked into Conway era.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Sanchonet was respun for cardano-node 8.10.0-pre pre-release and re-hard\nforked into Conway era.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cardano-node 8.10.0-pre was also deployed to one-third of IOGs preprod\nenvironment nodes and two-thirds of IOGs preview environment nodes."))),(0,r.kt)("h2",{id:"lower-level-summary"},"Lower level summary"),(0,r.kt)("h3",{id:"cardano-parts"},"Cardano-parts"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sets cardano-node|cli-ng to 8.10.0-pre, dbsync-ng to sancho-4.1.0; bumps\nnixpkgs (23.11) and nixpkgs-unstable; improves, adds new and fixes a number\nof just recipes; allows repo custom recipes to be kept as a separate import\nfor easy justfile maintenance; refactors ip module checking into its own\nnixosModule and adds an extra abort option for safety. Much more detail is\navailable in the PR description:\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-parts/pull/36"},"cardano-parts-pull-36"))),(0,r.kt)("h3",{id:"cardano-mainnet"},"Cardano-mainnet"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Bumps cardano-parts for a number of recipe additions, improvements, fixes.\nFixes blockperf dnsmasq looksups and adjusts colmena topology code to account\nfor intra-cluster localRoots now defaulting to trustable true and implements\nall updates in cardano-parts PR#36.  See the PR description for more details:\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-mainnet/pull/11"},"cardano-mainnet-pull-11"))),(0,r.kt)("h3",{id:"cardano-perf"},"Cardano-perf"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add a new perf-ssd machine class and deployment for ssd related performance\ntesting and benchmarking.  Add new just recipes and cluster resource tagging.\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-perf/compare/19a7ddd...a6a9b39"},"cardano-perf-compare"))),(0,r.kt)("h3",{id:"cardano-playground"},"Cardano-playground"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Bumps cardano-parts for a number of recipe additions, improvements, fixes,\nand node 8.10.0-pre. Respins private chain and sanchonet for node 8.10.0-pre\nwith corresponding book updates and implements all updates in cardano-parts\nPR#36.  See the PR description for more details:\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-playground/pull/20"},"cardano-playground-pull-20"))),(0,r.kt)("h3",{id:"iohk-nix"},"Iohk-nix"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"WIP: Prepares block producer configurations to accomodate upcoming peerSharing default change:\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/iohk-nix/pull/575"},"iohk-nix-pull-575"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Provides iohk-nix updates for node 8.10:\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/iohk-nix/pull/576"},"iohk-nix-pull-576")))))}c.isMDXComponent=!0}}]);