---
title: Consensus Team Update
slug: 2023-05-17-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## High level summary

During the past two weeks we brought further improvements into the Genesis design in collaboration with the IO Research and Networking teams. These improvements concern the Genesis selection rule, candidate rule, and root peers usage. See the [Genesis][#genesis] section for more details.

Regarding our UTxO-HD prototype, during the past two weeks we put together a pull-request that improves the DB locking mechanism, started porting the mempool fairness improvements from our `main` branch, and integrated a new open source library (that implements cancellative monoids) that allowed us to simplify our code and get a small performance gain.

We improved our tooling by releasing an [immutable DB server](https://github.com/input-output-hk/ouroboros-consensus/pull/68), which can be used for testing and benchmarking purposes, and a [`db-truncater`](https://github.com/input-output-hk/ouroboros-consensus/pull/70) program, which can be used in disaster recovery and benchmarking scenarios.

## Genesis 

The consensus team working on Genesis:

- Improved the genesis selection rule as a result of our interaction with IO Research.
- Studied how the hard-fork combinator handles forecasting at era transitions, and [improved our documentation](https://github.com/input-output-hk/ouroboros-consensus/pull/89).
- Determined that the simplest candidate rule we had considered will work for the Genesis window at era transitions, at least for the MVP.
- Elaborated concrete proposal for the Genesis State Machine.
- Met with the Networking Team and advised/co-designed how to implement the stop gap usage of public trusted root peers before Genesis is released (it's similar to the Genesis State Machine).

The team is currently re-analyzing the Limit on Patience, which can be less aggressive now that we've re-introduced the Genesis State Machine.
