---
title: Performance & Tracing Q4 2023 Update
slug: 2023-Q4-performance-and-tracing
authors: mgmeier
tags: [performance-tracing]
hide_table_of_contents: false
---

## 2023-10 - 2024-01

### Main achievements

* Release benchmarking, leading up to next mainnet release
* Conway benchmarking of existing Babbage workloads
* P2P benchmarks, validating viability as default topology
* Added basic `PlutusV3` capability of our tooling
* Publication of benchmarking reports accompanying a mainnet release
* GHC9 performance investigation
* Finalized and validated all optimizations for the new tracing system
* New Nomad benchmarking cluster: production use
* Adjustment of our infrastructure to cover the migration to _IntersectMBO_
* Conensus QTAs: prototype developed into alpha-stage benchmark
* Successful on-boarding of a new team member

#### Release benchmarking

We've performed and analyzed benchmarks for node versions `8.6.x` to `8.7.3`, which is projected to be the next mainnet release, throughout Q4. 
Along that way, we have identified, located and handled all performance blockers.  

Additionally, we've started publishing benchmarking reports here on Cardano Updates. The format is meant to increase transparency and
provide insight into those measurements that accompany mainnet releases - demonstrating the absence of performance regressions and development
of specific metrics over time.

#### Conway benchmarks

Furthermore, we've done first ever benchmarking of the Conway ledger. To that end, we've ported our Babbage workloads to Conway for
immediate comparability. Fortunately, we've have not found any performance regression in the Conway ledger.

#### P2P benchmarks

In Q4, we've validated P2P topology to be viable as default for both relay and block producer nodes. As a consequence, we've switched
to P2P topology for benchmarking baselines ourselves.

#### GHC9 performance

In Q4, evaluation of GHC9.2's and GHC9.6's optimizer in the context of the Cardano code base has been completed. 
Eventually, GHC9.6 has shown itself to be much more suitable from a performance perspective. We're convinced that
with a few select annotations in the code, GHC9.6's optimizer can produce a result on par performance-wise with GHC8.10 - 
which just was a great release in that regard. With GHC9.2 unfortunately, the changes would have to be more invasive - and thus more time-consuming.

#### New nomad cluster

We’ve moved the new Nomad cluster into production use and established new baselines for each workload on it. 
Additionally, we’ve shut down the legacy `cardano-ops` benchmarking cluster, and archived all raw data from it.

#### Consensus component QTAs

We’ve developed the existing prototype into an automatable, self-contained benchmark called `beacon`, as well as systematized workloads and run structure for it.
Moreover, we’ve demonstrated usefulness of the metrics, their reproducibility, and identified domains viable for QTAs with system-level benchmarks.

#### New team member

We're happy to welcome a new joiner to our team! We've successfully onboarded him in Q4; he has taken
over the `cardano-tracer` service - the node-external component of the new tracing system - and has already
landed several valuable contributions.
