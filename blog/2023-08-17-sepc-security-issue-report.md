---
title: SECP bindings Security Issue Report
slug: 2023-08-17-crypto
authors: iquerejeta
tags: [crypto]
hide_table_of_contents: false
---

## Security Issue Report: SECP256k1 bug

Date Occurred: July 15, 2022
Severity:  Potentially Very High if exploited on Mainnet
Authors: Iñigo Querejeta Azurmendi

Date of Report: August 17, 2023
### Summary of Issue
#### Criticality Level
Actually low (since the issue was detected prior to deployment) but potentially very high if it had been deployed to mainnet
Context

New SECP256k1 Plutus bindings were being introduced in order to support interoperability with other major chains, such as Bitcoin and Ethereum.  The intention was to deploy these as part of the Vasil hard-fork. The bindings were considered to be a low-security risk since the underlying library functions were well tested and had been deployed on other blockchains.
How was the Issue Detected

The issue was detected via specific End-to-End tests that had been commissioned.  It was (accidentally) triggered on the Cardano Testnet before a fix could be deployed there.

#### What Action was Taken
The Cardano Testnet was permanently halted, and new test environments were deployed (Preview and Pre-Prod).
Fixes were applied to prevent the use of the primitives.
A full security audit was carried out on the bindings.
The rollout of the primitives was postponed to a new hard fork (Valentine)    

#### Potential Effect
The potential effect was that an adversary might be able to craft invalid Plutus transactions to crash any node, requiring execution of the Cardano disaster recovery plan to revert to a safe state and bypass the transaction.

#### Actual Effect
* Delay to the Vasil hard-fork
* Temporary removal of SECP256k1 primitives
* Additional hard-fork to introduce SECP256k1 primitives

#### Ongoing Mitigations Needed, if any
None

#### Responsibility for Mitigations
Core team

### Detailed description of Incident
New Plutus **secp256k1** cryptographic primitives for Plutus v2 failed to apply the necessary validity checks on the input data, meaning that the primitives could theoretically be used in an unsafe environment.  The vulnerability was present in recent node versions (1.35.0 onwards), including ones deployed to Cardano Testnet.

The problem was not in the deserialization functions of the underlying library (Bitcoin's library) but rather that the Haskell functions that implemented the Plutus builtins were not calling them correctly.  In particular, the library functions were designed to take structured data as input. However, the Haskell FFI implementation that was produced for the Plutus builtins allowed a caller to pass in (possibly) unstructured data. There were no checks that these data were structured in the correct way.  This issue was detected during End-to-End testing.
 
* [This](https://github.com/bitcoin-core/secp256k1/blob/master/include/secp256k1.h#L518) is the ECDSA signature verification algorithm that was used. It takes a SECP256k1_pubkey as input. That type is an opaque type with an [expected](https://github.com/bitcoin-core/secp256k1/blob/master/include/secp256k1.h#L61) structure: a parsed and valid public key.  It was not immediately obvious that structured data needed to be passed to allow the function to be used safely.
* The same happened with the Schnorr [verification function](https://github.com/bitcoin-core/secp256k1/blob/master/include/secp256k1_schnorrsig.h#L170). It takes as input a SECP256k1_xonly_pubkey, which is again an [opaque structure](https://github.com/bitcoin-core/secp256k1/blob/master/include/secp256k1_extrakeys.h#L10) that holds a parsed and valid public key.

The FFI skipped checks over these structured keys and directly passed the raw bytes that were given as arguments. If an adversary were to pass in data that was not properly structured, then it could result in unexpected behavior of the library. This could perhaps translate into an adversary being able to crash the nodes that ran these functions.  All nodes in the network could be crashed by a single transaction that would then be executed repeatedly, so stalling the network until the disaster recovery process was initiated.

The fix was addressed in [this](https://github.com/input-output-hk/cardano-base/pull/289) PR. It consisted of using the external representation that the deserialization function expects and running the deserialization prior to signature verification.  This was audited by security experts.

### Recommendations
* Check all new Plutus bindings for correct use.
* Audit all new Plutus built-in bindings.
* Continue to develop specific End-to-End tests for all new Plutus features.
* Do not assume that any existing library functions are "safe". Treat all external calls circumspectly.

