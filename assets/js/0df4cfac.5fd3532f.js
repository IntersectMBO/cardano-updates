"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[95165],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(a),d=r,h=p["".concat(s,".").concat(d)]||p[d]||u[d]||o;return a?n.createElement(h,i(i({ref:t},m),{},{components:a})):n.createElement(h,i({ref:t},m))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},99084:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={title:"Hydra Team Update",slug:"2024-10-17-hydra",authors:["noonio"],tags:["hydra"],hide_table_of_contents:!1},i=void 0,l={permalink:"/2024-10-17-hydra",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2024-10-17-hydra.md",source:"@site/blog/2024-10-17-hydra.md",title:"Hydra Team Update",description:"High-level summary",date:"2024-10-17T00:00:00.000Z",formattedDate:"October 17, 2024",tags:[{label:"hydra",permalink:"/tags/hydra"}],readingTime:1.11,hasTruncateMarker:!1,authors:[{name:"Noon van der Silk",title:"Software Engineering Lead",url:"https://github.com/noonio",imageURL:"https://github.com/noonio.png",key:"noonio"}],frontMatter:{title:"Hydra Team Update",slug:"2024-10-17-hydra",authors:["noonio"],tags:["hydra"],hide_table_of_contents:!1},prevItem:{title:"SRE Team Update",permalink:"/2024-10-04-sre"},nextItem:{title:"Consensus Team Update",permalink:"/2024-10-16-consensus"}},s={authorsImageUrls:[void 0]},c=[{value:"High-level summary",id:"high-level-summary",level:3},{value:"What did the team achieve?",id:"what-did-the-team-achieve",level:3},{value:"What&#39;s next?",id:"whats-next",level:3}],m={toc:c},p="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"high-level-summary"},"High-level summary"),(0,r.kt)("p",null,"The last few weeks have seen a solid amount of work and changes to the\nuser-facing side of Hydra; namely great progress on incremental commits and\nusing Aiken for our commit validator which has ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cardano-scaling/hydra/pull/1680#issue-2565734963"},"yielded size/cost\nsavings"),".\nThis has also allowed us to support PlutusV3 validators and keep up to date\nwith the cardano-api. We also made a breaking change (improvement) to the\nserver output ",(0,r.kt)("inlineCode",{parentName:"p"},"SnapshotConfirmed")," to make it easier to work with signed\nsnapshots. Finally, we made good progress on blockfrost support by adding an\noption to follow the chain via blockfrost, instead of through a cardano-node.\nNext up we continue our focus on incremental commits and general improvements,\nwhile planning the next release."),(0,r.kt)("h3",{id:"what-did-the-team-achieve"},"What did the team achieve?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added the raw CBOR datum in transaction outputs ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/cardano-scaling/hydra/issues/1543"},"#1543")),(0,r.kt)("li",{parentName:"ul"},"Used Aiken for commit validator ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/cardano-scaling/hydra/pull/1680"},"#1680")),(0,r.kt)("li",{parentName:"ul"},"Updated to cardano-api 9.4 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/cardano-scaling/hydra/pull/1706"},"#1706")),(0,r.kt)("li",{parentName:"ul"},"Implemented the off-chain user journey for incremental commits ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/cardano-scaling/hydra/issues/1522"},"#1522")),(0,r.kt)("li",{parentName:"ul"},"Documentation on the incremental commits feature ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/cardano-scaling/hydra/pull/1704"},"#1704")),(0,r.kt)("li",{parentName:"ul"},"Some cleanup of unused modules and functions"),(0,r.kt)("li",{parentName:"ul"},"Full transaction information in ",(0,r.kt)("inlineCode",{parentName:"li"},"SnapshotConfirmed")," event ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/cardano-scaling/hydra/pull/1685"},"#1685")),(0,r.kt)("li",{parentName:"ul"},"Added blockfrost mode to hydra-chain-observer ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/cardano-scaling/hydra/pull/1631"},"#1631"))),(0,r.kt)("h3",{id:"whats-next"},"What's next?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Continued work on incremental commits ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/cardano-scaling/hydra/issues/199"},"#199")),(0,r.kt)("li",{parentName:"ul"},"Improvements to memory usage ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/cardano-scaling/hydra/issues/1618"},"#1618")),(0,r.kt)("li",{parentName:"ul"},"DevEx improvements to split out components of the ",(0,r.kt)("inlineCode",{parentName:"li"},"hydra")," monorepo"),(0,r.kt)("li",{parentName:"ul"},"Start to plan the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/cardano-scaling/hydra/issues?q=is%3Aopen+is%3Aissue+milestone%3A0.20.0"},"0.20.0 release"))))}u.isMDXComponent=!0}}]);