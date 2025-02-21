---
title: Benchmarking -- UTxO-HD on 10.2
slug: 2025-02-performance-utxohd-10.2
authors: mgmeier
tags: [benchmarking-reports]
hide_table_of_contents: false
---

## Setup

This report compares benchmarking runs for 2 different flavours of `cardano-node`:
* `10.2-regular` - regular Node performance baseline from the `10.2.x` release benchmarks.
* `10.2-utxohd` - the UTxO-HD build of the Node based on that same version.

For this benchmark, we're gathering various metrics under the _value-only_ workload used in release benchmarks: Each transaction consumes 2 inputs and creates 2 outputs, 
changing the UTxO set. This workload produces full blocks (> 80kB) exclusively. Moreover, it's the workload that produces most stress on the UTxO set. Thus, it's the most meaningful
workload when it comes to benchmarking UTxO-HD.  

We target the _in-memory backing store_ of UTxO-HD - LedgerDB V2 in this case. The on-disk backend is not used. 

Benchmarking is performed on a cluster of 52 block producing nodes spread across 3 different AWS regions, interconnected using a static, restricted topology.

## Observations

### Resource Usage

1. With UTxO-HD's in-memory backend, the memory footprint increases slightly by 3%.
2. Process CPU usage is moderately reduced by 9% with UTxO-HD.
3. Additionally, CPU 85% spans decrease in duration by 24% (~1.1 slots).

Caveat: Individual metrics can't be evaluated in isolate; the resource usage profile as a whole provides insight into the system's performance and responsiveness.

### Forging Loop

1. Block context acquisition improves by 3ms (or 11%), while Ledger ticking takes 3ms (or 10%) longer.
2. Creating a mempool snapshot is significantly faster - by 16ms (or 21%).
3. As a result, a UTxO-HD block producing node is able to announce a new header 17ms (or 12%) earlier into a slot.
4. Additionally, adoption time on the forger is slightly improved - by 4ms (or 5%).

### Peer propagation

1. Block fetch duration increases moderately by 13ms or 4%.
2. Adoption times on the peers improve very slightly - by 2ms or 2%.

### End-to-end propagation

This metric encompasses block diffusion and adoption across specific percentages of the benchmarking cluster, with 0.80 adoption meaning adoption on 80% of all cluster nodes.  

1. There is no significant difference in cluster adoption times between regular and UTxO-HD node.

### Conclusion

Regarding the UTxO-HD build using the in-memory LedgerDB V2 backend, we can conclude that:
1. it is lighter on CPU usage compared to the regular node, albeit requiring just slightly more RAM.
2. it poses no performance risk to block producers; on the contrary, the changes in forging loop metrics seem favourable compared to the regular node.  
3. network performance would be expeceted to be on par with the regular node.
4. even under stress, there is no measurable performance regression compared to the regular node.
5. as a consequence of the above, performance-wise, it's a viable replacement for the regular in-memory solution.

## Attachment

Full report for _value-only workload_, PDF downloadable [here](../static/pdf/benchmarking/utxohd-10.2.value-only.pdf).

