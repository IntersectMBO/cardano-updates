---
title: Performance & Tracing Update
slug: 2026-09-30-performance-and-tracing
authors: mgmeier
tags: [performance-tracing]
hide_table_of_contents: false
---

## High level summary

* **Benchmarking**: Node 11.1.1 release benchmarks; LSM-trees (on-disk LedgerDB) benchmarks.
* **Development**: Benchmarking workload submission full Dijkstra support - as well as on-disk serialization for `db-synthesizer`.
* **Tracing**: Full switch to Hermod Tracing in planning; Alert manager for `cardano-tracer` is ongoing work; Native span tracing for Hermod.
* **Infrastructure**: `cardano-smartbench`: A detached performance workbench - feasibility.
* **Leios**: On-disk LedgerDB tx validation benchmark shipped to SPOs. First Leios tests on the performance cluster, including tooling updates.
* **Organizational**: Performance & Tracing Team Meetup in Helsinki.


## Low level overview

### Benchmarking

The P&T team has performed, analyzed and published benchmarks for the Node 11.1.1 release. While the CPU usage improvement persists, and the memory increase is smaller than with 11.1.0, it's still measurable. It was mentioned as a known issue for this
release. It seems to correlate with cyclic events such as ledger snapshotting, and while it has been observed on Mainnet as well, it did not represent an operational risk to the network.  

Furthermore, we re-ran the 11.0 baseline, as network latencies between cluster machines had changed since May 2026 and were confounding network-related performance metrics. We additionally ran benchmarks with a new Ledger feature that loads
huge datasets injected into ledger state in a streaming fashion, and we could validate it works as intended. This, however, is only relevant for testnets; the feature is blocked for Mainnet, as no data may be injected at all.  

Last but not least, for Node 11.1 we repeated benchmarks of on-disk LedgerDB stressing the UTxO set - both with and without artificial memory constraints on the process. Those benchmarks are currently under analysis.  

### Development

`tx-generator`, the workload-submission tool behind our benchmarking profiles, gained two new pieces of functionality ([cardano-node PR#6695]). It can now dump its generated transaction stream to disk - as plain text or as raw CBOR - instead of
always submitting it live against a running cluster, so other tools can inspect or validate a workload without needing a full cluster to generate against. At the same time, its era-specific code paths were extended to cover the Dijkstra era, so we
can generate and submit Dijkstra-era transactions for benchmarking purposes.  

The longer-term goal of writing an entire transaction workload to disk is having `db-synthesizer` as a consumer. It enables creation of fully valid Praos or Leios chain fragments in a short time - and those chain fragments will exhibit
all the properties defined in our benchmarking profiles.  

### Tracing

In one of the upcoming node versions after the Dijkstra hard fork, we plan on replacing the new tracing system (`trace-dispatcher`) with Hermod Tracing. While Hermod currently is at feature and API parity with `trace-dispatcher`, it makes a sensible
split between API and core packages, allowing for improved development in the future. But more importantly, it will enable some new tracing system features which have been deferred up to now, such as live reconfiguration of trace filter rules, and
single-source definition of tracers for all purposes - consistency checks, auto-documentation and of course trace emission. We're currently integrating Hermod into the Haskell node component stack and preparing for a smooth transition when the time comes.  

The implementation of the monitoring/alarm system is progressing ([cardano-node PR#6664]). Currently we're working on a robust test harness; a feature like this requires extremely rigorous coverage. Additionally, we're working on interfacing the system
with escalation channels, such as pagers, pager app APIs, email and so forth.  

Native support for nested spans in Hermod, which we've mentioned as exploratory work in earlier posts, has taken its first concrete shape: a new module implements Loki-style begin/end span tracing, pairing an opening and a closing trace message
under a shared span identifier ([hermod-tracing PR#19]). The PR is still fresh and under review.  

### Infrastructure

We've begun a feasibility study for detaching our performance workbench (the benchmarking automation framework) from the main Haskell node project - working title `cardano-smartbench`. It would let the workbench pick custom inputs, tooling and
analysis targets rather than being tied to the Haskell node project's own layout. This addresses issues for benchmarking branches that have diverged a long distance from the project `master` (such as Leios), and would also generalize the workbench
to work with clients other than the Haskell node in the future. The current challenge is keeping the existing CI guarantees alive on the Haskell node's `master` branch, without risking all downstream tooling silently going out of sync. As it's a
feasibility study, there's no PR for it (yet).  


### Leios

The transaction validation time benchmark has been turned into a self-contained, distributable executable and shipped to SPOs. It can run on their own hardware without any `nix` or Haskell/`cabal` stack. We're specifically interested in the on-disk measurements
for LedgerDB on a wide variety of configurations - as being I/O bound (vs. CPU and RAM only) implies being dependent on a much larger array of parameters, such as kernel version, SSD hardware and connection, file system choice and even mount options.  

We're currently testing our benchmarking automation on the performance cluster with the Leios prototype. While the numbers obtained from that won't be representative, we're preparing for the Leios Release Candidate: our infrastructure needs to support
everything Leios adds - from config values and protocol parameters to understanding Leios-specific timestamped events for performance analysis.  

### Organizational

This month, the Performance & Tracing team had a three-day in-person meetup in Helsinki. We had excellent discussions on focus shifts that come with our transition to ICAN Group. Additionally, we ideated means of making the team's delivery more accessible to
the wider Cardano community, especially non-technical people - as our direct audience is no longer only IOG engineers. Thank you to everyone who contributed their views and ideas!  



[References for Development]: # 
[cardano-node PR#6695]: https://github.com/IntersectMBO/cardano-node/pull/6695

[References for Tracing]: # 
[hermod-tracing PR#19]: https://github.com/IntersectMBO/hermod-tracing/pull/19
[cardano-node PR#6664]: https://github.com/IntersectMBO/cardano-node/pull/6664

