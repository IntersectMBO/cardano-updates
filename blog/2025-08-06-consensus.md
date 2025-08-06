---
title: Consensus Team Update
slug: 2025-08-06-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## High level summary

During the past couple of weeks, the team has continued working across multiple workstreams: LSM-tree integration, Peras implementation, KES agent integration, and Leios prototyping. Current efforts include:

- Implementing a streaming conversion for ledger snapshots.
- Drafting a set of mini-protocols to cooperatively implement the Linear Leios specification. Particular focus is being placed on ensuring adequate concurrency and resource usage bounds, which are less explicitly defined in the high-level spec.
- Releasing a stubbed version of `kes-agent`, and integrating it into the Consensus version targeted for Cardano Node 10.6. While the KES code will be included in this release, functionality will remain inactive pending a code audit.
- Merging Peras-related optimizations into both the `main` and `peras-staging` branches.
