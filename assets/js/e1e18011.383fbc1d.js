"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[27577],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,h=d["".concat(c,".").concat(u)]||d[u]||p[u]||o;return n?a.createElement(h,i(i({ref:t},m),{},{components:n})):a.createElement(h,i({ref:t},m))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},98913:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={title:"Performance & Tracing Q4 2023 Update",slug:"2023-Q4-performance-and-tracing",authors:"mgmeier",tags:["performance-tracing"],hide_table_of_contents:!1},i=void 0,l={permalink:"/quarterly/2023-Q4-performance-and-tracing",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/quarterly/2023-Q4-performance-and-tracing.md",source:"@site/quarterly/2023-Q4-performance-and-tracing.md",title:"Performance & Tracing Q4 2023 Update",description:"2023-10 - 2024-01",date:"2024-12-30T17:58:14.000Z",formattedDate:"December 30, 2024",tags:[{label:"performance-tracing",permalink:"/quarterly/tags/performance-tracing"}],readingTime:2.28,hasTruncateMarker:!1,authors:[{name:"Michael Karg",title:"Performance and Tracing Team Lead",url:"https://github.com/mgmeier",imageURL:"https://github.com/mgmeier.png",key:"mgmeier"}],frontMatter:{title:"Performance & Tracing Q4 2023 Update",slug:"2023-Q4-performance-and-tracing",authors:"mgmeier",tags:["performance-tracing"],hide_table_of_contents:!1},prevItem:{title:"Consensus Q4 2023 Update",permalink:"/quarterly/2023-Q4-consensus"},nextItem:{title:"SRE Q4 2023 Update",permalink:"/quarterly/2023-Q4-sre"}},c={authorsImageUrls:[void 0]},s=[{value:"2023-10 - 2024-01",id:"2023-10---2024-01",level:2},{value:"Main achievements",id:"main-achievements",level:3},{value:"Release benchmarking",id:"release-benchmarking",level:4},{value:"Conway benchmarks",id:"conway-benchmarks",level:4},{value:"P2P benchmarks",id:"p2p-benchmarks",level:4},{value:"GHC9 performance",id:"ghc9-performance",level:4},{value:"New nomad cluster",id:"new-nomad-cluster",level:4},{value:"Consensus component QTAs",id:"consensus-component-qtas",level:4},{value:"New team member",id:"new-team-member",level:4}],m={toc:s},d="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"2023-10---2024-01"},"2023-10 - 2024-01"),(0,r.kt)("h3",{id:"main-achievements"},"Main achievements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Release benchmarking, leading up to next mainnet release"),(0,r.kt)("li",{parentName:"ul"},"Conway benchmarking of existing Babbage workloads"),(0,r.kt)("li",{parentName:"ul"},"P2P benchmarks, validating viability as default topology"),(0,r.kt)("li",{parentName:"ul"},"Added basic ",(0,r.kt)("inlineCode",{parentName:"li"},"PlutusV3")," capability of our tooling"),(0,r.kt)("li",{parentName:"ul"},"Publication of benchmarking reports accompanying a mainnet release"),(0,r.kt)("li",{parentName:"ul"},"GHC9 performance investigation"),(0,r.kt)("li",{parentName:"ul"},"Finalized and validated all optimizations for the new tracing system"),(0,r.kt)("li",{parentName:"ul"},"New Nomad benchmarking cluster: production use"),(0,r.kt)("li",{parentName:"ul"},"Adjustment of our infrastructure to cover the migration to ",(0,r.kt)("em",{parentName:"li"},"IntersectMBO")),(0,r.kt)("li",{parentName:"ul"},"Conensus QTAs: prototype developed into alpha-stage benchmark"),(0,r.kt)("li",{parentName:"ul"},"Successful on-boarding of a new team member")),(0,r.kt)("h4",{id:"release-benchmarking"},"Release benchmarking"),(0,r.kt)("p",null,"We've performed and analyzed benchmarks for node versions ",(0,r.kt)("inlineCode",{parentName:"p"},"8.6.x")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"8.7.3"),", which is projected to be the next mainnet release, throughout Q4.\nAlong that way, we have identified, located and handled all performance blockers.  "),(0,r.kt)("p",null,"Additionally, we've started publishing benchmarking reports here on Cardano Updates. The format is meant to increase transparency and\nprovide insight into those measurements that accompany mainnet releases - demonstrating the absence of performance regressions and development\nof specific metrics over time."),(0,r.kt)("h4",{id:"conway-benchmarks"},"Conway benchmarks"),(0,r.kt)("p",null,"Furthermore, we've done first ever benchmarking of the Conway ledger. To that end, we've ported our Babbage workloads to Conway for\nimmediate comparability. Fortunately, we've have not found any performance regression in the Conway ledger."),(0,r.kt)("h4",{id:"p2p-benchmarks"},"P2P benchmarks"),(0,r.kt)("p",null,"In Q4, we've validated P2P topology to be viable as default for both relay and block producer nodes. As a consequence, we've switched\nto P2P topology for benchmarking baselines ourselves."),(0,r.kt)("h4",{id:"ghc9-performance"},"GHC9 performance"),(0,r.kt)("p",null,"In Q4, evaluation of GHC9.2's and GHC9.6's optimizer in the context of the Cardano code base has been completed.\nEventually, GHC9.6 has shown itself to be much more suitable from a performance perspective. We're convinced that\nwith a few select annotations in the code, GHC9.6's optimizer can produce a result on par performance-wise with GHC8.10 -\nwhich just was a great release in that regard. With GHC9.2 unfortunately, the changes would have to be more invasive - and thus more time-consuming."),(0,r.kt)("h4",{id:"new-nomad-cluster"},"New nomad cluster"),(0,r.kt)("p",null,"We\u2019ve moved the new Nomad cluster into production use and established new baselines for each workload on it.\nAdditionally, we\u2019ve shut down the legacy ",(0,r.kt)("inlineCode",{parentName:"p"},"cardano-ops")," benchmarking cluster, and archived all raw data from it."),(0,r.kt)("h4",{id:"consensus-component-qtas"},"Consensus component QTAs"),(0,r.kt)("p",null,"We\u2019ve developed the existing prototype into an automatable, self-contained benchmark called ",(0,r.kt)("inlineCode",{parentName:"p"},"beacon"),", as well as systematized workloads and run structure for it.\nMoreover, we\u2019ve demonstrated usefulness of the metrics, their reproducibility, and identified domains viable for QTAs with system-level benchmarks."),(0,r.kt)("h4",{id:"new-team-member"},"New team member"),(0,r.kt)("p",null,"We're happy to welcome a new joiner to our team! We've successfully onboarded him in Q4; he has taken\nover the ",(0,r.kt)("inlineCode",{parentName:"p"},"cardano-tracer")," service - the node-external component of the new tracing system - and has already\nlanded several valuable contributions."))}p.isMDXComponent=!0}}]);