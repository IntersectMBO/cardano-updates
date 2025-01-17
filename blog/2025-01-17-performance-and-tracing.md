---
title: Performance & Tracing Update
slug: 2025-01-17-performance-and-tracing
authors: mgmeier
tags: [performance-tracing]
hide_table_of_contents: false
---

## High level summary

* Benchmarking: Release benchmarks for Node `10.1.4`; performance evaluation of ledger metrics trace location.
* Development: Database-backed quick queries for `locli` analysis tool.
* Infrastructure: Voting workload definition merged to `master`, work on Haskell profile definition now continues.
* Tracing: C library for trace forwarding and documentation ongoing; improved fallback configs.
* Community: new Discord channel _#tracing-monitoring_ supporting new tracing system rollout.

## Low level overview


### Benchmarking

We've run and analyzed a full set of release benchmarks for Node version `10.1.4`. We could not observe any performance risks, and expect network performance to very closely match that of
previous `10.1.x` releases.  

Furthermore, we've been investigating the location on the 'hot code path' where metrics from ledger are traced - such as UTxO set size or delegation map size. This currently happens
at slot start, when the block forging loop is kicked off. We aim to decouple emitting those traces from the forging loop, and instead moving them to a separate thread. This thread could
potentially wake up after a pre-defined time has passed, like e.g. 2/3 of a slot's duration. That would ensure getting those values out of ledger does not occur simultaneously to block production 
proper.  

Moreover, as a new feature, it would enable tracing those metrics on nodes that do not run a forging loop themselves. And last not least, it would free up the way to providing additional metrics
at the new location - like DRep count, or DRep delegations - without negatively affecting performance. Initial prototyping has yielded promising results so far.

### Development

Parametrizable quick queries, a new feature of our analysis tool `locli`, have commenced development. They rely on the new database storage backend for raw benchmarking data to be efficient. These quick queries 
are based on a filter-reduce framework, with composable reducers, which provide a clean way to express exposing very specific points or correlations from the raw benchmarking data.  

The quick query feature also incorporates ad-hoc plotting of the query results, and will incorporate exporting the result into exchange formats like CSV or JSON in the future.

### Infrastructure

The voting workload definition has been cleanly integrated with the workbench. This also includes an abstract definition of concurrent workloads - which was previously unnecessary, as exactly
one workload would be handled by exactly one and the same service. The integration, along with the added flexibility, has been merged to `master`.  

We're now actively working again on the Haskell definition of benchmarking workloads, including a test suite. Most of this improvement had already been done; it still needs final realignment
with the current state of all existing workloads. It will allow us to trade hard-to-maintain large `jq` definitions with concise testable code, and recursive shell script invocations with using a
well-defined command line interface only once.


### Tracing

Good progress has been made on the small, self-contained C library that implements trace forwarding. It will allow processes in any language that can call to C via a foreign function interface
to use `cardano-tracer` as a target to forward traces and metrics.  The initial prototype has already evolved into a library design, which intends to offer to the host application 
a simple way to encode to Cardano's schema of trace messages - and to use its forwarding protocol asynchronously, as to minimize interruption of the application's native control flow.  

In preparation of the new tracing system's release, we've also revisited the fallback configuration values the system will use if it is accidentally misconfigured by the user. The forwarder component
uses a bounded queue buffer for trace output to compensate for a possibly unreliable connection to `cardano-tracer`. The fallback bounds were chosen to conserve trace output at all cost - as it turns out, too high
of a memory cost, if trace forwarding does not happen at all, due to faulty configuration. We've adjusted this and other fallback values to sensible defaults to guarantee a functional system even in case
of configuration errors.

### Community

Our team will host a new channel _#tracing-monitoring_ on *IOG's Technical Community* discord server. The migration to the new tracing system might affect existing automations built by the community, or how
existing configuration need adjusting to achieve the intended outcome. In the channel, we'll offer support for the community in all those regards, as well as answer more general questions regarding the Node's tracing systems.

Additionally, we're currently releasing our documentation improvements to the excellent [Cardano Developer Portal](https://developers.cardano.org), linked below (links on the website may not have been updated yet).

* [Discord channel #tracing-monitoring](https://hmpg.net) <-- will be updated with correct link once the channel is set up and running
* [Developer Portal: New Tracing quickstart](https://developers.cardano.org/docs/get-started/cardano-node/new-tracing-system/new-tracing-system)
* [Developer Portal: `cardano-tracer`](https://developers.cardano.org/docs/get-started/cardano-node/new-tracing-system/cardano-tracer)
