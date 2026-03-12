---
title: Consensus Team Update
slug: 2026-03-11-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## High level summary

- Continued Leios prototype development (Treasury Funding Initiative 4: Ouroboros Leios Implementation):
    - Implemented a `run-threadnet` CLI that allows configuring, running, and observing simulated Cardano networks ([#1883](https://github.com/IntersectMBO/ouroboros-consensus/pull/1883)).
      This tool enables the team to quickly test multi-node setups locally, significantly speeding up the investigation of implementation issues.
    - Drafted a baseline design for the Leios fetch logic with bounded memory usage ([ouroboros-leios#797](https://github.com/input-output-hk/ouroboros-leios/pull/797), [ouroboros-leios#811](https://github.com/input-output-hk/ouroboros-leios/issues/811)).
      The design addresses the challenge of efficiently fetching and managing large volumes of data in Leios while keeping resource usage within practical limits.
      Work continues in March with an exploration of alternative storage strategies to further improve performance.
- Peras development:
    - Added state-machine tests for the Peras vote database, strengthening the guarantees around the correctness of the voting mechanism ([#1809](https://github.com/IntersectMBO/ouroboros-consensus/pull/1809)).
- Node improvements (Treasury Funding Initiative 17: Maintenance and Support):
    - Updated the Node-to-Client protocol to version 23, unlocking new queries for wallets and other tools that interact with the node ([#1860](https://github.com/IntersectMBO/ouroboros-consensus/pull/1860)).
    - Made it easier for developers to target the current era when querying the node ([#1919](https://github.com/IntersectMBO/ouroboros-consensus/pull/1919)).
    - Improved observability of chain selection by exposing the reasons behind chain switches ([#1898](https://github.com/IntersectMBO/ouroboros-consensus/pull/1898)).
    - Integrated a ledger fix for a bug in the Plutus script context ([#1914](https://github.com/IntersectMBO/ouroboros-consensus/pull/1914)).
- Repository and tooling (Treasury Funding Initiative 17: Maintenance and Support):
    - Unified all consensus packages into a single package, simplifying the dependency landscape for downstream projects ([#1895](https://github.com/IntersectMBO/ouroboros-consensus/pull/1895), [#1912](https://github.com/IntersectMBO/ouroboros-consensus/pull/1912)).
    - Enhanced the snapshot converter tool with a daemon mode that watches for new ledger snapshots and automatically converts them, useful for node operators managing different storage backends ([#1887](https://github.com/IntersectMBO/ouroboros-consensus/pull/1887)).
    - Added developer documentation for inspecting a node's chain ([#1913](https://github.com/IntersectMBO/ouroboros-consensus/pull/1913)).
- Testing and quality (Treasury Funding Initiative 17: Maintenance and Support):
    - Generalized Genesis tests to support any block type, paving the way for conformance testing with real Cardano blocks ([#1879](https://github.com/IntersectMBO/ouroboros-consensus/pull/1879)).
    - Added support for GHC 9.14 ([#1902](https://github.com/IntersectMBO/ouroboros-consensus/pull/1902)).
    - Internal cleanup of chain selection and ledger database code ([#1880](https://github.com/IntersectMBO/ouroboros-consensus/pull/1880)).
