"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[5354],{3905:(e,a,t)=>{t.d(a,{Zo:()=>s,kt:()=>h});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),d=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},s=function(e){var a=d(e.components);return n.createElement(p.Provider,{value:a},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(t),m=r,h=u["".concat(p,".").concat(m)]||u[m]||c[m]||i;return t?n.createElement(h,o(o({ref:a},s),{},{components:t})):n.createElement(h,o({ref:a},s))}));function h(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var p in a)hasOwnProperty.call(a,p)&&(l[p]=a[p]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=t[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1845:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=t(87462),r=(t(67294),t(3905));const i={title:"SRE Team Update",slug:"2024-10-04-sre",authors:"johnalotoski",tags:["sre"],hide_table_of_contents:!1},o=void 0,l={permalink:"/2024-10-04-sre",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2024-10-04-sre.md",source:"@site/blog/2024-10-04-sre.md",title:"SRE Team Update",description:"High level summary",date:"2024-10-04T00:00:00.000Z",formattedDate:"October 4, 2024",tags:[{label:"sre",permalink:"/tags/sre"}],readingTime:1.555,hasTruncateMarker:!1,authors:[{name:"John Lotoski",title:"Service Reliability Engineer",url:"https://github.com/johnalotoski",imageURL:"https://github.com/johnalotoski.png",key:"johnalotoski"}],frontMatter:{title:"SRE Team Update",slug:"2024-10-04-sre",authors:"johnalotoski",tags:["sre"],hide_table_of_contents:!1},prevItem:{title:"Performance & Tracing Update",permalink:"/2024-10-07-performance-and-tracing"},nextItem:{title:"Hydra Team Update",permalink:"/2024-10-03-hydra"}},p={authorsImageUrls:[void 0]},d=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Repository Work",id:"repository-work",level:2},{value:"Cardano-faucet",id:"cardano-faucet",level:3},{value:"Cardano-parts",id:"cardano-parts",level:3},{value:"Cardano-playground",id:"cardano-playground",level:3},{value:"Cardano-mainnet",id:"cardano-mainnet",level:3}],s={toc:d},u="wrapper";function c(e){let{components:a,...t}=e;return(0,r.kt)(u,(0,n.Z)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,r.kt)("p",null,"The SRE team continues work on Cardano environment improvements and general maintenance."),(0,r.kt)("p",null,"Some notable recent changes, updates or improvements include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"All environments have been upgraded to cardano-node ",(0,r.kt)("inlineCode",{parentName:"p"},"9.2.1"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cardano-faucet ",(0,r.kt)("inlineCode",{parentName:"p"},"9.2")," is available and deployed which is compatible with node\n",(0,r.kt)("inlineCode",{parentName:"p"},"9.2.x")," and has fixed ipv6 functionality.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"All deployed machines now default to nix ",(0,r.kt)("inlineCode",{parentName:"p"},"2.24-maint")," after an upstream bug\ncausing a hash miscalculation in submodules has been fixed.  Nix ",(0,r.kt)("inlineCode",{parentName:"p"},"2.21"),"\nforward required some rework of the colmena deployment recipes as dirty git\ntrees now force an impure colmena deployment.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To ease the process of upgrading cardano-parts,\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-parts/releases"},"releases")," will\nnow be made instead of only PR merges with migration notes."))),(0,r.kt)("h2",{id:"repository-work"},"Repository Work"),(0,r.kt)("h3",{id:"cardano-faucet"},"Cardano-faucet"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Binds ipv6 interface in addition to ipv4, parses and logs all ips to a\nunified ipv6 format and applies hlint and fmt updates.\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-faucet/pull/14"},"cardano-faucet-pull-14"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Makes required changes for cardano-api ",(0,r.kt)("inlineCode",{parentName:"p"},"9.2.0.0")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"9.3.0.0"),",  removes void\ntype sig constraints, bumps haskellNix, CHaP, cardano-api -> ",(0,r.kt)("inlineCode",{parentName:"p"},"9.3.0.0")," for\nnode ",(0,r.kt)("inlineCode",{parentName:"p"},"9.2.x")," compatibility. Disables mingw32 builds until alex in current\nhaskellNix pin is updated.\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-faucet/pull/15"},"cardano-faucet-pull-15")))),(0,r.kt)("h3",{id:"cardano-parts"},"Cardano-parts"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sets cardano-node to ",(0,r.kt)("inlineCode",{parentName:"li"},"9.2.1"),", cardano-faucet to ",(0,r.kt)("inlineCode",{parentName:"li"},"9.2"),". Bumps nix to ",(0,r.kt)("inlineCode",{parentName:"li"},"2.24-maint"),"\nand adds ipv6 and nix versioning fixes and other improvements. Begins\ncardano-parts date-based releases for an improved upgrade process.\nAdds misc fixes and improvements. More detail is available in\nthe release notes:\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-parts/releases/tag/v2024-10-07"},"cardano-parts-release-v2024-10-07"))),(0,r.kt)("h3",{id:"cardano-playground"},"Cardano-playground"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Deploys cardano-node to ",(0,r.kt)("inlineCode",{parentName:"li"},"9.2.1"),", cardano-faucet to ",(0,r.kt)("inlineCode",{parentName:"li"},"9.2"),". Bumps nix to ",(0,r.kt)("inlineCode",{parentName:"li"},"2.24-maint"),"\nand adds ipv6 and nix versioning fixes and other improvements.  Adds a wip\nnode pparams api server. More detail is available in the PR description:\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-playground/pull/33"},"cardano-playground-pull-33"))),(0,r.kt)("h3",{id:"cardano-mainnet"},"Cardano-mainnet"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Deploys cardano-node to ",(0,r.kt)("inlineCode",{parentName:"li"},"9.2.1"),", bumps nix to ",(0,r.kt)("inlineCode",{parentName:"li"},"2.24-maint")," and adds ipv6 and\nnix versioning fixes and other improvements. Converts bootstraps to a new\ncached-index-patch branch and upgrades CF canary sql queries. More detail is\navailable in the PR description:\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-mainnet/pull/23"},"cardano-mainnet-pull-23"))))}c.isMDXComponent=!0}}]);