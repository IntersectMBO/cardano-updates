"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[93762],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||a;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},56703:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const a={title:"Network Team Update",slug:"2023-12-22-network",authors:"coot",tags:["network"],hide_table_of_contents:!1},i=void 0,s={permalink:"/2023-12-22-network",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2023-12-22-network.md",source:"@site/blog/2023-12-22-network.md",title:"Network Team Update",description:"High-level overview of sprint 51",date:"2023-12-22T00:00:00.000Z",formattedDate:"December 22, 2023",tags:[{label:"network",permalink:"/tags/network"}],readingTime:1.97,hasTruncateMarker:!1,authors:[{name:"Marcin Szamotulski",title:"Network Team Lead",url:"https://github.com/coot",imageURL:"https://github.com/coot.png",key:"coot"}],frontMatter:{title:"Network Team Update",slug:"2023-12-22-network",authors:"coot",tags:["network"],hide_table_of_contents:!1},prevItem:{title:"Hydra Team Update",permalink:"/2023-12-22-hydra"},nextItem:{title:"SRE Team Update",permalink:"/2023-12-22-sre"}},l={authorsImageUrls:[void 0]},p=[{value:"High-level overview of sprint 51",id:"high-level-overview-of-sprint-51",level:2},{value:"Outbound Governor Bug in <code>cardano-node-8.7.2</code>",id:"outbound-governor-bug-in-cardano-node-872",level:3},{value:"Advise for SPOs",id:"advise-for-spos",level:3},{value:"Testing plans",id:"testing-plans",level:3},{value:"Bootstrap peers",id:"bootstrap-peers",level:3},{value:"TxSubmission Decision Logic",id:"txsubmission-decision-logic",level:3}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"high-level-overview-of-sprint-51"},"High-level overview of ",(0,r.kt)("a",{parentName:"h2",href:"https://github.com/orgs/intersectmbo/projects/5/views/1?filterQuery=sprint%3A%22sprint+51%22"},"sprint 51")),(0,r.kt)("h3",{id:"outbound-governor-bug-in-cardano-node-872"},"Outbound Governor Bug in ",(0,r.kt)("inlineCode",{parentName:"h3"},"cardano-node-8.7.2")),(0,r.kt)("p",null,"In the current sprint, we received a bunch of reports from SPOs about nodes not\nmaintaining some connection when using ",(0,r.kt)("inlineCode",{parentName:"p"},"cardano-node-8.7.2")," (running in P2P\nmode).  Such regressions are very important to us since they can lead to lost\nblocks.  We were able to reproduce this issue.  Every time there's a longer\npause of block production (due to the statistical nature of Ouroboros), there\nis a chance that the bug will be armed.  For this reason ",(0,r.kt)("inlineCode",{parentName:"p"},"cardano-node-8.7.2"),"\nneeds to be closely monitored."),(0,r.kt)("p",null,"We found the bug and developed a fix, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/IntersectMBO/ouroboros-network/pull/4748"},"ref"),".  Karl\nKntusson (",(0,r.kt)("a",{parentName:"p",href:"https://cardanofoundation.org"},"CF"),") wasn't able to reproduce the bug with the patched version of\nthe node for long enough (almost two weeks now) for us to belive that the fix\nis correct.  "),(0,r.kt)("h3",{id:"advise-for-spos"},"Advise for SPOs"),(0,r.kt)("p",null,"We created a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/IntersectMBO/cardano-node/tree/release/8.7"},"release branch for ",(0,r.kt)("inlineCode",{parentName:"a"},"8.7.3")),".  The advice from\nthe ",(0,r.kt)("em",{parentName:"p"},"network team")," is to either downgrade to the previous release, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"8.1.2"),"\nor use the above release branch (note that there were no benchmarks made or Q&A\ntests yet)."),(0,r.kt)("h3",{id:"testing-plans"},"Testing plans"),(0,r.kt)("p",null,"We were also able to reproduce the bug using ",(0,r.kt)("inlineCode",{parentName:"p"},"IOSim"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/IntersectMBO/ouroboros-network/pull/4757"},"ouroboros-network#4757"),".\nHowever, the bug relies on a particular schedule of two threads which are\ninvolved and we needed to artificailly modify ",(0,r.kt)("inlineCode",{parentName:"p"},"IOSim")," schedule in production\ncode - something that we don't want to commit to the ",(0,r.kt)("inlineCode",{parentName:"p"},"master")," branch.  We also\nexperimented with a randomised scheduler for ",(0,r.kt)("inlineCode",{parentName:"p"},"IOSim"),", but that did not lead to\nfinding the schedule which arms the bug: the search space grows exponentially\nwith the number of steps in the threads, partial order reduction techniques\nimplemented in ",(0,r.kt)("inlineCode",{parentName:"p"},"IOSimPOR")," are more appropriate - unfortunatelly the simulation\ntest is too large to be executed in ",(0,r.kt)("inlineCode",{parentName:"p"},"IOSimPOR")," even with large amounts of\n",(0,r.kt)("inlineCode",{parentName:"p"},"RAM"),".  To use ",(0,r.kt)("inlineCode",{parentName:"p"},"IOSimPOR")," we need to implement a test which includes the two\ninteracting components:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"connection-manager")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"outbound-governor")," (where the bug was located)")),(0,r.kt)("p",null,"which communicate through ",(0,r.kt)("inlineCode",{parentName:"p"},"PeerStateActions"),", without including all the\ndiffusion components as we do in our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/IntersectMBO/ouroboros-network/blob/master/ouroboros-network/sim-tests-lib/Test/Ouroboros/Network/Testnet.hs"},"sim-net")," tests.  More in style of\n",(0,r.kt)("inlineCode",{parentName:"p"},"outbound-governor")," tests where there is just a single ",(0,r.kt)("inlineCode",{parentName:"p"},"outbound-governor"),",\nunlike in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/IntersectMBO/ouroboros-network/blob/master/ouroboros-network/sim-tests-lib/Test/Ouroboros/Network/Testnet.hs"},"sim-net")," which runs multiple communicating diffusions."),(0,r.kt)("h3",{id:"bootstrap-peers"},"Bootstrap peers"),(0,r.kt)("p",null,"We continued working on bootstrap peers, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4555"},"ouroboros-network#4555")),(0,r.kt)("h3",{id:"txsubmission-decision-logic"},"TxSubmission Decision Logic"),(0,r.kt)("p",null,"We continued working on tx-submission decision logic, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/3311"},"ouroboros-network#3311")))}d.isMDXComponent=!0}}]);