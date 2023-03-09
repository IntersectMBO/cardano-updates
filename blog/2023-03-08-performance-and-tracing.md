---
title: Performance & tracing update
slug: 2023-03-08-performance-and-tracing
authors: mgmeier
tags: [performance-tracing]
hide_table_of_contents: false
---

# High level summary

* Release benchmarking: We again performed benchmarks for the next 1.35.6 release candidate.
* New tracing: Backwards compatibility with legacy tracer nomenclature is being implemented to smoothe the transition for end users.
* Analysis pipeline: A major refinement of benchmarking metrics has been realized, along with a structural improvementents regarding metrics denomination.
* Open Sourcing: Work on going live with our benchmarking data has begun, as well as creating an API demo and documentation.
* Nomad backend: The backend was adapted to a major refactoring in workbench and is being equipped with a nomad-exec based task driver.


# Performance

### 1.35.6 release
Benchmarking the second release candidate for 1.35.6 could again attest to a perfectly clean bill of health.

### Analysis pipeline
Our analysis pipeline has seen an introduction of additional metrics, especially when focusing on the block producing node. They allow us to better
differentiate the timing of ledger ticking and mempool snapshotting in the forging loop - a feature that promises much deeper insight into UTxO-HD performance.
Additionally, a restructuring of metrics names has been undertaken along with improvements in their data dictionary; a measure that will make benchmarking
data more easily accessible.

### Open Sourcing
As a prerequisite for going live with our benchmarking data, we're currently working on consolidation of existing analyses, such as to provide a common foundation when accessing them externally. Additionally, we've begun working on a small visualization demo and interactive API documentation. Those will enable 
third parties to make use of that data much more easily, by having reliable guidelines and a working example.

# Tracing
The new tracing system is being outfitted with a comprehensive mapping of its structure to the legacy tracer nomenclature. This feature will make
the switch to the new system as smooth as possible for end users, allowing them to gradually adapt their tooling without breaking any functionality in the process.

# Infrastructure

### Nomad backend
The Nomad backend was adapted to the latest major refactoring in workbench. Work was done on making stateful Nomad clients more autonomous, which will greatly facilitate any automation building on that backend. A task driver based on nomad-exec is currently being implemented.
