"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[35794],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return a?n.createElement(h,l(l({ref:t},d),{},{components:a})):n.createElement(h,l({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},57271:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={title:"SRE Team Update",slug:"2024-05-10-sre",authors:"johnalotoski",tags:["sre"],hide_table_of_contents:!1},l=void 0,i={permalink:"/2024-05-10-sre",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2024-05-10-sre.md",source:"@site/blog/2024-05-10-sre.md",title:"SRE Team Update",description:"High level summary",date:"2024-05-10T00:00:00.000Z",formattedDate:"May 10, 2024",tags:[{label:"sre",permalink:"/tags/sre"}],readingTime:1.69,hasTruncateMarker:!1,authors:[{name:"John Lotoski",title:"Service Reliability Engineer",url:"https://github.com/johnalotoski",imageURL:"https://github.com/johnalotoski.png",key:"johnalotoski"}],frontMatter:{title:"SRE Team Update",slug:"2024-05-10-sre",authors:"johnalotoski",tags:["sre"],hide_table_of_contents:!1},prevItem:{title:"Hydra Team Update",permalink:"/2024-05-10-hydra"},nextItem:{title:"Ledger Team Update",permalink:"/2024-05-08-ledger"}},s={authorsImageUrls:[void 0]},c=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Lower level summary",id:"lower-level-summary",level:2},{value:"Cardano-faucet",id:"cardano-faucet",level:3},{value:"Cardano-parts",id:"cardano-parts",level:3},{value:"Cardano-mainnet",id:"cardano-mainnet",level:3},{value:"Cardano-perf",id:"cardano-perf",level:3},{value:"Cardano-playground",id:"cardano-playground",level:3}],d={toc:c},u="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,r.kt)("p",null,"The SRE team continues work on cardano environment improvements and general\nenvironment maintenance."),(0,r.kt)("p",null,"Some notable recent changes, updates or improvements include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A preview of the new cardano tracing system is available by using the\n",(0,r.kt)("inlineCode",{parentName:"p"},"profile-cardano-node-new-tracing")," new nixosModule from cardano-parts and is\ncomplemented with new tracing system dashboards and alerts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Custom cardano metrics can be pushed to a statsd server and then scraped to a\nmonitoring solution using the ",(0,r.kt)("inlineCode",{parentName:"p"},"profile-cardano-custom-metrics")," new\nnixosModule from cardano-parts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A new cardano-parts job for spinning up clusters using a recent cardano-cli\ncommand, create-testnet-data, was implemented: ",(0,r.kt)("inlineCode",{parentName:"p"},".#job-gen-custom-node-config-data")))),(0,r.kt)("h2",{id:"lower-level-summary"},"Lower level summary"),(0,r.kt)("h3",{id:"cardano-faucet"},"Cardano-faucet"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cardano-faucet was upgraded to use the latest cardano-api and cardano-cli\nversions:\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-faucet/pull/10"},"cardano-faucet-pull-10"))),(0,r.kt)("h3",{id:"cardano-parts"},"Cardano-parts"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sets cardano-faucet-ng to 8.10, and mithril","[","-ng","]"," to 2418-1. A preview\nnixosModule for cardano-node's new tracing system has been added as well as a\ncardano custom-metrics module. Dashboards have been added for the new tracing\nsystem. Cardano-node alerts have been refactored into several rulesets which\ninclude some new alerts as well as new tracing system alerts. A job for\nspinning a cardano cluster up using a new underlying cardano-cli mechanism,\ncreate-testnet-data, was added. More detail is available in the PR description:\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-parts/pull/40"},"cardano-parts-pull-40"))),(0,r.kt)("h3",{id:"cardano-mainnet"},"Cardano-mainnet"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sets mithril to 2418-1. Cardano-node alerts have been refactored into\nseveral rulesets which include some new alerts as well as new tracing system\nalerts. See the PR description for more details:\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-mainnet/pull/14"},"cardano-mainnet-pull-14"))),(0,r.kt)("h3",{id:"cardano-perf"},"Cardano-perf"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cluster scaling changes and minor improvments to the perf machine cluster:\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-perf/compare/3cce0de...5631a13"},"cardano-perf-compare"))),(0,r.kt)("h3",{id:"cardano-playground"},"Cardano-playground"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sets cardano-faucet-ng to 8.10 which fixes a sanchonet faucet instability, and\nmithril","[","-ng","]"," to 2418-1. Adds a new cardano-node tracing system preview to some\nmachines with corresponding dashboards. Cardano-node alerts have been\nrefactored into several rulesets which include some new alerts as well as new\ntracing system alerts. A job for spinning a cardano cluster up using a new\nunderlying cardano-cli mechanism, create-testnet-data, was added and integrated\nwith the Justfile start-demo recipe. Includes other misc tuning and\nimprovements. See the PR description for more details:\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-playground/pull/23"},"cardano-playground-pull-23"))))}p.isMDXComponent=!0}}]);