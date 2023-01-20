---
title: Consensus Quarterly Update
slug: 2023-01-18-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## Consensus Quarterly Update
## 2022-12 - 2023-01

### Main achievements

#### UTxO HD

The prototype is feature complete and thoroughly tested at the consensus level.
In particular, we invested a lot of time in writing property-test for the
mempool, and other crucial new parts of the prototype. Now we are ready to run
integration tests and system-level benchmarks.

#### Genesis

We identified and fixed a slowdown in cross-era forecasting that was inhibiting
our efforts to benchmark the ChainSync Jumping prototype. This resulted in a 7%
speedup in full sync times in the baseline.

We also started prototyping a self-contained implementation of the Genesis
dynamics (in particular of the parts intentionally not part of the ChainSync
Jumping prototype) that furthered our understanding of subtleties and edge
cases.

#### Support

- We worked on designing integration of new VRF and KES crypto into consensus.
    - `Crypto` class was split into two parts: `Crypto` and `HeaderCrypto`.
    - With the Ledger team's help, we refactored `cardano-ledger` to use a proxy
      type for VRF.

#### Conway era

- PR went through its second review round. It is about to be merged, but it got
  delayed due to people's availability during Christmas break.

#### Technical debt

- We improved the capabilities of our `io-sim` library, which is key for testing
  and simulating Cardano components.
- We removed thunks from epoch translations in the ledger, which is important
  for reducing memory consumption of the Cardano node.

#### Fostering collaboration

- We added a tutorial on how to instantiate the Consensus layer to run custom
  ledgers. This should be a valuable resource to people looking to roll their
  own custom blockchain (either for commercial or research purposes).
- We added an overview of consensus to the [top level
  documentation](https://input-output-hk.github.io/ouroboros-network/) of
  ouroboros-network. This overview describes the consensus components and adds a
  hyperlinked map to the modules documentation.

### Next steps

#### UTxO HD

- Evaluate the extensibility of the prototype. Moving the UTxO to disk is only
  the first step towards reducing the memory requirements of Cardano node, and
  ensuring its long term sustainability. In the future, we plan on moving other
  large maps, such as delegation maps. The prototype should be able to
  accommodate these changes without any major modifications.
- Start the integration with other downstream components, such as the wallet and
  db-sync. The idea is to identify and address any potential pain points that
  might arise during this integration.
- Run integration tests and system-level benchmarks.

#### Genesis

- Finish benchmarking and tuning the fast-path ChainSync Jumping prototype
- Expand and optimize the self-contained implementation of the Disconnect Rule
  (including density comparisons and the LoE)
- Develop documentation and smoke tests for these components.
- Start modifying the ChainSync Client for the LoP and LoR.

#### Support

- Help the Network team with diagnosing performance regression in block
  production.

#### Tech debt

- Fix property-test failures concerning iterators ([#3999][issue-3999] and
  [#4183][issue-4183]).

#### Fostering collaboration

- Finish [mapping consensus][issue-4145].

### Risks 

#### UTxO HD

- Moving other parts of the ledger state to disk might require a major redesign
  of the prototype. For instance, if it turns out that the epoch change rules
  require access to the *full* ledger state. If this is the case, we might
  accept this risk and do the redesign after the initial release of UTxO-HD.
- Integration with downstream clients might require more work than we
  anticipate.
- Access to the benchmarking's team time and resources.
- Benchmarking results might show significant performance degradation, which
  will require additional work if such performance degradation is not accepted
  by other stakeholders.
- The prototype's performance might not be accepted by other stakeholders. Here
  we need to clearly communicate that this is necessary to ensure that as the
  blockchain size grows, the node can operate within reasonable memory
  constraints.

[issue-4183]: https://github.com/input-output-hk/ouroboros-network/issues/4183
[issue-3999]: https://github.com/input-output-hk/ouroboros-network/issues/3999
[issue-4145]: https://github.com/input-output-hk/ouroboros-network/issues/4145
