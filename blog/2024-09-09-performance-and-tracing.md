---
title: Performance & Tracing Update
slug: 2024-09-09-performance-and-tracing
authors: mgmeier
tags: [performance-tracing]
hide_table_of_contents: false
---

## High level summary

* Benchmarking: Release benchmarks for Node `9.1.1`; additional UTxO-HD in-memory benchmarks.
* Development: Created a local reproduction for observed UTxO-HD RAM increase.
* Workbench: Created a new "age of Voltaire" performance baseline. Adjusted Nomad backend has entered testing phase.
* Infrastructure: Dropping the requirement on `Vault`, optimizing cluster setup.
* Tracing: New metrics naming schema was merged. Routing to internal monitoring servers is ongoing. Dropping dependency on `HsOpenSSL`.


## Low level overview


### Benchmarking

Runs and analyses for a full set of release benchmarks have been performed for Node version `9.1.1`. In comparison with Mainnet releases `9.0` and `9.1.0`, we could determine this version does not exhibit any performance regression.  

Having been provided with the patch by Consensus targeting the increased RAM usage of the UTxO-HD in-memory backend (read below), we've performed additional benchmarks to validate the desired result on the cluster. Our measurements demonstrate the increased
memory need has now vanished. We're confident that by now we've located - and addressed - all performance risks for UTxO-HD in-memory that we can capture given the instruments at our disposal. To gain further confidence in the stability
of resource usage pattern and network metrics observed on the benchmarking cluster, we've advised long-running UTxO-HD nodes under close monitoring.

### Development

We succeeded in creating a local reproduction of the increase in RAM usage that was observed for the UTxO-HD in-memory backend on the cluster. That reproduction enabled the Consensus team to inspect in real-time and profile running Node processes - which
led to a swift identification of the underlying cause and a patch addressing it.

### Workbench

After the smooth Chang hard fork which transitioned Cardano into the Conway era, we've created - and merged - a new performance baseline. It's intended for release benchmarks and caters to the new features of the Conway ledger. Apart from incorporating the latest protocol version and Plutus cost models, it includes DRep presence in ledger when performing measurements.  

The PR preparing our workbench for a `nixpkgs` upgrade and removing the container-based Nomad / `podman` backend is complete and has entered testing phase.  

### Infrastructure

Currently, our Nomad cluster uses `Vault` to manage access and credentials for the benchmarking cluster. As the cluster exclusively relies on static routes, and fixed deployment endpoints, encoding access as a set of rules into the cloud infrastructure
is a viable option. That way, we will no longer depend on the `Vault` service, removing the requirement of hosting, and maintaining, an instance of it.

### Tracing

Aligning the metrics naming schema and semantics between new and legacy tracing systems has been completed and merged. This will enable a seamless interchange in the community, as all existing configurations of monitoring services remain their validity.  

As for hosting multiple EKG metrics monitors in one single service application, we ascertained that the `ekg` package was not built for that use case. However, we've come up with a much nicer design for `cardano-tracer` using dynamic routing based on the names of nodes
connected to it. It has successfully passed prototype stage in that it's able to serve multiple EKG monitors without the need for any server restart; the full implementation is being worked on.  

Last not least, both existing tracing systems rely on the `snap` server framework, and thus by transitive dependency, on `HsOpenSSL` to speak the HTTPS protocol. However, we've determined the latter package to have a risk of breaking the build, both currently and in the future (cf. [HsOpenSSL#95] and [HsOpenSSL#88]). As a consequence, a switch to the `wai` / `warp` based framework was decided, which implements HTTPS capability differently, thus preempting the risk. This has already been carried out for the legacy system, and currently is
for `cardano-tracer` - a big shoutout to Erik de Castro Lopo for his support on that issue.



[HsOpenSSL#95]: https://github.com/haskell-cryptography/HsOpenSSL/issues/95
[HsOpenSSL#88]: https://github.com/haskell-cryptography/HsOpenSSL/issues/88