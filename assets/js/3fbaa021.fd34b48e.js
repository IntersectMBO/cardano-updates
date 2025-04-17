"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[41452],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),c=a,h=d["".concat(p,".").concat(c)]||d[c]||m[c]||o;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},48277:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={title:"SRE Team Update",slug:"2024-02-16-sre",authors:"johnalotoski",tags:["sre"],hide_table_of_contents:!1},l=void 0,i={permalink:"/2024-02-16-sre",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2024-02-16-sre.md",source:"@site/blog/2024-02-16-sre.md",title:"SRE Team Update",description:"High level summary",date:"2024-02-16T00:00:00.000Z",formattedDate:"February 16, 2024",tags:[{label:"sre",permalink:"/tags/sre"}],readingTime:1.03,hasTruncateMarker:!1,authors:[{name:"John Lotoski",title:"Service Reliability Engineer",url:"https://github.com/johnalotoski",imageURL:"https://github.com/johnalotoski.png",key:"johnalotoski"}],frontMatter:{title:"SRE Team Update",slug:"2024-02-16-sre",authors:"johnalotoski",tags:["sre"],hide_table_of_contents:!1},prevItem:{title:"Performance & Tracing Update",permalink:"/2024-02-16-performance-and-tracing"},nextItem:{title:"Node API & CLI Team Update",permalink:"/2024-02-15-node-cli-api"}},p={authorsImageUrls:[void 0]},s=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Lower level summary",id:"lower-level-summary",level:2},{value:"Cardano-mainnet",id:"cardano-mainnet",level:3},{value:"Cardano-parts",id:"cardano-parts",level:3},{value:"Cardano-parts",id:"cardano-parts-1",level:3},{value:"Iohk-nix",id:"iohk-nix",level:3}],u={toc:s},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,a.kt)("p",null,"The SRE team continues work on cardano environment improvements and general\nenvironment maintenance."),(0,a.kt)("p",null,"Some notable recent changes, updates or improvements include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Sanchonet state was respun from slot 14255995 for cardano-node 8.8.0-pre"),(0,a.kt)("li",{parentName:"ul"},"Cardano node 8.8.0-pre is now deployed to sanchonet, shelley-qa, two-thirds\nof preprod and one-third of preview networks"),(0,a.kt)("li",{parentName:"ul"},"IOG pool block producers are now signing mithril certificates for preview,\npreprod and mainnet networks"),(0,a.kt)("li",{parentName:"ul"},"A cardano performance dashboard is now available for both playground and\ncardano-mainnet deployments")),(0,a.kt)("h2",{id:"lower-level-summary"},"Lower level summary"),(0,a.kt)("h3",{id:"cardano-mainnet"},"Cardano-mainnet"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Adds mithril signers and perf dashboard to the mainnet cluster; improves\nnetwork docs, tunes alerts, plus misc fixes:\n",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-mainnet/pull/8"},"cardano-mainnet-pull-8"))),(0,a.kt)("h3",{id:"cardano-parts"},"Cardano-parts"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Adds mithril signer capability to role-block-producer nixosModule, adds a\nprofile-mithril-relay nixosModule and includes misc other improvements and\nfixes:\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-parts/pull/31"},"cardano-parts-pull-31"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Updates packages for sanchonet respin, adds a node performance dashboard\ntemplate and fixes misc issues:\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-parts/pull/32"},"cardano-parts-pull-32")))),(0,a.kt)("h3",{id:"cardano-parts-1"},"Cardano-parts"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Adds mithril signers and mithril relays to preview and preprod networks and\nincludes misc other improvements and fixes:\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-playground/pull/15"},"cardano-playground-pull-15"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Updates machines and pin for sanchonet respin, adds a node performance\ndashboard and fixes misc issues:\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-playground/pull/16"},"cardano-playground-pull-16")))),(0,a.kt)("h3",{id:"iohk-nix"},"Iohk-nix"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Updates conway-genesis for node 8.8.0-pre:\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/iohk-nix/pull/571"},"iohk-nix-pull-571"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Updates useLedgerAfterSlot for respin of sanchonet:\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/iohk-nix/pull/572"},"iohk-nix-pull-572")))))}m.isMDXComponent=!0}}]);