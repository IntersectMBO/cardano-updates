# PR Summary Scripts

This repository contains scripts to generate a merged PR summary and create a specific blog post. These scripts can be used to build change logs for releases and create blog posts for specific updates.

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
./scripts/download-prs.sh input-output-hk/cardano-node 2023-06-31
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
