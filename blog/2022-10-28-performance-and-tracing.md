---
title: Performance & Tracing Team Update
slug: 2022-10-28-performance-and-tracing
authors: deepfire
tags: [performance-tracing]
hide_table_of_contents: false
---

## High level summary

On the performance side, the team ran benchmarks for the the P2P feature and the 1.35.4 release.  We finished a prototype for performance data publishing.  We almost finished the local deployment backend for the workbench using the new SRE deployment infra.  We worked on fixing and improving our data analysis pipeline.

On the tracing side, the team worked on isolating a critical issue causing message loss in the remote tracing backend.  The issue was resolved and we now have proper end-to-end coverage for the scenario.

## Executive summary

- The new tracing system public release is getting closer, as we're resolving remaining rough edges that are discovered in full-scale deployments.  The local benchmarks we ran were already showing improvement relative to legacy tracing, so we expect similar results at full scale.
- The first (local deployment) iteration of benchmarking adopting the new SRE deployment infra is nearly done.  We thank Michael Fellinger and Robin Stumm for their assistance.  Two further phases remain:  CI integration and cloud deployment.
- The benchmarking data publishing prototype is ready.  This serves as a springboard for both opening our performance assessment workflow (to support the wider Cardano developer community), and for data provision to the business community.  Our next steps are to secure a permanent deployment for this mechanism and to integrate it into the benchmarking infrastructure.  This requires collaboration with SRE.
