#!/bin/sh

cd /app/nova || exit 1

exec /app/bin/zypak-wrapper /app/bin/electron /app/nova/src/main.js
