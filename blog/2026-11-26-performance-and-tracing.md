---
title: Performance & Tracing Update
slug: 2026-11-26-performance-and-tracing
authors: mgmeier
tags: [performance-tracing]
hide_table_of_contents: false
---

## High level summary

* **Benchmarking**: Node 11.2 release benchmarks; Dijkstra feature benchmarks: Nested Txns, reference script pricing, mempool / EB capacity; Leios Week45 benchmarks.
* **Development**: Performance fixes for Node 11.2 closing space leak; `locli` analysis tool gets new major release 3.0.
* **Tracing**: Correctness fixes for Tracing System; Alert manager ongoing work, currently focused on robust test harness.
* **Infrastructure**: Dijkstra feature workloads along with `tx-generator` new major release 3.0 (draft PR); New `workbench` DuckDB/Parquet layer for compact, queryable logs (in testing); `workbench` maintenance.
* **Leios**: Leios workload generator `tx-centrifuge` being equipped with Plutus workloads.
* **Node Diversity**: Contributions to the London Workshop - Performance Observability Spec and `workbench` integration.

## Low level overview

### Benchmarking

The Performance & Tracing team has run, analyzed and published benchmarks for the Node 11.2 release. The full comparison against the `11.1` baseline, including our observations and conclusions, is available in the [Performance report for 11.2.1].  

In parallel, our performance workbench (the benchmarking automation framework) picked up a first round of benchmarks for upcoming Dijkstra-era features - nested transactions, reference script pricing, and mempool / EB (Endorser Block) capacity - to assess their
performance characteristics ahead of any hard fork. The reference script results have been shared internally and are under discussion, while raw benchmark data for nested txns and mempool / EB capacity is still under analysis.  

We've also continued our cluster benchmarks for Leios, this time on the Week45 build; we were able to empirically validate an important performance optimization, resulting in the certification of almost every EB, even when the network is under permanent, extreme submission pressure.  

### Development

While working towards the Node 11.2 release in general, the team was also directly involved in closing two memory regressions. The more severe one had been flagged as a known issue since Node 11.1, with community complaints: writing a ledger snapshot no longer temporarily grows live memory by about the snapshot's own size, and the node's overall memory footprint drops markedly on top of that. See the [Performance report for 11.2.1] for the full before/after picture. A second, smaller leak - introduced only in the 11.2.0 pre-release and caught before it reached anyone - retained part of the genesis ledger state for the node's entire lifetime; also fixed ([ouroboros-consensus PR#2478]).  

Our analysis tool `locli` also reached a new major release, `3.0`. It drops support for the legacy tracing formats that current node versions no longer emit, and its comparison reports are now Typst-only, so rendering a PDF no longer needs an Emacs/LaTeX toolchain. The release also adds new report sections for ledger snapshots and transaction processing, alongside a number of smaller metric fixes ([cardano-node PR#6720]).  

### Tracing

November brought three correctness fixes across the tracing stack. A node could crash outright if an I/O error occurred while it was writing its own trace output to stdout - including while trying to print that very error - which is now guarded against ([hermod-tracing PR#24]). Separately, Hermod's Prometheus metrics server could end up permanently refusing a scraping host after a few socket timeouts, because an interrupted connection-close skipped releasing that host's reserved slot; the slot is now always released, even when the close itself is interrupted ([hermod-tracing PR#29]). And on `cardano-node`, a block producer could exit with status 1 on a clean, planned shutdown, because its ledger-metrics tracer kept querying the already-closed ChainDB; the tracer now runs in consensus's own resource registry, so it's cancelled before the ChainDB closes - this fix is currently under review ([cardano-node PR#6782]).  

The monitoring/alarm system ([cardano-node PR#6664]) moved into its second phase in November: log-consumer dispatch now carries a rule's source, id, severity and summary rather than just a consumer name, and the timeseries producer gained a typed configuration and a pure, edge-triggered state machine (inactive / pending / active) with configurable "for" and "repeat every" windows and deterministic series keys. The evaluator thread and value decoding are left for a later iteration.  

Last month's trace-filtering optimization work has since been validated and merged, for both Hermod and `trace-dispatcher` ([hermod-tracing PR#27]): dropping a filtered-out trace message is now roughly 5x cheaper in time and allocation, with no measurable difference for `cardano-node` itself, whose own trace volume is too low for the saving to show up.  

### Infrastructure

Our performance workbench is getting `tx-generator` ready for the Dijkstra era: a new major release, `3.0`, adds a generator for nested transactions - transactions that themselves carry sub-transactions - script variants and reference scripts for Plutus workloads (so the ledger's script-decoding cache can't hide their true cost), and support for Plutus V4 ([cardano-node PR#6776]). Transactions are now built through `cardano-api`'s new `Compatible` interface rather than the deprecated functions it replaces. The PR is currently under review.  

Separately, the workbench gained a new DuckDB/Parquet layer for its logs, still in testing ([cardano-node feature branch]): a run's node, generator and explorer logs are converted once into compact Parquet files, queryable directly with SQL via DuckDB instead of being re-parsed from raw text for every analysis. Beyond faster, ad-hoc queries for our own analysts, it also lets us cross-check `locli`'s own metrics independently over the same data, and query a remote run's logs over SSH without copying them off the benchmark host first.  

A smaller workbench maintenance PR has been merged ([cardano-node PR#6764]): safer handling of a run's metadata (no more silently truncated or placeholder-filled manifests on a fetch), a configurable override for the ledger-snapshot schedule, and a new `6-dense` profile family on Protocol Version 10.  

### Leios

Our Leios workload generator `tx-centrifuge` is being equipped with Plutus workloads, catching up to what `tx-generator` already offers for Praos benchmarks. The goal is to measure the performance impact of different execution-budget limits for EBs - how tightly such a limit can be set before it starts constraining throughput. This is still early-stage work, with no branch yet to point to.  

### Node Diversity

At the London Workshop, ICAN's CEO presented the team's work on a Cardano node performance observability specification ([cardano-node branch]). The branch holds two companion documents. The first specifies which events any Cardano node implementation - not only the Haskell one - has to emit so its performance can be analyzed by our workbench and compared against other implementations under the same workload: for each event, the precise moment it marks and what its payload means, grouped into conformance tiers so an implementation can start with the essentials (block production, diffusion, resource usage) and add detail later. The second document covers everything else a node needs to take part in a workbench benchmark run: delivery as a self-contained executable, a fixed invocation with no node-specific flags from the workbench, and a clearly bounded, self-declared footprint in cores and memory.  

Together, the two documents are meant to give the ecosystem one yardstick for all node implementations - a precise, implementation-agnostic way to measure and compare performance across different Cardano clients.  


[References for Benchmarking]: # 
[Performance report for 11.2.1]: https://updates.cardano.intersectmbo.org/reports/2026-11-performance-11.2.1

[References for Development]: # 
[cardano-node PR#6720]: https://github.com/IntersectMBO/cardano-node/pull/6720
[ouroboros-consensus PR#2478]: https://github.com/IntersectMBO/ouroboros-consensus/pull/2478

[References for Tracing]: # 
[hermod-tracing PR#29]: https://github.com/IntersectMBO/hermod-tracing/pull/29
[hermod-tracing PR#24]: https://github.com/IntersectMBO/hermod-tracing/pull/24
[cardano-node PR#6782]: https://github.com/IntersectMBO/cardano-node/pull/6782
[hermod-tracing PR#27]: https://github.com/IntersectMBO/hermod-tracing/pull/27
[cardano-node PR#6664]: https://github.com/IntersectMBO/cardano-node/pull/6664

[References for Infrastructure]: # 
[cardano-node PR#6776]: https://github.com/IntersectMBO/cardano-node/pull/6776
[cardano-node feature branch]: https://github.com/IntersectMBO/cardano-node/tree/mkarg/experimental/wb-parquet-remote
[cardano-node PR#6764]: https://github.com/IntersectMBO/cardano-node/pull/6764

[References for Node Diversity]: # 
[cardano-node branch]: https://github.com/IntersectMBO/cardano-node/tree/mkarg/observability-spec

