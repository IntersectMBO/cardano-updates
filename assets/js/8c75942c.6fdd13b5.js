"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[3530],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>c});var a=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=a.createContext({}),h=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=h(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=h(r),d=i,c=s["".concat(p,".").concat(d)]||s[d]||m[d]||n;return r?a.createElement(c,o(o({ref:t},u),{},{components:r})):a.createElement(c,o({ref:t},u))}));function c(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:i,o[1]=l;for(var h=2;h<n;h++)o[h]=r[h];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6905:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>n,metadata:()=>l,toc:()=>h});var a=r(87462),i=(r(67294),r(3905));const n={title:"Mithril Team Update",slug:"2023-02-09-mithril",authors:"jpraynaud",tags:["mithril"],hide_table_of_contents:!1},o=void 0,l={permalink:"/2023-02-09-mithril",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2023-02-09-mithril.md",source:"@site/blog/2023-02-09-mithril.md",title:"Mithril Team Update",description:"High level overview",date:"2023-02-09T00:00:00.000Z",formattedDate:"February 9, 2023",tags:[{label:"mithril",permalink:"/tags/mithril"}],readingTime:1.01,hasTruncateMarker:!1,authors:[{name:"Jean-Philippe Raynaud",title:"Mithril Tech Lead",url:"https://github.com/jpraynaud",imageURL:"https://github.com/jpraynaud.png",key:"jpraynaud"}],frontMatter:{title:"Mithril Team Update",slug:"2023-02-09-mithril",authors:"jpraynaud",tags:["mithril"],hide_table_of_contents:!1},prevItem:{title:"Hydra Team Update",permalink:"/2023-02-10-hydra"},nextItem:{title:"Consensus Team Update",permalink:"/2023-02-08-consensus"}},p={authorsImageUrls:[void 0]},h=[{value:"High level overview",id:"high-level-overview",level:2},{value:"Low level overview",id:"low-level-overview",level:2}],u={toc:h},s="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(s,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"high-level-overview"},"High level overview"),(0,i.kt)("p",null,"The Mithril team released a new ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/mithril/releases/tag/2304.1"},(0,i.kt)("inlineCode",{parentName:"a"},"2304.1"))," distribution that enables the backward/forward compatibility mechanism implemented for seamlessly rolling out soft updates to  Mithril networks. They completed the implementation of the era reader trait that powers the era switch behavior. The team finalized the development of the era reader adapter that retrieves era activation markers from transactions on the Cardano chain. They also completed the relational design of the aggregator store."),(0,i.kt)("p",null,"Finally, they created new SPO nodes on the Mithril networks and upgraded the Cardano node to version ",(0,i.kt)("inlineCode",{parentName:"p"},"1.35.5")," on their ",(0,i.kt)("inlineCode",{parentName:"p"},"devnet")," and infrastructure."),(0,i.kt)("h2",{id:"low-level-overview"},"Low level overview"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Released the new distribution ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/releases/tag/2304.1"},(0,i.kt)("inlineCode",{parentName:"a"},"2304.1"))),(0,i.kt)("li",{parentName:"ul"},"Fixed a bug that prevented some signers to sign with ",(0,i.kt)("inlineCode",{parentName:"li"},"2304.0-prerelease")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/716"},"#716")),(0,i.kt)("li",{parentName:"ul"},"Completed the implementation of an ",(0,i.kt)("inlineCode",{parentName:"li"},"EraChecker")," that checks if an era is active ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/708"},"#708")),(0,i.kt)("li",{parentName:"ul"},"Completed the implementation of an ",(0,i.kt)("inlineCode",{parentName:"li"},"EraReader")," that gathers era activation data ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/709"},"#709")),(0,i.kt)("li",{parentName:"ul"},"Completed the implementation of an ",(0,i.kt)("inlineCode",{parentName:"li"},"EraReader")," adapter with on chain transaction as source ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/710"},"#710")),(0,i.kt)("li",{parentName:"ul"},"Completed the relational design of the aggregator store ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/476"},"#476")),(0,i.kt)("li",{parentName:"ul"},"Completed adding a new SPO on the ",(0,i.kt)("inlineCode",{parentName:"li"},"testing-preview")," network ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/729"},"#729")),(0,i.kt)("li",{parentName:"ul"},"Completed the upgrade of the Cardano node to ",(0,i.kt)("inlineCode",{parentName:"li"},"1.35.5")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/725"},"#725")),(0,i.kt)("li",{parentName:"ul"},"Fixed flakiness in the CI ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/734"},"#734"))))}m.isMDXComponent=!0}}]);