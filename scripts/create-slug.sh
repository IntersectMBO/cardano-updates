#!/bin/bash

set -euo pipefail

# Author's name
AUTHOR=$1
# Date in the format YYYY-MM-DD
DATE=$2
# Date in the format YYYY-MM-DD
END_DATE=$3

# Check that both parameters are provided
if [ -z "$DATE" ] || [ -z "$AUTHOR" ]; then
    echo "Usage: $0 date author"
    echo "date: Date in the format YYYY-MM-DD"
    echo "author: Author's name"
    exit 1
fi

# Filename in the format YYYY-MM-DD-node-cli-api.md
FILENAME="blog/${DATE}-node-cli-api.md"

# Generate the file with the specified content
cat > $FILENAME << EOF
---
title: Node API & CLI Team Update
slug: ${DATE}-node-cli-api
authors: ${AUTHOR}
tags: [cli-api]
hide_table_of_contents: false
---

# Node-Api-Cli Update
# ${DATE} - ${END_DATE}

## High level summary

### cardano-cli

### cardano-api

### cardano-node

### cardano-testnet

### docs

### CI & project maintenance
EOF

source scripts/download-prs.sh input-output-hk/cardano-node $DATE
source scripts/download-prs.sh input-output-hk/cardano-cli $DATE
source scripts/download-prs.sh input-output-hk/cardano-api $DATE

source scripts/distribute-merged-prs.sh input-output-hk/cardano-node current $DATE $END_DATE
source scripts/distribute-merged-prs.sh input-output-hk/cardano-cli current $DATE $END_DATE
source scripts/distribute-merged-prs.sh input-output-hk/cardano-api current $DATE $END_DATE

source scripts/summarise-merged-prs.sh input-output-hk/cardano-node current
source scripts/summarise-merged-prs.sh input-output-hk/cardano-cli current
source scripts/summarise-merged-prs.sh input-output-hk/cardano-api current