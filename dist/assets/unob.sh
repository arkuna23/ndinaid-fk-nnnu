#!/usr/bin/env bash

for file in *.js; do
    echo "Processing $file"
    uglifyjs -b -o "${file}" "$file"
done
