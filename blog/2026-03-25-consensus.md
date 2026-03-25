---
title: Consensus Team Update
slug: 2026-03-25-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## High level summary

- Peras protocol development (Treasury Funding Initiative 17: Maintenance and Support):
    - Reviewed and merged the implementation of a model of the committee selection scheme, which defines how voters are chosen for Peras's fast-finality voting rounds ([#1839](https://github.com/IntersectMBO/ouroboros-consensus/pull/1839)).
    - Reviewed and merged the implementation of the node tracking Peras certificate progress on-chain, needed for the protocol's chain-selection rule ([#1864](https://github.com/IntersectMBO/ouroboros-consensus/pull/1864)).
- Node improvements (Treasury Funding Initiative 17: Maintenance and Support):
    - Released `ouroboros-consensus-1.0.0.0` ([#1926](https://github.com/IntersectMBO/ouroboros-consensus/pull/1926)).
    - Reworked internal resource management for ledger state access, improving node robustness ([#1910](https://github.com/IntersectMBO/ouroboros-consensus/pull/1910)).
    - Fixed a bug in the immutable DB's chunk enumeration logic which only affected test coverage ([#1923](https://github.com/IntersectMBO/ouroboros-consensus/pull/1923)).
    - Integrated the Networking team's `ouroboros-network` 1.0 release ([#1918](https://github.com/IntersectMBO/ouroboros-consensus/pull/1918), [#1927](https://github.com/IntersectMBO/ouroboros-consensus/pull/1927), [#1929](https://github.com/IntersectMBO/ouroboros-consensus/pull/1929)).
