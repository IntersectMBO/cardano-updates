---
title: Consensus Team Update
slug: 2023-11-01-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## High level summary


This week the Consensus team made progress on two fronts: the question of [survivable eclipse duration](https://github.com/input-output-hk/ouroboros-consensus/pull/422), which is part of our work [supporting Genesis delivery](https://github.com/input-output-hk/ouroboros-consensus/issues/427), and how to [improve the handling of blocks from the future](https://github.com/input-output-hk/ouroboros-network/issues/4251).
Regarding the UTxO-HD branch, we managed to run a node with [legacy blocks](https://github.com/input-output-hk/ouroboros-consensus/issues/344), which is syncing with mainnet, up to including Alonzo.
We also [investigated](https://github.com/input-output-hk/ouroboros-consensus/issues/465#issuecomment-1788685122) a regression in mempool snapshotting, which was ultimately solved by a Ledger update, and will be fixed in the upcoming Node 8.6 release.
