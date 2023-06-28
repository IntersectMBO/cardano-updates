---
title: Consensus Team Update
slug: 2023-06-28-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## High level summary

During the past two weeks the team working on the Genesis implementation continued to engage with the researchers, which resulted in various simplifications of the correctness argument for the historical Genesis window. They also decided on an approach for a syncing node to decide that it is (no longer) caught up. This functionality was requested by the networking team. 

The team working on the UTxO-HD implementation ran ad-hoc benchmarks that showed performance issues, which are being investigated. They also merged several improvements required for the first UTxO-HD release, and added a package for easing integration with other downstream components.

Regarding our support activities, we integrated the latest Ledger changes into Consensus in preparation for release 8.2 of node. 

### Genesis

- We continued to engage with the researchers on our probabilistic model for historical Genesis window, resulting in various simplifications that make the correctness argument more clear while not being excessively conservative.

- We [decided on an approach](https://github.com/input-output-hk/ouroboros-consensus/issues/101#issuecomment-1607767722) of how to implement functionality requested by the Networking team; namely, how a syncing node can safely conclude that it is (no longer) caught up. Certain parameters are still subject to discussion with the researchers, and we have still have to agree on a concrete API for this functionality with the Networking team.

### UTxO-HD

- We merged the last of the PRs that were part of UTxO-HD improvements for version [0.1](https://github.com/input-output-hk/ouroboros-consensus/issues/149): expose UTxO-HD configuration options in the node, refactor ledger tables, and expose a method of computing the UTxO set size.
- We [added](https://github.com/input-output-hk/ouroboros-consensus/pull/87) a new "legacy" cardano block in a new `ouroboros-consensus-cardano-legacy-block` package that should ease the transition for some downstream packages to UTxO-HD, like `db-sync`. This is really only useful for downstream packages that use the parts of consensus that don't involve the storage components, in which case we can largely ignore ledger tables. Ignoring ledger tables could also make functionality like block (re-)application more performant for the legacy Cardano block as compared to the actual (UTxO-HD compatible) Cardano block.
- We performed ad-hoc benchmarks of the UTxO-HD implementation, observing a regression in sync speed in the LMDB implementation as well as a regression in memory usage on the in-memory implementation. We are investigating this.
