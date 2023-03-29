---
title: Node API & CLI Team Update
slug: 2023-02-22-node-cli-api
authors: Jimbo4350
tags: [cli-api]
hide_table_of_contents: false
---

# Node-Api-Cli Update
# 2023-02-22 - 2023-03-07

## High level summary

General bug fixes 

## Completed

### docs
- [Fix some markdown links](https://github.com/input-output-hk/cardano-node/pull/4882)
- [Update changelog with PR4788 changes](https://github.com/input-output-hk/cardano-node/pull/4881)

### CI & project maintenance

### Developer experience

### cardano-cli
- [Fix bug in hash computation in cardano-cli genesis create-cardano](https://github.com/input-output-hk/cardano-node/pull/4761)
- [Cleanup exports of cardano-testnet](https://github.com/input-output-hk/cardano-node/pull/4636)
- [BUGFIX] - [Stop the cli from changing the bytes in user-supplied data](https://github.com/input-output-hk/cardano-node/pull/4537)
- [Handle pipes in cardano-cli](https://github.com/input-output-hk/cardano-node/pull/4625)
- [Export SubmitResult from Cardano.Api](https://github.com/input-output-hk/cardano-node/pull/4753)

### cardano-api
- [Remove pattern Tx](https://github.com/input-output-hk/cardano-node/pull/4901)

### cardano-node
- [Stop running CI when the only changes are to docs](https://github.com/input-output-hk/cardano-node/pull/4263)

### cardano-testnet

## In Progress

## Documentation
- [Fix path to mkfiles.sh script in documentation](https://github.com/input-output-hk/cardano-node/pull/4949)

## CI & project mainteance
- [New build complete job](https://github.com/input-output-hk/cardano-node/pull/4932)
- [Update ouroboros-network](https://github.com/input-output-hk/cardano-node/pull/4764)

### cardano-cli
- [Debug output for transaction submit](https://github.com/input-output-hk/cardano-node/pull/3819)
- [Fully remove the cli intermediate TxBody format](https://github.com/input-output-hk/cardano-node/pull/4713)
- [Render consistent plutus script failure output](https://github.com/input-output-hk/cardano-node/pull/4659)
- [Read network ID from environment](https://github.com/input-output-hk/cardano-node/pull/4666)
- [CLI option to append additional signatures to a transactions](https://github.com/input-output-hk/cardano-node/pull/4647)
- [Cardano ping](https://github.com/input-output-hk/cardano-node/pull/4664)
- [Better error message for query utxo on oops](https://github.com/input-output-hk/cardano-node/pull/4777)
- [New --node-socket-path cli option](https://github.com/input-output-hk/cardano-node/pull/4910)
- [Fix qKesKesKeyExpiry to not always be null](https://github.com/input-output-hk/cardano-node/pull/4909)
- [Detect invalid counter and certificate](https://github.com/input-output-hk/cardano-node/pull/4880)
- [Straight line code for tx commands](https://github.com/input-output-hk/cardano-node/pull/4823)
- [New cardano-cli ping command.](https://github.com/input-output-hk/cardano-node/pull/4664)
- [Move cardano-ping from ouroboros-network to cardano-node project](https://github.com/input-output-hk/cardano-node/pull/4655)

### cardano-api
- [Auto-balance multiasset transactions](https://github.com/input-output-hk/cardano-node/pull/4450)
- [Remove simple script distinction](https://github.com/input-output-hk/cardano-node/pull/4763)
- [Combinators for TxBodyConŻtent and related types](https://github.com/input-output-hk/cardano-node/pull/4941)
- [Reduce number of calls to toLedgerPParams](https://github.com/input-output-hk/cardano-node/pull/4903)
- [Better error message for query utxo without oops 2](https://github.com/input-output-hk/cardano-node/pull/4825)

### cardano-node
- [Rename TestEnableDevelopmentHardForkEras](https://github.com/input-output-hk/cardano-node/pull/4341)
- [Less verbose node-to-client and node-to-node version logging](https://github.com/input-output-hk/cardano-node/pull/4911)

### cardano-testnet
- [Use Haskell variables for passing values](https://github.com/input-output-hk/cardano-node/pull/4845)
- [Re-enable kes-period-info test](https://github.com/input-output-hk/cardano-node/pull/4879)
- [Transaction debug script command](https://github.com/input-output-hk/cardano-node/pull/3783)
