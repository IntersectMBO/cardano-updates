"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[83332],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,h=u["".concat(p,".").concat(m)]||u[m]||c[m]||o;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58772:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={title:"SRE Team Update",slug:"2024-11-29-sre",authors:"johnalotoski",tags:["sre"],hide_table_of_contents:!1},l=void 0,i={permalink:"/2024-11-29-sre",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2024-11-29-sre.md",source:"@site/blog/2024-11-29-sre.md",title:"SRE Team Update",description:"High level summary",date:"2024-11-29T00:00:00.000Z",formattedDate:"November 29, 2024",tags:[{label:"sre",permalink:"/tags/sre"}],readingTime:.94,hasTruncateMarker:!1,authors:[{name:"John Lotoski",title:"Service Reliability Engineer",url:"https://github.com/johnalotoski",imageURL:"https://github.com/johnalotoski.png",key:"johnalotoski"}],frontMatter:{title:"SRE Team Update",slug:"2024-11-29-sre",authors:"johnalotoski",tags:["sre"],hide_table_of_contents:!1},prevItem:{title:"Node API & CLI Team Update",permalink:"/2024-12-04-node-cli-api"},nextItem:{title:"Hydra Team Update",permalink:"/2024-11-28-hydra"}},p={authorsImageUrls:[void 0]},s=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Repository Work",id:"repository-work",level:2},{value:"Cardano-node",id:"cardano-node",level:3},{value:"Cardano-parts",id:"cardano-parts",level:3},{value:"Cardano-playground",id:"cardano-playground",level:3},{value:"Cardano-mainnet",id:"cardano-mainnet",level:3},{value:"Iohk-nix",id:"iohk-nix",level:3}],d={toc:s},u="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,r.kt)("p",null,"The SRE team continues work on Cardano environment improvements and general maintenance."),(0,r.kt)("p",null,"Some notable recent changes, updates or improvements include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cardano-node release ",(0,r.kt)("inlineCode",{parentName:"p"},"10.1.3")," was deployed to all environments")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Dbsync release ",(0,r.kt)("inlineCode",{parentName:"p"},"13.6.0.2")," and then ",(0,r.kt)("inlineCode",{parentName:"p"},"13.6.0.4")," was deployed to all environments")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Mainnet bootstraps have been configured for Cardano Foundation scrape, enabling a shared dashboard"))),(0,r.kt)("h2",{id:"repository-work"},"Repository Work"),(0,r.kt)("h3",{id:"cardano-node"},"Cardano-node"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ensures legacy tracing is default via config when the node default itself\nchanges to new tracing system. Fixes default OCI mainnet topology p2p json.\nUpdates some OCI legacy cmds and repo references.\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-node/pull/6042"},"cardano-node-pull-6042"))),(0,r.kt)("h3",{id:"cardano-parts"},"Cardano-parts"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sets cardano-node to 10.1.3, dbsync to 13.6.0.4. Updates the default\ncardano-node nixos service to maintain legacy tracing when the default tracing\nsystem changes in the next node release.\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-parts/releases/tag/v2024-12-02"},"cardano-parts-release-v2024-12-02"))),(0,r.kt)("h3",{id:"cardano-playground"},"Cardano-playground"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Deploys cardano-node to 10.1.3, dbsync to 13.6.0.4 to all environments and updates the cardano book.\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-playground/pull/37"},"cardano-playground-pull-37"))),(0,r.kt)("h3",{id:"cardano-mainnet"},"Cardano-mainnet"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Deploys cardano-node to 10.1.3, dbsync to 13.6.0.4. Adjust bootstraps for CF metrics scrape.\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-mainnet/pull/27"},"cardano-mainnet-pull-27"))),(0,r.kt)("h3",{id:"iohk-nix"},"Iohk-nix"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ensure the use of legacy tracing for iohk-nix generated configs when the node binary defaults to new tracing.\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/iohk-nix/pull/590"},"iohk-nix-pull-590"))))}c.isMDXComponent=!0}}]);