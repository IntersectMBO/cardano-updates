"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[89605],{3905:(e,a,t)=>{t.d(a,{Zo:()=>s,kt:()=>h});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=n.createContext({}),p=function(e){var a=n.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},s=function(e){var a=p(e.components);return n.createElement(d.Provider,{value:a},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(t),m=r,h=c["".concat(d,".").concat(m)]||c[m]||u[m]||o;return t?n.createElement(h,i(i({ref:a},s),{},{components:t})):n.createElement(h,i({ref:a},s))}));function h(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var d in a)hasOwnProperty.call(a,d)&&(l[d]=a[d]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},79189:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=t(87462),r=(t(67294),t(3905));const o={title:"SRE Team Update",slug:"2024-09-06-sre",authors:"johnalotoski",tags:["sre"],hide_table_of_contents:!1},i=void 0,l={permalink:"/2024-09-06-sre",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2024-09-06-sre.md",source:"@site/blog/2024-09-06-sre.md",title:"SRE Team Update",description:"High level summary",date:"2024-09-06T00:00:00.000Z",formattedDate:"September 6, 2024",tags:[{label:"sre",permalink:"/tags/sre"}],readingTime:1.445,hasTruncateMarker:!1,authors:[{name:"John Lotoski",title:"Service Reliability Engineer",url:"https://github.com/johnalotoski",imageURL:"https://github.com/johnalotoski.png",key:"johnalotoski"}],frontMatter:{title:"SRE Team Update",slug:"2024-09-06-sre",authors:"johnalotoski",tags:["sre"],hide_table_of_contents:!1},prevItem:{title:"Blocks from the future",permalink:"/2024-09-07-incident"},nextItem:{title:"Consensus Team Update",permalink:"/2024-09-04-consensus"}},d={authorsImageUrls:[void 0]},p=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Repository Work",id:"repository-work",level:2},{value:"Cardano Faucet",id:"cardano-faucet",level:3},{value:"Cardano Parts",id:"cardano-parts",level:3},{value:"Cardano-mainnet",id:"cardano-mainnet",level:3},{value:"Cardano-playground",id:"cardano-playground",level:3},{value:"Cardano-world",id:"cardano-world",level:3}],s={toc:p},c="wrapper";function u(e){let{components:a,...t}=e;return(0,r.kt)(c,(0,n.Z)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,r.kt)("p",null,"The SRE team continues work on Cardano environment improvements and general maintenance."),(0,r.kt)("p",null,"Some notable recent changes, updates or improvements include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Mainnet was hard forked to Conway era!")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Legacy mainnet relays from cardano-ops cluster were stopped and retired.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Legacy cardano-explorer hosted at explorer.cardano.org was retired with\nlanding page and beta explorer services now provided by Cardano Foundation.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cardano-smash production load was cutover from the legacy cardano-world\ncluster to the replacement cardano-mainnet cluster.  Remaining cardano-world\nresources will be retired in the near future.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cardano-faucet was updated for cardano-node ",(0,r.kt)("inlineCode",{parentName:"p"},"9.1.x")," level compatibility."))),(0,r.kt)("h2",{id:"repository-work"},"Repository Work"),(0,r.kt)("h3",{id:"cardano-faucet"},"Cardano Faucet"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Brings faucet up to cardano-api and cardano-cli level of cardano-node ",(0,r.kt)("inlineCode",{parentName:"li"},"9.1"),":\nbumps relevant flake pins, updates CHaP indexes, applies fixes for upstream\nbreaking changes, removes cardano-addresses srp, adjusts ghc options, fixes\nming32 CI builds, applies most hlint and fourmolu style and config\nsuggestions respectively:\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-faucet/pull/12"},"cardano-faucet-pull-12"))),(0,r.kt)("h3",{id:"cardano-parts"},"Cardano Parts"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sets cardano-node to ",(0,r.kt)("inlineCode",{parentName:"li"},"9.1.1"),", cardano-db-sync to ",(0,r.kt)("inlineCode",{parentName:"li"},"13.5.0.2"),", cardano-faucet to\n",(0,r.kt)("inlineCode",{parentName:"li"},"9.1"),". Adds alerts, dashboard fixes, nixos iowait optimization, smash and\nblockperf nixosModule improvements. More detail is available in the PR\ndescription:\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-parts/pull/47"},"cardano-parts-pull-47"))),(0,r.kt)("h3",{id:"cardano-mainnet"},"Cardano-mainnet"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Deploys cardano node to ",(0,r.kt)("inlineCode",{parentName:"li"},"9.1.1"),", cardano-db-sync to ",(0,r.kt)("inlineCode",{parentName:"li"},"13.5.0.2"),". Improves\nsmash deployments and backup role for production load handling. Improvements\nmade in cardano-parts PR#47 are included in this PR. More detail is available\nin the PR description:\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-mainnet/pull/21"},"cardano-mainnet-pull-21"))),(0,r.kt)("h3",{id:"cardano-playground"},"Cardano-playground"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Deploys cardano node to ",(0,r.kt)("inlineCode",{parentName:"li"},"9.1.1"),", cardano-db-sync to ",(0,r.kt)("inlineCode",{parentName:"li"},"13.5.0.2"),", cardano-faucet to\n",(0,r.kt)("inlineCode",{parentName:"li"},"9.1"),". Tests RTS parameter optimization and tracing system changes on preview\nnetwork machines, tests ",(0,r.kt)("inlineCode",{parentName:"li"},"utxo-hd-9.1.1")," on mainnet edge nodes. Improvements\nmade in cardano-parts PR#47 are included in this PR. More detail is available\nin the PR description:\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-playground/pull/31"},"cardano-playground-pull-31"))),(0,r.kt)("h3",{id:"cardano-world"},"Cardano-world"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Destroy retired legacy explorer metal machines and disable alerting:\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-world/compare/e9f9559...51f271a"},"commit-compare"))))}u.isMDXComponent=!0}}]);