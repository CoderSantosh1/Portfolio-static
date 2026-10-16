# Santosh Kumar — Portfolio (Next.js)

Next.js (App Router, TypeScript) version of the static HTML portfolio in the parent folder.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (all pages are static)
```

## Where things live

- `lib/data.ts` — all text content: services, projects, skills, experience, reviews, FAQ. Edit here to change what the site says.
- `components/sections.tsx` — reusable sections (page hero, stats, timeline, reviews, FAQ, CTA, footer).
- `components/Sidebar.tsx` — sidebar navigation and mobile drawer.
- `app/*/page.tsx` — one file per page.
- `app/theme.css` — the cream / gold design system (shared with `../css/theme.css`).
- `app/home.css` — home hero and featured-projects styles.
- `app/globals.css` — base reset and sidebar layout.
