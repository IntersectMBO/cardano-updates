"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[32035],{3905:(e,t,i)=>{i.d(t,{Zo:()=>s,kt:()=>d});var r=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var p=r.createContext({}),h=function(e){var t=r.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},s=function(e){var t=h(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=h(i),c=n,d=u["".concat(p,".").concat(c)]||u[c]||m[c]||a;return i?r.createElement(d,o(o({ref:t},s),{},{components:i})):r.createElement(d,o({ref:t},s))}));function d(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,o=new Array(a);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var h=2;h<a;h++)o[h]=i[h];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}c.displayName="MDXCreateElement"},91041:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>h});var r=i(87462),n=(i(67294),i(3905));const a={title:"Mithril Team Update",slug:"2023-05-04-mithril",authors:"jpraynaud",tags:["mithril"],hide_table_of_contents:!1},o=void 0,l={permalink:"/2023-05-04-mithril",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2023-05-04-mithril.md",source:"@site/blog/2023-05-04-mithril.md",title:"Mithril Team Update",description:"High level overview",date:"2023-05-04T00:00:00.000Z",formattedDate:"May 4, 2023",tags:[{label:"mithril",permalink:"/tags/mithril"}],readingTime:1.56,hasTruncateMarker:!1,authors:[{name:"Jean-Philippe Raynaud",title:"Mithril Tech Lead",url:"https://github.com/jpraynaud",imageURL:"https://github.com/jpraynaud.png",key:"jpraynaud"}],frontMatter:{title:"Mithril Team Update",slug:"2023-05-04-mithril",authors:"jpraynaud",tags:["mithril"],hide_table_of_contents:!1},prevItem:{title:"Node API & CLI Team Update",permalink:"/2023-05-05-node-cli-api"},nextItem:{title:"Consensus Team Update",permalink:"/2023-05-03-consensus"}},p={authorsImageUrls:[void 0]},h=[{value:"High level overview",id:"high-level-overview",level:2},{value:"Low level overview",id:"low-level-overview",level:2}],s={toc:h},u="wrapper";function m(e){let{components:t,...i}=e;return(0,n.kt)(u,(0,r.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-level-overview"},"High level overview"),(0,n.kt)("p",null,"The Mithril team completed the implementation of the new certifier service of the aggregator, which is in charge of producing certificates for multi-signatures. They also finished implementing the interfaces defined to provide certification for the full immutable Cardano files snapshot and the Mithril stake distribution. Additionally, they have completed the refactoring of the multi-signer in the aggregator. The team also fixed the bug in the signer registration that was responsible for gaps during the signature phase for some signers, and they upgraded the Cardano node used in the Mithril testnets and devnet to version ",(0,n.kt)("inlineCode",{parentName:"p"},"1.35.7"),"."),(0,n.kt)("p",null,"Finally, they have worked on designing a decentralized registration for the signers that takes place on the Cardano chain."),(0,n.kt)("h2",{id:"low-level-overview"},"Low level overview"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Worked on the epic that designs and implements generic signing/verification of entity services ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/780"},"#780"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Completed the implementation of the ",(0,n.kt)("inlineCode",{parentName:"li"},"Certifier")," service in the aggregator ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/850"},"#850")),(0,n.kt)("li",{parentName:"ul"},"Completed the implementation of the signable builder for the ",(0,n.kt)("inlineCode",{parentName:"li"},"Mithril Stake Distribution")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/851"},"#851")),(0,n.kt)("li",{parentName:"ul"},"Completed the implementation of the artifact builder for the ",(0,n.kt)("inlineCode",{parentName:"li"},"Mithril Stake Distribution")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/870"},"#870")),(0,n.kt)("li",{parentName:"ul"},"Completed the implementation of the signable builder for the ",(0,n.kt)("inlineCode",{parentName:"li"},"Full Immutables Snapshot")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/852"},"#852")),(0,n.kt)("li",{parentName:"ul"},"Completed the implementation of the artifact builder for the ",(0,n.kt)("inlineCode",{parentName:"li"},"Full Immutables Snapshot")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/871"},"#871")),(0,n.kt)("li",{parentName:"ul"},"Completed the adaptation of the aggregator runtime to use the signable builder service ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/853"},"#853")),(0,n.kt)("li",{parentName:"ul"},"Worked on the adaptation of the signer runtime to use the signable builder service ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/854"},"#854")),(0,n.kt)("li",{parentName:"ul"},"Completed the definition of the entity service interface for verification/restoration ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/868"},"#868")),(0,n.kt)("li",{parentName:"ul"},"Completed the refactoring of the ",(0,n.kt)("inlineCode",{parentName:"li"},"OpenMessage")," type ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/878"},"#878")))),(0,n.kt)("li",{parentName:"ul"},"Completed the epic that simplifies the multi-signer in the aggregator ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/398"},"#398"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Completed the extraction of the single signature registration from the multi-signer ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/643"},"#643")))),(0,n.kt)("li",{parentName:"ul"},"Completed the upgrade of the Cardano node to version ",(0,n.kt)("inlineCode",{parentName:"li"},"1.35.7")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/881"},"#881")),(0,n.kt)("li",{parentName:"ul"},"Fixed the bug that created a discrepancy of the signer verification keys between signers and aggregators ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/873"},"#873"))))}m.isMDXComponent=!0}}]);