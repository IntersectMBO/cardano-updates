---
title: Performance & Tracing Update
slug: 2024-12-30-performance-and-tracing
authors: mgmeier
tags: [performance-tracing]
hide_table_of_contents: false
---

## High level summary

* Benchmarking: Finalized voting benchmarks on Node `10.0`; workload implementation being generalized to be mergeable.
* Development: Database-backend for our analysis tool `locli` merged; several metrics improvements with new tracing.
* Tracing: C library for trace forwarding started; documentation improved; timing issue in forwarder fixed.


## Low level overview


### Benchmarking

The voting benchmarks have now finished. The exact implementation of how the voting workload is set up and submitted has been finalized and is
currently being prepared for merging into `master`. This will add those benchmarks to the repertoire we can run on any future node version, and 
track potential performance changes of voting over time.

The setup allows us to add voting as an additional workload on top of the existing release benchmarking workloads - typically "value-only"
and "Plutus loop". The value workload operates at 12TPS and always results in full blocks; we can draw a straight line comparison when
a certain, constant percentage of each blocks is filled with vote transactions. The Plutus workload however is throttled by spending the block execution budget,
and not so much by transaction size and TPS - contrary to voting submissions. This results in a large variance in block size that the network produces, and
restricting analysis to the blocks that are actually comparable to each other greatly reduces sample size.  

This means that in practice, we've found "voting on top of value-only" to represent the performance implications of voting most accurately. This workload will
serve as a base for comparison over time, and will be run selectively on new versions, whenever the proposal / voting feature of the Conway ledger is touched.  

As a conclusion to those benchmarks we've ascertained that:
1. there is a performance cost to voting, vote tallying and proposal enactment
2. on the system level, this cost is very reasonable and poses no operational risk
3. on the service level, processing an individual voting transaction is even slightly cheaper performance-wise than a transaction consuming and creating multiple UTxO entries

### Development

The analysis and reporting tool, `locli` ("LogObject CLI") now comes equipped with a database-backed persistence layer. This new backend has
been validated by using it to re-analyse past benchmarks. Performance workbench integration has been completed, and by means of a new envvar 
this backend can be enabled for use in automations. It currently co-exists in `locli` with the default file system based persistence backend.  

Apart from opening up raw benchmarking data to the full power of SQL queries, or quickly marshalling it into another format to feed into other
applications, the new storage backend has considerable advantages regarding execution speed and resource usage. It both requires less RAM (around 30% less)
during runtime, and less disk space - about 90% less! Standard analysis of a cluster run can now be performed in less than an hour, whereas it took around 2h before.  

Currently, we're working on implementing parametrizable quick queries of that raw data - complete with adding plotting capabilities to `locli`. The queries are
meant to easily extract and visualize very specific correlations that are not part of standard analysis, catering to the oftentimes investigative nature of performance analysis.

Furthermore, The new tracing system now provides direct insight into the chain tip's hash, exposing `tipBlockHash`, `tipBlockParentHash` and `tipBlockIssuerVerificationKeyHash` both as trace
messages and metrics. Additionally, we've merged a fix for issue [cardano-node#5751]: the metric `forging_enabled` now correctly also observes the presence of the CLI option `--non-producing-node`.


### Tracing

The new tracing system allows for trace and metrics forwarding from some process to `cardano-tracer`. For any Haskell application, the forwarder package can
easily be included as a library. For applications written in other programming languages, we've decided a small, self-contained C library that handles forwarding is a viable
way to provide this functionality to a much wider range of ecosystems. The C library will implement protocol handshake and possibly muxing, the forwarder protocol messages being used,
and CBOR-based encodings of trace messages and metrics - which only exists in Haskell currently. We've just started the prototype.  

We've been working hard on updating and improving the documentation for the new tracing system on https://developers.cardano.org (not merged yet). The aim was to provide a quick start guide
to "just get it set up and running", without presupposing any knowledge of tracing, or Haskell. Moreover, for users coming from the legacy tracing system, we wanted to highlight the key
differences between systems - and possibly different assumptions when operating them.   

Last not least, we caught a very interesting timing issue in the forwarder: each service connected to `cardano-tracer` bears both an internal and external name for the connection (both unique), where
the external name is chosen by the service itself. Upon forwarder initialization, so called data points are set up within the service, into which data can then be traced (such as that external name),
and which are actively polled / queried by `cardano-tracer`. As these are all concurrent events, the external name wasn't yet available in the data point, if initialization of forwarding happened "too fast". Once
located, fixing this was trivial by enforcing a relative ordering of concurrent events just during initialization.


### Happy New Year!

It's been an amazing year for the Performance & Tracing team. We're proud to have contributed to Cardano's transition into the age of Voltaire, and reliably safeguarded performance
of the Cardano network - and to have finalized our new tracing system. A huge thanks to all those who've been helpful, supportive - and who've presented us with new ideas and challanges.

Have a Happy New Year 2025!

[cardano-node#5751]: https://github.com/IntersectMBO/cardano-node/issues/5751
