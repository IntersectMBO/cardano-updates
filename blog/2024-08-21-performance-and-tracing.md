---
title: Performance & Tracing Update
slug: 2024-08-21-performance-and-tracing
authors: mgmeier
tags: [performance-tracing]
hide_table_of_contents: false
---

## High level summary

* Benchmarking: Release benchmarks for Node `9.1`; UTxO-HD in-memory benchmarks; `typed-protocols` feature benchmarks.
* Development: Correct resource trace emission for CPU 85% spans metric. Governance action benchmarking still under development.
* Workbench: Preparations for bumping `nixpkgs`. Started removal of the container-based `podman` backend. Support GHC9.8 `nix` shells.
* Infrastructure: Test and validate an upcoming change in `node-to-node` submission protocol.
* Tracing: `cardano-tracer`: Support of non-`systemd` Linux was merged; safe restart of internal monitoring servers.


## Low level overview


### Benchmarking

We've run and analyzed a full set of release benchmarks for Node version `9.1`. Comparing with the mainnet release `9.0`, we could not observe any performance regression.  

Additionally, we've performed feature benchmarks for an upcoming new API for `typed-protocols`. Those did not 
exhibit any regression either in comparison with the baseline using the current API.  

Furthermore, we've performed various benchmarks for the UTxO-HD in-memory backend on Node versions `9.0` and `9.1`. Based
on those observations, a rare race condition could be eliminated, where block producers on occasion failed to fork off a thread for the forging loop. The overall network performance of the UTxO-HD in memory backend shows a slight improvement over the regular node, but currently comes with a slightly increased RAM usage.


### Development

We've spotted an inconsistency in one of our benchmarking metrics - CPU 85% spans - which measures the average number
of consecutive slots where CPU usage spikes to 85% or higher (however short the spike itself might be). There was a difference between legacy tracing system (which yielded the correct value) and the new one, for which a fix has already been devised.  

The implementation of Conway governance action workloads for benchmarking is ongoing.

### Workbench

With a `nixpkgs` bump on the horizon, we're working on adjusting, and testing, our usage of packages that change their status, lose their support, or packages that require pinning a version for the workbench.  

Additionally, we'll remove a container-based backend for workbench, which ties in OCI image usage on `podman` with
Nomad. It was a precursor to the current Nomad backend, which is containerless and can directly build Nomad jobs using `nix`.  

Last not least, we've merged a small PR which enables our workbench to build `nix` shells with GHC9.8, as this not only
pulls in the compiler, but much of the Haskell development toolchain. The correct version couplings between compiler and toolchain components is now declared explicitly from GHC8.10.7 up to GHC9.8.

### Infrastructure

We've tested and validated an upcoming change in `ouroboros-network` which demands any node-to-node submission client to
hold the connection for at least one minute before being able to submit transactions. The change works
as expected and does not interfere with special functionality required by benchmarking.

### Tracing

The trace consumer service for the new tracing system used to require `systemd` on Linux to build and operate. There are, however, Linux environments that choose to not use `systemd`. It is now possible to configure the desired flavour of that service, `cardano-tracer`, at build time, thus adding support for those Linuxes - [cardano-node#5021].  

`cardano-tracer` consumes not just traces, but also metrics. With the new tracing system, this shifts running a
metrics server from the node to the consumer process. One possible setup in the new system is operating only one consumer service and connecting multiple nodes to it. In its current design, this requires to safely shutdown and restart the monitoring server, using the metrics store of any connected node that's been requested. We're currently
battle-testing `ekg`'s (the monitoring package that's being used) built-in behaviour and exploring solutions in case it does not fully meet requirements.


[cardano-node#5021]: https://github.com/IntersectMBO/cardano-node/issues/5021