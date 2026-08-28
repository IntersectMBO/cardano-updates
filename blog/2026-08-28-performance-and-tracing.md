---
title: Performance & Tracing Update
slug: 2026-08-28-performance-and-tracing
authors: mgmeier
tags: [performance-tracing]
hide_table_of_contents: false
---

## High level summary

* **Benchmarking**: Node 11.1.0 release benchmarks.
* **Development**: `beacon` benchmark: new metric capturing disk access time for UTxO lookup; replaced Cairo rendering with `gnuplot` to reduce bloat and increase portability.
* **Tracing**: Alert manager feature for `cardano-tracer` now in implementation phase.
* **Leios**: On-disk LedgerDB tx validation times benchmark delivered; distributable, self-contained benchmark package in the works.
* **Organizational**: Decentralization of delivery: The entire Performance & Tracing team successfully moved from IOG to ICAN Group.


## Low level overview

### Benchmarking

The P&T team has performed and analyzed benchmarks, as well as pre-release bencharks, for the Node 11.1.0 release. While we did measure an increased resident set size, we also saw a clear reduction in process CPU usage. The memory increase
has already prompted an investigation and changes, which will make their way into a 11.1.1 patch release.

### Development

`beacon`'s comparison and variance reports now break `totalTime` outliers down into ledger-tick and table-read cost, and commit to a single `totalTime` metric instead of quietly double-counting table-read time into it — table-read time being what actually captures UTxO lookup cost against the on-disk backing store ([beacon PR#16], second of three parts split off from #13, still under review).  

We've also dropped `beacon`'s Cairo-based plotting backend entirely in favour of a small `gnuplot` wrapper ([beacon PR#21]). The old `Chart`/`Chart-cairo` dependency pulled in a full X11 client stack for a tool that only ever renders to PNG files; the switch shrinks the binary's shared-library footprint from 25 down to 5, and let us finally add macOS to CI.  

### Tracing

Following on from the alarm-system design work reported last time, we've moved into implementation ([cardano-node PR#6664]). The dispatch payload sent to alarm consumers now carries the source, rule ID, severity and a summary, instead of just the name of the consumer being notified; on the timeseries side, alarm rules are now backed by a small, pure, edge-triggered state machine — cycling through Inactive/Pending/Active states with configurable `for`/`repeatEvery` timing and a deterministic series key — while the evaluator thread and value decoder driving it are left for a follow-up PR.  

Native support for nested spans in Hermod remains ongoing work, with no PR created yet.  

### Leios

The on-disk LedgerDB tx validation benchmark work mentioned in our last two posts has been delivered: `beacon run` can now force the LSM backend to genuinely exercise disk I/O via a new `--lsm-no-cache` flag, bypassing the OS page cache through `O_DIRECT`, with `--mem-limit`/`--heap-limit` cgroup caps as a fallback for older `db-analyser` builds; every run also now reports peak RSS, block I/O counts, and a true wall-clock `totalTime` alongside the previous mutator-only timing ([beacon PR#12]). Concrete measurements from this on-disk backend are being published under [Leios issue#553], the original ask behind this benchmarking effort.  

In parallel, we're packaging this benchmark into a self-contained, distributable executable that SPOs can run on their own hardware without nix or network access ([beacon PR#22], based on #16). `glue` bundles glibc and its own `curl`/`unzip`, patches its own ELF interpreter at extraction time, and drives measurement, hardware profiling and report assembly through auditable shell scripts rather than Haskell. It's currently under review.  

### Organizational

As of this month, the entire Performance & Tracing team has moved from IOG to [ICAN Group]. The team has been warmly welcomed, and the move comes with a genuine sense of a fresh start — new structure, same people, same focus. Delivery on the Cardano Maintenance & Support proposal has continued without disruption throughout the transition; everything reported above was produced across the move.  



[References for Development]: # 
[beacon PR#16]: https://github.com/input-output-hk/ouroboros-consensus-tools/pull/16
[beacon PR#21]: https://github.com/input-output-hk/ouroboros-consensus-tools/pull/21

[References for Tracing]: # 
[cardano-node PR#6664]: https://github.com/IntersectMBO/cardano-node/pull/6664

[References for Leios]: # 
[beacon PR#12]: https://github.com/input-output-hk/ouroboros-consensus-tools/pull/12
[beacon PR#22]: https://github.com/input-output-hk/ouroboros-consensus-tools/pull/22
[Leios issue#553]: https://github.com/input-output-hk/ouroboros-leios/issues/553

[External References]: # 
[ICAN Group]: https://icangroup.co.uk
