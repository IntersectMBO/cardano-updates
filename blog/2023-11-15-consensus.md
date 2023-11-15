---
title: Consensus Team Update
slug: 2023-11-15-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## High level summary

Over the last two weeks, we managed to run a UTxO-HD capable node in _legacy mode_, which maintains the baseline memory usage while keeping all the ledger state in memory (as the current node does).
This _legacy mode_ could provide an alternative for releasing a UTxO-HD capable node where people can choose whether to store the large part of the UTxO set on disk or not.
However, legacy mode involves code duplication, requires several weeks of work before it is production ready (more integration and testing). Moreover, we will not release UTxO-HD before Conway to avoid the risk of delaying the latter.
On the other hand, to integrate the LSM-tree backend for UTxO-HD we need to redesign the Consensus storage layer, and this new design might enable us to implement an alternative in-memory backing store that will have a very similar performance and resource requirements as the current Cardano node.
Therefore, during the coming months we will focus our efforts on the redesign of the storage layer and the LSM-tree backend.

On the Genesis front, we reviewed the [peer simulator](https://github.com/input-output-hk/ouroboros-consensus/pull/434) for Genesis tests, which was implemented by Tweag and was signed-off by the Consensus team.

We also continued our work on improving the handling of blocks from the future. We presented possible approaches to handling blocks from the future in the Chief Scientist Meeting at IOG, which was very well-received. The discussion with the IOG scientists touched upon the relationship of this approach to Ouroboros Chronos.

[Javier Sagredo](https://github.com/jasagredo) continues is cycle as release engineer, and he is working on version 8.7 of Cardano node.
