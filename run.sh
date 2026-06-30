#!/bin/sh

cd /app/nova || exit 1

exec /app/bin/zypak-wrapper /app/nova/novabeats
