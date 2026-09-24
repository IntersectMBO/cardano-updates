---
title: Consensus Team Update
slug: 2026-09-22-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## High level summary

- Leios prototype development (Treasury Funding Initiative 4: Ouroboros Leios Implementation):
    - Split the Leios database into two files, one for data a node can still roll back, and one for data that is settled. A certified Endorser Block moves from the first file to the second in the background. An operator can put the two files on different disks, and give the busier file the faster disk. The same change adds garbage collection in small steps: one thread marks the rows a node no longer needs, and a second thread deletes them in paced batches, so the deletion does not hold up the rest of the node ([#2261](https://github.com/IntersectMBO/ouroboros-consensus/pull/2261), for [ouroboros-leios#969](https://github.com/input-output-hk/ouroboros-leios/issues/969)).
    - Adapted the prototype node to the two file layout, and published the size of each part as a node metric ([cardano-node#6656](https://github.com/IntersectMBO/cardano-node/pull/6656)). Added a dashboard that shows how many Endorser Blocks and transactions sit in each part, and updated the devnet configuration to match ([ouroboros-leios#1054](https://github.com/input-output-hk/ouroboros-leios/pull/1054)).
    - `db-synthesizer` now builds a Leios chain instead of a chain of empty blocks. It fills each block with transactions, puts what does not fit into an Endorser Block, and votes on each announced Endorser Block so that a later block can certify it. It also stores each Endorser Block it forges, which an earlier version dropped. The other database tools now have a Leios chain to work on ([#2241](https://github.com/IntersectMBO/ouroboros-consensus/pull/2241), [#2283](https://github.com/IntersectMBO/ouroboros-consensus/pull/2283)).
    - `db-truncater` now handles a Leios chain. After it cuts the chain back to a chosen slot, it cuts the Leios database back to the same slot, drops the transactions that no Endorser Block refers to, and shrinks the file ([#2262](https://github.com/IntersectMBO/ouroboros-consensus/pull/2262), for [ouroboros-leios#1023](https://github.com/input-output-hk/ouroboros-leios/issues/1023)).
    - Moved block forging out of the node kernel into a module of its own, and split it into named steps. The behaviour does not change. The new shape makes the forging path easier to follow, easier to instrument, and easier to reuse from the database tools ([#2281](https://github.com/IntersectMBO/ouroboros-consensus/pull/2281)).
- Maintenance and support (Treasury Funding Initiative 17: Maintenance and Support):
    - Dropped support for node-to-client protocol versions below v23. Version 23 shipped with node 10.7.0 in March 2026, and every client we checked already offers it. The older versions kept legacy code alive in the consensus layer ([#2265](https://github.com/IntersectMBO/ouroboros-consensus/pull/2265)).
