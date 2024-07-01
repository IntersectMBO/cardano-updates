---
title: Benchmarking -- Node 8.12.1
slug: 2024-06-performance-8.12.1
authors: mgmeier
tags: [benchmarking-reports]
hide_table_of_contents: false
---

## Setup

As part of the release benchmarking cycle, we're comparing benchmarking runs for 2 different versions of `cardano-node`:
* `8.9.3` - baseline from a previous mainnet release
* `8.12.1` - the current mainnet release

For each version, we're gathering various metrics under 2 different workloads:
1. _value-only_: Each transaction consumes 2 inputs and creates 2 outputs, changing the UTxO set. This workload produces full blocks (> 80kB) exclusively.
2. _Plutus_: Each transaction contains a Plutus script exhausting the per-tx execution budget. This workload produces small blocks (< 3kB) exclusively.

Benchmarking is performed on a cluster of 52 block producing nodes spread across 3 different AWS regions, interconnected using a static, restricted topology. All runs
were performed in the Babbage era.


## Observations

These benchmarks are about evaluating specific corner cases in a constrained environment that allows for reliable reproduction of results; they're not trying to directly recreate the operational conditions on Mainnet.  

### Resource Usage

1. Under value workload, CPU usage is improved by 2% - 4%, and by 14% for GCs. Under Plutus workload, CPU usage improves only slightly by 1%.
2. Allocation Rate and Minor GCs improve by 5% and 6% - under Plutus workload, there's a slight improvement of 1%.
3. RAM usage is reduced by 3%; reduction under Plutus workload is even larger - namely 10%.

Caveat: Individual metrics can't be evaluated in isolate; the resource usage profile as a whole provides insight into the system's performance and responsiveness.

### Forging Loop

1. Mempool snapshotting improves by 5ms or 7% (3ms or 4% under Plutus workload).
2. Adoption time on the block producer improves by 4ms or 6% - under value workload only.

The metric _'Slot start to announced'_ (see in attachments) is cumulative, and demonstrates how far into a slot the block producing node first announces the new header.

### Peer propagation

1. Block Fetch duration increases slightly by 6ms or 2% (2ms under Plutus workload).
2. Adoption times on the peers improve slightly by 2ms or 3% (1ms under Plutus workload)

### End-to-end propagation

This metric encompasses block diffusion and adoption across specific percentages of the benchmarking cluster, with 0.80 adoption meaning adoption on 80% of all cluster nodes.  

1. Under value workload / full blocks there are no significant changes to cluster adoption times.
2. Under Plutus workload / small blocks we can observe a (near-jitter) improvement of 0% - 2% in cluster adoption times.


### Conclusion

* The performance changes measured between `8.12.1` and `8.9.3` are most distinct in the resource usage footprint - with `8.12.1` improving over `8.9.3`.
* On Mainnnet, `8.12.1` is expected to deliver equal or slightly better performance than `8.9.3` - as well as lowering the Node's resource usage somewhat in doing so.
* We have not observed any performance regression being introduced in `8.12.1`.

## Contact

As for publishing such benchmarking results, we are aware that more context and detail may be needed with regard to specfic metrics or benchmarking methodology. 

We are still looking to gather questions, both general and specific, so that we can provide a suitable FAQ and possibly improve presentation in the future.

## Attachments

Full report for _value-only workload_, PDF downloadable [here](../static/pdf/benchmarking/release-8.12.1.value-only.pdf).

Full report for _Plutus workload_, PDF downloadable [here](../static/pdf/benchmarking/release-8.12.1.plutus.pdf).

NB. The release benchmarks for `8.12.1` were performed on tag `8.12.0-pre`. The patch version bump did not include changes relevant to performance; thus, measurements taken on `8.12.0-pre` remain valid.
