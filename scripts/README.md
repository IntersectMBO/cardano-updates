# PR Summary Scripts

This repository contains three scripts that allow you to generate a merged PR summary, which can be used to build change logs for releases. The scripts are designed to be run in a specific order to obtain the desired result.

## Scripts

The following scripts are included in this repository:

- `scripts/download-prs.sh`
- `scripts/distribute-merged-prs.sh`
- `scripts/summarise-merged-prs.sh`

## Usage

To use these scripts, follow the instructions below:

1. Run the `download-prs.sh` script by executing the following command:

./scripts/download-prs.sh input-output-hk/cardano-node


This script will download the PRs that were merged between two specified dates and . Please note that the end date is exclusive.

2. Execute the `distribute-merged-prs.sh` script using the following command:

./scripts/distribute-merged-prs.sh input-output-hk/cardano-node $dir 2022-06-25 2023-04-18

This script will distribute the downloaded PRs based on the files they have touched in the the directory $dir.

3. Finally, run the `summarise-merged-prs.sh` script by executing the following command:

./scripts/summarise-merged-prs.sh input-output-hk/cardano-node v8.0.0


This script will create summaries that can be directly pasted into change logs.

## Additional Information

- The download process may be slow, so it is beneficial to use the other scripts to automate the download.
- Manual intervention is required between the distribution and summarization stages. This step allows for detailed edits, such as removing irrelevant PRs, from the summary. The detail section of the summary includes a file list, making it easier to assess the relevance of each PR to the component.

For an example of the output produced by each script, refer to the [example commit](https://github.com/input-output-hk/cardano-node/pull/5137/commits) on the official GitHub repository.

Please ensure that you have the necessary permissions and dependencies set up before running these scripts.
