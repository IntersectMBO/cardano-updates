"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[50065],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(r),c=i,d=m["".concat(p,".").concat(c)]||m[c]||h[c]||a;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},73095:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(87462),i=(r(67294),r(3905));const a={title:"Mithril Team Update",slug:"2025-01-29-mithril",authors:"jpraynaud",tags:["mithril"],hide_table_of_contents:!1},o=void 0,l={permalink:"/2025-01-29-mithril",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2025-01-29-mithril.md",source:"@site/blog/2025-01-29-mithril.md",title:"Mithril Team Update",description:"High level overview",date:"2025-01-29T00:00:00.000Z",formattedDate:"January 29, 2025",tags:[{label:"mithril",permalink:"/tags/mithril"}],readingTime:1.215,hasTruncateMarker:!1,authors:[{name:"Jean-Philippe Raynaud",title:"Mithril Tech Lead",url:"https://github.com/jpraynaud",imageURL:"https://github.com/jpraynaud.png",key:"jpraynaud"}],frontMatter:{title:"Mithril Team Update",slug:"2025-01-29-mithril",authors:"jpraynaud",tags:["mithril"],hide_table_of_contents:!1},prevItem:{title:"Ledger Team Update",permalink:"/2025-01-29-ledger"},nextItem:{title:"Hydra Team Update",permalink:"/2025-01-23-hydra"}},p={authorsImageUrls:[void 0]},s=[{value:"High level overview",id:"high-level-overview",level:2},{value:"Low level overview",id:"low-level-overview",level:2}],u={toc:s},m="wrapper";function h(e){let{components:t,...r}=e;return(0,i.kt)(m,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"high-level-overview"},"High level overview"),(0,i.kt)("p",null,"This week, the Mithril team continued implementing the incremental certification of the Cardano database. They enhanced the implementation of artifact production and upload, worked on the implementations of the client library and the WASM client, and kept adapting the explorer. Additionally, they have been preparing for the upcoming transition to the next 'Pythagoras' Mithril era, which is scheduled to occur in the following weeks."),(0,i.kt)("p",null,"Finally, the team optimized the compilation times of TLS dependencies in the nodes and started to work on updating the CI pipeline runners following their deprecation."),(0,i.kt)("h2",{id:"low-level-overview"},"Low level overview"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Completed the issue ",(0,i.kt)("strong",{parentName:"li"},"Incremental Cardano DB artifacts production enhancements")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/2234"},"#2234")),(0,i.kt)("li",{parentName:"ul"},"Completed the issue ",(0,i.kt)("strong",{parentName:"li"},"Implement Incremental Cardano DB in WASM client")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/2247"},"#2247")),(0,i.kt)("li",{parentName:"ul"},"Completed the issue ",(0,i.kt)("strong",{parentName:"li"},"Implement a retry mechanism for the ",(0,i.kt)("inlineCode",{parentName:"strong"},"FileUploader"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/2213"},"#2213")),(0,i.kt)("li",{parentName:"ul"},"Completed the issue ",(0,i.kt)("strong",{parentName:"li"},"Incremental Cardano DB artifacts production enhancements")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/2234"},"#2234")),(0,i.kt)("li",{parentName:"ul"},"Completed the issue ",(0,i.kt)("strong",{parentName:"li"},"Activate compression of aggregator HTTP responses")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/2225"},"#2225")),(0,i.kt)("li",{parentName:"ul"},"Completed the issue ",(0,i.kt)("strong",{parentName:"li"},"OpenAPI examples check is not working")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/2235"},"#2235")),(0,i.kt)("li",{parentName:"ul"},"Completed the issue ",(0,i.kt)("strong",{parentName:"li"},"Use ",(0,i.kt)("inlineCode",{parentName:"strong"},"native-tls-vendored")," feature of ",(0,i.kt)("inlineCode",{parentName:"strong"},"reqwest")," in crates")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/2252"},"#2252")),(0,i.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,i.kt)("strong",{parentName:"li"},"Implement Incremental Cardano DB in client library")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/2214"},"#2214")),(0,i.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,i.kt)("strong",{parentName:"li"},"Enhance Snapshotter to avoid file deletion on error if already exists")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/2215"},"#2215")),(0,i.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,i.kt)("strong",{parentName:"li"},"Upgrade the deprecated ",(0,i.kt)("inlineCode",{parentName:"strong"},"ubuntu-20")," builders in CI")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/2216"},"#2216")),(0,i.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,i.kt)("strong",{parentName:"li"},"Update explorer for Incremental Cardano DB")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/2212"},"#2212")),(0,i.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,i.kt)("strong",{parentName:"li"},"Activate ",(0,i.kt)("inlineCode",{parentName:"strong"},"Pythagoras")," Mithril era")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/2034"},"#2034"))))}h.isMDXComponent=!0}}]);