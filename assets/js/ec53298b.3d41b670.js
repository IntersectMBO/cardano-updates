"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[21129],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},94656:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"Performance & tracing update",slug:"2023-04-05-performance-and-tracing",authors:"mgmeier",tags:["performance-tracing"],hide_table_of_contents:!1},o="High level summary",l={permalink:"/2023-04-05-performance-and-tracing",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2023-04-05-performance-and-tracing.md",source:"@site/blog/2023-04-05-performance-and-tracing.md",title:"Performance & tracing update",description:"* Benchmarking: We worked on adjusting our infrastructure to the new 8.0 release branch and performed a (very) early run.",date:"2023-04-05T00:00:00.000Z",formattedDate:"April 5, 2023",tags:[{label:"performance-tracing",permalink:"/tags/performance-tracing"}],readingTime:2.33,hasTruncateMarker:!1,authors:[{name:"Michael Karg",title:"Performance and Tracing Team Lead",url:"https://github.com/mgmeier",imageURL:"https://github.com/mgmeier.png",key:"mgmeier"}],frontMatter:{title:"Performance & tracing update",slug:"2023-04-05-performance-and-tracing",authors:"mgmeier",tags:["performance-tracing"],hide_table_of_contents:!1},prevItem:{title:"Node API & CLI Team Update",permalink:"/2023-04-05-node-cli-api"},nextItem:{title:"Crypto Team Update",permalink:"/2023-03-31-crypto"}},s={authorsImageUrls:[void 0]},c=[{value:"General",id:"general",level:3},{value:"Plutus library",id:"plutus-library",level:3},{value:"Nomad backend",id:"nomad-backend",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Benchmarking: We worked on adjusting our infrastructure to the new ",(0,a.kt)("inlineCode",{parentName:"li"},"8.0")," release branch and performed a (very) early run."),(0,a.kt)("li",{parentName:"ul"},"New tracing: We're profiling the new tracing system for minimizing its resource footprint and guarantee high throughput."),(0,a.kt)("li",{parentName:"ul"},"Analysis pipeline: Variance analysis both for reporting and for serving as a point of comparison has been merged."),(0,a.kt)("li",{parentName:"ul"},"Infrastructure: A library for Plutus scripts will be integrated in our tooling and benchmarking profiles. Also, a profile family aimed at the tracing systems has been added."),(0,a.kt)("li",{parentName:"ul"},"Nomad backend: Various specializations of the backend are currently being implemented, along with streamlining credentials management.")),(0,a.kt)("h1",{id:"benchmarking"},"Benchmarking"),(0,a.kt)("p",null,"We have adapted our benchmarking cluster to the requirements of the ",(0,a.kt)("inlineCode",{parentName:"p"},"8.0")," release branch. Testing runs of a very early feature branch for ",(0,a.kt)("inlineCode",{parentName:"p"},"8.0"),"\nhelped us localize an important issue in collaboration with the other teams. We look forward to gathering preliminary metrics for ",(0,a.kt)("inlineCode",{parentName:"p"},"8.0")," soon."),(0,a.kt)("h1",{id:"tracing"},"Tracing"),(0,a.kt)("p",null,"Analysis of resource usage profiles of both the legacy and new tracing system, with and without trace forwarding, have lead us to gather very\ndetailed profiling data for each possible setup. This is to ensure we keep resource usage within the node to an absolute minimum, while still providing\nthe highest possible throughput of data for forwarding to ",(0,a.kt)("inlineCode",{parentName:"p"},"cardano-tracer"),".   "),(0,a.kt)("p",null,"Additionally, we've worked on a very practically-oriented document targeted at end users of the new tracing system. It provides tested step-by-step instructions\nfor tunneling trace forwarding from a node to ",(0,a.kt)("inlineCode",{parentName:"p"},"cardano-tracer")," via an easy to manage system service, which will match the production setup of most users."),(0,a.kt)("h1",{id:"infrastructure--analysis"},"Infrastructure & Analysis"),(0,a.kt)("h3",{id:"general"},"General"),(0,a.kt)("p",null,"Variance analysis as a full-fledged entity in our tooling has been merged. Not only is this type of analysis now part of our reporting pipeline - variance\nanalysis can be fed back and serve as an additional point of comparison."),(0,a.kt)("p",null,"Furthermore, we've created a profile family for the workbench that's specifically aimed at measuring and comparing tracing system configurations."),(0,a.kt)("h3",{id:"plutus-library"},"Plutus library"),(0,a.kt)("p",null,"We opened a PR containing a new package for benchmarking - an extendable library that holds all Plutus scripts we use in our benchmarking profiles.\nThis will enable us in the future to iteratively work on customizing any given script, and the way is called in the context of a specific profile.\nIt is a refinement of current affairs, where we have additional build inputs solely to generate a static script file tied to an external commit."),(0,a.kt)("h3",{id:"nomad-backend"},"Nomad backend"),(0,a.kt)("p",null,"The nomad backend is being specialized in three ways: using a podman driver locally, using nomad agents supporting nix installables, and using nomad cloud agents. This supports having a common surface independent of the actual backend driver being used. In addition, vault retrieval and management of cloud access credentials is\nbeing improved to minimize any friction for the backend user."))}d.isMDXComponent=!0}}]);