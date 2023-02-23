---
title: Performance & tracing update
slug: 2023-02-23-performance-and-tracing
authors: mgmeier
tags: [performance-tracing]
hide_table_of_contents: false
---

# High level summary

* SECP benchmarking: we concluded our benchmarking runs and analyses of the new SECP primitives for the Valentine hard-fork.
* Release benchmarking: we performed a round of benchmarks for the 1.35.6 release.
* UTxO-HD benchmarking: we performed first runs for UTxO-HD and are currently refining the benchmarking setup.
* New tracing: for better accessibility, the new tracing system is being outfitted with introspective capabilities.
* Infrastructure: with the Nomad cloud workbench backend we were able to perform our first test cluster runs successfully on SRE infrastructure.
* Infrastructure: the initial NixOps workbench backend has been completed; a PR containing this work, along with many quality-of-life improvements of our tooling, got merged.

# Performance

### SECP
1. For SECP, we settled on a fixed tx count per block, while simultaneously spending as much as possible of the block budget. Thus we were able to minimize the impact of per-SC-call overhead.
2. The final runs were performed with various fractions, e.g. half, of the current block budget to ascertain how these workloads would fare compared to a value-only run.
3. The SECP machinery and profiles are currently being generalized into an approach to aim for very specific aspects of a smart contract for benchmarking. 

### UTxO-HD
1. After analyzing initial UTxO-HD runs, it turned out that mempool snapshotting had to be throttled for benchmarking; it affects a lock that UTxO-HD had to introduce into the forging loop.
2. We're currently adapting the benchmark setup to that, and will then perform a new combination of baseline and UTxO-HD runs.

### 1.35.6 release
Benchmarking the 1.35.6 release candidate could attest to a perfectly clean bill of health.

# Tracing
Work on the new tracing system's introspective capabilites is ongoing: Immediate use cases of the new API include being able to statically validate generated tracer documentation, as well as providing information of a specific tracing setup in the node via traces themselves. These features will make the new system both more robust, and more accessible.

# Infrastructure

### Nomad backend
1. Work on the cloud deployment capability of the Nomad workbench backend continued; for testing we can automate multiple Nomad clients.
2. Locality assumptions were removed and job monitoring was refactored.
3. To facilitate directly-executable derivations, Nomad Job specification files are now self contained with GitHub references and configs needed to run a cluster.
4. We're currently evaluating different options for genesis distribution in said cluster.

### NixOps backend
The NixOps workbench backend has reached an initial functional stage. Consequently, the relevant PR was merged. It also contained many improvements to our analysis tooling, as well as a structural overhaul of workbench itself. We consider this an important step of future-proofing our benchmarking machinery.

