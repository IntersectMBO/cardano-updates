---
title: Benchmarking -- Node 8.9.1
slug: 2024-03-performance-8.9.1
authors: mgmeier
tags: [benchmarking-reports]
hide_table_of_contents: false
---

## Setup

As part of the release benchmarking cycle, we're comparing benchmarking runs for 2 different versions of `cardano-node`:
* `8.9.0` - baseline for previous mainnet release
* `8.9.1` - the next mainnet release

For each version, we're gathering various metrics under 2 different workloads:
1. _value-only_: Each transaction consumes 2 inputs and creates 2 outputs, changing the UTxO set. This workload produces full blocks (> 80kB) exclusively.
2. _Plutus_: Each transaction contains a Plutus script exhausting the per-tx execution budget. This workload produces small blocks (< 3kB) exclusively.

Benchmarking is performed on a cluster of 52 block producing nodes spread across 3 different AWS regions, interconnected using a static, restricted topology. All runs
were performed in the Babbage era.


## Observations

These benchmarks are about evaluating specific corner cases in a constrained environment that allows for reliable reproduction of results; they're not trying to directly recreate the operational conditions on Mainnet.  

### Resource Usage

1. We can observe an overall decrease in CPU usage (2% - 4%); only GC CPU usage under value workload increases by 3%.
2. Under value workload only, Allocation rate is very slightly decreased (1%) with no change to Heap Size.

Caveat: Individual metrics can't be evaluated in isolate; the resource usage profile as a whole provides insight into the system's performance and responsiveness.


### Forging Loop

1. Mempool Snapshot duration increases slightly by 2ms under value workload.
2. Self-Adoption time increases by 3ms.
3. All other forger metrics do not exhibit significant change.

The metric _'Slot start to announced'_ (see in attachments) is cumulative, and demonstrates how far into a slot the block producing node first announces the new header.

### Peer propagation

1. Under value workload only, Block Fetch duration and Fetched to Sending show a slight increase of 2ms each.

### End-to-end propagation

This metric encompasses block diffusion and adoption across specific percentages of the benchmarking cluster, with 0.80 adoption meaning adoption on 80% of all cluster nodes.  

End-to-end propagation times on `8.9.1` exhibit a small increase by 1% - 2% for full blocks, while remaining virtually unchanged for small blocks.


### Conclusion

* The performance changes measured between `8.9.1` and `8.9.0` are very minor. Mainnnet performance of `8.9.1` is expected to be akin to `8.9.0`.
* We have not observed any performance regression being introduced in `8.9.1`.

## Contact

As for publishing such benchmarking results, we are aware that more context and detail may be needed with regard to specfic metrics or benchmarking methodology. 

We are still looking to gather questions, both general and specific, so that we can provide a suitable FAQ and possibly improve presentation in the future.

## Attachments

Full report for _value-only workload_, PDF downloadable [here](../static/pdf/benchmarking/release-8.9.1.value-only.pdf).

Full report for _Plutus workload_, PDF downloadable [here](../static/pdf/benchmarking/release-8.9.1.plutus.pdf).
