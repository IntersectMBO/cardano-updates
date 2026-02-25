---
title: Performance & Tracing Update
slug: 2026-01-30-performance-and-tracing                                                 
authors: mgmeier
tags: [performance-tracing]
hide_table_of_contents: false
---

## High level summary

* **Benchmarking**: Updated `10.5` and `10.6` performance baselines; Local reproduction of LSM-trees benchmark isolating space leak; merged LSM-tree profiles.
* **Development**: HTTPS connections with `cardano-tracer`; `PromQL`-like query language and metrics timesieries for `cardano-tracer`.
* **Infrastructure**: Reporting pipeline switched to new typesetting tool; `10.5.x` backports to re-enable cluster benchmarks; extensive improvements to workbench's profiling capabilites and `nix` API.
* **Tracing**: Shared traces between `cardano-node` and `dmq-node`; `cardano-submit-api` switched to new tracing; Small improvements to default configs.
* **Node Diversity**: Comprehensive formal schema definition for trace messages; Proof-of-concept: Trace forwarding in native Rust.

## Low level overview


### Benchmarking

We've re-established performance baselines for both the `10.5` and `10.6` branches of Node releases. When many small changes accumulate over time, it's necessary to factor them into the baseline (unless they show regressions) - otherwise
one loeses the ability to efficiently localize underlying causes of performance metric changes.  

Last month's cluster benchmark of LSM-trees pointed towards a space leak in the integration. To be certain, we successfully aimed to locally recreate network behaviour that was observed in the cluster. With this at hand, Consensus engineers
managed to localize it and create a potential fix - validation on the cluster still outstanding.  

In the meantime, the benchmarking profiles targeting on-disk LSM-trees have been solidified, merged to `master` and eternalized in our encyclopedia of benchmarking profiles `cardano-profile`. 

### Development

The trace consumer and processor service `cardano-tracer` is currently being upgraded with optionally HTTPS enabled connections. For scraping or browsing Node metrics, in case the connection crosses public networks, it's highly recommended to encrypt traffic. So far
this has to be achieved by placing `cardano-tracer` behind a webserver proxy which speaks HTTPS; with the planned change `cardano-tracer` can be configured to do this directly when provided with the relevant certificates.  

The work on aggregating timeseries of Node metrics and evaluating `PromQL`-like queries over them is almost complete. Currently, it's a standalone application; we're planning to integrate it into `cardano-tracer` as a next step. We've had SRE review
the up to now unnamed query language for conciseness and utility - a sort of UAT if you will. This building block forms the foundation for alerts or monitoring dashboard data queries, which in the future can be handled directly by `cardano-tracer`, if so desired.

### Infrastructure

The integration of the [Typst] typesetting document compiler into our reporting pipeline is completed and merged to `master` in [cardano-node PR#6418]. Not only does that enable richer document features for the future; it also compiles
much faster than the previos Emacs Org mode / LaTeX based pipeline - and produces smaller and more accessible PDF files. The PR also drops a `nix` flake input required by the previous pipeline, which should result in smaller and faster workbench
builds both locally and in CI - and de-risk future `nixpkgs` bumps.  

We performed some necessary backports from `master` to re-enable the `release/10.5.x` branch for cluster benchmarking. As cluster maintenance has moved on and deviated over the months, we're now ready to swiftly benchmark a potential new `10.5` patch
release, should it see the light of day ([cardano-node PR#6421]).  

We also merged a large PR ([cardano-node PR#6380]) that brings many improvements to the performance workbench. We reworked the configuration of profiled builds (where the Haskell runtime itself profiles execution). There
is now full support for info-table profiling, and much more flexibility in configuring the runtime to write out an eventlog. Our automation now grants a long enough grace period to write out all profile data before Node processes are terminated.
The PR also cleaned up the workbench's `nix` API, leading to more straightforward dependency resolution, a cleaner separation of concerns, removal of dead code, and an improved hit/miss ratio for cached binaries.

### Tracing

Establishing `trace-dipatcher` (the Node's new tracing system) as the default for `dmq-node` is nearly complete. We're currently performing a large refactoring with the goal to share code defining trace rendering between `cardano-node` and `dmq-node`;
they do use the same `ouroboros-network` components after all. This will avoid redundant implementation, and ensure the same traces are emitted the same way by either application.

We've ported a separate package in the Node project, `cardano-submit-api`, to use `trace-dispatcher` for logging and metrics - with nearly no changes to messages and metrics at the surface: [cardano-node PR#6326]. This removes the legacy tracing dependency
from the Submit API - a requirement to eventually retire the system from the Node as well. However, as legacy tracing is no longer supported, users are advised to adjust their configs accordingly starting with `cardano-submit-api-10.2`.  

We've also merged a small PR ([cardano-node PR#6409]) that contains improvements to the new tracing system for both users and implementors. Most prominently, we've adjusted default values and configs to prevent accidental misconfiguration
of the forwarding backend - which should make for a better user experience and adoption.

### Node Diversity

Additionally, we've been working on building a comprehensive formal schema definition of all the Node's existing trace messages. The Haskell Node being the current reference implementation, it is a logical starting point. The goal is
to provide a fully compliant JSON schema so any tooling, or verification suite, can automatically derive parsers from it. Furthermore, it should be renderable into human-readable formal documentation. We believe this to be crucial
to enable unified trace semantics across diverse Node implementations; right now, we're still evaluating the most effective approach to maintain this over a long time, and guarantee consistency with the implementation.  

Last but not least, we're building a proof-of-concept of how to implement our forwarding mini-protocol in Rust. This would allow for all Rust-based projects to emit Cardano-style structured traces directly, and forward them to a running
`cardano-tracer` for logging, processing and metrics exposition.


[cardano-node PR#6418]: https://github.com/IntersectMBO/cardano-node/pull/6418
[cardano-node PR#6421]: https://github.com/IntersectMBO/cardano-node/pull/6421
[cardano-node PR#6380]: https://github.com/IntersectMBO/cardano-node/pull/6380
[cardano-node PR#6326]: https://github.com/IntersectMBO/cardano-node/pull/6326
[cardano-node PR#6409]: https://github.com/IntersectMBO/cardano-node/pull/6409
[Typst]: https://typst.app/docs
