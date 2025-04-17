"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[56734],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,h=p["".concat(i,".").concat(d)]||p[d]||m[d]||s;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<s;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9712:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const s={title:"Consensus Team Update",slug:"2024-03-06-consensus",authors:"dnadales",tags:["consensus"],hide_table_of_contents:!1},o=void 0,l={permalink:"/2024-03-06-consensus",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2024-03-06-consensus.md",source:"@site/blog/2024-03-06-consensus.md",title:"Consensus Team Update",description:"High level summary",date:"2024-03-06T00:00:00.000Z",formattedDate:"March 6, 2024",tags:[{label:"consensus",permalink:"/tags/consensus"}],readingTime:.675,hasTruncateMarker:!1,authors:[{name:"Damian Nadales",title:"Consensus Team Lead",url:"https://github.com/dnadales",imageURL:"https://github.com/dnadales.png",key:"dnadales"}],frontMatter:{title:"Consensus Team Update",slug:"2024-03-06-consensus",authors:"dnadales",tags:["consensus"],hide_table_of_contents:!1},prevItem:{title:"Performance & Tracing Update",permalink:"/2024-03-08-performance-and-tracing"},nextItem:{title:"Mithril Team Update",permalink:"/2024-03-06-mithril"}},i={authorsImageUrls:[void 0]},u=[{value:"High level summary",id:"high-level-summary",level:2}],c={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Completed the rebase of the production libraries for UTXO-HD on 8.9, both in ",(0,a.kt)("inlineCode",{parentName:"li"},"ouroboros-consensus"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"cardano-api")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"cardano-node"),"."),(0,a.kt)("li",{parentName:"ul"},"Measured sync and replay times and memory in UTXO-HD. The latest result are reported ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-node/issues/5495"},"here"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/ouroboros-consensus/pull/985"},"Bugfixed")," the snapshot interval."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/ouroboros-consensus/pull/983"},"Added")," an extra case to ",(0,a.kt)("inlineCode",{parentName:"li"},"isIncorrectClaimedFlag")," for ",(0,a.kt)("inlineCode",{parentName:"li"},"Babbage")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"Conway")," eras."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/ouroboros-consensus/pull/970"},"Added")," a ",(0,a.kt)("inlineCode",{parentName:"li"},"db-analyser")," analysis to get the UTXO size per slot. The result of the analysis is illustrated ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/ouroboros-consensus/pull/970#issuecomment-1981052455"},"here"),"."),(0,a.kt)("li",{parentName:"ul"},"Started integration work for Node release 8.10."),(0,a.kt)("li",{parentName:"ul"},"Reviewed the Genesis pull-requests submitted by Tweag. They are pending a final round of review."),(0,a.kt)("li",{parentName:"ul"},"Helped the current release engineer prepare the 8.9 release candidate."),(0,a.kt)("li",{parentName:"ul"},"The Consensus Team has also been helping troubleshoot known issues with 8.9 (eg snapshots causing missed leadership schedules, unexpected snapshot interval, integration tests, etc).")))}m.isMDXComponent=!0}}]);