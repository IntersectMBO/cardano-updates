"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[84877],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(r),d=n,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return r?a.createElement(h,l(l({ref:t},u),{},{components:r})):a.createElement(h,l({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},92122:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const o={title:"Node Release Team Update",slug:"2022-11-02-release",authors:"disassembler",tags:["release"],hide_table_of_contents:!1},l=void 0,i={permalink:"/2022-11-02-release",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2022-11-02-release.md",source:"@site/blog/2022-11-02-release.md",title:"Node Release Team Update",description:"Node Reelease Update",date:"2022-11-02T00:00:00.000Z",formattedDate:"November 2, 2022",tags:[{label:"release",permalink:"/tags/release"}],readingTime:.445,hasTruncateMarker:!1,authors:[{name:"Samuel Leathers",title:"Service Reliability Manager",url:"https://github.com/disassembler",imageURL:"https://github.com/disassembler.png",key:"disassembler"}],frontMatter:{title:"Node Release Team Update",slug:"2022-11-02-release",authors:"disassembler",tags:["release"],hide_table_of_contents:!1},prevItem:{title:"Node API & CLI Team Update",permalink:"/2022-11-02-node-cli-api"},nextItem:{title:"System Test Team Update",permalink:"/2022-11-02-system-test"}},s={authorsImageUrls:[void 0]},p=[{value:"Node Reelease Update",id:"node-reelease-update",level:2},{value:"2022-10-19 - 2022-11-02",id:"2022-10-19---2022-11-02",level:2},{value:"Executive Summary",id:"executive-summary",level:3},{value:"Completed",id:"completed",level:3},{value:"In Progress",id:"in-progress",level:3}],u={toc:p},c="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"node-reelease-update"},"Node Reelease Update"),(0,n.kt)("h2",{id:"2022-10-19---2022-11-02"},"2022-10-19 - 2022-11-02"),(0,n.kt)("h3",{id:"executive-summary"},"Executive Summary"),(0,n.kt)("p",null,"The team is formalizing the new release process and team structure. Both preview/preprod environments have been reset,\na temporary pv8 environment has been created for testing SECP before preview is updated to protocol version 8."),(0,n.kt)("p",null,"1.35.4 release candidates have been created and are being tested internally and externally."),(0,n.kt)("h3",{id:"completed"},"Completed"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/commits/1.35.4-rc1"},"1.35.4-rc1 tag")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/commits/1.35.4-rc1"},"1.35.4-rc2 tag (config changes only for preview)")),(0,n.kt)("li",{parentName:"ul"},"[CHaP Migration]"," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4540"},"https://github.com/input-output-hk/cardano-node/pull/4540"),")")),(0,n.kt)("h3",{id:"in-progress"},"In Progress"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-node/commits/release/1.35"},"Release 1.35.4")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node-tests/blob/tag_test_1.35.4_rc1/src_docs/source/test_results/node/tag_1_35_4_rc1.rst"},"Test Status")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://updates.cardano.intersectmbo.org/2022-08-12-sre"},"Cicero CI Migration")))))}m.isMDXComponent=!0}}]);