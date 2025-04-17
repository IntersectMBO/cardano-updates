"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[22191],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),u=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=u(a),m=n,h=s["".concat(p,".").concat(m)]||s[m]||d[m]||o;return a?r.createElement(h,l(l({ref:t},c),{},{components:a})):r.createElement(h,l({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:n,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},95807:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const o={title:"SRE Team Update",slug:"2023-09-29-sre",authors:"johnalotoski",tags:["sre"],hide_table_of_contents:!1},l=void 0,i={permalink:"/2023-09-29-sre",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2023-09-29-sre.md",source:"@site/blog/2023-09-29-sre.md",title:"SRE Team Update",description:"High level summary",date:"2023-09-29T00:00:00.000Z",formattedDate:"September 29, 2023",tags:[{label:"sre",permalink:"/tags/sre"}],readingTime:.68,hasTruncateMarker:!1,authors:[{name:"John Lotoski",title:"Service Reliability Engineer",url:"https://github.com/johnalotoski",imageURL:"https://github.com/johnalotoski.png",key:"johnalotoski"}],frontMatter:{title:"SRE Team Update",slug:"2023-09-29-sre",authors:"johnalotoski",tags:["sre"],hide_table_of_contents:!1},prevItem:{title:"Ledger Team Update",permalink:"/2023-09-29-ledger"},nextItem:{title:"Mithril Team Update",permalink:"/2023-09-27-mithril"}},p={authorsImageUrls:[void 0]},u=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Lower level summary",id:"lower-level-summary",level:2},{value:"Capkgs",id:"capkgs",level:3},{value:"Cardano-parts",id:"cardano-parts",level:3},{value:"Cardano-playground",id:"cardano-playground",level:3},{value:"Cardano-world",id:"cardano-world",level:3}],c={toc:u},s="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(s,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,n.kt)("p",null,"The SRE team continues work on cardano environment improvements and general environment maintenance."),(0,n.kt)("p",null,"Some notable recent changes, updates or improvements include:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Sanchonet environment was re-spun starting from slot 7171200 and updated to cardano-node ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/releases/tag/8.4.0-pre"},"8.4.0-pre"),"."),(0,n.kt)("li",{parentName:"ul"},"The use of cardano-node ",(0,n.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/inputoutput/cardano-node"},"docker hub")," will be deprecated in preference of ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pkgs/container/cardano-node"},"GHCR"))),(0,n.kt)("h2",{id:"lower-level-summary"},"Lower level summary"),(0,n.kt)("h3",{id:"capkgs"},"Capkgs"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Refactor parsing scripts, add github action automation, various bugfixes and cleanup: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/capkgs/compare/c2c7680...a274b72"},"capkgs-compare"))),(0,n.kt)("h3",{id:"cardano-parts"},"Cardano-parts"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Updates secrets layout scheme, adds sops enc/dec for jobs, adds cloud monitoring profile, updates flake templates and other improvements/fixes: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-parts/pull/14"},"cardano-parts-pull-8"))),(0,n.kt)("h3",{id:"cardano-playground"},"Cardano-playground"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Updates for new cardano-parts secrets handling and layout, TF workspace handling, group multivalue DNS support, grafana cloud monitoring and other improvements: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-playground/pull/2"},"cardano-playground"))),(0,n.kt)("h3",{id:"cardano-world"},"Cardano-world"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Update sanchonet network to cardano-node 8.4.0: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-world/compare/8cb559a...3edafb9"},"cardano-world-compare")),(0,n.kt)("li",{parentName:"ul"},"Rotate KES on shelley-qa: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-world/commit/8301b044ad106ff8ca71dcbbdb5b17fe9ec6fc6d"},"cardano-world-commit"))))}d.isMDXComponent=!0}}]);