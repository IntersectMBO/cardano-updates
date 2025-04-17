"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[93502],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),h=n,d=u["".concat(s,".").concat(h)]||u[h]||m[h]||i;return a?r.createElement(d,o(o({ref:t},p),{},{components:a})):r.createElement(d,o({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},75950:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const i={title:"Hydra Team Update",slug:"2025-01-23-hydra",authors:["noonio"],tags:["hydra"],hide_table_of_contents:!1},o=void 0,l={permalink:"/2025-01-23-hydra",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2025-01-23-hydra.md",source:"@site/blog/2025-01-23-hydra.md",title:"Hydra Team Update",description:"High-level summary",date:"2025-01-23T00:00:00.000Z",formattedDate:"January 23, 2025",tags:[{label:"hydra",permalink:"/tags/hydra"}],readingTime:.87,hasTruncateMarker:!1,authors:[{name:"Noon van der Silk",title:"Software Engineering Lead",url:"https://github.com/noonio",imageURL:"https://github.com/noonio.png",key:"noonio"}],frontMatter:{title:"Hydra Team Update",slug:"2025-01-23-hydra",authors:["noonio"],tags:["hydra"],hide_table_of_contents:!1},prevItem:{title:"Mithril Team Update",permalink:"/2025-01-29-mithril"},nextItem:{title:"Consensus Team Update",permalink:"/2025-01-22-consensus"}},s={authorsImageUrls:[void 0]},c=[{value:"High-level summary",id:"high-level-summary",level:3},{value:"What did the team achieve?",id:"what-did-the-team-achieve",level:3},{value:"What&#39;s next?",id:"whats-next",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"high-level-summary"},"High-level summary"),(0,n.kt)("p",null,"The last few weeks have seen us finialising a copule of things; notably our\nexperiments into running Hydra with a custom ledger (to support, for example,\na custom plutus script operation you may be interested in). We have almost\nwrapped up incremental commits; just finishing the spec changes. We will then\nfocus on a release, and some features that users have been wanting for a while\naround memory usage and resilience."),(0,n.kt)("h3",{id:"what-did-the-team-achieve"},"What did the team achieve?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Completed custom ledger experiment ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/cardano-scaling/hydra/issues/1727"},"#1727"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/cardano-scaling/hydra/pull/1742#issuecomment-2605023483"},"#1742"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/cardano-scaling/hydra/pull/1796"},"#1796")),(0,n.kt)("li",{parentName:"ul"},"Restored hydra-explorer for 0.19 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/cardano-scaling/hydra-explorer/pull/12"},"#12")),(0,n.kt)("li",{parentName:"ul"},"Add deposit deadline command-line option ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/cardano-scaling/hydra/pull/1798"},"#1798")),(0,n.kt)("li",{parentName:"ul"},"Researched options for less-than-totaly consensus in a Hydra Head"),(0,n.kt)("li",{parentName:"ul"},"Investigated resiliance to nodes offline ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/cardano-scaling/hydra/pull/1780"},"#1780")," and investigated solution ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/cardano-scaling/hydra/pull/1786"},"#1786"))),(0,n.kt)("h3",{id:"whats-next"},"What's next?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Start to investigate memory usage enhancements ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/cardano-scaling/hydra/issues/1618"},"#1618")),(0,n.kt)("li",{parentName:"ul"},"Final work on incremental commits ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/cardano-scaling/hydra/issues/199"},"#199"),"; namely the spec changes ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/cardano-scaling/hydra-formal-specification/pull/12"},"#12")),(0,n.kt)("li",{parentName:"ul"},"Finish Hydra explorer supporting multiple versions ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/cardano-scaling/hydra/issues/1282"},"#1282")),(0,n.kt)("li",{parentName:"ul"},"Plan the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/cardano-scaling/hydra/issues?q=is%3Aopen+is%3Aissue+milestone%3A0.20.0"},"0.20.0 release")),(0,n.kt)("li",{parentName:"ul"},"Continue support Hydra Doom"),(0,n.kt)("li",{parentName:"ul"},"Start work on API command to clear pending transactions ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/cardano-scaling/hydra/issues/1284"},"#1284"))))}m.isMDXComponent=!0}}]);