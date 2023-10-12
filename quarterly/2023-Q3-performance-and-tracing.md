---
title: Performance & Tracing Q3 2023 Update
slug: 2023-Q3-performance-and-tracing
authors: mgmeier
tags: [performance-tracing]
hide_table_of_contents: false
---

## 2023-07 - 2023-09

### Main achievements

* Release benchmarking
* Developing and running UTxO-HD benchmarks - in-memory flavour
* P2P benchmarks, facilitating rollout
* Production-readiness of the new Nomad cluster has been reached
* Optimization of and introspection capability for the new tracing system
* GHC9 performance investigation (and possible remedy)
* Conensus QTAs: first real-world application of prototype
#### Release benchmarking

Ongoing release benchmarking is a crucial safeguard to `cardano-node`'s release cycle from a performance perspective. We've performed and analyzed benchmarks for node versions `8.2.x` to `8.5` throughout Q3.

#### UTxO-HD benchmarks

Targeting a specific new feature in benchmarks requires development effort and fine-tuning the machinery. In Q3, we achieved that for the in-memory flavour of UTxO-HD, enabling benchmark delivery.

#### P2P benchmarks

In Q3, we performed additional P2P benchmarks to facilitate the comprehensive rollout of that feature.

#### New nomad cluster

The new hardware cluster for benchmarks, which is controlled through the new nomad backend, has received 
various rounds of validation and adjustments in Q3 - in addition to finalizing integration with the rest
of our pipeline. The confidence in metrics gathered on the cluster is now sufficient for us to consider it
ready for production use.

#### New tracing system

Our new tracing system has received various rounds of optimization in Q3. We could verify in our benchmarks that
it is roughly on par with the legacy system while offering a richer feature set and greater flexibility.  

Additionally, in Q3 we equipped the system with an introspection capability. This is now used for generating
end user documentation that stays in-sync with definitions in code, and for automated consistency checking of the entire system.

#### GHC9 performance

In Q3, a joint investigation with DevX into GHC9's behaviour revealed where and how GHC9 misses opportunities for
optimization of generated code. This led to an approach to annotate our codebase accordingly to re-enable
those optimizations - which is still being validated.

#### Consensus QTAs

In collaboration with Consensus and DevX, we advanced the Consensus QTAs prototype capturing ledger operations'
performance characteristics. It's now applicable, and being applied, to a real-world task - namely
gathering evidence of the effect of aforementioned changes allowing for performant GHC9 builds.

### Next steps

_TBD._

