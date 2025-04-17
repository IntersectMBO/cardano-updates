"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[81677],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),h=o,d=c["".concat(l,".").concat(h)]||c[h]||m[h]||a;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},13918:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={title:"Network Team Update",slug:"2024-02-19-network",authors:"coot",tags:["network"],hide_table_of_contents:!1},i=void 0,s={permalink:"/2024-02-19-network",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2024-02-19-network.md",source:"@site/blog/2024-02-19-network.md",title:"Network Team Update",description:"High-level overview of sprint 55",date:"2024-02-19T00:00:00.000Z",formattedDate:"February 19, 2024",tags:[{label:"network",permalink:"/tags/network"}],readingTime:1.225,hasTruncateMarker:!1,authors:[{name:"Marcin Szamotulski",title:"Network Team Lead",url:"https://github.com/coot",imageURL:"https://github.com/coot.png",key:"coot"}],frontMatter:{title:"Network Team Update",slug:"2024-02-19-network",authors:"coot",tags:["network"],hide_table_of_contents:!1},prevItem:{title:"Mithril Team Update",permalink:"/2024-02-21-mithril"},nextItem:{title:"Hydra Team Update",permalink:"/2024-02-16-hydra"}},l={authorsImageUrls:[void 0]},p=[{value:"High-level overview of sprint 55",id:"high-level-overview-of-sprint-55",level:2},{value:"Low-level summary",id:"low-level-summary",level:2},{value:"Open Source Contributions",id:"open-source-contributions",level:2},{value:"IOSim",id:"iosim",level:3}],u={toc:p},c="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"high-level-overview-of-sprint-55"},"High-level overview of ",(0,o.kt)("a",{parentName:"h2",href:"https://github.com/orgs/IntersectMBO/projects/5/views/1?visibleFields=%5B%22Title%22%2C%22Labels%22%2C%22Assignees%22%2C%22Status%22%2C%22Linked+pull+requests%22%2C69151865%2C%22Repository%22%5D&filterQuery=sprint%3A%22Sprint+55%22"},"sprint 55")),(0,o.kt)("p",null,"This sprint the networking was nominated for the Cardano Release Engineer role and\nwe've been working on the integration of bootstrap peers with ",(0,o.kt)("inlineCode",{parentName:"p"},"cardano-node"),".  This\nis a work in progress: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/IntersectMBO/cardano-node/pull/5485"},"cardano-node-5485"),".  ",(0,o.kt)("inlineCode",{parentName:"p"},"cardano-node-8.9")," will be the first\nnode which supports the bootstrap peers feature, but we anticipate additional\nimprovements needed before this is used at scale."),(0,o.kt)("p",null,"We disabled mean reward for new peers in the churn mechanism which was hurting\nconnection in remote destinations.  Thanks to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/karknu"},"Karl Knutsson")," (",(0,o.kt)("a",{parentName:"p",href:"https://cardanofoundation.org"},"CF"),") for\nproviding evidence and a patch.  In future, this mechanism will be further\nchanged, but this requires more analysis.  ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/IntersectMBO/ouroboros-network/issues/4800"},"ouroboros-network#4800")),(0,o.kt)("p",null,"We continued working on ",(0,o.kt)("inlineCode",{parentName:"p"},"tx-submission"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/IntersectMBO/ouroboros-network/issues/3311"},"ouroboros-network#3311")),(0,o.kt)("p",null,"We welcome ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/crocodile-dentist"},"Marcin W\xf3jtowicz")," as part of the Networking\nTeam of Cardano Core Tech.  He reviewed our documentation as part of his\nonboarding process: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/IntersectMBO/ouroboros-network/issues/4802"},"ouroboros-network#4802"),"."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/AndrewWestberg"},"Andrew Westberg")," (",(0,o.kt)("a",{parentName:"p",href:"https://dripdropz.io/"},"DripDropz"),") corrected documentation regarding which\n",(0,o.kt)("inlineCode",{parentName:"p"},"node-to-node")," protocol version introduced ",(0,o.kt)("inlineCode",{parentName:"p"},"P2P"),"."),(0,o.kt)("h2",{id:"low-level-summary"},"Low-level summary"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We fixed an issue related to local root peers related to bootstrap peers: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/ouroboros-network/issues/4799"},"ouroboros-network#4799"),".")),(0,o.kt)("h2",{id:"open-source-contributions"},"Open Source Contributions"),(0,o.kt)("h3",{id:"iosim"},"IOSim"),(0,o.kt)("p",null,"We released ",(0,o.kt)("a",{parentName:"p",href:"https://hackage.haskell.org/package/io-sim-1.4.1.0"},(0,o.kt)("inlineCode",{parentName:"a"},"io-sim-1.4.1.0"))," with some new features & improvements:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"QuickCheck monadic combinators: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/io-sim/pull/140"},"io-sim#140"),"."),(0,o.kt)("li",{parentName:"ul"},"Provide ",(0,o.kt)("inlineCode",{parentName:"li"},"PrimMonad")," instance: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/io-sim/pull/141"},"io-sim#141"),", thanks to ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/dcoutts"},"Duncan Coutts")," (",(0,o.kt)("a",{parentName:"li",href:"https://well-typed.com"},"Well-Typed"),")."),(0,o.kt)("li",{parentName:"ul"},"Fixed ",(0,o.kt)("inlineCode",{parentName:"li"},"threadDelay")," in the presence of ",(0,o.kt)("inlineCode",{parentName:"li"},"registerDelay"),"s: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/io-sim/pull/143"},"io-sim#143"),", thanks to\nConsensus Team.")))}m.isMDXComponent=!0}}]);