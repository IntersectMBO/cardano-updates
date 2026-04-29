---
title: Performance & Tracing Update
slug: 2026-04-29-performance-and-tracing
authors: mgmeier
tags: [performance-tracing]
hide_table_of_contents: false
---

## High level summary

* **Benchmarking**: Release benchmarks for `10.7.1`; LSM-trees benchmarks; Plutus interpreter benchmarks.
* **Development**: `tx-centrifuge` - high-pressure tx submission service moved to testing.
* **Infrastructure**: Optimizing benchmark genesis caching and post-processing to be highly modular.
* **Tracing**: `cardano-timeseries-io` now integrated with `cardano-tracer`, offering HTTP query API.
* **Leios**: Tx validation benchmarks with `beacon`; Arithmetic extension of `cardano-recon-framework`.
* **Node Diversity**: Formal trace schema definition ready.

## Low level overview


### Benchmarking

The release benchmarks for `10.7.1` have been an iterative process. Various changes on `10.7` caused several performance regressions, which needed to be isolated from each other, located individually and addressed.
This led to running and analyzing several full benchmarks, to confirm each change individually as well. Finally, the `10.7.1` release turned out to be a small, but consistent improvement as far as block production, diffusion and adoption metrics are concerned,
and a huge improvement in CPU time and usage patterns.  

With a healthy baseline in place, we were able to run benchmarks on the LSM-trees on-disk backing store. Initial performance results show the on-disk backend to be on par with the in-memory one given sufficient RAM. This is the optimal
outcome, as using LSM-trees instead of in-memory **without changing the underlying hardware** does not incur a performance penalty. We're currently running benchmarks where the underlying hardware is indeed changed, and where
multiple constraints on the Haskell heap and the OS's headroom for page caching force disk I/O under low RAM conditions. We'll then assess the effect on system and network metrics.  

Last but not least, we confirmed a change to the Plutus interpreter - which impacts its performance characteristics - to be healthy and ready for integration.


### Development

The new `tx-centrifuge` project has reached the MVP stage. It's built for massive tx submission pressure and seamless scaling, so it will be able to saturate a network running Leios over extended periods of time.
To confirm all its intended properties, and iron out bumps in the pipeline, we're currently running tests on the benchmarking cluster - albeit on Praos nodes, as for those, we exactly know the expected outcome. For details
on `tx-centrifuge` architecture and design, please see [cardano-node PR#6494].


### Infrastructure

Our benchmarks require very large genesis files, which are costly (hours, in the worst case) to create for each and every run. This is why our automation uses caching. We're currently reworking the caching mechanism
so a genesis can be highly modular. This will lead to much more flexibility in applying a specific benchmarking profile to an existing cache entry, and widen the range of parameters a profile can modify without leading
to a genesis cache miss.

### Tracing

Our new Haskell library `cardano-timeseries-io`, which builds and stores timeseries of metrics from multiple sources, has been integrated with the `cardano-tracer` service. This now enables arbitrary queries over those timeseries 
to be submitted via an HTTP API. While this does not replace existing Prometheus endpoints, `cardano-tracer` can now answer `PromQL`-like queries directly without the need to run a separate scraper ([cardano-node PR#6473]).  

This is currently an _experimental feature_; the API is not yet stable. We're working on aligning the the request and response schema closely with the Prometheus HTTP API, such that a Grafana integration, or any potential community-bulit frontend, can reuse much
of the existing glue code out there.

### Leios

We've created, and performed, transaction validation benchmarks for the current Cardano Ledger implementation. The benchmarks use [`beacon`] as a framework, which means looking at ledger operations only. Of those, anything besides
block application using different validation strategies has been factored out. As input data, several synthetic workloads are used varying in tx content (script execution, or just moving ADA), block / tx batch size, or number of
tx inputs. In the context of Leios, this allows for confirming protocol assumptions, or determining (and validating) potentially necessary optimizations in the ledger. For a full report and discussion, please see [Leios issue#553]. Next steps
will be scaling different workload properties systematically, as well as forcing tx inputs to be read back from disk.  

The `cardano-recon-framework`, a Linear Temporal Logic based verifier for observed system behaviour, now has better support for existential quantification in its propositions, as well as added support for Presburger arithmetic.
This arithmetic extension allows for a wider range of properties to be evaluated, which are of particular interest to Leios. Those features, along with some quality-of-life improvements, are already released on CHaP; relevant PRs are
[cardano-node PR#6531] and [cardano-node PR#6546]. Current work is narrowing down the context in the framework's output; in case of a property
not being satisfied, this will be highly specific as to which piece of evidence is the root cause for it.

### Node Diversity

The comprehensive formal schema definition of the Node's existing trace messages is being merged ([cardano-node PR#6527]). Definitions are extracted directly from the actual implementation into a fully validated JSON schema.
The extracted data is automatically verified, and can be compared to past data, to capture any changes. The schema can be amended manually with comments or refinement types, and these user-provided annotations
will be merged with the extracted data - with a notification if any conflict is discovered. Future work will see hardened verification, as well as rendering a human-readable document, detailing the specification exhaustively.


[cardano-node PR#6494]: https://github.com/IntersectMBO/cardano-node/pull/6494
[cardano-node PR#6473]: https://github.com/IntersectMBO/cardano-node/pull/6473
[cardano-node PR#6531]: https://github.com/IntersectMBO/cardano-node/pull/6531
[cardano-node PR#6546]: https://github.com/IntersectMBO/cardano-node/pull/6546
[`beacon`]: https://github.com/input-output-hk/ouroboros-consensus-tools/tree/main/beacon
[Leios issue#553]: https://github.com/input-output-hk/ouroboros-leios/issues/553
[cardano-node PR#6527]: https://github.com/IntersectMBO/cardano-node/pull/6527

