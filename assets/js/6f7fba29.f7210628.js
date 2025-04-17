"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[74672],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},h=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),u=c(a),d=n,m=u["".concat(s,".").concat(d)]||u[d]||p[d]||i;return a?r.createElement(m,o(o({ref:t},h),{},{components:a})):r.createElement(m,o({ref:t},h))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},25563:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const i={title:"Hydra Team Update",slug:"2025-04-17-hydra",authors:["noonio"],tags:["hydra"],hide_table_of_contents:!1},o=void 0,l={permalink:"/2025-04-17-hydra",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2025-04-17-hydra.md",source:"@site/blog/2025-04-17-hydra.md",title:"Hydra Team Update",description:"High-level summary",date:"2025-04-17T00:00:00.000Z",formattedDate:"April 17, 2025",tags:[{label:"hydra",permalink:"/tags/hydra"}],readingTime:.765,hasTruncateMarker:!1,authors:[{name:"Noon van der Silk",title:"Software Engineering Lead",url:"https://github.com/noonio",imageURL:"https://github.com/noonio.png",key:"noonio"}],frontMatter:{title:"Hydra Team Update",slug:"2025-04-17-hydra",authors:["noonio"],tags:["hydra"],hide_table_of_contents:!1},nextItem:{title:"Consensus Team Update",permalink:"/2025-04-16-consensus"}},s={authorsImageUrls:[void 0]},c=[{value:"High-level summary",id:"high-level-summary",level:3},{value:"What did the team achieve?",id:"what-did-the-team-achieve",level:3},{value:"What&#39;s next?",id:"whats-next",level:3}],h={toc:c},u="wrapper";function p(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"high-level-summary"},"High-level summary"),(0,n.kt)("p",null,"The team accomplished quite a lot of things, notably the Withdraw Zero trick\nis now possible, we have documentation for snapshot side-loading, and we have\nfixed a number of bugs with deposits. We are now focused on our next big\nrelease, a Blockfrost-based chain layer, and supporting the Glacier drop."),(0,n.kt)("h3",{id:"what-did-the-team-achieve"},"What did the team achieve?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"New metric, ",(0,n.kt)("inlineCode",{parentName:"li"},"hydra_head_peers_connected")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/cardano-scaling/hydra/pull/1946"},"#1946")),(0,n.kt)("li",{parentName:"ul"},"Withdraw zero trick ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/cardano-scaling/hydra/issues/1795"},"#1795")),(0,n.kt)("li",{parentName:"ul"},"Better defaults for contestation period and deposit deadline ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/cardano-scaling/hydra/issues/1925"},"#1925")),(0,n.kt)("li",{parentName:"ul"},"Documentation for the side-loading snapshot feature ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/cardano-scaling/hydra/issues/1912"},"#1912")),(0,n.kt)("li",{parentName:"ul"},"Bugfixes for deposits ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/cardano-scaling/hydra/issues/1915"},"#1915"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/cardano-scaling/hydra/issues/1895"},"#1895"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/cardano-scaling/hydra/pull/1924"},"#1924")),(0,n.kt)("li",{parentName:"ul"},"Head finalised reporting wrong UTxOs ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/cardano-scaling/hydra/issues/1913"},"#1913")),(0,n.kt)("li",{parentName:"ul"},"Publishing scripts with blockfrost ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/cardano-scaling/hydra/issues/1668"},"#1668")),(0,n.kt)("li",{parentName:"ul"},"Improved Blockfrost API for following the chain ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/cardano-scaling/hydra/pull/1931"},"#1931"))),(0,n.kt)("h3",{id:"whats-next"},"What's next?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Release version ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/cardano-scaling/hydra/milestone/22"},"0.21.0")),(0,n.kt)("li",{parentName:"ul"},"Continued work on a full Blockfrost chain layer ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/cardano-scaling/hydra/issues/1305"},"#1305")),(0,n.kt)("li",{parentName:"ul"},"Reinstate Kupo support ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/cardano-scaling/hydra/issues/1785"},"#1785")),(0,n.kt)("li",{parentName:"ul"},"Continue to focus on supporting the Glacier drop"),(0,n.kt)("li",{parentName:"ul"},"Fixes to the documentation ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/cardano-scaling/hydra/issues/1636"},"#1636"),",")))}p.isMDXComponent=!0}}]);