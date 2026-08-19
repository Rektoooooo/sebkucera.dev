#!/bin/sh
# Copies the built site from site/dist/ to the repo root, where GitHub Pages serves it.
# Legacy folders (/studio, /trefa, old demos) are never touched.
set -e
cd "$(dirname "$0")"

if [ ! -f dist/index.html ]; then
  echo "dist/index.html not found — run 'npm run build' first" >&2
  exit 1
fi

# Prune old hashed bundles (root assets/ holds only this site's build output)
rm -f ../assets/*.js ../assets/*.css

mkdir -p ../assets ../img
cp dist/index.html ..
cp dist/favicon.svg ..
cp dist/assets/* ../assets/
cp -R dist/img/. ../img/

echo "Deployed to repo root. Commit + push to publish."
