---
title: Consensus Team Update
slug: 2023-01-11-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## High level summary

The consensus team is resuming its activities after the Christmas break. During
these weeks we focused on cleaning and benchmarking the UTxO-HD prototype, and
discussing with the Ledger team the changes that might be required for the next
iterations. The pull request that adds the Conway era is waiting for a second
review round and we hope to merge it soon. On the technical debt side we are
looking into a property-test failure found in the iterators. We are
investigating if this is an error in the model or in the implementation. We also
improved the documentation of our testing code.

## Workstreams 

### UTxO HD Prototype 

We worked with the Ledger team to start preparing the next versions of UTxO-HD.
The Ledger team is concerned that for the remaining maps we might need the full
ledger state on epoch boundaries. Since the main consumer of the ledger rules is
Consensus, the code that requires access to a full state could be moved from the
ledger to some Ledger-Consensus bridge. Eg. the traversal of rewards could take
place in such bridge, instead of querying the ledger for the values that are
required in the epoch-transition computations.

We [relocated][pull-4234] some UTxO-HD definitions, in preparation for merging
the prototype into `master`.

We also completed updated local benchmarks comparing the replay time and memory
consumption of:

- the baseline node (`f2fc76ef45647275c98634da1718290b976ff364`) 
- the UTxO-HD node with the in-memory backend 
- the UTxO-HD node with the LMDB backend

The following plot shows the results: we can see that the LMDB node barely
reaches 8GB of memory, but it takes 1.78 times longer to replay the chain. The
in-memory backend is about 30 minutes faster, but still slower than the baseline
version. We are aware of this phenomenon and it is inherent to the problem of
maintaining sequences of differences of the last `k` ledger states that allows
us to perform rollback and roll-forward. We are in the process of measuring
syncing from scratch times.

![](/images/consensus/2023-01-11-utxo-hd-replay-benchmarks.png)

We also [added `StaticEither` accessors][pull-4263] that helped us to simplify
the UTxO-HD prototype.

### New Conway era

We incorporated the feedback of the [pull request][pull-3971], and rebased this
branch on top of `master`. The PR is pending a second review round and we hope
to merge this soon.

### Technical debt 

We are investigating a [property-testing failure][issue-4183] involving
iterators. Solving this requires understanding the expected behavior of
iterators in the counterexample found by `QuickCheck` to determine if the error
is in the model or in the implementation.

### Fostering collaboration

We [moved][pull-4248] the contents of `docs/Testing.md` closer to the code, so that the
explanations about the tests are easier to find in the relevant modules, and the
documentation is easier to keep up to date.

[pull-4234]: https://github.com/input-output-hk/ouroboros-network/pull/4234
[issue-4183]: https://github.com/input-output-hk/ouroboros-network/issues/4183
[pull-4248]: https://github.com/input-output-hk/ouroboros-network/pull/4248
[pull-3971]: https://github.com/input-output-hk/ouroboros-network/pull/3971
[pull-4263]: https://github.com/input-output-hk/ouroboros-network/pull/4263
