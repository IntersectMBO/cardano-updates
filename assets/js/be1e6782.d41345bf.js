"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[25469],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>k});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=l(o),c=r,k=m["".concat(s,".").concat(c)]||m[c]||h[c]||a;return o?n.createElement(k,i(i({ref:t},u),{},{components:o})):n.createElement(k,i({ref:t},u))}));function k(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=c;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[m]="string"==typeof e?e:r,i[1]=p;for(var l=2;l<a;l++)i[l]=o[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}c.displayName="MDXCreateElement"},12306:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var n=o(87462),r=(o(67294),o(3905));const a={title:"Network Q2 2023 Update",slug:"2023-Q2-network",authors:"coot",tags:["network"],hide_table_of_contents:!1},i=void 0,p={permalink:"/quarterly/2023-Q2-network",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/quarterly/2023-Q2-network.md",source:"@site/quarterly/2023-Q2-network.md",title:"Network Q2 2023 Update",description:"2023-04 - 2023-06",date:"2023-07-16T17:49:37.000Z",formattedDate:"July 16, 2023",tags:[{label:"network",permalink:"/quarterly/tags/network"}],readingTime:5.145,hasTruncateMarker:!1,authors:[{name:"Marcin Szamotulski",title:"Network Team Lead",url:"https://github.com/coot",imageURL:"https://github.com/coot.png",key:"coot"}],frontMatter:{title:"Network Q2 2023 Update",slug:"2023-Q2-network",authors:"coot",tags:["network"],hide_table_of_contents:!1},prevItem:{title:"SRE Q2 2023 Update",permalink:"/quarterly/2023-Q2-sre"},nextItem:{title:"Consensus Q2 2023 Update",permalink:"/quarterly/2023-Q2-consensus"}},s={authorsImageUrls:[void 0]},l=[{value:"2023-04 - 2023-06",id:"2023-04---2023-06",level:2},{value:"Main achievements",id:"main-achievements",level:3},{value:"Eclipse Evasion",id:"eclipse-evasion",level:4},{value:"Ecosystem P2P Deployment Progress",id:"ecosystem-p2p-deployment-progress",level:4},{value:"Peer Sharing",id:"peer-sharing",level:4},{value:"Diffusion (P2P)",id:"diffusion-p2p",level:4},{value:"Other Improvements &amp; Developments",id:"other-improvements--developments",level:3},{value:"CDDL",id:"cddl",level:4},{value:"Cardano Ping",id:"cardano-ping",level:4},{value:"IOSim",id:"iosim",level:4},{value:"Typed Protocols",id:"typed-protocols",level:4},{value:"Cardano Client",id:"cardano-client",level:4},{value:"Technical debt",id:"technical-debt",level:4},{value:"CI improvements",id:"ci-improvements",level:4},{value:"GHC 9.4 &amp; 9.6",id:"ghc-94--96",level:4},{value:"Next steps",id:"next-steps",level:3}],u={toc:l},m="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"2023-04---2023-06"},"2023-04 - 2023-06"),(0,r.kt)("h3",{id:"main-achievements"},"Main achievements"),(0,r.kt)("h4",{id:"eclipse-evasion"},"Eclipse Evasion"),(0,r.kt)("p",null,"We finalised the design of eclipse evasion and implemented its mechanism which\nrelays on connectivity to ",(0,r.kt)("em",{parentName:"p"},"big ledger peers"),".  ",(0,r.kt)("em",{parentName:"p"},"Big ledger peers")," are the\nlargest ledger peers which accumulate 90% of stake (currently there are less\nthan 1000 of them).  The outbound governor has new targets for ",(0,r.kt)("em",{parentName:"p"},"known"),",\n",(0,r.kt)("em",{parentName:"p"},"established")," and ",(0,r.kt)("em",{parentName:"p"},"active")," big ledger peers which work in a similar way that\nsuch targets work for ledger peers.  The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4662"},"ouroboros-network#4662")," PR is\ncurrently in review."),(0,r.kt)("p",null,"As part of this work we also identified a bug which would prevent a node to\nconnect to itself.  Such connections are not easily detectable and are expected\nto be dropped by the churn mechanism, nonetheless they should not be buggy.\nThe failure was discovered thanks to our e2e simulation of diffusion using\n",(0,r.kt)("inlineCode",{parentName:"p"},"io-sim")," & property based testing."),(0,r.kt)("p",null,"The PR also refactors the heart of the ",(0,r.kt)("inlineCode",{parentName:"p"},"ouroboros-network")," interface reducing\ntechnical debt that would otherwise accumulate."),(0,r.kt)("p",null,"We also identified a possible improvement in the churn mechanism, which will be\nimplemented in Q3.  Churn needs to await for peers to terminate, we can\nimprove the synchronisation. ","[ouroboros-network#4617]"),(0,r.kt)("h4",{id:"ecosystem-p2p-deployment-progress"},"Ecosystem P2P Deployment Progress"),(0,r.kt)("p",null,"We reached ",(0,r.kt)("strong",{parentName:"p"},"50% of stake in hands of SPOs who run at least on P2P relay"),".  Now\nalso Emurgo and CF are running some P2P relays. Also 20% of IOG relays are\nrunning in P2P mode."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"P2P Progress",src:o(62597).Z,width:"1024",height:"768"})),(0,r.kt)("h4",{id:"peer-sharing"},"Peer Sharing"),(0,r.kt)("p",null,"We implemented ",(0,r.kt)("em",{parentName:"p"},"bootstrapping for peer sharing")," (also known as light peer\nsharing).  New downstream (inbound) peers are now added to the ",(0,r.kt)("em",{parentName:"p"},"known peers")," of\nthe ",(0,r.kt)("em",{parentName:"p"},"outbound governor"),".  Together with peer sharing this allows for non\nregistered relays to propagate through the network. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/issues/3596"},"ouroboros-network#3596")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Please note that peer sharing is disabled by default and is not considered safe\nuntil Bootstrap Peers (see below) or Genesis is implemented.")),(0,r.kt)("h4",{id:"diffusion-p2p"},"Diffusion (P2P)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We designed a feature which will reduce the load on IOG relays (in future\nalso run by CF & Emurgo).  The feature consists of two parts.  A new source\nof peers called ",(0,r.kt)("em",{parentName:"p"},"bootstrap peers")," (obtained from via an https request), the\nability to switch from bootstrap peers to ledger peers if the node is synced\n(we are collaborating with the consensus team on the interface ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-consensus/blob/fbb8c8ee97517809dec0d0c8ae3fae9b8d272caf/docs/website/docs/bootstrap-peers-IER.md"},"Bootstrap\nPeers IER"),").   This feature will be completed in Q3.\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/issues/4530"},"ouroboros-network#4530"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We published a blog post about ",(0,r.kt)("a",{parentName:"p",href:"https://engineering.iog.io/2023-06-28-p2p"},"P2P design & implementation"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Karl Knutsson (CF) fixed an issue observed on a relay with a lot of outbound connections:\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4559"},"ouroboros-network#4559"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We merged changes which allow the consensus layer to start / stop block\nforging thread.  This will allow to deploy P2P block producing nodes which\nserve as a live backup node. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-consensus/pull/140"},"ouroboros-consensus#140"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We fixed a few bugs in local root peers DNS resolution service:\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4583"},"ouroboros-network#4583"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4571"},"ouroboros-network#4571"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We limited concurrency of DNS name resolutions: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4596"},"ouroboros-network#4596"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Galois Inc implemented query option for Handshake: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4256"},"ouroboros-network#4256"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We fixed handshake query timeout: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4608"},"ouroboros-network#4608"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We implemented warm valency for local root peers.  This can help when using\nDNS names in local root peers which resolve to many IP addresses. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4575"},"ouroboros-network#4575"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We merged handshake changes which allow query protocol versions.  Thanks to\nJames Parker from Galois Inc.: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4256"},"ouroboros-network#4256"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-cli/pull/30/"},"cardano-cli#30"),"."))),(0,r.kt)("h3",{id:"other-improvements--developments"},"Other Improvements & Developments"),(0,r.kt)("h4",{id:"cddl"},"CDDL"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We added ",(0,r.kt)("inlineCode",{parentName:"p"},"node-to-node")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"node-to-client")," CDDL specs / tests for encoding\nof ",(0,r.kt)("inlineCode",{parentName:"p"},"NodeToNodeVersionData")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"NodeToClientVersionData"),".  ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We clarified an inconsistency between CDDL spec and implementation which is\nhighly polymorphic.  We designed and implemented a fix for ",(0,r.kt)("inlineCode",{parentName:"p"},"tx-submission"),"\nand ",(0,r.kt)("inlineCode",{parentName:"p"},"local-tx-submission")," mini-protocols.  Specs for other mini-protocols will\nbe improved at a later stage. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4580"},"ouroboros-network#4580")))),(0,r.kt)("h4",{id:"cardano-ping"},(0,r.kt)("a",{parentName:"h4",href:"https://github.com/input-output-hk/ouroboros-network/blob/master/cardano-ping"},"Cardano Ping")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"cardano-ping")," command was deprecated in favour of ",(0,r.kt)("inlineCode",{parentName:"p"},"cardano-cli ping")," (the\ntransition was done by the ",(0,r.kt)("inlineCode",{parentName:"p"},"node")," team).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Support for ",(0,r.kt)("inlineCode",{parentName:"p"},"node-to-client")," protocol using Unix sockets.\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4601"},"ouroboros-network#4601"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Support for ",(0,r.kt)("inlineCode",{parentName:"p"},"NodeToNodeV_11")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"NodeToClientV_16"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4587"},"ouroboros-network#4587"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"cardano-cli ping")," is now using ",(0,r.kt)("em",{parentName:"p"},"ISO8601")," format for timestamps.  Formatting of\nmessages was improved. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4593"},"ouroboros-network#4593"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"cardano-cli ping")," has a new ",(0,r.kt)("inlineCode",{parentName:"p"},"--query-versions")," flag which allows to query\nsupported versions by the remote node.  This is supported by\n",(0,r.kt)("inlineCode",{parentName:"p"},"cardano-node-8.1.0"),". ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4589"},"ouroboros-network#4589"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-node/pull/5313"},"cardano-node#5313"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-cli/pull/30/"},"cardano-cli#30")))),(0,r.kt)("h4",{id:"iosim"},(0,r.kt)("a",{parentName:"h4",href:"https://github.com/input-output-hk/io-sim"},"IOSim")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We fixed timeouts & delays in ",(0,r.kt)("inlineCode",{parentName:"p"},"io-classes")," in a series of PRs: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/io-sim/pull/81"},"io-sim#81"),",\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/io-sim/pull/82"},"io-sim#82"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/io-sim/pull/86"},"io-sim#86"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/io-sim/pull/87"},"io-sim#87"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We released ",(0,r.kt)("inlineCode",{parentName:"p"},"strict-stm-1.1.0.1")," on Hackage which fixed a bug in package\ndescription file: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/io-sim/pull/101"},"io-sim#101"),"."))),(0,r.kt)("h4",{id:"typed-protocols"},(0,r.kt)("a",{parentName:"h4",href:"https://github.com/input-output-hk/typed-protocols"},"Typed Protocols")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We published haddocks of ",(0,r.kt)("inlineCode",{parentName:"li"},"typed-protocols")," at\n",(0,r.kt)("a",{parentName:"li",href:"https://input-output-hk.github.io/typed-protocols"},"https://input-output-hk.github.io/typed-protocols"))),(0,r.kt)("h4",{id:"cardano-client"},(0,r.kt)("a",{parentName:"h4",href:"https://github.com/input-output-hk/ouroboros-network/blob/master/cardano-client"},"Cardano Client")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We fixed a bug in ",(0,r.kt)("inlineCode",{parentName:"li"},"cardano-client-0.1.0.2")," release which results in clients\n(e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"db-sync"),") negotiate an experimental protocol version.")),(0,r.kt)("h4",{id:"technical-debt"},"Technical debt"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"After the split between consensus & network, we made ",(0,r.kt)("inlineCode",{parentName:"p"},"cardano-client"),"\nindependent of ",(0,r.kt)("inlineCode",{parentName:"p"},"ouroboros-consensus-diffusion"),": ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4526"},"ouroboros-network#4526"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We wrap all exceptions in ",(0,r.kt)("inlineCode",{parentName:"p"},"DiffusionError"),": ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/issues/4537"},"ouroboros-network#4537"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-node/pull/5356"},"cardano-node#5356"),"."))),(0,r.kt)("h4",{id:"ci-improvements"},"CI improvements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We switched to use GitHub merge queues in ",(0,r.kt)("inlineCode",{parentName:"p"},"ouroboros-network"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"io-sim")," and\n",(0,r.kt)("inlineCode",{parentName:"p"},"typed-protocols")," repositories; ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/typed-protocols/pull/30"},"typed-protocols#30"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4546"},"ouroboros-network#4546"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We cleaned & updated scripts which run on CI.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We implemented a script to verify & release packages on CHaP; ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/issues/4542"},"ouroboros-network#4542"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4573"},"ouroboros-network#4573"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We implemented a new CI script and cleaned existing ones:\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4572"},"ouroboros-network#4572"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We don't install cryptographic libraries on CI anymore as none of our\npackages requires them; ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/issues/4539"},"ouroboros-network#4539"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Improved caching of dependencies: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/issues/4553"},"ouroboros-network#4553"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We made it possible to trigger building haddock manually:\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/issues/4549"},"ouroboros-network#4549"),"."))),(0,r.kt)("h4",{id:"ghc-94--96"},"GHC 9.4 & 9.6"),(0,r.kt)("p",null,"We made all repositories under our control compile with ",(0,r.kt)("inlineCode",{parentName:"p"},"ghc-9.4")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ghc-9.6"),"\nwhich includes ",(0,r.kt)("inlineCode",{parentName:"p"},"ouroboros-network"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"io-sim"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"typed-protocols")," and\n",(0,r.kt)("inlineCode",{parentName:"p"},"Win32-network"),"."),(0,r.kt)("h3",{id:"next-steps"},"Next steps"),(0,r.kt)("p",null,"We will continue towards our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/orgs/input-output-hk/projects/39/views/30"},"aspirational roadmap"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We will continue reviewing eclipse evasion."),(0,r.kt)("li",{parentName:"ul"},"As ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-consensus/pull/140"},"ouroboros-consensus#140")," was merged, we are making progress towards\nreleasing P2P on block production nodes.  We hope to analyse performance\nregression on such nodes observed on the benchmarking cluster. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/orgs/input-output-hk/projects/39/views/30?pane=issue&itemId=6875505"},"roadmap-3887")),(0,r.kt)("li",{parentName:"ul"},"We are also focused on ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/orgs/input-output-hk/projects/39/views/30?pane=issue&itemId=8920085"},"roadmap-3969"),". Note that it was expanded in Q2.")))}h.isMDXComponent=!0},62597:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/2023-07-06-p2p-progress-194a909569eebb016b1f24fb8941e2cc.png"}}]);