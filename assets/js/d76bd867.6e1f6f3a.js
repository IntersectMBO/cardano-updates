"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[75563],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85131:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={title:"Benchmarking -- Node 8.12.1",slug:"2024-06-performance-8.12.1",authors:"mgmeier",tags:["benchmarking-reports"],hide_table_of_contents:!1},i=void 0,l={permalink:"/reports/2024-06-performance-8.12.1",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/reports/2024-06-performance-8.12.1.md",source:"@site/reports/2024-06-performance-8.12.1.md",title:"Benchmarking -- Node 8.12.1",description:"Setup",date:"2024-12-30T17:58:14.000Z",formattedDate:"December 30, 2024",tags:[{label:"benchmarking-reports",permalink:"/reports/tags/benchmarking-reports"}],readingTime:2.84,hasTruncateMarker:!1,authors:[{name:"Michael Karg",title:"Performance and Tracing Team Lead",url:"https://github.com/mgmeier",imageURL:"https://github.com/mgmeier.png",key:"mgmeier"}],frontMatter:{title:"Benchmarking -- Node 8.12.1",slug:"2024-06-performance-8.12.1",authors:"mgmeier",tags:["benchmarking-reports"],hide_table_of_contents:!1},prevItem:{title:"Benchmarking -- Node 8.9.3",permalink:"/reports/2024-05-performance-8.9.3"},nextItem:{title:"Benchmarking -- Node 9.0.0",permalink:"/reports/2024-07-performance-9.0.0"}},s={authorsImageUrls:[void 0]},p=[{value:"Setup",id:"setup",level:2},{value:"Observations",id:"observations",level:2},{value:"Resource Usage",id:"resource-usage",level:3},{value:"Forging Loop",id:"forging-loop",level:3},{value:"Peer propagation",id:"peer-propagation",level:3},{value:"End-to-end propagation",id:"end-to-end-propagation",level:3},{value:"Conclusion",id:"conclusion",level:3},{value:"Contact",id:"contact",level:2},{value:"Attachments",id:"attachments",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("p",null,"As part of the release benchmarking cycle, we're comparing benchmarking runs for 2 different versions of ",(0,a.kt)("inlineCode",{parentName:"p"},"cardano-node"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"8.9.3")," - baseline from a previous mainnet release"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"8.12.1")," - the current mainnet release")),(0,a.kt)("p",null,"For each version, we're gathering various metrics under 2 different workloads:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("em",{parentName:"li"},"value-only"),": Each transaction consumes 2 inputs and creates 2 outputs, changing the UTxO set. This workload produces full blocks (> 80kB) exclusively."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("em",{parentName:"li"},"Plutus"),": Each transaction contains a Plutus script exhausting the per-tx execution budget. This workload produces small blocks (< 3kB) exclusively.")),(0,a.kt)("p",null,"Benchmarking is performed on a cluster of 52 block producing nodes spread across 3 different AWS regions, interconnected using a static, restricted topology. All runs\nwere performed in the Babbage era."),(0,a.kt)("h2",{id:"observations"},"Observations"),(0,a.kt)("p",null,"These benchmarks are about evaluating specific corner cases in a constrained environment that allows for reliable reproduction of results; they're not trying to directly recreate the operational conditions on Mainnet.  "),(0,a.kt)("h3",{id:"resource-usage"},"Resource Usage"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Under value workload, CPU usage is improved by 2% - 4%, and by 14% for GCs. Under Plutus workload, CPU usage improves only slightly by 1%."),(0,a.kt)("li",{parentName:"ol"},"Allocation Rate and Minor GCs improve by 5% and 6% - under Plutus workload, there's a slight improvement of 1%."),(0,a.kt)("li",{parentName:"ol"},"RAM usage is reduced by 3%; reduction under Plutus workload is even larger - namely 10%.")),(0,a.kt)("p",null,"Caveat: Individual metrics can't be evaluated in isolate; the resource usage profile as a whole provides insight into the system's performance and responsiveness."),(0,a.kt)("h3",{id:"forging-loop"},"Forging Loop"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Mempool snapshotting improves by 5ms or 7% (3ms or 4% under Plutus workload)."),(0,a.kt)("li",{parentName:"ol"},"Adoption time on the block producer improves by 4ms or 6% - under value workload only.")),(0,a.kt)("p",null,"The metric ",(0,a.kt)("em",{parentName:"p"},"'Slot start to announced'")," (see in attachments) is cumulative, and demonstrates how far into a slot the block producing node first announces the new header."),(0,a.kt)("h3",{id:"peer-propagation"},"Peer propagation"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Block Fetch duration increases slightly by 6ms or 2% (2ms under Plutus workload)."),(0,a.kt)("li",{parentName:"ol"},"Adoption times on the peers improve slightly by 2ms or 3% (1ms under Plutus workload)")),(0,a.kt)("h3",{id:"end-to-end-propagation"},"End-to-end propagation"),(0,a.kt)("p",null,"This metric encompasses block diffusion and adoption across specific percentages of the benchmarking cluster, with 0.80 adoption meaning adoption on 80% of all cluster nodes.  "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Under value workload / full blocks there are no significant changes to cluster adoption times."),(0,a.kt)("li",{parentName:"ol"},"Under Plutus workload / small blocks we can observe a (near-jitter) improvement of 0% - 2% in cluster adoption times.")),(0,a.kt)("h3",{id:"conclusion"},"Conclusion"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The performance changes measured between ",(0,a.kt)("inlineCode",{parentName:"li"},"8.12.1")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"8.9.3")," are most distinct in the resource usage footprint - with ",(0,a.kt)("inlineCode",{parentName:"li"},"8.12.1")," improving over ",(0,a.kt)("inlineCode",{parentName:"li"},"8.9.3"),"."),(0,a.kt)("li",{parentName:"ul"},"On Mainnnet, ",(0,a.kt)("inlineCode",{parentName:"li"},"8.12.1")," is expected to deliver equal or slightly better performance than ",(0,a.kt)("inlineCode",{parentName:"li"},"8.9.3")," - as well as lowering the Node's resource usage somewhat in doing so."),(0,a.kt)("li",{parentName:"ul"},"We have not observed any performance regression being introduced in ",(0,a.kt)("inlineCode",{parentName:"li"},"8.12.1"),".")),(0,a.kt)("h2",{id:"contact"},"Contact"),(0,a.kt)("p",null,"As for publishing such benchmarking results, we are aware that more context and detail may be needed with regard to specfic metrics or benchmarking methodology. "),(0,a.kt)("p",null,"We are still looking to gather questions, both general and specific, so that we can provide a suitable FAQ and possibly improve presentation in the future."),(0,a.kt)("h2",{id:"attachments"},"Attachments"),(0,a.kt)("p",null,"Full report for ",(0,a.kt)("em",{parentName:"p"},"value-only workload"),", PDF downloadable ",(0,a.kt)("a",{target:"_blank",href:n(84788).Z},"here"),"."),(0,a.kt)("p",null,"Full report for ",(0,a.kt)("em",{parentName:"p"},"Plutus workload"),", PDF downloadable ",(0,a.kt)("a",{target:"_blank",href:n(89738).Z},"here"),"."),(0,a.kt)("p",null,"NB. The release benchmarks for ",(0,a.kt)("inlineCode",{parentName:"p"},"8.12.1")," were performed on tag ",(0,a.kt)("inlineCode",{parentName:"p"},"8.12.0-pre"),". The patch version bump did not include changes relevant to performance; thus, measurements taken on ",(0,a.kt)("inlineCode",{parentName:"p"},"8.12.0-pre")," remain valid."))}d.isMDXComponent=!0},89738:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/files/release-8.12.1.plutus-bcf8b8e638f9a7d18710f76fc89e33da.pdf"},84788:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/files/release-8.12.1.value-only-d18eaee4dbf2ffb1c471c1b82e7ba499.pdf"}}]);