---
title: Performance & Tracing Update
slug: 2024-11-04-performance-and-tracing
authors: mgmeier
tags: [performance-tracing]
hide_table_of_contents: false
---

## High level summary

* Benchmarking: Governance action / voting benchmarks on Node `10.0`; performed PlutusV3 RIPEMD-160 benchmarks.
* Development: Governance action workload fully implemented; generator-based is submission ongoing work.
* Tracing: New tracing system production ready - `cardano-tracer-0.3` released; work advancing on `typed-protocols-0.3` bump and metrics naming.


## Low level overview


### Benchmarking

We've run and analyzed the new voting workload on Node `10.0`. This workload is a stream of voting transactions submitted on top of the existing
value workload from release benchmarking. The delta in the comparison can claim to demonstrate the "performance cost of voting" in the Conway ledger era.
The workload itself is a puppeteer of 10.000 DReps overall, who vote on up to 5 governance actions simultaneously. We made sure these are
mutually independent proposals, that vote tallying occurs, and that the actions get ratified and enacted (and hence removed from the ledger). Then, voting moves on to
the next actions - keeping the number of actions needing vote tallying stable over the benchmark. We could observe a very slight performance cost of voting; it's
deemed to be a reasonable one given the stress we've put the system under.  

The results can be found [here](/reports/2024-10-performance-10.1.1) along with those from release benchmkarks.  

Furthermore, we've developed and run a new Plutus benchmark targeting the RIPEMD-160 internal. We've compared the resulting performance observations against
other Plutus workloads - both memory-constrained and (same as RIPEMD-160) CPU-constrained. We have concluded that there are no performance risks to that algorithm in PlutusV3,
given existing execution budgets, and that it's consistently priced wrt. other CPU-intensive internals.


### Development

The voting workload is currently implemented using decentralized submission via `cardano-cli` on each of our cluster machines. It has proven reliable - and scalable,
at least to some extent. We're already working on improvements that reduce the (very slight) overhead of using the CLI for submission. Additionally, we're aiming
for a linear performance comparison when submitting twice the number votes per transaction at the same TPS rate - forcing double the work for vote tallying. 

Implementation of that workload using the centralized (and much better scalable) `tx-generator` submission service is still ongoing.

### Tracing

Metrics naming is currently receiving a last round of consistency checking, so that it's aligned as closely as possible between legacy and new tracing system. In the process, we're
adressing aspects of documentation, and incorporating feedback to define a few metrics in the new system that previously were present in the legacy one only. 

For migrating to the new `typed-protocols-0.3` API, two of the new tracing system's packages are affected. The work for `ekg-forward-0.7` is completed and merged to `master` - yet to be released on CHaP. Work on the second package, `trace-forward`, is ongoing.

We've finally released `cardano-tracer-0.3`, which incorporates all features, enhancements and fixes that have been reported on here over the past months. This release
marks 100% production readiness of the new tracing system. We're focusing now on making documentation and example scripts and configs yet more user-friendly for
community rollout. We're very much looking forward to receiving feedback - and have time and space reserved to address it, as well as to provide intial support for
the migration away from the legacy system. 
