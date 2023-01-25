---
title: Consensus Team Update
slug: 2023-01-25-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## High level summary

During the past two weeks, the consensus team finished the testing activities
around the UTxO-HD prototype. This is a very important milestone which will
enable us to run system-level tests and benchmarks, as well as start refactoring
and cleaning the prototype. Regarding our Genesis workstream, we elaborated a
roadmap that gives an indication of the remaining work. We also continued our
work on benchmarking chain-sync-jumping. We also continued working on improving
the way we handle blocks from the future, and advancing the integration of the
new VRF and KES crypto.

## Workstreams 

### UTxO HD Prototype 

As the prototype is nearing its completion, it was important to have enough
confidence that we will be able to move additional parts of the ledger state
onto disk. We worked together with the Ledger team to [elaborate a
sketch][pull-4296] on how the UTxO-HD design would accommodate the migration of
additional data from memory to disk. This gave us enough confidence that the
current architecture will be extensible in the future.

On the testing front, we [added][pull-4274] property-based tests for the UTxO-HD
type classes. 

We also [enabled disabled components][pull-4289], and addressed several
technical debt issues:

- Implement `splitSized` anti-diff split ([#4269][pull-4269]), and integrate it
  into consensus ([#4273][pull-4273]).
- Renaming of `peekVal` to `peekMDBVal` ([#7][pull-7]).

We ran ad-hoc benchmarks for syncing a chain from scratch and replaying. We
found a race condition in the LMDB backing store, which [we fixed][pull-4283].
After the fix we were able to successfully run these benchmarks. The results
were published by [this pull request][pull-4295].

We used our `db-analyser` tool to benchmark the cost of reading keys and
flushing values to disk. The following plot shows the duration of these disk
operation in relation to the main ledger operations, where we can see that the
cost of the former are comparatively low. The spike at the beginning of the
graph is when, at the start of the Shelley era, the *entire* UTxO set is flushed
to disk.

![UTxO-HD read and flush benchmarks](/images/consensus/2023-01-25-consensus-utxo-hd-read-and-flush-benchmarks.png)

After months of hard work adding tests for the prototype, we are ready to run
end-to-end tests on the node, and system level benchmarks. This signals a very
important milestone for the UTxO-HD workstream :tada:.

### Genesis 

We elaborated a [high-level decomposition][genesis-roadmap] of the remaining
work for Genesis. We also continued benchmarking the chain-sync-jumping
happy-path.

### Technical debt

We continued working on improving the way we handle blocks from the future.

### Support 

We completed the mapping of `Crypto` to `HeaderCrypto` and body `Crypto`.
`HeaderCrypto` is moved to `cardano-protocol-tpraos`. We created a draft [pull
request][pull-3262] to facilitate compiling consensus.

[pull-4274]: https://github.com/input-output-hk/ouroboros-network/pull/4274
[pull-4296]: https://github.com/input-output-hk/ouroboros-network/pull/4296
[pull-4289]: https://github.com/input-output-hk/ouroboros-network/issues/4289
[pull-4295]: https://github.com/input-output-hk/ouroboros-network/pull/4295
[genesis-roadmap]: https://github.com/input-output-hk/ouroboros-network/blob/a626c84f6df585dd27d735eb7eec73904a1f570e/ouroboros-consensus/docs/2023-Jan-Genesis-roadmap.md
[pull-4269]: https://github.com/input-output-hk/ouroboros-network/pull/4269
[pull-4273]: https://github.com/input-output-hk/ouroboros-network/pull/4273
[pull-7]: https://github.com/input-output-hk/lmdb-simple/pull/7
[pull-4283]: https://github.com/input-output-hk/ouroboros-network/pull/4283
[pull-3262]: https://github.com/input-output-hk/cardano-ledger/pull/3262
