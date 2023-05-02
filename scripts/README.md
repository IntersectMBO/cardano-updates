# Merged PR summary generation

The following three scripts are used to produce a merged PR summary that can be used to
build change logs for releases:

```
scripts/download-prs
scripts/distribute-merged-prs
scripts/summarise-merged-prs
```

The scripts are meant to be run in order like this:

```bash
./scripts/download-prs input-output-hk/cardano-node
./scripts/distribute-merged-prs input-output-hk/cardano-node v8.0.0 2022-06-25 2023-04-18
./scripts/summarise-merged-prs input-output-hk/cardano-node v8.0.0
```

The above will:

* Download the PRs that were merged between the two dates exclusive of the latter date.
  ie the example includes the day 2023-04-17 but not 2023-04-18.
* Distribute the PRs according to what files the PRs touched.
* Create a summaries that can be pasted into change logs.

This is split into three scripts for two reasons:

* The download is slow, so it is useful to script the download from the other scripts.
* Manual intervention is required between the distribute and summarise stages. This is
  where the detail can be hand edited (for example irrelevant PRs deleted) from the detail.
  The detail contains a file list to make it easy to judge whether the PR is actually relevant
  to the component.
