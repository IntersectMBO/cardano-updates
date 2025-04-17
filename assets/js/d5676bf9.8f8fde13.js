"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[3270],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),h=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=h(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=h(a),c=n,d=p["".concat(s,".").concat(c)]||p[c]||m[c]||i;return a?r.createElement(d,o(o({ref:t},u),{},{components:a})):r.createElement(d,o({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,o[1]=l;for(var h=2;h<i;h++)o[h]=a[h];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},82850:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>h});var r=a(87462),n=(a(67294),a(3905));const i={title:"Hydra Team Update",slug:"2023-07-07-hydra",authors:["ffakenz","v0d1ch"],tags:["hydra"],hide_table_of_contents:!1},o=void 0,l={permalink:"/2023-07-07-hydra",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2023-07-07-hydra.md",source:"@site/blog/2023-07-07-hydra.md",title:"Hydra Team Update",description:"High-level summary",date:"2023-07-07T00:00:00.000Z",formattedDate:"July 7, 2023",tags:[{label:"hydra",permalink:"/tags/hydra"}],readingTime:.865,hasTruncateMarker:!1,authors:[{name:"Franco Testagrossa",title:"Hydra Software Engineer",url:"https://github.com/ffakenz",imageURL:"https://github.com/ffakenz.png",key:"ffakenz"},{name:"Sasha Bogicevic",title:"Hydra Software Engineer",url:"https://github.com/v0d1ch",imageURL:"https://github.com/v0d1ch.png",key:"v0d1ch"}],frontMatter:{title:"Hydra Team Update",slug:"2023-07-07-hydra",authors:["ffakenz","v0d1ch"],tags:["hydra"],hide_table_of_contents:!1},prevItem:{title:"Goedel Team Update",permalink:"/2023-07-07-goedel"},nextItem:{title:"SRE Team Update",permalink:"/2023-07-07-sre"}},s={authorsImageUrls:[void 0,void 0]},h=[{value:"High-level summary",id:"high-level-summary",level:2},{value:"What did the team achieve this week",id:"what-did-the-team-achieve-this-week",level:2},{value:"What are the goals of next week",id:"what-are-the-goals-of-next-week",level:2}],u={toc:h},p="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-level-summary"},"High-level summary"),(0,n.kt)("p",null,"This week the Hydra team accomplished some nice progress. They secured the\nnetwork layer further by implementing authentication of the messages between the\npeers in the Head protocol. In the process they also managed to separate\nHeartBeat messages from the protocol ones which somewhat improved the quality of\ncode in Hydra. The team also finished work related to sending only transaction\nids in ReqSn messages, fixed an issue in the smoke tests, and improved benchmark\npublishing on the website."),(0,n.kt)("h2",{id:"what-did-the-team-achieve-this-week"},"What did the team achieve this week"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/727"},"Implemented")," authenticated messages"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/728"},"Implemented")," send only transaction ids in ReqSn messages"),(0,n.kt)("li",{parentName:"ul"},"Separate ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/pull/969"},"HeartBeat")," messages from the core network protocol messages"),(0,n.kt)("li",{parentName:"ul"},"Publish multiple pre-defined ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/pull/947"},"benchmarks")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/pull/967"},"Fixed")," a smoke-test issue where funds would not be returned to the faucet"),(0,n.kt)("li",{parentName:"ul"},"Found a bug in the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra-ghsa-c8qp-cv4h-vcc4/pull/1"},"off-chain signature\nverification"))),(0,n.kt)("h2",{id:"what-are-the-goals-of-next-week"},"What are the goals of next week"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Spike on performance improvements of event sourced persistence ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/913"},"#913")),(0,n.kt)("li",{parentName:"ul"},"Add new endpoint for submitting client transactions"),(0,n.kt)("li",{parentName:"ul"},"Remove commit from internal wallet")))}m.isMDXComponent=!0}}]);