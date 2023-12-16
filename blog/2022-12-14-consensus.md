---
title: Consensus Team Update
slug: 2022-12-14-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## High level summary

During the past two weeks, the Consensus team finalized the QSM tests for the
backing store and Mempool on the UTxO-HD branch with important discoveries
regarding parallel QSM testing. We also worked with the Ledger team to envisage
the modifications that are required in Ledger and Consensus to accommodate the
changes in the crypto VRF and KES. The `db-analyser` now supports bechmarking
the ledger operations, which will allow us to identify, debug, and profile
potential performance problems. We drafted a document that defines how to manage
the versions of Consensus-related packages. The top level documentation of
`ouroboros-network` now features a description of the consensus components and
provides a hyperlinked map to the modules documentation.

## Workstreams

### UTxO HD prototype

Whereas we had passing sequential state-machine tests for the mempool, the
parallel case proved to be more challenging than we thought. The operation of
adding a list of transactions to the mempool is not atomic and, as a result,
when adding a list of transactions, transactions from other processes can be
added in between. The mempool implementation handles this correctly, however
this required us to [redesign][pull-4076] the parallel model we had to take
the lack of atomicity into account.

#### Backing store property tests

We finished refactoring the backing store property tests. The second review
round is ongoing.

### LSM tree implementation

We are working on benchmarking (in terms of time and number of IO operations)
fetching/looking up data from disk.

### Genesis 

We worked on the design of a mechanism to prevent a DoS attack on our Genesis
design related to rollbacks. This was arguably the biggest outstanding question.

During the discussions around Genesis, we noticed a design boundary that nicely
delineates a fundamental component. We almost have a full Haskell prototype of
it. It will be very nicely self-contained, perhaps even usable in the ultimate
implementation!

### New VRF and KES crypto integration

We collaborated with the Ledger team on preparing the ledger state and crypto
types to avoid huge allocation on the epoch boundary when changing aspects of
the crypto that will only manifest in headers, not in the ledger states.

### Technical debt

We merged the [pull-request][pull-4014] that adds a support to `db-analyser` for
benchmarking ledger operations. This will allow us to identify, debug, and
profile potential performance problems. The benchmark focus on the main 5 ledger
operations that are involved in chain syncing, block forging, and block
validation, namely:

0. Forecast.
1. Header tick.
2. Header application.
3. Block tick.
4. Block application.

The following figure shows a plot of the benchmarking results for the first 65
million blocks (approximately) of the Cardano chain. The thin yellow lines under
the x-axis show the epoch boundaries, whereas the thick yellow lines correspond
to the era transitions.

![](/images/consensus/2022-12-14-ledger-ops-benchmark.png)

As we can see in this figure, era and epoch boundaries require more computation
time. The ledger team are aware of this problem, and we are working to improve
this situation.

### Fostering collaboration

We [drafted a document][pull-4207] motivating and defining how Consensus (and
possibly other core teams) will/should manage our package versions. This
pull-request garnered many great discussions from our team members and other
teams too: Sebastian Nagel, Arnaud Bailly, Michael Peyton-Jones, Ziyang Liu, et
al. We want to thank you all for your input, and we found this discussion very
enlightening!

We merged the [pull request][pull-4197] that adds an overview of consensus to
the [top level
documentation](https://ouroboros-network.cardano.intersectmbo.org/) of
ouroboros-network. This overview describes the consensus components and adds a
hyperlinked map to the modules documentation.

[pull-4207]: https://github.com/input-output-hk/ouroboros-network/pull/4207
[pull-4014]: https://github.com/input-output-hk/ouroboros-network/pull/4014
[pull-4076]: https://github.com/input-output-hk/ouroboros-network/pull/4076
[pull-4197]: https://github.com/input-output-hk/ouroboros-network/pull/4197
