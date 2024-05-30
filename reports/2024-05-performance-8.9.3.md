---
title: Benchmarking -- Node 8.9.3
slug: 2024-05-performance-8.9.3
authors: mgmeier
tags: [benchmarking-reports]
hide_table_of_contents: false
---

## Setup

As part of the release benchmarking cycle, we're comparing benchmarking runs for 2 different versions of `cardano-node`:
* `8.9.1` - baseline from a previous mainnet release
* `8.9.3` - the current mainnet release

For each version, we're gathering various metrics under 2 different workloads:
1. _value-only_: Each transaction consumes 2 inputs and creates 2 outputs, changing the UTxO set. This workload produces full blocks (> 80kB) exclusively.
2. _Plutus_: Each transaction contains a Plutus script exhausting the per-tx execution budget. This workload produces small blocks (< 3kB) exclusively.

Benchmarking is performed on a cluster of 52 block producing nodes spread across 3 different AWS regions, interconnected using a static, restricted topology. All runs
were performed in the Babbage era.


## Observations

These benchmarks are about evaluating specific corner cases in a constrained environment that allows for reliable reproduction of results; they're not trying to directly recreate the operational conditions on Mainnet.  

### Resource Usage

1. Under value workload, CPU usage increases slightly on `8.9.3`: 4% for Process, 3% for Mutator and 8% for GC.
2. Additionally, Allocation rate and minor GCs increase slightly by 3% each.
3. Under Plutus workload only, the GC live dataset increases by 10% or 318MB.
4. CPU 85% spans increase by 14% of slot duration under value workload, whereas they shorten by 5% of slot duration under Plutus workload.

Caveat: Individual metrics can't be evaluated in isolate; the resource usage profile as a whole provides insight into the system's performance and responsiveness.

### Forging Loop

1. There are no significant changes to metrics related to block forging.

The metric _'Slot start to announced'_ (see in attachments) is cumulative, and demonstrates how far into a slot the block producing node first announces the new header.

### Peer propagation

1. Block Fetch duration improves by 7ms (or 2%) under value workload, and by 4ms (or 3%) under Plutus workload.
2. Under Plutus workload, Fetched to sending improves by 2ms (or 5%).

### End-to-end propagation

This metric encompasses block diffusion and adoption across specific percentages of the benchmarking cluster, with 0.80 adoption meaning adoption on 80% of all cluster nodes.  

1. Under value workload, cluster adoption times exhibit a minor improvement (1%) up to the 80th centile on `8.9.3`.
2. Under Plutus workload, we can observe a minor improvement overall (1% - 2%), whilst full adoption is unchanged.


### Conclusion

* The performance changes measured between `8.9.3` and `8.9.1` are very minor, with `8.9.3` improving slightly over `8.9.1`.
* Mainnnet performance of `8.9.3` is expected to be akin to `8.9.1`.
* We have not observed any performance regression being introduced in `8.9.3`.

## Contact

As for publishing such benchmarking results, we are aware that more context and detail may be needed with regard to specfic metrics or benchmarking methodology. 

We are still looking to gather questions, both general and specific, so that we can provide a suitable FAQ and possibly improve presentation in the future.

## Attachments

Full report for _value-only workload_, PDF downloadable [here](../static/pdf/benchmarking/release-8.9.3.value-only.pdf).

Full report for _Plutus workload_, PDF downloadable [here](../static/pdf/benchmarking/release-8.9.3.plutus.pdf).

NB. The baseline for `8.9.1` had to be re-established due to changes in the underlying network infrastructure. This means, absolute values may differ from the previous measurements taken from that version.
