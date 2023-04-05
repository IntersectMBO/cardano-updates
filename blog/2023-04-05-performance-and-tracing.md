---
title: Performance & tracing update
slug: 2023-04-05-performance-and-tracing
authors: mgmeier
tags: [performance-tracing]
hide_table_of_contents: false
---

# High level summary

* Benchmarking: We worked on adjusting our infrastructure to the new `8.0` release branch and performed a (very) early run.
* New tracing: We're profiling the new tracing system for minimizing its resource footprint and guarantee high throughput.
* Analysis pipeline: Variance analysis both for reporting and for serving as a point of comparison has been merged.
* Infrastructure: A library for Plutus scripts will be integrated in our tooling and benchmarking profiles. Also, a profile family aimed at the tracing systems has been added.
* Nomad backend: Various specializations of the backend are currently being implemented, along with streamlining credentials management.
  
# Benchmarking

We have adapted our benchmarking cluster to the requirements of the `8.0` release branch. Testing runs of a very early feature branch for `8.0`
helped us localize an important issue in collaboration with the other teams. We look forward to gathering preliminary metrics for `8.0` soon.

# Tracing

Analysis of resource usage profiles of both the legacy and new tracing system, with and without trace forwarding, have lead us to gather very
detailed profiling data for each possible setup. This is to ensure we keep resource usage within the node to an absolute minimum, while still providing
the highest possible throughput of data for forwarding to `cardano-tracer`.   

Additionally, we've worked on a very practically-oriented document targeted at end users of the new tracing system. It provides tested step-by-step instructions
for tunneling trace forwarding from a node to `cardano-tracer` via an easy to manage system service, which will match the production setup of most users.

# Infrastructure & Analysis

### General
Variance analysis as a full-fledged entity in our tooling has been merged. Not only is this type of analysis now part of our reporting pipeline - variance
analysis can be fed back and serve as an additional point of comparison.

Furthermore, we've created a profile family for the workbench that's specifically aimed at measuring and comparing tracing system configurations.

### Plutus library
We opened a PR containing a new package for benchmarking - an extendable library that holds all Plutus scripts we use in our benchmarking profiles.
This will enable us in the future to iteratively work on customizing any given script, and the way is called in the context of a specific profile.
It is a refinement of current affairs, where we have additional build inputs solely to generate a static script file tied to an external commit.

### Nomad backend
The nomad backend is being specialized in three ways: using a podman driver locally, using nomad agents supporting nix installables, and using nomad cloud agents. This supports having a common surface independent of the actual backend driver being used. In addition, vault retrieval and management of cloud access credentials is
being improved to minimize any friction for the backend user. 
