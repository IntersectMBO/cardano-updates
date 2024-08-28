# PR Summary Scripts

This repository contains scripts to generate a merged PR summary and create a specific blog post. These scripts can be used to build change logs for releases and create blog posts for specific updates.


## 2024 IOE Sprint schedule 

| PI | Sprint 1    | Sprint 2    | Sprint 3    | Sprint 4    | Sprint 5    | Innovation and Planning | End of PI    |
|----|-------------|-------------|-------------|-------------|-------------|-------------------------|--------------|
| 5  | Feb 7, 2024 | Feb 21, 2024| Mar 6, 2024 | Mar 20, 2024| Apr 3, 2024 | Apr 17, 2024            | Apr 30, 2024 |
| 6  | May 8, 2024 | May 22, 2024| Jun 6, 2024 | Jun 19, 2024| Jul 3, 2024 | Jul 17, 2024            | Jul 30, 2024 |
| 7  | Aug 7, 2024 | Aug 21, 2024| Sep 4, 2024 | Sep 18, 2024| Oct 2, 2024 | Oct 16, 2024            | Oct 29, 2024 |
| 8  | Nov 6, 2024 | Nov 20, 2024| Dec 4, 2024 | Dec 18, 2025| Jan 1, 2025 | Jan 15, 2025            | May 6, 2025  |


## Scripts

The following scripts are included in this repository:

- `scripts/download-prs.sh`
- `scripts/distribute-merged-prs.sh`
- `scripts/summarise-merged-prs.sh`
- `scripts/create-slug.sh`

## Usage

### PR Summary Scripts

To use these scripts, follow the instructions below:

1. Run the `download-prs.sh` script providing a "repository" and a "start-date" (YYYY-MM-DD) as arguments. The script will download all PRs created after the start date. For example:

```bash
./scripts/download-prs.sh input-output-hk/cardano-node 2023-06-30
```

2. Execute the `distribute-merged-prs.sh` script using the following command:

```bash
./scripts/distribute-merged-prs.sh input-output-hk/cardano-node $dir 2022-06-25 2023-04-18
```

This script will distribute the downloaded PRs based on the files they have touched in the the directory $dir.

3. Finally, run the `summarise-merged-prs.sh` script by executing the following command:

```bash
./scripts/summarise-merged-prs.sh input-output-hk/cardano-node v8.0.0
```

This script will create summaries that can be directly pasted into change logs.

### Update creation script

Execute the create-slug.sh script with the following command:

```bash
./create-slug.sh <author> <date> <end_date>
```
This script will create a markdown file named blog/<date>-node-cli-api.md, authored by "<author>", with sections for updates from "<date>" to "<end_date>". It automatically runs the PR summary scripts as defined above so you can cherry pick the PRs as necessary.


## Additional Information

- The download process may be slow, so it is beneficial to use the other scripts to automate the download.
- Manual intervention is required between the distribution and summarization stages. This step allows for detailed edits, such as removing irrelevant PRs, from the summary. The detail section of the summary includes a file list, making it easier to assess the relevance of each PR to the component.

For an example of the output produced by each script, refer to the [example commit](https://github.com/input-output-hk/cardano-node/pull/5137/commits) on the official GitHub repository.
