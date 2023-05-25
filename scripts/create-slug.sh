#!/bin/bash

# Date in the format YYYY-MM-DD
DATE=$1
# Author's name
AUTHOR=$2

# Check that both parameters are provided
if [ -z "$DATE" ] || [ -z "$AUTHOR" ]; then
    echo "Usage: $0 date author"
    echo "date: Date in the format YYYY-MM-DD"
    echo "author: Author's name"
    exit 1
fi

# End date calculated as two weeks from the provided date
END_DATE=$(date -I -d "$DATE + 14 days")

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

### docs

### CI & project maintenance

### Developer experience

### cardano-cli

### cardano-api

### cardano-node

### cardano-testnet
EOF
