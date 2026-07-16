---
title: Consensus Team Update
slug: 2026-07-14-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## High level summary

- Leios prototype and design (Treasury Funding Initiative 4: Ouroboros Leios Implementation):
    - Continued to harden the Leios testnet with a round of prototype fixes across consensus and the node ([#2113](https://github.com/IntersectMBO/ouroboros-consensus/pull/2113), [#6614](https://github.com/IntersectMBO/cardano-node/pull/6614)), and cut two prototype releases carrying this work, `prototype-2026w27a` ([#978](https://github.com/input-output-hk/ouroboros-leios/pull/978)) and `prototype-2026w28` ([#986](https://github.com/input-output-hk/ouroboros-leios/pull/986)).
    - Fixed two bugs found while running the testnet. The node no longer applies uncertified endorser blocks from the immutable database on startup, and the LeiosNotify pipelining depth was increased ([#2114](https://github.com/IntersectMBO/ouroboros-consensus/pull/2114)). A startup crash caused by a race condition on a node's first run was also resolved ([#2115](https://github.com/IntersectMBO/ouroboros-consensus/pull/2115), fixing [ouroboros-leios#983](https://github.com/input-output-hk/ouroboros-leios/issues/983)).
    - Added a voting dashboard to make Leios easier to observe, showing how endorser blocks are voted on and certified ([ouroboros-leios#985](https://github.com/input-output-hk/ouroboros-leios/pull/985)).
    - Reviewed a change to how the node certifies and applies endorser blocks that is expected to roughly double the certification rate and raise throughput ([#2105](https://github.com/IntersectMBO/ouroboros-consensus/pull/2105)).
    - Drafted prose for the Leios high-level design document, describing how the pieces of the protocol fit together ([commit 13e3908](https://github.com/input-output-hk/ouroboros-leios/commit/13e3908ab13fd79b44c2e048b8ccb8c59536289a)), and started negotiating the interface between Consensus and Ledger for Leios with the Ledger team ([ouroboros-leios#977](https://github.com/input-output-hk/ouroboros-leios/pull/977)).
- Node diversity and conformance (Treasury Funding Initiative 17: Maintenance and Support):
    - Took part in node diversity meetings on conformance testing with the Amaru team and others, including working through a conformance hurdle specific to the `preview` network.
    - Discussed how to specify the mempool and transaction submission precisely enough that other node implementations can follow the same rules.
- UTXO-HD snapshot tooling (Treasury Funding Initiative 10: LSM including UTXO-HD):
    - Improved the `snapshot-converter` tool's `--help` and `--version` output, making it clearer how to convert ledger snapshots between the in-memory and on-disk (LSM) formats ([#2098](https://github.com/IntersectMBO/ouroboros-consensus/pull/2098)).
    - Added a temporary workaround so `snapshot-converter` reads the bloom-filter salt directly from exported files, until a proper fix lands on the LSM-trees side ([#2097](https://github.com/IntersectMBO/ouroboros-consensus/pull/2097), pending [lsm-tree#855](https://github.com/IntersectMBO/lsm-tree/pull/855)).
- Documentation (Treasury Funding Initiative 17: Maintenance and Support):
    - Added a reference document describing the metrics and tracing available for observing Ouroboros Genesis ([#2103](https://github.com/IntersectMBO/ouroboros-consensus/pull/2103)).
