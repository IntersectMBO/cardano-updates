"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[13752],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return r?a.createElement(h,l(l({ref:t},s),{},{components:r})):a.createElement(h,l({ref:t},s))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},68015:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const o={title:"Hydra Team Update",slug:"2024-02-09-hydra",authors:["locallycompact"],tags:["hydra"],hide_table_of_contents:!1},l=void 0,i={permalink:"/2024-02-09-hydra",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/hydra-2024-02-09.md",source:"@site/blog/hydra-2024-02-09.md",title:"Hydra Team Update",description:"High-level Summary",date:"2024-02-09T00:00:00.000Z",formattedDate:"February 9, 2024",tags:[{label:"hydra",permalink:"/tags/hydra"}],readingTime:.64,hasTruncateMarker:!1,authors:[{name:"Daniel Firth",title:"Hydra Software Engineer",url:"https://github.com/locallycompact",imageURL:"https://github.com/locallycompact.png",key:"locallycompact"}],frontMatter:{title:"Hydra Team Update",slug:"2024-02-09-hydra",authors:["locallycompact"],tags:["hydra"],hide_table_of_contents:!1},prevItem:{title:"Mithril Team Update",permalink:"/2024-02-14-mithril"},nextItem:{title:"Consensus Team Update",permalink:"/2024-02-07-consensus"}},c={authorsImageUrls:[void 0]},p=[{value:"High-level Summary",id:"high-level-summary",level:3},{value:"What did the team achieve this week",id:"what-did-the-team-achieve-this-week",level:3},{value:"What are the goals of next week",id:"what-are-the-goals-of-next-week",level:3}],s={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"high-level-summary"},"High-level Summary"),(0,n.kt)("p",null,"This week, the Hydra team worked on forward compatibility for Conway support, deployed the hydra explorer tool, and improved the model based testing to support more actions (Fanout and Rollbacks)."),(0,n.kt)("h3",{id:"what-did-the-team-achieve-this-week"},"What did the team achieve this week"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Addressed flakyness in two types of integration tests"),(0,n.kt)("li",{parentName:"ul"},"Fixed our tooling (HLS 2.6 on GHC 9.6.4)"),(0,n.kt)("li",{parentName:"ul"},"Fixed configuration of running head in preview"),(0,n.kt)("li",{parentName:"ul"},"Added Fanout and Rollbacks to our Model basd test suite #1296"),(0,n.kt)("li",{parentName:"ul"},"Deployed the hydra explorer to ",(0,n.kt)("a",{parentName:"li",href:"http://explorer.hydra.family:9090/heads"},"http://explorer.hydra.family:9090/heads")," (url will change a bit more)"),(0,n.kt)("li",{parentName:"ul"},"Updated smoke test to run sanchonet")),(0,n.kt)("h3",{id:"what-are-the-goals-of-next-week"},"What are the goals of next week"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fix the fanout after contest bug "),(0,n.kt)("li",{parentName:"ul"},"Specify the on-chain validators for incremental decommits"),(0,n.kt)("li",{parentName:"ul"},"Complete smoke tests on sanchonet")))}u.isMDXComponent=!0}}]);