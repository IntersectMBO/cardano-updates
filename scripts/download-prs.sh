#!/bin/bash

(yq --version | grep https://github.com/mikefarah/yq/ > /dev/null) || {
  echo "Please install yq from https://github.com/mikefarah/yq/" > /dev/stderr
  exit 1
}

if [ "$#" -ne 1 ]; then
  echo "Usage: $0 repository" >&2
  echo "Example: $0 input-output-hk/cardano-node" >&2
  exit 1
fi

if [[ "$(uname -s)" == "Darwin" ]]; then
  date_cmd=gdate
else
  date_cmd=date
fi

repository="$1"

root_dir="$HOME/.cardano-updates"
out_dir="$root_dir/$repository"

mkdir -p "$out_dir"

temp_json_file="$(mktemp).json"

# Requires the default repository to be set in gh
max_pr_number="$(gh pr list --state all --limit 1 --json number | jq '.[0].number // 1000')"

echo "Downloading up to $max_pr_number PRs"

gh pr list --repo "$repository" \
  -L "$max_pr_number" \
  --state all \
  --json number,title,author,createdAt,closedAt,files,mergedAt,baseRefName,url,body \
  > "$temp_json_file"

cat "$temp_json_file" | yq -P > "$out_dir/download.yaml"
