---
title: Consensus Team Update
slug: 2023-05-03-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## High level summary

During the past two weeks we made some important progress in the Genesis design.
It seems the `BlockFetch` logic need not be modified for Genesis, although this
needs to be confirmed. We started a DoS mitigation handbook and updated our
conceptual component diagram to guide the Genesis design. We engaged with the
IOG researchers to work on the Limit on Patience attack vector, work in this
area is still ongoing. We sketched a design to decouple the CPU load of the node
from its responsiveness to the socket. Finally, we discussed with Networking our
approach to lower the performance impact of the BlockFetch decision logic, and
got green light from them.

We migrated the consensus code to a [new
repository](https://github.com/input-output-hk/ouroboros-consensus), splitting
it from the `ouroboros-network` repository, and released version 0.6 of
Consensus.

We also merged the mempool fairness improvement to main branch.

Another significant enhancement to our documentation was the addition of an
explanation of the hardfork combinator forecast horizon.

See the sections below for more details.

## Genesis

We reviewed the `BlockFetch` design documentation, and added some source-code
comments that emphasize certain properties of the decisions the `BlockFetch`
logic makes that are helping us confirm that Genesis does not require any
changes to `BlockFetch`. We are waiting on input from our former system
architect to verify this.

We migrated and updated the conceptual component diagram in the `ouroboros-consensus`
repository which helps us situate the Genesis design and argument.

We engaged with the IOG researchers about the Genesis design. We sketched out a
way to address the concern that the Limit on Patiente (LoP) attack vector duty
cycle is indeed low, but it's still non-trivial to ultimately conclude it's
sufficiently low.

We also sketched a design to decouple the CPU load of the node from its
responsiveness to the socket, since the LoP is a relatively tight timeout, and
node performance bugs inducing seconds-worth of latency are unfortunately
familiar phenomena.

## Fostering collaboration

We [added an
explanation](https://github.com/input-output-hk/ouroboros-consensus/pull/62) of
a question that we had to explain many times about the exact behavior of the
hardfork combinator forecast horizon.
