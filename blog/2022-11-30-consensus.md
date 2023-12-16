---
title: Consensus Team Update
slug: 2022-11-30-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## High level summary

During the past two weeks, the consensus team merged improvements to the monadic
cursor API that was needed to implement LMDB range reads, which is in turn
required for the implementation of the UTxO HD feature. We added tables to
several tests in for the UTxO HD feature, which increases our confidence in the
correctness of the prototype. The mempool property tests are close to being
completed. Also, we finished the LSM tree tuning algorithm.

On the Genesis front we started simplifying the BlockFetch logic with
CSJ-specific workloads in mind. 

We are also documenting the Block Diffusion Pipelining feature, and added a
high-level overview of consensus to the top level documentation of
`ouroboros-network`.

## Workstreams

### UTxO HD prototype

We merged the implementation of a monadic cursor API ([#1][pull-1])) which was
needed to solve a bug with LMDB range-reads. After this PR was merged, we focused on
bridging the gap between the `lmdb-simple` interface and consensus by facilitating
using `lmdb-simple`'s cursor API without `Serialise` constraints ([#3][pull-3]).

We refactored the backing store property tests to use `quickcheck-lockstep`
([#4081][pull-4081]).

We added tables to the mock ledger in the UTxO-HD feature branch
([#4184][pull-4184]). Every test that used to run with `SimpleBlocks` now uses
tables. This will enable us to exercise the UTxO HD mempool integration by
leveraging the existing mempool property-tests. The new state-machine
property-tests are still needed for testing the parallel behaviour of the
mempool.

Our work on the mempool state-machine tests revealed the need for improvements
in the `quickcheck-state-machine` library. Parallel testing assumed that the
state machine did not have access to mutable references. However, the mempool
tests require the use of such mutable references for mocking the ledger
interface. As a result, our parallel tests were failing with rather obscure
messages. @Jasagredo submitted a pull request ([#12][pull-12]) that allows for
new mutable references to be created at each run of the state machine.

#### Backing store property tests

### LSM tree implementation

We finished the LSM Tree tuning algorithm. We are currently tidying up the code
and gathering results (i.e., plots and their interpretation).

### CSJ prototype

We started simplifying the BlockFetch logic with CSJ-specific workloads in mind.

### New VRF and KES crypto integration

Started working on supporting new version of `StandardCrypto` which uses compact
KES and batched VRF ([#4151][issue-4151]).

### Technical debt

We reviewed the existing state of the Block Diffusion Pipelining document. We
are now working on the "Implementation" section ([#4020][issue-4020]).
 
### Fostering collaboration

We cleared up our understanding of the error dynamics of forecasting
([#4146][pull-4146] and [#4174][pull-4174]).

We submitted a pull request that adds an overview of consensus to the [top level
documentation](https://ouroboros-network.cardano.intersectmbo.org/) of
ouroboros-network ([#4197][pull-4197]). This overview describes the consensus components and adds a
hyperlinked map to the modules documentation.

https://github.com/input-output-hk/ouroboros-network/pull/4197


[issue-4151]: https://github.com/input-output-hk/ouroboros-network/issues/4151
[pull-1]: https://github.com/input-output-hk/lmdb-simple/pull/1
[pull-3]: https://github.com/input-output-hk/lmdb-simple/pull/3
[pull-4081]: https://github.com/input-output-hk/ouroboros-network/pull/4081
[pull-4184]: https://github.com/input-output-hk/ouroboros-network/pull/4184
[pull-12]: https://github.com/stevana/quickcheck-state-machine/pull/12
[pull-4146]: https://github.com/input-output-hk/ouroboros-network/pull/4146
[pull-4174]: https://github.com/input-output-hk/ouroboros-network/pull/4174 
[issue-4020]: https://github.com/input-output-hk/ouroboros-network/issues/4020
[pull-4197]: https://github.com/input-output-hk/ouroboros-network/pull/4197
