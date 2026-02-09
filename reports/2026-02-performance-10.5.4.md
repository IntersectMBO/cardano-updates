---
title: Benchmarking -- Node 10.5.4
slug: 2026-02-performance-10.5.4
authors: mgmeier
tags: [benchmarking-reports]
hide_table_of_contents: false
---

## Setup

As part of the release benchmarking cycle, we're comparing benchmarking runs for 2 different versions of `cardano-node`:
* `10.5-baseline` - performance baseline from previous Node 10.5 releases
* `10.5.4` - the current Node 10.5.4 release

For this benchmark, we're gathering various metrics under 2 different workloads:
1. _value-only_: Each transaction consumes 2 inputs and creates 2 outputs, changing the UTxO set. This workload produces full blocks (> 80kB) exclusively.
2. _Plutus_: Each transaction contains a Plutus script exhausting the per-tx execution budget. This workload produces small blocks (< 3kB) exclusively.

Benchmarking is performed on a cluster of 52 block producing nodes spread across 3 different AWS regions, interconnected using a static, restricted topology. All runs
were performed in the Conway era.  


## Observations

These benchmarks are about evaluating specific corner cases in a constrained environment that allows for reliable reproduction of results; they're not trying to directly recreate the operational conditions on Mainnet.  

### Resource Usage

1. `10.5.4` exhibits a slight 3% _increase_ in Process CPU usage -- regardless of workload type.
2. RAM usage _decreases_ slightly by 3% (0.23GiB - 0.26GiB, depending on workload).
3. Observed CPU 85% span duration exhibits a very faint _increase_ -- between ~0.25 and ~0.35 slots.

Caveat: Individual metrics can't be evaluated in isolate; the resource usage profile as a whole provides insight into the system's performance and responsiveness.

### Forging Loop

1. For large blocks only, we can observe a small _increase_ in Adoption time by 2ms.
2. Beyond that, there are no significant changes to block production metrics.

The metric _'Slot start to announced'_ (see in attachments) is cumulative, and demonstrates how far into a slot the block producing node first announces the new header.

### Peer propagation

1. For large blocks, average Block Fetch duration _decreases_ by 2ms, but Adoption times on the peers _increase_ by 2ms.
2. For small blocks, average Block Fetch duration _increases_ by 5ms, but Adoption times on the peers _decrease_ by 3ms.

### End-to-end propagation

This metric encompasses block diffusion and adoption across specific percentages of the benchmarking cluster, with 0.80 adoption meaning adoption on 80% of all cluster nodes.  

1. Cluster adoption metrics on `10.5.4` exhibit no significant change under high submission / large blocks workload.
2. Under Plutus workload (low submission / small blocks), there's a minor _increase_ by 2% - 3% between the 80th and 98th centiles..

### Conclusion

1. The small up and down changes in Adoption times and Block fetch duration are well within margin of slack and do not pose any kind of performance risk.
2. Transitiviely, this applies to observed E2E propagation metrics as well.
3. All in all, `10.5.4` is pretty closely aligned with the existing 10.5 performance baseline.
4. From a performance perspective, we can determine it to be regression-free and attest a clean bill of health.

## Attachments

Full comparison for _value-only workload_, PDF downloadable [here](../static/pdf/benchmarking/release-10.5.4.value-only.pdf).

Full comparison for _Plutus workload_, PDF downloadable [here](../static/pdf/benchmarking/release-10.5.4.plutus.pdf).  
