---
title: Consensus Team Update
slug: 2023-05-31-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## High level summary

During the Past two weeks we drafted an implementation path for concluding that a node is caught up, which will also be used to back Network's ledger-peer selection (see [this issue](https://github.com/input-output-hk/ouroboros-consensus/issues/101)). We also carried a thorough investigation into the exact feasibility of applying the Genesis rule to certain historical parts of the chain.

On the UTxO-HD front, we are working on improving the ledger tables design and wrapping up the improved DB locking mechanism. We also released packages that are required not only by UTxO-HD but are already used in cardano.

## UTxO-HD

- We have a plan for making the ledger tables in UTxO-HD more ergonomic by mimicking `SOP` classes like `HPure` and `HAp` . In short, we implement generalised versions of important classes like `Applicative` and `Traversable`.

## Support

- `fs-sim-0.1.0.2` and `fs-api-0.1.0.2` were released, which makes them now compatible with GHC up to `9.6`.
