---
title: Node API & CLI Team Update
slug: 2024-06-05-node-cli-api
authors: carlos
tags: [cli-api]
hide_table_of_contents: false
---

# Node-Api-Cli Update
# 2024-05-13 - 2024-06-05

## High level summary

CARDANO NODE
- In order to avoid an accidental hardfork, when "ConwayGenesisFile" is not set in the node configuration file, by default the node can only understand protocol version 8 (Babbage era).

CARDANO CLI 
- `query protocol-parameters` now shows Conway era protocol parameters when in Conway. 
- `transaction view` now shows proposales and votes inside a transaction body. 
- Release of cardano-cli 8.23.1.0 
- We now publish pre-compiled binaries of each release together with the corresponding SHA256Sum. 

CARDANO-API 
- Release of 8.46.0.0

## Details
### cardano-cli

- [New `debug log-epoch-state` command](https://github.com/IntersectMBO/cardano-cli/pull/775)
- [transaction view: show proposals and votes](https://github.com/IntersectMBO/cardano-cli/pull/774)
- [Make `--fee` mandatory in `transaction build-raw`](https://github.com/IntersectMBO/cardano-cli/pull/768)
- [Release 8.23.1.0 (for node-8.11.0)](https://github.com/IntersectMBO/cardano-cli/pull/761)
- [query protocol-parameters: use ledger JSON encoding, not API one](https://github.com/IntersectMBO/cardano-cli/pull/758)

### cardano-api

- [Release `cardano-api-8.46.0.0`](https://github.com/IntersectMBO/cardano-api/pull/535)
    - Updated cardano-ledger, ouroboros-consensus and plutus packages.
    - Added FailT dependency.
    - Updated conwayGenesisDefaults and alonzoGenesisDefaults.
    - Changed CostModel to use Int64 instead of Integer.
    - Fixed ProtocolParameters golden test to account for the Integer -> Int64 change in the CostModel. (breaking, test) PR 523

### cardano-node

- [Enforce protocol version 8 if  "ConwayGenesisFile" is not set in node configuration](https://github.com/IntersectMBO/cardano-node/pull/5858)

### cardano-testnet

- [Add tallying of votes to the "Motion of no confidence" test](https://github.com/IntersectMBO/cardano-node/pull/5870)
- [Simplify epoch state diff logging](https://github.com/IntersectMBO/cardano-node/pull/5863)
- [Fix GHC 9.8 build](https://github.com/IntersectMBO/cardano-node/pull/5862)
- [Use TestWatchdog from hedgehog-extras.](https://github.com/IntersectMBO/cardano-node/pull/5857)
- [Improve `NewEpochState` logging](https://github.com/IntersectMBO/cardano-node/pull/5854)
- [hlint: fix cardano-testnet-test](https://github.com/IntersectMBO/cardano-node/pull/5845)
- [Use waiting for blocks instead epochs, when waiting for new UTXOs](https://github.com/IntersectMBO/cardano-node/pull/5843)
- [Refactor: Reorganize testnet CLI functions](https://github.com/IntersectMBO/cardano-node/pull/5840)

