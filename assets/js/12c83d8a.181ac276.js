"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[58774],{3905:(e,t,r)=>{r.d(t,{Zo:()=>h,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),p=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},h=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),s=p(r),m=n,d=s["".concat(u,".").concat(m)]||s[m]||c[m]||o;return r?a.createElement(d,i(i({ref:t},h),{},{components:r})):a.createElement(d,i({ref:t},h))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[s]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},77470:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const o={title:"Hydra Team Update",slug:"2023-07-28-hydra",authors:["ch1bo"],tags:["hydra"],hide_table_of_contents:!1},i=void 0,l={permalink:"/2023-07-28-hydra",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2023-07-28-hydra.md",source:"@site/blog/2023-07-28-hydra.md",title:"Hydra Team Update",description:"High-level summary",date:"2023-07-28T00:00:00.000Z",formattedDate:"July 28, 2023",tags:[{label:"hydra",permalink:"/tags/hydra"}],readingTime:1.005,hasTruncateMarker:!1,authors:[{name:"Sebastian Nagel",title:"Hydra Team Lead",url:"https://github.com/ch1bo",imageURL:"https://github.com/ch1bo.png",key:"ch1bo"}],frontMatter:{title:"Hydra Team Update",slug:"2023-07-28-hydra",authors:["ch1bo"],tags:["hydra"],hide_table_of_contents:!1},prevItem:{title:"Network Team Update",permalink:"/2023-07-31-network"},nextItem:{title:"Mithril Team Update",permalink:"/2023-07-27-mithril"}},u={authorsImageUrls:[void 0]},p=[{value:"High-level summary",id:"high-level-summary",level:2},{value:"What did the team achieve this week",id:"what-did-the-team-achieve-this-week",level:2},{value:"What are the goals of next week",id:"what-are-the-goals-of-next-week",level:2}],h={toc:p},s="wrapper";function c(e){let{components:t,...r}=e;return(0,n.kt)(s,(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-level-summary"},"High-level summary"),(0,n.kt)("p",null,"During this week, the Hydra team achieved significant progress in various areas.\nThey conducted the monthly review meeting for July, which continously ensures\ntransparent communication and project evaluation. The team migrated the core\nlogic of the node to an event-sourced architecture and incremental writes of\nevents to persistence, enhancing the project","\u2019","s performance and maintainability.\nFurthermore, the team added the ability to read protocol parameters via the API\nand fixed the CI workflows to support pull requests from forks of external\ncontributors, streamlining the development process for community involvement."),(0,n.kt)("h2",{id:"what-did-the-team-achieve-this-week"},"What did the team achieve this week"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Held the monthly review meeting for July (",(0,n.kt)("a",{parentName:"li",href:"https://drive.google.com/file/d/14ANZ3efuxgXpYK94EBWxZLR9TtN7voru/"},"recording"),")"),(0,n.kt)("li",{parentName:"ul"},"Migrate the core logic of the node to an event-sourced architecture ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/pull/999"},"#999")),(0,n.kt)("li",{parentName:"ul"},"Updated persistence to faster incremental writes of events ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/pull/1000"},"#1000")),(0,n.kt)("li",{parentName:"ul"},"Added ability to read protocol parameters via API ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/735"},"#735")),(0,n.kt)("li",{parentName:"ul"},"Fix CI workflows to support pull requests from forks of external contributors ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/pull/993"},"#993")),(0,n.kt)("li",{parentName:"ul"},"Updated to GHC 9.2.8 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/pull/1005"},"#1005")),(0,n.kt)("li",{parentName:"ul"},"Prepared an updated use cases section on ",(0,n.kt)("a",{parentName:"li",href:"https://hydra.family"},"https://hydra.family")," (published with next release)")),(0,n.kt)("h2",{id:"what-are-the-goals-of-next-week"},"What are the goals of next week"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Publish monthly report"),(0,n.kt)("li",{parentName:"ul"},"Complete user transaction submission work ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/966"},"#966")),(0,n.kt)("li",{parentName:"ul"},"Remove commit from internal wallet (deprecated) ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/954"},"#954"))))}c.isMDXComponent=!0}}]);