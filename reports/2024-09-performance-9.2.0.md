---
title: Benchmarking -- Node 9.2.0
slug: 2024-09-performance-9.2.0
authors: mgmeier
tags: [benchmarking-reports]
hide_table_of_contents: false
---

## Setup

As part of the release benchmarking cycle, we're comparing benchmarking runs for 2 different versions of `cardano-node`:
* `9.1.1` - baseline from a previous mainnet release
* `9.2.0` - the current mainnet release

For each version, we're gathering various metrics under 2 different workloads:
1. _value-only_: Each transaction consumes 2 inputs and creates 2 outputs, changing the UTxO set. This workload produces full blocks (> 80kB) exclusively.
2. _Plutus_: Each transaction contains a Plutus script exhausting the per-tx execution budget. This workload produces small blocks (< 3kB) exclusively.

Benchmarking is performed on a cluster of 52 block producing nodes spread across 3 different AWS regions, interconnected using a static, restricted topology. All runs
were performed in the Conway era.

## Observations

These benchmarks are about evaluating specific corner cases in a constrained environment that allows for reliable reproduction of results; they're not trying to directly recreate the operational conditions on Mainnet.  

### Resource Usage

1. Under value workload, `9.2.0` shows an increase by 7% in Process CPU usage.
2. Additionally, Allocation Rate and Minor GCs increase by 6% each, while Heap Size remains unchanged.
3. Furthermore, CPU 85% spans increase by 10%.
4. Under Plutus workload however, there's just one significant observation: a larger portion of the heap is considered live (6% or ~190MB) with the overall Heap Size remaining constant.

Caveat: Individual metrics can't be evaluated in isolate; the resource usage profile as a whole provides insight into the system's performance and responsiveness.

### Forging Loop

1. For the forger metrics, we can observe minor (1ms - 2ms) improvements in Ledger Ticking, Mempool Snapshotting and Self Adoption under value workload.
2. Under Plutus workload, there are minor (1ms - 2ms) increases in Ledger Ticking and Mempool Snapshotting.

The metric _'Slot start to announced'_ (see in attachments) is cumulative, and demonstrates how far into a slot the block producing node first announces the new header.

### Peer propagation

1. Block Fetch duration has improved by 11ms (or 3%) under value workload.
2. Under Plutus workload, peer Adoption times are slightly increased by 2ms (3%).

### End-to-end propagation

This metric encompasses block diffusion and adoption across specific percentages of the benchmarking cluster, with 0.80 adoption meaning adoption on 80% of all cluster nodes.  

1. Under value workload / full blocks, `9.2.0` exhibits a slight improvement of 1% - 3% in cluster adoption times.
2. Under Plutus workload / small blocks, there's a very minor increase by 1%.

### Conclusion

* We can not detect any perfomance regression in `9.2.0` compared to `9.1.1`.
* Under heavy value workload, `9.2.0` seems to perform work somewhat more eagerly. This would correlate with the slightly increased CPU usage, but also with the improvements in the forging and peer related metrics.
* The clearly increased efficiency of Block Fetch under heavy workload is the main contributing factor to the slight overall network performance improvement.

NB. These benchmarks were performed using an adjusted, post-Chang hardfork performance baseline to account for added features in the Conway ledger era. Thus, absolute measurements might differ now from those taken using the previous baseline.

## Contact

As for publishing such benchmarking results, we are aware that more context and detail may be needed with regard to specfic metrics or benchmarking methodology. 

We are still looking to gather questions, both general and specific, so that we can provide a suitable FAQ and possibly improve presentation in the future.

## Attachments

Full report for _value-only workload_, PDF downloadable [here](../static/pdf/benchmarking/release-9.2.0.value-only.pdf).

Full report for _Plutus workload_, PDF downloadable [here](../static/pdf/benchmarking/release-9.2.0.plutus.pdf).
