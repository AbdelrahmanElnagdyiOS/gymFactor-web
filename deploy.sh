#!/usr/bin/env bash
#
# Build the Next.js site to static files and upload them to Hostinger over SSH.
#
# One-time setup:
#   1.  cp site/.deploy.env.example site/.deploy.env   then fill it in
#   2.  Add your SSH public key in hPanel → Advanced → SSH Access
#   3.  ./site/deploy.sh            (add DRY_RUN=1 to preview the upload)
#
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ENV_FILE="$SCRIPT_DIR/.deploy.env"

if [[ ! -f "$ENV_FILE" ]]; then
  echo "✗ Missing $ENV_FILE" >&2
  echo "  Run:  cp \"$SCRIPT_DIR/.deploy.env.example\" \"$ENV_FILE\"  and fill it in." >&2
  exit 1
fi

# shellcheck disable=SC1090
source "$ENV_FILE"
: "${SSH_HOST:?set SSH_HOST in .deploy.env}"
: "${SSH_USER:?set SSH_USER in .deploy.env}"
: "${REMOTE_DIR:?set REMOTE_DIR in .deploy.env}"
SSH_PORT="${SSH_PORT:-22}"

echo "→ Building static site…"
cd "$SCRIPT_DIR"
if [[ -f package-lock.json ]]; then npm ci; else npm install; fi
npm run build   # next.config.mjs has output: "export" → produces ./out

if [[ ! -d "$SCRIPT_DIR/out" ]]; then
  echo "✗ Build did not produce an out/ directory." >&2
  exit 1
fi

echo
echo "→ Uploading out/  →  $SSH_USER@$SSH_HOST:$REMOTE_DIR  (port $SSH_PORT)"
[[ "${DRY_RUN:-0}" == "1" ]] && echo "→ DRY RUN — nothing will be uploaded"

opts=(-avz --delete --human-readable -e "ssh -p $SSH_PORT")
[[ "${DRY_RUN:-0}" == "1" ]] && opts+=(--dry-run)

rsync "${opts[@]}" "$SCRIPT_DIR/out/" "$SSH_USER@$SSH_HOST:$REMOTE_DIR/"

echo
echo "✓ Deployed — https://www.gymfactor.app"
