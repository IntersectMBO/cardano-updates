"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[40168],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),u=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(r),d=n,k=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return r?o.createElement(k,a(a({ref:t},p),{},{components:r})):o.createElement(k,a({ref:t},p))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,a[1]=l;for(var u=2;u<i;u++)a[u]=r[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5589:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var o=r(87462),n=(r(67294),r(3905));const i={title:"Network Team Update",slug:"2024-10-29-network",authors:"coot",tags:["network"],hide_table_of_contents:!1},a=void 0,l={permalink:"/2024-10-29-network",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2024-10-29-network.md",source:"@site/blog/2024-10-29-network.md",title:"Network Team Update",description:"Overview of sprint 73",date:"2024-10-29T00:00:00.000Z",formattedDate:"October 29, 2024",tags:[{label:"network",permalink:"/tags/network"}],readingTime:.8,hasTruncateMarker:!1,authors:[{name:"Marcin Szamotulski",title:"Network Team Lead",url:"https://github.com/coot",imageURL:"https://github.com/coot.png",key:"coot"}],frontMatter:{title:"Network Team Update",slug:"2024-10-29-network",authors:"coot",tags:["network"],hide_table_of_contents:!1},prevItem:{title:"Mithril Team Update",permalink:"/2024-10-30-mithril"},nextItem:{title:"Ledger Team Update",permalink:"/2024-10-23-ledger"}},s={authorsImageUrls:[void 0]},u=[{value:"Overview of sprint 73",id:"overview-of-sprint-73",level:2},{value:"Ouroboros-Network-0.18 release",id:"ouroboros-network-018-release",level:3},{value:"Tx-Submission",id:"tx-submission",level:3},{value:"Ouroboros-Network - Mithril Design",id:"ouroboros-network---mithril-design",level:3},{value:"Code Refactoring",id:"code-refactoring",level:3}],p={toc:u},c="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"overview-of-sprint-73"},"Overview of ",(0,n.kt)("a",{parentName:"h2",href:"https://github.com/orgs/IntersectMBO/projects/5/views/1?filterQuery=sprint%3A+%22Sprint+73%22"},"sprint 73")),(0,n.kt)("h3",{id:"ouroboros-network-018-release"},"Ouroboros-Network-0.18 release"),(0,n.kt)("p",null,"We released ",(0,n.kt)("inlineCode",{parentName:"p"},"ouroboros-network-0.18"),".  The main features are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"integration with ",(0,n.kt)("inlineCode",{parentName:"li"},"typed-protocols-0.3")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"cardano-client")," library doesn't depend on the non-p2p stack"),(0,n.kt)("li",{parentName:"ul"},"We expose ",(0,n.kt)("inlineCode",{parentName:"li"},"connectToWithMux")," family of function in ",(0,n.kt)("inlineCode",{parentName:"li"},"ouroboros-network")," which\ngive access to the underlying ",(0,n.kt)("a",{parentName:"li",href:"https://ouroboros-network.cardano.intersectmbo.org/network-mux/Network-Mux.html#t:Mux"},(0,n.kt)("inlineCode",{parentName:"a"},"Mux")," handle"),"."),(0,n.kt)("li",{parentName:"ul"},"Added ",(0,n.kt)("inlineCode",{parentName:"li"},"NodeToClientV_19"),": to support new ",(0,n.kt)("inlineCode",{parentName:"li"},"GetLedgerPeerSnapshot")," query in\n",(0,n.kt)("inlineCode",{parentName:"li"},"local-state-query")," mini-protocol ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/ouroboros-consensus/pull/1067"},"ouroboros-consensus#1067"),".")),(0,n.kt)("p",null,"See full ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/orgs/IntersectMBO/projects/5/views/18"},"the list of PRs")," included in this release.\n",(0,n.kt)("inlineCode",{parentName:"p"},"ouroboros-network-0.18")," was integrated with ",(0,n.kt)("inlineCode",{parentName:"p"},"ouroboros-consensus")," (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/IntersectMBO/ouroboros-consensus/pull/1223"},"ouroboros-consensus#1223"),")"),(0,n.kt)("h3",{id:"tx-submission"},"Tx-Submission"),(0,n.kt)("p",null,"We continued working on ",(0,n.kt)("inlineCode",{parentName:"p"},"tx-submission")," monitoring its performance."),(0,n.kt)("h3",{id:"ouroboros-network---mithril-design"},"Ouroboros-Network - Mithril Design"),(0,n.kt)("p",null,"We had an internal discussion how to support the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/cardano-foundation/CIPs/pulls?q=is%3Apr+is%3Aopen+queue"},"Mithril design"),".  In\nnear future we will be able to socialise the report we've been working on."),(0,n.kt)("h3",{id:"code-refactoring"},"Code Refactoring"),(0,n.kt)("p",null,"We reorganised some of our substysems to use qualified imports with simplified names:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/ouroboros-network/pull/4990"},"ouroboros-network#4990")," (",(0,n.kt)("inlineCode",{parentName:"li"},"connection-manager"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"inbound-governor"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/ouroboros-network/pull/4997"},"ouroboros-network#4997")," (",(0,n.kt)("inlineCode",{parentName:"li"},"network-mux"),")")),(0,n.kt)("p",null,"We also removed deprecated APIs in ","[ouroboros-network#4998]"))}m.isMDXComponent=!0}}]);