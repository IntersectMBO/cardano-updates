"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[23753],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),p=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(r),c=n,d=m["".concat(s,".").concat(c)]||m[c]||h[c]||a;return r?i.createElement(d,o(o({ref:t},u),{},{components:r})):i.createElement(d,o({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<a;p++)o[p]=r[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}c.displayName="MDXCreateElement"},9622:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=r(87462),n=(r(67294),r(3905));const a={title:"Mithril Team Update",slug:"2025-03-12-mithril",authors:"jpraynaud",tags:["mithril"],hide_table_of_contents:!1},o=void 0,l={permalink:"/2025-03-12-mithril",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2025-03-12-mithril.md",source:"@site/blog/2025-03-12-mithril.md",title:"Mithril Team Update",description:"High level overview",date:"2025-03-12T00:00:00.000Z",formattedDate:"March 12, 2025",tags:[{label:"mithril",permalink:"/tags/mithril"}],readingTime:1.275,hasTruncateMarker:!1,authors:[{name:"Jean-Philippe Raynaud",title:"Mithril Tech Lead",url:"https://github.com/jpraynaud",imageURL:"https://github.com/jpraynaud.png",key:"jpraynaud"}],frontMatter:{title:"Mithril Team Update",slug:"2025-03-12-mithril",authors:"jpraynaud",tags:["mithril"],hide_table_of_contents:!1},prevItem:{title:"Ledger Team Update",permalink:"/2025-03-12-ledger"},nextItem:{title:"Performance & Tracing Update",permalink:"/2025-03-11-performance-and-tracing"}},s={authorsImageUrls:[void 0]},p=[{value:"High level overview",id:"high-level-overview",level:2},{value:"Low level overview",id:"low-level-overview",level:2}],u={toc:p},m="wrapper";function h(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-level-overview"},"High level overview"),(0,n.kt)("p",null,"This week, the Mithril team continued working on a prototype 'slave' mode of the aggregator to support signer registration across multiple aggregators. They also focused on implementing incremental certification of the Cardano database, emphasizing feature stabilization, production readiness, testing, and optimization. Additionally, they worked on signing ancillary files in the Cardano database snapshots with an IOG key."),(0,n.kt)("p",null,"Finally, the team fixed failing builds in the Hydra CI and kept working on supporting the upcoming Cardano node v.10.2."),(0,n.kt)("h2",{id:"low-level-overview"},"Low level overview"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Completed the issue ",(0,n.kt)("strong",{parentName:"li"},"Implement a ",(0,n.kt)("inlineCode",{parentName:"strong"},"slave")," mode for the signer registration in the aggregator")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/2334"},"#2334")),(0,n.kt)("li",{parentName:"ul"},"Completed the issue ",(0,n.kt)("strong",{parentName:"li"},"Add integration test for mode for the signer registration in the aggregator")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/2335"},"#2335")),(0,n.kt)("li",{parentName:"ul"},"Completed the issue ",(0,n.kt)("strong",{parentName:"li"},"Optimize artifact downloads when restoring an Incremental Cardano DB")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/2327"},"#2327")),(0,n.kt)("li",{parentName:"ul"},"Completed the issue ",(0,n.kt)("strong",{parentName:"li"},"Document Incremental Cardano DB usage in the clients")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/2329"},"#2329")),(0,n.kt)("li",{parentName:"ul"},"Completed the issue ",(0,n.kt)("strong",{parentName:"li"},"Use consistent naming in the client Cardano database APIs")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/2248"},"#2248")),(0,n.kt)("li",{parentName:"ul"},"Completed the issue ",(0,n.kt)("strong",{parentName:"li"},"Create a ",(0,n.kt)("inlineCode",{parentName:"strong"},"Code ADR")," record in the repository")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/2342"},"#2342")),(0,n.kt)("li",{parentName:"ul"},"Completed the issue ",(0,n.kt)("strong",{parentName:"li"},"Hydra CI fails with ",(0,n.kt)("inlineCode",{parentName:"strong"},"OpenSSL")," error on Linux x86_64 runners")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/2295"},"#2295")),(0,n.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,n.kt)("strong",{parentName:"li"},"Sign ancillary files with IOG key")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/2362"},"#2362")),(0,n.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,n.kt)("strong",{parentName:"li"},"Compress the digests file uploaded on GCP for Incremental Cardano DB")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/2356"},"#2356")),(0,n.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,n.kt)("strong",{parentName:"li"},"Database migration checks minimum node version if next migration is squashed")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/2357"},"#2357")),(0,n.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,n.kt)("strong",{parentName:"li"},"E2e tests adaptation for multiple aggregators")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/2361"},"#2361")),(0,n.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,n.kt)("strong",{parentName:"li"},"Upgrade to Cardano ",(0,n.kt)("inlineCode",{parentName:"strong"},"10.2"))," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/2333"},"#2333"))))}h.isMDXComponent=!0}}]);