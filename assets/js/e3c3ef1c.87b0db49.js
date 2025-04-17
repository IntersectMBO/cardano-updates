"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[9107],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=s(a),m=n,d=h["".concat(p,".").concat(m)]||h[m]||c[m]||o;return a?r.createElement(d,i(i({ref:t},u),{},{components:a})):r.createElement(d,i({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[h]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4394:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const o={title:"Hydra Team Update",slug:"2022-11-04-hydra",authors:"ch1bo",tags:["hydra"],hide_table_of_contents:!1},i=void 0,l={permalink:"/2022-11-04-hydra",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2022-11-04-hydra.md",source:"@site/blog/2022-11-04-hydra.md",title:"Hydra Team Update",description:"High level summary",date:"2022-11-04T00:00:00.000Z",formattedDate:"November 4, 2022",tags:[{label:"hydra",permalink:"/tags/hydra"}],readingTime:.935,hasTruncateMarker:!1,authors:[{name:"Sebastian Nagel",title:"Hydra Team Lead",url:"https://github.com/ch1bo",imageURL:"https://github.com/ch1bo.png",key:"ch1bo"}],frontMatter:{title:"Hydra Team Update",slug:"2022-11-04-hydra",authors:"ch1bo",tags:["hydra"],hide_table_of_contents:!1},prevItem:{title:"Network Team Update",permalink:"/2022-11-11-network"},nextItem:{title:"Mithril Team Update",permalink:"/2022-11-04-mithril"}},p={authorsImageUrls:[void 0]},s=[{value:"High level summary",id:"high-level-summary",level:2},{value:"What did the team achieve this week",id:"what-did-the-team-achieve-this-week",level:2},{value:"What are the goals of next week",id:"what-are-the-goals-of-next-week",level:2}],u={toc:s},h="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(h,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,n.kt)("p",null,"This week, the hydra team first re-deployed the latest Hydra scripts to the re-spun ",(0,n.kt)("inlineCode",{parentName:"p"},"preview")," network, see ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra-poc/releases/tag/0.8.0"},"0.8.0 release notes"),". They also completed implementation of ",(0,n.kt)("a",{parentName:"p",href:"https://hydra.family/head-protocol/adr/18/"},"ADR18")," and worked on the validators, but development got impacted by some CI flakyness. The team also met to discuss hard forks & protocol parameter updates ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra-poc/issues/195#issuecomment-1300503557"},"#195")," and alignment of the specification document with auditors."),(0,n.kt)("h2",{id:"what-did-the-team-achieve-this-week"},"What did the team achieve this week"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Complete and merge ADR18 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra-poc/pull/579"},"#579")),(0,n.kt)("li",{parentName:"ul"},"Re-deploy hydra scripts to respun ",(0,n.kt)("inlineCode",{parentName:"li"},"preview")," network, see ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra-poc/releases/tag/0.8.0"},"0.8.0 release notes")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra-poc/pull/595"},"#595")),(0,n.kt)("li",{parentName:"ul"},"Have first gap of ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra-poc/pull/452"},"#452")," in review."),(0,n.kt)("li",{parentName:"ul"},"Non-achievement: Flaky CI for TUI was impacting us, so we investigated this a lot."),(0,n.kt)("li",{parentName:"ul"},"Engineering meeting to discuss hard forks and protocol parameter updates ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra-poc/issues/195#issuecomment-1300503557"},"#195")),(0,n.kt)("li",{parentName:"ul"},"Met the internal audit team on the specification to set scope, expectations and collected requirements/open questions."),(0,n.kt)("li",{parentName:"ul"},"Drafted project scope for an external audit RFP.")),(0,n.kt)("h2",{id:"what-are-the-goals-of-next-week"},"What are the goals of next week"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Implement event-sourced persistence ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra-poc/issues/580"},"#580")),(0,n.kt)("li",{parentName:"ul"},"Answer the internal auditor","\u2019","s questions"),(0,n.kt)("li",{parentName:"ul"},"Have a draft RFP ready for a first review internally"),(0,n.kt)("li",{parentName:"ul"},"Close some gaps ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra-poc/pull/452"},"#452"))))}c.isMDXComponent=!0}}]);