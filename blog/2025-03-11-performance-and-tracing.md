---
title: Performance & Tracing Update
slug: 2025-03-11-performance-and-tracing
authors: mgmeier
tags: [performance-tracing]
hide_table_of_contents: false
---

## High level summary

* Development: New benchmark epoch timeline using `db-sync`; raw benchmark data now with DB storage layer as default - enabling quick queries.
* Infrastructure: Merged workbench 'playground' profiles - easing benchmark calibration.
* New Tracing: Plenty new features based on community feedback - including a new direct Prometheus backend; untangle system dependencies.
* Community: Participation in the first episode of the _Cardano Dev Pulse_ podcast.

## Low level overview


### Development

For keeping a history of comparable benchmarks, it's essential to have an accurate timeline of mainnet protocol parameter updates by epoch. They represent the environment in which specific measurements took place, and are thus tied
inherently to the observation process. Additionally, to reproduce specific benchmarking metrics from the past, our performance workbench has the capability to "roll back" those updates, and perform a benchmark given the protocol parameters of any given epoch.
Instead of maintaining this epoch timeline by hand, we've now created an automated way to extract all key epochs applying parameter updates using `db-sync`. This 


Furthermore, the new DB storage backend for raw benchmarking data in `locli` is now set to be the default for the performance workbench. Apart from cutting down analysis time for a benchmarking run and reducing
the required on-disk size for archiving, this enables the new (still under development) quick queries into raw performance data.

### Infrastructure

When creating the Plutus memory scaling benchmarks, we developed so-called 'playground' profiles for the workbench. These allow for easier dynamic change of individual profile parameters, building a resulting benchmark setup including
Plutus script calibration, and observing the effect in a short local cluster run. Applying these changes to established profiles is stricly forbidden, as this puts comparability with past benchmarks at risk. So by
introducing this separation, we keep that safety guarantee, while still lifting it somewhat for the development cycle only.

### Tracing

We've been extremely busy implementing new features and optimizations for the new tracing system, motivated by the feedback we received from the SPO community. This includes:
* A brand new backend that allows for Prometheus exposition of metrics directly from the application - without running `cardano-tracer` and forwarding to it.
* A configurable reconnection interval for the forwarder to `cardano-tracer`.
* An always up-to-date symlink pointing to the most recent log file in a `cardano-tracer` log rotation.
* Optimizations in metrics forwarding and trace message formatting, which should lower the base CPU usage, at least in low congestion scenarios.

All those will be part of the upcoming Node 10.3 release.  

Currently, the `cardano-tracer` service still depends on the Node for a few data type definitions. We're working on a refactoring so we can untangle this dependency. This will allow for the service
to be built independently of the Node - simplifying a setup where other processes and applications can forward observables to `cardano-tracer` and benefit from its features.


## Community

We had the opportunity to talk about benchmarking and performance impact of UTxO-HD on the very first episode of the [Cardano Dev Pulse Podcast] (YouTube). Thank you Sam and Carlos for having us!


[Cardano Dev Pulse Podcast]: https://www.youtube.com/@CardanoDevPulse
