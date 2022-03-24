#!/usr/bin/env bash

cd website
if [[ ! -e node_moduels ]]; then
    npm ci
else
    npm i
fi
npm start
