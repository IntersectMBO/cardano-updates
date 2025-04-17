"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[67122],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),u=a,g=p["".concat(c,".").concat(u)]||p[u]||m[u]||o;return n?r.createElement(g,i(i({ref:t},d),{},{components:n})):r.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},29772:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={title:"Performance & Tracing Update",slug:"2024-01-31-performance-and-tracing",authors:"mgmeier",tags:["performance-tracing"],hide_table_of_contents:!1},i=void 0,l={permalink:"/2024-01-31-performance-and-tracing",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2024-01-31-performance-and-tracing.md",source:"@site/blog/2024-01-31-performance-and-tracing.md",title:"Performance & Tracing Update",description:"High level summary",date:"2024-01-31T00:00:00.000Z",formattedDate:"January 31, 2024",tags:[{label:"performance-tracing",permalink:"/tags/performance-tracing"}],readingTime:1.88,hasTruncateMarker:!1,authors:[{name:"Michael Karg",title:"Performance and Tracing Team Lead",url:"https://github.com/mgmeier",imageURL:"https://github.com/mgmeier.png",key:"mgmeier"}],frontMatter:{title:"Performance & Tracing Update",slug:"2024-01-31-performance-and-tracing",authors:"mgmeier",tags:["performance-tracing"],hide_table_of_contents:!1},prevItem:{title:"Node API & CLI Team Update",permalink:"/2024-01-31-node-cli-api"},nextItem:{title:"DB Sync Team Update",permalink:"/2024-01-30-db-sync"}},c={authorsImageUrls:[void 0]},s=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Low level overview",id:"low-level-overview",level:2},{value:"Benchmarking",id:"benchmarking",level:3},{value:"Development",id:"development",level:3},{value:"Tracing",id:"tracing",level:3},{value:"Nomad backend",id:"nomad-backend",level:3}],d={toc:s},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Benchmarking: GHC 9.6.3 benchmarks for node ",(0,a.kt)("inlineCode",{parentName:"li"},"8.7.2")," have been performed."),(0,a.kt)("li",{parentName:"ul"},"Development: Additional features for our reporting pipeline, while simultaneously reducing dependency footprint."),(0,a.kt)("li",{parentName:"ul"},"Tracing: Implementation for ",(0,a.kt)("inlineCode",{parentName:"li"},"cardano-tracer")," to work on handles instead of files; work on New Tracing Quickstart document has begun."),(0,a.kt)("li",{parentName:"ul"},"Nomad cluster: We're preparing an upgrade to the latest Nomad version.")),(0,a.kt)("h2",{id:"low-level-overview"},"Low level overview"),(0,a.kt)("h3",{id:"benchmarking"},"Benchmarking"),(0,a.kt)("p",null,"We've performed a full set of GHC 9.6.3 benchmarks for node ",(0,a.kt)("inlineCode",{parentName:"p"},"8.7.2"),". For recommending GHC9.6 as a default build platform for ",(0,a.kt)("inlineCode",{parentName:"p"},"cardano-node")," - from a performance perspective - we observe only one residual issue. As a way to\naddress this, we've decided to create a reproduction benchmark targeting the affected component."),(0,a.kt)("h3",{id:"development"},"Development"),(0,a.kt)("p",null,"Our reporting pipeline will be expanded to support a wider range of rendering formats, as well as report templates. As the pipeline is part of our workbench - and thus gets downloaded and built when entering the workbench shell - it's\ngood practice to keep a small dependency footprint. When reworking the pipeline, we aim to simultaneously reduce dependencies."),(0,a.kt)("h3",{id:"tracing"},"Tracing"),(0,a.kt)("p",null,"So far, ",(0,a.kt)("inlineCode",{parentName:"p"},"cardano-tracer")," has internally been using files, or file names, for the purpose of logging trace messages it receives via forwarding. This is simple, but induces quite some overhead at runtime: files have to be opened and closed for each message.\nUsing and managing open file handles inside ",(0,a.kt)("inlineCode",{parentName:"p"},"cardano-tracer")," does remove that overhead, but unsurprisingly introduces some complexity into the application code. Currently, we're working on implementing that change.  "),(0,a.kt)("p",null,"Furthermore, we're working on a Quickstart document for the new tracing system, with end users as its intended audience. It will contain recommended production use setup(s), and how to efficiently configure and run them step by step. Additionally, it\nwill provide a brief, but comprehensive overview over the features at the user's disposal."),(0,a.kt)("h3",{id:"nomad-backend"},"Nomad backend"),(0,a.kt)("p",null,"On the Nomad cluster, we've experienced undesired system behaviour when the heartbeat between the Nomad server and a client is interrupted temporarily - although the Nomad job itself is still 100% functional. A Nomad\nupgrade to the latest version promises to fix that, but it turn comes with other issues. We're currently working on adapting our automation and deployment around those known issues, before we can eventually\napply the upgrade."))}m.isMDXComponent=!0}}]);