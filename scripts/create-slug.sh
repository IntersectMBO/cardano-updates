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

# Generate the file with the specified content
cat > $FILENAME << EOF
---
title: Node API & CLI Team Update
slug: ${END_DATE_ZEROED}-node-cli-api
authors: ${AUTHOR}
tags: [cli-api]
hide_table_of_contents: false
---

# Node-Api-Cli Update
# ${DATE_ZEROED} - ${END_DATE_ZEROED}

## High level summary

### cardano-cli

### cardano-api

### cardano-node

### cardano-testnet

### docs

### CI & project maintenance
EOF

source scripts/download-prs.sh https://github.com/IntersectMBO/cardano-node.git $DATE_ZEROED $END_DATE_ZEROED
source scripts/download-prs.sh https://github.com/IntersectMBO/cardano-cli.git $DATE_ZEROED $END_DATE_ZEROED
source scripts/download-prs.sh https://github.com/IntersectMBO/cardano-api.git $DATE_ZEROED $END_DATE_ZEROED

source scripts/distribute-merged-prs.sh https://github.com/IntersectMBO/cardano-node.git current $DATE_ZEROED $END_DATE_ZEROED
source scripts/distribute-merged-prs.sh https://github.com/IntersectMBO/cardano-cli.git  current $DATE_ZEROED $END_DATE_ZEROED
source scripts/distribute-merged-prs.sh https://github.com/IntersectMBO/cardano-api.git  current $DATE_ZEROED $END_DATE_ZEROED

source scripts/summarise-merged-prs.sh https://github.com/IntersectMBO/cardano-node.git current
source scripts/summarise-merged-prs.sh https://github.com/IntersectMBO/cardano-cli.git current
source scripts/summarise-merged-prs.sh https://github.com/IntersectMBO/cardano-api.git current
