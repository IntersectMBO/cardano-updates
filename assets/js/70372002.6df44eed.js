"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[52703],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=c(n),p=a,h=d["".concat(l,".").concat(p)]||d[p]||u[p]||i;return n?r.createElement(h,o(o({ref:t},m),{},{components:n})):r.createElement(h,o({ref:t},m))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},78155:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"Performance & tracing update",slug:"2023-10-06-performance-and-tracing",authors:"mgmeier",tags:["performance-tracing"],hide_table_of_contents:!1},o=void 0,s={permalink:"/2023-10-06-performance-and-tracing",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2023-10-06-performance-and-tracing.md",source:"@site/blog/2023-10-06-performance-and-tracing.md",title:"Performance & tracing update",description:"High level summary",date:"2023-10-06T00:00:00.000Z",formattedDate:"October 6, 2023",tags:[{label:"performance-tracing",permalink:"/tags/performance-tracing"}],readingTime:2.625,hasTruncateMarker:!1,authors:[{name:"Michael Karg",title:"Performance and Tracing Team Lead",url:"https://github.com/mgmeier",imageURL:"https://github.com/mgmeier.png",key:"mgmeier"}],frontMatter:{title:"Performance & tracing update",slug:"2023-10-06-performance-and-tracing",authors:"mgmeier",tags:["performance-tracing"],hide_table_of_contents:!1},prevItem:{title:"Hydra Team Update",permalink:"/2023-10-06-hydra"},nextItem:{title:"Consensus Team Update",permalink:"/2023-10-04-consensus"}},l={authorsImageUrls:[void 0]},c=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Low level overview",id:"low-level-overview",level:2},{value:"Benchmarking",id:"benchmarking",level:3},{value:"Consensus QTAs",id:"consensus-qtas",level:3},{value:"Development",id:"development",level:3},{value:"Tracing",id:"tracing",level:3},{value:"Nomad backend",id:"nomad-backend",level:3}],m={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Benchmarking: Continued benchmarking of UTxO-HD and performed benchmarks for the new tracing system."),(0,a.kt)("li",{parentName:"ul"},"Consensus QTAs: Our protoype approach is applied to potential regression fixes with GHC 9.2.7."),(0,a.kt)("li",{parentName:"ul"},"Development: We've developed strategies for future benchmarks of PlutusV3 and UTxO-HD's on-disk backing store."),(0,a.kt)("li",{parentName:"ul"},"Tracing: The machine-readable tracer configuration has been merged. Optimization of ",(0,a.kt)("inlineCode",{parentName:"li"},"cardano-tracer")," started."),(0,a.kt)("li",{parentName:"ul"},"Nomad backend: Ongoing variance analysis and refined cluster topology.")),(0,a.kt)("h2",{id:"low-level-overview"},"Low level overview"),(0,a.kt)("h3",{id:"benchmarking"},"Benchmarking"),(0,a.kt)("p",null,"Performing and analyzing benchmarks for the UTxO-HD feature is an ongoing effort; we can reliably assess the\nperformance of the in-memory backing store and evaluate possible optimizations (or regressions) for it.  "),(0,a.kt)("p",null,"Furthermore, benchmarks of our new tracing system after several rounds of optimization have been performed. The results\nshow all key metrics now being unaffected by the choice of tracing system (legacy or new) - with the new system being able to provide more features and flexibility in comparison. The benchmarks also highlighted further points for optimization, with the focus now on the ",(0,a.kt)("inlineCode",{parentName:"p"},"cardano-tracer")," service."),(0,a.kt)("h3",{id:"consensus-qtas"},"Consensus QTAs"),(0,a.kt)("p",null,"The Quantitative Timeliness Agreements (QTA) prototype is being used in coordination with Consensus and DevX to validate a series of patches that address optmization opportunities which GHC8.10 seizes, but GHC9.2 misses. The\nfeedback from this approach is much more immediate than running benchmarks at system integration level. But once we eventually do, we expect to reproduce the relevant observations - which would mean a big step towards maturing the prototype."),(0,a.kt)("h3",{id:"development"},"Development"),(0,a.kt)("p",null,"Benchmarking UTxO-HD's on-disk backing store needs special attention: in virtualized environments, disk I/O is not a reliable metric as it passes several layers of indirection. As this is the very metric which will influence overall performance of this UTxO-HD flavour, we developed a plan to monitor such nodes, connected to a running network, on dedicated hardware - having direct SSD access. Replicating this setup for an entire benchmarking cluster of such nodes will be a future effort.  "),(0,a.kt)("p",null,"PlutusV3 will come with new builtins and a new cost model. It will take a specialized benchmark to ascertain the soundness of that model running a full cluster of nodes, possibly stressing expensive builtins. At the same time,\nwe'd like to validate the many improvements that have gone into the Plutus evaluator."),(0,a.kt)("h3",{id:"tracing"},"Tracing"),(0,a.kt)("p",null,"The focus for further optimization of the new tracing system has shifted to ",(0,a.kt)("inlineCode",{parentName:"p"},"cardano-tracer")," - the service\nreceiving and processing traces from one (or more) nodes. Whilst undisputed that the code living in ",(0,a.kt)("inlineCode",{parentName:"p"},"cardano-node")," is\nmore performance critical, the receiving service must still minimize its resource footprint. Moreover, it can\ngenerate load for a running node when querying data points from it - which calls for tight control of that mechanism and its possible configurations."),(0,a.kt)("h3",{id:"nomad-backend"},"Nomad backend"),(0,a.kt)("p",null,"Variance analysis of new nomad backend has revealed a necessary adjustment of the cluster's topology. We repeated\nthe same analysis and now see even better confidence in the measurements taken with nomad. This concludes the work on the backend proper for the time being. The last steps before production use will focus on the interface between backend and our workbench, which provides all high-level benchmark definitions and analysis machinery."))}u.isMDXComponent=!0}}]);