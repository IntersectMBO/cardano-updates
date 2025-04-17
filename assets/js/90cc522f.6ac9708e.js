"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[75696],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),c=n,m=d["".concat(s,".").concat(c)]||d[c]||h[c]||i;return r?a.createElement(m,o(o({ref:t},u),{},{components:r})):a.createElement(m,o({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},73887:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const i={title:"Hydra Team Update",slug:"2023-04-21-hydra",authors:"ch1bo",tags:["hydra"],hide_table_of_contents:!1},o=void 0,l={permalink:"/2023-04-21-hydra",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2023-04-21-hydra.md",source:"@site/blog/2023-04-21-hydra.md",title:"Hydra Team Update",description:"High-level summary",date:"2023-04-21T00:00:00.000Z",formattedDate:"April 21, 2023",tags:[{label:"hydra",permalink:"/tags/hydra"}],readingTime:1.26,hasTruncateMarker:!1,authors:[{name:"Sebastian Nagel",title:"Hydra Team Lead",url:"https://github.com/ch1bo",imageURL:"https://github.com/ch1bo.png",key:"ch1bo"}],frontMatter:{title:"Hydra Team Update",slug:"2023-04-21-hydra",authors:"ch1bo",tags:["hydra"],hide_table_of_contents:!1},prevItem:{title:"Hydra Team Update",permalink:"/2023-04-27-hydra"},nextItem:{title:"Ledger Team Update",permalink:"/2023-04-21-ledger"}},s={authorsImageUrls:[void 0]},p=[{value:"High-level summary",id:"high-level-summary",level:2},{value:"What did the team achieve this week",id:"what-did-the-team-achieve-this-week",level:2},{value:"What are the goals of next week",id:"what-are-the-goals-of-next-week",level:2}],u={toc:p},d="wrapper";function h(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-level-summary"},"High-level summary"),(0,n.kt)("p",null,"This week, the Hydra team worked on several fronts, including fixing state\nmachine continuity on-chain, discussing voting project solutions, exploring\nadding Hydra support to kupo, and improving API navigation with a sidebar. The\nteam also updated dependencies and fixed issues in their test suites. Moving\nforward, the team plans to hold the next monthly review meeting, address a user\nissue, prepare for the 0.10.0 release, and work on a dirt road fix for the\nrollbacks issue with proper test coverage."),(0,n.kt)("h2",{id:"what-did-the-team-achieve-this-week"},"What did the team achieve this week"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed scripts to enforce state machine continuity on-chain ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/pull/777"},"#777"),"."),(0,n.kt)("li",{parentName:"ul"},"Took part in a twitter space on ",(0,n.kt)("a",{parentName:"li",href:"https://twitter.com/thepizzaknight_/status/1647833904282320896"},"\u201c","Scaling Cardano","\u201d"),"."),(0,n.kt)("li",{parentName:"ul"},"Joined a CBIA meeting to discuss Cardano network protocols & how to specify them."),(0,n.kt)("li",{parentName:"ul"},"Discussed potential solutions of ensuring vote uniqueness in the voting project."),(0,n.kt)("li",{parentName:"ul"},"Updated dependencies to match ",(0,n.kt)("inlineCode",{parentName:"li"},"cardano-node")," master to prepare for upcoming releases and hard-forks"),(0,n.kt)("li",{parentName:"ul"},"Explored adding Hydra ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/CardanoSolutions/kupo/pull/117"},"support to kupo"),", a lightweight Cardano chain indexer - some more work required."),(0,n.kt)("li",{parentName:"ul"},"Improved navigation of the API Reference with a sidebar, see ",(0,n.kt)("a",{parentName:"li",href:"https://hydra.family/head-protocol/unstable/api-reference/"},"unstable API version"),"."),(0,n.kt)("li",{parentName:"ul"},"Fixed two things in our test suites (random port conflicts and an arithmetic underflow in smoke test)")),(0,n.kt)("h2",{id:"what-are-the-goals-of-next-week"},"What are the goals of next week"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Monthly review meeting (join via ",(0,n.kt)("a",{parentName:"li",href:"https://discord.gg/inputoutput?event=1097863746216538194"},"Discord")," or ",(0,n.kt)("a",{parentName:"li",href:"https://www.addevent.com/event/ck16794110"},"AddEvent"),") & report"),(0,n.kt)("li",{parentName:"ul"},"Dirt road fix for rollbacks ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/784"},"#784")," properly covered by a test."),(0,n.kt)("li",{parentName:"ul"},"Groom and ideally address user issue ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/823"},"#823"),"."),(0,n.kt)("li",{parentName:"ul"},"Put the spec into the repo ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/693"},"#693")," and prepare release 0.10.0.")))}h.isMDXComponent=!0}}]);