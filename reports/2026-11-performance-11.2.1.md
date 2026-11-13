---
title: Benchmarking -- Node 11.2.1
slug: 2026-11-performance-11.2.1
authors: mgmeier
tags: [benchmarking-reports]
hide_table_of_contents: false
---

## Setup

As part of the release benchmarking cycle, we're comparing benchmarking runs for 2 different versions of `cardano-node`:
* `11.1.1` - the current Node 11.1 performance baseline
* `11.2.1` - the latest Node 11.2 release

For this benchmark, we're gathering various metrics under 2 different workloads:
1. _value-only_: Each txn consumes 2 inputs and creates 2 outputs, updating the UTxO set. Full blocks (> 80kB) exclusively; high submission pressure (TPS > 10).
2. _Plutus_: Each txn contains a Plutus script exhausting the per-tx execution budget. Small blocks (< 3kB) exclusively; low submission pressure (TPS < 1).

Benchmarking is performed on a cluster of 52 block producing nodes spread across 3 different AWS regions, interconnected using a static, restricted topology. All runs
were performed in the Conway era using the in-memory LedgerDB backend; the binaries were built with GHC9.6.7.


## Observations

These benchmarks are about evaluating specific corner cases in a constrained environment that allows for reliable reproduction of results; they're not trying to directly recreate the operational conditions on Mainnet.  

### Resource Usage

1. `11.2.1` exhibits a _moderate decrease_ in Process CPU usage by 5% under saturation (Mutator -6%, GC CPU -0.4%); under Plutus workload it is practically unchanged (-0.4%).
2. Memory footprint _decreases considerably_: Kernel RSS by -1.16 GiB or 14% under saturation (-0.59 GiB or 8% under Plutus), and the RTS live GC dataset by -1.01 GiB or 25% (-0.80 GiB or 23% under Plutus).
3. Allocation-side metrics follow suit: RTS allocation rate _decreases_ by 6% under saturation and 2% under Plutus workload; Minor GCs by 5% and 2% respectively.
4. Major GCs _increase slightly_ under saturation workload (+14%), while staying unchanged under Plutus workload; the absolute count remains a small fraction of a major GC per iteration either way.

Caveat: Individual metrics can't be evaluated in isolate; the resource usage profile as a whole provides insight into the system's performance and responsiveness.

### Forging Loop

1. Under saturation workload, Mempool snapshotting _improves_ by 2.1ms or 5%, partly offset by Ledger ticking lengthening by 0.7ms or 4%; net, 'Slot start to announced' is unchanged (-1%, under 1ms). Every other forge-loop stage moves by under 0.5ms.
2. Under Plutus workload, forge-loop timings show no significant change: Mempool snapshotting improves by 18%, but off a sub-millisecond base, and 'Slot start to announced' is flat (+0.6%).

The metric _'Slot start to announced'_ (see in attachments) is cumulative, and demonstrates how far into a slot the block producing node first announces the new header.

### Peer propagation

1. Block Fetch duration _improves_ on both workloads: by 15.8ms or 4% under saturation, and by 5.3ms or 4% under Plutus workload.
2. Every other individual peer-propagation metric only moves by under 2ms in either direction on both workloads.

### End-to-end propagation

This metric encompasses block diffusion and adoption across specific percentages of the benchmarking cluster, with 0.80 adoption meaning adoption on 80% of all cluster nodes.  

1. Under saturation workload, cluster adoption _improves_ by 7% (~75ms) from the 80th centile upward.
2. Under Plutus workload, cluster adoption _improves_ by 7% - 9% from the 80th centile upward, growing towards the tail (-9% or -49ms at the 100th centile).

### Other

1. The `11.1` ledger-snapshot memory issue is closed. 'Live after majGC, during' -- the live-memory peak while a snapshot is being written -- used to sit well above 'Live after majGC, outside' -- the non-snapshot baseline -- by ~479 MiB under saturation and ~424 MiB under Plutus workload on `11.1.1`. On `11.2.1`, that gap narrows to ~28 MiB under saturation, and turns slightly negative under Plutus workload. Taking a ledger snapshot no longer visibly grows live memory by about the snapshot's own size.
2. Transaction processing metrics show no notable change under either workload.

### Conclusion

1. `11.2.1` exhibits a considerable _decrease_ in memory footprint over `11.1.1`: Kernel RSS by 14% under saturation (8% under Plutus), and the RTS live GC dataset by 25% (23% under Plutus).
2. This closes the memory regression flagged as a known issue since `11.1.0`/`11.1.3`: the temporary memory growth while writing a ledger snapshot is gone (see Other), and the remainder of the footprint shrinks as well, rather than merely holding steady.
3. Taken together, `11.2.1` is expected to deliver block diffusion and adoption performance on par with `11.1.1`, trending better towards the tail end of cluster adoption, while running at a slightly reduced CPU cost and a markedly smaller memory footprint.
4. `11.2.1` does not exhibit any performance regressions. As always, it is worth bearing in mind that these benchmarks are designed to amplify trends: at Mainnet's load and connectivity, the observed effects will be less prominent.

## Attachments

Full comparison for _value-only workload_, PDF downloadable [here](../static/pdf/benchmarking/release-11.2.1.value-only.pdf).

Full comparison for _Plutus workload_, PDF downloadable [here](../static/pdf/benchmarking/release-11.2.1.plutus.pdf).  

