"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[26710],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(a),m=o,f=u["".concat(s,".").concat(m)]||u[m]||c[m]||n;return a?r.createElement(f,l(l({ref:t},d),{},{components:a})):r.createElement(f,l({ref:t},d))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,l=new Array(n);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<n;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},94828:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var r=a(87462),o=(a(67294),a(3905));const n={title:"SRE Team Update",slug:"2023-11-24-sre",authors:"johnalotoski",tags:["sre"],hide_table_of_contents:!1},l=void 0,i={permalink:"/2023-11-24-sre",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2023-11-24-sre.md",source:"@site/blog/2023-11-24-sre.md",title:"SRE Team Update",description:"High level summary",date:"2023-11-24T00:00:00.000Z",formattedDate:"November 24, 2023",tags:[{label:"sre",permalink:"/tags/sre"}],readingTime:3.115,hasTruncateMarker:!1,authors:[{name:"John Lotoski",title:"Service Reliability Engineer",url:"https://github.com/johnalotoski",imageURL:"https://github.com/johnalotoski.png",key:"johnalotoski"}],frontMatter:{title:"SRE Team Update",slug:"2023-11-24-sre",authors:"johnalotoski",tags:["sre"],hide_table_of_contents:!1},prevItem:{title:"Hydra Team Update",permalink:"/2023-11-24-hydra"},nextItem:{title:"Ledger Team Update",permalink:"/2023-11-22-ledger"}},s={authorsImageUrls:[void 0]},p=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Lower level summary",id:"lower-level-summary",level:2},{value:"Capkgs",id:"capkgs",level:3},{value:"Cardano-node",id:"cardano-node",level:3},{value:"Cardano-parts",id:"cardano-parts",level:3},{value:"Cardano-playground",id:"cardano-playground",level:3},{value:"Offchain-metadata-tools",id:"offchain-metadata-tools",level:3}],d={toc:p},u="wrapper";function c(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,o.kt)("p",null,"The SRE team continues work on cardano environment improvements and general environment maintenance."),(0,o.kt)("p",null,"Some notable recent changes, updates or improvements include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The cardano-node nixos service now supports SIGHUP p2p topology reloading when the ",(0,o.kt)("inlineCode",{parentName:"li"},"useSystemdReload")," option is enabled")),(0,o.kt)("h2",{id:"lower-level-summary"},"Lower level summary"),(0,o.kt)("h3",{id:"capkgs"},"Capkgs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Update cardano-db-sync and offchain-metadata-tools package paths and/or references: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/capkgs/compare/994696f...3ce364f"},"capkgs-compare"))),(0,o.kt)("h3",{id:"cardano-node"},"Cardano-node"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Optionally have cardano-node nixos service utilize SIGHUP p2p topology reload: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/5537"},"cardano-node-pull-5537"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Creates a useSystemdReload bool option for the cardano-node nixos service"),(0,o.kt)("li",{parentName:"ul"},"This will move the topology file(s) to ",(0,o.kt)("inlineCode",{parentName:"li"},"/etc/cardano-node/topology-$i.yaml")," and inject systemd reload hooks for p2p configured cardano-node instances"),(0,o.kt)("li",{parentName:"ul"},"Moving topology files to ",(0,o.kt)("inlineCode",{parentName:"li"},"/etc")," also allows for manual topology updates when a quick test is needed and full service re-deployment isn't desired")))),(0,o.kt)("h3",{id:"cardano-parts"},"Cardano-parts"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Adds a metadata server profile and a number of other features and improvements: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-parts/pull/20"},"cardano-parts-pull-20"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Adds a new metadata-service profile"),(0,o.kt)("li",{parentName:"ul"},"Adds metadata service and pkg configuration options for cardano-groups to utilize the metadata-server profile"),(0,o.kt)("li",{parentName:"ul"},"Adds a cardano-webserver profile for multiple virtualHosts and TLS ACME server aliases for a cluster's static needs, with each cached behind varnish"),(0,o.kt)("li",{parentName:"ul"},"Adds extra node list producers and public producers for cardano-node-topology profile"),(0,o.kt)("li",{parentName:"ul"},"Adds delegation amounts to cardano-postgres psql prepared query show_pools_block_history_in_epoch"),(0,o.kt)("li",{parentName:"ul"},"Adds select systemd metrics reporting to grafana-agent profile"),(0,o.kt)("li",{parentName:"ul"},"Adds a bookRelay multivalue DNS option to disambiguate with groupRelay multivalue DNS"),(0,o.kt)("li",{parentName:"ul"},"Adds an opsLib library to the cardano-parts lib flakeModule and refactors some common code into it"),(0,o.kt)("li",{parentName:"ul"},"Adds support for sops secret traversing from target path up instead of cwd up, thereby supporting secrets use-cases outside of the repo"),(0,o.kt)("li",{parentName:"ul"},"Adds job-gen-env-config for both release and pre-release configuration files to support configuration book generation"),(0,o.kt)("li",{parentName:"ul"},"Adds support for grafana recording rules in the template files"),(0,o.kt)("li",{parentName:"ul"},"Improves cardano-group profile handling of producers with respect to multiple instance nodes"),(0,o.kt)("li",{parentName:"ul"},"Improves grafana-agent profile metrics handling for multi-instance cardano-node servers"),(0,o.kt)("li",{parentName:"ul"},"Improves smash service preStart handling while waiting for a node socket"),(0,o.kt)("li",{parentName:"ul"},"Updates Justfile for ERA_CMD demo support"),(0,o.kt)("li",{parentName:"ul"},"Migrates default grafana cloud node exporter, varnish alert and recording rules to grafana alert and recording rule templates"),(0,o.kt)("li",{parentName:"ul"},"Defaults to using an updated systemd reload nixos service feature for p2p networks in cardano-group profile"),(0,o.kt)("li",{parentName:"ul"},"Defaults cardano-postgres profile psqlrc use to false")))),(0,o.kt)("h3",{id:"cardano-playground"},"Cardano-playground"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Adds a new testnet metadata server, cluster webserver, and other improvements: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-playground/pull/6"},"cardano-playground-pull-6"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Adds a new metadata server"),(0,o.kt)("li",{parentName:"ul"},"Adds a new webserver for the cluster's static virtualhost needs"),(0,o.kt)("li",{parentName:"ul"},"Adds support for sops secret traversing from target path up instead of cwd up, thereby supporting secrets use-cases outside of the repo"),(0,o.kt)("li",{parentName:"ul"},"Adds systemd metrics monitoring to the cluster"),(0,o.kt)("li",{parentName:"ul"},"Resizes sanchonet machines to support the growing chain"),(0,o.kt)("li",{parentName:"ul"},"Completes migration of preprod from world"),(0,o.kt)("li",{parentName:"ul"},"Updates groups to utilize both bookRelay and groupRelay multivalue DNS attributes"),(0,o.kt)("li",{parentName:"ul"},"Updates Justfile for ERA_CMD demo support"),(0,o.kt)("li",{parentName:"ul"},"Defaults to using an updated systemd reload nixos service feature for p2p networks in cardano-group profile"),(0,o.kt)("li",{parentName:"ul"},"Migrates book static code to playground from world, with refactor, cleanup and updates"),(0,o.kt)("li",{parentName:"ul"},"Migrates default grafana cloud node exporter, varnish alert and recording rules to declarative grafana alert and recording rules")))),(0,o.kt)("h3",{id:"offchain-metadata-tools"},"Offchain-metadata-tools"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Adds db password option with obfuscation plus misc improvements: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/offchain-metadata-tools/pull/61"},"offchain-metadata-tools-pull-61"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Adds db password connection option and obfuscates passwords in output for metadata server, sync, webhook services"),(0,o.kt)("li",{parentName:"ul"},"Updates the nixos service for metadata-webhook service to optionally use an environmentFile for secrets: cfg.environmentFile"),(0,o.kt)("li",{parentName:"ul"},"Moves from std use in the nix flake to standard flake schema"),(0,o.kt)("li",{parentName:"ul"},"Fixes hydra CI failures"),(0,o.kt)("li",{parentName:"ul"},"Builds update-docs in hydra to avoid long local build times"),(0,o.kt)("li",{parentName:"ul"},"Removes deprecated tullia"),(0,o.kt)("li",{parentName:"ul"},"Removes deprecated check-hydra from pkgs"),(0,o.kt)("li",{parentName:"ul"},"Removes deprecated bors files and references")))))}c.isMDXComponent=!0}}]);