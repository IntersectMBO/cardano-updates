---
title: Consensus Team Update
slug: 2026-08-25-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## High level summary

- Leios prototype development (Treasury Funding Initiative 4: Ouroboros Leios Implementation):
    - Closed an attack on the way nodes announce Endorser Blocks. The attack made honest nodes disconnect from each other ([#2179](https://github.com/IntersectMBO/ouroboros-consensus/pull/2179), for [ouroboros-leios#1029](https://github.com/input-output-hk/ouroboros-leios/issues/1029)).
    - `db-analyser` now reads Leios chains. The tool replays a chain and reports the cost to apply each block. The reports now cover the transactions of each certified Endorser Block, their total size, and the time to read them ([#2181](https://github.com/IntersectMBO/ouroboros-consensus/pull/2181), for [ouroboros-leios#1023](https://github.com/input-output-hk/ouroboros-leios/issues/1023)).
- Maintenance and support (Treasury Funding Initiative 17: Maintenance and Support):
    - Forward-ported the new snapshot interval and the mempool allocation fix from the 4.x release line to the `main` development branch. The 2026-08-11 update describes both changes ([#2209](https://github.com/IntersectMBO/ouroboros-consensus/pull/2209), [#2215](https://github.com/IntersectMBO/ouroboros-consensus/pull/2215)).
