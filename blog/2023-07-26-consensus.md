---
title: Consensus Team Update
slug: 2023-07-26-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## High level summary

The `db-sync` team confirmed that the adaptor module the Consensus team provided for UTxO-HD integration, shows no performance degradation. Other clients who wish to integrate with UTxO-HD without using a on-disk storage could use that same approach for now.
We also focused on completing tracing support for UTxO-HD in `cardano-node`.
Currently we are working on UTxO-HD documentation, both for downstream consumers and for the general public; and generalizing the implementation further. 

The team working on Genesis decided on a Genesis-motivated change of the epoch structure with the researchers, wrote a self-contained description of the statistical model for historical Genesis windows and eclipse durations, and merged two small improvements to the `ChainSync` client as part of the onboarding efforts for the team that will implement Genesis.

The Consensus team also investigated an issue on sanchonet (the Conway testnet) manifesting in long syncing pauses; identified a ledger bug which was promptly fixed by the Ledger team.

### Genesis

Improvements to the `ChainSync` client:

- [#222](https://github.com/input-output-hk/ouroboros-consensus/pull/222).
- [#233](https://github.com/input-output-hk/ouroboros-consensus/pull/233).

