---
title: Performance & Tracing Update
slug: 2024-09-23-performance-and-tracing
authors: mgmeier
tags: [performance-tracing]
hide_table_of_contents: false
---

## High level summary

* Benchmarking: Release benchmarks for Node `9.2.0`. Validating the new "age of Voltaire" performance baseline.
* Development - New Tracing System: A space leak in the forwarding mechanism was fixed; a log rotation bug is being investigated.
* Workbench: Large refactoring of `workbench`, optimizing nix closure size and adding profile flake outputs. Adjusted Nomad backend was merged.
* Infrastructure: Dropping `Vault` for the Nomad cluster was tested and merged.
* Tracing: Further metrics names alignment; be OpenMetrics specs compliant; adding annotations to Prometheus metrics; internal monitoring servers routing has entered testing.

## Low level overview


### Benchmarking

We've run and analyzed a full set of release benchmarks for Node version `9.2.0`. In comparison with Mainnet release `9.1.1`, we could not observe any performance regression.  

Moreover, we've validated the stability of our new "age of Voltaire" performance baseline on `9.1.1`. Currently, we're running a cross-comparison between baselines and Node versions `9.1.1` and `9.2.0` to ascertain that
the new baseline arrives - at scale - at the same performance observations and predictions as the previous one.

### Development - New Tracing System

Forwarding traces and metrics in the new system exhibited a tiny space leak. Under conventional operation, this leak would only become noticeable after running uninterrupted for days or even weeks. It took very hard pressure on the
system, and additional profiling, to make it visible. It could be fixed by avoiding unnecessary allocations of continuations: The buffer of objects to forward inherently carries the position of the next object to process, such that a fully
evaluated closure can trivially be reused to handle any subsequent forwarding request. This has led to new versions of packages `trace-foward-2.2.7` and `ekg-forward-2.4`. Huge thanks to John Lotoski and Javier Sagredo, whose
meticulous information helped to swiftly address the issue.  

On the benchmarking cluster, we've observed `cardano-tracer`'s log rotation to occasionally misbehave: under certain circumstances, the service leaks handles by not redirecting output to the latest log file in the rotation. We've located the
issue and are working towards a fix.

### Workbench

We've been working on a major refactoring of `workbench` code. The main benefit of this endeavour is being able to pull in a very heavy dependency optionally only when required, when building and running the `workbench` shell. This will especially facilitate runs on CI machines after garbage collections, but also building a local shell on individual developer machines. Additionally, benchmarking profiles designed for the cluster are now provided as nix flake outputs. This allows for building a more versatile automation in the future, where `workbench` and `cardano-node` commits won't need to be tied to each other. Last not least, the refactoring simplified the way the shell commands are evaluated, doing away with nested calls in many instances. The refactoring PR has been thouroughly tested and merged.

Furthermore, the workbench is now prepared for a `nixpkgs` upgrade and has dropped the container-based Nomad / `podman` backend - the respective PR was merged successfully.  

### Infrastructure

Removal of the `Vault` service for managing benchmarking cluster credentials has been successfully tested and merged. The service is scheduled for final shutdown end of month, reducing hardware cost and maintenance effort.

### Tracing

We've received initial feedback regarding the alignment of metrics names between new and legacy tracing systems. Based upon that feedback, we're currently working on some further adjustments to the naming schema.    

The implementation for hosting multiple EKG monitors in one single service has been finished and is currently in the testing phase. The dynamic routing to monitoring data, now used both for EKG and Prometheus, reflects the nodes that are connected to `cardano-tracer`. We've also added a JSON response format, which makes it easier to query and scrape existing routes as part of automations. Finally, this PR also removes the dependency on the `snap` server framework and transitively on `HsOpenSSL` (which is prone to cause build issues in the future).  

Currently, we're working on various improvements to the Prometheus metric expositions in `cardano-tracer`. We aim to implement full compliance with the OpenMetrics specification, which should greatly enhance integration processes. Furthermore, metrics
will be augmented with `# TYPE` and `# HELP` annotations, as tracked in issue [cardano-node#5021].

Last not least, we've closed off issue [cardano-node#3988]. For adding an optional prefix to metrics names, the Node config option `TraceOptionMetricsPrefix` can now be used. 

[cardano-node#5021]: https://github.com/IntersectMBO/cardano-node/issues/5140
[cardano-node#3988]: https://github.com/IntersectMBO/cardano-node/issues/3988