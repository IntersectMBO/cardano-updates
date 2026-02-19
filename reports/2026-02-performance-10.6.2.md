---
title: Benchmarking -- Node 10.6.2
slug: 2026-02-performance-10.6.2
authors: mgmeier
tags: [benchmarking-reports]
hide_table_of_contents: false
---

## Setup

As part of the release benchmarking cycle, we're comparing benchmarking runs for 2 different versions of `cardano-node`:
* `10.5.4` - the current Node 10.5 Mainnet release
* `10.6.2` - the current Node 10.6 Mainnet release

For this benchmark, we're gathering various metrics under 2 different workloads:
1. _value-only_: Each txn consumes 2 inputs and creates 2 outputs, changing the UTxO set. Full blocks (> 80kB) exclusively; high submission pressure (TPS > 10).
2. _Plutus_: Each txn contains a Plutus script exhausting the per-tx execution budget. Small blocks (< 3kB) exclusively; low submission pressure (TPS < 1).

Benchmarking is performed on a cluster of 52 block producing nodes spread across 3 different AWS regions, interconnected using a static, restricted topology. All runs
were performed in the Conway era.  


## Observations

These benchmarks are about evaluating specific corner cases in a constrained environment that allows for reliable reproduction of results; they're not trying to directly recreate the operational conditions on Mainnet.  

### Resource Usage

1. `10.6.2` exhibits a clear 6% _reduction_ in Process CPU usage under full saturation workload, and a 2% _reduction_ under Plutus workload.
2. Allocation rate and Minor GCs are significantly _reduced_ as well (~59% and 64% depending on workload).
3. Major GC events _go up_ by 27% and 34%, depending on workload.
4. Observed CPU 85% spans exhibit a clear _increase_ in duration -- ~4.1 and ~1.8 slots depending on workload.
5. RAM usage decreases by 19% and 24% depending on workload. **HOWEVER**: This is a known result of optimizations in the benchmarking setup. From a seperate benchmark with those optimizations applied on top of `10.5`, we know that `10.6.2` exhibits a very minor _increase_ (1% - 2%) in average Heap size, with a _reduction_ in maximum Heap size under saturation workload only.

Caveat: Individual metrics can't be evaluated in isolate; the resource usage profile as a whole provides insight into the system's performance and responsiveness.

### Forging Loop

1. We can observe Ledger Ticking _decrease_ by 3ms - 5ms.
2. Under saturation workload only, Mempool snapshotting and Forged to Sending exhibit small _increases_ by 2ms each.
3. As a result, a block producer is able to announce a new header 2ms - 3ms _earlier_ into a slot (depending on workload).
4. Self adoption on the forging node also _decreases_ by 2ms - 3ms.

The metric _'Slot start to announced'_ (see in attachments) is cumulative, and demonstrates how far into a slot the block producing node first announces the new header.

### Peer propagation

1. Block Fetch duration _decreases_ by 2% (3ms or 5ms, depending on workload).
2. For small blocks, Adoption times on the peers _increase_ by 2ms, however, for large blocks they _decrease_ by 3ms.

### End-to-end propagation

This metric encompasses block diffusion and adoption across specific percentages of the benchmarking cluster, with 0.80 adoption meaning adoption on 80% of all cluster nodes.  

1. Cluster adoption metrics on `10.6.2` exhibit no significant change under high submission / large blocks workload.
2. Under low submission / small blocks workload, there are _small improvements_ of 1% - 3% in the body of the distribution, and a 10% _increase_ in the 100th centile.

### Conclusion

1. `10.6.2` is more efficient in its usage of CPU time. Considered in conjunction with the increase in CPU 85% spans, it points to a redistribution of work which results in less bursts, and more plateaus.
2. Seeing there is no negative impact on block production and diffusion metrics, and considering the overall decrease in CPU usage, the CPU 85% span increase can't be interpreted as a risk to performance or responsiveneess.
3. The RAM increase observed on `10.6.0-pre` has been successfully fixed in `10.6.2`.
4. `10.6.2` is more efficient wrt. block production and diffusion.
5. Adoption metrics are largely equivalent to `10.5.4`; the 10% increase in the Plutus workload's 100th centile is an outlier resulting from the benchmark's very restrictive topology. Unless the increase also manifests in the 98th and 96th centiles, or below, it is not considered a risk.
6. From a performance perspective, we can determine `10.6.2` to be regression-free and attest a clean bill of health.

## Attachments

Full comparison for _value-only workload_, PDF downloadable [here](../static/pdf/benchmarking/release-10.6.2.value-only.pdf).

Full comparison for _Plutus workload_, PDF downloadable [here](../static/pdf/benchmarking/release-10.6.2.plutus.pdf).  
