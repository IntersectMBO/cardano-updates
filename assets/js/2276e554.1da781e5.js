"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[28843],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=u(r),d=o,m=c["".concat(p,".").concat(d)]||c[d]||h[d]||a;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6380:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const a={title:"Network Team Update",slug:"2023-08-04-network",authors:"coot",tags:["network"],hide_table_of_contents:!1},i=void 0,s={permalink:"/2023-08-04-network",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2023-08-04-network.md",source:"@site/blog/2023-08-04-network.md",title:"Network Team Update",description:"High-level overview of sprint 41",date:"2023-08-04T00:00:00.000Z",formattedDate:"August 4, 2023",tags:[{label:"network",permalink:"/tags/network"}],readingTime:1.515,hasTruncateMarker:!1,authors:[{name:"Marcin Szamotulski",title:"Network Team Lead",url:"https://github.com/coot",imageURL:"https://github.com/coot.png",key:"coot"}],frontMatter:{title:"Network Team Update",slug:"2023-08-04-network",authors:"coot",tags:["network"],hide_table_of_contents:!1},prevItem:{title:"Ledger Team Update",permalink:"/2023-08-04-ledger"},nextItem:{title:"Performance & tracing update",permalink:"/2023-08-04-performance-and-tracing"}},p={authorsImageUrls:[void 0]},u=[{value:"High-level overview of sprint 41",id:"high-level-overview-of-sprint-41",level:2},{value:"Other contributions",id:"other-contributions",level:2}],l={toc:u},c="wrapper";function h(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"high-level-overview-of-sprint-41"},"High-level overview of ",(0,o.kt)("a",{parentName:"h2",href:"https://github.com/orgs/input-output-hk/projects/19/views/16?filterQuery=sprint%3A%22sprint+41%22"},"sprint 41")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"24th July - 6th August 2023")),(0,o.kt)("p",null,"We started the implementation of ",(0,o.kt)("strong",{parentName:"p"},"bootstrap peers"),".  Bootstrap peers are designed\nto provide a safety guarantee for nodes joining the network while still taking\nadvantage of the distributed network for nodes that are synced.  This will be\nan intermediate step before Genesis which will allow for further distribute the\nsystem.  The bootstrap peers will be run by some trusted partners like CF,\nEmurgo or IOG.   They are primarily designed for leaf nodes (e.g. full node\nwallets), which often end up syncing and require access to the honest chain. See\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/issues/4615"},"ouroboros-network#4615")," for a more detailed implementation plan."),(0,o.kt)("h2",{id:"other-contributions"},"Other contributions"),(0,o.kt)("p",null,"We started to use ",(0,o.kt)("inlineCode",{parentName:"p"},"nothunks")," library to discover if we have any unevaluated\nthunks which can lead to memory leaks ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/issues/4633"},"ouroboros-network#4633"),".  We found\na small one in the peer metric component of the P2P networking stack.  Fixing\nit put us on a small detour of fixing the API of the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-base/tree/master/strict-checked-vars"},(0,o.kt)("inlineCode",{parentName:"a"},"strict-checked-vars")),"\npackage: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-base/pulls/431"},"cardano-base#431"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-base/pulls/432"},"cardano-base#432"),", as well as adding ",(0,o.kt)("inlineCode",{parentName:"p"},"NFData"),"\ninstance to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/io-sim/pull/110"},(0,o.kt)("inlineCode",{parentName:"a"},"io-classes")),".  We also improved ",(0,o.kt)("inlineCode",{parentName:"p"},"nothunks"),"\nlibrary to make debugging easier and we provided a ",(0,o.kt)("inlineCode",{parentName:"p"},"NoThunks")," instance for\n",(0,o.kt)("inlineCode",{parentName:"p"},"ThreadId")," which we will need in the future (see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/nothunks/pull/33"},"nothunks#33"),")."),(0,o.kt)("p",null,"We released a new version of ",(0,o.kt)("inlineCode",{parentName:"p"},"io-classes")," (version ",(0,o.kt)("inlineCode",{parentName:"p"},"1.2.0.0"),") and related\npackages to ",(0,o.kt)("a",{parentName:"p",href:"https://hackage.haskell.org/package/io-classes-1.2.0.0io-classes-1.2.0.0"},"Hackage"),"."),(0,o.kt)("p",null,"We addressed all review comments on the eclipse evasion PR which introduces big\nledger peers, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/issues/3886"},"ouroboros-network#3886"),"."),(0,o.kt)("p",null,"We fixed how ",(0,o.kt)("inlineCode",{parentName:"p"},"SIGHUP")," signal handlers are registered, so it's not possible to\nshutdown a node which was starting while trying to update network topology,\nsee ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-node/pull/5421"},"cardano-node#5421"),"."),(0,o.kt)("p",null,"I didn't mention that in the previous update, so here it goes: in the previous\nsprint we released ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/blob/f84fcddce472d6cfc2b838b20a2ad085fe0896ed/ouroboros-network/CHANGELOG.md"},(0,o.kt)("inlineCode",{parentName:"a"},"ouroboros-network-0.8.2.0"))," and\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/blob/ouroboros-network-framework-0.7.0.0/ouroboros-network-framework/CHANGELOG.md"},(0,o.kt)("inlineCode",{parentName:"a"},"ouroboros-network-framework-0.7.0.0")),"."))}h.isMDXComponent=!0}}]);