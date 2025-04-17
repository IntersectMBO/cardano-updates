"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[13160],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,h=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(h,s(s({ref:t},c),{},{components:n})):r.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:a,s[1]=l;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},97977:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={title:"Consensus Team Update",slug:"2024-05-15-consensus",authors:"dnadales",tags:["consensus"],hide_table_of_contents:!1},s=void 0,l={permalink:"/2024-05-15-consensus",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2024-05-15-consensus.md",source:"@site/blog/2024-05-15-consensus.md",title:"Consensus Team Update",description:"High level summary",date:"2024-05-15T00:00:00.000Z",formattedDate:"May 15, 2024",tags:[{label:"consensus",permalink:"/tags/consensus"}],readingTime:.545,hasTruncateMarker:!1,authors:[{name:"Damian Nadales",title:"Consensus Team Lead",url:"https://github.com/dnadales",imageURL:"https://github.com/dnadales.png",key:"dnadales"}],frontMatter:{title:"Consensus Team Update",slug:"2024-05-15-consensus",authors:"dnadales",tags:["consensus"],hide_table_of_contents:!1},prevItem:{title:"Mithril Team Update",permalink:"/2024-05-22-mithril"},nextItem:{title:"Mithril Team Update",permalink:"/2024-05-15-mithril"}},i={authorsImageUrls:[void 0]},u=[{value:"High level summary",id:"high-level-summary",level:2}],c={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Released Consensus for Node 8.11 (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/ouroboros-consensus/pull/1101"},"#1101"),")"),(0,a.kt)("li",{parentName:"ul"},"Improved the Praos chain order:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Restricted VRF tiebreaker based on slot distance (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/ouroboros-consensus/pull/1047"},"#1047"),")"),(0,a.kt)("li",{parentName:"ul"},"Small tweak to the issue number tiebreaker (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/ouroboros-consensus/pull/1086"},"#1086"),")"))),(0,a.kt)("li",{parentName:"ul"},"Wrote overview on the statistics on the leader schedule (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/ouroboros-consensus/pull/1096"},"#1096"),")"),(0,a.kt)("li",{parentName:"ul"},"Integrated robustness refinement for concluding that a node is caught up in the context of bootstrap peers (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/ouroboros-consensus/pull/1031"},"#1031"),")"),(0,a.kt)("li",{parentName:"ul"},"The P&T team managed to complete the UTXO-HD benchmarks using the LMDB backend and the ",(0,a.kt)("a",{parentName:"li",href:"https://updates.cardano.intersectmbo.org/2024-05-07-performance-and-tracing#utxo-hd--lmdb"},"results")," are promising."),(0,a.kt)("li",{parentName:"ul"},"We're working on setting up the Consensus Technical Working Group within Intersect, so if you'd like to participate please reach out to ",(0,a.kt)("a",{parentName:"li",href:"mailto:damian.nadales@iohk.io"},"Damian Nadales"),".")))}m.isMDXComponent=!0}}]);