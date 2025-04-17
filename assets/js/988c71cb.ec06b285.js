"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[84433],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),p=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),d=n,m=c["".concat(l,".").concat(d)]||c[d]||h[d]||a;return r?o.createElement(m,i(i({ref:t},u),{},{components:r})):o.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},68697:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=r(87462),n=(r(67294),r(3905));const a={title:"Network Team Update",slug:"2024-05-06-network",authors:"coot",tags:["network"],hide_table_of_contents:!1},i=void 0,s={permalink:"/2024-05-06-network",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2024-05-06-network.md",source:"@site/blog/2024-05-06-network.md",title:"Network Team Update",description:"High-level overview of sprint 60",date:"2024-05-06T00:00:00.000Z",formattedDate:"May 6, 2024",tags:[{label:"network",permalink:"/tags/network"}],readingTime:2.45,hasTruncateMarker:!1,authors:[{name:"Marcin Szamotulski",title:"Network Team Lead",url:"https://github.com/coot",imageURL:"https://github.com/coot.png",key:"coot"}],frontMatter:{title:"Network Team Update",slug:"2024-05-06-network",authors:"coot",tags:["network"],hide_table_of_contents:!1},prevItem:{title:"Performance & Tracing Update",permalink:"/2024-05-07-performance-and-tracing"},nextItem:{title:"Hydra Team Update",permalink:"/2024-05-03-hydra"}},l={authorsImageUrls:[void 0]},p=[{value:"High-level overview of sprint 60",id:"high-level-overview-of-sprint-60",level:2},{value:"Peer-Sharing Improvements",id:"peer-sharing-improvements",level:3},{value:"Genesis",id:"genesis",level:3},{value:"Bootstrap Peers",id:"bootstrap-peers",level:3},{value:"Churn",id:"churn",level:3},{value:"Minor Improvements",id:"minor-improvements",level:2},{value:"Testing",id:"testing",level:3}],u={toc:p},c="wrapper";function h(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-level-overview-of-sprint-60"},"High-level overview of ",(0,n.kt)("a",{parentName:"h2",href:"https://github.com/orgs/IntersectMBO/projects/5/views/1?visibleFields=%5B%22Title%22%2C%22Labels%22%2C%22Assignees%22%2C%22Status%22%2C%22Linked+pull+requests%22%2C69151865%2C%22Repository%22%5D&filterQuery=sprint%3A%22Sprint+60%22"},"sprint 60")),(0,n.kt)("small",null,(0,n.kt)("i",null,"Edited on 8th of May: new EGK counters will be included in `cardano-node-8.9.3`, added links to `cardano-node-8.9.3` PR and `ouroboros-network-0.15` release.")),(0,n.kt)("h3",{id:"peer-sharing-improvements"},"Peer-Sharing Improvements"),(0,n.kt)("p",null,"We continued working on improving peer sharing.  As part of this work light\npeer sharing (e.g. including inbound peers to the known set of outbound\ngovernor), was restructured.  Now, sending more peers than what was requested by\nthe peer-sharing client is a protocol error, and the connection will be terminated;\nThis hasn't been a resource attack vector since we always limited the number of\npeers taken by the ",(0,n.kt)("inlineCode",{parentName:"p"},"outbound-governor")," and the number of peers has always been\nlimited by the size of the mux ingress queue reserved for peer-sharing\nmini-protocol.  These changes will be released in ",(0,n.kt)("inlineCode",{parentName:"p"},"cardano-node-8.9.3"),".  See\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/IntersectMBO/ouroboros-network/pull/4869"},"ouroboros-network#4868")),(0,n.kt)("p",null,"We also merged the work on outbound governor counters, which initially started\nas just an extension for peer-sharing counters but turned into a larger\nrefactorisation.  We announced it in the previous report.  These changes will\nbe included in ",(0,n.kt)("inlineCode",{parentName:"p"},"8.9.3"),".  See ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/IntersectMBO/ouroboros-network/issues/4845"},"ouroboros-network#4845"),",\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/IntersectMBO/ouroboros-network/pull/4861"},"ouroboros-network#4861"),"."),(0,n.kt)("p",null,"Light peer sharing (inbound peers) refactorisation allowed us to refactor the\ninbound governor loop: we restructured it so that the internal state is kept\npure (and thus not shared with other threads), while the public part is\ncomputed incrementally (with good amortised costs and thus leading to good performance) and exposed to other\ncomponents (e.g. the ",(0,n.kt)("inlineCode",{parentName:"p"},"outbound-governor"),"), see ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/IntersectMBO/ouroboros-network/pull/4871"},"ouroboros-network#4871")," ","(","which\nis built on top of ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/IntersectMBO/ouroboros-network/pull/4869"},"ouroboros-network#4868"),")."),(0,n.kt)("p",null,"The PR ","[cardano-nod#5831]"," integrates ",(0,n.kt)("inlineCode",{parentName:"p"},"ouroboros-network-0.15")," with\n",(0,n.kt)("inlineCode",{parentName:"p"},"cardano-node-8.9.x")," branch.  All included PRs / issues in\n",(0,n.kt)("inlineCode",{parentName:"p"},"ouroboros-network-0.15")," are listed ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/orgs/IntersectMBO/projects/5/views/18"},"here"),"."),(0,n.kt)("h3",{id:"genesis"},"Genesis"),(0,n.kt)("p",null,"We implemented the API needed by the consensus layer for ",(0,n.kt)("inlineCode",{parentName:"p"},"Genesis"),"; see\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/IntersectMBO/ouroboros-network/issues/4815"},"ouroboros-network#4815"),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/IntersectMBO/ouroboros-network/issues/4846"},"ouroboros-network#4846"),". "),(0,n.kt)("p",null,"We continued working on outbound governor changes to support ",(0,n.kt)("inlineCode",{parentName:"p"},"Genesis"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/ouroboros-network/pull/3396"},"ouroboros-network#3396")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/ouroboros-network/pull/4813"},"ouroboros-network#4813")," "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/ouroboros-network/pull/4849"},"ouroboros-network#4849")," ")),(0,n.kt)("h3",{id:"bootstrap-peers"},"Bootstrap Peers"),(0,n.kt)("p",null,"Karl Knutsson (","[CF]",") found and fixed some problems related to big-ledger and\npublic root peers.  Here's an excerpt from the changelog file:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"updated the big-ledger retry state in case of an exception;"),(0,n.kt)("li",{parentName:"ul"},"reset public root retry state when transitioning between ",(0,n.kt)("inlineCode",{parentName:"li"},"LedgerStateJudgements"),";"),(0,n.kt)("li",{parentName:"ul"},"reduced public root retry timer;"),(0,n.kt)("li",{parentName:"ul"},"don't classify a config file with public-root/bootstrap-peers IP addresses only\nas a DNS error.\nSee ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/ouroboros-network/pull/4867"},"ouroboros-network#4867"),".")),(0,n.kt)("h3",{id:"churn"},"Churn"),(0,n.kt)("p",null,"We merged a refactorisation which synchronises churn with the outbound\ngovernor, see ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/IntersectMBO/ouroboros-network/issues/4617"},"ouroboros-network#4617"),"."),(0,n.kt)("h2",{id:"minor-improvements"},"Minor Improvements"),(0,n.kt)("p",null,"A few other minor improvements were merged:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"updated tools used by ",(0,n.kt)("inlineCode",{parentName:"li"},"nix"),", see ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/ouroboros-network/pull/4860"},"ouroboros-network#4860"),";"),(0,n.kt)("li",{parentName:"ul"},"updated pull request template, see ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/ouroboros-network/pull/4862"},"ouroboros-network#4862"))),(0,n.kt)("h3",{id:"testing"},"Testing"),(0,n.kt)("p",null,"We added ",(0,n.kt)("inlineCode",{parentName:"p"},"quickcheck-monoids")," package and also submitted an upstream patch to\n",(0,n.kt)("inlineCode",{parentName:"p"},"QuickCheck")," to include a version of the standard ",(0,n.kt)("a",{parentName:"p",href:"https://hackage.haskell.org/package/base-4.19.1.0/docs/Data-Monoid.html#t:All"},(0,n.kt)("inlineCode",{parentName:"a"},"All"))," / ",(0,n.kt)("a",{parentName:"p",href:"https://hackage.haskell.org/package/base-4.19.1.0/docs/Data-Monoid.html#t:Any"},(0,n.kt)("inlineCode",{parentName:"a"},"Any"))," monoids, which\nare helpful when writing more complex properties.  We will use\n",(0,n.kt)("inlineCode",{parentName:"p"},"quickcheck-monoids")," until the upstream PR will be released.  It will be\navailable from ",(0,n.kt)("a",{parentName:"p",href:"https://chap.intersectmbo.org/"},"CHaP"),". See ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/nick8325/quickcheck/pull/397"},"quickcheck#397"),"."))}h.isMDXComponent=!0}}]);