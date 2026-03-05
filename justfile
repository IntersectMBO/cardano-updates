default:
    @just --list

# Autoformat project tree
fmt:
    treefmt

# Run local server
run:
    yarn start

# Build static site
build:
    yarn build

# setup first time
setup:
    yarn install
