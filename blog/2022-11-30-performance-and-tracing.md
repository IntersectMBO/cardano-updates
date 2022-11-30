---
title: Performance & tracing update
slug: 2022-11-30-performance-and-tracing
authors: deepfire
tags: [performance-tracing]
hide_table_of_contents: false
---

## High level summary

1. Benchmarks for the 1.36 first pre-release bump of the internal components have been delivered, and data shows the component bump is clear for release.
2. SECP benchmarking enablement is underway:  the necessary generator features have been implemented, and are now being integrated into the workbench.
2. The new tracing system:  in response to the performance regression we previously discovered we are working on pre-planned implementation improvements, and doing more benchmarks.
3. Infrastructure:  the Nomad-based workbench backend has been made closer to a cloud deployment scenario.  Cleanup in preparation for Cicero CI/CD integration started.
4. Open sourcing:  ongoing SRE collaboration on production deployment of performance data publishing.

## Performance

We have ran benchmarks for the first component bump of the upcoming 1.36 release, and we don't see any significant performance changes.  The component bumps are therefore clear for release.

## Tracing

For the tracing system regression that we spotted -- even before, we already had plans for further efficiency improvement, and now we are actively pursuing them.
The idea is to collect more statically-available information to enable shifting of more tracing decisions from message delivery time to configuration time.

To support this effort, we also started running more benchmarks and enhanced data analysis with relevant metrics.

## Infrastructure

Generation support for Plutus V2 has been implemented and so, with the help of the previously made looped signature-verifying script, the generator is now capable of producing two SECP workloads: verifying either ECDSA or Schnorr signatures.  This is now being integrated into the infrastructure -- the generator parametrisation API is being enhanced and the workbench is being extended to handle the new parametrisation.

In addition the workbench is now being enhanced to handle protocol-version-based choices for the Plutus cost model.

The intermediate cloud compatibility iteration of the workbench cloud enablement effort was merged.
We are now doing some cleanup work in preparation for starting the Cicero backend, which will bring us nearly completely to the CI/CD integration.

We continue collaboration with SRE on production deployment of data publishing.  We now have a gradual rollout plan, which respects the plans for SRE infrastructure feature availability.

We are working on recovering the software dependency manifest feature that was lost with the organisation-wide transition to CHaP.

As usual, a number of smaller workbench, data analysis & reporting improvements have been made.
