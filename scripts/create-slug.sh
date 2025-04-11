#!/usr/bin/env bash

set -euo pipefail

# Author's name
AUTHOR=$1

if [[ "$(uname -s)" == "Darwin" ]]; then
  date_cmd=gdate
else
  date_cmd=date
fi

# Date in the format YYYY-MM-DD:00:00:00Z
DATE_ZEROED="$("$date_cmd" -u -d "$2" +"%Y-%m-%dT%H:%M:%SZ")"

# Date in the format YYYY-MM-DD:00:00:00Z
END_DATE_ZEROED="$("$date_cmd" -u -d "$3" +"%Y-%m-%dT%H:%M:%SZ")"


# Download all the PRs so we can populate the md document
source scripts/download-prs.sh https://github.com/IntersectMBO/cardano-node.git $DATE_ZEROED $END_DATE_ZEROED
source scripts/download-prs.sh https://github.com/IntersectMBO/cardano-cli.git $DATE_ZEROED $END_DATE_ZEROED
source scripts/download-prs.sh https://github.com/IntersectMBO/cardano-api.git $DATE_ZEROED $END_DATE_ZEROED

source scripts/distribute-merged-prs.sh https://github.com/IntersectMBO/cardano-node.git current $DATE_ZEROED $END_DATE_ZEROED
source scripts/distribute-merged-prs.sh https://github.com/IntersectMBO/cardano-cli.git  current $DATE_ZEROED $END_DATE_ZEROED
source scripts/distribute-merged-prs.sh https://github.com/IntersectMBO/cardano-api.git  current $DATE_ZEROED $END_DATE_ZEROED

source scripts/summarise-merged-prs.sh https://github.com/IntersectMBO/cardano-node.git current
source scripts/summarise-merged-prs.sh https://github.com/IntersectMBO/cardano-cli.git current
source scripts/summarise-merged-prs.sh https://github.com/IntersectMBO/cardano-api.git current


END_DATE_WITHOUT_TIME=$3
# Check that both parameters are provided
if [ -z "$DATE_ZEROED" ] || [ -z "$AUTHOR" ]; then
    echo "Usage: $0 date author"
    echo "date: Date in the format YYYY-MM-DD"
    echo "author: Author's name"
    exit 1
fi

# Filename in the format YYYY-MM-DD-node-cli-api.md
FILENAME="blog/${END_DATE_WITHOUT_TIME}-node-cli-api.md"

# Fail immediately if any required directory is missing
REQUIRED_DIRS=(
  "gen/cardano-cli/current/summary"
  "gen/cardano-api/current/summary"
  "gen/cardano-node/current/summary"
)

for dir in "${REQUIRED_DIRS[@]}"; do
  if [[ ! -d "$dir" ]]; then
    echo "ERROR: Required directory not found: $dir" >&2
    exit 1
  fi
done

# Rest of your script with strict error checking
get_section_content() {
  local section_dir="gen/${1}/current/summary"
  
  # Fail hard if directory doesn't exist (redundant check but extra safety)
  if [[ ! -d "$section_dir" ]]; then
    echo "ERROR: Directory vanished since validation: $section_dir" >&2
    exit 1
  fi

  # Fail if no YAML files found
  local md_files=()
  while IFS= read -r -d '' file; do
    md_files+=("$file")
  done < <(find "$section_dir" -maxdepth 1 -type f \( -iname "*.md" \) -print0 2>/dev/null)

  if [[ ${#md_files[@]} -eq 0 ]]; then
    echo "ERROR: No .md files found in $section_dir" >&2
    exit 1
  fi

  # Concatenate all .md files with strict validation
  for file in "${md_files[@]}"; do
    if [[ ! -s "$file" ]]; then
      echo "ERROR: Empty .md file found: $file" >&2
      exit 1
    fi
    cat "$file" || {
      echo "ERROR: Failed to read $file" >&2
      exit 1
    }
  done
}

# Generate content with immediate failure on error
# Only process these sections with get_section_content
MAIN_SECTIONS=("cardano-cli" "cardano-api" "cardano-node")

# Generate the file
{
  # Static header
  cat <<EOF
---
title: Node API & CLI Team Update
slug: ${END_DATE_WITHOUT_TIME}-node-cli-api
authors: ${AUTHOR}
tags: [cli-api]
hide_table_of_contents: false
---

# Node-Api-Cli Update
# ${DATE_ZEROED} - ${END_DATE_ZEROED}

## High level summary

EOF

  # Process main sections with get_section_content
  for section in "${MAIN_SECTIONS[@]}"; do
    echo "### $section"
    get_section_content "$section" || exit 1
    echo
  done

  # Hardcoded sections
  cat <<EOF
### cardano-testnet
- None

### docs
- None

### CI & project maintenance
- None
EOF
} > "$FILENAME"

echo "File generated: $FILENAME"

echo "Successfully generated $FILENAME"