---
title: Consensus Team Update
slug: 2023-02-22-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## High level summary

During the past two weeks we got the results from the system level benchmarks
for UTxO HD. They showed a substantial performance regression, so we spent some
time analyzing the results. We found out the frequency at which ledger snapshots
were taken was too high, so we requested the benchmarking team a new run with a
more realistic snapshotting policy. We continued refactoring and improving the
prototype, and we released UTxO-HD related packages to CHaP.

We met with IOG researchers and networking specialists to discuss the Genesis
design, which was well received. We continued working on testing and
benchmarking different Genesis prototypes.

We are also working on solving a test failure related to iterators. This work
derived in several improvements such as better documentation, a framework for
writing unit (and regression) tests, and the possibility of debugging
`QuickCheck` counter examples in the REPL.

Finally, we released `ouroboros-consensus` 0.2.0.0 and
`ouroboros-consensus-cardano` 0.3.0.0 to CHaP

## Workstreams 

### UTxO HD Prototype 

We got the results of the first system level benchmarks for UTxO HD. They seemed
to indicate a significant regression in performance. After looking into the
benchmark logs we found that the benchmark runs took ledger state snapshots too
often, due to the default snapshotting policy depending on `k`, and `k` being so
small in the benchmark runs. Therefore, the next step is to re-run the
benchmarks with a snapshotting policy that more closely resembles the one from
mainnet.

At the same time, we continued refactoring and cleaning up the prototype. 

Also, we prepared the `anti-diff` packages (`fingertree-rm`, `diff-containers`,
`simple-semigroupoids`) and the `lmdb` related packages (`cardano-lmdb` and
`cardano-lmdb-simple`) to [CHaP][chap].

### Genesis

The Genesis design was presented to the IOG researchers and Peter Thompson from
NSol. It was well received. They pointed out one blindspot, but we think it'll
be relatively simple to mitigate.

In parallel, we continued developing test and benchmarks for the Genesis
prototypes. I particular we tested and implemented a potential fix for
[increased ChainDB dequeue timings][increased-dequeue-timings], which partly
behaved as we expected, but still needs further investigation. Also we obtained
[new benchmarking data][new-bench-data] for the prototype.

### Technical debt

Related to [#4183][pull-4183], we developed a [DSL][pull-4379] for specifying
`ChainDB` unit tests. This will allow us to better understand the
counter-examples returned by QuickCheck tests, and to write [regression
tests][pull-4383] for them. Also, we [added a module][pull-4358] to enable
QuickCheck counter-examples to be run on the REPL, allowing for faster debugging
feedback. Also, we improved the documentation related to followers
([#4372][pull-4372]).

We are also working on a design for optimizing the way we handle blocks from the
future.

### Support

We released `ouroboros-consensus` 0.2.0.0 and `ouroboros-consensus-cardano`
0.3.0.0 to CHaP. Remember that we decided to split the packages related to
Consensus into two bundles, one with the core functionality, Cardano-agnostic
code, and another bundle with instantiations specific to Cardano.

[new-bench-data]: https://github.com/input-output-hk/ouroboros-network/issues/4037#issuecomment-1434745031
[increased-dequeue-timings]: https://github.com/input-output-hk/ouroboros-network/issues/4037#issuecomment-1439708022
[chap]: https://github.com/input-output-hk/cardano-haskell-packages
[pull-4358]: https://github.com/input-output-hk/ouroboros-network/pull/4358
[pull-4183]: https://github.com/input-output-hk/ouroboros-network/issues/4183
[pull-4372]: https://github.com/input-output-hk/ouroboros-network/pull/4372
[pull-4379]: https://github.com/input-output-hk/ouroboros-network/pull/4379
[pull-4383]: https://github.com/input-output-hk/ouroboros-network/pull/4383
