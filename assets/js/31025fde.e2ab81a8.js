"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[22519],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(r),m=n,d=c["".concat(s,".").concat(m)]||c[m]||h[m]||i;return r?a.createElement(d,o(o({ref:t},p),{},{components:r})):a.createElement(d,o({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},53320:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const i={title:"Hydra Team Update",slug:"2023-09-08-hydra",authors:["ch1bo"],tags:["hydra"],hide_table_of_contents:!1},o=void 0,l={permalink:"/2023-09-08-hydra",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2023-09-08-hydra.md",source:"@site/blog/2023-09-08-hydra.md",title:"Hydra Team Update",description:"High-level summary",date:"2023-09-08T00:00:00.000Z",formattedDate:"September 8, 2023",tags:[{label:"hydra",permalink:"/tags/hydra"}],readingTime:1.06,hasTruncateMarker:!1,authors:[{name:"Sebastian Nagel",title:"Hydra Team Lead",url:"https://github.com/ch1bo",imageURL:"https://github.com/ch1bo.png",key:"ch1bo"}],frontMatter:{title:"Hydra Team Update",slug:"2023-09-08-hydra",authors:["ch1bo"],tags:["hydra"],hide_table_of_contents:!1},prevItem:{title:"Node API & CLI Team Update",permalink:"/2023-09-12-node-cli-api"},nextItem:{title:"Mithril Team Update",permalink:"/2023-09-07-mithril"}},s={authorsImageUrls:[void 0]},u=[{value:"High-level summary",id:"high-level-summary",level:2},{value:"What did the team achieve this week",id:"what-did-the-team-achieve-this-week",level:2},{value:"What are the goals of next week",id:"what-are-the-goals-of-next-week",level:2}],p={toc:u},c="wrapper";function h(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-level-summary"},"High-level summary"),(0,n.kt)("p",null,"This week, the Hydra team improved the commit process with support for inline\ndatums. They simplified the chain layer by refactoring how the chain state is\npersisted. Updates to the Hydra tutorial were completed, including CI workflows\nto keep it up-to-date. The team engaged in discussions with researchers about\nincremental commits & decommits, and drafted an architectural decision record\nfor a resource-based API. They also explored simpler solutions for the upcoming\nnetwork resilience feature."),(0,n.kt)("h2",{id:"what-did-the-team-achieve-this-week"},"What did the team achieve this week"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Support InlineScriptDatum in commit\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/1043"},"#1043")),(0,n.kt)("li",{parentName:"ul"},"Refactored chain state persistency\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/pull/1049"},"#1049")),(0,n.kt)("li",{parentName:"ul"},"Completed tutorial updates (by adding CI and some cleanup)\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/997"},"#997")),(0,n.kt)("li",{parentName:"ul"},"Intersect Open Source committee meeting"),(0,n.kt)("li",{parentName:"ul"},'Experimented with various models to better express the \\"Network\nresilience problem\\" to find a KISS solution for\n',(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/188"},"#188")),(0,n.kt)("li",{parentName:"ul"},"Drafted and discussed incremental de-/commit features within team\nand with researchers\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/199"},"#199")," and\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/1057"},"#1057")),(0,n.kt)("li",{parentName:"ul"},"Created ADR for a resource based overhaul of the API\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/pull/1028"},"#1028"))),(0,n.kt)("h2",{id:"what-are-the-goals-of-next-week"},"What are the goals of next week"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Meetup of Hydra & Mithril contributors in Nantes, France"),(0,n.kt)("li",{parentName:"ul"},"Integrated cardano-api 8.15 to have GHC 9.6 support"),(0,n.kt)("li",{parentName:"ul"},"A clear design for incremental commits (decommits are already\nunderstood)"),(0,n.kt)("li",{parentName:"ul"},"An ADR for improving tx construction & observation to not need chain\nstate")))}h.isMDXComponent=!0}}]);