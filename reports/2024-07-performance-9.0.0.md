---
title: Benchmarking -- Node 9.0.0
slug: 2024-07-performance-9.0.0
authors: mgmeier
tags: [benchmarking-reports]
hide_table_of_contents: false
---

## Setup

As part of the release benchmarking cycle, we're comparing benchmarking runs for 2 different versions of `cardano-node`:
* `8.12.1` - baseline from a previous mainnet release
* `9.0.0` - the current mainnet release

For each version, we're gathering various metrics under 2 different workloads:
1. _value-only_: Each transaction consumes 2 inputs and creates 2 outputs, changing the UTxO set. This workload produces full blocks (> 80kB) exclusively.
2. _Plutus_: Each transaction contains a Plutus script exhausting the per-tx execution budget. This workload produces small blocks (< 3kB) exclusively.

Benchmarking is performed on a cluster of 52 block producing nodes spread across 3 different AWS regions, interconnected using a static, restricted topology. All runs
were performed in the Conway era.

## Observations

These benchmarks are about evaluating specific corner cases in a constrained environment that allows for reliable reproduction of results; they're not trying to directly recreate the operational conditions on Mainnet.  

### Resource Usage

1. Under value workload Process and Mutator CPU usage are slightly higher on `9.0` - 7% - 8% (4% each under Plutus workload). GC CPU is increased by 11%, but decreases under Putus workload by 3%.
2. Only under value workload, Allocation Rate and Minor GCs increase by 5% and the live GC dataset grows by 3%. Heap size is constant.
3. CPU 85% spans are 8% shorter (3% under Plutus workload).

Caveat: Individual metrics can't be evaluated in isolate; the resource usage profile as a whole provides insight into the system's performance and responsiveness.

### Forging Loop

1. Mempool Snapshotting and Self Adoption time on the block producer increase very slightly under value workload - 2ms (or 3%) each.
2. Under Plutus workload, however, a decrease in Self Adoption time by 2ms (or 4%) is the only significant change in the forging loop.

The metric _'Slot start to announced'_ (see in attachments) is cumulative, and demonstrates how far into a slot the block producing node first announces the new header.

### Peer propagation

1. Block Fetch duration is 21ms faster (6%) - 7ms or 5% under Plutus workload.
2. Fetched to Sending increases slightly by 3ms (7%) - only under value workload.
3. Adoption times on the peers increase slightly by 4ms (5%) - under Plutus workload, however, they are 3ms (6%) faster.

### End-to-end propagation

This metric encompasses block diffusion and adoption across specific percentages of the benchmarking cluster, with 0.80 adoption meaning adoption on 80% of all cluster nodes.  

1. Under value workload / full blocks on `9.0`, we can observe a 4% - 5% improvement of cluster adoption times in the 80th centile and above.
2. Under Plutus workload / small blocks, the corresponding improvement is 5% - 6%.
3. The main contributing factor is the improvement in Block Fetch duration.


### Conclusion

* Network performance clearly improves by ~%5 for 80% to full cluster adoption - independent of workload.
* RAM usage is unchanged on `9.0`. The slight rise in CPU usage is expected, given improved network performance, and does not pose cause for concern.
* We have not observed any performance regression being introduced in `9.0.0.`.

NB. These benchmarks were performed in the Conway ledger era. As such, they do not cover the one-time performance cost of transitioning from Babbage and enabling the new features of the Conway ledger.

## Contact

As for publishing such benchmarking results, we are aware that more context and detail may be needed with regard to specfic metrics or benchmarking methodology. 

We are still looking to gather questions, both general and specific, so that we can provide a suitable FAQ and possibly improve presentation in the future.

## Attachments

Full report for _value-only workload_, PDF downloadable [here](../static/pdf/benchmarking/release-9.0.0.value-only.pdf).

Full report for _Plutus workload_, PDF downloadable [here](../static/pdf/benchmarking/release-9.0.0.plutus.pdf).

NB. The release benchmarks for `8.12.1` were performed on tag `8.12.0-pre`. The patch version bump did not include changes relevant to performance; thus, measurements taken on `8.12.0-pre` remain valid.
