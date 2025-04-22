---
title: Benchmarking -- Node 10.3.1
slug: 2025-04-performance-10.3.1
authors: mgmeier
tags: [benchmarking-reports]
hide_table_of_contents: false
---

## Setup

As part of the release benchmarking cycle, we're comparing benchmarking runs for 2 different versions of `cardano-node`:
* `10.2` - baseline from the previous release (bulit with GHC8.10.7)
* `10.3.0-ghc8107` - the current release built with GHC8.10.7
* `10.3.0-ghc965` - the current release built with GHC9.6.5

For this benchmark, we're gathering various metrics under 2 different workloads:
1. _value-only_: Each transaction consumes 2 inputs and creates 2 outputs, changing the UTxO set. This workload produces full blocks (> 80kB) exclusively.
2. _Plutus_: Each transaction contains a Plutus script exhausting the per-tx execution budget. This workload produces small blocks (< 3kB) exclusively.

Benchmarking is performed on a cluster of 52 block producing nodes spread across 3 different AWS regions, interconnected using a static, restricted topology. All runs
were performed in the Conway era.  

`10.3.1` supports two compiler versions, which will be taken into account when comparing performance of different builds of that release.

## Observations

These benchmarks are about evaluating specific corner cases in a constrained environment that allows for reliable reproduction of results; they're not trying to directly recreate the operational conditions on Mainnet.  

### Resource Usage

1. `10.3.1` exhibits a clear reduction in Process CPU usage, more prominent under _value workload_:
    * value workload: 10% with GHC8, and 24% with GHC9.
    * Plutus workload: 4% GHC8, and 6% with GHC9.
2. There also is a reduction in RAM usage, more prominent under _Plutus workload_:
    * value workload: 1% or ~54MiB with GHC8, and 6% or ~574MiB with GHC9.
    * Plutus workload: 14% or ~1.2GiB with GHC9 only.
3. Minor GCs and Allocation rate both drop on `10.3.1`, more significantly under _value workload_:
    * value workload: 11% each with GHC8, and 24% each with GHC9.
    * Plutus workload: 3% and 1% with GHC8; 5% and 4% with GHC9. 
4. Under value workload, CPU 85% spans _increase_ by 45% with GHC8, but only by 14% with GHC9.
5. Under Plutus workload, those spans _decrease_ by 5% with GHC8; even by 19% with GHC9.

Caveat: Individual metrics can't be evaluated in isolate; the resource usage profile as a whole provides insight into the system's performance and responsiveness.

### Forging Loop

1. Under value workload, several block production metrics improve clearly on `10.3.1`, most prominently Mempool Snapshotting.
2. With GHC8, the improvement is 23%, with further significant improvements in Adoption time (11%) and Ledger ticking (10%).
3. With GHC9, the improvement is 27%, with further significant improvements in Adoption time (10%) and Ledger ticking (17%).
4. Under value workload, this enables a block producer to announce a header earlier into the slot, namely by 23ms (GHC8) and by 28ms (GHC9).
5. Under Plutus workload, Adoption time _increases_ by 3ms (6%) with GHC8, but _decreases_ by 8ms (15%) with GHC9.
6. Furthermore, there are no significant changes to the header announcement timing.

The metric _'Slot start to announced'_ (see in attachments) is cumulative, and demonstrates how far into a slot the block producing node first announces the new header.

### Peer propagation

1. Under value-only workload only, we observe an increase in Block Fetch duration: 7ms (2%) with GHC8, and 23ms (7%) with GHC9.
2. Block adoption times on the peers improve clearly: 11ms (12%) with GHC8, and 12ms (14%) with GHC9.
3. Under Plutus workload, however, similarly to the block producer, adoption times _increase_ by 3ms (6%) with GHC8, but _decrease_ by 7ms (13%) with GHC9.

### End-to-end propagation

This metric encompasses block diffusion and adoption across specific percentages of the benchmarking cluster, with 0.80 adoption meaning adoption on 80% of all cluster nodes.  

1. Under value workload, cluster adoption times on `10.3.1` are largely unchanged.
2. With GHC8, there are 5% and 3% improvements in the 50th and 100th centiles; with GHC9, there's a small 3% improvement in the 50th centile.
3. Under Plutus workload, with GHC8, there's a moderate 6% _increase_ in cluster adoption times in the 100th centile.
4. With GHC9, however, there's a small 2% _improvement_ in all but the 100th centile.

### Conclusion

_Conclusion_

1. For `10.3.1` we could not detect any performance risks or regressions.
2. Improving resource usage was a stated goal for the `10.3` release; this could be confirmed via measurements for CPU and RAM usage as well as CPU spikes.
3. `10.3.1` achieves network performance comparable to `10.2.1` using clearly less system resources - for both compiler versions.
4. Several key metrics improve on `10.3.1`: Block producers announce a new header sooner into the slot; we observe lower adoption times (GHC9 only).
5. The GHC9.6.5 build has demonstrable performance advantages over the GHC8.10.7 build; especially the Plutus interpreter seems to gain considerably from using GHC9. For those reasons we now recommend *GHC9.6.x* for production builds.


## Attachments

Full report for _value-only workload_, PDF downloadable [here](../static/pdf/benchmarking/release-10.3.1.value-only.pdf).

Full report for _Plutus workload_, PDF downloadable [here](../static/pdf/benchmarking/release-10.3.1.plutus.pdf).  

NB. The benchmarks for `10.3.1` were performed on tag `10.3.0`. The patch version bump did not include changes relevant to performance; thus, measurements performed on `10.3.0` remain valid.

