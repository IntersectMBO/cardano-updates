"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[71370],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var i=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=p(r),c=a,d=h["".concat(s,".").concat(c)]||h[c]||m[c]||n;return r?i.createElement(d,o(o({ref:t},u),{},{components:r})):i.createElement(d,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,o=new Array(n);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<n;p++)o[p]=r[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}c.displayName="MDXCreateElement"},9309:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var i=r(87462),a=(r(67294),r(3905));const n={title:"Mithril Team Update",slug:"2024-11-27-mithril",authors:"jpraynaud",tags:["mithril"],hide_table_of_contents:!1},o=void 0,l={permalink:"/2024-11-27-mithril",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2024-11-27-mithril.md",source:"@site/blog/2024-11-27-mithril.md",title:"Mithril Team Update",description:"High level overview",date:"2024-11-27T00:00:00.000Z",formattedDate:"November 27, 2024",tags:[{label:"mithril",permalink:"/tags/mithril"}],readingTime:1.42,hasTruncateMarker:!1,authors:[{name:"Jean-Philippe Raynaud",title:"Mithril Tech Lead",url:"https://github.com/jpraynaud",imageURL:"https://github.com/jpraynaud.png",key:"jpraynaud"}],frontMatter:{title:"Mithril Team Update",slug:"2024-11-27-mithril",authors:"jpraynaud",tags:["mithril"],hide_table_of_contents:!1},prevItem:{title:"Consensus Team Update",permalink:"/2024-11-27-consensus"},nextItem:{title:"Ledger Team Update",permalink:"/2024-11-20-ledger"}},s={authorsImageUrls:[void 0]},p=[{value:"High level overview",id:"high-level-overview",level:2},{value:"Low level overview",id:"low-level-overview",level:2}],u={toc:p},h="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(h,(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"high-level-overview"},"High level overview"),(0,a.kt)("p",null,"This week, the Mithril team released a new one-line installer for the pre-built Mithril binaries, simplifying the update process for SPO signers. They also published an overview of the protocol ",(0,a.kt)("a",{parentName:"p",href:"https://mithril.network/doc/mithril/mithril-protocol/security"},"security")," on the documentation website. The team began implementing a new type of certification for the Cardano database to enable differential updates, scaffolding a new signed entity type, and progressing on the computation of the message to sign.  Additionally, they adapted the WASM client npm package to support NodeJS and started working on a cache for certificate verification in the WASM client. "),(0,a.kt)("p",null,"Finally, the team completed the removal of legacy store adapters from the codebase and explored solutions for signer registration in networks with multiple aggregators."),(0,a.kt)("h2",{id:"low-level-overview"},"Low level overview"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Published a ",(0,a.kt)("a",{parentName:"li",href:"https://mithril.network/doc/dev-blog/2024/11/25/one-line-binaries-installer"},"dev blog post")," about the new ",(0,a.kt)("strong",{parentName:"li"},"One line installer for Mithril binaries")),(0,a.kt)("li",{parentName:"ul"},"Released a new protocol ",(0,a.kt)("a",{parentName:"li",href:"https://mithril.network/doc/mithril/mithril-protocol/security"},"Security")," page on the documentation website"),(0,a.kt)("li",{parentName:"ul"},"Completed the issue ",(0,a.kt)("strong",{parentName:"li"},"Make client WASM ",(0,a.kt)("inlineCode",{parentName:"strong"},"npm")," package compatible with ",(0,a.kt)("inlineCode",{parentName:"strong"},"NodeJS"))," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/2091"},"#2091")),(0,a.kt)("li",{parentName:"ul"},"Completed the issue ",(0,a.kt)("strong",{parentName:"li"},"Schedule nightly builds with a workflow dispatcher")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/2092"},"#2092")),(0,a.kt)("li",{parentName:"ul"},"Completed the issue ",(0,a.kt)("strong",{parentName:"li"},"Create new signed entity type for Incremental Cardano DB")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/2121"},"#2121")),(0,a.kt)("li",{parentName:"ul"},"Completed the issue ",(0,a.kt)("strong",{parentName:"li"},"Get rid of store adapters in signer and aggregator")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/2118"},"#2118")),(0,a.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,a.kt)("strong",{parentName:"li"},"Handle cache for certificate verification in WASM client")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1484"},"#1484")),(0,a.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,a.kt)("strong",{parentName:"li"},"Implement signable builder for Incremental Cardano DB")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/2122"},"#2122")),(0,a.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,a.kt)("strong",{parentName:"li"},"Activate ",(0,a.kt)("inlineCode",{parentName:"strong"},"Pythagoras")," Mithril era")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/2034"},"#2034")),(0,a.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,a.kt)("strong",{parentName:"li"},"Explore Signer Registration Solutions")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/2029"},"#2029")),(0,a.kt)("li",{parentName:"ul"},"Completed the issue ",(0,a.kt)("strong",{parentName:"li"},"Next protocol parameters in status page are invalid")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/2134"},"#2134")),(0,a.kt)("li",{parentName:"ul"},"Completed the issue ",(0,a.kt)("strong",{parentName:"li"},"Snapshot Client can not deserialize artifact list")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/2140"},"#2140")),(0,a.kt)("li",{parentName:"ul"},"Completed the issue ",(0,a.kt)("strong",{parentName:"li"},"Preprod Mithril snapshot error")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/2129"},"#2129"))))}m.isMDXComponent=!0}}]);