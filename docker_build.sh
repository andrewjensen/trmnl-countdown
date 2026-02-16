#!/usr/bin/env bash

# Build for arm and amd
docker buildx build \
    --platform linux/arm64,linux/amd64 \
    -t ghcr.io/andrewjensen/trmnl-countdown:latest \
    .
