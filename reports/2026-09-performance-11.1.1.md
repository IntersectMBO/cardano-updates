---
title: Benchmarking -- Node 11.1.1
slug: 2026-09-performance-11.1.1
authors: fmaste
tags: [benchmarking-reports]
hide_table_of_contents: false
---

## Setup

As part of the release benchmarking cycle, we're comparing benchmarking runs for 2 different versions of `cardano-node`:
* `11.0.1` - the current Node 11.0 performance baseline, running **Protocol Version 11**.
* `11.1.1` - the latest Node 11.1 release, running **Protocol Version 11**.

Both Node versions run under the same Protocol Version. `11.1.1` carries the same major component changes over `11.0.1` as the [previous release] did: Consensus `3.0` to `4.2`, Network `1.1` to `1.2`, Ledger `1.20` to `1.21`, and Plutus `1.63` to `1.65`. Against `11.1.0`, only Consensus moved (`4.1` to `4.2`), which is the release carrying the heap fixes; Network, Ledger and Plutus are the same builds.

For this benchmark, we're gathering various metrics under 2 different workloads:
1. _value-only_: Each txn consumes 2 inputs and creates 2 outputs, updating the UTxO set. Full blocks (> 80kB) exclusively; high submission pressure (TPS > 10).
2. _Plutus_: Each txn contains a Plutus script exhausting the per-tx execution budget. Small blocks (< 3kB) exclusively; low submission pressure (TPS < 1).

Benchmarking is performed on a cluster of 52 block producing nodes spread across 3 different AWS regions, interconnected using a static, restricted topology. All runs were performed in the Conway era using the in-memory LedgerDB backend, on GHC 9.6.7.


## Observations

These benchmarks are about evaluating specific corner cases in a constrained environment that allows for reliable reproduction of results; they're not trying to directly recreate the operational conditions on Mainnet.

### Resource Usage

1. `11.1.1` exhibits a _slight decrease_ in Process CPU usage by 6% under saturation (Mutator -6%, GC CPU -7%); under Plutus workload it is practically unchanged (-1%).
2. Allocation-side metrics under saturation follow suit: Allocation rate and Minor GCs _decrease_ by 10% each, Major GCs by 13%. Under Plutus workload, Allocation rate and Minor GCs are unchanged, Major GCs _decrease_ by 11%.
3. Memory footprint _increases_: Kernel RSS by +1.25 GiB or 19% under saturation (+0.52 GiB or 8% under Plutus), and the RTS live GC dataset by +1.01 GiB or 34% (+0.85 GiB or 33% under Plutus).
4. Observed CPU 85% span durations lengthen by 12% under saturation, and by 6% under Plutus workload.
5. Node start spread is 4x the baseline under saturation, and 4.5x under Plutus workload (21.9s against 5.6s, and 22.2s against 4.8s).

Caveat: Individual metrics can't be evaluated in isolate; the resource usage profile as a whole provides insight into the system's performance and responsiveness. The memory increase remains the dominant finding of this cycle and is treated separately in the Conclusion.

### Anomaly control

1. Under saturation workload, the host log line rate (the volume of trace messages emitted) _decreases_ by 6% (68.2 to 64.3 Hz); under Plutus workload it _increases_ by 1%.
2. Block sizes are unchanged, the generator configuration is identical across all four runs, and chain growth is unchanged. So is the Node invocation: the RTS is configured identically on all four runs, and the Node configuration differs only in the LedgerDB snapshot section's new syntax and in the silencing of the new Peras certificate database trace. That new syntax keeps the same 4230-slot interval, and the snapshot count per node is the same on both builds, 30 under saturation and 34 under Plutus. The comparison is sound.

### Forging Loop

1. Under saturation workload, Mempool snapshotting _improves_ by 5.9ms or 12%; net, a block producer announces a new header 6.7ms or 10% earlier into a slot. Every other stage of the forge loop moves by under 1ms.
2. Under Plutus workload, forge-loop timings show no significant change.

### Peer propagation

1. Under saturation workload, peers notice and request a new block 6.6ms or 8% - 9% earlier, carrying over the earlier header announcement.
2. Block Fetch duration is unchanged on both workloads: 3.5ms or 0.9% slower under saturation, 0.9ms or 0.6% faster under Plutus workload.

### End-to-end propagation

This metric encompasses block diffusion and adoption across specific percentages of the benchmarking cluster, with 0.80 adoption meaning adoption on 80% of all cluster nodes.

1. Under saturation workload, cluster adoption is unchanged: within 5ms, or 0.3% - 0.5%, from the 80th centile upward, and 2ms _faster_ at the median.
2. Under Plutus workload, cluster adoption is unchanged as well: within 3.5ms, or under 1%, from the 80th centile upward, with a 6.6ms or 2% _improvement_ at the median.

### Conclusion

1. The memory retention identified in the `11.1.0` cycle is resolved. The start-up processing of our benchmarks' very large Shelley genesis dataset no longer holds on to what it allocates. Withholding the closing statement then was the right call. It was hiding this cycle's actual finding.
2. What remains is a live dataset larger by roughly a third on both workloads. The retained floor is flat from epoch to epoch; what grew are the periodic peaks, by 1.0 GiB to 1.4 GiB. The peaks correspond with periodic work, such as the epoch boundary and the ledger snapshots; what holds that memory is not established. Our recommendation to confirm the floor over a longer horizon was taken up: on SRE's deployments memory plateaus after several days of continuous operation, so the increase is a step, not a slope. Leadership checks are not delayed and the forge loop is unaffected, so the assessment we withheld for `11.1.0` can now be made: the footprint is higher, but it is sound.
3. The CPU reduction under saturation is 6%, and it co-moves with an equally sized drop in the volume of trace messages emitted. The trace census puts that drop in the tx-submission and mempool families: `TxSubmission.TxInbound.CannotRequestMoreTxs` -9%, `Mempool.RejectedTx` -9%, `TxSubmission.TxInbound.Collected` and `TxSubmission.TxInbound.Processed` -6% each. Block production and diffusion traces are unchanged, so the Node is doing the same work with fewer tx-submission exchanges. It has to be relativized in the larger perspective anyway: there was a massive 46% - 71% reduction in CPU going from `10.6` to `10.7.1`.
4. Under saturation workload, `11.1.1` announces headers a few milliseconds earlier into a slot, and its peers notice and request blocks earlier by the same margin, at no cost downstream.
5. So `11.1.1` does carry one performance regression, and it is the memory footprint. The customary closing statement that a release did not exhibit any performance regressions cannot be made here. What we can say is narrower: the regression is bounded, it is sound, it is far smaller than the one measured for `11.1.0`, and nothing else we measure regressed. As always, it is worth bearing in mind that these benchmarks are designed to amplify trends: at Mainnet's load and connectivity, the observed effects will be less prominent and may well not manifest at all.

## Attachments

Full comparison for _value-only workload_, PDF downloadable [here](../static/pdf/benchmarking/release-11.1.1.value-only.pdf).

Full comparison for _Plutus workload_, PDF downloadable [here](../static/pdf/benchmarking/release-11.1.1.plutus.pdf).

NB. Both `11.0.1` baseline runs were re-executed alongside the `11.1.1` runs. Absolute values may therefore differ from the measurements published for that version in the [previous release] report.

[previous release]: /reports/2026-08-performance-11.1.0
