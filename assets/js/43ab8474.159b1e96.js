"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[5106],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),s=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(r),d=n,m=c["".concat(l,".").concat(d)]||c[d]||h[d]||a;return r?o.createElement(m,p(p({ref:t},u),{},{components:r})):o.createElement(m,p({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,p=new Array(a);p[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:n,p[1]=i;for(var s=2;s<a;s++)p[s]=r[s];return o.createElement.apply(null,p)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},99276:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var o=r(87462),n=(r(67294),r(3905));const a={title:"Network Team Update",slug:"2023-10-15-network",authors:"coot",tags:["network"],hide_table_of_contents:!1},p=void 0,i={permalink:"/2023-10-15-network",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2023-10-15-network.md",source:"@site/blog/2023-10-15-network.md",title:"Network Team Update",description:"High-level overview of sprint 46",date:"2023-10-15T00:00:00.000Z",formattedDate:"October 15, 2023",tags:[{label:"network",permalink:"/tags/network"}],readingTime:.59,hasTruncateMarker:!1,authors:[{name:"Marcin Szamotulski",title:"Network Team Lead",url:"https://github.com/coot",imageURL:"https://github.com/coot.png",key:"coot"}],frontMatter:{title:"Network Team Update",slug:"2023-10-15-network",authors:"coot",tags:["network"],hide_table_of_contents:!1},prevItem:{title:"Mithril Team Update",permalink:"/2023-10-18-mithril"},nextItem:{title:"Goedel Team Update",permalink:"/2023-10-13-goedel"}},l={authorsImageUrls:[void 0]},s=[{value:"High-level overview of sprint 46",id:"high-level-overview-of-sprint-46",level:2},{value:"Bootstrap Peers",id:"bootstrap-peers",level:3},{value:"Towards Typed Protocols 0.2.0.0",id:"towards-typed-protocols-0200",level:3},{value:"Peer Sharing",id:"peer-sharing",level:3},{value:"Tech Debt",id:"tech-debt",level:3}],u={toc:s},c="wrapper";function h(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-level-overview-of-sprint-46"},"High-level overview of ",(0,n.kt)("a",{parentName:"h2",href:"https://github.com/orgs/input-output-hk/projects/19/views/16?filterQuery=sprint%3A%22sprint+46%22"},"sprint 46")),(0,n.kt)("h3",{id:"bootstrap-peers"},"Bootstrap Peers"),(0,n.kt)("p",null,"We continued reviewing of bootstrap peers, see ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4555"},"ouroboros-network#4555"),"."),(0,n.kt)("h3",{id:"towards-typed-protocols-0200"},"Towards Typed Protocols 0.2.0.0"),(0,n.kt)("p",null,"We diagnosed the performance regression of the new design. The work on\n",(0,n.kt)("inlineCode",{parentName:"p"},"typed-protocols")," will be postponed.  For more details see the\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/typed-protocols/pull/3"},"typed-protocols#3"),".  As an outcome of the performance debugging we prepared\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4691"},"PR")," which updates the ",(0,n.kt)("inlineCode",{parentName:"p"},"demo-ping-pong")," and\n",(0,n.kt)("inlineCode",{parentName:"p"},"demo-chain-sync")," applications."),(0,n.kt)("h3",{id:"peer-sharing"},"Peer Sharing"),(0,n.kt)("p",null,"We made progress in review of ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4644"},"ouroboros-network#4644"),", which simplifies the\npeer sharing and fixes the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4642"},"ouroboros-network#4642")," issue."),(0,n.kt)("h3",{id:"tech-debt"},"Tech Debt"),(0,n.kt)("p",null,"We reviewed the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/3836"},"ouroboros-network#3836")," PR which inspects all the uses of\n",(0,n.kt)("inlineCode",{parentName:"p"},"error")," in ",(0,n.kt)("inlineCode",{parentName:"p"},"ouroboros-network"),".  The PR was prepared by Galois."))}h.isMDXComponent=!0}}]);