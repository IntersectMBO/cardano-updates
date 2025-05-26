---
title: Performance & Tracing Update
slug: 2025-05-26-performance-and-tracing
authors: mgmeier
tags: [performance-tracing]
hide_table_of_contents: false
---

## High level summary

* **Benchmarking**: Feature benchmarks for ledger metrics tracer and `InboundGovernor` optimizations.
* **Development**: Ledger metrics merged; 2 hotfixes for old tracing.
* **Infrastructure**: Migration plan for on-disk benchmarks (LMDB, LSM-tree); initial Leios impact analysis.
* **New Tracing**: Tracer service now independent of Node; new feature enabling forwarding over TCP.

## Low level overview


### Benchmarking

We've completed two distinct feature benchmarks: The new periodic ledger metrics tracer and `InboundGovernor` optimizations on the network layer. Both features have shown a positive performance impact; the former
improves CPU usage and block production metrics, the latter slightly improves diffusion metrics.

### Development

Having finalized and benchmarked the periodic ledger metrics tracer feature, it was merged to `master` and will be part of the upcoming `10.5` release. The feature decorrelates obtaining several metrics from the beginning of the forging loop.
This avoids competition for synchronization primitives during the "hot phase" of block production. Furthermore, by decoupling those metrics from a forging tracer, we enable exposing those metrics from a relay as well. [cardano-node PR#6180]

Additionally, we've been vital in creating two hotfixes for the old tracing system: 
1. The old tracing system metric `utxoSize` was missing due to using the pre-UTxO-HD variant of querying the set size. The fix ports the correct solution from the new tracing system to the old one: [cardano-node PR#6217]
2. On the upcoming Node `10.5` integration branch only, the old tracing system could leak file descriptors. Again, the fix was ported from the new tracing system to the old one - kudos to Karl Knutsson: [iohk-monitoring PR#654]

### Infrastructure

We've discussed and set up a migration plan for our benchmarking cluster hardware. For fair and representative performance measurements of on-disk backing stores of UTxO-HD, we require direct SSD storage on the machine instance in the cloud; running
disk I/O through additional layers to and from some shared SSD device, even in the same data center, would introduce significant confounding factors. The plan includes invalidating as little of our existing performance baselines as possible when
migrating to the new hardware. We're looking forward to benchmark the current on-disk backend (LMDB) for block producers - as well as the futuere LSM-tree based one.  

We've also discussed an initial Leios impact analysis. To fairly and reliably benchmark a future Leios implementation, our infrastructure and tooling will need to be extended significantly. Several metrics won't have the same
weight they currently carry for Praos, due to Leios' later finality; other metrics will need to be introduced for different new Leios block types, adding appropriate observability to the implementation. Finally, creating and submitting a saturation workload for a system which is built for extremely high throughput will be a challenge in itself.

### New Tracing

We've been working on a medium-sized refactoring that eliminates the `cardano-node` dependency from `cardano-tracer`. This means, the tracer service can now be built independently of the Node; all shared data types have been moved
to some more basic packages of the new tracing system. This also enables us to issue releases of the tracer service *independently* of the Node's release cycle. [cardano-node PR#6125]  

Last not least, we've kicked off development for a new feature that's been motivated by community feedback: Forwarding observables (trace messages, metrics) over TCP. Forwarding to different hosts currently assumes a UNIX domain socket that connects the Node and
the tracer service through an SSH tunnel. This is a portable, versatile, and probably one of the most secure ways to transmit sensitive data. However, in an environment where an operator controls all network port mapping and firewalls, one can
argue that forwarding over TCP/IP is equally viable, as it can be properly isolated - and it is much more convenient to set up and configure. The feature aims, when it's completed, to offer both forwarding routes, and let the end user decide.


[cardano-node PR#6180]: https://github.com/IntersectMBO/cardano-node/pull/6180
[cardano-node PR#6217]: https://github.com/IntersectMBO/cardano-node/pull/6217
[iohk-monitoring PR#654]: https://github.com/input-output-hk/iohk-monitoring-framework/pull/654
[cardano-node PR#6125]: https://github.com/IntersectMBO/cardano-node/pull/6125
