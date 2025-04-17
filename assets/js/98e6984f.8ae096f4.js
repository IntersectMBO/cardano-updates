"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[19861],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),p=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=p(r),c=n,d=h["".concat(s,".").concat(c)]||h[c]||m[c]||a;return r?i.createElement(d,o(o({ref:t},u),{},{components:r})):i.createElement(d,o({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<a;p++)o[p]=r[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}c.displayName="MDXCreateElement"},80648:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=r(87462),n=(r(67294),r(3905));const a={title:"Mithril Team Update",slug:"2022-12-15-mithril",authors:"jpraynaud",tags:["mithril"],hide_table_of_contents:!1},o=void 0,l={permalink:"/2022-12-15-mithril",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2022-12-15-mithril.md",source:"@site/blog/2022-12-15-mithril.md",title:"Mithril Team Update",description:"High level overview",date:"2022-12-15T00:00:00.000Z",formattedDate:"December 15, 2022",tags:[{label:"mithril",permalink:"/tags/mithril"}],readingTime:1.11,hasTruncateMarker:!1,authors:[{name:"Jean-Philippe Raynaud",title:"Mithril Tech Lead",url:"https://github.com/jpraynaud",imageURL:"https://github.com/jpraynaud.png",key:"jpraynaud"}],frontMatter:{title:"Mithril Team Update",slug:"2022-12-15-mithril",authors:"jpraynaud",tags:["mithril"],hide_table_of_contents:!1},prevItem:{title:"Hydra Team Update",permalink:"/2022-12-16-hydra"},nextItem:{title:"Consensus Team Update",permalink:"/2022-12-14-consensus"}},s={authorsImageUrls:[void 0]},p=[{value:"High level overview",id:"high-level-overview",level:2},{value:"Low level overview",id:"low-level-overview",level:2}],u={toc:p},h="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(h,(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-level-overview"},"High level overview"),(0,n.kt)("p",null,"The Mithril team has released the new distribution ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/mithril/releases/tag/2248.1"},(0,n.kt)("inlineCode",{parentName:"a"},"2248.1"))," of their nodes. They have published the first version of the Mithril cryptographic library on ",(0,n.kt)("a",{parentName:"p",href:"https://crates.io/crates/mithril-stm"},(0,n.kt)("inlineCode",{parentName:"a"},"crates.io")),", the Rust community\u2019s crate registry. They have implemented an optimization on the individual signatures that no longer embed the verification key and stake. They have also enhanced their testing strategy by implementing a workflow that tests that the client binaries produced for multiple platforms (Linux, MacOS and Windows) are able to verify and restore snapshots."),(0,n.kt)("p",null,"Finally, they have kept on simplifying the aggregator node's multi-signer by removing the signer registration and the certificate creation from its responsibilities."),(0,n.kt)("h2",{id:"low-level-overview"},"Low level overview"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Implemented removing verification key and stake from single signatures ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/619"},"#619")),(0,n.kt)("li",{parentName:"ul"},"Completed the extraction of the signer registration from the multi-signer ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/642"},"#642")),(0,n.kt)("li",{parentName:"ul"},"Completed the extraction of the certificate creation from the multi-signer ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/638"},"#638")),(0,n.kt)("li",{parentName:"ul"},"Implemented a workflow to test client binaries (Linux / MacOS / Windows) ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/601"},"#601")),(0,n.kt)("li",{parentName:"ul"},"Completed the signature of the artifacts produced by the CI ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/587"},"#587")),(0,n.kt)("li",{parentName:"ul"},"Fixed the protocol parameters transition ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/627"},"#627")),(0,n.kt)("li",{parentName:"ul"},"Worked on optimizing the snapshot digest computation ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/510"},"#510")),(0,n.kt)("li",{parentName:"ul"},"Worked on enforcing the API protocol versions in the client and signer ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/633"},"#633")),(0,n.kt)("li",{parentName:"ul"},"Worked on deactivating the non certified signer registration mode ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/621"},"#621")),(0,n.kt)("li",{parentName:"ul"},"Worked on the re-genesis of the test networks ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/651"},"#651"))))}m.isMDXComponent=!0}}]);