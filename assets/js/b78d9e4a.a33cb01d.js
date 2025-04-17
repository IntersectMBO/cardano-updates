"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[4552],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,f=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:a,s[1]=l;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},74448:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={title:"Consensus Team Update",slug:"2025-01-08-consensus",authors:"dnadales",tags:["consensus"],hide_table_of_contents:!1},s=void 0,l={permalink:"/2025-01-08-consensus",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2025-01-08-consensus.md",source:"@site/blog/2025-01-08-consensus.md",title:"Consensus Team Update",description:"High level summary",date:"2025-01-08T00:00:00.000Z",formattedDate:"January 8, 2025",tags:[{label:"consensus",permalink:"/tags/consensus"}],readingTime:.34,hasTruncateMarker:!1,authors:[{name:"Damian Nadales",title:"Consensus Team Lead",url:"https://github.com/dnadales",imageURL:"https://github.com/dnadales.png",key:"dnadales"}],frontMatter:{title:"Consensus Team Update",slug:"2025-01-08-consensus",authors:"dnadales",tags:["consensus"],hide_table_of_contents:!1},prevItem:{title:"Node API & CLI Team Update",permalink:"/2025-01-15-node-cli-api"},nextItem:{title:"Hydra Team Update",permalink:"/2025-01-08-hydra"}},i={authorsImageUrls:[void 0]},u=[{value:"High level summary",id:"high-level-summary",level:2}],c={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The augmentation of headers with time, which helps simplify the way consensus handles time, is now ready for review (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/ouroboros-consensus/pull/1288"},"#1288"),")."),(0,a.kt)("li",{parentName:"ul"},"Fixed a bug with the mempool being overly strict in rejecting certain large transactions (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/ouroboros-consensus/pull/1352"},"1352"),")."),(0,a.kt)("li",{parentName:"ul"},"Incorporated the full rework of the block-fetch logic for bulk sync mode (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/ouroboros-consensus/pull/1179"},"#1179"),")."),(0,a.kt)("li",{parentName:"ul"},"Released Consensus packages needed for Cardano Node 10.2 (",(0,a.kt)("inlineCode",{parentName:"li"},"ouroboros-consensus-protocol-0.10.0.0"),",  ",(0,a.kt)("inlineCode",{parentName:"li"},"release-ouroboros-consensus-diffusion-0.19.0.0"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"release-ouroboros-consensus-cardano-0.21.0.0"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"release-ouroboros-consensus-0.22.0.0"),").")))}m.isMDXComponent=!0}}]);