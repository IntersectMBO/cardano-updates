---
title: Benchmarking -- Node 8.7.2
slug: 2023-12-performance-8.7.2
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

Benchmarking is performed on a cluster of 52 block producing nodes spread across 3 different AWS regions, interconnected using a static, restricted topology. All runs
were performed in the Babbage era.


## Observations

These benchmarks are about evaluating specific corner cases in a constrained environment that allows for reliable reproduction of results; they're not trying to directly recreate the operational conditions on Mainnet.  

The observations stated refer to the direct comparison between the `8.1.2` and `8.7.2` versions.

### Resource Usage

1. Plutus workload, having a lower overall absolute CPU load, exhibits an average increase of 27% in Process CPU usage. Value workload, having a higher overall absolute CPU load, exhibits a near-jitter increase of 1%.
2. Allocation rates increase by ~8.9MB/s (value workload) and ~12.6MB/s (Plutus workload).
3. Heap sizes increase by 47% - 54%.
4. CPU 85% span duration shrinks by ~9.7 slots under value workload, and ~5.8 slots under Pluts workload.

Caveat: Individual metrics can't be evaluated in isolate; the resource usage profile as a whole provides insight into the system's performance and responsiveness.


### Forging Loop

1. Block Context Acquisition in the forging loop increases by ~10ms.
2. Mempool snapshotting shows an increase by 16ms under value workload; under Plutus workload, it increases by 3ms.
3. Ledger ticking improves slightly by 1-2ms.

The metric _'Slot start to announced'_ (see in attachements) is cumulative, and demonstrates how far into a slot the block producing node first announces the new header.

### Peer propagation

1. Block fetch time increases for full blocks by 9%. For small blocks, it improves by 7%.
2. Time to resend a block after fetching increases by 8% for full blocks, whereas it improves by 2% for small blocks.
3. Block adoption by a peer takes 12% more time for a full block, but happens faster by 4% for a small block.

### End-to-end propagation

This metric encompasses block diffusion and adoption across specific percentages of the benchmarking cluster, with 0.80 adoption meaning adoption on 80% of all cluster nodes.

The metric exhibits an increase by ~10% across all centiles for full blocks, whereas it improves by 5-6% for small blocks in the higher (80th and above) centiles.

## Contact

This is the first time we're publishing, to a wider audience, such benchmarking results. We are aware that more context and detail may be needed with regard to specfic metrics or benchmarking methodology. 

We are looking to gather questions, both general and specific, so that we can provide a suitable FAQ and possibly improve presentation in the future.

## Attachments

Full report for _value-only workload_, PDF downloadable [here](../static/pdf/benchmarking/8.7.1_8.1.2_8.7.0-pre_8.7.1-pre.value-only.pdf).

Full report for _Plutus workload_, PDF downloadable [here](../static/pdf/benchmarking/8.7.1_8.1.2_8.7.0-pre_8.7.1-pre.plutus.pdf).

The relese benchmarks for `8.7.2` were performed on tag `8.7.1-pre`, which features identical `cardano-node` components.
