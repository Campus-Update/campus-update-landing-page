# Campus Update — Navbar + Hero + How-it-works

React + Tailwind implementation of the **Landing Page** Figma frame (`190:1646`), built 1:1 from the design-file specs pulled via the Figma API.

## What's implemented

| Piece | Component | Figma source |
| --- | --- | --- |
| Navbar (logo, centered pill nav, dark CTA, mobile menu) | `src/components/Navbar.jsx` | node `100:53450` |
| Section 1 — Hero (headline, sub-copy, Get Started, waitlist email capture, campus photo) | `src/components/Hero.jsx` | nodes `188:684`, `167:36` |
| Section 2 — "How it works" (badge, headline, 3 step cards, 2 images) | `src/components/HowItWorks.jsx` | node `167:38` |

## Design tokens (from the Figma Design System page)

- **Fonts** — `Archivo` 400/500 (UI), `Ojuju` 600 (display/heading + card numbers), `Clash Grotesk` 400 (logo wordmark). Loaded in `index.html` (Google Fonts + Fontshare).
- **Colors** — brand purple `#4F46E5`, deep purple `#201C5C`, soft lavender `#EEEDFD`, mid purple `#726BEA`, ink `#0E0C0E`, charcoal card `#1F1F1F`; nav pill bg `#F5F5F5` / border `#DEE5ED`.
- **Shadows / radii** — predefined in `tailwind.config.js` (`shadow-cta`, `shadow-input`, `shadow-nav-pill`, `shadow-chip`, `shadow-badge`).
- **Layout** — 1500px content column at the 1728px design width (`.container-page` utility in `src/index.css`).

## Run it

```bash
npm install
npm run dev     # http://localhost:5173
npm run build   # production build
```

## Dropping into your existing repo

1. Copy `src/components/{Navbar,Hero,HowItWorks}.jsx` into your components folder.
2. Copy the `public/images/*` and `public/logo-mark.svg` assets.
3. Merge into your Tailwind setup:
   - **Tailwind v3** — merge `fontFamily`, `colors.brand`, `boxShadow` from `tailwind.config.js`, and the `.container-page` component class from `src/index.css`.
   - **Tailwind v4** — declare the same values in `@theme` (e.g. `--font-display: "Ojuju", sans-serif; --color-brand-purple: #4F46E5; --shadow-cta: ...;`).
4. Add the three `<link>` font tags from `index.html`.

The components only use named utilities defined above + arbitrary values, so they port to either Tailwind version unchanged.

## Notes / judgment calls

- The Figma navbar button literally says "Join theWaitlist" — I rendered it as **"Join the Waitlist"** (spacing fix). Revert if the typo was intentional.
- Nav links: `Home` is active; `How it works` anchors to `#how-it-works`. `Features` / `Why Us` are `#` placeholders for your teammate's sections.
- The waitlist form and CTAs prevent-default for now — wire them to your API when the backend is ready.
- Responsive behavior added on top of the desktop spec: pill nav collapses to a hamburger + dropdown under `lg`, hero stacks, type scales down.
- Assets (`campus-hero.png`, `phone-news.png`, `news-web.png`, `logo-mark.svg`) were exported from Figma and live in `public/`.
