# NSSR Website

The official site of the **Nepalese Society of Student Researchers** — a national,
student-governed organisation fostering authentic scientific inquiry in Nepal.

Built with **Next.js 16 (App Router)**, **React 19**, **TypeScript** and **Tailwind CSS v4**.
The UI is a faithful port of the previous static HTML site; only the stack changed.

## Getting started

```bash
pnpm install
pnpm dev        # http://localhost:3000
```

> Use `localhost`, not the machine's IP. Next.js blocks cross-origin dev resources,
> which silently breaks hydration when you open `http://127.0.0.1:3000`.

## Scripts

| Command | What it does |
| --- | --- |
| `pnpm dev` | Dev server |
| `pnpm build` | Production build |
| `pnpm start` | Serve the production build |
| `pnpm lint` | ESLint (flat config) |
| `npx tsc --noEmit` | Type check (`typecheck` is not a package script) |
| `pnpm verify` | Link + image sweep across every route (see below) |

`pnpm verify` builds nothing; it expects a running server. It is most useful
against `pnpm start`:

```bash
pnpm build && pnpm start -p 3100
pnpm verify --base http://localhost:3100
```

## Routes

Thirteen pages, all statically prerendered.

| Route | Page |
| --- | --- |
| `/` | Home — hero, mission, pillars, impact, focus areas, recent proceedings, partners |
| `/events` | Events directory, split into Workshops and Online Talks |
| `/events/[id]` | Event detail — body, metadata, session gallery, proceedings PDF |
| `/blog` | The Dispatch — post list and sidebar |
| `/blog/[slug]` | Blog post |
| `/gallery` | Visual archive, 105 photos with a lightbox |
| `/team` | Leadership, advisory board, college representatives (tabbed) |
| `/research` | Research overview with sticky spotlight section |
| `/nsrf` | NSSR Summer Research Fellowship |
| `/outreach` | Outreach hub |
| `/science-beyond-classroom` | Science Beyond the Classroom |
| `/student-empowerment` | Student Empowerment Initiative |
| `/research-pathways` | Research Pathways |
| `/membership` | Participation Pathways and the rights matrix |
| `/workshop` | Workshops |

## Project layout

```
src/
  app/                 routes; layout.tsx owns the header, footer and metadata
  components/          interactive pieces (header, footer, lightbox, tabs, galleries)
  lib/                 typed content: events, posts, team, gallery, site
  app/globals.css      the whole design system
public/                images, gallery photos, proceedings PDFs
scripts/verify.mjs     link + image sweep
```

### Content lives in `src/lib`

Events, blog posts, team members and gallery photos are typed TypeScript modules,
not JS objects injected at runtime. `lib/events.ts` carries both the detail
record and the shorter "feed" title/poster/ISO-date that the home page's Recent
Proceedings strip and the archive ordering use.

Adding an event means adding one object to `events` in `src/lib/events.ts`; the
archive grid, the detail route and the home page all pick it up.

### The design system

`src/app/globals.css` is the previous `main.css` (about 155 KB) wrapped in an
explicit `@layer components`, preceded by a `@theme` block that replaces what
Tailwind v4's removed JS config file used to declare.

Two things in there are load-bearing and easy to undo by accident:

1. **Layer order** is declared explicitly as
   `@layer theme, base, components, utilities;`. Tailwind v4 puts layered CSS
   below unlayered CSS, so without this the design system's rules would start
   beating utility classes.

2. **Tailwind v3 compatibility pins.** The previous site was built against the
   Tailwind CDN, which served v3. v4 removed the `line-height` that v3 paired
   with every `text-*` utility, retuned the leading/radius/shadow scales, and
   reorders the generated rules. The `@theme` block re-pins the v3 numbers, and
   a trailing `@layer utilities` block re-asserts the paired line-heights for
   the `md:`/`lg:` variants only — in v3 a responsive `text-*` beat a
   `leading-*` utility while an unprefixed one did not. Removing either half
   silently re-flows the whole site.

### The header dropdown is Tailwind, not CSS

`.nav-dropdown-*` / `.dropdown-*` rules were removed from `globals.css`. The
Research and Outreach submenus are styled with Tailwind utilities declared at
the top of `src/components/site-header.tsx`. Those utilities still read from the
design system's custom properties (`bg-[var(--bg-glass-strong)]`,
`shadow-[var(--nssr-radius-md)]`, `transition-[var(--transition-premium)]`, …),
so nothing drifted visually — but edit the header component, not the
stylesheet, to restyle them.

Open state is driven entirely by React (`openDropdown`), with hover and focus
routed through `onMouseEnter`/`onFocus` rather than CSS `:hover`. That keeps
one source of truth so two menus can never be open at once.

Behaviour:

| Surface | Label (RESEARCH / OUTREACH) | Arrow |
| --- | --- | --- |
| Desktop (≥1025px) | navigates to `/research`, `/outreach` | toggles the submenu |
| Drawer (≤1024px) | toggles the accordion | toggles the accordion |

Both triggers call `preventDefault` + `stopPropagation`. Without that the click
bubbles to the drawer listener and closes the drawer in the same tick, so the
submenu opens behind a drawer that has just vanished.

## Assets

`public/` holds roughly 360 MB of photography under the original folder layout,
so image paths in `src/lib` match the old site's markup. These are tracked with
**Git LFS** (see `.gitattributes`); never commit them as regular blobs.

Assets were copied with their original paths rather than renamed, and
byte-identical duplicates were dropped.

## Deployment

The app is fully static, so any host that serves Next.js works (`next build` then
`next start`). `metadataBase` is set to `https://nssrnepal.org/` in
`src/app/layout.tsx` — update it if the domain changes, since it drives absolute
Open Graph URLs.

## Accessibility notes

- One `<h1>` per page, including event detail pages.
- Every `<img>` has an `alt`; decorative and lightbox images use `alt=""`.
- The skip link targets `<main id="main">` in the root layout.
- Colour contrast and focus rings come from the design system; do not override
  them per-component.