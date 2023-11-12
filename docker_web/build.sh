#!/bin/sh

set -e # Exit immediately if a command exits with a non-zero status.
set -u # Treat unset variables as an error.

# Get the directory of the current script (from https://stackoverflow.com/a/43919044/22053893).
a="/$0"; a="${a%/*}"; a="${a:-.}"; a="${a##/}/"; BINDIR=$(cd "$a"; pwd)

# Extract app version from the package.json file.
RESTIC_BROWSER_VERSION=$(grep version $BINDIR/../package.json | sed -r 's/.*: "(.+)",/\1/g')

# Build an image with this version.
docker build \
    --build-arg APPLICATION_VERSION=$RESTIC_BROWSER_VERSION \
    -t docker-restic-browser:${RESTIC_BROWSER_VERSION} \
    -f $BINDIR/../Dockerfile.web
