"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[88101],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),s=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(a),c=n,m=u["".concat(d,".").concat(c)]||u[c]||h[c]||i;return a?r.createElement(m,o(o({ref:t},p),{},{components:a})):r.createElement(m,o({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},79031:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const i={title:"Hydra Team Update",slug:"2022-12-02-hydra",authors:"ch1bo",tags:["hydra"],hide_table_of_contents:!1},o=void 0,l={permalink:"/2022-12-02-hydra",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2022-12-02-hydra.md",source:"@site/blog/2022-12-02-hydra.md",title:"Hydra Team Update",description:"High-level summary",date:"2022-12-02T00:00:00.000Z",formattedDate:"December 2, 2022",tags:[{label:"hydra",permalink:"/tags/hydra"}],readingTime:.965,hasTruncateMarker:!1,authors:[{name:"Sebastian Nagel",title:"Hydra Team Lead",url:"https://github.com/ch1bo",imageURL:"https://github.com/ch1bo.png",key:"ch1bo"}],frontMatter:{title:"Hydra Team Update",slug:"2022-12-02-hydra",authors:"ch1bo",tags:["hydra"],hide_table_of_contents:!1},prevItem:{title:"Ledger Team Update",permalink:"/2022-12-09-ledger"},nextItem:{title:"DB sync Team Update",permalink:"/2022-12-01-db-sync"}},d={authorsImageUrls:[void 0]},s=[{value:"High-level summary",id:"high-level-summary",level:2},{value:"What did the team achieve this week",id:"what-did-the-team-achieve-this-week",level:2},{value:"What are the goals of next week",id:"what-are-the-goals-of-next-week",level:2}],p={toc:s},u="wrapper";function h(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-level-summary"},"High-level summary"),(0,n.kt)("p",null,"This week, the Hydra team has worked on cleaning up several things in progress\nafter last week's summit. They have extended their model-based testing (MBT)\napproach with transaction creation & observation\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/issues/410"},"#410"),", solved\n",(0,n.kt)("inlineCode",{parentName:"p"},"AcquirePointTooOld")," problems of the ",(0,n.kt)("inlineCode",{parentName:"p"},"hydra-node")," with by changing the wallet\ninitialization ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/issues/439"},"#439"),".\nAlso, the Hydra researchers updated the security proofs of the Coordinated Hydra\nHead, which are bound to be included in the Hydra HeadV1 specification."),(0,n.kt)("h2",{id:"what-did-the-team-achieve-this-week"},"What did the team achieve this week"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Monthly review & report - will also be published on our website ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/pull/644"},"#644")),(0,n.kt)("li",{parentName:"ul"},"Extended the model-based testing (MBT) with transaction creation/observation ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/410"},"#410")),(0,n.kt)("li",{parentName:"ul"},"Solve ",(0,n.kt)("inlineCode",{parentName:"li"},"AcquirePointTooOld")," problems with new wallet initialization ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/439"},"#439")),(0,n.kt)("li",{parentName:"ul"},"Fixed our hydraw deployments (EC2 instances)"),(0,n.kt)("li",{parentName:"ul"},"Created & discussed ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/blob/7e532bd1c8a840a8155cf4b0858b982308dfc3f0/docs/adr/CloseTx-validity-bounds-and-deadline-calculation-DoS.md"},"ADR21")," within tx validity work"),(0,n.kt)("li",{parentName:"ul"},"Received & discussed security proofs of Coordinated Hydra Head (requires more work)")),(0,n.kt)("h2",{id:"what-are-the-goals-of-next-week"},"What are the goals of next week"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Get ADR21 accepted & close tx validity gap in our implementation"),(0,n.kt)("li",{parentName:"ul"},"Complete review & integrate the Hydra tutorial"),(0,n.kt)("li",{parentName:"ul"},"Review latest hydra-pay work"),(0,n.kt)("li",{parentName:"ul"},"Have a LaTeX write-up of the HeadV1 (Coordinated Hydra Head) spec"),(0,n.kt)("li",{parentName:"ul"},"Get Cicero (new CI) working")))}h.isMDXComponent=!0}}]);