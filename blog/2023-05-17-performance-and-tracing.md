---
title: Performance & tracing update
slug: 2023-05-17-performance-and-tracing
authors: mgmeier
tags: [performance-tracing]
hide_table_of_contents: false
---

## High level summary

* Benchmarking: We're preparing our model cluster to perform GHC9.2 benchmarks, as well as experimenting with increased dataset sizes.
* New tracing: After optimization work on the new tracing system, another cycle of validation and documentation is due.
* Analysis pipeline: First steps on implementing incremental analysis have been untertaken.
* Open Sourcing: Exhaustive dataflow charts for both our analysis tool `locli` and our `workbanch` have been merged to `master`
* Nomad backend: The first set of CI-centric workbench profiles have been adjusted and run on the nomad backend; currently we're porting the definition of our model cluster.
* P&T Meetup: We had a very productive personal meetup in Lugano, Switzerland.
* Offboarding: Sadly, we have to say goodbye to our team lead. Currently, we're busy with the handover.

## Low level overview

### Benchmarking

As a compiler switch to GHC 9.2.7 for `cardano-node`'s default build environment is around the corner, we're setting up our benchmarking cluster to
handle the new version. Special attention is given to the fact that we might need more flexibility in switching compiler versions in the future. This
also involves choosing a reliable baseline as reference point for inter-version comparisons.  

Additionally we've been working on refining our model cluster: by increasing UTxO and delegation map sizes to closer match those of current mainnet,
we strive to have a more accurate model - and thus be able to make more detailed predictions regarding performance. However, this still needs to
be balanced against resource demand for all our cluster's nodes.

### Tracing

For our new tracing system, we're currently validating the behaviour of the system after optimizations have been applied. Furthermore, some
quality-of-life details that have changed required us to revision the system documentation.

### Analysis

As a mid-term goal, we aim to provide incremental analysis of our benchmarking metrics. While currently, we can only reliably process runs that have been
normally (or abnormally) terminated, we see the possibility of incrementally analysing ongoing runs, or any data source yielding our key metrics, as a
huge opportunity to increase our operational flexibility. All in all, this approach entails building completely new features for our pipeline. A first effort to accomodate incrementally incoming data points has been undertaken. 

### Open Sourcing

A very involved and exhaustive documentation and visualization effort has been undertaken to make the data flow through our key benchmarking
copmonents more accessible. As a result, detailed charts for both our LogObject CLI `locli` and our `workbench` have been merged to `master`. 

### Nomad backend
While our Nomad backend is reaching completion, and hardware setup is being implemented in collaboration with SRE, we've been adjusting
those profiles of our `workbench` that target CI-oriented workloads to the new backend. Those profiles should demonstrate the full functionality
of the nomad cloud backend.  

Additionally, we're porting a first deployable version of our model cluster to nomad cloud, which will form the basis for validation of our actual key metrics with regard to those from the existing cluster.

### Performance & Tracing Meetup

We held a personal team meetup in Lugano, Switzerland. In an amazing location, and with a great seminar room to focus, we had 2 very productive
days together. Being able to discuss live and in colour, we could effectively synchronize on where the team is at, and how we want to develop in the future.
Also, it was a great opportunity to finally meet in person.

### Offboarding

Last not least we regret that our team lead is leaving at the end of May. Currently, he's handing over all his obligations, which requires reorganisation
of team structure, and responsabilities of team members for specific tasks. Serge, we all want to thank you for your excellent and reliable lead; we very much enjoyed the time with you, and wish you all the best for your future endeavours!