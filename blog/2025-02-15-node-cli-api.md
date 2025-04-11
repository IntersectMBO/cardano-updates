---
title: Node API & CLI Team Update
slug: 2025-02-15-node-cli-api
authors: Jimbo4350
tags: [cli-api]
hide_table_of_contents: false
---

# Node-Api-Cli Update
# 2025-01-30T00:00:00Z - 2025-02-15T00:00:00Z

## High level summary
- **cardano-cli updates**
  - Added binary output option for `query utxo` command
  - Implemented governance action deposits in `query stake-address-info`
  - Added ratify-state and future protocol parameters queries
  - Fixed transaction costs calculation for duplicate certificates
  - Released v10.4.0.0
  - Removed remaining `ScriptWitnessFiles` usage across scripts
  - Reorganized hash/ping commands and test suites
  - Updated CHaP index and Nix configurations

- **cardano-api improvements**
  - Added UTxO module
  - Implemented future protocol parameters query
  - Fixed transaction autobalancing for credential deregistration
  - Merged internal API modules and reorganized exports
  - Released versions 10.8.0.0 and 10.9.0.0
  - Removed deprecated functions and improved TxProposalProcedures type safety

- **cardano-node/testnet updates**
  - Enhanced testnet configuration handling:
    - Added output directory specification
    - Improved configuration validation
    - Supported user-provided config files
    - Removed redundant process functions

- **Tooling & Maintenance**
  - Upgraded to fourmolu-0.18.0 in Nix dev shells
  - Updated Nix development tools and GHA workflows

### cardano-cli
- [ Remove use of ScriptWitnessFiles in proposal scripts](https://github.com/IntersectMBO/cardano-cli/pull/1047)
- [Add binary output option for query utxo command](https://github.com/IntersectMBO/cardano-cli/pull/1000)
- [Add governance action deposits to the output of `query stake-address-info](https://github.com/IntersectMBO/cardano-cli/pull/1032)
- [Add the ratify-state query](https://github.com/IntersectMBO/cardano-cli/pull/1036)
- [Cl/query future pparams](https://github.com/IntersectMBO/cardano-cli/pull/1038)
- [Fix costs calculation for transaction with more than one certificates with the same stake credential and script witness](https://github.com/IntersectMBO/cardano-cli/pull/1028)
- [Fix haddocks for StakeAddressInfoData ](https://github.com/IntersectMBO/cardano-cli/pull/1060)
- [Organise hash and ping commands](https://github.com/IntersectMBO/cardano-cli/pull/1048)
- [release cardano-cli-10.4.0.0](https://github.com/IntersectMBO/cardano-cli/pull/1063)
- [Remove cross reference of files between test suites.](https://github.com/IntersectMBO/cardano-cli/pull/1055)
- [Remove semaphores and disable parallel test execution for GHA](https://github.com/IntersectMBO/cardano-cli/pull/1062)
- [Remove use of script witness files in voting scripts](https://github.com/IntersectMBO/cardano-cli/pull/1027)
- [Remove use of script witness files in withdrawal scripts](https://github.com/IntersectMBO/cardano-cli/pull/1056)
- [Update CHaP index state and flake input](https://github.com/IntersectMBO/cardano-cli/pull/1064)

### cardano-api
- [Add function `collectPlutusScriptHashes` to collect script hashes needed to validate a given transaction](https://github.com/IntersectMBO/cardano-api/pull/735)
- [Add module for UTxO type and operations](https://github.com/IntersectMBO/cardano-api/pull/710)
- [add query future pparams](https://github.com/IntersectMBO/cardano-api/pull/739)
- [Fix transaction autobalancing when deregistering credential](https://github.com/IntersectMBO/cardano-api/pull/718)
- [Merge `cardano-api:internal` with `cardano-api` main library under `Cardano.Api.Internal.*` and export required symbols](https://github.com/IntersectMBO/cardano-api/pull/748)
- [Re-export DebugPlutusFailure and renderDebugPlutusFailure](https://github.com/IntersectMBO/cardano-api/pull/715)
- [Relax ouroboros-consensus-diffusion bounds to ^>=0.19 || ^>=0.20](https://github.com/IntersectMBO/cardano-api/pull/751)
- [release cardano-api-10.8.0.0](https://github.com/IntersectMBO/cardano-api/pull/745)
- [Release cardano-api-10.9.0.0](https://github.com/IntersectMBO/cardano-api/pull/753)
- [Remove deprecated functions and update types and update `writeTxFileTextEnvelopeCddl` to use new format](https://github.com/IntersectMBO/cardano-api/pull/746)
- [Update TxProposalProcedures type to make invalid states irrepresentable](https://github.com/IntersectMBO/cardano-api/pull/726)

### cardano-node
- [cardano-tesnet: allow to specify output directory](https://github.com/IntersectMBO/cardano-node/pull/6095)
- [cardano-testnet | Remove redundant functions used for starting a process](https://github.com/IntersectMBO/cardano-node/pull/6010)
- [cardano-testnet: call the CLI check-node-configuration to catch configuration errors](https://github.com/IntersectMBO/cardano-node/pull/6096)
- [cardano-testnet: modify API to accept user-provided configuration file](https://github.com/IntersectMBO/cardano-node/pull/6099)

### cardano-testnet
- None

### docs
- None

### CI & project maintenance
- [Clean up GHAs using nix, update nix development shell tools](https://github.com/IntersectMBO/cardano-api/pull/740)
- [Nix dev shell: upgrade fourmolu-0.18.0](https://github.com/IntersectMBO/cardano-api/pull/744)
- [Nix dev shell: upgrade fourmolu-0.18.0](https://github.com/IntersectMBO/cardano-cli/pull/1049)

