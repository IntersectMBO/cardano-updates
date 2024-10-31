---
title: Benchmarking -- Node 10.1.1
slug: 2024-10-performance-10.1.1
authors: mgmeier
tags: [benchmarking-reports]
hide_table_of_contents: false
---

## Setup

As part of the release benchmarking cycle, we're comparing benchmarking runs for 2 different versions of `cardano-node`:
* `9.2.0` - baseline from a previous mainnet release
* `10.1.1` - the current mainnet release

For this benchmark, we're gathering various metrics under 3 different workloads:
1. _value-only_: Each transaction consumes 2 inputs and creates 2 outputs, changing the UTxO set. This workload produces full blocks (> 80kB) exclusively.
2. _Plutus_: Each transaction contains a Plutus script exhausting the per-tx execution budget. This workload produces small blocks (< 3kB) exclusively.
3. _value+voting_: On top of above value workload, this one has DReps vote on and ratify governance actions - forcing additional computation for vote tallying and proposal enactment.

Benchmarking is performed on a cluster of 52 block producing nodes spread across 3 different AWS regions, interconnected using a static, restricted topology. All runs
were performed in the Conway era.

## Observations

These benchmarks are about evaluating specific corner cases in a constrained environment that allows for reliable reproduction of results; they're not trying to directly recreate the operational conditions on Mainnet.  

### Resource Usage

1. `10.1.1` shows an improvement of 4% (8% under Plutus workload) in Process CPU usage.
2. Allocation Rate improves by 8% (11% under Plutus workload), while Heap Size remains unchanged.
3. CPU 85% spans decrease by 18% (5% under Plutus workload).
4. Compared to value-only workload, ongoing voting leads to a slight increase of 5% in Process CPU usage.

Caveat: Individual metrics can't be evaluated in isolate; the resource usage profile as a whole provides insight into the system's performance and responsiveness.

### Forging Loop

1. Under Plutus workload, `10.1.1` exhibits a formidable speedup of 70ms in the forging loop - due to mempool snapshots being produced much more quickly.
2. Under value workload, there are no significant changes to forger metrics.
3. With voting added on top of the value workload, we can observe mempool snapshots and adoption time on the block producer rise by 10ms each.

The metric _'Slot start to announced'_ (see in attachments) is cumulative, and demonstrates how far into a slot the block producing node first announces the new header.

### Peer propagation

1. Block Fetch duration increases slightly by 16ms (or 5%) under value workload.
2. Under Plutus workload, there are no significant changes to peer-related metrics.
3. With the additional voting workload, peer adoption times rise by 12ms on average - confirming the observation for adoption time on the block producer.

### End-to-end propagation

This metric encompasses block diffusion and adoption across specific percentages of the benchmarking cluster, with 0.80 adoption meaning adoption on 80% of all cluster nodes.  

1. `10.1.1` exhibits a slight increase of 2% - 3% in cluster adoption times under value workload.
2. Under Plutus workload however, we observe significant improvement of 18% up to the 50th centile, and 9% - 13% in the 80th centile and above.
3. While the former is due to slightly increased Block Fetch duration, the latter is the consequence of much quicker mempool snapshots involving Plutus transactions.
4. Submitting the additional voting workload, we can observe a consistent 4% - 6% increase in cluster adoption times across all centiles.

### Conclusion

* We do not detect any perfomance regression in `10.1.1` compared to `9.2.0`.
* To the contrary - `10.1.1` is lighter on the Node process resource usage overall.
* Improved forging and diffusion timings can be expected for blocks heavy on Plutus transactions.
* Stressing the governance / voting capabalities of the Conway ledger lets us ascertain an (expected) performance cost of voting.
* This cost has demonstrated to be reasonable, and to not contain lurking perfomance risks to the system.
* It is expected to manifest only during periods of heavy vote tallying / proposal enactment, slightly affecting block adoption times.

NB. The same amount of DReps are registered for each workload. However, only under _value+voting_ do they become active by submitting votes. This requires an increased UTxO set size, so it uses
a baseline seperate from _value-only_, resulting in slightly different absolute values.  

## Contact

As for publishing such benchmarking results, we are aware that more context and detail may be needed with regard to specfic metrics or benchmarking methodology. 

We are still looking to gather questions, both general and specific, so that we can provide a suitable FAQ and possibly improve presentation in the future.

## Attachments

Full report for _value-only workload_, PDF downloadable [here](../static/pdf/benchmarking/release-10.1.1.value-only.pdf).

Full report for _Plutus workload_, PDF downloadable [here](../static/pdf/benchmarking/release-10.1.1.plutus.pdf).  

Full report for _value+voting workload_, PDF downloadable [here](../static/pdf/benchmarking/release-10.1.1.voting.pdf).  

NB. The release benchmarks for `10.1.1` were performed on tag `10.0.0-pre`. The minor version bump did not include changes relevant to performance; thus, measurements taken on `10.0.0-pre` remain valid.

