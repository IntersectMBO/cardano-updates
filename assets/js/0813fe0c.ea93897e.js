"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[91705],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),p=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=p(a),u=n,h=s["".concat(c,".").concat(u)]||s[u]||m[u]||o;return a?r.createElement(h,i(i({ref:t},d),{},{components:a})):r.createElement(h,i({ref:t},d))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},54110:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const o={title:"Hydra Team Update",slug:"2024-04-05-hydra",authors:["locallycompact"],tags:["hydra"],hide_table_of_contents:!1},i=void 0,l={permalink:"/2024-04-05-hydra",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2024-04-05-hydra.md",source:"@site/blog/2024-04-05-hydra.md",title:"Hydra Team Update",description:"High-level summary",date:"2024-04-05T00:00:00.000Z",formattedDate:"April 5, 2024",tags:[{label:"hydra",permalink:"/tags/hydra"}],readingTime:.72,hasTruncateMarker:!1,authors:[{name:"Daniel Firth",title:"Hydra Software Engineer",url:"https://github.com/locallycompact",imageURL:"https://github.com/locallycompact.png",key:"locallycompact"}],frontMatter:{title:"Hydra Team Update",slug:"2024-04-05-hydra",authors:["locallycompact"],tags:["hydra"],hide_table_of_contents:!1},prevItem:{title:"Mithril Team Update",permalink:"/2024-04-10-mithril"},nextItem:{title:"Consensus Team Update",permalink:"/2024-04-03-consensus"}},c={authorsImageUrls:[void 0]},p=[{value:"High-level summary",id:"high-level-summary",level:3},{value:"What did the team achieve this week",id:"what-did-the-team-achieve-this-week",level:3},{value:"What are the goals of next week",id:"what-are-the-goals-of-next-week",level:3}],d={toc:p},s="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(s,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"high-level-summary"},"High-level summary"),(0,n.kt)("p",null,"This week, the Hydra team released hydra 0.16.0, which supports cardano-node 8.9.0\nand can interpret conway blocks on the cardano-node. We have also updated some hydra\nclients to be compatible with the new hydra api format, including hydraw and kupo."),(0,n.kt)("h3",{id:"what-did-the-team-achieve-this-week"},"What did the team achieve this week"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Update our head and ",(0,n.kt)("inlineCode",{parentName:"li"},"hydraw")," instance to ",(0,n.kt)("inlineCode",{parentName:"li"},"master")," (a release candidate)"),(0,n.kt)("li",{parentName:"ul"},"Release 0.16.0 (without incremental decommits)"),(0,n.kt)("li",{parentName:"ul"},"Reproduce close > contest > contest scenarios using stateful testing"),(0,n.kt)("li",{parentName:"ul"},"Have end-to-end scenarios working for the improved ",(0,n.kt)("inlineCode",{parentName:"li"},"/commit")," endpoint")),(0,n.kt)("h3",{id:"what-are-the-goals-of-next-week"},"What are the goals of next week"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Complete the improved ",(0,n.kt)("inlineCode",{parentName:"li"},"/commit")," endpoint to unblock users"),(0,n.kt)("li",{parentName:"ul"},"Potentially release 0.17.0 (with improved ",(0,n.kt)("inlineCode",{parentName:"li"},"/commit")," endpoint)"),(0,n.kt)("li",{parentName:"ul"},"Wrap up the incremental decommit work including the decommit action into the new TxTrace tests"),(0,n.kt)("li",{parentName:"ul"},"Use Versioned Ouroboros protocol for handshaking between nodes."),(0,n.kt)("li",{parentName:"ul"},"Update to cardano-api-8.44.")))}m.isMDXComponent=!0}}]);