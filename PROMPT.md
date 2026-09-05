# Build brief — Royal Eye Solar Power website

**How to use this file.** Put these three things in an empty directory, then open
Claude Code there and say: *"Read PROMPT.md and build it."*

```
project/
├── PROMPT.md                 ← this file
├── CONTENT.md                ← all final copy. Use verbatim.
├── royal-eye-assets/         ← unzipped from royal-eye-assets.zip
│   ├── README.md             ← asset inventory, variables, known gaps
│   ├── brand/                ← logo variants, favicons
│   ├── images/               ← photographs and cutouts
│   └── svg/                  ← panel, Kerala map, bifacial diagram, textures
└── ROYAL_EYE_BROCHURE.pdf    ← optional, source reference only
```

---

## Read these first, in this order

1. **This file** — end to end, before writing any code.
2. **`CONTENT.md`** — every heading, paragraph, label, error message and meta tag
   is already written and polished. Use it verbatim. Do not rewrite it, do not
   paraphrase it, do not generate placeholder copy. If a section here and
   `CONTENT.md` disagree, `CONTENT.md` wins on wording and this file wins on
   structure.
3. **`royal-eye-assets/README.md`** — what each asset is, the CSS variables each
   SVG exposes, which brochure images were deliberately excluded and why, and what
   still needs sourcing.

`ROYAL_EYE_BROCHURE.pdf` is reference only. Everything usable has already been
extracted into `royal-eye-assets/`. Don't re-extract, and don't lift brochure prose
— it has already been rewritten in `CONTENT.md`.

---

## 0. The quality bar

The client is a 25-year-old solar company in Kerala. The target is work that a
serious design studio would ship: art-directed, not assembled. Every prohibition
below is a tell that a site was generated rather than designed.

**Never:**

- Center every section. Vary the axis — some sections left-aligned to a hard
  measure, some asymmetric two-column at unequal widths (7/5, not 6/6).
- Build a row of equal cards each with an icon-in-a-circle, a bold title and two
  lines of grey text. This is the single most recognisable AI layout. §5 tells you
  what to build instead for the one section where you'll be tempted.
- Write generic headings. `CONTENT.md` has real ones; there is no excuse.
- Use purple-to-pink gradients. Use gradient text on at most **one** element in
  the entire site.
- Use emoji. Icons are Lucide, 1.5px stroke, used sparingly.
- Put `rounded-2xl shadow-lg` on everything. Shadows are near-invisible on a dark
  ground; structure comes from hairline borders and surface elevation.
- Space sections uniformly. A dense technical section can sit tight; a statement
  section wants twice the air.
- Fade in every element identically on scroll.

**Always:**

- One idea per screen. Let large type and empty space do the work.
- Optical over mathematical alignment. Display type above 60px needs negative
  tracking (-0.035em) and tight leading (0.95–1.05).
- Treat numbers as design elements. `25`, `84`, `5–30%` get set large in the
  display face, never buried mid-sentence.
- Real photography wherever an asset exists.

---

## 1. Stack

Vite · React 18 · TypeScript · Tailwind CSS · Framer Motion · react-router-dom.
Static output only — `npm run build` emits a deployable `dist/`. No backend, no
CMS, no server functions.

Also: `lucide-react`, `@studio-freight/lenis`, `vite-plugin-svgr`,
`@fontsource/sora`, `@fontsource/inter`, `@fontsource/jetbrains-mono`.

Set `base: './'` in `vite.config.ts` so the build works unchanged on GitHub Pages,
Netlify and Vercel. Add `public/_redirects` containing `/* /index.html 200` and a
`404.html` fallback so client-side routes survive a hard refresh on either host.

```
src/
  routes/     Home.tsx  Products.tsx  Contact.tsx  NotFound.tsx
  sections/   one file per homepage section
  components/ Nav  Footer  CtaBand  Reveal  Marquee  StatNumber  BranchMap
              BifacialToggle  QuoteForm
  hero/       SunPathHero.tsx and its sub-parts
  lib/        motion.ts   content.ts   useMedia.ts   seo.ts
  styles/     index.css
```

**All copy from `CONTENT.md` goes into `src/lib/content.ts`** as typed objects. No
hardcoded strings in JSX. This makes a future Malayalam translation a config change
rather than a rewrite.

Copy `royal-eye-assets/{brand,images,svg}` into `public/` so paths resolve as
`/brand/logo-royaleye-light.png`, `/images/panels-city-sun.webp`, `/svg/...`.

---

## 2. Design system — use these exact values

Direction: **dark technical**. Deep navy-black ground, thin grid structure, one
electric amber accent that reads as sunlight. Premium energy infrastructure, not
consumer eco-cheer. The palette extends the client's existing logo — navy, lime
green, red wordmark — rather than replacing it.

Extend Tailwind's theme with these tokens. Don't use arbitrary values in JSX.

| Token | Hex | Role |
|---|---|---|
| `ink.950` | `#05070F` | page ground |
| `ink.900` | `#0A0E1A` | default surface |
| `ink.850` | `#0E1422` | raised surface |
| `ink.800` | `#141B2D` | card, input |
| `navy.700` | `#16205C` | brand deep (from logo) |
| `navy.500` | `#2A3A9E` | brand mid |
| `navy.300` | `#5A6BD6` | brand light, links on dark |
| `amber.400` | `#FFB020` | **primary accent** — sun, energy, all primary CTAs |
| `amber.300` | `#FFC94D` | accent hover |
| `amber.100` | `#FFE9BF` | accent text on dark |
| `lime.400` | `#8FD14F` | **secondary** (from logo) — efficiency and verified signals only |
| `fg.primary` | `#F3F5FB` | |
| `fg.secondary` | `#9BA3BC` | |
| `fg.muted` | `#646C87` | |
| `line.subtle` | `rgba(255,255,255,0.07)` | default hairline |
| `line.default` | `rgba(255,255,255,0.12)` | hover |
| `line.strong` | `rgba(255,255,255,0.20)` | |

**Accent discipline.** Amber is the only saturated colour on any given screen. One
amber-filled button per viewport; everything else is ghost or text link. Lime is
never a second CTA — it marks efficiency, savings and verification only. If a
screen has two amber fills, one of them is wrong.

### Typography

Self-host through `@fontsource`. Do not use a Google Fonts `<link>` — it blocks
first paint and costs you the performance budget in §8.

- **Display** — Sora, weights 500 and 600. Headlines, stat numerals, nav.
- **Body** — Inter, weights 400 and 500. All prose, labels, buttons.
- **Mono** — JetBrains Mono, weight 400. Spec values, model codes, phone numbers.

Never use weight 700 or above. At display sizes, 600 with tight tracking reads
heavier and more expensive than 700 ever does.

Fluid scale — define as CSS custom properties, consume through Tailwind
`fontSize`:

| Name | Size | Leading | Tracking |
|---|---|---|---|
| `display-xl` | `clamp(2.75rem, 7vw, 5.5rem)` | .95 | -.035em |
| `display-lg` | `clamp(2.25rem, 5vw, 3.75rem)` | 1.02 | -.03em |
| `display-md` | `clamp(1.75rem, 3.4vw, 2.5rem)` | 1.1 | -.02em |
| `title` | `1.25rem` | 1.3 | -.01em |
| `body-lg` | `1.0625rem` | 1.7 | — |
| `body` | `0.9375rem` | 1.7 | — |
| `caption` | `0.8125rem` | 1.5 | — |
| `eyebrow` | `0.6875rem` uppercase, weight 500 | 1.5 | .18em |

Prose measure caps at 68ch. Body text never runs the full width of a 1440px
viewport.

### Spacing and form

- 4px base scale. Section padding `py-24 md:py-32 lg:py-40`, varied deliberately
  per section as §0 requires.
- Max content width 1240px, gutters `px-6 md:px-10`. The hero and one or two other
  elements should deliberately break the container to full-bleed.
- Corners: 4px on inputs and small controls, 10px on cards, 999px on pills.
  Nothing larger — big radii read as consumer app, not infrastructure.
- Borders: 1px `line.subtle` at rest, `line.default` on hover. Hairlines do the
  structural work shadows would do on a light theme.
- **Background structure:** use `/svg/grid-texture.svg` as a repeating
  `background-image`, masked with a radial gradient so it fades at section edges.
  Subtle enough that you only notice it when looking for it. This single detail
  does more than anything else to separate "dark tech" from "dark theme".

---

## 3. Motion system

Rich and scroll-driven, but no animation may delay readability.

Put the shared values in `lib/motion.ts` and import them everywhere. No inline
transition objects.

```ts
export const easeOut  = [0.16, 1, 0.30, 1];      // entrances
export const easeSnap  = [0.30, 0.00, 0.20, 1];   // UI state changes
export const spring    = { type: 'spring', stiffness: 220, damping: 26, mass: 0.9 };
```

- **Entrance:** opacity 0→1 with y 24→0, 0.7s, `easeOut`. Trigger via
  `whileInView` with `{ once: true, margin: '-12% 0px' }`.
- **Stagger** children at 60–90ms, never more than 6 in a group — beyond that the
  last item arrives late and reads as lag.
- **Text reveals:** split display headlines into **words**, not letters (letter
  animation is a tell), staggered 40ms behind a y-clip mask.
- **Parallax:** `useScroll` + `useTransform` on background layers only. Never on
  foreground text — it makes reading uncomfortable. Max displacement 12svh. Wrap
  every parallax output in `useSpring`; raw scroll-linked transforms feel janky on
  trackpads.
- **Hover physics:** cards lift `y:-4` and brighten border to `line.default` over
  0.25s `easeSnap`. Buttons `scale(0.985)` on press. The amber CTA gets a soft
  amber glow ring on hover only, never at rest.
- **Counters:** the four trust-strip figures count up once on enter over 1.2s with
  an ease-out curve so they decelerate into the final value.
- **Marquee:** the partner names from `CONTENT.md` §2.7 on a duplicated track,
  CSS transform animation, paused on hover, `will-change: transform`.
- **Route transitions:** 240ms crossfade with an 8px y-offset via
  `AnimatePresence`. Reset scroll to top on navigate.
- **Lenis** smooth scroll, lerp 0.09. Disabled entirely under reduced motion.
- **Hard requirement — `prefers-reduced-motion: reduce`:** entrances resolve
  instantly to final state, the hero renders one static frame, the marquee stops,
  counters show final values, Lenis is off. Test it. Do not just add the media
  query and assume.
- Animate **only** transform and opacity. Never width, height, top or
  background-color on scroll.

---

## 4. The hero — signature centerpiece

This is what the whole site is judged on. Budget real effort here.

Full-viewport (`100svh`, not `100vh` — mobile browser chrome) containing an
animated solar installation in scalable SVG. No images, no canvas, no WebGL.

**Building block:** `/svg/solar-panel.svg` is already built for this — a 6×10 cell
grid with busbars on both axes, a frame, and an overlay `#sheen` rect for the light
sweep. Import it through `vite-plugin-svgr` and instance it per row. Its CSS
variables (`--cell`, `--glass`, `--frame`, `--busbar`, `--sheen`,
`--sheen-opacity`) are the handles you animate. See the asset README.

**Composition:**

- Panel rows receding across the lower third in isometric-ish false perspective —
  decreasing scale, increasing y. Hand-built perspective is more controllable and
  cheaper to render than a real 3D projection.
- A sun travelling a slow arc on a ~20s loop. Lift the gradient stops from
  `/svg/sun-glow.svg` into an inline `<radialGradient>` so one element can be
  transformed by the loop. As the sun moves:
  - its amber glow follows, peaking in intensity at the arc apex
  - panel faces shift `--cell` from cool navy toward warm navy-amber as the
    incident angle improves
  - thin light rays sweep from sun to panel faces, opacity tied to the same value
  - ground shadows shorten, lengthen and rotate with the sun
- Energy pulses: small amber dots travelling wire paths from the array to a small
  inverter glyph at lower right. Staggered offsets so they don't march in lockstep.
- The grid texture behind it all, with the sun's glow locally masking it so the
  light appears to wash the grid out.

**Implementation:**

- **One** `requestAnimationFrame` loop driving a **single** sun-angle value.
  Everything else derives from it. Separate loops or per-element Framer animations
  are what make hero animations drop frames.
- Drive SVG attributes through `useMotionValue` / `useTransform` on `motion.g` so
  React never re-renders on an animation frame. **Zero `setState` in the loop.**
- Pause on `IntersectionObserver` exit and on `document.hidden`. A hero animating
  off-screen is a battery complaint.
- Under 768px: two panel rows, drop the ray sweep, keep the sun arc and glow.
- Must hold 60fps on a mid-range Android. If it can't, cut elements until it does.
  A simpler hero at 60fps beats an elaborate one at 34fps.

**Over the top:** the eyebrow, H1, sub and CTA pair from `CONTENT.md` §2.1. Verify
text contrast at the arc's **brightest** frame, not just at load — add a
bottom-to-top `ink.950` scrim behind the text block if it fails. Scroll cue at the
bottom, fading out after 8px of scroll. `aria-label` from `CONTENT.md` §5.

---

## 5. Sitemap and sections

Three routes: `/`, `/products`, `/contact`, plus a 404. All copy in `CONTENT.md`
under the matching numbers.

**Nav** — transparent over the hero; past 80px of scroll it takes an `ink.900/85`
background with `backdrop-blur-xl` and a bottom hairline. Logo left
(`/brand/logo-royaleye-light.png` — the light variant; the dark one vanishes on
`ink.900`), three links center-right, amber **Call now** pill hard right as a real
`tel:` link. Mobile: full-screen overlay sliding from the right, with all four
phone numbers as large tap targets.

**Homepage**, in order — content in `CONTENT.md` §2:

1. **Hero** — §4 above.
2. **Trust strip** — one hairline-bordered row, four figures, mono numerals,
   animated counters. Tight vertical padding; this is a rule, not a section.
3. **About** — asymmetric 7/5. Copy left, `installer-at-work.webp` right,
   parallaxing, with a 1px amber frame offset 12px down-right of the image edge.
   The pull quote sets large beside it.
4. **Product pillars** — four categories. **This is the section where you will be
   tempted to build a 4-up card grid. Don't.** Two large cards and two small at
   differing vertical offsets, each linking to its `/products` anchor. `CONTENT.md`
   marks which are large and which are small.
5. **Why Royal Eye** — the technical credibility section; be confidently nerdy.
   Set `5–30%` as a display-lg mono figure. Includes the **bifacial toggle**: use
   `/svg/bifacial-diagram.svg`, whose `#front-capture` and `#rear-capture` groups
   toggle and whose `#yield-value` / `#yield-caption` swap between the two states
   in `CONTENT.md` §2.5.
6. **Benefits** — four points as a numbered editorial list (01–04) with hairline
   dividers. Not cards.
7. **Brand marquee** — §3 above.
8. **Coverage** — use `/svg/kerala-branches.svg`. Six markers already positioned
   with leader lines to label gutters; each is a focusable
   `<g class="branch" data-city="…" role="button">` with `.halo`, `.dot` and
   `.leader` children. Wire hover and focus to the halo radius and label colour,
   and pulse the markers in sequence on enter. Keep the *"Map is indicative"*
   footnote. **Do not embed a Google Maps iframe** — it destroys both the aesthetic
   and the performance budget.
9. **CTA band** — full-bleed, amber-tinted, three actions in clear hierarchy: Call
   now (amber fill, largest), WhatsApp (ghost), written quote (text link).
10. **Footer** — four columns per `CONTENT.md` §1, hairline top border, bottom bar.

**`/products`** — anchored sections `#panels`, `#inverters`, `#batteries`,
`#materials`, with a sticky anchor nav. The inverter comparison is a **real table**
— three columns, hairline borders, mono spec values. The installation-materials
list is a dense multi-column catalogue index grouped into the four categories in
`CONTENT.md` §3.4; let it look like a proper index rather than prose, because the
breadth is the point. The `84 months` battery warranty gets set as a large mono
figure, not a sentence.

**`/contact`** — four `tel:` tap targets with mono numerals, the `wa.me` link,
`mailto:`, head office address, branch list, and the quote form. Form fields,
options, validation messages and both result states are all specified in
`CONTENT.md` §4. Post to Formspree with the endpoint as an obvious
`VITE_FORM_ENDPOINT` env placeholder. Real inline validation, a loading state on
the button, and a success state that **replaces** the form. Never `alert()`.

---

## 6. Content rules

Everything is written. Your job is to place it, not to author it.

- **Use `CONTENT.md` verbatim.** Do not rewrite, paraphrase, expand or "improve"
  it. Do not generate lorem ipsum or placeholder text anywhere.
- **Never invent** prices, subsidy figures, project counts, installed capacity,
  customer numbers, testimonials, efficiency percentages beyond those given, or
  certifications. If a design element wants a stat that doesn't exist, cut the
  element.
- **Two figures are exact and load-bearing:** the bifacial gain is **5–30%,
  depending on installation conditions**, and the battery warranty is **84
  months**. Don't round them, average them or collapse them to one number.
- Sentence case for all headings and buttons. No exclamation marks. Indian
  English.
- The source brochure's typos are already fixed in `CONTENT.md` §0. Don't
  reintroduce them from the PDF.

---

## 7. Assets

Everything usable is in `royal-eye-assets/`. **Read its README before using
anything** — it documents each file, the CSS variables each SVG exposes, and three
things deliberately excluded.

Two that will bite you if you skip it:

- **Use `logo-royaleye-light.png` in the nav and footer.** The dark variant's black
  "Royal" is invisible on `ink.900`.
- **`SOLAR POWER` is not in the logo image.** Set it as type — Inter 500, uppercase,
  `0.24em` tracking, `fg.secondary`.

The battery product shot from the brochure was **excluded**: it shows a competitor's
Century Lithium Pro unit on a page selling Royal Eye's own REX brand. Use the
`84 months` figure typographically instead. Don't go back to the PDF for it.

Nothing was sourced from stock, because the machine that built the pack had no
network. If a section needs a photo that isn't in `images/`, pull one at build time
— the asset README lists the subjects worth searching. A good stock photo beats a
degraded real one.

Every image: `<picture>` with WebP first and the JPEG or PNG as fallback, explicit
`width` and `height` to reserve layout space, `loading="lazy"` below the fold,
`decoding="async"`, and the descriptive alt text given in `CONTENT.md`. Serve the
`-1200` / `-1000` / `-800` variants wherever the layout doesn't need full width.

---

## 8. Accessibility and performance — non-negotiable

- All body text at 4.5:1 minimum against its **actual** background, verified
  against the animated hero at its brightest frame too.
- Visible focus rings: 2px amber, offset 2px. Never `outline: none` without a
  replacement.
- Semantic landmarks, one `h1` per route, no heading level skips.
- Full keyboard operability: the mobile menu traps focus and closes on Escape; the
  bifacial toggle and the map markers are real buttons; the form is keyboard
  submittable.
- Decorative SVG gets `aria-hidden="true"`. The hero gets `role="img"` and the
  `aria-label` from `CONTENT.md` §5. The map and bifacial SVGs already carry
  `<title>` and `<desc>` — keep them.
- Tap targets 44×44px minimum, phone links especially.
- Lighthouse on mobile: performance ≥ 90, accessibility 100, best practices ≥ 95.
  LCP under 2.5s, CLS under 0.02.
- Route-level code splitting via `React.lazy`. Initial JS under 180KB gzipped.
- Full `<title>`, meta description, canonical and Open Graph tags per route from
  `CONTENT.md` §5, `og:image` pointing at `/images/og-image.jpg`, plus the
  `LocalBusiness` JSON-LD block specified there. This client will be found by
  local search — it matters. Do not emit `aggregateRating`, `review` or
  `priceRange`; there's no source data for any of them.
- Works from 320px to 2560px. Test 320, 375, 768, 1024, 1440 and 1920.

---

## 9. How to proceed

1. Read `CONTENT.md` and `royal-eye-assets/README.md` in full.
2. Scaffold, install, wire the Tailwind theme and `@fontsource` faces from §2, and
   write `lib/motion.ts` and `lib/content.ts` **first**. Copy the asset tree into
   `public/`.
3. **Build the hero second, before any other section**, and show it to me before
   continuing. It's the highest-risk piece and everything else is calibrated
   against it.
4. Then the homepage sections in order, then `/products`, then `/contact`, then the
   404.
5. Run the build. Fix every TypeScript error and console warning — zero tolerance.
6. **Self-review against §0 before telling me you're done.** Walk the site and ask
   of each section: is this centered by default? is this a row of equal cards? does
   this animation say anything? Where the answer is yes, redo it.
7. Write a project `README.md` covering local dev, the `VITE_FORM_ENDPOINT`
   variable, how to swap images, and the outstanding client asks from the asset
   README — a vector logo and a REX battery photo.

Ask me before deciding anything that changes the visual direction. Don't ask
permission for implementation details — make the call and tell me what you chose.
