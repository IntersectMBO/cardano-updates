"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[19756],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(a),h=r,d=p["".concat(s,".").concat(h)]||p[h]||m[h]||i;return a?n.createElement(d,o(o({ref:t},u),{},{components:a})):n.createElement(d,o({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},4142:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const i={title:"Hydra Team Update",slug:"2024-08-07-hydra",authors:["noonio"],tags:["hydra"],hide_table_of_contents:!1},o=void 0,l={permalink:"/2024-08-07-hydra",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2024-08-07-hydra.md",source:"@site/blog/2024-08-07-hydra.md",title:"Hydra Team Update",description:"High-level summary",date:"2024-08-07T00:00:00.000Z",formattedDate:"August 7, 2024",tags:[{label:"hydra",permalink:"/tags/hydra"}],readingTime:.85,hasTruncateMarker:!1,authors:[{name:"Noon van der Silk",title:"Software Engineering Lead",url:"https://github.com/noonio",imageURL:"https://github.com/noonio.png",key:"noonio"}],frontMatter:{title:"Hydra Team Update",slug:"2024-08-07-hydra",authors:["noonio"],tags:["hydra"],hide_table_of_contents:!1},prevItem:{title:"Consensus Team Update",permalink:"/2024-08-07-consensus"},nextItem:{title:"Mithril Team Update",permalink:"/2024-08-07-mithril"}},s={authorsImageUrls:[void 0]},c=[{value:"High-level summary",id:"high-level-summary",level:3},{value:"What did the team achieve?",id:"what-did-the-team-achieve",level:3},{value:"What&#39;s next?",id:"whats-next",level:3}],u={toc:c},p="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"high-level-summary"},"High-level summary"),(0,r.kt)("p",null,"We made good progress on some bugfixes; alongside moving the spec into a repo\nwhere we can transition to more Agda. We made some minor improvements to our\ntests, and spent a bit of time thinking about the details of the\nimplementation of incremental commits and the blockfrost chain layer idea. We\nwill continue on wrapping up the bugs, and preparing for Rare Evo with our new\nlanding page."),(0,r.kt)("h3",{id:"what-did-the-team-achieve"},"What did the team achieve?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixing bug around transactions during a decommit ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/cardano-scaling/hydra/pull/1540"},"#1540")),(0,r.kt)("li",{parentName:"ul"},"Updated the incremental commit spec ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/cardano-scaling/hydra/issues/1484"},"#1484")),(0,r.kt)("li",{parentName:"ul"},"Use Agda-enhanced spec as the one on hydra.family ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/cardano-scaling/hydra-formal-specification/issues/3"},"#3")),(0,r.kt)("li",{parentName:"ul"},"Update dependency to use cardano-api 9.1 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/quickcheck-contractmodel/pull/42"},"#42")),(0,r.kt)("li",{parentName:"ul"},"Add some checks around era changes in tests ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/cardano-scaling/hydra/pull/1546"},"#1546")),(0,r.kt)("li",{parentName:"ul"},"Re-thinking incremental commit details ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/cardano-scaling/hydra/issues/199#issuecomment-2263319327"},"#199")),(0,r.kt)("li",{parentName:"ul"},"Further refinement of the blockfrost chain layer idea ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/cardano-scaling/hydra/issues/1305"},"#1305"))),(0,r.kt)("h3",{id:"whats-next"},"What's next?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Merge bugfix for unclosable head in Conway on preview ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/cardano-scaling/hydra/issues/1545"},"#1545")),(0,r.kt)("li",{parentName:"ul"},"Publish new landing page ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/cardano-scaling/hydra/pull/1549"},"#1549")),(0,r.kt)("li",{parentName:"ul"},"Continue network reliability work"),(0,r.kt)("li",{parentName:"ul"},"Support Hydra demo at Rare Evo.")))}m.isMDXComponent=!0}}]);