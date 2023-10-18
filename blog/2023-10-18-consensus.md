---
title: Consensus Team Update
slug: 2023-10-18-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## High level summary

During the past two weeks the Consensus team received additional benchmark results for the UTxO-HD feature that show the resource usage for the in-memory backend is not satisfactory for a mainnet release, and we need to wait on the implementation of a new infrastructure to benchmark the LMDB backend (not likely to happen before next year). While we wait on this, we are evaluating the feasibility of making the UTxO-HD feature switchable, which will enable us to release it as an experimental feature. On the Genesis front we produced the first draft for a Survivable Eclipse Duration Model. We released version 8.5.0 of Cardano node, resumed work on subpar handling of blocks from the future, and improved our tracing system to assist problem troubleshooting in the node.

### UTxO-HD

- The Plutus workload benchmark for the in-memory backend [showed no regressions](https://github.com/input-output-hk/ouroboros-consensus/issues/203#issuecomment-1768560330) for the metrics of interest, but it does show an increase in resource usage.
- We got additional ad-hoc [measurements](https://github.com/input-output-hk/cardano-node/issues/5495#issuecomment-1768593069) on memory UTxO-HD consumption. The memory usage of the in-memory backend is not satisfactory for a release. The memory usage of the LMDB backend is considerably lower, but we need to see how much lower we can bring it by running a node whose memory is constrained to 8GB.
- We resumed work on an alternative solution that will make the UTxO-HD switchable. This will enable us to keep the baseline performance by totally disabling UTxO-HD, while allowing users to experiment with the feature if they wish to do so.

### Genesis

- We produced the first draft for a Survivable Eclipse Duration Model ([422](https://github.com/input-output-hk/ouroboros-consensus/pull/422)).

### Support

- [Esgen](https://github.com/amesgen) finished his cycle as release engineer. Node [8.5.0](https://github.com/input-output-hk/cardano-node/releases/tag/8.5.0-pre) has been released.
- We resumed work on the subpar handling of block from the future ([4251](https://github.com/input-output-hk/ouroboros-network/issues/4251)).
- We prepared the integration of [new tracing events](https://github.com/input-output-hk/cardano-node/pull/5502) for the next node release. These tracing events will help debugging potential issues in the node (such as the previously mentioned [issue](https://github.com/input-output-hk/ouroboros-network/issues/4251)).
