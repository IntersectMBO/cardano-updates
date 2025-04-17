"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[83058],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=i.createContext({}),s=function(e){var t=i.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(r),c=n,d=m["".concat(p,".").concat(c)]||m[c]||h[c]||a;return r?i.createElement(d,o(o({ref:t},u),{},{components:r})):i.createElement(d,o({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}c.displayName="MDXCreateElement"},31666:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var i=r(87462),n=(r(67294),r(3905));const a={title:"Mithril Team Update",slug:"2025-02-05-mithril",authors:"jpraynaud",tags:["mithril"],hide_table_of_contents:!1},o=void 0,l={permalink:"/2025-02-05-mithril",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2025-02-05-mithril.md",source:"@site/blog/2025-02-05-mithril.md",title:"Mithril Team Update",description:"High level overview",date:"2025-02-05T00:00:00.000Z",formattedDate:"February 5, 2025",tags:[{label:"mithril",permalink:"/tags/mithril"}],readingTime:1.565,hasTruncateMarker:!1,authors:[{name:"Jean-Philippe Raynaud",title:"Mithril Tech Lead",url:"https://github.com/jpraynaud",imageURL:"https://github.com/jpraynaud.png",key:"jpraynaud"}],frontMatter:{title:"Mithril Team Update",slug:"2025-02-05-mithril",authors:"jpraynaud",tags:["mithril"],hide_table_of_contents:!1},prevItem:{title:"Consensus Team Update",permalink:"/2025-02-05-consensus"},nextItem:{title:"Hydra Team Update",permalink:"/2025-02-04-hydra"}},p={authorsImageUrls:[void 0]},s=[{value:"High level overview",id:"high-level-overview",level:2},{value:"Low level overview",id:"low-level-overview",level:2}],u={toc:s},m="wrapper";function h(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-level-overview"},"High level overview"),(0,n.kt)("p",null,"This week, the Mithril team created the transaction to activate the switch to the next \u2018Pythagoras\u2019 Mithril era, which will occur at the transition to Cardano epoch 539. They also started communicating the upcoming bump in the minimum version of ",(0,n.kt)("inlineCode",{parentName:"p"},"glibc")," required to run Mithril pre-built binaries on Linux."),(0,n.kt)("p",null,"The team continued implementing incremental certification of the Cardano database, working on the client library, client CLI, and WASM client. They also began implementing monitoring and dashboarding. Additionally, they started refactoring the \u2018mithril-common\u2019 library and simplifying the dependency builder in the aggregator."),(0,n.kt)("p",null,"Finally, the team worked on dropping support for pre-built binaries for macOS x64 architecture and attempted to fix some flakiness in end-to-end tests in the CI."),(0,n.kt)("h2",{id:"low-level-overview"},"Low level overview"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Published a ",(0,n.kt)("a",{parentName:"li",href:"https://mithril.network/doc/dev-blog/2025/02/04/glibc-minimum-requirement-change"},"dev blog post")," about the ",(0,n.kt)("strong",{parentName:"li"},"Minimum required glibc version bump")),(0,n.kt)("li",{parentName:"ul"},"Completed the issue ",(0,n.kt)("strong",{parentName:"li"},"Update explorer for Incremental Cardano DB")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/2212"},"#2212")),(0,n.kt)("li",{parentName:"ul"},"Completed the issue ",(0,n.kt)("strong",{parentName:"li"},"Enhance Snapshotter to avoid file deletion on error if already exists")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/2215"},"#2215")),(0,n.kt)("li",{parentName:"ul"},"Completed the issue ",(0,n.kt)("strong",{parentName:"li"},"Split ",(0,n.kt)("inlineCode",{parentName:"strong"},"mithril-common")," crate - Preliminary work")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/2253"},"#2253")),(0,n.kt)("li",{parentName:"ul"},"Completed the issue ",(0,n.kt)("strong",{parentName:"li"},"Add command to create Era keypair in aggregator")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/2271"},"#2271")),(0,n.kt)("li",{parentName:"ul"},"Completed the issue ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"release-mainnet")," was unavailable")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/2264"},"#2264")),(0,n.kt)("li",{parentName:"ul"},"Completed the issue ",(0,n.kt)("strong",{parentName:"li"},"Create a manual workflow to test emails alert delivery")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/2251"},"#2251")),(0,n.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,n.kt)("strong",{parentName:"li"},"Implement Incremental Cardano DB in client library")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/2214"},"#2214")),(0,n.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,n.kt)("strong",{parentName:"li"},"Implement Incremental Cardano DB in client CLI")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/2246"},"#2246")),(0,n.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,n.kt)("strong",{parentName:"li"},"Implement monitoring and dashboarding for Incremental Cardano DB")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/2249"},"#2249")),(0,n.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,n.kt)("strong",{parentName:"li"},"Simplify dependency builder in aggregator")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/2254"},"#2254")),(0,n.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,n.kt)("strong",{parentName:"li"},"Flakiness in e2e tests in CI")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/2222"},"#2222")),(0,n.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,n.kt)("strong",{parentName:"li"},"Upgrade the deprecated ",(0,n.kt)("inlineCode",{parentName:"strong"},"ubuntu-20")," builders in CI")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/2216"},"#2216")),(0,n.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,n.kt)("strong",{parentName:"li"},"End of support for MacOS ",(0,n.kt)("inlineCode",{parentName:"strong"},"x64")," builds in the CI")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/2250"},"#2250")),(0,n.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,n.kt)("strong",{parentName:"li"},"Activate ",(0,n.kt)("inlineCode",{parentName:"strong"},"Pythagoras")," Mithril era")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/2034"},"#2034"))))}h.isMDXComponent=!0}}]);