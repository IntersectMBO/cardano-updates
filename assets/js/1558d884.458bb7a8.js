"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[2906],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,h=m["".concat(s,".").concat(u)]||m[u]||p[u]||o;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},75088:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"Performance & Tracing Update",slug:"2024-05-07-performance-and-tracing",authors:"mgmeier",tags:["performance-tracing"],hide_table_of_contents:!1},i=void 0,l={permalink:"/2024-05-07-performance-and-tracing",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2024-05-07-performance-and-tracing.md",source:"@site/blog/2024-05-07-performance-and-tracing.md",title:"Performance & Tracing Update",description:"High level summary",date:"2024-05-07T00:00:00.000Z",formattedDate:"May 7, 2024",tags:[{label:"performance-tracing",permalink:"/tags/performance-tracing"}],readingTime:4.045,hasTruncateMarker:!1,authors:[{name:"Michael Karg",title:"Performance and Tracing Team Lead",url:"https://github.com/mgmeier",imageURL:"https://github.com/mgmeier.png",key:"mgmeier"}],frontMatter:{title:"Performance & Tracing Update",slug:"2024-05-07-performance-and-tracing",authors:"mgmeier",tags:["performance-tracing"],hide_table_of_contents:!1},prevItem:{title:"Ledger Team Update",permalink:"/2024-05-08-ledger"},nextItem:{title:"Network Team Update",permalink:"/2024-05-06-network"}},s={authorsImageUrls:[void 0]},c=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Low level overview",id:"low-level-overview",level:2},{value:"Benchmarking",id:"benchmarking",level:3},{value:"Development",id:"development",level:3},{value:"Workbench",id:"workbench",level:3},{value:"Tracing",id:"tracing",level:3},{value:"UTxO Growth",id:"utxo-growth",level:3},{value:"UTxO-HD / LMDB",id:"utxo-hd--lmdb",level:3}],d={toc:c},m="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Benchmarking: We've performed and analysed benchmarks in the Conway era, with ",(0,a.kt)("inlineCode",{parentName:"li"},"DRep"),"s injected."),(0,a.kt)("li",{parentName:"ul"},"Development: Tracing ",(0,a.kt)("inlineCode",{parentName:"li"},"DRep")," data has been implemented; improved error reporting in ",(0,a.kt)("inlineCode",{parentName:"li"},"tx-generator")," and analysis quick queries are ongoing work."),(0,a.kt)("li",{parentName:"ul"},"Workbench: We now fully supports the new CLI ",(0,a.kt)("inlineCode",{parentName:"li"},"create-testnet-data")," command and ",(0,a.kt)("inlineCode",{parentName:"li"},"DRep")," injection into Conway genesis. Haskell profile definition work is ongoing."),(0,a.kt)("li",{parentName:"ul"},"Tracing: Various additions to Node metrics are being worked on, such as build info and block producer role. Metrics naming will be further harmonized."),(0,a.kt)("li",{parentName:"ul"},"UTxO Growth: We've finalized analysis and reports of all benchmarks targeting UTxO scaling scenarios."),(0,a.kt)("li",{parentName:"ul"},"UTxO-HD / LMDB: We've performed multiple runs benchmarking the LMDB (on-disk) backend of UTxO-HD.")),(0,a.kt)("h2",{id:"low-level-overview"},"Low level overview"),(0,a.kt)("h3",{id:"benchmarking"},"Benchmarking"),(0,a.kt)("p",null,"We've run and analyzed a full set of benchmarks comparing the Conway ledger against the Babbage one, on Node ",(0,a.kt)("inlineCode",{parentName:"p"},"8.10.1-pre"),". For Conway, our additional goal was to measure a vanilla ledger state against one with a large amount of ",(0,a.kt)("inlineCode",{parentName:"p"},"DRep"),"s - and delegations to those ",(0,a.kt)("inlineCode",{parentName:"p"},"DRep"),"s - present. The\nbenchmarks used our existing value and Plutus workloads to remain comparable to each other."),(0,a.kt)("h3",{id:"development"},"Development"),(0,a.kt)("p",null,"Additional ledger queries for the tracing system have been implemented and merged to ",(0,a.kt)("inlineCode",{parentName:"p"},"master"),". Those capture the amount of, and the number\nof existing delegations to, ",(0,a.kt)("inlineCode",{parentName:"p"},"DRep"),"s as trace output - and thus enable creating a metric on top of it, which can then be monitored."),(0,a.kt)("p",null,"The (in our case) non-deterministic nature of shutting down different cluster setups - both local and cloud-based - carries the possibility\nthat our transaction generation service occasionally misclassifies a regular shutdown as an error. Furthermore, in the case of network malfunctions, the service's errors are too unspecific. By implementing thread labels for submission threads, corresponding to each\nsubmission target, and by adding custom smart signal handlers, we'll improve the generator's error reporting significantly."),(0,a.kt)("p",null,"The initial tests for quick queries are being developed further. We're moving towards a principled, and generalized, syntax that supports both\nprepared, parametrizable queries from the application code, as well as ad-hoc queries stated e.g. on the command line."),(0,a.kt)("h3",{id:"workbench"},"Workbench"),(0,a.kt)("p",null,"The performance workbench now fully supports the new ",(0,a.kt)("inlineCode",{parentName:"p"},"cardano-cli")," command ",(0,a.kt)("inlineCode",{parentName:"p"},"create-test-data"),". We use it to inject both stake\ndelegated to stake pools into genesis, and - recently added - stake delegated to ",(0,a.kt)("inlineCode",{parentName:"p"},"DRep"),"s as well. It has been proven very useful\nand versatile so far, and will eventually replace the current ",(0,a.kt)("inlineCode",{parentName:"p"},"create-staked")," command.  "),(0,a.kt)("p",null,"Work on porting our performance workbench's profile definitions to Haskell, and providing them with an appropriate test suite, is still ongoing; currently, we're integrating all new profile families that came out of the UTxO growth scenarios."),(0,a.kt)("h3",{id:"tracing"},"Tracing"),(0,a.kt)("p",null,"New metrics are being implemented for the tracing system. They will also be part of Prometheus output and as such accessible to\nmonitoring services. There'll be ",(0,a.kt)("inlineCode",{parentName:"p"},"cardano-node"),"'s detailed build info, as well as a node's block producer status, meaning the presence of forger credentials. Those new metrics are being backported to the legacy tracing system, too.  "),(0,a.kt)("p",null,"Furthermore, we've determined the need to revisit metrics naming. There's still a divergence between naming in the legacy\nand the new system. While this could be mitigated by passing in extra config options, we think that a transition to the new system\nshould not impose any unnecessary effort for node operators. A design to fully harmonize the existing naming schemata is currently being\nset up."),(0,a.kt)("h3",{id:"utxo-growth"},"UTxO Growth"),(0,a.kt)("p",null,"The UTxO Growth benchmarking series has been finalized. We've finished analyses and reports for all scenarios that\nwere tested and explored.   "),(0,a.kt)("p",null,"The overarching questions were, given a network of 32GB host systems, how large can the UTxO set grow in general,\nhow large can it grow before the nodes have to operate close to the RAM limit over extended periods of time, and how does scaling the UTxO set size affect network metrics, such as block diffusion. "),(0,a.kt)("p",null,'A dedicated "UTxO Scaling Squad" was set up, who was driving the entire process, and we enjoyed a very focused and productive collaboration with them.'),(0,a.kt)("h3",{id:"utxo-hd--lmdb"},"UTxO-HD / LMDB"),(0,a.kt)("p",null,"Last not least, we were able to benchmark UTxO-HD's on-disk backend on a network of block producing nodes, on a recent ",(0,a.kt)("inlineCode",{parentName:"p"},"8.9.1")," version\nof ",(0,a.kt)("inlineCode",{parentName:"p"},"cardano-node"),". The setup allowed of using a direct access SSD device for performance critical disk I/O, whereas the bulk of ChainDB and ledger snapshots remained on a standard AWS EBS volume.  "),(0,a.kt)("p",null,"The benchmarks comprised both optimistic and pessimistic RAM assumptions for the host OS to further optimize I/O via page cache, as well as medium and large UTxO set sizes - the latter almost tripling current mainnet's size. The results were promising; the LMDB backend has proven to be able to accomodate large UTxO sets using significantly less RAM than the default all-in-memory node - and with a more than reasonable trade-off performance-wise. Furthermore, running with pessimistic assumptions, the performance impact on LMDB was very moderate only."))}p.isMDXComponent=!0}}]);