"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[30335],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),s=c(n),m=o,g=s["".concat(l,".").concat(m)]||s[m]||p[m]||a;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[s]="string"==typeof e?e:o,i[1]=d;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},27810:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={title:"Cardano Block Production Temporary Outage",slug:"2023-04-17-ledger",authors:"kevinhammond",tags:["ledger","incident"],hide_table_of_contents:!1},i=void 0,d={permalink:"/2023-04-17-ledger",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2023-04-17-incident.md",source:"@site/blog/2023-04-17-incident.md",title:"Cardano Block Production Temporary Outage",description:"Incident reporting: Cardano block production temporary outage",date:"2023-04-17T00:00:00.000Z",formattedDate:"April 17, 2023",tags:[{label:"ledger",permalink:"/tags/ledger"},{label:"incident",permalink:"/tags/incident"}],readingTime:1.38,hasTruncateMarker:!1,authors:[{name:"Kevin Hammond",title:"Head of Software Engineering, Cardano Core",url:"https://github.com/kevinhammond",imageURL:"https://github.com/kevinhammond.png",key:"kevinhammond"}],frontMatter:{title:"Cardano Block Production Temporary Outage",slug:"2023-04-17-ledger",authors:"kevinhammond",tags:["ledger","incident"],hide_table_of_contents:!1},prevItem:{title:"Performance & tracing update",permalink:"/2023-04-19-performance-and-tracing"},nextItem:{title:"Goedel Team Update",permalink:"/2023-04-14-goedel"}},l={authorsImageUrls:[void 0]},c=[{value:"Incident reporting: Cardano block production temporary outage",id:"incident-reporting-cardano-block-production-temporary-outage",level:2},{value:"Further Details",id:"further-details",level:3}],u={toc:c},s="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"incident-reporting-cardano-block-production-temporary-outage"},"Incident reporting: Cardano block production temporary outage"),(0,o.kt)("p",null,"On Sunday, January 22, 2023, an incident occurred resulting in block production pausing for a brief period of time (approximately two minutes, similar to the usual pause at an epoch boundary). Around 50% of block-producing nodes and relays restarted during this period. Having restarted, nodes continued to produce blocks without failure. While the network continued to operate, the issue did have the potential to affect network integrity, so was flagged as a \u2018critical\u2019 incident, thus warranting immediate response and investigation by IOG engineers.\nThe investigation (with SPO & Cardano Foundation collaboration) quickly revealed the cause of the issue \u2013 a complex bug in data structure handling code related to the precise order of insertion/deletion of multi-asset tokens into the internal ledger record. Input Output Global (IOG) engineers, along with SPOs and DApp developers, collectively identified how to reproduce the issue as a unit test that could be included in the standard Cardano node test suite.\nFollowing successful testing, this led to a bug fix being implemented, tested, benchmarked, and deployed as a hotfix in the node v.1.35.5 release on Friday, January 27, 2023. Care was taken not to highlight the exact cause of the bug during this process so that it could not be exploited prior to SPOs deploying this new node version.\nWith the fix deployed, the Cardano SPO and developer community have not seen any further instances of this issue."),(0,o.kt)("h3",{id:"further-details"},"Further Details"),(0,o.kt)("p",null,"You can read more details on the incident and how it was managed from SundaeSwap\u2019s Pi Lanningham ",(0,o.kt)("a",{parentName:"p",href:"https://www.314pool.com/post/cardano-post-mortem-1"},"here"),". Thanks again to all the community for its support in identifying and fixing this bug."))}p.isMDXComponent=!0}}]);