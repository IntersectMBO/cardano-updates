---
title: Benchmarking -- Node 10.1.4
slug: 2025-01-performance-10.1.4
authors: mgmeier
tags: [benchmarking-reports]
hide_table_of_contents: false
---

## Setup

As part of the release benchmarking cycle, we're comparing benchmarking runs for 2 different versions of `cardano-node`:
* `10.1.1` - baseline from a previous mainnet release
* `10.1.4` - the current mainnet release

For this benchmark, we're gathering various metrics under 2 different workloads:
1. _value-only_: Each transaction consumes 2 inputs and creates 2 outputs, changing the UTxO set. This workload produces full blocks (> 80kB) exclusively.
2. _Plutus_: Each transaction contains a Plutus script exhausting the per-tx execution budget. This workload produces small blocks (< 3kB) exclusively.

Benchmarking is performed on a cluster of 52 block producing nodes spread across 3 different AWS regions, interconnected using a static, restricted topology. All runs
were performed in the Conway era.

## Observations

These benchmarks are about evaluating specific corner cases in a constrained environment that allows for reliable reproduction of results; they're not trying to directly recreate the operational conditions on Mainnet.  

### Resource Usage

1. CPU 85% spans slightly increase by 6% or ~0.2 slots (26% or ~2.9 slots under Plutus workload).
2. We can observe a tiny increase in memory usage by 1-2% (132-160 MiB).

Caveat: Individual metrics can't be evaluated in isolate; the resource usage profile as a whole provides insight into the system's performance and responsiveness.

### Forging Loop

1. Under value workload, Ledger Ticking and Self Adoption exhibit a very slight increase (2ms each).
2. Block Context Acquisition has improved by 2ms.
3. Under Plutus workload, there are no significant changes to forger metrics.

The metric _'Slot start to announced'_ (see in attachments) is cumulative, and demonstrates how far into a slot the block producing node first announces the new header.

### Peer propagation

1. There's a minor increase of 1% (3ms) in Block Fetch duration under value workload only.
2. Under Plutus workload, we can measure a small improvement by 2% for adoption times on the peers.

### End-to-end propagation

This metric encompasses block diffusion and adoption across specific percentages of the benchmarking cluster, with 0.80 adoption meaning adoption on 80% of all cluster nodes.  

As a result of the above, on `10.1.4` we can observe:
1. a tiny increase in cluster adoption times of 1%-2% in the 80th centile and above under value workload.
2. an improvement in cluster adoption times of 3%-4% in the tail end (95th centile and above) under Plutus workload.

### Conclusion

1. For `10.1.4`, we could not detect any regressions or performance risks.
2. All increases or decreases in forger and peer metrics are 3ms and less. This indicates network performance of `10.1.4` will very closely match that of `10.1.1` and subsequent patch releases.
3. There's no significant change in the resource usage pattern. The increased CPU 85% spans tend to barely manifest when the system is under heavy load (value workload); as such, they pose no cause for concern. 

## Attachments

Full report for _value-only workload_, PDF downloadable [here](../static/pdf/benchmarking/release-10.1.4.value-only.pdf).

Full report for _Plutus workload_, PDF downloadable [here](../static/pdf/benchmarking/release-10.1.4.plutus.pdf).  

NB. The benchmarks for `10.1.1` were performed on tag `10.0.0-pre`. The minor version bump did not include changes relevant to performance; thus, measurements taken on `10.0.0-pre` remain a valid baseline.

