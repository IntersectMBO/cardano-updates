---
title: Consensus Team Update
slug: 2026-06-02-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## High level summary

The Leios monthly demo and review took place on 2026-05-27.
Several of the items below were presented or discussed during that meeting.

- Leios prototype development (Treasury Funding Initiative 4: Ouroboros Leios Implementation):
    - Started migrating the prototype to the Dijkstra era of the Cardano node, which enables Stake Pool Operator key registration and brings the prototype in line with the audited BLS cryptography.
    - Working on in-memory LeiosDb improvements ([#2032](https://github.com/IntersectMBO/ouroboros-consensus/pull/2032), [cardano-node#6554](https://github.com/IntersectMBO/cardano-node/pull/6554)).
    - Working on EB application and mempool partitioning ([#2047](https://github.com/IntersectMBO/ouroboros-consensus/pull/2047)).
    - Working on wiring the mempool transaction-load events into the throughput dashboard ([ouroboros-leios#929](https://github.com/input-output-hk/ouroboros-leios/pull/929)).
- Late-joining nodes in Leios (Treasury Funding Initiative 4: Ouroboros Leios Implementation):
    - A node that joins or rejoins the network late currently fails to request the Endorser Block content it needs to catch up. The fix filters candidate chains by the EB content the node already has, replacing the earlier "staging area" design. A live demo at the monthly review showed a late-joining node catching up using this approach. Working on the fix across consensus and node ([#2040](https://github.com/IntersectMBO/ouroboros-consensus/pull/2040), [#2048](https://github.com/IntersectMBO/ouroboros-consensus/pull/2048), [#2057](https://github.com/IntersectMBO/ouroboros-consensus/pull/2057), [cardano-node#6587](https://github.com/IntersectMBO/cardano-node/pull/6587)). The design document will be updated to reflect the new approach.
- Leios fetch and network design (Treasury Funding Initiative 4: Ouroboros Leios Implementation):
    - Continued investigating multi-peer Endorser Block fetch strategies. The current proposal is a single large request to a high-latency peer (for example Europe to Australia), capped at roughly 30 MB in flight per EB, with neighbourhood diffusion taking over once the data arrives. Simulation results show this approach meets the 7 to 14 second budget. Slow-loris impact is still being assessed.
    - Refined the safety argument for linear Leios and flagged that the Rust simulator currently assumes peer reliability, which is not a safe assumption on mainnet.
    - Proposed EB precursors (proto-EBs) as a way to raise confidence without raising the voting time threshold.
    - Concluded that erasure coding is unlikely to pay off at this stage, given the estimated 60 ms latency cost and added complexity.
    - Working on the Mininet LeiosFetch logic test bed and the linear Leios tuner ([ouroboros-leios#880](https://github.com/input-output-hk/ouroboros-leios/pull/880), [ouroboros-leios#891](https://github.com/input-output-hk/ouroboros-leios/pull/891)).
    - Committee selection scheme change was merged into the Leios SIP, cutting the certificate size from around 8 KB to 200 B.
- Mempool design for Leios (Treasury Funding Initiative 4: Ouroboros Leios Implementation):
    - Started a discussion on mempool goals for the Leios protocol. Revalidating entire transaction sequences against multiple ledger states is wasteful, and certifying an Endorser Block produces a new ledger state that can render the basic mempool state irrelevant. Designs under consideration include two distinct mempools and a Directed Acyclic Graph for the ledger.
- LSM-trees and UTxO-HD (Treasury Funding Initiative 10: LSM including UTXO-HD):
    - Updated the LSM-trees package dependencies ([#2021](https://github.com/IntersectMBO/ouroboros-consensus/pull/2021)).
    - Working on the UTxO-HD redesign ([#2049](https://github.com/IntersectMBO/ouroboros-consensus/pull/2049)).
    - Working on adding LSM snapshot export when an export path is configured ([#2053](https://github.com/IntersectMBO/ouroboros-consensus/pull/2053)).
- Ledger-HD (Treasury Funding Initiative 11: Ledger-HD):
    - Working on an example PR that moves InstantStake onto the redesigned UTxO-HD, demonstrating the pattern that the remaining Ledger-HD datasets will follow ([#2055](https://github.com/IntersectMBO/ouroboros-consensus/pull/2055)).
- Maintenance and tooling (Treasury Funding Initiative 17: Maintenance and Support):
    - Working on predictable ledger state snapshots in cardano-node ([cardano-node#6526](https://github.com/IntersectMBO/cardano-node/pull/6526)).
    - Working on enabling search on the consensus documentation site ([#2059](https://github.com/IntersectMBO/ouroboros-consensus/pull/2059)).
