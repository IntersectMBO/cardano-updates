"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[58236],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},i=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,h=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(h,p(p({ref:t},i),{},{components:n})):r.createElement(h,p({ref:t},i))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:a,p[1]=l;for(var s=2;s<o;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},82549:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={title:"DB Sync Team Update",slug:"2024-04-17-db-sync",authors:"kderme",tags:["db-sync"],hide_table_of_contents:!1},p=void 0,l={permalink:"/2024-04-17-db-sync",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2024-04-17-db-sync.md",source:"@site/blog/2024-04-17-db-sync.md",title:"DB Sync Team Update",description:"High level summary",date:"2024-04-17T00:00:00.000Z",formattedDate:"April 17, 2024",tags:[{label:"db-sync",permalink:"/tags/db-sync"}],readingTime:.465,hasTruncateMarker:!1,authors:[{name:"Kostas Dermentzis",title:"Cardano DB-Sync Software Engineer",url:"https://github.com/kderme",imageURL:"https://github.com/kderme.png",key:"kderme"}],frontMatter:{title:"DB Sync Team Update",slug:"2024-04-17-db-sync",authors:"kderme",tags:["db-sync"],hide_table_of_contents:!1},prevItem:{title:"Consensus Team Update",permalink:"/2024-04-17-consensus"},nextItem:{title:"Mithril Team Update",permalink:"/2024-04-17-mithril"}},c={authorsImageUrls:[void 0]},s=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Lower level summary",id:"lower-level-summary",level:2}],i={toc:s},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,a.kt)("p",null,"The DBSync team has released 1 version for mainnet ",(0,a.kt)("inlineCode",{parentName:"p"},"13.2.0.1")," and 3 pre-releases for sanchonet\n",(0,a.kt)("inlineCode",{parentName:"p"},"4.0.0"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"4.1.0"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"4.2.0"),". We have continued the integration of Conway (CIP-1694) and the support\nof off-chain data (CIP-100)"),(0,a.kt)("h2",{id:"lower-level-summary"},"Lower level summary"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"CI build and docker fixes\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/IntersectMBO/cardano-db-sync/pull/1670"},"#1670"),"\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/IntersectMBO/cardano-db-sync/pull/1668"},"#1668"),"\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/IntersectMBO/cardano-db-sync/pull/1667"},"#1667"),"\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/IntersectMBO/cardano-db-sync/pull/1662"},"#1662"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Improved committee representation\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/IntersectMBO/cardano-db-sync/pull/1655"},"#1662"),"\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/IntersectMBO/cardano-db-sync/issues/1571"},"#1571"),"\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/IntersectMBO/cardano-db-sync/issues/1633"},"#1633"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Offchain metadata partial support\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/IntersectMBO/cardano-db-sync/pull/1654"},"#1654"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Refactoring and tech-debt\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/IntersectMBO/cardano-db-sync/pull/1635"},"#1635"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Fixing epoch_stake_progress\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/IntersectMBO/cardano-db-sync/issues/1620"},"#1620"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Config and modulatirty improvements\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/IntersectMBO/cardano-db-sync/pull/1653"},"#1653"),"\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/IntersectMBO/cardano-db-sync/pull/1652"},"#1652"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Updating to node-8.10-pre. Better support for deposits, refunds and proposal state\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/IntersectMBO/cardano-db-sync/pull/1673"},"#1673")))))}u.isMDXComponent=!0}}]);