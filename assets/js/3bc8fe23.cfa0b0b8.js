"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[12029],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),p=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(r),h=n,d=m["".concat(s,".").concat(h)]||m[h]||c[h]||a;return r?i.createElement(d,o(o({ref:t},u),{},{components:r})):i.createElement(d,o({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<a;p++)o[p]=r[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}h.displayName="MDXCreateElement"},3902:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=r(87462),n=(r(67294),r(3905));const a={title:"Mithril Team Update",slug:"2023-10-11-mithril",authors:"jpraynaud",tags:["mithril"],hide_table_of_contents:!1},o=void 0,l={permalink:"/2023-10-11-mithril",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2023-10-11-mithril.md",source:"@site/blog/2023-10-11-mithril.md",title:"Mithril Team Update",description:"High level overview",date:"2023-10-11T00:00:00.000Z",formattedDate:"October 11, 2023",tags:[{label:"mithril",permalink:"/tags/mithril"}],readingTime:.77,hasTruncateMarker:!1,authors:[{name:"Jean-Philippe Raynaud",title:"Mithril Tech Lead",url:"https://github.com/jpraynaud",imageURL:"https://github.com/jpraynaud.png",key:"jpraynaud"}],frontMatter:{title:"Mithril Team Update",slug:"2023-10-11-mithril",authors:"jpraynaud",tags:["mithril"],hide_table_of_contents:!1},prevItem:{title:"SRE Team Update",permalink:"/2023-10-13-sre"},nextItem:{title:"Node API & CLI Team Update",permalink:"/2023-10-10-node-cli-api"}},s={authorsImageUrls:[void 0]},p=[{value:"High level overview",id:"high-level-overview",level:2},{value:"Low level overview",id:"low-level-overview",level:2}],u={toc:p},m="wrapper";function c(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-level-overview"},"High level overview"),(0,n.kt)("p",null,"This week, the Mithril team worked on the distribution of the Mithril client as a library that will be distributed on ",(0,n.kt)("a",{parentName:"p",href:"https://crates.io/"},"crates.io"),", the Rust dependencies repository. The team also worked on the deterministic computation of the transaction history of an address from the immutable files and started fixing a bottleneck in the aggregator that limits the ingestion of signatures."),(0,n.kt)("p",null,"Finally, they kept working on the activation of Cloudflare on the infrastructure and fixed some bugs in the Nix CI."),(0,n.kt)("h2",{id:"low-level-overview"},"Low level overview"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,n.kt)("strong",{parentName:"li"},"Make ",(0,n.kt)("inlineCode",{parentName:"strong"},"mithril-client")," crate a library")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1141"},"#1141")),(0,n.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,n.kt)("strong",{parentName:"li"},"Compute deterministic Cardano transactions history PoC")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1283"},"#1283")),(0,n.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"ProtocolKeyRegistration")," creates performance bottleneck in aggregator")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1187"},"#1187")),(0,n.kt)("li",{parentName:"ul"},"Completed the issue ",(0,n.kt)("strong",{parentName:"li"},"Update ",(0,n.kt)("inlineCode",{parentName:"strong"},"Rust")," compiler in ",(0,n.kt)("inlineCode",{parentName:"strong"},"nix")," CI")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1282"},"#1282")),(0,n.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,n.kt)("strong",{parentName:"li"},"Mithril networks infrastructure maintenance")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1218"},"#1218")),(0,n.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,n.kt)("strong",{parentName:"li"},"Activate Cloudflare protection of infrastructure")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1230"},"#1230"))))}c.isMDXComponent=!0}}]);