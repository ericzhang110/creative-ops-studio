# Deployment Playbook

This app should not be shared through `trycloudflare.com` quick tunnels except for short demos. Quick tunnels expire and the URL changes whenever the tunnel process stops.

## Recommended Permanent Setup

Use Cloudflare Pages.

One-time requirements:

- A Cloudflare account
- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`
- Optional custom domain, for example `creative-tools.yourdomain.com`

## Manual Deploy

From this folder:

```bash
npm run deploy -- cloudflare
```

The script checks `app.js`, then deploys the current folder to Cloudflare Pages.

## GitHub Auto Deploy

Push this folder to a GitHub repository and add these repository secrets:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

Then every push to `main` deploys automatically.

## Backup Providers

Vercel:

```bash
VERCEL_TOKEN=... npm run deploy -- vercel
```

Netlify:

```bash
NETLIFY_AUTH_TOKEN=... npm run deploy -- netlify
```

## Operating Rule

Use quick tunnels only for previews. Use Pages/Vercel/Netlify links for anything shared with other people.
