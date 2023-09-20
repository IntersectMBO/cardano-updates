---
title: Consensus Team Update
slug: 2023-09-20-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## High level summary

We have a proposed fix for the mempool forging regression observed in the UTxO-HD branch. We need to confirm this by running system level benchmarks.
We are still working on a fall back mechanism for keeping the baseline performance of Cardano node, if the performance of the UTxO-HD is not enough.
On the Genesis front, we confirmed with the researchers that the proposed Genesis design is satisfactory for the historical Cardano chain.
We also have a proposed fix for the wrong protocol version bug, found in the Sanchonet, after transitioning to Conway.

### UTxO-HD

- We optimized the mempool revalidation process, which in turn ought to solve the regression observed during system-level benchmarks in the in-memory version ([349](https://github.com/input-output-hk/ouroboros-consensus/pull/349)). System level benchmark results are pending.
- Regarding the workaround to keep the node's baseline performance if that of the in-memory backend turns out not to be enough for our stakeholders ([344](https://github.com/input-output-hk/ouroboros-consensus/issues/344)), we are still expanding the legacy block package such that we could at some point run the node with a legacy Cardano block. There are some loose ends to wrap up before we can begin the first test run.
- We also brought the `UTxO-HD` branch up to date with node version `8.4.0`.

### Genesis

- We finished the discussion with the Researchers on how to argue that the proposed Genesis design is satisfactory for the existing historical Cardano chain.
  We are now drafting the final self-contained argument. ([4157](https://github.com/input-output-hk/ouroboros-network/issues/4157))

### Support

- We debugged a bad parameter update on the `Babbage` to `Conway` transition in the SanchoNet testnet ([339](https://github.com/input-output-hk/ouroboros-consensus/issues/339)).
  A superficial patch is within reach and we are in the process of reviewing the PRs related to this fix ([340](https://github.com/input-output-hk/ouroboros-consensus/pull/340), [354](https://github.com/input-output-hk/ouroboros-consensus/pull/354), and [355](https://github.com/input-output-hk/ouroboros-consensus/pull/355))
  However we are investigating a more principled redesign of the epoch transition logic, which required us to revisit the existing interfaces of the `ConsensusProtocol` type class and the `HardForkBlock` combinator ([345](https://github.com/input-output-hk/ouroboros-consensus/issues/345) and [346](https://github.com/input-output-hk/ouroboros-consensus/pull/346)). This is important to prevent these kind of errors in the future. This is an overdue step in the process of taking full ownership of the HFC: reconsidering original HFC design decisions for which we now have much more context, a few years later.
