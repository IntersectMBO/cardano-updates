---
title: Consensus Team Update
slug: 2023-09-06-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## High level summary

We were able to successfully run the system-level benchmarks for the UTxO-HD implementation, for the first time. There was an important regression in block forging performance that will have to be addressed before UTxO-HD is released. We also revisited the implementation of our query processing logic, which was needed to address the performance regression found in the query-by-address command. The preliminary performance results show that now the performance of this query is on-par with the Cardano baseline version, but we need further confirmation.
On the Genesis front, we presented the grinding-aware safety argument for the proposed historical Cardano Genesis windows to the IOG Researchers.
The Consensus release engineer finished his rotation: version `8.3.0-pre` of `cardano-node` is releasing 2023 September 5.

## UTxO-HD

- We ran the first successful system-level benchmarks for UTxO-HD (see [#203](https://github.com/input-output-hk/ouroboros-consensus/issues/203)) using the *in-memory* backend.
    - We observed a factor 12 regression in the forging performance, which we will have to address. There are strong indications that the regression is due to the backing store accesses that take place when taking a mempool snapshot.
    - After the mempool regression is fixed the benchmarks need to be ran again.
    - System-level UTxO-HD benchmarks with the LMDB are still pending.
- UTxO-HD will eventually be necessary due to the growth of the UTxO set and other ledger state structures that live in memory at the moment. However, we are trying a strategy by which we could preserve the baseline performance of the node, in case SPOs and other node users are not ready to migrate yet (see [#344](https://github.com/input-output-hk/ouroboros-consensus/issues/344)).
- We implemented a new way of processing queries at the hard-fork block level, which resolves the performance regression observed in `GetUTxOByAddress` (see [this comment](https://github.com/input-output-hk/ouroboros-consensus/issues/205#issuecomment-1706878418)). Preliminary results are promising.
- Regarding the roll out plan, UTxO-HD requires a significant change in the Consensus codebase. Even though we might be able to hide any potential performance impact in the node by keeping all data in memory ([#344](https://github.com/input-output-hk/ouroboros-consensus/issues/344)), the Consensus component was significantly changed, so we might have to postpone releasing this feature to mitigate any risks of conflicting with the implementation of CIP-1694 and release of Conway.

## Tech debt

- We added tests that Consensus emits valid CBOR ([#3099](https://github.com/input-output-hk/ouroboros-network/issues/3099)). This helped us detect a couple of serialization bugs. The tests still need to be merged into the `main` branch ([#323](https://github.com/input-output-hk/ouroboros-consensus/pull/323)).

## Support

- [Nick Frisby](https://github.com/nfrisby) finished his release engineer rotation; `cardano-node 8.3.0-pre` is releasing 2023 September 5.
- We helped to investigate a protocol version bug in Sanchonet (see [#3491](https://github.com/input-output-hk/cardano-ledger/issues/3491)).
- We started to implement the Network interface for bootstrap peer functionality, from which Genesis will benefit as well (see [#91](https://github.com/input-output-hk/ouroboros-consensus/issues/91).
