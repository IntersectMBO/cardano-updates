"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[1578],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),m=i,d=c["".concat(s,".").concat(m)]||c[m]||h[m]||a;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5474:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(87462),i=(r(67294),r(3905));const a={title:"Mithril Team Update",slug:"2024-09-18-mithril",authors:"jpraynaud",tags:["mithril"],hide_table_of_contents:!1},o=void 0,l={permalink:"/2024-09-18-mithril",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2024-09-18-mithril.md",source:"@site/blog/2024-09-18-mithril.md",title:"Mithril Team Update",description:"High level overview",date:"2024-09-18T00:00:00.000Z",formattedDate:"September 18, 2024",tags:[{label:"mithril",permalink:"/tags/mithril"}],readingTime:1,hasTruncateMarker:!1,authors:[{name:"Jean-Philippe Raynaud",title:"Mithril Tech Lead",url:"https://github.com/jpraynaud",imageURL:"https://github.com/jpraynaud.png",key:"jpraynaud"}],frontMatter:{title:"Mithril Team Update",slug:"2024-09-18-mithril",authors:"jpraynaud",tags:["mithril"],hide_table_of_contents:!1},prevItem:{title:"Hydra Team Update",permalink:"/2024-09-18-hydra"},nextItem:{title:"Network Team Update",permalink:"/2024-09-18-network"}},s={authorsImageUrls:[void 0]},p=[{value:"High level overview",id:"high-level-overview",level:2},{value:"Low level overview",id:"low-level-overview",level:2}],u={toc:p},c="wrapper";function h(e){let{components:t,...r}=e;return(0,i.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"high-level-overview"},"High level overview"),(0,i.kt)("p",null,"The Mithril team continued working on decentralizing the signature orchestration of the Mithril network. They kept implementing a buffer store for individual signatures that may arrive before being processed by an aggregator, worked on refactoring the signer state machine, and started developing a mechanism to support specific configurations for signing Cardano transactions. Additionally, they fixed the panics occurring in the signer and aggregator during Cardano chain rollbacks."),(0,i.kt)("p",null,"Finally, the team continued preparing the next distribution and investigated a problem preventing the consistent certification of Cardano transactions in the ",(0,i.kt)("inlineCode",{parentName:"p"},"pre-release-preview")," network."),(0,i.kt)("h2",{id:"low-level-overview"},"Low level overview"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Completed the issue ",(0,i.kt)("strong",{parentName:"li"},"Panic on rollback on slot number not recorded in the Cardano transactions store")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1929"},"#1929")),(0,i.kt)("li",{parentName:"ul"},"Completed the issue ",(0,i.kt)("strong",{parentName:"li"},"Test Cardano transaction chain rollbacks")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1840"},"#1840")),(0,i.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,i.kt)("strong",{parentName:"li"},"Release ",(0,i.kt)("inlineCode",{parentName:"strong"},"2437")," distribution")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1901"},"#1901")),(0,i.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,i.kt)("strong",{parentName:"li"},"Cardano transactions certification stopped in ",(0,i.kt)("inlineCode",{parentName:"strong"},"pre-release-preview"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1938"},"#1938")),(0,i.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,i.kt)("strong",{parentName:"li"},"Aggregator buffers signatures for unknown open message")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1900"},"#1900")),(0,i.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,i.kt)("strong",{parentName:"li"},"Refactor state machine of the signer")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1922"},"#1922")),(0,i.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,i.kt)("strong",{parentName:"li"},"Retrieve custom signing configurations with epoch settings in signer")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1923"},"#1923")),(0,i.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,i.kt)("strong",{parentName:"li"},"Breaking change in ",(0,i.kt)("inlineCode",{parentName:"strong"},"crane")," fails Hydra CI")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1928"},"#1928"))))}h.isMDXComponent=!0}}]);