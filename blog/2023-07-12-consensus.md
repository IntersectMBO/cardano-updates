---
title: Consensus Team Update
slug: 2023-07-12-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## High level summary

This week the team working on UTxO-HD discovered a space leak in the peer metrics code. This was communicated to the Networking team who has a [proposed fix](https://github.com/input-output-hk/ouroboros-network/pull/4620). The ad-hoc benchmarks that the team ran using a local immutable DB server showed good memory and time performance. We still have to check the performance on a memory constrained machine.

The team working on the Genesis design started onboarding the team of engineers that will implement the new Genesis protocol. This team is also finalizing the statistical model for historical Genesis feasibility.

On the support front, the team [drafted](https://github.com/input-output-hk/ouroboros-consensus/pull/200) an information exchange requirement (IER) for the Networking team to safely and efficiently control peer load.

