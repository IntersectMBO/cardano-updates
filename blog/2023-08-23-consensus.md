---
title: Consensus Team Update
slug: 2023-08-23-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## High level summary

On the UTxO-HD front we reached another important milestone, where we handed over the implementation for benchmarking and testing. We are working on addressing the first issues that were found during the integration tests.
On the Genesis front we are finalizing the argument that a checkpoint is not necessary for the initial release, including supporting to support said argument. We are also working on the new node release, and several improvements to our code-base.

## UTxO-HD

- We addressed the issues that came from the benchmarking and testing phase (see [#314](https://github.com/input-output-hk/ouroboros-consensus/issues/314)).
    - We fixed the operational-certificate update exception ([#305](https://github.com/input-output-hk/ouroboros-consensus/pull/305)).

## Tech debt 

- We elaborated an inventory of the symbols used by downstream clients in an effort to clearly define the Consensus API, which will help managing changes and their impact to the downstream clients (see [this branch](https://github.com/input-output-hk/cardano-api/tree/jasagredo/consensus-api)).
- We extracted the SOP modules to a separate package as part of our effort to reduce the Consensus API surface area (see [this branch](https://github.com/input-output-hk/ouroboros-consensus/tree/jasagredo/test-sop)).
- We took the first step towards improving how the Cardano hard-fork block is instantiated when running a node (see [#275](https://github.com/input-output-hk/ouroboros-consensus/issues/275)).
- We decreased the flakiness for our test suite ([#284](https://github.com/input-output-hk/ouroboros-consensus/pull/284)).
- We incorporated and merged the pull-request on query versioning ([#273](https://github.com/input-output-hk/ouroboros-consensus/pull/273)).
- We started working on new performance-based regression tests for mempool operations.

## Support 

- [Nick Frisby](https://github.com/nfrisby) continues with his engineer responsibilities. Notably getting the Consensus release out for node `pre-release 8.3`. Nick also began integrating it into downstream branches (`cardano{-api,-cli,-node}`). The Node team has now taken over, since Nick had progressed up to the point where they needed to start making new design decisions. Related PRs:
    - [#283](https://github.com/input-output-hk/ouroboros-consensus/pull/283)
    - [#301](https://github.com/input-output-hk/ouroboros-consensus/pull/301)
    - [#304](https://github.com/input-output-hk/ouroboros-consensus/pull/304)
	- [#308](https://github.com/input-output-hk/ouroboros-consensus/pull/308)
