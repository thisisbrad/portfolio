# BRAD.DEV — Claude Work Backlog

Tasks are ordered by priority. Work through them top to bottom.

---

## Bugs

### ~~1. Fix nav mega menu broken links~~ ✓ DONE
- Changed `post.slug` → `post.id.replace(/\.(md|mdx)$/, '')` in `src/components/Nav.astro:87`

### ~~2. Fix mobile nav~~ ✓ DONE
- Added hamburger button + animated drawer in `src/components/Nav.astro`
- Drawer shows all 4 writing sections with accent colors, icons, and taglines
- Desktop nav links hidden on mobile; drawer closes on link click

---

## Quick Wins

### ~~3. RSS feed~~ ✓ DONE
- Installed `@astrojs/rss`, added `site` to `astro.config.mjs`
- Created `src/pages/rss.xml.ts` — serves all posts sorted by date
- Uncommented RSS link in `src/components/Nav.astro`

### ~~4. Sitemap~~ ✓ DONE
- Installed `@astrojs/sitemap`, added to `astro.config.mjs` integrations
- Added `<link rel="sitemap">` + RSS autodiscovery to `src/layouts/BaseLayout.astro` head
- Added Sitemap link to `src/components/Footer.astro`

### ~~5. OG / social meta tags~~ ✓ DONE
- Added canonical URL, full Open Graph block, and Twitter Card to `src/layouts/BaseLayout.astro`
- Post pages automatically get `og:type=article`, `article:published_time`, and per-tag meta via `pubDate`/`tags` props
- `og:image` points to `/social-card.png` — add that file to `public/` when ready
- Fixed `post.slug` → `post.id` bug in `src/layouts/PostLayout.astro` prev/next nav links (bonus)

---

## Pages to Build

### ~~6. About page~~ ✓ DONE
- Created `src/pages/about.astro` with hero, decade timeline, teaching → dev section, stack grid, and connect block
- Cyan accent throughout; scroll-reveal on all sections; fully responsive
- Uncommented About link in `src/components/Nav.astro`
- **TODO:** Swap placeholder GitHub/LinkedIn URLs with real ones in `src/pages/about.astro` and `src/components/Footer.astro`

### 7. Projects section
- Routes: `/projects`, `/projects/side`, `/projects/open-source`, `/projects/experiments`
- Uncomment the Projects dropdown in `src/components/Nav.astro:106-133`
- Build index and sub-section pages matching the writing section style
