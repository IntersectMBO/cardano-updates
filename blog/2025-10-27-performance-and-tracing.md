---
title: Performance & Tracing Update
slug: 2025-10-27-performance-and-tracing
authors: mgmeier
tags: [performance-tracing]
hide_table_of_contents: false
---

## High level summary

* **Benchmarking**: Various maintenance to prepare for upcoming Node 10.6 changes; metrics migration guide for SPOs.
* **Development**: Prototyping a `PromQL`-based alert system for new tracing.
* **Infrastructure**: Located a space leak that was interfering with on-disk benchmarks.
* **Tracing**: Equipping `dmq-node` with the new tracing system; `cardano-tracer` library and API ongoing.
* **Leios**: Impact analysis and tech design; preparation for simulations hand-off.
* **Hydra**: Kick-off for development of system integration level benchmarks.
* **Node diversity**: Trace semantics specification ongoing; example test case ready for merging.

## Low level overview


### Benchmarking

We've performed various maintenance tasks to accomodate our automation to several breaking changes that come with Node 10.6. There are new constraints on Plutus cost models in genesis files which make it more difficult
to set up a customized testnet, like our benchmarking cluster. Furthermore, we've been assisting with integrating and debugging the upcoming release's components, such as tx validation in the `cardano-api`, or the implementation
of new trace messages the Node emits.  

As the new tracing system will be the default on Node 10.6, we've created a tool which, given a side-by-side listing of metrics names from both systems, will automatically generate an exhaustive migration guide for SPOs. As the metrics names have changed slightly,
a migration for existing monitoring setups is required as a one-off effort. The migration guide will be published on the [Cardano Developer Portal].  

Whilst the legacy tracing system is still fully operational in Node 10.6, the release marks the begin of its deprecation period - giving SPOs sufficient time to adjust their setups.


### Development

While `cardano-tracer` logs forwarded trace messages according to detailed configs, and exposes forwarded metrics, it does not provide any built-in functionality for monitoring and alerts. The experimental `RTView` component, which still can be built for `cardano-tracer` and remains fully functional, was an attempt to provide dashboards and alerts out of the box. However, due to its restricted design and low interoperability with existing monitoring standards, it has been discontinued.  

Currently, we're taking another stab at this: We're building a prototype that creates timeseries directly from observed metrics, and is able to parse and evaluate [PromQL] queries referring to them. Based on that prototype, we'll assess resource usage and feasibility of fully building
that feature into `cardano-tracer`. As most monitoring alerts can be (and are) defined as conditions on `PromQL` query results, and `PromQL` is an established industry standard, we see a low barrier for adaptation. Furthermore, if built sufficiently modular, it would eliminate the need to operate additional 3rd party services for scraping metrics and monitoring for alert conditions - at least in some usage scenarios.

### Infrastructure

With help and support from the Consensus team (Gracias, Javier!), we were able to locate a space leak that affected on-disk benchmarks. While the current on-disk benchmarks are representative, the space leak prevented us from scaling memory limits for the Node process with finer granularity.
This will get merged post 10.6 release, and will be of much use when we do comparative benchmarks of the LMDB and the new `lsm-trees` on-disk backing stores.


### Tracing

We've been working on equipping the Network team's new `dmq-node` service with our new tracing system, `trace-dispatcher` - still a work in progress. Currently, the `dmq-node` uses plain contravariant tracing. Having a configurable system, with an API abstraction to define metadata and message serializations as well as process metrics, is a necessary step towards production-ready tracing. The added benefit of using `trace-dispatcher` is reusability of definitions already implemented in `cardano-node`, and a uniform way of how
`cardano-node` and `dmq-node` are configured, as well as how the expose trace evidence and metrics.  

The work on `cardano-tracer` as a library, with principled API and intra-process communications, is ongoing. Implementation is almost complete, and will enter testing phase soon.


### Leios

We've contributed to [Leios Impact Analysis]. The Performance & Tracing section summarizes how implementing, and eventually benchmarking Leios will impact various aspects of our approach. This spans from adding new Leios-specific observables into component code, to deriving
submission workloads suitable for Leios, to finding a scaling approach to be able to correlate performance observations to exact changes in Leios protocol parameters.  

Additionally, we're currently working on the Leios technical design and implementation plan, which lays out our approach and derives some very high-level steps on how to realize it, based on the impact analysis.

### Hydra

We've kicked off a collaboration with the Hydra team. The goal is to build system integration level benchmarks for Hydra, which can target system pressure points, and which are able to scale operations in various directions - much akin to what we're doing for
the Cardano node. Eventually, those benchmarks should provide more than just immediate feedback for Hydra engineers; they should be able to yield realistic figures of what to expect from operating one (or more) Hydra heads, and what the resource requirements are to achieve that.
Currently, we're familiarizing ourselves with the system and its built-in observability to assess if it meets the requirements for the benchmarks we have in mind.

### Node diversity

The work on (multi-)node conformance testing is ongoing. We're in the process of creating a specification document for semantics of existing Node traces. While a few of them might be unique to the Haskell implementation, the majority documents how
Cardano itself runs and behaves; those traces can implemented accordingly across diverse Node projects.  

Our own demonstration test case for conformance testing is fully implemented and ready to be merged after the Node 10.6 release. It validates a metric exposed by a node wrt. trace evidence in its logs and internal events the metric is based on; see [cardano-node PR#6322].



[Cardano Developer Portal]: https://developers.cardano.org/docs/operate-a-stake-pool
[cardano-node PR#6322]: https://github.com/IntersectMBO/cardano-node/pull/6322
[Leios Impact Analysis]: https://github.com/input-output-hk/ouroboros-leios/blob/main/docs/ImpactAnalysis.md
[PromQL]: https://prometheus.io/docs/prometheus/latest/querying/basics

