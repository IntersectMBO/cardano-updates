---
title: Consensus Team Update
slug: 2023-04-05-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## High level summary

This week the consensus team finished the UTxO-HD prototype refactoring. We are
now working on improving the DB lock mechanism to improve performance. We also
introduced several improvements to the file system abstraction and simulation
layer (`fs-sim`), which culminated in the release of `fs-sim-0.1.0.0` and
`fs-api-0.1.0.0` to `CHaP`.

On the Genesis front we distributed the updated Genesis design document,
soliciting feedback from Networking Team and IOG Researchers. We also opened up
a PR for the adversarial leader schedule `QuickCheck` generator, which is being
reviewed.

On the support front, we got a new Consensus version that can use different
fundamental VRF crypto primitives for Babbage and Conway eras.

On the tech debt front we fixed an bug in the followers logic, which was
discovered by our `QuickCheck` property tests.

