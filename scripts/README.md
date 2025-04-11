# PR Summary Scripts

This repository contains scripts to generate a merged PR summary and create a specific blog post. These scripts can be used to build change logs for releases and create blog posts for specific updates.


## 2024 IOE Sprint schedule 

| PI | Sprint 1    | Sprint 2    | Sprint 3    | Sprint 4    | Sprint 5    | Innovation and Planning | End of PI    |
|----|-------------|-------------|-------------|-------------|-------------|-------------------------|--------------|
| 5  | Feb 7, 2024 | Feb 21, 2024| Mar 6, 2024 | Mar 20, 2024| Apr 3, 2024 | Apr 17, 2024            | Apr 30, 2024 |
| 6  | May 8, 2024 | May 22, 2024| Jun 6, 2024 | Jun 19, 2024| Jul 3, 2024 | Jul 17, 2024            | Jul 30, 2024 |
| 7  | Aug 7, 2024 | Aug 21, 2024| Sep 4, 2024 | Sep 18, 2024| Oct 2, 2024 | Oct 16, 2024            | Oct 29, 2024 |
| 8  | Nov 6, 2024 | Nov 20, 2024| Dec 4, 2024 | Dec 18, 2025| Jan 1, 2025 | Jan 15, 2025            | May 6, 2025  |


### Update markdown document creation script

Execute the create-slug.sh script with the following command:

```bash
./create-slug.sh <author> <date> <end_date>
```
This script will create a markdown file named blog/<date>-node-cli-api.md, authored by "<author>", with sections for updates from "<date>" to "<end_date>". It automatically runs the PR summary scripts defined below and places the relevant PRs in the correct sections. Be sure to check for duplicates!


## Scripts

The following scripts are included in this repository:

- `scripts/download-prs.sh`
- `scripts/distribute-merged-prs.sh`
- `scripts/summarise-merged-prs.sh`
- `scripts/create-slug.sh`

## Usage

### PR Summary Scripts

NB: When specifying date ranges be sure the end date is the _start date of the following sprint_. If not you risk losing work done on the last day of a sprint. 

NB: Dates are converted to UTC time and are automatically zeroed: YYYY-MM-DD:00:00:00Z

To use these scripts, follow the instructions below:

1. Run the `download-prs.sh` script providing a "repository", "start-date" (YYYY-MM-DD) and "end-date" (YYYY-DD-DD) as arguments. The script will download all PRs merged in the date range. For example:

```bash
./scripts/download-prs.sh https://github.com/IntersectMBO/cardano-node.git  2023-06-30 2023-07-30
```

2. Execute the `distribute-merged-prs.sh` script using the following command:

```bash
./scripts/distribute-merged-prs.sh input-output-hk/cardano-node $dir 2023-06-30 2023-07-30
```

This script will distribute the downloaded PRs based on the files they have touched in the the directory $dir.

3. Finally, run the `summarise-merged-prs.sh` script by executing the following command:

```bash
./scripts/summarise-merged-prs.sh input-output-hk/cardano-node v8.0.0
```

This script will create summaries that can be directly pasted into change logs.


## Additional Information

- The download process may be slow, so it is beneficial to use the other scripts to automate the download.
- Manual intervention is required between the distribution and summarization stages. This step allows for detailed edits, such as removing irrelevant PRs, from the summary. The detail section of the summary includes a file list, making it easier to assess the relevance of each PR to the component.

For an example of the output produced by each script, refer to the [example commit](https://github.com/input-output-hk/cardano-node/pull/5137/commits) on the official GitHub repository.
