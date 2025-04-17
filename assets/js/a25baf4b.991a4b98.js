"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[52622],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>s});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),m=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},h=function(e){var t=m(e.components);return n.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),p=m(a),c=r,s=p["".concat(d,".").concat(c)]||p[c]||u[c]||i;return a?n.createElement(s,o(o({ref:t},h),{},{components:a})):n.createElement(s,o({ref:t},h))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var m=2;m<i;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},52906:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const i={title:"Hydra Team Update",slug:"2024-03-28-hydra",authors:["ch1bo"],tags:["hydra"],hide_table_of_contents:!1},o=void 0,l={permalink:"/2024-03-28-hydra",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2024-03-28-hydra.md",source:"@site/blog/2024-03-28-hydra.md",title:"Hydra Team Update",description:"High-level summary",date:"2024-03-28T00:00:00.000Z",formattedDate:"March 28, 2024",tags:[{label:"hydra",permalink:"/tags/hydra"}],readingTime:1.05,hasTruncateMarker:!1,authors:[{name:"Sebastian Nagel",title:"Hydra Team Lead",url:"https://github.com/ch1bo",imageURL:"https://github.com/ch1bo.png",key:"ch1bo"}],frontMatter:{title:"Hydra Team Update",slug:"2024-03-28-hydra",authors:["ch1bo"],tags:["hydra"],hide_table_of_contents:!1},prevItem:{title:"SRE Team Update",permalink:"/2024-03-29-sre"},nextItem:{title:"Ledger Team Update",permalink:"/2024-03-27-ledger"}},d={authorsImageUrls:[void 0]},m=[{value:"High-level summary",id:"high-level-summary",level:3},{value:"What did the team achieve this week",id:"what-did-the-team-achieve-this-week",level:3},{value:"What are the goals of next week",id:"what-are-the-goals-of-next-week",level:3}],h={toc:m},p="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"high-level-summary"},"High-level summary"),(0,r.kt)("p",null,"This week, the Hydra team conducted the monthly review meeting and investigated\na broken head situation. The team slightly improved conway forward compatibility\nin ",(0,r.kt)("inlineCode",{parentName:"p"},"explorer")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"hydra-node"),", enhanced ",(0,r.kt)("inlineCode",{parentName:"p"},"hydra-cluster --devnet")," which allows e2e\ntesting of ",(0,r.kt)("inlineCode",{parentName:"p"},"kupo"),", extended smoke test to also include committing ADA into the\nhead, documented the anticipated behavior of incremental decommits, and added\ndecommits to the tutorial."),(0,r.kt)("h3",{id:"what-did-the-team-achieve-this-week"},"What did the team achieve this week"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Conducted the monthly review meeting (link to recording already?)"),(0,r.kt)("li",{parentName:"ul"},"Investigated a broken head situation ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/1374"},"#","1374")),(0,r.kt)("li",{parentName:"ul"},"Slightly improved conway forward compatibility in explorer / hydra-node ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/pull/1373"},"#","1373")),(0,r.kt)("li",{parentName:"ul"},"Busy ",(0,r.kt)("inlineCode",{parentName:"li"},"hydra-cluster --devnet")," sandbox which allows e2e testing of ",(0,r.kt)("inlineCode",{parentName:"li"},"kupo")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/pull/1378"},"#","1378")),(0,r.kt)("li",{parentName:"ul"},"Extended smoke test to also include committing ADA into the head ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/pull/1377"},"#","1377")),(0,r.kt)("li",{parentName:"ul"},"Documented the anticipated behavior of incremental ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/commit/60d55e8bb5a75c77647e17e44f22a754fa33ac0f"},"decommits")," and added decommits to ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/commit/efc2809909636b6925b39dcb0810010fcd4a84c7"},"tutorial")),(0,r.kt)("li",{parentName:"ul"},"Another write-up of how the incremental commit/decommit could work (without needing merkle trees or L2/L1 interleaving) ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/199#issuecomment-2018001381"},"on this issue"))),(0,r.kt)("h3",{id:"what-are-the-goals-of-next-week"},"What are the goals of next week"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Complete the written monthly report"),(0,r.kt)("li",{parentName:"ul"},"Update our head and ",(0,r.kt)("inlineCode",{parentName:"li"},"hydraw")," instance to ",(0,r.kt)("inlineCode",{parentName:"li"},"master")," (a release candidate)"),(0,r.kt)("li",{parentName:"ul"},"Complete the improved ",(0,r.kt)("inlineCode",{parentName:"li"},"/commit")," endpoint to unblock users"),(0,r.kt)("li",{parentName:"ul"},"Release ",(0,r.kt)("inlineCode",{parentName:"li"},"0.16.0")," (likely without incremental decommits)"),(0,r.kt)("li",{parentName:"ul"},"Reproduce close ",">"," contest ",">"," contest scenarios using stateful testing")))}u.isMDXComponent=!0}}]);