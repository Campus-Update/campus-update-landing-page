# Campus Update — Landing Page

React + Tailwind implementation of the full **Landing Page** Figma frame (`190:1646`), built 1:1 from design-file specs pulled via the Figma API, and verified against Figma renders with headless-browser screenshots at the 1728px design width (built page: 6944px tall vs 6955px in Figma).

## Sections → components

| Section | Component | Figma node |
| --- | --- | --- |
| Navbar (logo, centered pill nav, dark CTA, mobile menu) | `src/components/Navbar.jsx` | `100:53450` |
| Hero (headline, CTAs, waitlist capture, campus photo) | `src/components/Hero.jsx` | `100:53405` |
| How it works (3 step cards + 2 photos) | `src/components/HowItWorks.jsx` | `167:38` |
| Features (6 gradient cards, 3×2) | `src/components/FeaturesSection.jsx` | `177:39806` |
| Why Campus Update (bento grid with 3D icon panels) | `src/components/ReasonsSection.jsx` | `185:160` |
| Early-access banner (full-bleed purple) | `src/components/EarlyAccessBanner.jsx` | `186:537` |
| Campus showcase photo | `src/components/CampusShowcase.jsx` | `186:553` |
| Footer (dark panel, link columns, glow, giant wordmark) | `src/components/Footer.jsx` | `186:553` |

## Branches

- `main` — navbar + first two sections.
- `updates` — teammate's first pass at the second half.
- `polish` — **this work**: second half rewritten to match Figma exactly + fixes (sits on top of `updates`). Push with `git push origin polish` and merge via PR.

## Design tokens (from the Figma Design System page)

- **Fonts** — `Archivo` 400/500 (UI), `Ojuju` 600 (display), `Clash Grotesk` 400 (logo). Loaded in `index.html` (Google Fonts + Fontshare).
- **Colors** — brand purple `#4F46E5`, deep `#201C5C`, soft `#EEEDFD`, mid `#726BEA`, ink `#0E0C0E`, charcoals `#1F1F1F` / `#111214`; nav pill `#F5F5F5` / border `#DEE5ED`; footer glow `#4F46E5`.
- **Shadows / radii / fonts** — predefined in `tailwind.config.js` (`shadow-cta`, `shadow-input`, `shadow-nav-pill`, `shadow-chip`, `shadow-badge`).
- **Layout** — 1500px content column at 1728px (`.container-page` in `src/index.css`); bento/feature grids use the design's exact gaps (41/27 and 20/44).

## Run it

```bash
npm install
npm run dev     # http://localhost:5173
npm run build
```

## Notes / judgment calls

- Figma's CTAs literally read "Join theWaitlist" — rendered as **"Join the Waitlist"** (spacing fix); flag the source typo to the designer.
- `Features` / `Why Us` nav anchors: `#features` / `#why-us`; footer links wired to the same anchors.
- Waitlist forms prevent-default — wire to your API when ready.
- Responsive: pill nav → hamburger under `lg`; feature & bento grids stack under `lg`; footer wordmark scales with `clamp()`.
- The 3D bento icons, campus photos and logo marks are exported Figma assets in `public/`.
- Reverted teammate's `vite: ^8.3.0` bump to `^5.4.11` — vite 8 conflicts with `@vitejs/plugin-react`'s peer range and broke `npm install`.
