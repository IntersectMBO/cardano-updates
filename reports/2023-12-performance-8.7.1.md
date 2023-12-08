---
title: Benchmarking -- Node 8.7.1
slug: 2023-12-performance-8.7.1
authors: mgmeier
tags: [benchmarking-reports]
hide_table_of_contents: false
---

## Setup

As part of the release benchmarking cycle, we're comparing benchmarking runs for 3 different versions of `cardano-node`:
* `8.1.2` - the last mainnet release
* `8.7.0-pre` - as an intermediate reference point
* `8.7.2` - the next mainnet release

For each version, we're gathering various metrics under 2 different workloads:
1. _value-only_: Each transaction consumes 2 inputs and creates 2 outputs, changing the UTxO set. This workload produces full blocks (> 80kB) exclusively.
2. _Plutus_: Each transaction contains a Plutus script exhausting the per-tx execution budget. This workload produces small blocks (< 3kB) exclusively.

Benchmarking is performed on a cluster of 52 nodes spread across 3 different AWS regions, interconnected using a static, restricted topology. All runs
were performed in the Babbage era.


## Observations

*to be published calendar week 50*

## Conclusion

*to be published calendar week 50*

## Attachments

Full report for _value-only workload_, PDF downloadable [here](../static/pdf/benchmarking/8.7.1_8.1.2_8.7.0-pre_8.7.1-pre.value-only.pdf).

Full report for _Plutus workload_, PDF downloadable [here](../static/pdf/benchmarking/8.7.1_8.1.2_8.7.0-pre_8.7.1-pre.plutus.pdf).

The relese benchmarks for `8.7.2` were performed on tag `8.7.1-pre`, which features identical `cardano-node` components.
