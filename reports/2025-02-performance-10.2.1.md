---
title: Benchmarking -- Node 10.2.1
slug: 2025-02-performance-10.2.1
authors: mgmeier
tags: [benchmarking-reports]
hide_table_of_contents: false
---

## Setup

As part of the release benchmarking cycle, we're comparing benchmarking runs for 2 different versions of `cardano-node`:
* `10.1.4` - baseline from a previous mainnet release
* `10.2.1` - the current release

For this benchmark, we're gathering various metrics under 2 different workloads:
1. _value-only_: Each transaction consumes 2 inputs and creates 2 outputs, changing the UTxO set. This workload produces full blocks (> 80kB) exclusively.
2. _Plutus_: Each transaction contains a Plutus script exhausting the per-tx execution budget. This workload produces small blocks (< 3kB) exclusively.

Benchmarking is performed on a cluster of 52 block producing nodes spread across 3 different AWS regions, interconnected using a static, restricted topology. All runs
were performed in the Conway era.

## Observations

These benchmarks are about evaluating specific corner cases in a constrained environment that allows for reliable reproduction of results; they're not trying to directly recreate the operational conditions on Mainnet.  

### Resource Usage

1. CPU usage increases moderately by 12% under value, and very slightly by 2% under Plutus workload.
2. CPU 85% spans increase by 14% (~0.6 slots) under value workload, but decrease by 6% (~0.8 slots) under Plutus workload.
3. Only under value workload, we observe a slight increase in Allocation rate and Minor GCs of 9% and 8%

Caveat: Individual metrics can't be evaluated in isolate; the resource usage profile as a whole provides insight into the system's performance and responsiveness.

### Forging Loop

1. Adoption time on the forger improves by 3ms (or 4%) - and 5ms (or 9%) under Plutus workload.
2. Block context acquisition takes 3ms (or 12%) longer under value workload.
3. Under Plutus workload only, ledger ticking improves by 3ms (or 12%).

The metric _'Slot start to announced'_ (see in attachments) is cumulative, and demonstrates how far into a slot the block producing node first announces the new header.

### Peer propagation

1. Block fetch duration improves clearly by 16ms (or 4%) under value-only workload.
2. Under Plutus workload, we can measure an improvement by 4ms (or 7%) for adoption times on the peers.

### End-to-end propagation

This metric encompasses block diffusion and adoption across specific percentages of the benchmarking cluster, with 0.80 adoption meaning adoption on 80% of all cluster nodes.  

As a result of the above, on `10.2.1` exhibits:
1. a slight 3% improvement in cluster adoption times in the 80th centile and above under value workload.
2. a near-jitter 1% - 3% improvement in cluster adoption times under Plutus workload.

### Conclusion

1. We could not detect any significant regressions, or performance risks, on `10.2.1`.
2. `10.2.1` comes with slightly increased CPU usage, and no changes to RAM footprint.
3. Diffusion metrics very slightly improve - mainly due to block fetch being more efficient for full blocks, and adoption for blocks exclusively containing Plutus transactions.
4. This points to network performance of `10.2.1` being on par with or very slightly better than `10.1.4`.

## Attachments

Full report for _value-only workload_, PDF downloadable [here](../static/pdf/benchmarking/release-10.2.1.value-only.pdf).

Full report for _Plutus workload_, PDF downloadable [here](../static/pdf/benchmarking/release-10.2.1.plutus.pdf).  

NB. The benchmarks for `10.2.1` were performed on tag `10.2.0`. The patch version bump did not include changes relevant to performance; thus, measurements and observations performed on `10.2.0` remain valid.

