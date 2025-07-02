---
title: Benchmarking -- Node 10.5.0
slug: 2025-07-performance-10.5.0
authors: mgmeier
tags: [benchmarking-reports]
hide_table_of_contents: false
---

## Setup

As part of the release benchmarking cycle, we're comparing benchmarking runs for 2 different versions of `cardano-node`:
* `10.4.1` - baseline from the previous Node release
* `10.5.0` - the current (pre-)release tag

For this benchmark, we're gathering various metrics under 2 different workloads:
1. _value-only_: Each transaction consumes 2 inputs and creates 2 outputs, changing the UTxO set. This workload produces full blocks (> 80kB) exclusively.
2. _Plutus_: Each transaction contains a Plutus script exhausting the per-tx execution budget. This workload produces small blocks (< 3kB) exclusively.

Benchmarking is performed on a cluster of 52 block producing nodes spread across 3 different AWS regions, interconnected using a static, restricted topology. All runs
were performed in the Conway era.  

## Preliminaries

1. The feature in `10.5` with major performance impact is periodic [ledger metrics]. This is exclusive to the [new tracing system].
2. `10.5` flips the default config for `PeerSharing` to `true`; however, the recommendation is to explicitly set it to `false` on block producers. If not for privacy issues alone, we also found disadvantageous performance impact on block production when enabled. Hence, our benchmarks do not factor in that overhead.

## Observations

These benchmarks are about evaluating specific corner cases in a constrained environment that allows for reliable reproduction of results; they're not trying to directly recreate the operational conditions on Mainnet.  

### Resource Usage

1. `10.5.0` shows a clear reduction in CPU usage - by ~30% regardless of workload type.
2. Furthermore, Allocation rate and GC impact are clearly reduced - by 27%-29% and 24%-25% respectively.
3. Heap size _increases_ very slightly under saturation (by 1%) and _decreases_ very slightly (by 1%) under Plutus workload.
4. CPU 85% spans are slightly _shorter_ (~0.2 slots) under saturation, and slightly _longer_ (~0.26 slots) under Plutus workload.

Caveat: Individual metrics can't be evaluated in isolate; the resource usage profile as a whole provides insight into the system's performance and responsiveness.

### Forging Loop

1. Block Context Acquisition time (prior to leadership check) is greatly reduced - from ~24ms to under 1ms.
2. Under saturation only, Ledger Ticking and Mempool Snapshotting exhibit very slight upticks (by 3ms and 2ms respectively).
3. Under Plutus workload only, Self Adoption on the forger exhibits a very slight uptick (by 3ms).
4. In summary, a block producer is able to announce a new header 20ms or 21% earlier into the slot (22ms or 43% under Plutus workload).

The metric _'Slot start to announced'_ (see in attachments) is cumulative, and demonstrates how far into a slot the block producing node first announces the new header.

### Peer propagation

1. Under saturation workload only, Block Fetch duration increases by 14ms (or 4%).
2. Under saturation, block adoption is slightly _faster_ (by 3ms), while under Plutus workload it's slightly _slower_ (by 2ms).

### End-to-end propagation

This metric encompasses block diffusion and adoption across specific percentages of the benchmarking cluster, with 0.80 adoption meaning adoption on 80% of all cluster nodes.  

1. Under saturation workload, cluster adoption times on `10.5.0` are identical to those on `10.4.1`.
2. Under Plutus workload, they show a moderate 3% - 5% _improvement_, with 7% in the 50th percentile.

### Conclusion

1. We could not detect any regressions or performance risks to the network on `10.5.0`.
2. CPU usage is clearly reduced.
3. The forging loop executes faster, new header announcements happen earlier.
4. Diffusion / adoption metrics exhibit a small overall improvement and indicate `10.5.0` will deliver network performance at least comparable to `10.4.1`.
5. All improvements listed above hinge on the [ledger metrics] feature and will materialize only when using the [new tracing system]. Using the legacy system, `10.5.0` performance is expected to be almost identical to `10.4.1`.

## Attachments

Full comparison for _value-only workload_, PDF downloadable [here](../static/pdf/benchmarking/release-10.5.0.value-only.pdf).

Full comparison for _Plutus workload_, PDF downloadable [here](../static/pdf/benchmarking/release-10.5.0.plutus.pdf).  

NB. The benchmarks for `10.5.0` extend to a potential `10.5.1` tag, as that won't include any changes with a performance impact; thus, measurements performed on `10.5.0` remain valid.


[new tracing system]: https://developers.cardano.org/docs/get-started/cardano-node/new-tracing-system/new-tracing-system
[ledger metrics]: https://github.com/IntersectMBO/cardano-node/pull/6180