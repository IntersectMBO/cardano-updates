"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[31349],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),m=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=m(r),d=o,y=u["".concat(l,".").concat(d)]||u[d]||c[d]||a;return r?n.createElement(y,s(s({ref:t},p),{},{components:r})):n.createElement(y,s({ref:t},p))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var m=2;m<a;m++)s[m]=r[m];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},61256:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>m});var n=r(87462),o=(r(67294),r(3905));const a={title:"System Test Team Update",slug:"2022-12-01-system-test",authors:"dorin100",tags:["system-test"],hide_table_of_contents:!1},s=void 0,i={permalink:"/2022-12-01-system-test",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2022-12-01-system-test.md",source:"@site/blog/2022-12-01-system-test.md",title:"System Test Team Update",description:"High level summary",date:"2022-12-01T00:00:00.000Z",formattedDate:"December 1, 2022",tags:[{label:"system-test",permalink:"/tags/system-test"}],readingTime:.765,hasTruncateMarker:!1,authors:[{name:"Dorin Solomon",title:"System Test Team Lead",url:"https://github.com/dorin100",imageURL:"https://github.com/dorin100.png",key:"dorin100"}],frontMatter:{title:"System Test Team Update",slug:"2022-12-01-system-test",authors:"dorin100",tags:["system-test"],hide_table_of_contents:!1},prevItem:{title:"Mithril Team Update",permalink:"/2022-12-01-mithril"},nextItem:{title:"Consensus Team Update",permalink:"/2022-11-30-consensus"}},l={authorsImageUrls:[void 0]},m=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Workstreams",id:"workstreams",level:2},{value:"Framework improvements:",id:"framework-improvements",level:3},{value:"DB-Sync:",id:"db-sync",level:3}],p={toc:m},u="wrapper";function c(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,o.kt)("p",null,"During the last 2 weeks we did more improvements on our Test Framework, planned the testing of the ",(0,o.kt)("em",{parentName:"p"},"P2P Single\nRelay")," functionality, and also tested some DB-Sync tags."),(0,o.kt)("h2",{id:"workstreams"},"Workstreams"),(0,o.kt)("h3",{id:"framework-improvements"},"Framework improvements:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"moved the System Test CLI Pipelines from BuildKite to Github Actions"),(0,o.kt)("li",{parentName:"ul"},"improved the reporting tools to support the rerun of the failled tests and update of the reports "),(0,o.kt)("li",{parentName:"ul"},"added support for Github API in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/mkoura/report-aggregator"},"report-aggregator"),", so reports will be generated from the GitHub nightly jobs from now on"),(0,o.kt)("li",{parentName:"ul"},"added support for mixed topology - P2P, legacy, mixed topologies"),(0,o.kt)("li",{parentName:"ul"},"planned the P2P Single Relay system test activities "),(0,o.kt)("li",{parentName:"ul"},"added support to start regression tests with PV8 + better selection of tests")),(0,o.kt)("h3",{id:"db-sync"},"DB-Sync:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"confirmed that DB-Sync release 13.0.5 is compatible with Node release 1.35.4 + Protocol Version 8 (on the Preview environment)"),(0,o.kt)("li",{parentName:"ul"},"tested a couple db-sync tags - 13.1.0.0-rc1, 13.1.0.0-rc2")))}c.isMDXComponent=!0}}]);