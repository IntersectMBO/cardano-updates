"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[129],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||s;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},63751:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const s={title:"Consensus Team Update",slug:"2024-10-02-consensus",authors:"dnadales",tags:["consensus"],hide_table_of_contents:!1},o=void 0,i={permalink:"/2024-10-02-consensus",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2024-10-02-consensus.md",source:"@site/blog/2024-10-02-consensus.md",title:"Consensus Team Update",description:"High level summary",date:"2024-10-02T00:00:00.000Z",formattedDate:"October 2, 2024",tags:[{label:"consensus",permalink:"/tags/consensus"}],readingTime:.345,hasTruncateMarker:!1,authors:[{name:"Damian Nadales",title:"Consensus Team Lead",url:"https://github.com/dnadales",imageURL:"https://github.com/dnadales.png",key:"dnadales"}],frontMatter:{title:"Consensus Team Update",slug:"2024-10-02-consensus",authors:"dnadales",tags:["consensus"],hide_table_of_contents:!1},prevItem:{title:"Hydra Team Update",permalink:"/2024-10-03-hydra"},nextItem:{title:"Mithril Team Update",permalink:"/2024-10-02-mithril"}},l={authorsImageUrls:[void 0]},c=[{value:"High level summary",id:"high-level-summary",level:2}],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,a.kt)("p",null,"Over the past two weeks, we worked on establishing a first baseline for the Consensus QTA (",(0,a.kt)("a",{parentName:"p",href:"https://github.com/IntersectMBO/ouroboros-consensus/issues/1256"},"#1256"),").\nThis work is also helping inform discussions with the Networking team about sync performance goals in general and for specific improvements, such as Genesis."),(0,a.kt)("p",null,"UTXO-HD was rebased atop ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," and the ",(0,a.kt)("a",{parentName:"p",href:"https://tests.cardano.intersectmbo.org/test_results/node/utxo_hd_9_1_1.html"},"tests are passing"),"."),(0,a.kt)("p",null,"Finally, the team has also worked to improve the Consensus layer's robustness and security."))}m.isMDXComponent=!0}}]);