"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[94032],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=c(n),u=a,h=p["".concat(l,".").concat(u)]||p[u]||d[u]||o;return n?r.createElement(h,i(i({ref:t},m),{},{components:n})):r.createElement(h,i({ref:t},m))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7254:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"Performance & Tracing Update",slug:"2024-11-18-performance-and-tracing",authors:"mgmeier",tags:["performance-tracing"],hide_table_of_contents:!1},i=void 0,s={permalink:"/2024-11-18-performance-and-tracing",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2024-11-18-performance-and-tracing.md",source:"@site/blog/2024-11-18-performance-and-tracing.md",title:"Performance & Tracing Update",description:"High level summary",date:"2024-11-18T00:00:00.000Z",formattedDate:"November 18, 2024",tags:[{label:"performance-tracing",permalink:"/tags/performance-tracing"}],readingTime:3.625,hasTruncateMarker:!1,authors:[{name:"Michael Karg",title:"Performance and Tracing Team Lead",url:"https://github.com/mgmeier",imageURL:"https://github.com/mgmeier.png",key:"mgmeier"}],frontMatter:{title:"Performance & Tracing Update",slug:"2024-11-18-performance-and-tracing",authors:"mgmeier",tags:["performance-tracing"],hide_table_of_contents:!1},prevItem:{title:"Node API & CLI Team Update",permalink:"/2024-11-20-node-cli-api"},nextItem:{title:"SRE Team Update",permalink:"/2024-11-15-sre"}},l={authorsImageUrls:[void 0]},c=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Low level overview",id:"low-level-overview",level:2},{value:"Benchmarking",id:"benchmarking",level:3},{value:"Development",id:"development",level:3},{value:"Workbench",id:"workbench",level:3},{value:"Tracing",id:"tracing",level:3}],m={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Benchmarking: Further Governance action / voting benchmarks on Node ",(0,a.kt)("inlineCode",{parentName:"li"},"10.0"),"."),(0,a.kt)("li",{parentName:"ul"},"Development: New protoype for database-backed persistence layer in our analysis tool ",(0,a.kt)("inlineCode",{parentName:"li"},"locli"),"."),(0,a.kt)("li",{parentName:"ul"},"Workbench: More fine-grained genesis caching; export cluster topology for Leios simulation."),(0,a.kt)("li",{parentName:"ul"},"Tracing: Final round of metrics alignment complete; prepared for ",(0,a.kt)("inlineCode",{parentName:"li"},"typed-protocols-0.3")," bump; new tracing system rollout starting with Node ",(0,a.kt)("inlineCode",{parentName:"li"},"10.2"),".")),(0,a.kt)("h2",{id:"low-level-overview"},"Low level overview"),(0,a.kt)("h3",{id:"benchmarking"},"Benchmarking"),(0,a.kt)("p",null,"We've been working on improving the voting workload for benchmarks along two axes: Firstly, reduce the (slight) overhead that\ndecentralized vote submission induces. Secondly, introduce a scaling parameter - namely the number of votes submitted per transaction, and hence\nthe number of proposals to be considered simultaneously for tallying and ratification. On the way, we improved upon timing of submissions, as\nthis has caused benchmarks to abort mid-run every now and then: in those cases, a newly created UTxO entry just hadn't settled across the cluster when it was\nsupposed to be reused for consumption.  "),(0,a.kt)("p",null,"Scaling of the voting workload is currently under analysis."),(0,a.kt)("h3",{id:"development"},"Development"),(0,a.kt)("p",null,"Our analysis and reporting tool, ",(0,a.kt)("inlineCode",{parentName:"p"},"locli"),' ("LogObject CLI") has a few drawbacks as far as system resource usage goes; it requires a huge\namount of RAM, and initialization (i.e. loading and parsing trace output) is quite slow. Moreover, there is no intermediate, potentially\nexposable or queryable, representation of data besides the trace messages themselves.  '),(0,a.kt)("p",null," We're working on a prototype that introduces a database persistence layer as that intermediate representation. Not only does that open\nup raw benchmarking data to other means of querying or processing outside ",(0,a.kt)("inlineCode",{parentName:"p"},"locli"),". Initializing the tool from the database has also shown\nto require much less RAM, and to improve duration of the initialization phase. Furthermore, on-disk representation is much more efficient that\nway - which is no small benefit when raw benchmarking data for a single run can occupy north of 64GiB."),(0,a.kt)("p",null," The prototype has yet to be fully integrated into the analysis pipeline for validation, however, initial observations are promising. "),(0,a.kt)("h3",{id:"workbench"},"Workbench"),(0,a.kt)("p",null,"For our benchmarks, we rely on staked geneses, as the cluster needs control all stake, and such, block production, to yield meaningful performance\nmetrics. As creating a staked genesis of that extent is an expensive operation, we use a caching mechanism for those. Small changes in the benchmarking\nprofile, such as protocol version or parameters, Plutus cost models or execution budgets would usually trigger the creation of a new cache entry. We've\nnow factored out from cache entry resolution all those variables that do not impact staking itself. We then created a mechnanism to patch those\nchanges into genesis files after cache retrieval, when preparing them for a benchmarking run. This adds flexibility for creating profiles, and reduces the\ntime to deploy a run to the cluster.  "),(0,a.kt)("p",null,"We also delivered a comprehensive description of our cluster to the Leios innovation team. This includes the definition of our artificially constrained\ntopology, as well as a latency matrix for node connections in that topology, assigning a weight to all edges in the graph. The Leios team intends\nto use that material to implement a large-scale simulation of the algorithm, and thus gain representative timings for diffusion and propagation."),(0,a.kt)("h3",{id:"tracing"},"Tracing"),(0,a.kt)("p",null,"The alignment of metrics names between legacy and new tracing system is now complete - which should minimize the migration effort of existing dashboards for the community. The only differences that remain are motivated by increasing compliance with existing standards like e.g. OpenMetrics. Furthermore, a few metrics still\nmissing in the new system have now been ported over, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"node.start.time")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"served.block.latest"),".  "),(0,a.kt)("p",null,"We're all set for the expected bump to ",(0,a.kt)("inlineCode",{parentName:"p"},"typed-protocols-0.3"),": both forwarder packages ",(0,a.kt)("inlineCode",{parentName:"p"},"trace-forward")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"ekg-forward")," for the new tracing\nsystem have been adapted to the new API and are passing all tests."),(0,a.kt)("p",null,"Last not least, we've settled on a rollout plan for the new tracing system. The new system will set to be the ",(0,a.kt)("strong",{parentName:"p"},"default")," with the upcoming Node\nrelease ",(0,a.kt)("inlineCode",{parentName:"p"},"10.2"),". This is achieved by a change of configuration only - there is no need for different Node builds. The ",(0,a.kt)("inlineCode",{parentName:"p"},"cardano-node")," binary\nwill contain both tracing systems for a considerable grace period: 3 - 6 months after release. This should give the community ample time to\nadjust for necessary changes in downstream services or dashboards that consume trace or metrics output.  "),(0,a.kt)("p",null,"We'll provide a comprehensive hands-on migration guide summarizing those changes for the user."))}d.isMDXComponent=!0}}]);