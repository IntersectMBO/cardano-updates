---
title: Node API & CLI Team Update
slug: 2024-09-18-node-cli-api
authors: Jimbo4350
tags: [cli-api]
hide_table_of_contents: false
---

# Node-Api-Cli Update
# 2024-09-04 - 2024-09-18

## High level summary

In line with our ongoing refactoring work, we began propagating the [experimental api](https://github.com/input-output-hk/cardano-node-wiki/wiki/ADR-4-Support-only-for-mainnet-and-upcoming-eras) in `cardano-cli`. This will continue for several sprints as we remove eras prior to mainnet in order to reduce the unnecessary complexity of `cardano-api`'s and `cardano-cli`'s codebases. Other work:
- New functionality has been added to cardano-cli and cardano-ping
- Collateral balancing bug has been fixed in cardano-cli
- `optparse-applicative-fork` dependency has been removed
- Various refactors and improvements to cardano-testnet

### cardano-cli
- [Add support for fetching tip through cardano-ping](https://github.com/IntersectMBO/cardano-cli/pull/888)
- [add support for script based drep on update certificate](https://github.com/IntersectMBO/cardano-cli/pull/884)
- [cardano-ping: report user friendly error on misconfiguration](https://github.com/IntersectMBO/cardano-cli/pull/893)
- [Move parsing helpers from API](https://github.com/IntersectMBO/cardano-cli/pull/894)
- [Options: avoid code duplication](https://github.com/IntersectMBO/cardano-cli/pull/890)
- [Propagate experimental api](https://github.com/IntersectMBO/cardano-cli/pull/853)
- [Release cardano-cli-9.4.0.0](https://github.com/IntersectMBO/cardano-cli/pull/885)
- [Release cardano-cli-9.4.1.0](https://github.com/IntersectMBO/cardano-cli/pull/889)
- [Remove deprecation message when invoking a command in deprecated era](https://github.com/IntersectMBO/cardano-cli/pull/887)

### cardano-api
- [Add `fromLedgerUTxO` export](https://github.com/IntersectMBO/cardano-api/pull/627)
- [Add new types to CDDL list and test forward compatibility of `deserialiseTxLedgerCddl`](https://github.com/IntersectMBO/cardano-api/pull/634)
- [Bump CHaP](https://github.com/IntersectMBO/cardano-api/pull/610)
- [Experimental API: remove redundant type families and functions](https://github.com/IntersectMBO/cardano-api/pull/625)
- [Fix collateral balancing when building transaction](https://github.com/IntersectMBO/cardano-api/pull/631)
- [Release cardano-api-9.3.0.0 cardano-api-gen-9.0.0.0 ](https://github.com/IntersectMBO/cardano-api/pull/628)
- [Remove optparse-applicative-fork dependency, and functions depending on it](https://github.com/IntersectMBO/cardano-api/pull/635)

### cardano-node
- [Add more context to invalid snapshot events](https://github.com/IntersectMBO/cardano-node/pull/5933)
- [Names of metrics in the new tracing system](https://github.com/IntersectMBO/cardano-node/pull/5905)
- [Update dependencies](https://github.com/IntersectMBO/cardano-node/pull/5979)

### cardano-testnet
- [Add test for `query spo-stake-distribution`](https://github.com/IntersectMBO/cardano-node/pull/5932)
- [cardano-testnet | Add plutus V3 cost model, set minFeeRefScriptCostPerByte=15 in Conway genesis](https://github.com/IntersectMBO/cardano-node/pull/5977)
- [cardano-testnet-test: small improvements](https://github.com/IntersectMBO/cardano-node/pull/5962)
- [cardano-testnet: make call to query stake-address-info a golden test](https://github.com/IntersectMBO/cardano-node/pull/5970)
- [cardano-testnet: separate in types the options encoded in genesis files, from other options](https://github.com/IntersectMBO/cardano-node/pull/5976)
- [cardano-testnet: test value delegated to dreps in test of drep-stake-distribution](https://github.com/IntersectMBO/cardano-node/pull/5961)

### docs

### CI & project maintenance
