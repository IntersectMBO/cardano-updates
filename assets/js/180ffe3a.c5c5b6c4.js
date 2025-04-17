"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[36275],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(n),p=r,f=m["".concat(s,".").concat(p)]||m[p]||u[p]||o;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},41797:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={title:"Performance & Tracing Update",slug:"2025-01-17-performance-and-tracing",authors:"mgmeier",tags:["performance-tracing"],hide_table_of_contents:!1},i=void 0,l={permalink:"/2025-01-17-performance-and-tracing",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2025-01-17-performance-and-tracing.md",source:"@site/blog/2025-01-17-performance-and-tracing.md",title:"Performance & Tracing Update",description:"High level summary",date:"2025-01-17T00:00:00.000Z",formattedDate:"January 17, 2025",tags:[{label:"performance-tracing",permalink:"/tags/performance-tracing"}],readingTime:3.795,hasTruncateMarker:!1,authors:[{name:"Michael Karg",title:"Performance and Tracing Team Lead",url:"https://github.com/mgmeier",imageURL:"https://github.com/mgmeier.png",key:"mgmeier"}],frontMatter:{title:"Performance & Tracing Update",slug:"2025-01-17-performance-and-tracing",authors:"mgmeier",tags:["performance-tracing"],hide_table_of_contents:!1},prevItem:{title:"Network Team Update",permalink:"/2025-01-20-network"},nextItem:{title:"SRE Team Update",permalink:"/2025-01-17-sre"}},s={authorsImageUrls:[void 0]},c=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Low level overview",id:"low-level-overview",level:2},{value:"Benchmarking",id:"benchmarking",level:3},{value:"Development",id:"development",level:3},{value:"Infrastructure",id:"infrastructure",level:3},{value:"Tracing",id:"tracing",level:3},{value:"Community",id:"community",level:3}],d={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Benchmarking: Release benchmarks for Node ",(0,r.kt)("inlineCode",{parentName:"li"},"10.1.4"),"; performance evaluation of ledger metrics trace location."),(0,r.kt)("li",{parentName:"ul"},"Development: Database-backed quick queries for ",(0,r.kt)("inlineCode",{parentName:"li"},"locli")," analysis tool."),(0,r.kt)("li",{parentName:"ul"},"Infrastructure: Voting workload definition merged to ",(0,r.kt)("inlineCode",{parentName:"li"},"master"),", work on Haskell profile definition now continues."),(0,r.kt)("li",{parentName:"ul"},"Tracing: C library for trace forwarding and documentation ongoing; improved fallback configs."),(0,r.kt)("li",{parentName:"ul"},"Community: new Discord channel ",(0,r.kt)("em",{parentName:"li"},"#tracing-monitoring")," supporting new tracing system rollout.")),(0,r.kt)("h2",{id:"low-level-overview"},"Low level overview"),(0,r.kt)("h3",{id:"benchmarking"},"Benchmarking"),(0,r.kt)("p",null,"We've run and analyzed a full set of release benchmarks for Node version ",(0,r.kt)("inlineCode",{parentName:"p"},"10.1.4"),". We could not observe any performance risks, and expect network performance to very closely match that of\nprevious ",(0,r.kt)("inlineCode",{parentName:"p"},"10.1.x")," releases.  "),(0,r.kt)("p",null,"Furthermore, we've been investigating the location on the 'hot code path' where metrics from ledger are traced - such as UTxO set size or delegation map size. This currently happens\nat slot start, when the block forging loop is kicked off. We aim to decouple emitting those traces from the forging loop, and instead moving them to a separate thread. This thread could\npotentially wake up after a pre-defined time has passed, like e.g. 2/3 of a slot's duration. That would ensure getting those values out of ledger does not occur simultaneously to block production\nproper.  "),(0,r.kt)("p",null,"Moreover, as a new feature, it would enable tracing those metrics on nodes that do not run a forging loop themselves. And last not least, it would free up the way to providing additional metrics\nat the new location - like DRep count, or DRep delegations - without negatively affecting performance. Initial prototyping has yielded promising results so far."),(0,r.kt)("h3",{id:"development"},"Development"),(0,r.kt)("p",null,"Parametrizable quick queries, a new feature of our analysis tool ",(0,r.kt)("inlineCode",{parentName:"p"},"locli"),", have commenced development. They rely on the new database storage backend for raw benchmarking data to be efficient. These quick queries\nare based on a filter-reduce framework, with composable reducers, which provide a clean way to express exposing very specific points or correlations from the raw benchmarking data.  "),(0,r.kt)("p",null,"The quick query feature also incorporates ad-hoc plotting of the query results, and will incorporate exporting the result into exchange formats like CSV or JSON in the future."),(0,r.kt)("h3",{id:"infrastructure"},"Infrastructure"),(0,r.kt)("p",null,"The voting workload definition has been cleanly integrated with the workbench. This also includes an abstract definition of concurrent workloads - which was previously unnecessary, as exactly\none workload would be handled by exactly one and the same service. The integration, along with the added flexibility, has been merged to ",(0,r.kt)("inlineCode",{parentName:"p"},"master"),".  "),(0,r.kt)("p",null,"We're now actively working again on the Haskell definition of benchmarking workloads, including a test suite. Most of this improvement had already been done; it still needs final realignment\nwith the current state of all existing workloads. It will allow us to trade hard-to-maintain large ",(0,r.kt)("inlineCode",{parentName:"p"},"jq")," definitions with concise testable code, and recursive shell script invocations with using a\nwell-defined command line interface only once."),(0,r.kt)("h3",{id:"tracing"},"Tracing"),(0,r.kt)("p",null,"Good progress has been made on the small, self-contained C library that implements trace forwarding. It will allow processes in any language that can call to C via a foreign function interface\nto use ",(0,r.kt)("inlineCode",{parentName:"p"},"cardano-tracer")," as a target to forward traces and metrics.  The initial prototype has already evolved into a library design, which intends to offer to the host application\na simple way to encode to Cardano's schema of trace messages - and to use its forwarding protocol asynchronously, as to minimize interruption of the application's native control flow.  "),(0,r.kt)("p",null,"In preparation of the new tracing system's release, we've also revisited the fallback configuration values the system will use if it is accidentally misconfigured by the user. The forwarder component\nuses a bounded queue buffer for trace output to compensate for a possibly unreliable connection to ",(0,r.kt)("inlineCode",{parentName:"p"},"cardano-tracer"),". The fallback bounds were chosen to conserve trace output at all cost - as it turns out, too high\nof a memory cost, if trace forwarding does not happen at all, due to faulty configuration. We've adjusted this and other fallback values to sensible defaults to guarantee a functional system even in case\nof configuration errors."),(0,r.kt)("h3",{id:"community"},"Community"),(0,r.kt)("p",null,"Our team will host a new channel ",(0,r.kt)("em",{parentName:"p"},"#tracing-monitoring")," on ",(0,r.kt)("em",{parentName:"p"},"IOG's Technical Community")," discord server. The migration to the new tracing system might affect existing automations built by the community, or how\nexisting configuration need adjusting to achieve the intended outcome. In the channel, we'll offer support for the community in all those regards, as well as answer more general questions regarding the Node's tracing systems."),(0,r.kt)("p",null,"Additionally, we're currently releasing our documentation improvements to the excellent ",(0,r.kt)("a",{parentName:"p",href:"https://developers.cardano.org"},"Cardano Developer Portal"),", linked below."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://discord.com/channels/826816523368005654/1332375957528514590"},"Discord channel #tracing-monitoring")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.cardano.org/docs/get-started/cardano-node/new-tracing-system/new-tracing-system"},"Developer Portal: New Tracing quickstart")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.cardano.org/docs/get-started/cardano-node/new-tracing-system/cardano-tracer"},"Developer Portal: ",(0,r.kt)("inlineCode",{parentName:"a"},"cardano-tracer")))))}u.isMDXComponent=!0}}]);