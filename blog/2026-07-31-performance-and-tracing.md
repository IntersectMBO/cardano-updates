---
title: Performance & Tracing Update
slug: 2026-07-31-performance-and-tracing
authors: mgmeier
tags: [performance-tracing]
hide_table_of_contents: false
---

## High level summary

* **Benchmarking**: Van Rossem HF: Created and performed benchmarks for new Plutus execution budgets and internals; PlutusV3 baseline shift.
* **Development**: Hermod package restructre completed; `cardano-config` support in `trace-dispatcher`.
* **Infrastructure**: Genesis cache overhaul / Protocol Version 11 overlay have landed.
* **Tracing**: Alert manager feature for `cardano-tracer` in design phase; native support for spans in Hermod.
* **Leios**: Major new `beacon` feature to impose memory limits; on-disk LedgerDB tx validation times benchmark in the works.


## Low level overview

### Benchmarking

The P&T team has been safeguarding the now enacted Van Rossem hard fork, which brings Protocol Version 11 with new Plutus internals and a bump to the execution budgets to mainnet. Our benchmarking automation framework, the performance workbench, gained new chain-fragment-creation profiles as well as new `plutuscall-*` profiles, targeting those new Plutus features specifically ([cardano-node PR#6627] and [cardano-node PR#6440]). The former PR also adds a `wb chain-fragment export` op, which packages a profile run's node database, genesis files and a path-patched node config into a chain fragment consumable by `beacon` tool — the tooling behind the on-disk benchmarks described under Leios below.  

The benchmarks performed using those new profiles have shown that the execution budget raise leads to a reasonable, predictable and expected increase in Block Adoption times. For the new PlutusV3 internals, they've also shown that they're consistently priced relative to the existing internals, and that, even when executed up to full budget exhaustion, there were no performance regressions in their implementation.  

To enable those benchmarks, work has been well underway on extending `plutus-scripts-bench` with PlutusV3 variants of the existing scripts, and adding two new PV11 scripts targeting the new execution internals: `MultiScalarMulG1` (BLS12-381 multi-scalar multiplication based on [CIP-0133]), and `ExpModInteger`, exercising the new `expModInteger` builtin ([cardano-node PR#6440]). The PR wires these through to `tx-generator`, and gives our analysis tool `locli` a new `PlutusBudgetSummary` module to output Plutus workload calibration data as part of comparison reports. The PR is currently under review.  


### Development

The long-planned restructuring of `trace-dispatcher` into separate Hermod packages, which we reported as underway last month, is now complete ([hermod-tracing PR#16]). The stable API surface — trace types, `LogFormatting`/`MetaTrace` instances, and the structural/annotation combinators — now lives in a lightweight `hermod-tracing-api` package, itself split into an `internal` and a `public` sublibrary, so that packages which only need to instrument their own code no longer pull in EKG, Prometheus, CBOR forwarding or the YAML config parser as dependencies. The full backend stack remains in `hermod-tracing-core`, while the Prometheus TCP server has been carved out into its own optional `hermod-tracing-prometheus` package. All modules and identifiers were renamed from `Cardano.Logging.*`/`TraceDispatcherMessage` and friends to their `Hermod.Tracing.*` equivalents, and `trace-dispatcher` itself has been kept around as a backward-compatible mirror so existing pinned consumers keep building unchanged until they migrate.  

Last but not least, we've added compatibility with the `cardano-config` library to `trace-dispatcher` ([hermod-tracing PR#18]).  


### Infrastructure

The genesis cache overhaul and full Protocol Version 11 overlay for our performance workbench, close to merging as of last month, have now landed ([cardano-node PR#6544]). Beyond the split-cache "ripper" backend and the restoration of non-default Plutus cost models via the Alonzo genesis `extraConfig` field reported previously, the merged PR also standardises genesis creation on `cardano-cli`'s `create-testnet-data` (retiring the old `create-staked` path and the separate byron genesis step), makes the era an explicit, validated input to `wb start` and `wb run allocate` via a new `--era-name` flag, and simplifies the workbench CLI to named flags only. A handful of breaking changes ship alongside: `WB_BACKEND` is renamed to `WB_BACKEND_NAME`, `--relays` and the genesis "spec" sub-command are removed, and non-default Plutus cost models must now be supplied through `extraConfig`. Analysis of older runs is unaffected, as `wb analyse` falls back to the previous genesis layout when the new one is absent.  


### Tracing

We've begun designing a central alarm system for `cardano-tracer` ([alarm system concept]). Today, operators typically rely on third-party tooling for this — something built on top of Grafana, the Prometheus Alertmanager, or Loki log analysis — but there's no solution native to the tracing and metrics stack, and none that takes a unified approach across trace messages and metrics. The idea is to instead give `cardano-tracer` a single place that collects alarms from multiple sources — our `hermod-recon` verifier flagging a violated property, a rule evaluated against the metrics `cardano-tracer` already stores, or simply a trace message severe enough to warrant attention — and forward them to wherever operators want to be notified — typically a paging service's webhook API, but custom webhooks, email, and plain logging are supported too — while keeping a queryable history of past alarms. It deliberately stays a one-shot notification layer rather than a full incident tracker: there's no acknowledgement or resolution workflow, that's left to whatever tooling operators already use for that. This is still an early design and not yet reflected in any implementation work.  

On the Hermod side, we're also exploring native support for nested spans, in the spirit of tracing systems like OpenTelemetry. A span represents a bounded unit of work — say, processing a single transaction or forging a block — and the point is to let automated log analysis reconstruct not just individual events, but how long an operation took and how it decomposes into sub-operations, by pairing up an opening and a closing trace message that share a unique identifier. The tricky part is Haskell's laziness: without care, an expression's evaluation, and the trace events it triggers, can end up happening after its enclosing span has already been closed, so a fair amount of the design work goes into guaranteeing that no trace event ever escapes the span it logically belongs to. There's no branch to point to yet — this is still exploratory work.  


### Leios

Building on the chain-fragment export tooling introduced above, `beacon` — the ledger ops benchmarking tool in `ouroboros-consensus-tools` — gained a memory-limiting feature aimed squarely at tx validation times using an on-disk LedgerDB backend and forcing disk I/O at the same time ([beacon PR#12], currently under review).  

A new flag forces the LSM (on-disk) backend to genuinely exercise disk I/O, rather than being served invisibly out of the OS page cache; `--mem-limit`/`--heap-limit` cgroup caps serve as a fallback for past `db-analyser` builds without support for that new flag. Every run now records peak RSS and block I/O counts. A representative "sweet spot" using those new mechanisms has been determined empirically for the chain fragments used in this year's April measurements. This finally gives us concrete on-disk LedgerDB metrics by determining the overhead of I/O-backed validation times vs. pure ones, closing a gap in our Leios throughput benchmarking. A new `beacon/docs/METHODOLOGY.md` documents the overall approach; benchmarks are currently being performed on our benchmarking cluster, to obtain measurements on the same hardware as we did in April for the in-memory backend — but now with LSM backend forced to perform disk I/O.  




[PRs related to Benchmarking]: # 
[cardano-node PR#6627]: https://github.com/IntersectMBO/cardano-node/pull/6627
[cardano-node PR#6440]: https://github.com/IntersectMBO/cardano-node/pull/6440

[PRs related to Development]: # 
[hermod-tracing PR#16]: https://github.com/IntersectMBO/hermod-tracing/pull/16
[hermod-tracing PR#18]: https://github.com/IntersectMBO/hermod-tracing/pull/18


[PRs related to Infrastructure]: # 
[cardano-node PR#6544]: https://github.com/IntersectMBO/cardano-node/pull/6544

[PRs related to Leios]: # 
[beacon PR#12]: https://github.com/input-output-hk/ouroboros-consensus-tools/pull/12

[External References]: # 
[CIP-0133]: https://cips.cardano.org/cip/CIP-0133
[alarm system concept]: https://github.com/IntersectMBO/cardano-node/blob/jutaro/alarm/cardano-tracer/docs/alarm-system-concept.md
