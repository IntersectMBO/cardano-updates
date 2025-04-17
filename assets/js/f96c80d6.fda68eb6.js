"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[90288],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>g});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(t),p=a,g=u["".concat(s,".").concat(p)]||u[p]||d[p]||i;return t?r.createElement(g,o(o({ref:n},m),{},{components:t})):r.createElement(g,o({ref:n},m))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},75947:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const i={title:"Performance & Tracing Update",slug:"2023-12-04-performance-and-tracing",authors:"mgmeier",tags:["performance-tracing"],hide_table_of_contents:!1},o=void 0,l={permalink:"/2023-12-04-performance-and-tracing",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2023-12-04-performance-and-tracing.md",source:"@site/blog/2023-12-04-performance-and-tracing.md",title:"Performance & Tracing Update",description:"High level summary",date:"2023-12-04T00:00:00.000Z",formattedDate:"December 4, 2023",tags:[{label:"performance-tracing",permalink:"/tags/performance-tracing"}],readingTime:2.085,hasTruncateMarker:!1,authors:[{name:"Michael Karg",title:"Performance and Tracing Team Lead",url:"https://github.com/mgmeier",imageURL:"https://github.com/mgmeier.png",key:"mgmeier"}],frontMatter:{title:"Performance & Tracing Update",slug:"2023-12-04-performance-and-tracing",authors:"mgmeier",tags:["performance-tracing"],hide_table_of_contents:!1},prevItem:{title:"Mithril Team Update",permalink:"/2023-12-06-mithril"},nextItem:{title:"Hydra Team Update",permalink:"/2023-12-01-hydra"}},s={authorsImageUrls:[void 0]},c=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Low level overview",id:"low-level-overview",level:2},{value:"Benchmarking",id:"benchmarking",level:3},{value:"Development",id:"development",level:3},{value:"Infrastructure",id:"infrastructure",level:3},{value:"Tracing",id:"tracing",level:3},{value:"Nomad backend",id:"nomad-backend",level:3}],m={toc:c},u="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Benchmarking: Release benchmarking for node ",(0,a.kt)("inlineCode",{parentName:"li"},"8.7.0"),". Also, we performed the first-ever Conway benchmarks."),(0,a.kt)("li",{parentName:"ul"},"Development: Conway capability of our workload generator has been implemented and merged to ",(0,a.kt)("inlineCode",{parentName:"li"},"master"),"."),(0,a.kt)("li",{parentName:"ul"},"Infrastructure: Changes to our workbench facilitating easy access and archiving of raw benchmarking data."),(0,a.kt)("li",{parentName:"ul"},"Tracing: Quality-of-life improvements to tracing output and addition of a test suite."),(0,a.kt)("li",{parentName:"ul"},"Nomad cluster: Expand the list of benchmarking profiles that can be run on Nomad; generalize cluster topology generation.")),(0,a.kt)("h2",{id:"low-level-overview"},"Low level overview"),(0,a.kt)("h3",{id:"benchmarking"},"Benchmarking"),(0,a.kt)("p",null,"A full set of benchmarks for node ",(0,a.kt)("inlineCode",{parentName:"p"},"8.7.0")," has been performed, with the focus of enabling the next mainnet release. We've measured slight performance improvements of ",(0,a.kt)("inlineCode",{parentName:"p"},"8.7.0")," over ",(0,a.kt)("inlineCode",{parentName:"p"},"8.6.0"),", and can confirm no regressions have been introduced."),(0,a.kt)("p",null,"Furthermore, we've run system integration level benchmarks in the Conway era for the first time, on the same node version.\nOnly Babbage-compatible workloads have entered comparison as to ascertain performance consequences of only changing the ledger version, and nothing else. The results are very promising, as we could show that switching ledger versions for existing workloads does not come with a performance penalty."),(0,a.kt)("h3",{id:"development"},"Development"),(0,a.kt)("p",null,"Our transaction generator has been extended to be able to submit all present benchmarking workflows in the Conway era.\nCurrently, we're looking into adding Conway-exclusive features, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"DRep")," registration. Those would be submitted at the very beginning of a run, as we're interested in seeing potential performance implications of maintaining ",(0,a.kt)("inlineCode",{parentName:"p"},"DRep")," sets of varying size in ledger. Furthermore, this will serve as the basis for future development Conway-exclusive workloads, such as governance actions or vote tallying."),(0,a.kt)("h3",{id:"infrastructure"},"Infrastructure"),(0,a.kt)("p",null,"As our workbench will be pivotal in orchestrating and organizing benchmarking runs on the Nomad cloud backend, we've\nimproved how raw benchmark data is tagged, which metadata is documented in an automated manner. This enhances both access to existing run sets, as well as maintaining an archive for benchmarking data."),(0,a.kt)("h3",{id:"tracing"},"Tracing"),(0,a.kt)("p",null,"The new tracing system is currently receiving usability improvements as we're reworking the output of several trace messages.\nAdditionally, we're setting up a rigorous test suite to provide safety for future development of and component integration inte the system."),(0,a.kt)("h3",{id:"nomad-backend"},"Nomad backend"),(0,a.kt)("p",null,"We've been working on adapting various benchmarking workloads, which are defined by our workbench's profiles, to running on the new infrastructure. This mainly concerns a workload utilizing Plutus, as well as peer-to-peer flavoured workloads. Furthermore, we're implementing a solution to create all possible cluster topologies algorithmically, instead of still using fixed literal definitions for some cases."))}d.isMDXComponent=!0}}]);