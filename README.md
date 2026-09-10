# Sidhant & Sandhiya — Engagement Photos

A single-page site to share engagement photos with guests. Built with Next.js
(App Router) and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing content

- **Names, date, welcome message, Drive link:** edit
  [`src/lib/site-config.ts`](src/lib/site-config.ts).
- **Preview photos:** the hero + 8 gallery photos live in `public/photos/`.
  To swap them, edit `scripts/prepare-photos.js` (source file paths + output
  names) and re-run:

  ```bash
  node scripts/prepare-photos.js
  ```

  This resizes/compresses the originals so the site stays fast on mobile
  data — don't commit multi-megabyte camera originals directly.

## Deploying to Vercel

```bash
npm install -g vercel   # one-time
vercel login
vercel                  # first deploy (follow prompts)
vercel --prod           # promote to production
```

No environment variables or `vercel.json` are required — this is a static
Next.js app with no server-side integrations.
