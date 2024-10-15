#!/usr/bin/env bash

set -euo pipefail

(yq --version | grep https://github.com/mikefarah/yq/ > /dev/null) || {
  echo "Please install yq from https://github.com/mikefarah/yq/" > /dev/stderr
  exit 1
}

if [ "$#" -ne 3 ]; then
  echo "Usage: $0 repository_url start_date end_date" >&2
  echo "Example: $0 IntersectMBO/cardano-node 2024-09-04 2024-09-17" >&2
  exit 1
fi

if [[ "$(uname -s)" == "Darwin" ]]; then
  date_cmd=gdate
else
  date_cmd=start_date
fi

repository_url="$1"
repository_name="$(basename "$repository_url" ".git")"
start_date="$2"
end_date="$3"

out_dir="gen/$repository_name"

mkdir -p "$out_dir"

temp_json_file="$(mktemp).json"

max_pr_number="$(gh pr list --repo "$repository_url" --state merged --search "merged:$start_date..$end_date" -L 1000 --json number | jq length)"

gh pr list --repo "$repository_url" --state merged --search "merged:$start_date..$end_date" -L "$max_pr_number" \
    --json number,title,author,createdAt,closedAt,files,mergedAt,baseRefName,url,body > "$temp_json_file"


echo "Repository: $repository_url"
echo "Date: $start_date"
echo "End Date: $end_date"
echo "Downloading up to $max_pr_number PRs"

cat "$temp_json_file" | yq -P > "$out_dir/download.yaml"
