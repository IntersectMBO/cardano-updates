---
title: Benchmarking -- Node 10.6.0-pre
slug: 2025-11-performance-10.6.0-pre
authors: mgmeier
tags: [benchmarking-reports]
hide_table_of_contents: false
---

## Setup

As part of the release benchmarking cycle, we're comparing benchmarking runs for 2 different versions of `cardano-node`:
* `10.5` - baseline from the previous Node release
* `10.6.0-pre` - the current (pre-)release tag

For this benchmark, we're gathering various metrics under 2 different workloads:
1. _value-only_: Each transaction consumes 2 inputs and creates 2 outputs, changing the UTxO set. This workload produces full blocks (> 80kB) exclusively.
2. _Plutus_: Each transaction contains a Plutus script exhausting the per-tx execution budget. This workload produces small blocks (< 3kB) exclusively.

Benchmarking is performed on a cluster of 52 block producing nodes spread across 3 different AWS regions, interconnected using a static, restricted topology. All runs
were performed in the Conway era.  


## Observations

These benchmarks are about evaluating specific corner cases in a constrained environment that allows for reliable reproduction of results; they're not trying to directly recreate the operational conditions on Mainnet.  

### Resource Usage

1. `10.6.0-pre` exhibits a slight shift in CPU usage. It consumes 3% _less_ CPU time under saturation, whereas under a low submission workload it consumes 4% _more_.
2. Allocation rate and Minor GCs impact are significantly _reduced_ - (~45% and ~59% depending on workload). This takes much pressure away from the garbage collector.
3. RAM usage _increases_ significantly by 0.9GiB - 1.1GiB (15% - 17% depending on workload).
4. Observed CPU 85% spans are _longer_ -- ~3.1 slots under value and ~1.6 slots under Plutus workload.

Caveat: Individual metrics can't be evaluated in isolate; the resource usage profile as a whole provides insight into the system's performance and responsiveness.

### Forging Loop

1. We can observe slight _increases_ in Ledger Ticking and Mempool Snapshotting by 2ms each.
2. This causes a block producer to announce a new header 3ms - 4ms (or 6% - 12%) later into a slot.
3. Additionally, Adoption time on the block producer also increases by 3ms - 4ms.

The metric _'Slot start to announced'_ (see in attachments) is cumulative, and demonstrates how far into a slot the block producing node first announces the new header.

### Peer propagation

1. Under saturation workload only, Block Fetch duration increases by 7ms (or 2%).
2. Adoption times on the peers increase by 2ms - 3ms.

### End-to-end propagation

This metric encompasses block diffusion and adoption across specific percentages of the benchmarking cluster, with 0.80 adoption meaning adoption on 80% of all cluster nodes.  

1. Cluster adoption metrics on `10.6.0-pre` exhibit a small 2% - 3% increase across all centiles.
2. Under Plutus workload only, the increase becomes superlinear in 98th-100th centiles, with an extra 89ms (or 18%) required for full cluster adoption.

### Conclusion

1. The small increases in block production, diffusion and adoption metrics do not pose a performance risk to the network.
2. The restricted topology of the benchmark forces a regression in the tail end of the adoption metrics distribution to surface; in a live network, this is mitigated by a much higher number of connected peers / peer sharing.
3. The increase in RAM usage has so far not manifested on relay nodes deployed in a live network; as this is a pre-relase, the precise effect of our benchmark (exposing block producers to high pressure over extended time) is under investigation.

## Attachments

Full comparison for _value-only workload_, PDF downloadable [here](../static/pdf/benchmarking/release-10.6.0-pre.value-only.pdf).

Full comparison for _Plutus workload_, PDF downloadable [here](../static/pdf/benchmarking/release-10.6.0-pre.plutus.pdf).  
