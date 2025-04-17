"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[56010],{3905:(e,t,i)=>{i.d(t,{Zo:()=>s,kt:()=>c});var r=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var p=r.createContext({}),u=function(e){var t=r.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),h=u(i),d=n,c=h["".concat(p,".").concat(d)]||h[d]||m[d]||a;return i?r.createElement(c,l(l({ref:t},s),{},{components:i})):r.createElement(c,l({ref:t},s))}));function c(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,l=new Array(a);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[h]="string"==typeof e?e:n,l[1]=o;for(var u=2;u<a;u++)l[u]=i[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,i)}d.displayName="MDXCreateElement"},16010:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var r=i(87462),n=(i(67294),i(3905));const a={title:"Mithril Team Update",slug:"2023-06-01-mithril",authors:"jpraynaud",tags:["mithril"],hide_table_of_contents:!1},l=void 0,o={permalink:"/2023-06-01-mithril",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2023-06-01-mithril.md",source:"@site/blog/2023-06-01-mithril.md",title:"Mithril Team Update",description:"High level overview",date:"2023-06-01T00:00:00.000Z",formattedDate:"June 1, 2023",tags:[{label:"mithril",permalink:"/tags/mithril"}],readingTime:1.415,hasTruncateMarker:!1,authors:[{name:"Jean-Philippe Raynaud",title:"Mithril Tech Lead",url:"https://github.com/jpraynaud",imageURL:"https://github.com/jpraynaud.png",key:"jpraynaud"}],frontMatter:{title:"Mithril Team Update",slug:"2023-06-01-mithril",authors:"jpraynaud",tags:["mithril"],hide_table_of_contents:!1},prevItem:{title:"Hydra Team Update",permalink:"/2023-06-02-hydra"},nextItem:{title:"Consensus Team Update",permalink:"/2023-05-31-consensus"}},p={authorsImageUrls:[void 0]},u=[{value:"High level overview",id:"high-level-overview",level:2},{value:"Low level overview",id:"low-level-overview",level:2}],s={toc:u},h="wrapper";function m(e){let{components:t,...i}=e;return(0,n.kt)(h,(0,r.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-level-overview"},"High level overview"),(0,n.kt)("p",null,"The Mithril team released a new ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/mithril/releases/tag/2321.1"},(0,n.kt)("inlineCode",{parentName:"a"},"2321.1"))," distribution that fully implements the mechanism developed to sign generic data. They completed the upgrade of the Cardano node in the Mithril networks to v.8.0.0 and the implementation of the new computation of the stake distribution. They refactored the state machines of the signer and aggregator, and the signed entity service of the aggregator. Additionally, they worked on adapting the client and implementing a new sub-command for restoring the Cardano immutable file snapshots."),(0,n.kt)("p",null,"Finally, the team worked on adding a new certificate list route in the aggregator REST API, and started enhancing the infrastructure of the Mithril networks."),(0,n.kt)("h2",{id:"low-level-overview"},"Low level overview"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Released the new distribution ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/releases/tag/2321.1"},(0,n.kt)("inlineCode",{parentName:"a"},"2321.1"))),(0,n.kt)("li",{parentName:"ul"},"Worked on the epic that designs and implements generic signing/verification of entity services ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/780"},"#780"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Completed the issue ",(0,n.kt)("inlineCode",{parentName:"li"},"Enhance MessageAdapter for Artifact in aggregator REST API")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/925"},"#925")),(0,n.kt)("li",{parentName:"ul"},"Completed the issue ",(0,n.kt)("inlineCode",{parentName:"li"},"Create the sub-command for 'Cardano Immutable Files Full' in client")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/895"},"#895")),(0,n.kt)("li",{parentName:"ul"},"Completed the issue ",(0,n.kt)("inlineCode",{parentName:"li"},"Enhance state machines Aggregator/Signer")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/933"},"#933")),(0,n.kt)("li",{parentName:"ul"},"Completed the issue ",(0,n.kt)("inlineCode",{parentName:"li"},"Adapt the aggregator REST API to list certificates")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/892"},"#892")),(0,n.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,n.kt)("inlineCode",{parentName:"li"},"Adapt end to end tests to handle new types of data")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/899"},"#899")),(0,n.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,n.kt)("inlineCode",{parentName:"li"},"Update client documentation")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/897"},"#897")),(0,n.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,n.kt)("inlineCode",{parentName:"li"},"Update architecture documentations for new types of data")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/898"},"#898")))),(0,n.kt)("li",{parentName:"ul"},"Worked on the epic that prepares the Mithril infrastructure for ",(0,n.kt)("inlineCode",{parentName:"li"},"mainnet")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/767"},"#767"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,n.kt)("inlineCode",{parentName:"li"},"Enhance terraform infrastructure")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/930"},"#930")))),(0,n.kt)("li",{parentName:"ul"},"Worked on the epic that implements the computation of the stake distribution for ",(0,n.kt)("inlineCode",{parentName:"li"},"mainnet")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/880"},"#880"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Completed the issue ",(0,n.kt)("inlineCode",{parentName:"li"},"Upgrade Cardano node to '8.0.0'")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/920"},"#920")))),(0,n.kt)("li",{parentName:"ul"},"Completed the issue ",(0,n.kt)("inlineCode",{parentName:"li"},"Add export path in Client CLI")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/512"},"#512"))))}m.isMDXComponent=!0}}]);