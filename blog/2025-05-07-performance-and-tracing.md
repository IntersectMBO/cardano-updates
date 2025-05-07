---
title: Performance & Tracing Update
slug: 2025-05-07-performance-and-tracing
authors: mgmeier
tags: [performance-tracing]
hide_table_of_contents: false
---

## High level summary

* **Benchmarking**: `10.4.1` release benchmarks; UTxO-HD, GC settings and socket I/O feature benchmarks.
* **Development**: Abstracting over quick queries and trace queries; enabling query processing on remote hosts.
* **Infrastructure**: Workbench simplification merged; GHC8.10 tech debt removed.
* **New Tracing**: Provided hotfix for several metrics.

## Low level overview


### Benchmarking

We've completed release benchmarks for Node `10.4.1`. It is the first mainline release of an UTxO-HD node featuring `LedgerDB`. Leading up to the release, we previously performed and analysed UTxO-HD benchmarks. We were
able to document a regression in RAM usage, and assisted in pinpointing its origin, leading to it being fixed swiftly for the `10.4` release.  

Additionally, we ran feature benchmarks for a potential socket I/O optimization in the network layer, and GC setting changes catering to the now-default GHC9.6 compiler. Both benchmarks have shown moderate improvements in various performance metrics.
This might enable the network team to pick up the optimization for `10.5`. Also, we might be able to update the recommended GC settings for block producers, and add them to our own nix service configs for deployment.  

The `10.4.1` performance report has been published on [Cardano Updates].


### Development

We've further evolved the (still experimental) quick query feature of our analysis tool `locli`. Parametrizable quick queries allow for arbitrary queries into raw benchmarking data, uncovering correlations not part of standard analysis. They are implemented using composable definitions inside a filter-reduce framework. With `locli`'s DB storage backend, we can leverage the DB engine to do much of the work. Now, we're integrating a precursor to quick queries - so called trace queries - into the framework. Those can process raw trace
data from archived log files. Currently, we're adding an abstraction layer such that it is opaque to the framework whether the data was retrieved (and possibly pre-processed) from a DB or from raw traces.  

Furthermore, we added a custom (CBOR-based) serialization for intermediate results so a query can be evaluated on a remote machine - like the system archiving all benchmarking runs - but triggered, and its results visualized, on your localhost.

### Infrastructure

The workbench nix code optimization has finally been merged. Redundant derivations and recursions have been replaced; many nix store entries have been consolidated. Among other things, the new code also aims to maximize nix cache hits. Furthermore,
as GHC8.10 has now been officially retired from all build pipelines, we were able to clean up all tech debt in our automations that we had to keep around due to supporting the old compiler version.  

Exactly as we had hoped, this has brought down CI time for the Node by orders of magnitude; first, from over an hour to around 15 min, then to under 10 min. Also, all workbench shell invocations are significantly faster, and clutter in the nix store
is greatly reduced.

### New Tracing

We've been hurrying to provide hotfixes for `connectionManager_*` and `slotsMissed` metrics that were faulty on Node `10.3`. They have been successfully integrated into the Node `10.4` release.



[Cardano Updates]: https://updates.cardano.intersectmbo.org/reports/2025-05-performance-10.4.1