"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[84378],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),u=c(a),p=n,m=u["".concat(s,".").concat(p)]||u[p]||d[p]||o;return a?r.createElement(m,i(i({ref:t},h),{},{components:a})):r.createElement(m,i({ref:t},h))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},53728:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={title:"Hydra Team Update",slug:"2024-01-12-hydra",authors:["ch1bo"],tags:["hydra"],hide_table_of_contents:!1},i=void 0,l={permalink:"/2024-01-12-hydra",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2024-01-12.md",source:"@site/blog/2024-01-12.md",title:"Hydra Team Update",description:"High-level summary",date:"2024-01-12T00:00:00.000Z",formattedDate:"January 12, 2024",tags:[{label:"hydra",permalink:"/tags/hydra"}],readingTime:1.06,hasTruncateMarker:!1,authors:[{name:"Sebastian Nagel",title:"Hydra Team Lead",url:"https://github.com/ch1bo",imageURL:"https://github.com/ch1bo.png",key:"ch1bo"}],frontMatter:{title:"Hydra Team Update",slug:"2024-01-12-hydra",authors:["ch1bo"],tags:["hydra"],hide_table_of_contents:!1},prevItem:{title:"Node API & CLI Team Update",permalink:"/2024-01-15-node-cli-api"},nextItem:{title:"Consensus Team Update",permalink:"/2024-01-10-consensus"}},s={authorsImageUrls:[void 0]},c=[{value:"High-level summary",id:"high-level-summary",level:3},{value:"What did the team achieve this week",id:"what-did-the-team-achieve-this-week",level:3},{value:"What are the goals of next week",id:"what-are-the-goals-of-next-week",level:3}],h={toc:c},u="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"high-level-summary"},"High-level summary"),(0,n.kt)("p",null,"This week, the Hydra team improved Github actions workflows, addressed protocol\nparameter schema consistency in hydra-node, and made enhancements to log schema\ntests. They created an Architectural Decision Record (ADR) for Cardano\ntransactions serialization in APIs, moved the hydra-chess project to a dedicated\nrepository, and resolved a bug in quickcheck-dynamic and model tests."),(0,n.kt)("p",null,"There will be the monthly review meeting with demos on Hydra, Mithril and\nrelated projects. If this sounds interesting, join us in Google Meet\n",(0,n.kt)("a",{parentName:"p",href:"https://meet.google.com/udc-zgyw-agd"},"https://meet.google.com/udc-zgyw-agd")," next week, January 19 2024 at 17:30 UTC."),(0,n.kt)("h3",{id:"what-did-the-team-achieve-this-week"},"What did the team achieve this week"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Github actions improvements and small fixes to the smoke tests ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/pull/1242"},"#","1242"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/pull/1233"},"#","1233")),(0,n.kt)("li",{parentName:"ul"},"Fixed protocol parameter schema consistency around ",(0,n.kt)("inlineCode",{parentName:"li"},"hydra-node")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/1234"},"#","1234")),(0,n.kt)("li",{parentName:"ul"},"Log schema tests improvements and fixes ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/pull/1244"},"#","1244")),(0,n.kt)("li",{parentName:"ul"},"Created ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/pull/1215/files?short_path=3a6c7dc#diff-3a6c7dcfd58c753d4e2639cbfeeff78b09bdd0709a01e6658884de790590c702"},"ADR")," about Cardano transactions serialisation in our APIs\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/pull/1215"},"#","1215")),(0,n.kt)("li",{parentName:"ul"},"Moved ",(0,n.kt)("inlineCode",{parentName:"li"},"hydra-chess")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/1237"},"#","1237")," to a dedicated cardano-scaling organisation repository ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/cardano-scaling/hydra-chess"},"https://github.com/cardano-scaling/hydra-chess")),(0,n.kt)("li",{parentName:"ul"},"Identified bug on ",(0,n.kt)("inlineCode",{parentName:"li"},"quickcheck-dynamic")," / our model tests ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/1239"},"#","1239"))),(0,n.kt)("h3",{id:"what-are-the-goals-of-next-week"},"What are the goals of next week"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Monthly review meeting (January 19, 17:30 UTC) including several demos (from team and contributors)"),(0,n.kt)("li",{parentName:"ul"},"Do release 0.15.0"),(0,n.kt)("li",{parentName:"ul"},"Improve ",(0,n.kt)("inlineCode",{parentName:"li"},"quickcheck-dynamic")," model to be more robust and cover more\nbehaviour."),(0,n.kt)("li",{parentName:"ul"},"Draft POC about backend for a ",(0,n.kt)("inlineCode",{parentName:"li"},"hydra-explorer")," that can track all\nheads on-chain.")))}d.isMDXComponent=!0}}]);