"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[17584],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,h=u["".concat(p,".").concat(m)]||u[m]||c[m]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},17245:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={title:"SRE Team Update",slug:"2024-12-20-sre",authors:"johnalotoski",tags:["sre"],hide_table_of_contents:!1},i=void 0,l={permalink:"/2024-12-20-sre",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2024-12-20-sre.md",source:"@site/blog/2024-12-20-sre.md",title:"SRE Team Update",description:"High level summary",date:"2024-12-20T00:00:00.000Z",formattedDate:"December 20, 2024",tags:[{label:"sre",permalink:"/tags/sre"}],readingTime:1.27,hasTruncateMarker:!1,authors:[{name:"John Lotoski",title:"Service Reliability Engineer",url:"https://github.com/johnalotoski",imageURL:"https://github.com/johnalotoski.png",key:"johnalotoski"}],frontMatter:{title:"SRE Team Update",slug:"2024-12-20-sre",authors:"johnalotoski",tags:["sre"],hide_table_of_contents:!1},prevItem:{title:"Network Team Update",permalink:"/2024-12-23-network"},nextItem:{title:"Node API & CLI Team Update",permalink:"/2024-12-18-node-cli-api"}},p={authorsImageUrls:[void 0]},s=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Repository Work",id:"repository-work",level:2},{value:"Cardano-parts",id:"cardano-parts",level:3},{value:"Cardano-playground",id:"cardano-playground",level:3},{value:"Cardano-mainnet",id:"cardano-mainnet",level:3},{value:"Iohk-nix",id:"iohk-nix",level:3}],d={toc:s},u="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,r.kt)("p",null,"The SRE team continues work on Cardano environment improvements and general maintenance."),(0,r.kt)("p",null,"Some notable recent changes, updates or improvements include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Nixpkgs has been updated to ",(0,r.kt)("inlineCode",{parentName:"p"},"24.11")," across all environments")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Nix has been updated to ",(0,r.kt)("inlineCode",{parentName:"p"},"2.25.3")," across all environments")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"TCP tuning was applied on one relay per pool group across all environments to\nminimize round-tripping across long distances.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"This is the last SRE update for 2024.  Hello 2025!"))),(0,r.kt)("h2",{id:"repository-work"},"Repository Work"),(0,r.kt)("h3",{id:"cardano-parts"},"Cardano-parts"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Nixpkgs has been updated to ",(0,r.kt)("inlineCode",{parentName:"li"},"24.11")," and nix to ",(0,r.kt)("inlineCode",{parentName:"li"},"2.25.3"),". NixosModules and\ntemplate just recipes with breaking changes from those updates were fixed. A\nnix jobs GHA CI test was added to verify environment spin up procedure.\nTemplate scripts were updated for compatibility with latest cardano-node\nprotocol version and recent cardano-cli breaking changes. More details are\navailable in the release notes:\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-parts/releases/tag/v2024-12-19"},"cardano-parts-release-v2024-12-19"))),(0,r.kt)("h3",{id:"cardano-playground"},"Cardano-playground"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Nixpkgs has been updated to ",(0,r.kt)("inlineCode",{parentName:"li"},"24.11")," and nix to ",(0,r.kt)("inlineCode",{parentName:"li"},"2.25.3")," and all machines\ndeployed along with breaking changes fixes. A fund-transfer recipe was added\nalong with other miscellaneous improvements. More detail is available in the PR\ndescription:\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-playground/pull/38"},"cardano-playground-pull-38"))),(0,r.kt)("h3",{id:"cardano-mainnet"},"Cardano-mainnet"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Nixpkgs has been updated to ",(0,r.kt)("inlineCode",{parentName:"li"},"24.11")," and nix to ",(0,r.kt)("inlineCode",{parentName:"li"},"2.25.3")," and all machines deployed\nalong with breaking changes fixes. Bootstrap scaling servers were disabled and\nblock producer auto scheduled restarts were stopped. TCP transmission\noptimization for long distances was applied to one relay per pool group. More\ndetail is available in the PR description:\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-mainnet/pull/28"},"cardano-mainnet-pull-28"))),(0,r.kt)("h3",{id:"iohk-nix"},"Iohk-nix"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Tunes the target number of p2p established peers\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/iohk-nix/pull/591"},"iohk-nix-pull-591"))))}c.isMDXComponent=!0}}]);