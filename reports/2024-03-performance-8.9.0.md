---
title: Benchmarking -- Node 8.9.0
slug: 2024-03-performance-8.9.0
authors: mgmeier
tags: [benchmarking-reports]
hide_table_of_contents: false
---

## Setup

As part of the release benchmarking cycle, we're comparing benchmarking runs for 3 different versions of `cardano-node`:
* `8.7.2` - baseline for previous mainnet release
* `8.8.0` - an intermediate reference point
* `8.9.0` - the next mainnet release

For each version, we're gathering various metrics under 2 different workloads:
1. _value-only_: Each transaction consumes 2 inputs and creates 2 outputs, changing the UTxO set. This workload produces full blocks (> 80kB) exclusively.
2. _Plutus_: Each transaction contains a Plutus script exhausting the per-tx execution budget. This workload produces small blocks (< 3kB) exclusively.

Benchmarking is performed on a cluster of 52 block producing nodes spread across 3 different AWS regions, interconnected using a static, restricted topology. All runs
were performed in the Babbage era.


## Observations

These benchmarks are about evaluating specific corner cases in a constrained environment that allows for reliable reproduction of results; they're not trying to directly recreate the operational conditions on Mainnet.  

The observations stated refer to the direct comparison between the `8.7.2` and `8.9.0` versions.

### Resource Usage

1. Overall CPU usage exhibits a small to moderate (5% - 8%) increase.
2. Memory usage is very slightly decreased by 1%.

Caveat: Individual metrics can't be evaluated in isolate; the resource usage profile as a whole provides insight into the system's performance and responsiveness.


### Forging Loop

1. For full blocks, Mempool Snapshotting improves by 4% (or 3ms).
2. For small blocks, Self Adoption times improve by 8% (or 4ms).
3. All other forger metrics do not exhibit significant change.

The metric _'Slot start to announced'_ (see in attachments) is cumulative, and demonstrates how far into a slot the block producing node first announces the new header.

### Peer propagation

1. For full blocks, Block Fetch duration shows a notable improvement by 10ms (or 3%).

### End-to-end propagation

This metric encompasses block diffusion and adoption across specific percentages of the benchmarking cluster, with 0.80 adoption meaning adoption on 80% of all cluster nodes.  

End-to-end propagation times on `8.9.0` exhibit a small improvement by 2% across all centiles for full blocks, whereas they remain largely unchanged for small blocks.


### Conlusion

* The performance changes observed between `8.9.0` and `8.7.2` are only minor - with `8.9.0` slightly improving on `8.7.2`. Therefore, we'd expect `8.9.0` Mainnet performance to be akin to `8.7.2`.
* We have demonstrated no performance regression has been introduced in `8.9.0`.

## Contact

As for publishing such benchmarking results, we are aware that more context and detail may be needed with regard to specfic metrics or benchmarking methodology. 

We are still looking to gather questions, both general and specific, so that we can provide a suitable FAQ and possibly improve presentation in the future.

## Attachments

Full report for _value-only workload_, PDF downloadable [here](../static/pdf/benchmarking/release-8.9.0.value-only.pdf).

Full report for _Plutus workload_, PDF downloadable [here](../static/pdf/benchmarking/release-8.9.0.plutus.pdf).

NB. Mainnet release `8.7.3` did not include any performance-related changes; measurements taken on `8.7.2` remain valid.
