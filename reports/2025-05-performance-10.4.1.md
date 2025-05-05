---
title: Benchmarking -- Node 10.4.1
slug: 2025-05-performance-10.4.1
authors: mgmeier
tags: [benchmarking-reports]
hide_table_of_contents: false
---

## Setup

As part of the release benchmarking cycle, we're comparing benchmarking runs for 2 different versions of `cardano-node`:
* `10.3.1` - baseline from the previous Node release
* `10.4.1` - the current release

For this benchmark, we're gathering various metrics under 2 different workloads:
1. _value-only_: Each transaction consumes 2 inputs and creates 2 outputs, changing the UTxO set. This workload produces full blocks (> 80kB) exclusively.
2. _Plutus_: Each transaction contains a Plutus script exhausting the per-tx execution budget. This workload produces small blocks (< 3kB) exclusively.

Benchmarking is performed on a cluster of 52 block producing nodes spread across 3 different AWS regions, interconnected using a static, restricted topology. All runs
were performed in the Conway era.  

`10.4.1` features the UTxO-HD in-memory backing store `V2InMemory` of `LedgerDB`, which replaces the in-memory representation of UTxO entries in `10.3` and prior.

## Observations

These benchmarks are about evaluating specific corner cases in a constrained environment that allows for reliable reproduction of results; they're not trying to directly recreate the operational conditions on Mainnet.  

### Resource Usage

1. On `10.4.0` under value workload, Heap size increases slightly by 2%, and 5% under Plutus workload. This corresponds to using ~170MiB-390MiB additional RAM.
2. Allocation rate and GC impact are virtually unchanged.
3. Process CPU usage improves slightly by 2% regardless of workload type.
4. CPU 85% spans are slightly (~0.37 slots) _longer_ under value workload, and slightly _shorter_ (~0.33) under Plutus workload.

Caveat: Individual metrics can't be evaluated in isolate; the resource usage profile as a whole provides insight into the system's performance and responsiveness.

### Forging Loop

1. We can observe a clear improvement in Mempool snapshotting by 9ms or 16% (2ms or 8% under Plutus workload).
2. Self-Adoption time improves by 4ms or 5% (and remains virtually unchanged under Plutus workload).
3. Hence a block producer is able to announce a new header 10ms or 9% earlier into the slot (1ms or 2% under Plutus workload).

The metric _'Slot start to announced'_ (see in attachments) is cumulative, and demonstrates how far into a slot the block producing node first announces the new header.

### Peer propagation

1. Under value workload, Fetch duration and Fetched to Sending improve slightly by 3ms (1%) and 2ms (4%).
2. Under Plutus workload, Fetched to Sending has a slightly longer delay - 2ms (or 5%).

### End-to-end propagation

This metric encompasses block diffusion and adoption across specific percentages of the benchmarking cluster, with 0.80 adoption meaning adoption on 80% of all cluster nodes.  

1. Under value workload, cluster adoption times exhibit a small 1% - 3% _improvement_ across all percentiles.
2. Under Plutus workload, they show a small 1% - 2% _increase_ across all percentiles (except the 80th).

### Conclusion

1. We could not detect any regressions or performance risks to the network on `10.4.1`.
2. There is a small and reasonable price to pay in RAM usage for adding the `LedgerDB` abstraction and thus enable exchangeable backing store implementations.
3. On the other hand, CPU usage is reduced slightly by use of the in-memory backing store.
4. `10.4.1` is beneficial in all cases for block production metrics; specifically, block producers will be able to announce new headers earlier into the slot.
5. Network diffusion and adoption metrics vary only slightly and indicate `10.4.1` will deliver network performance comparable to `10.3.1`.

## Attachments

Full comparison for _value-only workload_, PDF downloadable [here](../static/pdf/benchmarking/release-10.4.1.value-only.pdf).

Full comparison for _Plutus workload_, PDF downloadable [here](../static/pdf/benchmarking/release-10.4.1.plutus.pdf).  

NB. The benchmarks for `10.4.1` were performed on tag `10.4.0`. The patch version bump did not include changes relevant to performance; thus, measurements performed on `10.4.0` remain valid. The same holds for `10.3.1` and `10.3.0`.

