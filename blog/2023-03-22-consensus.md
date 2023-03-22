---
title: Consensus Team Update
slug: 2023-03-22-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## High level summary

This week the consensus team continued working on the refactoring of the UTxO HD
prototype, and design and testing of Genesis. We also extracted the `fs-sim`
package, which provides a file-system abstraction layer that can be used for
testing and simulation. This makes the Consensus code base smaller, while
providing a package that the community can reuse and contribute to. We also
fixed a failing property test related to iterators. We are also working on
mempool and VRF improvements.


## Low-level details

- Extraction of `fs-sim` code from `ouroboros-network`:
    - https://github.com/input-output-hk/ouroboros-network/pull/4425
    - https://github.com/input-output-hk/fs-sim/pull/1
    - https://github.com/input-output-hk/fs-sim/pull/2
    - https://github.com/input-output-hk/ouroboros-network/pull/4460
- Smaller changes in `fs-sim` code (some required by `UTxO-HD`):
    - https://github.com/input-output-hk/fs-sim/pull/5
    - https://github.com/input-output-hk/fs-sim/pull/6
    - https://github.com/input-output-hk/fs-sim/pull/7
    - https://github.com/input-output-hk/fs-sim/pull/8
- Released cardano-lmdb-simple-0.6.0.0
    - https://github.com/input-output-hk/lmdb-simple/pull/20
    - https://github.com/input-output-hk/cardano-haskell-packages/pull/150
    
