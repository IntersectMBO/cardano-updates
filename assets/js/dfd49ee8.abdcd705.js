"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[60247],{3905:(e,r,t)=>{t.d(r,{Zo:()=>m,kt:()=>f});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},m=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=s(t),d=a,f=p["".concat(l,".").concat(d)]||p[d]||u[d]||o;return t?n.createElement(f,i(i({ref:r},m),{},{components:t})):n.createElement(f,i({ref:r},m))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},72396:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=t(87462),a=(t(67294),t(3905));const o={title:"Performance & Tracing Team Update",slug:"2022-10-28-performance-and-tracing",authors:"deepfire",tags:["performance-tracing"],hide_table_of_contents:!1},i=void 0,c={permalink:"/2022-10-28-performance-and-tracing",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2022-10-28-performance-and-tracing.md",source:"@site/blog/2022-10-28-performance-and-tracing.md",title:"Performance & Tracing Team Update",description:"High level summary",date:"2022-10-28T00:00:00.000Z",formattedDate:"October 28, 2022",tags:[{label:"performance-tracing",permalink:"/tags/performance-tracing"}],readingTime:1.155,hasTruncateMarker:!1,authors:[{name:"Serge Kosyrev",title:"Performance and Tracing Team Lead",url:"https://github.com/deepfire",imageURL:"https://github.com/deepfire.png",key:"deepfire"}],frontMatter:{title:"Performance & Tracing Team Update",slug:"2022-10-28-performance-and-tracing",authors:"deepfire",tags:["performance-tracing"],hide_table_of_contents:!1},prevItem:{title:"Network Team Update",permalink:"/2022-10-28-network"},nextItem:{title:"SRE Team Update",permalink:"/2022-08-12-sre"}},l={authorsImageUrls:[void 0]},s=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Executive summary",id:"executive-summary",level:2}],m={toc:s},p="wrapper";function u(e){let{components:r,...t}=e;return(0,a.kt)(p,(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,a.kt)("p",null,"On the performance side, the team ran benchmarks for the the P2P feature and the 1.35.4 release.  We finished a prototype for performance data publishing.  We almost finished the local deployment backend for the workbench using the new SRE deployment infra.  We worked on fixing and improving our data analysis pipeline."),(0,a.kt)("p",null,"On the tracing side, the team worked on isolating a critical issue causing message loss in the remote tracing backend.  The issue was resolved and we now have proper end-to-end coverage for the scenario."),(0,a.kt)("h2",{id:"executive-summary"},"Executive summary"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The new tracing system public release is getting closer, as we're resolving remaining rough edges that are discovered in full-scale deployments.  The local benchmarks we ran were already showing improvement relative to legacy tracing, so we expect similar results at full scale."),(0,a.kt)("li",{parentName:"ul"},"The first (local deployment) iteration of benchmarking adopting the new SRE deployment infra is nearly done.  We thank Michael Fellinger and Robin Stumm for their assistance.  Two further phases remain:  CI integration and cloud deployment."),(0,a.kt)("li",{parentName:"ul"},"The benchmarking data publishing prototype is ready.  This serves as a springboard for both opening our performance assessment workflow (to support the wider Cardano developer community), and for data provision to the business community.  Our next steps are to secure a permanent deployment for this mechanism and to integrate it into the benchmarking infrastructure.  This requires collaboration with SRE.")))}u.isMDXComponent=!0}}]);