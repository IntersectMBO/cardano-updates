---
title: Performance & Tracing Update
slug: 2026-06-26-performance-and-tracing
authors: mgmeier
tags: [performance-tracing]
hide_table_of_contents: false
---

## High level summary

* **Benchmarking**: `-O2` build optimization benchmarks.
* **Development**: Legacy `iohk-monitoring` tracing backend removed from `cardano-node`; RTView removed from `cardano-tracer`; `trace-dispatcher` maintenance and ongoing restructuring into Hermod packages.
* **Infrastructure**: Genesis cache overhaul with full Protocol Version 11 overlay close to merging.
* **Tracing**: ReCon framework and `trace-resources` moved to Hermod project; `cardano-tracer` timeseries HTTP API and Grafana datasource merged; ASCII operator spellings for `cardano-recon-framework`.

## Low level overview


### Benchmarking

The P&T team has performed benchmarks of a highly optimized build (`-O2`) vs. a build using standard optimization (`-O1`), the latter being the current default for our releases. The benchmarks demonstrated that under
low to near-idle submission load, no significant gains in resource usage were achieved. Only under full saturation over extended periods of time was a ~17% reduction in Process CPU usage measured, whereas RAM usage was stable. However,
in both cases, we observed small increases (3% - 6%) in block adoption times across the network. For the current Praos Node, we still recommend the default. When using another Consensus mode with a significantly higher
idle baseline, it's worth noting there's a potential trade-off that can be made.


### Development

Last month we reported that the removal of the legacy `iohk-monitoring`-based tracing backend from `cardano-node` was complete but awaiting final verification. That PR has now been merged ([cardano-node PR#6580]). The change eliminates approximately 11,000 lines of dead code across 15 modules and removes 9 transitive build dependencies, leaving `trace-dispatcher` as the sole tracing backend. With this out of the way, the remaining components of the new tracing system can be moved into the self-contained [Hermod Tracing System] project repository without coupling their release cycle to `cardano-node`. Please refer to the PR description for a detailed breakdown of now obsolete Node config keys.

Alongside that, RTView has been removed from `cardano-tracer` ([cardano-node PR#6607]). RTView was an experimental, opt-in browser dashboard hidden behind a build flag since version `0.2.4`. Its functionality is now fully covered by the Grafana datasource and the timeseries server built into `cardano-tracer`, making the component redundant. The removal cleans up 35 source files and several build dependencies.

The P&T team has also completed a focused maintenance pass over `trace-dispatcher` ([hermod-tracing PR#12]). Additionally, work is underway to restructure `trace-dispatcher` into two distinct packages — `hermod-tracing-api`, carrying types and combinators, and `hermod-tracing-core`, carrying the full backend stack including EKG and [Prometheus] ([hermod-tracing PR#16]). This split will allow downstream packages that only need to instrument their own code to avoid pulling in the full backend stack as a dependency.


### Infrastructure

The genesis cache overhaul for our performance workbench (the benchmarking automation framework) is completed and close to merging ([cardano-node PR#6544]). As reported last month, the new approach splits a genesis into two independently-cached halves — the heavy dataset (keys, UTxO entries, delegators, DReps) and the per-era protocol parameters — which are then reassembled on demand. This greatly widens the range of parameters a benchmarking profile can modify without causing a full cache miss. The PR additionally restores non-default Plutus cost models via the Alonzo genesis `extraConfig` field, and includes a full Protocol Version 11 overlay with the updated cost models and execution budgets that have been submitted as a governance action on mainnet.


### Tracing

With the legacy tracing removal merged, the `cardano-recon-framework` and the `trace-resources` package have both been moved from `cardano-node` into the [Hermod Tracing System] project. The ReCon framework has been accommodated under `hermod-tracing` ([cardano-node PR#6598], [hermod-tracing PR#11]); `trace-resources` — which provides cross-platform OS-level resource sampling (CPU, memory, network I/O, filesystem I/O, thread count) — has been renamed `hermod-trace-resources` ([hermod-tracing PR#14]), with its module namespace updated from `Cardano.Logging.Resources.*` to `Hermod.Tracing.Resources.*`. All logic, platform-specific C bindings, and tests are preserved unchanged.

The `cardano-tracer` timeseries HTTP API and its accompanying Grafana datasource, which we reported as being in testing last month, have now been merged ([cardano-node PR#6562]). The API provides [PromQL]-like queries over metrics timeseries stored by `cardano-tracer`, aligned closely with the Prometheus HTTP API schema so that existing Grafana integrations and community-built tooling can reuse familiar glue code. The Grafana datasource shipped alongside it replaces the now-removed RTView and includes a reference dashboard for operators to build from.

The `cardano-recon-framework` formula parsers now accept ASCII alternatives to their Unicode operators ([hermod-tracing PR#15]). Spellings such as `\globally`, `\finally`, `&&` and `=>` are now valid alongside the original Unicode forms, as are numeric indices in parentheses (e.g. `\globallyN(2)`). This makes authoring [LTL] properties more accessible in environments where Unicode input is inconvenient, and ships as part of `v1.4.0`.


[cardano-node PR#6580]: https://github.com/IntersectMBO/cardano-node/pull/6580
[cardano-node PR#6598]: https://github.com/IntersectMBO/cardano-node/pull/6598
[cardano-node PR#6607]: https://github.com/IntersectMBO/cardano-node/pull/6607
[cardano-node PR#6544]: https://github.com/IntersectMBO/cardano-node/pull/6544
[cardano-node PR#6562]: https://github.com/IntersectMBO/cardano-node/pull/6562
[hermod-tracing PR#11]: https://github.com/IntersectMBO/hermod-tracing/pull/11
[hermod-tracing PR#12]: https://github.com/IntersectMBO/hermod-tracing/pull/12
[hermod-tracing PR#14]: https://github.com/IntersectMBO/hermod-tracing/pull/14
[hermod-tracing PR#15]: https://github.com/IntersectMBO/hermod-tracing/pull/15
[hermod-tracing PR#16]: https://github.com/IntersectMBO/hermod-tracing/pull/16
[Hermod Tracing System]: https://github.com/IntersectMBO/hermod-tracing
[Prometheus]: https://prometheus.io/
[PromQL]: https://prometheus.io/docs/prometheus/latest/querying/basics/
[LTL]: https://en.wikipedia.org/wiki/Linear_temporal_logic
