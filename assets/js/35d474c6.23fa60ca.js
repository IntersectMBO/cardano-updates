"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[81695],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var i=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=p(r),c=a,d=h["".concat(s,".").concat(c)]||h[c]||m[c]||n;return r?i.createElement(d,o(o({ref:t},u),{},{components:r})):i.createElement(d,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,o=new Array(n);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<n;p++)o[p]=r[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}c.displayName="MDXCreateElement"},13715:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var i=r(87462),a=(r(67294),r(3905));const n={title:"Mithril Team Update",slug:"2024-10-30-mithril",authors:"jpraynaud",tags:["mithril"],hide_table_of_contents:!1},o=void 0,l={permalink:"/2024-10-30-mithril",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2024-10-30-mithril.md",source:"@site/blog/2024-10-30-mithril.md",title:"Mithril Team Update",description:"High level overview",date:"2024-10-30T00:00:00.000Z",formattedDate:"October 30, 2024",tags:[{label:"mithril",permalink:"/tags/mithril"}],readingTime:1.525,hasTruncateMarker:!1,authors:[{name:"Jean-Philippe Raynaud",title:"Mithril Tech Lead",url:"https://github.com/jpraynaud",imageURL:"https://github.com/jpraynaud.png",key:"jpraynaud"}],frontMatter:{title:"Mithril Team Update",slug:"2024-10-30-mithril",authors:"jpraynaud",tags:["mithril"],hide_table_of_contents:!1},prevItem:{title:"Hydra Team Update",permalink:"/2024-10-30-hydra"},nextItem:{title:"Network Team Update",permalink:"/2024-10-29-network"}},s={authorsImageUrls:[void 0]},p=[{value:"High level overview",id:"high-level-overview",level:2},{value:"Low level overview",id:"low-level-overview",level:2}],u={toc:p},h="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(h,(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"high-level-overview"},"High level overview"),(0,a.kt)("p",null,"This week, the Mithril team released the new ",(0,a.kt)("a",{parentName:"p",href:"https://discord.com/channels/826816523368005654/1014019542504185876/1301043609092751410"},"CIP-137 - Decentralized message queue"),", which will be used to diffuse Mithril signatures in the future."),(0,a.kt)("p",null,"The team also implemented usage metrics with a Prometheus endpoint and published the Grafana dashboard for the aggregator. They have respun the ",(0,a.kt)("inlineCode",{parentName:"p"},"testing-sanchonet")," environment with Cardano node v.10.1 and worked on some refactoring to remove legacy code and make it more readable and maintainable. The team also started exploring solutions for signer registration when multiple aggregators are running on a Mithril network."),(0,a.kt)("p",null,"Finally, they fixed some flakiness in CI end-to-end tests and made the Cardano stake distribution stable in the client."),(0,a.kt)("h2",{id:"low-level-overview"},"Low level overview"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Published the ",(0,a.kt)("a",{parentName:"li",href:"https://grafana.com/grafana/dashboards/22165-mithril-aggregator/"},"Mithril aggregator Grafana dashboard")),(0,a.kt)("li",{parentName:"ul"},"Completed the issue ",(0,a.kt)("strong",{parentName:"li"},"CIP for Mithril signature diffusion through Cardano network")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1775"},"#1775")),(0,a.kt)("li",{parentName:"ul"},"Completed the issue ",(0,a.kt)("strong",{parentName:"li"},"Release ",(0,a.kt)("inlineCode",{parentName:"strong"},"2442")," distribution")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1943"},"#1943")),(0,a.kt)("li",{parentName:"ul"},"Completed the issue ",(0,a.kt)("strong",{parentName:"li"},"Create Grafana dashboard for aggregator")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/2001"},"#2001")),(0,a.kt)("li",{parentName:"ul"},"Completed the issue ",(0,a.kt)("strong",{parentName:"li"},"Refactor ",(0,a.kt)("inlineCode",{parentName:"strong"},"ChainPoint")," conversion from pallas ",(0,a.kt)("inlineCode",{parentName:"strong"},"Point"))," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/2037"},"#2037")),(0,a.kt)("li",{parentName:"ul"},"Completed the issue ",(0,a.kt)("strong",{parentName:"li"},"Flakiness in e2e tests in CI")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/2044"},"#2044")),(0,a.kt)("li",{parentName:"ul"},"Completed the issue ",(0,a.kt)("strong",{parentName:"li"},"Remove ",(0,a.kt)("inlineCode",{parentName:"strong"},"beacon")," field in certificate")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1958"},"#1958")),(0,a.kt)("li",{parentName:"ul"},"Completed the issue ",(0,a.kt)("strong",{parentName:"li"},"Make Cardano stake distribution stable in client")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/2024"},"#2024")),(0,a.kt)("li",{parentName:"ul"},"Completed the issue ",(0,a.kt)("strong",{parentName:"li"},"Add missing successful restoration cardano db in prometheus aggregator")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/2054"},"#2054")),(0,a.kt)("li",{parentName:"ul"},"Completed the issue ",(0,a.kt)("strong",{parentName:"li"},"Upgrade ",(0,a.kt)("inlineCode",{parentName:"strong"},"testing-sanchonet")," for respin with Cardano ",(0,a.kt)("inlineCode",{parentName:"strong"},"10.1.0"))," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/2045"},"#2045")),(0,a.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,a.kt)("strong",{parentName:"li"},"Explore Signer Registration Solutions")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/2029"},"#2029")),(0,a.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,a.kt)("strong",{parentName:"li"},"Record aggregator metrics in event store")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/2023"},"#2023")),(0,a.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,a.kt)("strong",{parentName:"li"},"Refactor protocol parameters namings in signer/aggregator")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1966"},"#1966")),(0,a.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,a.kt)("strong",{parentName:"li"},"Docker nightly builds in GitHub Actions")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/2026"},"#2026")),(0,a.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,a.kt)("strong",{parentName:"li"},"Nightly backward compatibility testing with e2e tests")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/2027"},"#2027")),(0,a.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,a.kt)("strong",{parentName:"li"},"Access registered signers for latest epoch in explorer")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1689"},"#1689")),(0,a.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,a.kt)("strong",{parentName:"li"},"Remove pending certificate from explorer")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/2025"},"#2025"))))}m.isMDXComponent=!0}}]);