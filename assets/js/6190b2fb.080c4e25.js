"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[48600],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(a),m=r,h=c["".concat(p,".").concat(m)]||c[m]||d[m]||i;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},35996:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const i={title:"Developer Experience Update",slug:"2023-06-09-developer-experience",authors:"angerman",tags:["devx"],hide_table_of_contents:!1},o=void 0,l={permalink:"/2023-06-09-developer-experience",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2023-06-09-developer-experience.md",source:"@site/blog/2023-06-09-developer-experience.md",title:"Developer Experience Update",description:"High level summary",date:"2023-06-09T00:00:00.000Z",formattedDate:"June 9, 2023",tags:[{label:"devx",permalink:"/tags/devx"}],readingTime:2.035,hasTruncateMarker:!1,authors:[{name:"Moritz Angermann",title:"Head of Developer Experience",url:"https://github.com/angerman",imageURL:"https://github.com/angerman.png",key:"angerman"}],frontMatter:{title:"Developer Experience Update",slug:"2023-06-09-developer-experience",authors:"angerman",tags:["devx"],hide_table_of_contents:!1},prevItem:{title:"Crypto Team Update",permalink:"/2023-06-09-crypto"},nextItem:{title:"Hydra Team Update",permalink:"/2023-06-09-hydra"}},p={authorsImageUrls:[void 0]},s=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Lower level summary",id:"lower-level-summary",level:2},{value:"build support &amp; maintainance",id:"build-support--maintainance",level:3},{value:"compiler upgrades",id:"compiler-upgrades",level:3},{value:"CHaP (cardano-haskell-packages)",id:"chap-cardano-haskell-packages",level:3},{value:"GitHub Actions",id:"github-actions",level:3},{value:"iohk-nix",id:"iohk-nix",level:3},{value:"haskell.nix",id:"haskellnix",level:3},{value:"devx",id:"devx",level:3},{value:"upstream tooling",id:"upstream-tooling",level:3}],u={toc:s},c="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,r.kt)("p",null,"The Developer Experience team has been devoted to day-to-day troubleshooting and support of various elements including build failures, compiler upgrades, the maintaince of our cardano-haskell-packages (CHaP), and infrastructure like GitHub Actions, iohk-nix, haskell.nix, and devx. Furthermore, we have also contributed to upstream tooling improvements."),(0,r.kt)("h2",{id:"lower-level-summary"},"Lower level summary"),(0,r.kt)("h3",{id:"build-support--maintainance"},"build support & maintainance"),(0,r.kt)("p",null,"Our DevX team has been instrumental in troubleshooting and fixing a wide range of issues, from broken windows builds and obscure ",(0,r.kt)("inlineCode",{parentName:"p"},"LoadDLL")," errors to ",(0,r.kt)("inlineCode",{parentName:"p"},"blst")," integration across Nix and Github CI. We've also initiated automatic uploads for release assets. Our efforts in streamlining complex CI setups have paid off, with some repositories like ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-base"},"cardano-base")," experiencing significant reductions in CI complexity."),(0,r.kt)("h3",{id:"compiler-upgrades"},"compiler upgrades"),(0,r.kt)("p",null,"After the support for 9.2 across our libraries, we have started working on 9.6 compabilitiy as well. This move brings us closer to the upstream compiler, facilitating the contribution of patches and enabling early detection of regressions. In addition, we're prioritizing compaining even stronger for better backwards compatibility."),(0,r.kt)("h3",{id:"chap-cardano-haskell-packages"},"CHaP (cardano-haskell-packages)"),(0,r.kt)("p",null,"We relocated the underlying tooling, (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/foliage"},"foliage"),"), for ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-haskell-packages"},"CHaP")," into the IOG organization. Furthermore, we have introduced ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-haskell-packages/pull/260"},"improved tooling to quickly add constraints to packages"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-haskell-packages/issues/285"},"better error reporting for add-revision")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/foliage/pull/63"},"better hackage url compatibility")," to facilitate easer usage of CHaP."),(0,r.kt)("h3",{id:"github-actions"},"GitHub Actions"),(0,r.kt)("p",null,"Our repository, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/actions"},"input-output-hk/actions"),", now houses the necessary actions for installing pre-requisites to build Cardano projects using GitHub Actions. Leveraging the ",(0,r.kt)("inlineCode",{parentName:"p"},"base")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"haskell")," install actions has allowed us to simplify workflows in the repos, focusing primarily on invoking ",(0,r.kt)("inlineCode",{parentName:"p"},"cabal"),"."),(0,r.kt)("h3",{id:"iohk-nix"},"iohk-nix"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/iohk-nix"},"iohk-nix")," repository has undergone a major revamp and now provides pre-built packages of the cryptographic libraries IOG utilizes for GitHub Runners. The key components we use, ",(0,r.kt)("inlineCode",{parentName:"p"},"sodium"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"blst"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"secp256k1"),", are also fixed to certain revisions within the ",(0,r.kt)("inlineCode",{parentName:"p"},"iohk-nix")," repository."),(0,r.kt)("h3",{id:"haskellnix"},"haskell.nix"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/haskell.nix"},"Haskell.nix")," has been maintained and updated with the addition of GHC 9.6.2 and GHC 8.2.8. After discovering performance regression in the native bignum backend, we switched the default bignum backend to ",(0,r.kt)("inlineCode",{parentName:"p"},"gmp"),"."),(0,r.kt)("h3",{id:"devx"},"devx"),(0,r.kt)("p",null,"The relatively new ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/devx"},"devx")," repository is where we experiment with a single nix development shell that aims to suffice for most use-cases at IOG. This initiative is expected to eliminate a number of CI failures related to project-build and shell interaction problems. The ",(0,r.kt)("inlineCode",{parentName:"p"},"devx")," repository's readme has been updated to reflect its purpose and usage guidelines."),(0,r.kt)("h3",{id:"upstream-tooling"},"upstream tooling"),(0,r.kt)("p",null,"Our team remains committed to enhancing upstream tooling, with ongoing contributions to GHC, Cabal, and Nix."))}d.isMDXComponent=!0}}]);