"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[56931],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),p=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(a),d=n,h=s["".concat(c,".").concat(d)]||s[d]||m[d]||l;return a?r.createElement(h,o(o({ref:t},u),{},{components:a})):r.createElement(h,o({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:n,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3382:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const l={title:"Node API & CLI Team Update",slug:"2024-07-05-node-cli-api",authors:"carlos",tags:["cli-api"],hide_table_of_contents:!1},o="Node-Api-Cli Update",i={permalink:"/2024-07-05-node-cli-api",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2024-07-05-node-cli-api.md",source:"@site/blog/2024-07-05-node-cli-api.md",title:"Node API & CLI Team Update",description:"High level summary",date:"2024-07-05T00:00:00.000Z",formattedDate:"July 5, 2024",tags:[{label:"cli-api",permalink:"/tags/cli-api"}],readingTime:.825,hasTruncateMarker:!1,authors:[{name:"Carlos LopezDeLara",title:"Node Product Owner",url:"https://github.com/CarlosLopezDeLara",imageURL:"https://github.com/CarlosLopezDeLara.png",key:"carlos"}],frontMatter:{title:"Node API & CLI Team Update",slug:"2024-07-05-node-cli-api",authors:"carlos",tags:["cli-api"],hide_table_of_contents:!1},prevItem:{title:"Network Team Update",permalink:"/2024-07-08-network"},nextItem:{title:"SRE Team Update",permalink:"/2024-07-05-sre"}},c={authorsImageUrls:[void 0]},p=[{value:"High level summary",id:"high-level-summary",level:2},{value:"cardano-cli",id:"cardano-cli",level:3},{value:"cardano-api",id:"cardano-api",level:3},{value:"cardano-node",id:"cardano-node",level:3},{value:"cardano-testnet",id:"cardano-testnet",level:3},{value:"docs",id:"docs",level:3},{value:"CI &amp; project maintenance",id:"ci--project-maintenance",level:3}],u={toc:p},s="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(s,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"2024-06-21---2024-07-05"},"2024-06-21 - 2024-07-05"),(0,n.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,n.kt)("p",null,"Preparation for node 9.0 with cardano-api-9.0.0.0 and cardano-cli-9.0.0.0"),(0,n.kt)("h3",{id:"cardano-cli"},"cardano-cli"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-cli/pull/820"},"Fix typo in help/error messages")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-cli/pull/817"},"Remove the unused output options from runTxBuild")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-cli/pull/816"},"Share code in parsers of committee commands")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-cli/pull/814"},"Release cardano-cli-9.0.0.0")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-cli/pull/808"},"Integrate for node 9.0")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-cli/pull/807"},"Release 8.25.0.0")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-cli/pull/806"},"Add --hot-script-hash option to committee create-hot-key-authorization-certificate subcommand")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-cli/pull/804"},"Update cardano-api to 8.49.0.0")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-cli/pull/797"},"Make --fee mandatory in legacy transaction build-raw")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-cli/pull/795"},"governance committee: fix hot/cold confusion in help text"))),(0,n.kt)("h3",{id:"cardano-api"},"cardano-api"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-api/pull/574"},"release cardano-api 9.0.0.0")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-api/pull/571"},"integrate ouroboros-consensus and ledger for 9.0")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-api/pull/569"},"Remove check for DRep metadata size")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-api/pull/567"},"Regression test for issue with deserialization of PoolDistr")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-api/pull/566"},"Remove redundant era conversion functions. Handle IO Exceptions in consensus queries. Refactor ",(0,n.kt)("inlineCode",{parentName:"a"},"Cardano.Api.Convenience.Query")," to work in ",(0,n.kt)("inlineCode",{parentName:"a"},"ExceptT e IO"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-api/pull/565"},"Release cardano-api-8.49.0.0"))),(0,n.kt)("h3",{id:"cardano-node"},"cardano-node"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-node/pull/5895"},"Cl/integrate 9.0")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-node/pull/5893"},"Bump node version to 8.12.2")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-node/pull/5892"},"node-8.12.2")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-node/pull/5886"},"consensus/ledger/network: bump version for 8.12.1 release"))),(0,n.kt)("h3",{id:"cardano-testnet"},"cardano-testnet"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-node/pull/5895"},"Cl/integrate 9.0"))),(0,n.kt)("h3",{id:"docs"},"docs"),(0,n.kt)("h3",{id:"ci--project-maintenance"},"CI & project maintenance"))}m.isMDXComponent=!0}}]);