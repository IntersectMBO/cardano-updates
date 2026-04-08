---
title: Consensus Team Update
slug: 2026-04-07-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## High level summary

- Ouroboros Leios (Treasury Funding Initiative 4: Ouroboros Leios Implementation):
    - Implemented Leios Endorser Block (EB) inclusion in the consensus layer, adding EB announcement and certification tracking to blocks, along with a SQLite-based backend for querying EBs and certificates ([#1921](https://github.com/IntersectMBO/ouroboros-consensus/pull/1921)).
- UTXO-HD (Treasury Funding Initiative 10: LSM including UTXO-HD):
    - Refactored database initialization by modifying `mkOpenState` in the ImmutableDB and VolatileDB ([#1917](https://github.com/IntersectMBO/ouroboros-consensus/pull/1917)).
    - Improved performance by caching transaction differences on first execution, addressing a hotspot observed during transaction revalidation on stressed nodes ([#1954](https://github.com/IntersectMBO/ouroboros-consensus/pull/1954)).
- Releases and integration (Treasury Funding Initiative 17: Maintenance and Support):
    - Released `ouroboros-consensus-2.0.0.0` ([#1947](https://github.com/IntersectMBO/ouroboros-consensus/pull/1947)) and `ouroboros-consensus-3.0.0.0` ([#1964](https://github.com/IntersectMBO/ouroboros-consensus/pull/1964)).
    - Integrated `ouroboros-network-1.1.*` ([#1943](https://github.com/IntersectMBO/ouroboros-consensus/pull/1943)).
    - Integrated the latest consensus packages into `cardano-node` for the upcoming Node 10.7 release ([cardano-node#6402](https://github.com/IntersectMBO/cardano-node/pull/6402)).
- Testing and documentation (Treasury Funding Initiative 17: Maintenance and Support):
    - Fixed a flaky ChainDB StateMachine test related to iterators ([#1948](https://github.com/IntersectMBO/ouroboros-consensus/pull/1948)).
    - Replaced the consensus documentation's Introduction page with a comprehensive System Overview, including a C4 Context diagram and clarifications on code organization and era evolution ([#1950](https://github.com/IntersectMBO/ouroboros-consensus/pull/1950)).
