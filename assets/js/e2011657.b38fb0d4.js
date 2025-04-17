"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[30849],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var h=r.createContext({}),p=function(e){var t=r.useContext(h),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(h.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,h=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(a),d=n,c=m["".concat(h,".").concat(d)]||m[d]||s[d]||o;return a?r.createElement(c,i(i({ref:t},u),{},{components:a})):r.createElement(c,i({ref:t},u))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var h in t)hasOwnProperty.call(t,h)&&(l[h]=t[h]);l.originalType=e,l[m]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},51505:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const o={title:"Hydra Team Update",slug:"2023-03-17-hydra",authors:"ch1bo",tags:["hydra"],hide_table_of_contents:!1},i=void 0,l={permalink:"/2023-03-17-hydra",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2023-03-17-hydra.md",source:"@site/blog/2023-03-17-hydra.md",title:"Hydra Team Update",description:"High-level summary",date:"2023-03-17T00:00:00.000Z",formattedDate:"March 17, 2023",tags:[{label:"hydra",permalink:"/tags/hydra"}],readingTime:1.015,hasTruncateMarker:!1,authors:[{name:"Sebastian Nagel",title:"Hydra Team Lead",url:"https://github.com/ch1bo",imageURL:"https://github.com/ch1bo.png",key:"ch1bo"}],frontMatter:{title:"Hydra Team Update",slug:"2023-03-17-hydra",authors:"ch1bo",tags:["hydra"],hide_table_of_contents:!1},prevItem:{title:"Crypto Team Update",permalink:"/2023-03-17-crypto"},nextItem:{title:"Ledger Team Update",permalink:"/2023-03-17-ledger"}},h={authorsImageUrls:[void 0]},p=[{value:"High-level summary",id:"high-level-summary",level:2},{value:"What did the team achieve this week",id:"what-did-the-team-achieve-this-week",level:2},{value:"What are the goals of next week",id:"what-are-the-goals-of-next-week",level:2}],u={toc:p},m="wrapper";function s(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-level-summary"},"High-level summary"),(0,n.kt)("p",null,"This week, the Hydra team has continued work on the mainnet compatibility of the\nhydra-node. They added a golden test suite for ",(0,n.kt)("inlineCode",{parentName:"p"},"hydra-plutus")," scripts, added\nsome detection of ",(0,n.kt)("inlineCode",{parentName:"p"},"hydra-node")," misconfiguration, established a limit of 100 ADA\nper commit and other smaller tasks to prepare for a mainnet beta release."),(0,n.kt)("p",null,"Next week there will be a small team workshop to push for demonstrating a Hydra\nHead on the Cardano mainnet, ideally just in time for the monthly review\nmeeting. See the hydra channels on the IOG Technical Community discord server\nfor details."),(0,n.kt)("h2",{id:"what-did-the-team-achieve-this-week"},"What did the team achieve this week"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Implement a 100 ADA hard-coded commit limit in the hydra-node\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/pull/763"},"#763")),(0,n.kt)("li",{parentName:"ul"},"Pay back funds to faucet after smoke-test run\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/pull/773"},"#773")),(0,n.kt)("li",{parentName:"ul"},"Setup custom github runner for smoke-tests on mainnet\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/pull/775"},"#775")),(0,n.kt)("li",{parentName:"ul"},"Created golden tests to assure the script hash stays the same between\nchanges ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/pull/772"},"#772")),(0,n.kt)("li",{parentName:"ul"},"Removed hardcoded error codes in plutus scripts\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/pull/768"},"#768")),(0,n.kt)("li",{parentName:"ul"},"Detect misconfiguration of a hydra-node given persistent state\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/pull/767"},"#767")),(0,n.kt)("li",{parentName:"ul"},"Met with potential users for hydra-pay"),(0,n.kt)("li",{parentName:"ul"},"Prepared hydra workshop")),(0,n.kt)("h2",{id:"what-are-the-goals-of-next-week"},"What are the goals of next week"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Hydra monthly meeting"),(0,n.kt)("li",{parentName:"ul"},"Open a multi-party head on mainnet"),(0,n.kt)("li",{parentName:"ul"},"Complete mainnet compatibility feature")))}s.isMDXComponent=!0}}]);