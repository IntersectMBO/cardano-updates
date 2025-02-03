---
title: Performance & Tracing Update
slug: 2025-02-03-performance-and-tracing
authors: mgmeier
tags: [performance-tracing]
hide_table_of_contents: false
---

## High level summary

* Benchmarking: Release benchmarks and performance baselines on `10.2` for UTxO-HD, new GHC, Genesis; 'Perdiodic tracer' benchmarks.
* Development: Pervasive thread labeling in the Node; fix a race condition in monitoring dependency `ekg-wai`.
* Infrastructure: Haskell profile definition work passed testing, ready for merge; continued 'Byron' support in our tooling.
* Tracing: C library for trace forwarding reached prototype stage; last batch of documentation updates ready for publication.
* Community: Support and valuable feedback on Discord for new tracing system rollout.

## Low level overview


### Benchmarking

We've performed a full set of release benchmarks and analyses for Node version `10.2`. We could not detect any performance risks, and expect network performance to be equivalent or slightly better
than `10.1.x` releases, albeit using slightly more CPU resources under rare conditions.

Furthermore, we're building several performance baselines with `10.2` to compare future changes, features or node flavours to. For comparative benchmarks, it's vital every change be measured individually, as to
be able to discern their individual performance impact. For Node `10.3`, there are several of those we want to capture, such as crypto class simplifications in Ledger, UTxO-HD with a new in-memory backend,
Ouroboros Genesis, and last not least a new GHC9.6 release addressing a remaining performance blocker when building Cardano.  

Additionally, we've validated the 'Periodic tracer' feature on cluster benchmarks and now have evidence of its positive impact on performance. This feature decorrelates gathering metrics from the ledger
from the start of a block producer's forging loop, without sacrificing predictability of performance. By removing this competition on certain synchronization primitives, the hot code path in the forging
loop now executes faster. The feature will be integrated in a future version of the Node.

### Development

We've tracked down a race condition in a community package that both tracing systems depend on for exposing metrics. In `ekg-wai`, a `ThreadKilled` exception could be re-thrown to the thread where
it originated from. It is a low-risk condition, as it occurs only when then Node process terminates; however, when terminating due to an error condition, it caused the process to end prematurely, before the
error could be logged. We've opened a [PR (ekg-wai#12)](https://github.com/tvh/ekg-wai/pull/12) against the package containing the fix and pre-released on CHaP.    

Tracking down this condition could have been improved by providing pervasive, human-readable labels for all the threads that the Node process spawns. So in coordination with the Consensus team,
we made sure this is the case for future builds of the Node - including locations in the code where dependency packages internally use `forkIO` to create green threads. This will
enhance usability of debug output when looking into concurrency issues.

### Infrastructure

The Haskell definition of benchmarking workloads - and the removal of its `bash`/`jq` counterpart - is complete, and has passed testing phase. This includes a final alignment between all profile content
defined using either option. Once merged, this will open up the path for simplification of how `nix` interacts with the performance `workbench` - and hopefully reduce complexity for our CI runners.  

As `cardano-api` is deprecating some protocol parameter related data types which do not have relevance for Cardano anymore, we've had a discussion with stakeholders about the implications for our tooling:
This would effectively disable our ability to benchmark clusters of BFT nodes which do not use a staking / reward-based consensus algorithm - as it used to be in Cardano's Byron era. The decision
was made to not drop that ability from our tooling, as there are potential applications for the benchmarks outside of Cardano. As a consequence, we've startied porting those types to live on in our toolchain,
representing an additonal maintenance item within our team.


### Tracing

The self-contained C library implementing trace forwarding is now in prototype state. It contains a pure C implementation of our forwarding protocol over socket,
as well as pure C CBOR codecs for data payload to match the `TraceObject` schema used within the context Cardano. That ensures existing tooling can process traces emitted
by non-Cardano applications, written in languages other than Haskell.  

The latest updates to [Developer Portal: `cardano-tracer`] are ready to be published and awaiting a PR review on the Cardano Developer Portal.

### Community

We've been quite busy on our new Discord channel [_#tracing-monitoring_](https://discord.com/channels/826816523368005654/1332375957528514590) on the *IOG's Technical Community* server. There's been
an initial spike of interest and we've been able to provide support and explain various design decisions of the new tracing system. Additionally, we've gotten valuable feedback about potential
features that would greatly help adoption of the new system. These are typically highly localized in their implementation, and non-breaking wrt. to API and design, such that addressing this
feedback promptly adds much value at low risk - Thank You for your input!



[Developer Portal: `cardano-tracer`]: https://developers.cardano.org/docs/get-started/cardano-node/new-tracing-system/cardano-tracer
