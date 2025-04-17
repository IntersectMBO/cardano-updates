"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[13412],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),p=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),h=p(a),d=n,m=h["".concat(u,".").concat(d)]||h[d]||c[d]||i;return a?r.createElement(m,l(l({ref:t},s),{},{components:a})):r.createElement(m,l({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[h]="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},62337:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const i={title:"Hydra Team Update",slug:"2023-10-06-hydra",authors:["ffakenz"],tags:["hydra"],hide_table_of_contents:!1},l=void 0,o={permalink:"/2023-10-06-hydra",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2023-10-06-hydra.md",source:"@site/blog/2023-10-06-hydra.md",title:"Hydra Team Update",description:"High-level summary",date:"2023-10-06T00:00:00.000Z",formattedDate:"October 6, 2023",tags:[{label:"hydra",permalink:"/tags/hydra"}],readingTime:.88,hasTruncateMarker:!1,authors:[{name:"Franco Testagrossa",title:"Hydra Software Engineer",url:"https://github.com/ffakenz",imageURL:"https://github.com/ffakenz.png",key:"ffakenz"}],frontMatter:{title:"Hydra Team Update",slug:"2023-10-06-hydra",authors:["ffakenz"],tags:["hydra"],hide_table_of_contents:!1},prevItem:{title:"Node API & CLI Team Update",permalink:"/2023-10-10-node-cli-api"},nextItem:{title:"Performance & tracing update",permalink:"/2023-10-06-performance-and-tracing"}},u={authorsImageUrls:[void 0]},p=[{value:"High-level summary",id:"high-level-summary",level:2},{value:"What did the team achieve this week",id:"what-did-the-team-achieve-this-week",level:2},{value:"What are the goals of next week",id:"what-are-the-goals-of-next-week",level:2}],s={toc:p},h="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(h,(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-level-summary"},"High-level summary"),(0,n.kt)("p",null,"This week, the Hydra team released version 0.13.0, which includes fixes and extensions for state persistency and the ability to draft a commit transaction using inline datums."),(0,n.kt)("p",null,"The team also delivered the first version of the network resilience layer, significantly increasing head availability."),(0,n.kt)("p",null,"Additionally, they have been providing support to several funded Catalyst projects that want to build on Hydra."),(0,n.kt)("p",null,"Last but not least, they updated and published security policy and vulnerability disclosure policy reports on how to handle security vulnerabilities within Hydra."),(0,n.kt)("h2",{id:"what-did-the-team-achieve-this-week"},"What did the team achieve this week"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Release ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/releases/tag/0.13.0"},"0.13.0")),(0,n.kt)("li",{parentName:"ul"},"Published vulnerability reports ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/pull/1088"},"#1088")),(0,n.kt)("li",{parentName:"ul"},"Merged network resilience work part I ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/pull/1074"},"#1074")),(0,n.kt)("li",{parentName:"ul"},"Planning for Cardano Summit participation "),(0,n.kt)("li",{parentName:"ul"},"Discussions with funded Catalyst projects wanting to build on Hydra for support"),(0,n.kt)("li",{parentName:"ul"},"Merged typos fix PR from @omahs ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/pull/1095"},"#1095"))),(0,n.kt)("h2",{id:"what-are-the-goals-of-next-week"},"What are the goals of next week"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Complete Aiken commit validator script ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/pull/1072"},"#1072")),(0,n.kt)("li",{parentName:"ul"},"Complete Kupo integration ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/1078"},"#1078")),(0,n.kt)("li",{parentName:"ul"},"Brick upgrade on TUI ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/pull/1103"},"#1103")),(0,n.kt)("li",{parentName:"ul"},"Clean backlog"),(0,n.kt)("li",{parentName:"ul"},"Prepare and rehearse demo and talk for Cardano Summit")))}c.isMDXComponent=!0}}]);