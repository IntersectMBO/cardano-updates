"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[92680],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=d(a),u=r,h=c["".concat(p,".").concat(u)]||c[u]||m[u]||o;return a?n.createElement(h,i(i({ref:t},s),{},{components:a})):n.createElement(h,i({ref:t},s))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},69753:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const o={title:"SRE Team Update",slug:"2024-05-24-sre",authors:"johnalotoski",tags:["sre"],hide_table_of_contents:!1},i=void 0,l={permalink:"/2024-05-24-sre",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2024-05-24-sre.md",source:"@site/blog/2024-05-24-sre.md",title:"SRE Team Update",description:"High level summary",date:"2024-05-24T00:00:00.000Z",formattedDate:"May 24, 2024",tags:[{label:"sre",permalink:"/tags/sre"}],readingTime:1.53,hasTruncateMarker:!1,authors:[{name:"John Lotoski",title:"Service Reliability Engineer",url:"https://github.com/johnalotoski",imageURL:"https://github.com/johnalotoski.png",key:"johnalotoski"}],frontMatter:{title:"SRE Team Update",slug:"2024-05-24-sre",authors:"johnalotoski",tags:["sre"],hide_table_of_contents:!1},prevItem:{title:"Performance & Tracing Update",permalink:"/2024-05-24-performance-and-tracing"},nextItem:{title:"Ledger Team Update",permalink:"/2024-05-22-ledger"}},p={authorsImageUrls:[void 0]},d=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Lower level summary",id:"lower-level-summary",level:2},{value:"Capkgs:",id:"capkgs",level:3},{value:"Cardano-parts",id:"cardano-parts",level:3},{value:"Cardano-mainnet",id:"cardano-mainnet",level:3},{value:"Cardano-ogmios",id:"cardano-ogmios",level:3},{value:"Cardano-playground",id:"cardano-playground",level:3}],s={toc:d},c="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,r.kt)("p",null,"The SRE team continues work on cardano environment improvements and general\nenvironment maintenance."),(0,r.kt)("p",null,"Some notable recent changes, updates or improvements include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Sanchonet was respun for cardano-node ",(0,r.kt)("inlineCode",{parentName:"p"},"8.11.0-pre"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Private chain was respun twice for pre-sancho respin testing and short epoch\ntesting with cardano-node ",(0,r.kt)("inlineCode",{parentName:"p"},"8.11.0-pre"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Shelley-qa, two-thirds of preview and one-third of preprod networks were\ndeployed to cardano-node ",(0,r.kt)("inlineCode",{parentName:"p"},"8.11.0-pre"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Sanchonet, private chain and shelley-qa networks had dbsync ",(0,r.kt)("inlineCode",{parentName:"p"},"sancho-4-3-0"),"\ndeployed")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A dbsync ",(0,r.kt)("inlineCode",{parentName:"p"},"show_current_forging")," prepared statement was added to the\ncardano-parts ",(0,r.kt)("inlineCode",{parentName:"p"},"profile-cardano-postgres")," nixosModule to aid with debugging\nchain quality issues")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Three documents were added to cardano-playground to better explain some\noperations procedures: KES rotation, chain quality debugging and new network\ncreation. Found at:\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-playground/tree/main/docs/explain"},"docs/explain"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A new mithril dashboard template is available in cardano-parts"))),(0,r.kt)("h2",{id:"lower-level-summary"},"Lower level summary"),(0,r.kt)("h3",{id:"capkgs"},"Capkgs:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Avoid git API rate limit errors on update github action via netrc usage and\ncorresponding secret:\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/capkgs/commit/1f3bf0a49e79d71d593f7de80ed783e5e2cb7053"},"capkgs-commit"))),(0,r.kt)("h3",{id:"cardano-parts"},"Cardano-parts"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sets cardano-node-ng to ",(0,r.kt)("inlineCode",{parentName:"li"},"8.11.0-pre")," and cardano-db-sync-ng to ",(0,r.kt)("inlineCode",{parentName:"li"},"sancho-4-3-0"),".\nAdds a dbsync prepared statement, mithril dashboard template, updates the\nnode application dashboard template, improves justfile recipe templates and\ntunes some systemd dependencies. Iohk-nix-ng was updated for sanchonet and\nprivate chain respins. More detail is available in the PR description:\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-parts/pull/41"},"cardano-parts-pull-41"))),(0,r.kt)("h3",{id:"cardano-mainnet"},"Cardano-mainnet"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Rotates KES, pins iogp4 as ",(0,r.kt)("inlineCode",{parentName:"li"},"-ng"),", adds a mithril dashboard, updates the node\napplication dashboard, improves justfile recipes and tunes systemd node and\nmithril services to avoid some edge case errors. See the PR description for\nmore details:\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-mainnet/pull/15"},"cardano-mainnet-pull-15"))),(0,r.kt)("h3",{id:"cardano-ogmios"},"Cardano-ogmios"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Build ogmios ",(0,r.kt)("inlineCode",{parentName:"li"},"v6.3.0")," with nix:\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ogmios/compare/main...ogmios-6-3-0"},"cardano-ogmios-branch-compare"))),(0,r.kt)("h3",{id:"cardano-playground"},"Cardano-playground"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Respins sancho and private chains and deploys cardano-node ",(0,r.kt)("inlineCode",{parentName:"li"},"8.11.0-pre")," and\ncardano-db-sync ",(0,r.kt)("inlineCode",{parentName:"li"},"sancho-4-3-0")," to appropriate envs and machines. Adds a mithril\ndashboard template, updates the node application dashboard template, improves\njustfile recipe templates. Adds three new explainer readme documents. See the\nPR description for more details:\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-playground/pull/24"},"cardano-playground-pull-24"))))}m.isMDXComponent=!0}}]);