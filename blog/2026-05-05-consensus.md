---
title: Consensus Team Update
slug: 2026-05-05-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## High level summary

- Leios prototype development (Treasury Funding Initiative 4: Ouroboros Leios Implementation):
    - Completed the migration of endorser-block announcements and certification flags from the Ledger Block into the Praos Header, aligning the prototype with the original Leios design ([#1978](https://github.com/IntersectMBO/ouroboros-consensus/pull/1978), [ouroboros-leios#874](https://github.com/input-output-hk/ouroboros-leios/pull/874), [cardano-node#6537](https://github.com/IntersectMBO/cardano-node/pull/6537)).
    - Fixed several bugs in the Leios prototype ([#2017](https://github.com/IntersectMBO/ouroboros-consensus/pull/2017)).
    - Helped the SRE team stand up a Leios testnet that is now running the prototype ([ouroboros-leios#879](https://github.com/input-output-hk/ouroboros-leios/issues/879)).
    - Working on the voting prototype ([#1963](https://github.com/IntersectMBO/ouroboros-consensus/pull/1963)).
    - Continuing to investigate and fix in-memory LeiosDb performance issues observed during the March demo ([ouroboros-leios#844](https://github.com/input-output-hk/ouroboros-leios/issues/844), [cardano-node#6554](https://github.com/IntersectMBO/cardano-node/pull/6554)).
    - Working on applying Certified Endorser Blocks to the Mempool ([ouroboros-leios#838](https://github.com/input-output-hk/ouroboros-leios/issues/838)).
- Ledger-HD (Treasury Funding Initiative 11: Ledger-HD):
    - Refactored consensus type variables so that ledger tables, transaction inputs, and transaction outputs are indexed by the block type rather than the ledger-state shape, collapsing duplicate type-class instances and simplifying the codebase ahead of Ledger-HD integration ([#2016](https://github.com/IntersectMBO/ouroboros-consensus/pull/2016), [#2019](https://github.com/IntersectMBO/ouroboros-consensus/pull/2019)).
- Releases and integration (Treasury Funding Initiative 17: Maintenance and Support):
    - Released `cardano-node-11.0` ([cardano-node#6541](https://github.com/IntersectMBO/cardano-node/pull/6541)).
- Documentation (Treasury Funding Initiative 17: Maintenance and Support):
    - Added an explanation page covering the Ticking mechanism used by the consensus layer ([#2011](https://github.com/IntersectMBO/ouroboros-consensus/pull/2011)).
