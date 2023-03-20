#!/usr/bin/env bash

TAG_NAME="release@$(date +%Y%m%d%H%M%S)"
git tag "$TAG_NAME"
git push origin "$TAG_NAME"
git push 
echo "OK!!!"