"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[69574],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},54063:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={title:"SRE Q4 2023 Update",slug:"2023-Q4-sre",authors:"johnalotoski",tags:["sre"],hide_table_of_contents:!1},i=void 0,l={permalink:"/quarterly/2023-Q4-sre",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/quarterly/2023-Q4-sre.md",source:"@site/quarterly/2023-Q4-sre.md",title:"SRE Q4 2023 Update",description:"2023-10 - 2023-12",date:"2024-12-30T17:58:14.000Z",formattedDate:"December 30, 2024",tags:[{label:"sre",permalink:"/quarterly/tags/sre"}],readingTime:.915,hasTruncateMarker:!1,authors:[{name:"John Lotoski",title:"Service Reliability Engineer",url:"https://github.com/johnalotoski",imageURL:"https://github.com/johnalotoski.png",key:"johnalotoski"}],frontMatter:{title:"SRE Q4 2023 Update",slug:"2023-Q4-sre",authors:"johnalotoski",tags:["sre"],hide_table_of_contents:!1},prevItem:{title:"Performance & Tracing Q4 2023 Update",permalink:"/quarterly/2023-Q4-performance-and-tracing"},nextItem:{title:"SRE Q1 2024 Update",permalink:"/quarterly/2024-Q1-sre"}},p={authorsImageUrls:[void 0]},s=[{value:"2023-10 - 2023-12",id:"2023-10---2023-12",level:2},{value:"Main achievements",id:"main-achievements",level:3},{value:"Next steps",id:"next-steps",level:3}],c={toc:s},m="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"2023-10---2023-12"},"2023-10 - 2023-12"),(0,a.kt)("h3",{id:"main-achievements"},"Main achievements"),(0,a.kt)("p",null,"In addition to ongoing general maintenance and support of cardano environments,\nmain SRE achievements for this quarter include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Cardano-parts support was added for cardano-db-sync, cardano-smash,\ncardano-faucet, cardano-metadata, grafana monitoring along with a number of\nother features")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Completed migration of testnets from cardano-world to the cardano-playground cluster")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Completed migration of the cardano book from cardano-world to the cardano-playground\ncluster")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Completed migration of pools from cardano-ops to the cardano-mainnet cluster")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Creation of a mainnet p2p bootstrap cluster")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Cardano sanchonet environment respins during the quarter for testing new\ncardano-node pre-release Conway era functionality")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"All environments were upgraded to cardano-node 8.7.2 or 8.7.3 by the end of\nthe quarter")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Completion of a govtool backend deployment for Voltaire chain testing")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Creation of a cardano-monitoring repository,\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-monitoring"},"cardano-monitoring"),":"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"A new repository enabling agile deployment of EC2 monitoring servers,\ncompatible with OpenTofu grafana and mimir providers")))),(0,a.kt)("h3",{id:"next-steps"},"Next steps"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Scale down the mainnet non-p2p legacy cluster")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Add deployment support for new network services, such as Mithril")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Continue cardano-parts and operations improvements"))))}u.isMDXComponent=!0}}]);