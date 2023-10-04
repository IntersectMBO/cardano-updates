---
title: Consensus Team Update
slug: 2023-10-04-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## High level summary

The value-only workload benchmarks showed that the mempool forging regression observed in the UTxO-HD branch was fixed by the latest patch. In spite of the higher resource demands, for the metrics of interest (forging, peer-propagation, end-to-end propagation) we see no regression when using the UTxO-HD version of Cardano node, with the *in-memory* backend.

On the Genesis front the Researchers continue reviewing different aspects of the design, in particular the argument that the Genesis rule will select the Cardano historical chain.
We also merged a fix for the Babbage to Conway transition, and released a new version of Consensus.


### Genesis

- We elicited review from the Researchers on a final draft of the argument that the Genesis rule will select the Cardano historical chain ([392](https://github.com/input-output-hk/ouroboros-consensus/issues/392)).


### Support

- We merged a minimal patch that fixes parameter update bug during the Babbage to Conway transition ([366](https://github.com/input-output-hk/ouroboros-consensus/pull/366)).
- We enabled richer tracers in `cardano-node` that can be useful in future debugging ([384](https://github.com/input-output-hk/ouroboros-consensus/pull/384)).
- [Esgen](https://github.com/amesgen) continues with his release engineer activities, and created a new Consensus release.

### Fostering collaboration

- We merged a new section into our documentation that explains the existing hard-fork combinator (HFC) interface and its complexities, which are relate do why the Babagge to Conway transition surprised us in this way. This explanation is step one towards improving the HFC interface ([369](https://github.com/input-output-hk/ouroboros-consensus/pull/369)).
