---
title: Consensus Team Update
slug: 2026-08-11-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## High level summary

- Leios prototype and testnet (Treasury Funding Initiative 4: Ouroboros Leios Implementation):
    - Added endorser-block announcements to the node. The node now generates them and sends them to its peers. An announcement tells a peer that an endorser block exists, before the block itself arrives. The other Leios components do not use the announcements yet. This change is the first step ([#2132](https://github.com/IntersectMBO/ouroboros-consensus/pull/2132), for [ouroboros-leios#772](https://github.com/input-output-hk/ouroboros-leios/issues/772)).
    - Added announcements to the proto-devnet demo, with a new graph of the announcement age on arrival. The demo can now run a line topology. In that topology the first and third nodes have no direct link. This makes the announcement behaviour easier to watch ([#1002](https://github.com/input-output-hk/ouroboros-leios/pull/1002)).
    - Made the node reject malformed Dijkstra blocks. A block body must not carry both a Leios certificate and transactions. The header flag must also agree with the body content ([#2178](https://github.com/IntersectMBO/ouroboros-consensus/pull/2178), for [ouroboros-leios#932](https://github.com/input-output-hk/ouroboros-leios/issues/932)).
    - Released a new prototype, `prototype-2026w32` ([#6636](https://github.com/IntersectMBO/cardano-node/pull/6636)).
    - Fixed the testnet visualizer. It lost events and reported send and receive counts that did not match. It now reads the log store with range queries instead of a live stream ([#1000](https://github.com/input-output-hk/ouroboros-leios/pull/1000)).
    - Corrected the units on the throughput dashboard. The certification graph now covers every node, not only the first ([#1001](https://github.com/input-output-hk/ouroboros-leios/pull/1001)).
- Node performance (Treasury Funding Initiative 17: Maintenance and Support):
    - Removed the allocations from the comparison of transaction identifiers. The old code rebuilt a 32-byte hash on each comparison. The mempool and local queries use that code path heavily. Comparisons now run about five times faster and allocate nothing ([#2125](https://github.com/IntersectMBO/ouroboros-consensus/pull/2125), for [#2003](https://github.com/IntersectMBO/ouroboros-consensus/issues/2003)).
    - Cut the allocations in the mempool snapshot code ([#2195](https://github.com/IntersectMBO/ouroboros-consensus/pull/2195)).
    - Simplified how the mempool moves a transaction into a newer era. The mempool now decodes the transaction straight into the target era. It no longer steps through each era in between ([#2134](https://github.com/IntersectMBO/ouroboros-consensus/pull/2134)).
- Releases and the next hard fork (Treasury Funding Initiative 17: Maintenance and Support):
    - Released `ouroboros-consensus` 4.0.0.0 and 4.1 ([#2161](https://github.com/IntersectMBO/ouroboros-consensus/pull/2161), [#2189](https://github.com/IntersectMBO/ouroboros-consensus/pull/2189)).
    - Allowed the node to hard fork into Dijkstra, the next Cardano era ([#2167](https://github.com/IntersectMBO/ouroboros-consensus/pull/2167)).
- Storage and snapshots (Treasury Funding Initiative 10: LSM including UTXO-HD):
    - Changed the default snapshot policy. The node now takes a snapshot every 40*k slots, with no offset. On mainnet that is one snapshot a day. One snapshot in five lands on an epoch boundary. This keeps the node aligned with Mithril ([#2194](https://github.com/IntersectMBO/ouroboros-consensus/pull/2194)).
- Documentation and tooling (Treasury Funding Initiative 17: Maintenance and Support):
    - Wrote a new page on hard forks and node-to-node versioning. A hard fork does not need a new node-to-node protocol version. Each block carries its own era tag. The protocol version holds back an era that is not yet active, not the wire format ([#2117](https://github.com/IntersectMBO/ouroboros-consensus/pull/2117)).
    - Corrected the `db-analyser` timing documentation and added two columns to its CSV output. A script that reads the CSV by column position needs an update ([#2186](https://github.com/IntersectMBO/ouroboros-consensus/pull/2186)).
