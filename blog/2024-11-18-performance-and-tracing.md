---
title: Performance & Tracing Update
slug: 2024-11-18-performance-and-tracing
authors: mgmeier
tags: [performance-tracing]
hide_table_of_contents: false
---

## High level summary

* Benchmarking: Further Governance action / voting benchmarks on Node `10.0`.
* Development: New protoype for database-backed persistence layer in our analysis tool `locli`.
* Workbench: More fine-grained genesis caching; export cluster topology for Leios simulation.
* Tracing: Final round of metrics alignment complete; prepared for `typed-protocols-0.3` bump; new tracing system rollout starting with Node `10.2`.


## Low level overview


### Benchmarking

We've been working on improving the voting workload for benchmarks along two axes: Firstly, reduce the (slight) overhead that
decentralized vote submission induces. Secondly, introduce a scaling parameter - namely the number of votes submitted per transaction, and hence
the number of proposals to be considered simultaneously for tallying and ratification. On the way, we improved upon timing of submissions, as
this has caused benchmarks to abort mid-run every now and then: in those cases, a newly created UTxO entry just hadn't settled across the cluster when it was
supposed to be reused for consumption.  

Scaling of the voting workload is currently under analysis.


### Development

Our analysis and reporting tool, `locli` ("LogObject CLI") has a few drawbacks as far as system resource usage goes; it requires a huge
amount of RAM, and initialization (i.e. loading and parsing trace output) is quite slow. Moreover, there is no intermediate, potentially
exposable or queryable, representation of data besides the trace messages themselves.  

 We're working on a prototype that introduces a database persistence layer as that intermediate representation. Not only does that open
 up raw benchmarking data to other means of querying or processing outside `locli`. Initializing the tool from the database has also shown
 to require much less RAM, and to improve duration of the initialization phase. Furthermore, on-disk representation is much more efficient that
 way - which is no small benefit when raw benchmarking data for a single run can occupy north of 64GiB.

 The prototype has yet to be fully integrated into the analysis pipeline for validation, however, initial observations are promising. 


### Workbench

For our benchmarks, we rely on staked geneses, as the cluster needs control all stake, and such, block production, to yield meaningful performance
metrics. As creating a staked genesis of that extent is an expensive operation, we use a caching mechanism for those. Small changes in the benchmarking
profile, such as protocol version or parameters, Plutus cost models or execution budgets would usually trigger the creation of a new cache entry. We've
now factored out from cache entry resolution all those variables that do not impact staking itself. We then created a mechnanism to patch those
changes into genesis files after cache retrieval, when preparing them for a benchmarking run. This adds flexibility for creating profiles, and reduces the
time to deploy a run to the cluster.  

We also delivered a comprehensive description of our cluster to the Leios innovation team. This includes the definition of our artificially constrained
topology, as well as a latency matrix for node connections in that topology, assigning a weight to all edges in the graph. The Leios team intends
to use that material to implement a large-scale simulation of the algorithm, and thus gain representative timings for diffusion and propagation.


### Tracing

The alignment of metrics names between legacy and new tracing system is now complete - which should minimize the migration effort of existing dashboards for the community. The only differences that remain are motivated by increasing compliance with existing standards like e.g. OpenMetrics. Furthermore, a few metrics still
missing in the new system have now been ported over, such as `node.start.time` or `served.block.latest`.  

We're all set for the expected bump to `typed-protocols-0.3`: both forwarder packages `trace-forward` and `ekg-forward` for the new tracing
system have been adapted to the new API and are passing all tests.

Last not least, we've settled on a rollout plan for the new tracing system. The new system will set to be the **default** with the upcoming Node
release `10.2`. This is achieved by a change of configuration only - there is no need for different Node builds. The `cardano-node` binary
will contain both tracing systems for a considerable grace period: 3 - 6 months after release. This should give the community ample time to
adjust for necessary changes in downstream services or dashboards that consume trace or metrics output.  

We'll provide a comprehensive hands-on migration guide summarizing those changes for the user.