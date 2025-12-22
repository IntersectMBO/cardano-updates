---
title: Performance & Tracing Update
slug: 2025-12-22-performance-and-tracing
authors: mgmeier
tags: [performance-tracing]
hide_table_of_contents: false
---

## High level summary

* **Benchmarking**: `10.6` benchmarks confirming heap size fix; First LSM-trees benchmarks.
* **Infrastructure**: New typesetting tool for reporting pipeline.
* **Tracing**: Increased robustness of the `PrometheusSimple` metrics backend; previous quality-of-life improvements released.
* **Leios**: Linear temporal logic based trace verifier demo for Leios.

## Low level overview


### Benchmarking

The underlying cause for increase in RAM usage on Node `10.6.0` has been indentified and addressed. While heap size increase is still present outside of our benchmarking environment, its extent there is negligible. We've re-run cluster benchmarks to confirm the fix is successful.  

Additionally, we've performed and analyzed benchmarks on several LSM-trees integration branches. This feature has as of now not been released in some Node version, so it is not yet fully configurable. The benchmarks have to be understood as a very
early performance assessment. We've performed benchmarks for both in-memory and on-disk backing stores. Especially for the on-disk benchmarks, we could observe RAM usage decreasing clearly, with only small increases in CPU usage. While there is some
extra cost to block adoption, cluster diffusion metrics still remain almost identical to the in-memory benchmarks - mostly due to header pipelining. As we didn't artificially constrain memory, the benchmarks are illustrative of LSM-trees behaviour
when there's no pressure from the garbage collector: Given that, will on-disk LSM-trees use caching / buffering efficiently, or will it perform redundant disk I/O? The answer is - the former.


### Infrastructure

For convenient creation of reporting documents, we're integrating a new typesetting tool: The brilliant, open-source [Typst] project promises fully typesettable and scriptable documents, while maintaining a syntax that is (almost) as easy to grasp
as Markdown. Typst extensions even render our gnuplots inline - and fast. Easily scriptable styling enables us to deliver an often requested feature: Colorizing individual result metrics based on how risky (or beneficial) a deviation from the
baseline is deemed to be. Up to now, our reporting pipeline depended on Emacs Org mode and a medium-sized LaTeX distro as part of the Performance Workbench; we might be able to drop these heavy dependencies
in favor of something more modern soon.


### Tracing

The Node's internal `PrometheusSimple` backend to expose metrics has received several robustness improvements. All those aim to mitigate factors in the host environment which can contribute to the backend becoming unreachable. It will now reap dangling socket
connections more eagerly, preventing false positives in DoS protection. Furthermore, there now is a restart/retry wrapper in place, should the backend fail unexpectedly. All start and stop events are traced in the logs, exposing a potential error cause. 
Merged in [cardano-node PR#6396].

The previous batch of quality-of-life improvements in [cardano-node PR#6377] has also been merged and released. It includes Prometheus HTTP service discovery for `cardano-tracer`, more robust recovering and tracing of forwarding connection interruptions as well as
stability improvements for engineers implementing tracers.

### Leios

Our conformance testing framework which evaluates linear temporal logic propositions against trace output has matured. It has seen some performance and usability improvements, for instance a helpful
human-readable output as to what minimal sequence of traces caused some proposition to be false - and the ability to consume traces from an arbitrary number of nodes instead of only one. We've already created several propositions
targeting the well-behavedness of the block forging loop; diffusion related propositions for Praos and eventually Leios are logical next steps.  

Even though this framework was built with Node Diversity in mind, we could showcase it at this month's Leios event, and demonstrate what it could deliver for this project as well - and we were very satisfied with the reception it got.

## Performance & Tracing wishes you Happy Holidays...

...and a Joyful New Year!


[cardano-node PR#6377]: https://github.com/IntersectMBO/cardano-node/pull/6377
[cardano-node PR#6396]: https://github.com/IntersectMBO/cardano-node/pull/6396
[Typst]: https://typst.app/docs
