"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[60280],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>k});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var p=r.createContext({}),l=function(e){var t=r.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(o),h=n,k=c["".concat(p,".").concat(h)]||c[h]||d[h]||a;return o?r.createElement(k,i(i({ref:t},u),{},{components:o})):r.createElement(k,i({ref:t},u))}));function k(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=o[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}h.displayName="MDXCreateElement"},91321:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=o(87462),n=(o(67294),o(3905));const a={title:"Network Team Update",slug:"2023-08-18-network",authors:"coot",tags:["network"],hide_table_of_contents:!1},i=void 0,s={permalink:"/2023-08-18-network",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2023-08-18-network.md",source:"@site/blog/2023-08-18-network.md",title:"Network Team Update",description:"High-level overview of sprint 42",date:"2023-08-18T00:00:00.000Z",formattedDate:"August 18, 2023",tags:[{label:"network",permalink:"/tags/network"}],readingTime:2.09,hasTruncateMarker:!1,authors:[{name:"Marcin Szamotulski",title:"Network Team Lead",url:"https://github.com/coot",imageURL:"https://github.com/coot.png",key:"coot"}],frontMatter:{title:"Network Team Update",slug:"2023-08-18-network",authors:"coot",tags:["network"],hide_table_of_contents:!1},prevItem:{title:"Ledger Team Update",permalink:"/2023-08-18-ledger"},nextItem:{title:"SRE Team Update",permalink:"/2023-08-18-sre"}},p={authorsImageUrls:[void 0]},l=[{value:"High-level overview of sprint 42",id:"high-level-overview-of-sprint-42",level:2},{value:"Eclipse Evasion",id:"eclipse-evasion",level:3},{value:"CDDL specs for protocol codecs",id:"cddl-specs-for-protocol-codecs",level:3},{value:"Ouroboros-Network-Framework API changes",id:"ouroboros-network-framework-api-changes",level:3},{value:"Nix setup (CI)",id:"nix-setup-ci",level:3},{value:"Other contributions",id:"other-contributions",level:2},{value:"Cardano Network Service Assurance",id:"cardano-network-service-assurance",level:3},{value:"Galois Review",id:"galois-review",level:3},{value:"CI",id:"ci",level:3},{value:"Bootstrap Peers",id:"bootstrap-peers",level:3}],u={toc:l},c="wrapper";function d(e){let{components:t,...o}=e;return(0,n.kt)(c,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-level-overview-of-sprint-42"},"High-level overview of ",(0,n.kt)("a",{parentName:"h2",href:"https://github.com/orgs/input-output-hk/projects/19/views/16?filterQuery=sprint%3A%22sprint+42%22"},"sprint 42")),(0,n.kt)("h3",{id:"eclipse-evasion"},"Eclipse Evasion"),(0,n.kt)("p",null,"We merged and released a new version of the ",(0,n.kt)("inlineCode",{parentName:"p"},"ouroboros-network")," package (version\n",(0,n.kt)("inlineCode",{parentName:"p"},"0.9.0.0"),") which includes ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/issues/3886"},"big ledger peers feature"),".\nThis is the primary peer selection mechanism to defend against eclipses.   We\nalso prepared a PR to updated ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-consensus/pull/165"},(0,n.kt)("inlineCode",{parentName:"a"},"ouroboros-cosnensus")),"\nand ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ekg-forward/pull/30"},(0,n.kt)("inlineCode",{parentName:"a"},"ekg-forward"))," packages."),(0,n.kt)("h3",{id:"cddl-specs-for-protocol-codecs"},"CDDL specs for protocol codecs"),(0,n.kt)("p",null,"We made the ",(0,n.kt)("inlineCode",{parentName:"p"},"cddl")," spec for network codec more inline with the implementation\nwhich is highly polymorphic.  ",(0,n.kt)("inlineCode",{parentName:"p"},"cddl")," doesn't have the notion of polymorphism,\nbut has ",(0,n.kt)("inlineCode",{parentName:"p"},"any")," which can generate any valid cbor term.  We matched it with an\n",(0,n.kt)("inlineCode",{parentName:"p"},"Any")," type on the Haskell side and made all remaining tests & specs use it.\nThis simplified the specifications and made it easier to understand which parts\nare defined in the spec, and which parts are left unspecified.  See\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/issues/4595"},"ouroboros-network#4595"),"."),(0,n.kt)("h3",{id:"ouroboros-network-framework-api-changes"},"Ouroboros-Network-Framework API changes"),(0,n.kt)("p",null,"We also released ",(0,n.kt)("inlineCode",{parentName:"p"},"ouroboros-network-framework")," and other network components.\nThe ",(0,n.kt)("inlineCode",{parentName:"p"},"ouroboros-network-framework")," package contains a redesign of API exposed to\n",(0,n.kt)("inlineCode",{parentName:"p"},"ouroboros-consensus"),".  We consolidated, cleaned it and made it easier to\nextend in the future if there will be new arguments that need to be passed to\nmini-protocol initiator and responders which comes from the low-level network\nlayer."),(0,n.kt)("h3",{id:"nix-setup-ci"},"Nix setup (CI)"),(0,n.kt)("p",null,"We also made a major review of our ",(0,n.kt)("inlineCode",{parentName:"p"},"nix")," setup.  With help from our DevX team\nwe ended up with a clean ",(0,n.kt)("inlineCode",{parentName:"p"},"flake.nix")," file which can:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"compile & test the code on ",(0,n.kt)("inlineCode",{parentName:"li"},"x86_64-linux"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"x86_64-darwin")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"aarch64-darwin")),(0,n.kt)("li",{parentName:"ul"},"cross-compile to ",(0,n.kt)("inlineCode",{parentName:"li"},"Windows")," on ",(0,n.kt)("inlineCode",{parentName:"li"},"x86_64-linux")," ")),(0,n.kt)("p",null,"And provides a shell which contains all the build tools, including ",(0,n.kt)("inlineCode",{parentName:"p"},"ghc-9.6"),",\n",(0,n.kt)("inlineCode",{parentName:"p"},"hls"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"cddl"),", and more.  See ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4640"},"ouroboros-network#4640"),",\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4643"},"ouroboros-network#4643"),"."),(0,n.kt)("h2",{id:"other-contributions"},"Other contributions"),(0,n.kt)("h3",{id:"cardano-network-service-assurance"},"Cardano Network Service Assurance"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The work and writeup in finishing up the CNSA, first stage (first\ncontract)."),(0,n.kt)("li",{parentName:"ul"},"Getting Sam Cowger (Galois Inc) up to speed."),(0,n.kt)("li",{parentName:"ul"},"The IOG Networking team carried a reivew of CNSA project progress: a limitted\ncode & design review.")),(0,n.kt)("h3",{id:"galois-review"},"Galois Review"),(0,n.kt)("p",null,"Sam Cowger and Mark Tullsen (Galois Inc) have made some progress on each of the tech debt issues"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-network/issues/3832"},"ouroboros-network#3832"),","),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-network/issues/3834"},"ouroboros-network#3834"),","),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-network/issues/3835"},"ouroboros-network#3835"),","),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-network/issues/3836"},"ouroboros-network#3836"),";")),(0,n.kt)("p",null,"scoping, requirements, and getting started."),(0,n.kt)("h3",{id:"ci"},"CI"),(0,n.kt)("p",null,"We added a nightly run for GitHub actions and made the GitHub actions test be\nexecuted with extra concurrency ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4637"},"ouroboros-network#4637"),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4649"},"ouroboros-network#4649"),"."),(0,n.kt)("p",null,"We also added GitHub's dependabot ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4650"},"ouroboros-network#4650"),"."),(0,n.kt)("h3",{id:"bootstrap-peers"},"Bootstrap Peers"),(0,n.kt)("p",null,"We settled on implementation design of bootstrap peers which is being\nimplemented, ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/issues/4615"},"ouroboros-network#4615"),"."))}d.isMDXComponent=!0}}]);