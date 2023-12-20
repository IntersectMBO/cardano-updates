---
title: Performance & Tracing Update
slug: 2023-12-11-performance-and-tracing
authors: mgmeier
tags: [performance-tracing]
hide_table_of_contents: false
---

## High level summary

* Benchmarking: Release benchmarking for node `8.7.2`, as well as P2P benchmarks - the latter being a premiere for the Nomad cluster.
* Development: Work on automating the submission of Conway transactions for registration of and stake delegation to `DRep`s is ongoing.
* Infrastructure: We're preparing to safely retire our current benchmarking cluster.
* Tracing: The documentation for the new tracing system is being reworked. Additionally, we've added a feature to `cardano-tracer` to capture performance over a long runtime.
* Nomad cluster: The Nomad backend has been successfully equipped with support for up-to-date P2P topology, as well as deployment for Plutus script data.


## Low level overview

### Benchmarking

We've performed a full set of release benchmarks for node `8.7.2`. From a performance perspective, it has been greenlit for mainnet release. Starting with this version, our team will publish observations alongside the original comparative analysis of benchmarks, providing insight into key metrics and resource usage. Hence, for the post on version `8.7.2`, see [here](../reports/2023-12-performance-8.7.2).

Additionally, we're running P2P versus no-P2P benchmarks on the same version. We intend to establish future baseline runs using P2P topology as the default setting. All our cluster nodes being block producers, it is crucial to establish the P2P stack does not exhibit any regression regarding block forging. Furthermore, the evidence gathered from those benchmarks forms the base for a recommended setting for P2P on mainnet block producers.  

It deserves special mention that those P2P benchmarks are our first production runs with the Nomad cluster - and using the new tracing system exclusively. Having finalized all optimization rounds of the latter, and having meticulously eliminated all confounding factors from the Nomad infrastructure, we're confident in the measurements being subject to extremely low variance - which we made sure of in many past validation runs on Nomad.

### Development


Orchestrating `DRep` actions into benchmarking workflows has opened up a fairly large design space. Currently, we're focusing on having stake delegated to `DRep`s, in order to trigger ledger pulses for calculations particular to `DRep` actions. We can benchmark a possible
performance impact of those pulses - even if there are no actions ongoing -  as a first step.  

The contributing factors to the cost of those pulses are both the number of `DRep`s registered, and the number of delegations to them. It is still under debate which values represent a probable model for mainnet, and whether we can achieve stake delegation programmatically (i.e. by submitting transactions), or if, for large numbers, we need means to inject those delegations into genesis.

### Infrastructure

With the switch of all production benchmarks to the Nomad cluster, we will retire the legacy `cardano-ops` cluster very shortly. Currently, we're making sure that when all its resources are released, we keep an archive for all runs performed, including all raw log data - with the oldest runs dating back as far as December 2019.

### Tracing

We've outfitted the `cardano-tracer` service with the same kind of resource tracing machinery that's used by `cardano-node` - as well as created a dedicated benchmarking profile for it. It puts very little pressure on the node; instead it causes 6 nodes to emit traces at a rate of >35 messages per second, putting pressure on `cardano-tracer` via trace forwarding at >200 messages per second for an extended period of time. Analysis of these traces will form the ground for various optimizations of `cardano-tracer` that are currently being worked on.  

As we aim for early 2024 to be able to recommend the new tracing system as default in production use, we're currently also reworking the comprehensive documentation to reflect all changes made over the last months.

### Nomad backend

In addition to being able to deploy Plutus script data and redeemers seperately (instead of inlining them as the legacy cluster did), the Nomad cluster now supports being set up with recent P2P topology. No-P2P topology format will still be supported
for occasional regression benchmarking of the P2P stack, when desired. Furthermore, we've completed porting all benchmarking profiles from the legacy cluster to Nomad.
