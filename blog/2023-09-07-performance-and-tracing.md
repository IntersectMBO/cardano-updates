---
title: Performance & tracing update
slug: 2023-09-07-performance-and-tracing
authors: mgmeier
tags: [performance-tracing]
hide_table_of_contents: false
---

## High level summary

* Benchmarking: We've performed and analysed feature benchmarks for both UTxO-HD and the current P2P stack.
* Infrastructure: Various improvements of our analysis pipeline have been merged to `master`, supporting safe log truncation.
* Tracing: Namespace consistency checks have been merged to `master` along with a curated configuration for benchmarking.
* Nomad backend: We're productively using the new backend to measure new vs. legacy tracing system, adding many quality-of-life improvements.


## Low level overview

### Benchmarking

We've completed various runs and analyses targeting two distinct features of the node: UTxO-HD and Peer2Peer.  

With our UTxO-HD benchmark we could clearly localize one point where this new way of maintaining ledger state is still costly, but at the same time confirm that in basically all other aspects UTxO-HD makes no difference in performance.  

The Peer2Peer benchmarks focused on the effects that enabling this feature on a block producing node has on propagation times, as well as scrutinized a proposed change to the Peer2Peer network stack.

### Infrastructure

As a result of optimizing in-memory representation of log objects, which are constructed from a node's traces, we can now analyse runs that last longer in total. For runs that exceed their expected duration, analysis now supports a truncation
operation that keeps the interdependencies of block events intact.  

Truncation might happen at a slightly different point
in time - and therefore in its log object stream - for each node in the cluster. An additional step validating the block hash timeline of the cluster has been implemented for the pipeline. It provides early feedback on whether a specific truncation will lead to a valid full analysis, which requires much more time.

### Tracing

Consistency checking of namespace implementation and configuration when using the new system has been completed.
This feature enables feedback on when tracer implementation details in some component might have changed. It's also able to detect when a configuration used for operating a `cardano-node` shows inconsistencies with the namespaces the system provides - and hence needs attention.  
 
Furthermore, we've created a fine-grained configuration of the new system that caters to benchmarking's need of very many
detailed trace messages. It's aimed at mirroring the same amount of trace messages, and information, we're seeing from our usage of the legacy system; an important step in making benchmarks between systems comparable.

### Nomad backend

The new backend is currently being used for further validation with regard to the existing cluster. Additionally, we're using it in production mode to comparatively benchmark both tracing systems after merging past month's optimizations - which is the
first real-life application of the nomad cluster. Hands-on experience in that phase translates into many small improvements which can be immediately applied to enhance user experience for the new backend. 