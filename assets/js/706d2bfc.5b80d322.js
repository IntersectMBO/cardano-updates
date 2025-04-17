"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[65579],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>d});var n=a(67294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,i=function(t,e){if(null==t)return{};var a,n,i={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var o=n.createContext({}),u=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},c=function(t){var e=u(t.components);return n.createElement(o.Provider,{value:e},t.children)},h="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,i=t.mdxType,r=t.originalType,o=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),h=u(a),s=i,d=h["".concat(o,".").concat(s)]||h[s]||m[s]||r;return a?n.createElement(d,p(p({ref:e},c),{},{components:a})):n.createElement(d,p({ref:e},c))}));function d(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=a.length,p=new Array(r);p[0]=s;var l={};for(var o in e)hasOwnProperty.call(e,o)&&(l[o]=e[o]);l.originalType=t,l[h]="string"==typeof t?t:i,p[1]=l;for(var u=2;u<r;u++)p[u]=a[u];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},54221:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>p,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var n=a(87462),i=(a(67294),a(3905));const r={title:"Node API & CLI Team Update",slug:"2023-12-08-node-cli-api",authors:"carlos",tags:["cli-api"],hide_table_of_contents:!1},p="Node-Api-Cli Update",l={permalink:"/2023-12-08-node-cli-api",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2023-12-08-node-cli-api.md",source:"@site/blog/2023-12-08-node-cli-api.md",title:"Node API & CLI Team Update",description:"High level summary",date:"2023-12-08T00:00:00.000Z",formattedDate:"December 8, 2023",tags:[{label:"cli-api",permalink:"/tags/cli-api"}],readingTime:2.2,hasTruncateMarker:!1,authors:[{name:"Carlos LopezDeLara",title:"Node Product Owner",url:"https://github.com/CarlosLopezDeLara",imageURL:"https://github.com/CarlosLopezDeLara.png",key:"carlos"}],frontMatter:{title:"Node API & CLI Team Update",slug:"2023-12-08-node-cli-api",authors:"carlos",tags:["cli-api"],hide_table_of_contents:!1},prevItem:{title:"Network Team Update",permalink:"/2023-12-08-network"},nextItem:{title:"SRE Team Update",permalink:"/2023-12-08-sre"}},o={authorsImageUrls:[void 0]},u=[{value:"High level summary",id:"high-level-summary",level:2},{value:"cardano-cli",id:"cardano-cli",level:3},{value:"cardano-api",id:"cardano-api",level:3},{value:"cardano-node",id:"cardano-node",level:3},{value:"cardano-testnet",id:"cardano-testnet",level:3},{value:"docs",id:"docs",level:3},{value:"CI &amp; project maintenance",id:"ci--project-maintenance",level:3}],c={toc:u},h="wrapper";function m(t){let{components:e,...a}=t;return(0,i.kt)(h,(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"2023-11-15---2023-12-08"},"2023-11-15 - 2023-12-08"),(0,i.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,i.kt)("p",null,"This is sprint was mostly about bug fixing, code clean-ups and optimizations in preparation for a mainnet suitable release."),(0,i.kt)("h3",{id:"cardano-cli"},"cardano-cli"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-cli/pull/511"},"Unify previous governance action parameters across actions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-cli/pull/510"},"Release 8.17.0.0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-cli/pull/507"}," Restore the inclusion of datum hashes in Alonzo era tx bodies")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-cli/pull/498"},"create-staked: add test")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-cli/pull/497"},"create-staked: simplify some code")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-cli/pull/495"},"Remove unused cabal file code")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-cli/pull/491"},"New version cardano-cli-8.16.0.1")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-cli/pull/490"},"Fix era mismatch error in stake-address-info")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-cli/pull/489"},"Release 8.16.0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-cli/pull/488"},"Add create-testnet-data command")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-cli/pull/487"},"Rename stake-address-info field: stakeDelegation -> delegation for eras prior to Conway")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-cli/pull/486"},"Update the ",(0,i.kt)("inlineCode",{parentName:"a"},"--key-output-format")," help text: default is text-envelope")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-cli/pull/484"},"Complete help texts for ",(0,i.kt)("inlineCode",{parentName:"a"},"create-protocol-parameters-update"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-cli/pull/483"},"Fix using queryStakeVoteDelegatees in eras before conway")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-cli/pull/481"},"Use node queries with tighter eons. Simplify prettyprinting.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-cli/pull/479"},"Add support for Plutus V3 in command line interface")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-cli/pull/478"},"Remove Byron Tx")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-cli/pull/476"},"Use ",(0,i.kt)("inlineCode",{parentName:"a"},"selectStakeCredentialWitness")," instead of duplicating credential selection")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-cli/pull/475"},'Revert "query protocol parameters: use ledger instances"')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-cli/pull/470"},"governance action: prefix stake-verification-key/stake-key arguments with --deposit-return")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-cli/pull/469"},"Fix NodeEraMismatchError mismatch")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-cli/pull/467"},"Byron isolation 2 of n")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-cli/pull/466"},"Fix description of ",(0,i.kt)("inlineCode",{parentName:"a"},"vote-delegation-certificate")," command")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-cli/pull/464"},"New version ",(0,i.kt)("inlineCode",{parentName:"a"},"cardano-cli-8.15.0.0"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-cli/pull/463"},"Integration work for Node 8.7.0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-cli/pull/460"},"Align create-constitution anchor flags with other anchor flags")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-cli/pull/459"},"conway governance hash: add option to write hash to file (--out-file)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-cli/pull/458"},"Update pCmds to take ",(0,i.kt)("inlineCode",{parentName:"a"},"ShelleyBasedEra era")," instead of ",(0,i.kt)("inlineCode",{parentName:"a"},"Cardano era"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-cli/pull/457"},"Add one missing extended to non extended golden tests")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-cli/pull/456"},"Correct conway parser, so that --key-reg-deposit-amt is mandatory"))),(0,i.kt)("h3",{id:"cardano-api"},"cardano-api"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-api/pull/399"},"Release 8.36.1.1")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-api/pull/398"},"Restore the inclusion of datum hashes in Alonzo era tx bodies")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-api/pull/396"},"New version cardano-api-8.36.1.0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-api/pull/395"},"Expose AnyProposals and AnyRatificationState")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-api/pull/394"},"New version ",(0,i.kt)("inlineCode",{parentName:"a"},"cardano-api-8.36.0.0"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-api/pull/393"},"New ",(0,i.kt)("inlineCode",{parentName:"a"},"ToJSON")," instance for ",(0,i.kt)("inlineCode",{parentName:"a"},"TxValidationErrorInCardanoMode"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-api/pull/392"},"Update to latest consensus release")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-api/pull/390"},"Fix generated textEnvelope type on registering a Stake Address Registration Certificate")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-api/pull/389"},"New version ",(0,i.kt)("inlineCode",{parentName:"a"},"cardano-api-8.35.0.0"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-api/pull/388"},"Expose NewGovernanceProposals and EpochBoundaryRatificationState ledger events")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-api/pull/387"},"Remove renderEra. Rename prettyTo",(0,i.kt)("em",{parentName:"a"}," to docTo")," functions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-api/pull/386"},"Guard queries with their respective eras")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-api/pull/385"},"Release 8.34.1")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-api/pull/383"},"Expose ",(0,i.kt)("inlineCode",{parentName:"a"},"stakeCredentialWitness")," function, which returns only stake credentials for the certificates requiring witnessing: delegation and deregistration")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-api/pull/382"},"Remove ByronTx")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-api/pull/381"},"New version ",(0,i.kt)("inlineCode",{parentName:"a"},"cardano-api-8.34.0.0"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-api/pull/379"},(0,i.kt)("inlineCode",{parentName:"a"},"ToJSON")," instance for ",(0,i.kt)("inlineCode",{parentName:"a"},"TxValidationError"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-api/pull/378"},"Parameterize ",(0,i.kt)("inlineCode",{parentName:"a"},"createAndValidateTransactionBody")," on ",(0,i.kt)("inlineCode",{parentName:"a"},"ShelleyBasedEra era"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-api/pull/377"},"New version ",(0,i.kt)("inlineCode",{parentName:"a"},"cardano-api-8.33.0.0"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-api/pull/375"},"Minor ",(0,i.kt)("inlineCode",{parentName:"a"},"prettyprinter")," fixes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-api/pull/374"},"Export ",(0,i.kt)("inlineCode",{parentName:"a"},"AllegraEraOnwards"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-api/pull/371"},"New version ",(0,i.kt)("inlineCode",{parentName:"a"},"cardano-api-8.32.0.0"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-api/pull/370"},"Use ",(0,i.kt)("inlineCode",{parentName:"a"},"Pretty")," for rendering errors instead of ",(0,i.kt)("inlineCode",{parentName:"a"},"Show")))),(0,i.kt)("h3",{id:"cardano-node"},"cardano-node"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/5566"},"Bump CHaP")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/5562"},"Allow text-1")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/5560"},"Release cardano-node 8.7.1")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/5557"},"Bump CHaP")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/5551"},"Forcefully disable PeerSharing if InitiatorMode is used")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/5541"},"Optimize new tracing further"))),(0,i.kt)("h3",{id:"cardano-testnet"},"cardano-testnet"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/5566"},"Bump CHaP")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/5558"},"Transaction submission test via ",(0,i.kt)("inlineCode",{parentName:"a"},"cardano-submit-api"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/5557"},"Bump CHaP")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/5552"},"Transaction integration test"))),(0,i.kt)("h3",{id:"docs"},"docs"),(0,i.kt)("h3",{id:"ci--project-maintenance"},"CI & project maintenance"))}m.isMDXComponent=!0}}]);