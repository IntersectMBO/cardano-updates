"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[76762],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=o.createContext({}),p=function(e){var t=o.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return o.createElement(u.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=p(r),d=n,h=c["".concat(u,".").concat(d)]||c[d]||m[d]||a;return r?o.createElement(h,i(i({ref:t},l),{},{components:r})):o.createElement(h,i({ref:t},l))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[c]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},63341:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=r(87462),n=(r(67294),r(3905));const a={title:"Network Team Update",slug:"2023-05-12-network",authors:"coot",tags:["network"],hide_table_of_contents:!1},i=void 0,s={permalink:"/2023-05-12-network",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2023-05-12-network.md",source:"@site/blog/2023-05-12-network.md",title:"Network Team Update",description:"High level summary",date:"2023-05-12T00:00:00.000Z",formattedDate:"May 12, 2023",tags:[{label:"network",permalink:"/tags/network"}],readingTime:1.79,hasTruncateMarker:!1,authors:[{name:"Marcin Szamotulski",title:"Network Team Lead",url:"https://github.com/coot",imageURL:"https://github.com/coot.png",key:"coot"}],frontMatter:{title:"Network Team Update",slug:"2023-05-12-network",authors:"coot",tags:["network"],hide_table_of_contents:!1},prevItem:{title:"Hydra Team Update",permalink:"/2023-05-12-hydra"},nextItem:{title:"Ledger Team Update",permalink:"/2023-05-05-ledger"}},u={authorsImageUrls:[void 0]},p=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Detailed summary",id:"detailed-summary",level:2}],l={toc:p},c="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,o.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,n.kt)("p",null,"We started working on a new way to switch between root & ledger peers (see\nbelow).  We continued to work on ",(0,n.kt)("inlineCode",{parentName:"p"},"eclipse-evasion"),".  We merged changes to\nHandshake contributed by Galois Inc.  We made improvements to our tests (fixed\na flaky test, added cddl specs for ",(0,n.kt)("inlineCode",{parentName:"p"},"NodeToNodeVersionData")," and\n",(0,n.kt)("inlineCode",{parentName:"p"},"NodeToClientVersionData"),").  We improved our CI and automated the process of\nreleasing new package version to ",(0,n.kt)("inlineCode",{parentName:"p"},"CHaP"),"."),(0,n.kt)("h2",{id:"detailed-summary"},"Detailed summary"),(0,n.kt)("p",null,"We continued to work on testing ",(0,n.kt)("inlineCode",{parentName:"p"},"eclipse-evasion"),"."),(0,n.kt)("p",null,"We came up with an idea to limit how full node wallets relay on root peers\n(currently operated by IOG, in future also CF and Emurgo).  We designed\na switch to use ledger peers if the node tip is close enough to the current\ntime.  For more details see ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/issues/4530"},"#4530"),"."),(0,n.kt)("p",null,"We merged changes to the handshake mini-protocol which allow one to query\nserver's ",(0,n.kt)("inlineCode",{parentName:"p"},"node-to-node")," / ",(0,n.kt)("inlineCode",{parentName:"p"},"node-to-client")," parameters.  We are grateful to\nGalois Inc. for implementing it, ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/issues/4256"},"#4256")," and ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/issues/4538"},"#4538"),".  We published new version\nof packages to CHaP ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-haskell-packages/pull/253"},"chap-#253"),"."),(0,n.kt)("p",null,"We added ",(0,n.kt)("inlineCode",{parentName:"p"},"DiffusionError")," wrapper.  Thanks to it, ",(0,n.kt)("inlineCode",{parentName:"p"},"ouroboros-consensus")," will\nnot duplicate diffusion errors messages in the log, ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/issues/4537"},"#4537"),"."),(0,n.kt)("p",null,"We fixed an issue which caused one of our tests to be flaky, ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/issues/4515"},"#4515"),"."),(0,n.kt)("p",null,"We added cddl tests for ",(0,n.kt)("inlineCode",{parentName:"p"},"NodeToNodeVersionData")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"NodeToClientVersionData"),":\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/issues/4540"},"#4540"),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/issues/4544"},"#4544")," (in review)."),(0,n.kt)("p",null,"We wrote scripts which will help us release packages as well as verify that we\nreleased all the package necessary to build the newest set of packages,\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/issues/4542"},"#4542"),"."),(0,n.kt)("p",null,"We renamed the consensus startup tracer and make sure it doesn't log\n",(0,n.kt)("inlineCode",{parentName:"p"},"ExitSuccess")," exceptions, ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-consensus/pulls/71"},"consensus-#71"),"."),(0,n.kt)("p",null,"We reviewed PR which adds ",(0,n.kt)("inlineCode",{parentName:"p"},"RawBearer")," API, ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/issues/4395"},"#4395"),"."),(0,n.kt)("p",null,"We made series of improvements to our CI:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-network/issues/4539"},"#4539"),": we don't need to install cryptographic libraries in CI;"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-network/issues/4545"},"#4545"),": Javier Sagredo (consensus) cleaned up CI after ",(0,n.kt)("inlineCode",{parentName:"li"},"consensus")," moved\nto a new repo;"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-network/issues/4546"},"#4546"),": we switched to use ",(0,n.kt)("a",{parentName:"li",href:"https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/managing-a-merge-queue"},"GitHub merge queues"),";"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-network/issues/4549"},"#4549"),": we made it possible to trigger building haddocks manually;"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-network/issues/4553"},"#4553"),": we fixed and enhanced caching of building dependencies.")))}m.isMDXComponent=!0}}]);