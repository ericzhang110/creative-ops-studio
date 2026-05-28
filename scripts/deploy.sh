#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

TARGET="${1:-cloudflare}"

echo "Checking project..."
node --check app.js

case "$TARGET" in
  cloudflare|cf)
    if [[ -z "${CLOUDFLARE_API_TOKEN:-}" ]]; then
      echo "Missing CLOUDFLARE_API_TOKEN."
      echo "Set it, then run: npm run deploy -- cloudflare"
      exit 1
    fi
    npx wrangler pages deploy . --project-name creative-ops-studio
    ;;
  vercel)
    if [[ -z "${VERCEL_TOKEN:-}" ]]; then
      echo "Missing VERCEL_TOKEN."
      echo "Set it, then run: npm run deploy -- vercel"
      exit 1
    fi
    npx vercel --prod --token "$VERCEL_TOKEN"
    ;;
  netlify)
    if [[ -z "${NETLIFY_AUTH_TOKEN:-}" ]]; then
      echo "Missing NETLIFY_AUTH_TOKEN."
      echo "Set it, then run: npm run deploy -- netlify"
      exit 1
    fi
    npx netlify deploy --prod --dir=.
    ;;
  *)
    echo "Unknown target: $TARGET"
    echo "Use one of: cloudflare, vercel, netlify"
    exit 1
    ;;
esac
