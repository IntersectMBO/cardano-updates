"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[47258],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),l=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(r),h=n,k=c["".concat(p,".").concat(h)]||c[h]||m[h]||i;return r?o.createElement(k,a(a({ref:t},u),{},{components:r})):o.createElement(k,a({ref:t},u))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:n,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},31770:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=r(87462),n=(r(67294),r(3905));const i={title:"Network Team Update",slug:"2024-07-08-network",authors:"coot",tags:["network"],hide_table_of_contents:!1},a=void 0,s={permalink:"/2024-07-08-network",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2024-07-08-network.md",source:"@site/blog/2024-07-08-network.md",title:"Network Team Update",description:"High-level overview of sprint 65",date:"2024-07-08T00:00:00.000Z",formattedDate:"July 8, 2024",tags:[{label:"network",permalink:"/tags/network"}],readingTime:1.175,hasTruncateMarker:!1,authors:[{name:"Marcin Szamotulski",title:"Network Team Lead",url:"https://github.com/coot",imageURL:"https://github.com/coot.png",key:"coot"}],frontMatter:{title:"Network Team Update",slug:"2024-07-08-network",authors:"coot",tags:["network"],hide_table_of_contents:!1},prevItem:{title:"Mithril Team Update",permalink:"/2024-07-10-mithril"},nextItem:{title:"Node API & CLI Team Update",permalink:"/2024-07-05-node-cli-api"}},p={authorsImageUrls:[void 0]},l=[{value:"High-level overview of sprint 65",id:"high-level-overview-of-sprint-65",level:2},{value:"High-level overview of sprint 64",id:"high-level-overview-of-sprint-64",level:2}],u={toc:l},c="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-level-overview-of-sprint-65"},"High-level overview of ",(0,n.kt)("a",{parentName:"h2",href:"https://github.com/orgs/IntersectMBO/projects/5/views/1?filterQuery=sprint%3A%22Sprint+65%22"},"sprint 65")),(0,n.kt)("p",null,"Karl Knutsson (",(0,n.kt)("a",{parentName:"p",href:"https://cardanofoundation.org"},"CF"),") fixed a bug which prevented a node using bootstrap peers\nto sync using them, for a more detailed description see ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/IntersectMBO/ouroboros-network/issues/4899"},"ouroboros-network#4899"),"."),(0,n.kt)("p",null,"Earlier this year we fixed bugs in ",(0,n.kt)("inlineCode",{parentName:"p"},"IOSimPOR")," which prevent us from using it in\n",(0,n.kt)("inlineCode",{parentName:"p"},"ouroboros-network")," (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/io-sim/pull/153"},"io-sim#153"),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/io-sim/pull/159"},"io-sim#159"),"); since\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/IntersectMBO/ouroboros-network/issues/4872"},"ouroboros-network#4872")," was merged we have a large number of tests that are\nusing ",(0,n.kt)("inlineCode",{parentName:"p"},"IOSimPOR"),"'s schedule exploration.  In the last sprint we fixed\nsome bugs discovered by ",(0,n.kt)("inlineCode",{parentName:"p"},"IOSimPOR")," in ",(0,n.kt)("inlineCode",{parentName:"p"},"ouroboros-network"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Block Fetch Client assertion failure")," - ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/ouroboros-network/issues/4890"},"ouroboros-network#4890"),","),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Connection manager's invalid transition")," - ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/ouroboros-network/issues/4891"},"ouroboros-network#4891"),".")),(0,n.kt)("p",null,"We continued working on new ",(0,n.kt)("inlineCode",{parentName:"p"},"tx-submission")," logic: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/IntersectMBO/ouroboros-network/issues/3311"},"ouroboros-network#3311")," as\nwell as on Genesis.  The work on Genesis is split in a few PRs which are\ncurrently in review process:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Big Ledger Peer Targets for Genesis")," - ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/ouroboros-network/issues/4832"},"ouroboros-network#4832")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Feed peer selection governor with big ledger peers obtained from a snapshot")," - ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/ouroboros-network/issues/4850"},"ouroboros-network#4850")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Introduction of serialization instances in support of ledger peer snapshot")," - ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/ouroboros-network/issues/4851"},"ouroboros-network#4851")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Verification of big ledger peer snapshot file")," - ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/ouroboros-network/issues/4888"},"ouroboros-network#4888"))),(0,n.kt)("h2",{id:"high-level-overview-of-sprint-64"},"High-level overview of ",(0,n.kt)("a",{parentName:"h2",href:"https://github.com/orgs/IntersectMBO/projects/5/views/1?filterQuery=sprint%3A%22Sprint+64%22"},"sprint 64")),(0,n.kt)("p",null,"Karl Knutsson (",(0,n.kt)("a",{parentName:"p",href:"https://cardanofoundation.org"},"CF"),") modified peer sharing behaviour to not share peers whith\nwhich connections failed, see ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/IntersectMBO/ouroboros-network/issues/4883"},"ouroboros-network#4883")," for more details."),(0,n.kt)("p",null,"We fixed inbound governor counters tracer, see ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/IntersectMBO/ouroboros-network/issues/4885"},"ouroboros-network#4885"),"."))}m.isMDXComponent=!0}}]);