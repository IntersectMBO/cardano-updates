---
title: Memory Budget Scaling -- 10.3
slug: 2025-05-execbudget-memory-10.3
authors: mgmeier
tags: [benchmarking-reports]
hide_table_of_contents: false
---

## Setup

This report compares benchmarking runs for 3 different settings of the Plutus memory execution budget:
* `10.3-ghc965` - current mainnet memory execution budget
* `loop-memx1.5` - 1.5 x current mainnet memory execution budget
* `loop-memx2` - 2 x current mainnet memory execution budget

For this comparison, we gather various metrics under the _Plutus_ workload used in release benchmarks: Each block produced during the benchmark contains
4 identical script transactions calibrated to fully exhaust the memory execution budget. Thus, script execution is constrained by the memory budget limit
every case. The workload produces small blocks (< 3kB) exclusively. 

Benchmarking is performed on a cluster of 52 block producing nodes spread across 3 different AWS regions, interconnected using a static, restricted topology. Node
version 10.3 was used, built with GHC9.6.5. This is a re-run of the scaling benchmarks performed on Node version 10.2 / GHC8.10 to document impact of performance improvements. Those results
were published here on [Cardano Updates].

## Observations

### Resource Usage

1. Scaling the memory budget impacts Allocation Rate and Minor GCs. 1.5 x the budget results in rises of 5% each; for doubling the budget the corresponding rises are 8% and 9%.
2. Those increases seem to correlate linearly with raising mem budget.
3. The effects on CPU usage and RAM footprint are negligible for both scaling factors.

Caveat: Individual metrics can't be evaluated in isolate; the resource usage profile as a whole provides insight into the system's performance and responsiveness.

### Forging Loop

1. Scaling the memory budget has significant impact on block adoption time only.
2. Scaling by factor 1.5 leads to a 10ms (or 24%) increase, whereas factor 2 leads to 21ms (50%).

### Peer propagation

1. Same as on the block producer, scaling the memory budget has significant impact on block adoption times only.
2. Scaling by factor 1.5 leads to a 11ms (or 24%) increase, whereas factor 2 leads to 19ms (42%).
   
### End-to-end propagation

This metric encompasses block diffusion and adoption across specific percentages of the benchmarking cluster, with 0.80 adoption meaning adoption on 80% of all cluster nodes.  

1. 1.5 x the memory budget results in a slight increase of  9ms - 31ms in cluster adoption times (3% - 6%).
2. 2 x the memory budget results in a moderate 17ms - 35ms increase (5% - 7%).

### Conclusion

These measurements outline the headroom for raising the memory budget, along with the expected performance impact:
1. Block adoption time is the only metric that's affected significantly, increasing both on the forger and the peers by the same extent.
2. These increases seem to correspond linearly with the raising the memory budget. This gives excellent predictability of performance impact.
3. Expectedly, more allocations happen; we can observe the same linear correspondence here as well.
4. It has to be pointed out that block diffusion is only slightly affected by changing the execution budget: Due to pipelining, announcing and (re-)sending a block precedes adoption in most cases.
5. As such, regarding absolute cluster adoption times, measurements taken with either budget adjustment do not exhibit performance risks to the network. They do illustrate, however, the performance cost of those budget adjustments.

These scaling benchmarks are complementary to those performed on Node 10.2; in comparison with those, we can additionally conclude:
1. The conclusions from measurements for each scaling run set are identical.
2. While the relative increases in adoption time for both Node builds are quite similar, the absolute increases are 22% - 32% _smaller_ (i.e., adoption happens more efficiently) for 10.3 / GHC9.6.
3. The same rationale applies to end-to-end propagation metrics: Absolute values document faster cluster adoption for 10.3 / GHC9.6. 
4. Incidentally, the absolute values for scaling factor 1 on 10.2 are close to those for scaling factor 2 on 10.3 except for the tail end (i.e. 95th percentile and above).
5. This reflects the performance improvements that were a stated goal for the 10.3 release - and suggests the performance cost of memory budget increases has become slightly _smaller_ in absolute terms.

As adoption times are not only impacted by Plutus execution alone, we still advocate for a conservative and/or multi-stage raise; future backpedaling on budget limits could cause issues for scripts already deployed.

## Attachment

Full report PDF downloadable [here](../static/pdf/benchmarking/execbudget-10.3-mem_scaling.pdf).

[Cardano Updates]: https://updates.cardano.intersectmbo.org/reports/2025-03-execbudget-memory-10.2