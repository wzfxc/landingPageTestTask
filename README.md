# BYTEEX — Sustainable Loungewear Landing Page

A modern, fully responsive e-commerce landing page built as a frontend test assignment. The project delivers a pixel-perfect implementation of a provided Figma design using a component-driven architecture, strict BEM methodology, and a hybrid Contentful Headless CMS integration.

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + Vite |
| Styling | SCSS with strict BEM methodology |
| CMS | Contentful (Content Delivery API) |
| Fonts | Google Fonts (loaded via `index.html`) |
| Deployment | Static build via `vite build` |

---

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd landingPageTestTask
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the project root. This file is gitignored and will never be committed.

```env
VITE_CONTENTFUL_SPACE_ID=your_space_id_here
VITE_CONTENTFUL_ACCESS_TOKEN=your_access_token_here
```

> The app works without these keys — it will automatically fall back to local mock data for all sections. No blank screens or crashes.

### 4. Run the development server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

---

## Architecture & CMS Approach

### Component Structure

Each UI section is a self-contained, co-located component:

```
src/
├── api/
│   └── contentfulClient.js   # Singleton Contentful client (env-var driven)
├── components/
│   ├── Hero/                 # CMS-driven
│   ├── Benefits/             # CMS-driven (carousel images)
│   ├── BeYourBestSelf/       # CMS-driven (collage images)
│   ├── Faq/                  # CMS-driven (collage images + Q&A)
│   ├── FinalCta/             # CMS-driven (collage images)
│   ├── AnnouncementBar/      # Static (local mock)
│   ├── Header/               # Static (local mock)
│   ├── HowToOrder/           # Static (local mock)
│   ├── Reviews/              # Static (local mock)
│   ├── InfoBanner/           # Static (local mock)
│   └── ui/
│       └── CtaButton/        # Reusable shared UI component
├── hooks/
│   └── useCmsContent.js      # Central concurrent data-fetching hook
├── data/
│   └── mockData.js           # Complete fallback dataset
└── styles/
    ├── variables.scss        # Design tokens (colors, fonts, breakpoints)
    └── base.scss             # CSS reset & global styles
```

### Hybrid CMS Strategy

A **deliberate hybrid approach** was chosen for Contentful integration, balancing real-world practicality with the goal of demonstrating Headless CMS proficiency.

**Contentful-driven sections** (dynamic, image-heavy content that a marketing team would update frequently):
- `Hero` — headline, feature list, CTA label, and photo collage
- `Benefits` — product lifestyle carousel images
- `BeYourBestSelf` — editorial photo collage
- `FAQ` — accordion Q&A and decorative collage
- `FinalCta` — hero product collage

**Statically served sections** (structural UI unlikely to change per campaign):
- `AnnouncementBar`, `Header`, `HowToOrder`, `Reviews`, `InfoBanner`

**Rationale for this split:**
1. **Avoids over-engineering** — fetching static navigation labels from a CMS adds network overhead with zero editorial value.
2. **Reduces API payload** — fewer content types and entries mean faster cold-start fetches.
3. **Improves maintainability** — developers can see exactly which sections are CMS-editable at a glance.
4. **Zero-flicker UX** — all state is initialised with complete mock data. CMS data silently updates the UI in the background without any loading spinners or layout shift.

### Data Fetching Pattern

All CMS requests fire **concurrently** via `Promise.all` inside a single `useCmsContent` hook:

```js
const [heroEntry, benefitsResponse, beYourBestSelfResponse, faqResponse, finalCtaResponse] =
  await Promise.all([
    client.getEntry(HERO_ENTRY_ID),
    client.getEntries({ content_type: 'benefits', limit: 1 }),
    client.getEntries({ content_type: 'beYourBestSelf', limit: 1 }),
    client.getEntries({ content_type: 'faqSection', limit: 1 }),
    client.getEntries({ content_type: 'finalCta', limit: 1 }),
  ]);
```

Each parser function then **merges CMS fields on top of local mock data**, so a partially populated CMS entry never results in a broken UI.

---

## How This Project Meets the Evaluation Criteria

### Fidelity to Design

The implementation follows the Figma design to pixel-level precision:
- **Strict BEM** (`block__element--modifier`) is enforced across all 13 SCSS files with no ad-hoc utility classes.
- Design tokens (colors, typography scale, spacing, breakpoints) are centralised in `variables.scss` and consumed via `@use`.
- Section-level spacing, font weights, letter-spacing, and border radii match the Figma spec.
- Mobile layouts were adapted from additional reference screenshots provided during the assignment, covering all 10 sections.

### Code Quality

- **Component-driven architecture** — each section is an isolated, single-responsibility component receiving a typed `data` prop.
- **DRY principles** — the `<CtaButton />` component (with its optional 5-star review snippet via `showSnippet` prop) is reused across four different sections without duplication.
- **Clean state management** — no global state library needed; the `useCmsContent` hook is the single source of truth for all remote data. Components remain "dumb" consumers of their `data` prop, agnostic to whether content originates from Contentful or local mocks.
- **No dead code** — no `console.log` statements, no commented-out blocks, no unused imports.

### Use of Git

> *(Add your branching strategy notes here — e.g., feature branches per section (`feat/hero-section`, `feat/reviews-carousel`), Conventional Commits (`feat:`, `fix:`, `style:`, `chore:`), pull requests merged to `main` after self-review.)*

### Responsiveness & Cross-Browser Compatibility

- **Mobile-first** SCSS: base styles target mobile, with `min-width` breakpoints for tablet (`768px`) and desktop (`1200px`).
- **Custom touch carousels** — `scroll-snap-type: x mandatory` with hidden scrollbars delivers native-feeling swipe on iOS/Android without any JavaScript library dependency.
- **Horizontal overflow eliminated** — `overflow-x: hidden` + `box-sizing: border-box` applied to all sections with absolute-positioned decorative elements (collages, arrows) to prevent viewport bleed.
- **Fluid images** — all images use `width: 100%; height: auto` with percentage-based constraints on mobile to prevent overflow.
- Tested on Chrome, Firefox, Safari, and mobile Chrome/Safari via DevTools device simulation.

### Performance Optimization

- **Concurrent data fetching** — `Promise.all` ensures all 5 Contentful requests resolve in parallel, not sequentially, minimising total fetch time.
- **Lazy loading** — `loading="lazy"` applied to all non-above-the-fold images.
- **No layout shift** — mock data initialises state synchronously, so the page renders a complete layout on the very first paint.
- **CSS minification** — handled automatically by Vite's production build pipeline via `vite build`.
- **Zero runtime JS for static carousels** — the Benefits section carousel uses native CSS `scroll-snap` with no `setInterval`, `requestAnimationFrame`, or JavaScript animation loops.

---

## Build for Production

```bash
npm run build
```

Output is placed in the `dist/` folder and is ready for deployment to any static hosting provider (Vercel, Netlify, GitHub Pages).
