---
title: Node API & CLI Team Update
slug: 2024-02-15-node-cli-api
authors: carlos
tags: [cli-api]
hide_table_of_contents: false
---

# Node-Api-Cli Update
# 2024-02-01 - 2024-02-15

## High level summary

- cardano-cli: Added the 'immutable' tip parameter to conway queries that allow the user to query either the current volatile tip (default) or the immutable tip. The committee keys can now sign transactions, required to submit votes.  

- cardano-api: Fix Conway PlutusV3 script hash mismatch. Make committee hash prefixes CIP-5 compliant. 

### cardano-cli

- [Release 8.20.1.0](https://github.com/IntersectMBO/cardano-cli/pull/608)
- [Upgrade cardano-api to 8.38.0.2](https://github.com/IntersectMBO/cardano-cli/pull/607)
- [Fix error messages as CLI format is no longer supported](https://github.com/IntersectMBO/cardano-cli/pull/605)
- [Add immutable tip parameter to conway queries](https://github.com/IntersectMBO/cardano-cli/pull/603)
- [Update 8.20.0.0 changelog](https://github.com/IntersectMBO/cardano-cli/pull/600)
- [Fix create-testnet-data creating negative supply](https://github.com/IntersectMBO/cardano-cli/pull/599)
- [Release 8.20.0.0](https://github.com/IntersectMBO/cardano-cli/pull/597)
- [Make committee keys able to sign transactions](https://github.com/IntersectMBO/cardano-cli/pull/596)
- [Cl/testnetdata](https://github.com/IntersectMBO/cardano-cli/pull/595)
- [Make it build with ghc-9.8](https://github.com/IntersectMBO/cardano-cli/pull/594)

### cardano-api

- [Fix Conway script hash mismatch](https://github.com/IntersectMBO/cardano-api/pull/452)
- [Release 8.38.0.2](https://github.com/IntersectMBO/cardano-api/pull/451)
- [Release 8.38.0.1](https://github.com/IntersectMBO/cardano-api/pull/446)
- [Fix removal of toScriptIndex export](https://github.com/IntersectMBO/cardano-api/pull/445)
- [Fix haddock in checkLedgerState](https://github.com/IntersectMBO/cardano-api/pull/443)
- [Release 8.38.0.0](https://github.com/IntersectMBO/cardano-api/pull/442)
- [Make committee keys able to sign transactions](https://github.com/IntersectMBO/cardano-api/pull/441)
- [Make committee hash prefixes CIP-5 compliant](https://github.com/IntersectMBO/cardano-api/pull/440)

### cardano-testnet

- [cardano-testnet: read JSON from the CLI more easily](https://github.com/IntersectMBO/cardano-node/pull/5664)
- [Use environment variable for network magic instead of CLI arg in testnet tests](https://github.com/IntersectMBO/cardano-node/pull/5658)

### docs

### CI & project maintenance

- [Fix git revision reported by --version on nix build](https://github.com/IntersectMBO/cardano-cli/pull/610)