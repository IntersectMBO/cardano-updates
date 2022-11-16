---
title: Performance & tracing update
slug: 2022-11-16-performance-and-tracing
authors: deepfire, mgmeier
tags: [performance-tracing]
hide_table_of_contents: false
---

## High level summary

1. P2P performance investigation is ongoing, in collaboration with the networking team.
2. SECP benchmarking enablement is underway: we already have the script and are working on Plutus V2 generation support.
3. Unexpected setback in the new tracing system:  full scale benchmarks have shown a performance regression: local chain syncing benchmarks were an improvement over legacy tracing.
4. On the open sourcing front we added an integrated data dictionary, which is necessary for explaining ourselves to the world.  SRE collaboration on production deployment of performance data publishing has started.
5. We have started bringing the Nomad-based workbench backend closer to a cloud deployment scenario.


## Performance

We are supporting the networking team on P2P performance investigation.  Generation support for Plutus V2 was started.  We have collaborated with the Plutus team to get a SECP benchmark script, which is now ready for use, pending Plutus V2 support.  The transaction generator has also been updated to the cardano-api changes.

## Tracing

We ran an initial round of full-scale benchmarks for the new tracing system -- which uncovered a regression to legacy tracing, which is contrary to the local chain syncing benchmarks, that showed improvement instead.  We added tracing to cardano-tracer, fixing some minor bugs on the way.  Network and disk IO metrics are now collected once again and is integrated into analysis.

## Infrastructure

The first iteration of the Nomad-based local workbench backend was completed -- it has reached feature parity with the existing supervisor backend.  The next iteration started, bringing it closer to the cloud scenario, by deploying to separate Nomad tasks connected by a virtual network.  This will serve as basis for CI and full cloud backends.

We designed and implemented the authoring pipeline for the performance data dictionary, which will be henceforth embedded in our performance reports.  We are collaborating with SRE on production deployment of data publishing.

A number of smaller workbench, data analysis & reporting improvements have been made.
