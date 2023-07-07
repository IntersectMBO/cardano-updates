---
title: Network Q2 2023 Update
slug: 2023-Q2-network
authors: coot
tags: [network]
hide_table_of_contents: false
---

## 2023-04 - 2023-06

### Main achievements

#### Eclipse Evasion

We finalised the design of eclipse evasion and implemented its mechanism which
relays on connectivity to _big ledger peers_.  _Big ledger peers_ are the
largest ledger peers which accumulate 90% of stake (currently there are less
than 1000 of them).  The outbound governor has new targets for _known_,
_established_ and _active_ big ledger peers which work in a similar way that
such targets work for ledger peers.  The [ouroboros-network#4662] PR is
currently in review.

As part of this work we also identified a bug which would prevent a node to
connect to itself.  Such connections are not easily detectable and are expected
to be dropped by the churn mechanism, nonetheless they should not be buggy.
The failure was discovered thanks to our e2e simulation of diffusion using
`io-sim` & property based testing.

The PR also refactors the heart of the `ouroboros-network` interface reducing
technical debt that would otherwise accumulate.

We also identified a possible improvement in the churn mechanism, which will be
implemented in Q3.  Churn needs to await for peers to terminate, we can
improve the synchronisation. [ouroboros-network#4617]

#### Ecosystem P2P Deployment Progress

We reached __50% of stake in hands of SPOs who run at least on P2P relay__.  Now
also Emurgo and CF are running some P2P relays. Also 20% of IOG relays are
running in P2P mode.

![P2P Progress](/images/network/2023-07-06-p2p-progress.png)

#### Peer Sharing

We implemented _bootstrapping for peer sharing_ (also known as light peer
sharing).  New downstream (inbound) peers are now added to the _known peers_ of
the _outbound governor_.  Together with peer sharing this allows for non
registered relays to propagate through the network. [ouroboros-network#3596]

_Please note that peer sharing is disabled by default and is not considered safe
until Bootstrap Peers (see below) or Genesis is implemented._

#### Diffusion (P2P)

- We designed a feature which will reduce the load on IOG relays (in future
  also run by CF & Emurgo).  The feature consists of two parts.  A new source
  of peers called _bootstrap peers_ (obtained from via an https request), the
  ability to switch from bootstrap peers to ledger peers if the node is synced
  (we are collaborating with the consensus team on the interface [Bootstrap
  Peers IER][bootstrap-ier]).   This feature will be completed in Q3.
  [ouroboros-network#4530]

- We published a blog post about [P2P design & implementation][p2p-blog].

- Karl Knutsson (CF) fixed an issue observed on a relay with a lot of outbound connections:
  [ouroboros-network#4559].

- We merged changes which allow the consensus layer to start / stop block
  forging thread.  This will allow to deploy P2P block producing nodes which
  serve as a live backup node. [ouroboros-consensus#140]

- We fixed a few bugs in local root peers DNS resolution service:
  [ouroboros-network#4583], [ouroboros-network#4571].

- We limited concurrency of DNS name resolutions: [ouroboros-network#4596].

- Galois Inc implemented query option for Handshake: [ouroboros-network#4256].

- We fixed handshake query timeout: [ouroboros-network#4608].

- We implemented warm valency for local root peers.  This can help when using
  DNS names in local root peers which resolve to many IP addresses. [ouroboros-network#4575]

- We merged handshake changes which allow query protocol versions.  Thanks to
  James Parker from Galois Inc.: [ouroboros-network#4256], [cardano-cli#30].

### Other Improvements & Developments

#### CDDL

- We added `node-to-node` and `node-to-client` CDDL specs / tests for encoding
  of `NodeToNodeVersionData` and `NodeToClientVersionData`.  

- We clarified an inconsistency between CDDL spec and implementation which is
  highly polymorphic.  We designed and implemented a fix for `tx-submission`
  and `local-tx-submission` mini-protocols.  Specs for other mini-protocols will
  be improved at a later stage. [ouroboros-network#4580]

#### [Cardano Ping][cardano-ping]

- `cardano-ping` command was deprecated in favour of `cardano-cli ping` (the
  transition was done by the `node` team).

- Support for `node-to-client` protocol using Unix sockets.
  [ouroboros-network#4601]

- Support for `NodeToNodeV_11` and `NodeToClientV_16`, [ouroboros-network#4587]

- `cardano-cli ping` is now using _ISO8601_ format for timestamps.  Formatting of
  messages was improved. [ouroboros-network#4593]

- `cardano-cli ping` has a new `--query-versions` flag which allows to query
    supported versions by the remote node.  This is supported by
  `cardano-node-8.1.0`. [ouroboros-network#4589], [cardano-node#5313], [cardano-cli#30]

#### [IOSim][io-sim]

- We fixed timeouts & delays in `io-classes` in a series of PRs: [io-sim#81],
  [io-sim#82], [io-sim#86], [io-sim#87].

- We released `strict-stm-1.1.0.1` on Hackage which fixed a bug in package
  description file: [io-sim#101].

#### [Typed Protocols][typed-protocols]

- We published haddocks of `typed-protocols` at
  https://input-output-hk.github.io/typed-protocols

#### [Cardano Client][cardano-client]

- We fixed a bug in `cardano-client-0.1.0.2` release which results in clients
  (e.g. `db-sync`) negotiate an experimental protocol version.

#### Technical debt

- After the split between consensus & network, we made `cardano-client`
  independent of `ouroboros-consensus-diffusion`: [ouroboros-network#4526].

- We wrap all exceptions in `DiffusionError`: [ouroboros-network#4537], [cardano-node#5356].

#### CI improvements

- We switched to use GitHub merge queues in `ouroboros-network`, `io-sim` and
  `typed-protocols` repositories; [typed-protocols#30], [ouroboros-network#4546].

- We cleaned & updated scripts which run on CI.

- We implemented a script to verify & release packages on CHaP; [ouroboros-network#4542], [ouroboros-network#4573].

- We implemented a new CI script and cleaned existing ones:
  [ouroboros-network#4572].

- We don't install cryptographic libraries on CI anymore as none of our
  packages requires them; [ouroboros-network#4539].

- Improved caching of dependencies: [ouroboros-network#4553].

- We made it possible to trigger building haddock manually:
  [ouroboros-network#4549].

#### GHC 9.4 & 9.6

We made all repositories under our control compile with `ghc-9.4` and `ghc-9.6`
which includes `ouroboros-network`, `io-sim`, `typed-protocols` and
`Win32-network`.

### Next steps

We will continue towards our [aspirational roadmap][roadmap].

* We will continue reviewing eclipse evasion.
* As [ouroboros-consensus#140] was merged, we are making progress towards
  releasing P2P on block production nodes.  We hope to analyse performance
  regression on such nodes observed on the benchmarking cluster. [roadmap-3887]
* We are also focused on [roadmap-3969]. Note that it was expanded in Q2.


[typed-protocols]: https://github.com/input-output-hk/typed-protocols
[typed-protocols#30]: https://github.com/input-output-hk/typed-protocols/pull/30

[io-sim]: https://github.com/input-output-hk/io-sim
[io-sim#81]: https://github.com/input-output-hk/io-sim/pull/81
[io-sim#82]: https://github.com/input-output-hk/io-sim/pull/82
[io-sim#86]: https://github.com/input-output-hk/io-sim/pull/86
[io-sim#87]: https://github.com/input-output-hk/io-sim/pull/87
[io-sim#101]: https://github.com/input-output-hk/io-sim/pull/101


[cardano-node#5313]: https://github.com/input-output-hk/cardano-node/pull/5313
[cardano-node#5356]: https://github.com/input-output-hk/cardano-node/pull/5356
[cardano-cli#30]: https://github.com/input-output-hk/cardano-cli/pull/30/

[cardano-client]: https://github.com/input-output-hk/ouroboros-network/blob/master/cardano-client
[cardano-ping]: https://github.com/input-output-hk/ouroboros-network/blob/master/cardano-ping
[ouroboros-network#3596]: https://github.com/input-output-hk/ouroboros-network/issues/3596
[ouroboros-network#4256]: https://github.com/input-output-hk/ouroboros-network/pull/4256
[ouroboros-network#4256]: https://github.com/input-output-hk/ouroboros-network/pull/4256
[ouroboros-network#4526]: https://github.com/input-output-hk/ouroboros-network/pull/4526
[ouroboros-network#4530]: https://github.com/input-output-hk/ouroboros-network/issues/4530
[ouroboros-network#4537]: https://github.com/input-output-hk/ouroboros-network/issues/4537
[ouroboros-network#4539]: https://github.com/input-output-hk/ouroboros-network/issues/4539
[ouroboros-network#4540]: https://github.com/input-output-hk/ouroboros-network/issues/4540
[ouroboros-network#4542]: https://github.com/input-output-hk/ouroboros-network/issues/4542
[ouroboros-network#4546]: https://github.com/input-output-hk/ouroboros-network/pull/4546
[ouroboros-network#4549]: https://github.com/input-output-hk/ouroboros-network/issues/4549
[ouroboros-network#4553]: https://github.com/input-output-hk/ouroboros-network/issues/4553
[ouroboros-network#4559]: https://github.com/input-output-hk/ouroboros-network/pull/4559
[ouroboros-network#4571]: https://github.com/input-output-hk/ouroboros-network/pull/4571
[ouroboros-network#4572]: https://github.com/input-output-hk/ouroboros-network/pull/4572
[ouroboros-network#4573]: https://github.com/input-output-hk/ouroboros-network/pull/4573
[ouroboros-network#4575]: https://github.com/input-output-hk/ouroboros-network/pull/4575
[ouroboros-network#4580]: https://github.com/input-output-hk/ouroboros-network/pull/4580
[ouroboros-network#4583]: https://github.com/input-output-hk/ouroboros-network/pull/4583
[ouroboros-network#4587]: https://github.com/input-output-hk/ouroboros-network/pull/4587
[ouroboros-network#4589]: https://github.com/input-output-hk/ouroboros-network/pull/4589
[ouroboros-network#4593]: https://github.com/input-output-hk/ouroboros-network/pull/4593
[ouroboros-network#4596]: https://github.com/input-output-hk/ouroboros-network/pull/4596
[ouroboros-network#4601]: https://github.com/input-output-hk/ouroboros-network/pull/4601
[ouroboros-network#4608]: https://github.com/input-output-hk/ouroboros-network/pull/4608
[ouroboros-network#4662]: https://github.com/input-output-hk/ouroboros-network/pull/4662

[bootstrap-ier]: https://github.com/input-output-hk/ouroboros-consensus/blob/fbb8c8ee97517809dec0d0c8ae3fae9b8d272caf/docs/website/docs/bootstrap-peers-IER.md
[ouroboros-consensus#140]: https://github.com/input-output-hk/ouroboros-consensus/pull/140

[io-sim-blog]: https://engineering.iog.io/2023-04-14-io-sim-annoucement
[p2p-blog]: https://engineering.iog.io/2023-06-28-p2p

[roadmap]: https://github.com/orgs/input-output-hk/projects/39/views/30
[roadmap-3887]: https://github.com/orgs/input-output-hk/projects/39/views/30?pane=issue&itemId=6875505
[roadmap-3969]: https://github.com/orgs/input-output-hk/projects/39/views/30?pane=issue&itemId=8920085
