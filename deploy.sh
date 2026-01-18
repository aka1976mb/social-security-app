#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

echo "--- Building React Client ---"
cd client
npm install
npm run build
cd ..

echo "--- Installing Backend Dependencies ---"
npm install

echo "--- Starting Server in Production Mode ---"
export NODE_ENV=production
node index.js
