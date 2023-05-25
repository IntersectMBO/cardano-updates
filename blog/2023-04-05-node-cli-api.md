---
title: Node API & CLI Team Update
slug: 2023-04-05-node-cli-api
authors: Jimbo4350
tags: [cli-api]
hide_table_of_contents: false
---

# Node-Api-Cli Update
# 2023-04-05 - 2023-04-19

## High level summary
- Introduce new governance commands create, answer and verify. This allows us to have onchain polls.
- Begin making changes in cardano-api to accomodate for CIP-1694
- Rename `TestEnableDevelopmentHardForkEras` to `ExperimentalHardForksEnabled` and `TestEnableDevelopmentNetworkProtocols` to `ExperimentalProtocolsEnabled`
- Various bug fixes and improvements 

### docs

### CI & project maintenance

### Developer experience

### cardano-cli
- [Add new interim governance commands: {create, answer, verify}-poll](https://github.com/input-output-hk/cardano-node/pull/5112) 
- [Remove --stake-address option from stake-address build](https://github.com/input-output-hk/cardano-node/pull/5061) 
- [Frozen callstack for checkTextEnvelopeFormat function](https://github.com/input-output-hk/cardano-node/pull/5059) 
- [#5052 Remove reading protocol parameters from Shelley genesis file](https://github.com/input-output-hk/cardano-node/pull/5053) 
- [Move parsers to reusable location](https://github.com/input-output-hk/cardano-node/pull/5046) 
- [New --socket-path cli option](https://github.com/input-output-hk/cardano-node/pull/4910) 

### cardano-api
- [CIP-1694 make space for DRep certificates](https://github.com/input-output-hk/cardano-node/pull/5108) 
- [File type to track the content and direction of files](https://github.com/input-output-hk/cardano-node/pull/5105) 
- [Fix import warning](https://github.com/input-output-hk/cardano-node/pull/5087) 
- [Expose UsingRawBytes et al types](https://github.com/input-output-hk/cardano-node/pull/5086) 
- [Expose SerialiseAsRawBytesError in Cardano.Api](https://github.com/input-output-hk/cardano-node/pull/5085) 
- [Introduce new AnyShelleyBasedEra type and simplify CDDL tests.](https://github.com/input-output-hk/cardano-node/pull/5072) 
- [New genCardanoKeyWitness function](https://github.com/input-output-hk/cardano-node/pull/5071) 
- [Replace roundtripCBOR with trippingCbor](https://github.com/input-output-hk/cardano-node/pull/5069) 
- [Remove non-round-trippable value TxInsReferenceNone for babbage onwards in generator](https://github.com/input-output-hk/cardano-node/pull/5064) 
- [Improve roundtrip functions to report annotations on callsite](https://github.com/input-output-hk/cardano-node/pull/5063) 
- [Define Functor instance for FileError](https://github.com/input-output-hk/cardano-node/pull/5057) 
- [Split serialisation from IO](https://github.com/input-output-hk/cardano-node/pull/5049) 

### cardano-node
- [Master build failure fixes](https://github.com/input-output-hk/cardano-node/pull/5115) 
- [Allow renamed fields to exist if values the same](https://github.com/input-output-hk/cardano-node/pull/5106) 
- [workbench: updates](https://github.com/input-output-hk/cardano-node/pull/5091) 
- [Delete duplicate packages sort packages and imports](https://github.com/input-output-hk/cardano-node/pull/5084) 
- [Rename TestEnableDevelopmentHardForkEras and TestEnableDevelopmentNetworkProtocols](https://github.com/input-output-hk/cardano-node/pull/4341) 

### cardano-testnet
- [Additional check for not-leader slots in LeadershipSchedule tests](https://github.com/input-output-hk/cardano-node/pull/5110) 
- [Fix epochLength and securityParam to conform to the formula 10 * k / f](https://github.com/input-output-hk/cardano-node/pull/5099) 
- [Ergonomic directory creation code in tests](https://github.com/input-output-hk/cardano-node/pull/5083) 
- [Default Cardano.Testnet to NodeLoggingFormatAsJson](https://github.com/input-output-hk/cardano-node/pull/5036) 
- [Integrate latest ledger dependencies](https://github.com/input-output-hk/cardano-node/pull/5013) 
