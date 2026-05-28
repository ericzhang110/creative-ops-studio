# Creative Ops Studio

Static MVP for two internal creative automation tools:

- Multilingual Banner Generator
- Social Media Template Tool

## Local Preview

```bash
python3 -m http.server 8000
```

Open `http://127.0.0.1:8000`.

## Production Deployment

This is a pure static site. Deploy the `banner-tool` folder directly.

Recommended options:

- Cloudflare Pages: project root `banner-tool`, build command empty, output directory `.`
- Vercel: project root `banner-tool`, framework preset `Other`, output directory `.`
- Netlify: project root `banner-tool`, publish directory `.`, build command empty

See `DEPLOYMENT.md` for the repeatable deployment workflow and required tokens.

## Notes

The current app stores state in the browser only. For a version intended for regular external users, add authentication, persistent template storage, image uploads, and ZIP export.
