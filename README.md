# Royal Eye Solar Power — website

Static marketing site for Royal Eye Solar Power, Thrissur. Vite + React 18 +
TypeScript + Tailwind + Framer Motion. Three routes (`/`, `/products`,
`/contact`) plus a 404 today; `CONTENT.md` now also specifies a fourth route,
`/projects`, not yet built — see "v2 content update" below.

## Local development

```bash
npm install
npm run dev     # http://localhost:5173
```

```bash
npm run build       # type-checks, builds to dist/, copies index.html to 404.html
npm run preview     # serve the built output
npm run typecheck
```

## Configuration

There are no environment variables. One value needs setting once, in
`src/lib/content.ts`:

```ts
export const formEndpoint = 'https://formspree.io/f/REPLACE_WITH_FORM_ID';
```

That is the endpoint the `/contact` quote form POSTs to as
`multipart/form-data`. Built against Formspree; anything that accepts a form
POST and returns 2xx works.

**This is still the literal placeholder as of this update — the contact form
does not currently send anywhere and always shows the failure state.** See
"Known issues" below.

The site origin used for `canonical` and `og:*` URLs is hardcoded as
`https://royaleyesolar.com` in the same file (`siteUrl`).

## Deploying

`vite.config.ts` sets `base: './'`, so the build is host-agnostic — it works
unchanged on Netlify, Vercel and GitHub Pages. Client-side routing needs a
catch-all rewrite, which is handled two ways:

- `public/_redirects` (`/* /index.html 200`) covers Netlify.
- `404.html`, copied from `index.html` by the `postbuild` script, covers GitHub
  Pages, which serves that file on an unmatched path before any JS runs.

On Vercel, add a rewrite of `/(.*)` to `/index.html`.

## Where things live

```
src/
  routes/      one file per route, lazy-loaded
  sections/    one file per homepage section, in page order
  components/  Nav Footer CtaBand Reveal Marquee StatNumber
               BranchMap PhotoFilmstrip QuoteForm
  hero/        the animated hero — SunPathHero plus its parts
  lib/         content.ts  motion.ts  seo.ts  useMedia.ts  useCssVar.ts
  assets/svg/  SVGs imported as React components via vite-plugin-svgr
  styles/      index.css — tokens, component classes, keyframes
public/        brand/ images/ svg/ — referenced by URL
```

**All copy lives in `src/lib/content.ts`** as typed objects, keyed to the
sections of the original `CONTENT.md`. There are no copy strings in JSX, so a
Malayalam translation is a change to one file rather than a rewrite.

Design tokens (colours, the fluid type scale, radii) are in
`tailwind.config.ts`; the `clamp()` values behind the display sizes are CSS
custom properties in `src/styles/index.css`. Shared easing curves, entrance
variants and the Lenis setup are in `src/lib/motion.ts` — no inline transition
objects anywhere else.

## The hero

`src/hero/` runs a single `requestAnimationFrame` loop that advances one
MotionValue over a 20-second cycle. Everything else — sun position, glow, panel
cell colour, sheen, ray angle, shadow length and direction — is a `useTransform`
of that one value, so no animation frame triggers a React render. The loop stops
scheduling entirely when the hero scrolls out of view or the tab is hidden.

Under `prefers-reduced-motion: reduce` the loop never starts: the hero renders a
single frame at the arc's apex, Lenis is off, the marquee stops and the counters
show their final values.

Below 768px the hero becomes a top band with the copy on solid ink beneath it,
uses two panel rows instead of four, drops the ray sweep and energy pulses, and
uses the shorter headline from `CONTENT.md` §2.1.

## Swapping images

Photographs and cutouts live in `public/images/`, referenced from
`src/lib/content.ts` (`about.image`, `products.panels.image`,
`products.materials.images`). To replace one:

1. Drop the new file into `public/images/`, WebP plus a JPEG or PNG fallback.
2. Update the path, `width`, `height` and `alt` in `content.ts`.

Keep `width`/`height` accurate — they reserve layout space and are what holds
CLS down. Everything renders through `<picture>` with WebP first.

---

## v2 content update

`CONTENT.md` and the site were updated against several new sources: a client
WhatsApp broadcast of panel brands, a consultant's content-strategy brief,
five real completed-project records with photos, an older single-file
website built from the same source material, and the original
`Royal_Eye_Brochure.pdf` company profile. None of that source material was
pasted in directly — it's rewritten into the site's existing voice, the same
way the original brochure prose was rewritten rather than lifted.

### Implemented

- **Phone number restructure.** **95395 33852** is now the primary
  direct-enquiry/WhatsApp number, used by the nav CTA, hero, CTA band, every
  "Call now" button, the floating WhatsApp button and `jsonLd.telephone`
  (listed first). Four office numbers sit behind it — **98466 53834**
  replaces 70340 22606, and 98468 22578 is corrected to **98468 22678** — shown
  as a secondary tier on `/contact` (`directPhone` + `officePhones` in
  `content.ts`) and in the footer.
- **Founding year kept at 2000 / "25 years"** across the trust strip, hero and
  About, despite a public listing showing 2018 — client confirmed 2000 is
  correct. Noted here for the record.
- **New panel brands** — Waaree, Emvee, Avaada — added to the marquee,
  `/products#panels` and the footer dealer line, alongside a DCR/Non-DCR
  breakdown with specific brand×technology pairings
  (`products.panels.dcr` in `content.ts`). UTL is confirmed still valid for
  panels (the original brochure explicitly lists it as a panel dealer brand,
  cross-checked against the newer WhatsApp list that omitted it) — kept in
  the panels lead line.
- **Recognition / trust signals** — an MNRE rooftop-solar vendor directory
  listing and a Justdial rating (4.3/5, 15 ratings), added as a footer
  bottom-bar line, attributed as third-party. Deliberately **not** added to
  the `LocalBusiness` JSON-LD as `aggregateRating` — that field asserts the
  rating as verified first-party data, which this isn't.
- **KSEB named explicitly** in the on-grid/hybrid/off-grid configuration
  descriptions on `/products#panels`, replacing the generic "the grid."
- **Government subsidy mention**, kept deliberately generic ("government
  support may be available... subject to eligibility") on the `/products` CTA
  — no specific scheme name or figure, since none was confirmed.
- **`/projects` route built** — five real, documented installations (20 kW to
  250 kW). Five supplied photos aren't tied to any specific project (client
  instruction) and render as general, unattributed work photography near the
  top of the page (`gallery-1.*`, `-3`, `-7`, `-9`, `-10` — trimmed down from
  ten, too many frames in one carousel). A second `PhotoFilmstrip` further
  down is a general "work across Kerala" gallery (`projects.workGallery` in
  `content.ts`) — one confirmed **Project 5** aerial shot (250 kW, Sreevalsam,
  Guruvayur Temple Devaswam, `project-5-aerial-1.*`) plus four site photos
  from other installations, picked for geographic spread out of twelve
  supplied (Thiruvananthapuram, Koodathumpoyil, Ernakulam, Podikkundu —
  `work-{location}.*`). These are straight from the field camera app and
  each carries its own baked-in location/GPS/timestamp overlay, kept as-is
  rather than cropped out (client instruction) — inconsistent with the
  clean, unwatermarked photography everywhere else on the site, flagged here
  for the record. `gallery-2.*`, `-4`, `-5`, `-6`, `-8`,
  `project-5-frame.*`, `project-5-aerial-2.*`, and `work-naripatta.*`,
  `-vaikom`, `-azhikode`, `-alathur`, `-pathirippatta`, `-puthenchira`,
  `-athavanad`, `-parakkadavu` are now unused (kept on disk, not deleted,
  pending confirmation). Projects 1–4 remain text-only until a photo is
  confirmed for each.
- **`/team` route built as a template.** No real names, roles or photos exist
  yet, so it ships as an honest "profiles coming soon" page with a call/
  WhatsApp CTA, not invented people (`team.members` is an empty, typed array
  in `content.ts`, ready for real entries). Linked from both the main nav and
  the footer.
- **REX confirmed to cover both batteries and inverters** (client instruction)
  — `/products#inverters` and the product pillar now credit REX alongside the
  dealer brands, and the batteries lead line cross-references the inverter
  range.
- **"How it works" section added** to the homepage (`HowItWorks.tsx`, between
  Coverage and the CTA band) — a four-step numbered list (site discussion →
  system design → installation → direct support), same treatment as Benefits.
- **Persistent floating WhatsApp button** (`FloatingWhatsApp.tsx`), mounted
  once in `App.tsx` so it's on every route. Ghost-styled (no fill) since the
  nav's amber "Call now" pill is already persistent — this avoids ever having
  two amber fills on screen at once.
- **"Institutions" named as an explicit audience** — three of the five
  showcased projects are a church, a temple and a hostel, so the footer blurb,
  the voice guidance in `CONTENT.md` §0 and the `/projects` sub-line now say
  "homes, businesses and institutions" instead of just "homes and businesses."
- **Component-lifetime nuance added** to the Benefits "almost nothing to
  maintain" item: the inverter typically needs replacing sooner than the
  panels.
- **Brochure PDF wired up.** The actual file was located (client had it in a
  separate `royal_eye_site` project on their Desktop) and copied to
  `public/brochure.pdf`. Linked from the footer's Company column as "Download
  brochure," opening in a new tab.
- **Real battery product photography.** Extracted and background-removed
  from the brochure PDF (`src/assets/images/battery/`) — the REX lithium unit
  and the Royal Eye tubular unit are genuine product photos, replacing the
  AI-generated placeholder cutout everywhere it was used (`/products#batteries`
  now shows both side by side; the homepage battery product-pillar card shows
  the REX lithium shot). This resolves outstanding client ask #2 below **for
  batteries** — the inverter section still uses an AI-generated placeholder
  (see "Still open" below for why it wasn't swapped).
- **Fixed stale `index.html` meta tags.** The pre-hydration `<title>`/
  description (what search crawlers and social scrapers see before JS runs)
  still had the old phone number; corrected to match the live route metadata.

### Still open

1. **Battery warranty figure may need splitting by chemistry.** The
   brochure's product photo of the Royal Eye tubular (lead-acid) battery shows
   a **"5 YEARS"** warranty badge on the unit itself, but the site states a
   blanket **84 months** ("Warranty on REX batteries") without distinguishing
   chemistry. If 84 months is lithium-specific and tubular/lead-acid is
   actually 60 months, the current copy overstates the lead-acid warranty.
   Left unchanged pending client confirmation — this is a load-bearing, exact
   figure per the original content rules, not something to guess at.
2. **Inverter section still uses the AI-generated placeholder.** The brochure
   has real photos of UTL, Solaire and INVT inverter units, but all three are
   third-party dealer brands, not Royal Eye's own — swapping in one specific
   brand's photo would implicitly favour it over the other four the company
   sells (Solaire/INVT/Sofar/Deye/UTL), the same problem that got the original
   competitor battery photo excluded from the asset pack. Left as-is; flag if
   the client wants a specific brand featured, or can supply a neutral
   installer/wiring shot instead.
3. **REX logo file format.** Supplied as a flat JPEG with a baked-in pure
   black background (not the site's `ink.950`, `#05070F`), so it'll show a
   faint rectangle if placed directly on the dark ground
   (`src/assets/brand/rex-logo.jpg`). Ask for a transparent PNG/SVG if one
   exists; not yet placed anywhere on the site.
4. **Lithium battery spec table not transcribed.** The brochure has a
   model-by-model technical spec table (voltage, capacity, dimensions) for the
   REX lithium range, but the source image is too low-resolution to read
   reliably — transcribing it risks silently inventing numbers. Worth adding
   if the client can supply a clean version of that table.
5. **Inverter-specific benefit tags not added.** The brochure has a
   "Benefits of solar inverter" callout (Safety, Cost Savings, Energy
   Conversion, Monitoring and data) that isn't reflected anywhere on
   `/products#inverters`. Not requested, but a plausible small addition if
   wanted.
6. **Alternate taglines supplied, not adopted.** "Make your roof work for
   you" and "Powering homes. Building trust." were both offered as headline
   directions across the source material. Both are more generic than the
   current H1 and `PROMPT.md` explicitly rules out generic headings, so the
   existing H1 was kept.
7. **Feature ideas noted, not built:** a solar calculator / instant-estimate
   tool, and a dedicated "KSEB assistance" section (net-metering paperwork,
   subsidy application help). Both need scope from the client before they're
   anything more than a heading.

## Known issues

- **Fixed: mobile nav menu went transparent after scrolling.** `Nav.tsx`'s
  full-screen mobile menu (`role="dialog"`) was rendered as a child of
  `<header>`. Once scrolled past 80px, `<header>` gets `backdrop-blur-xl`
  (`backdrop-filter`) — and per the CSS spec, `filter`/`backdrop-filter` on an
  element makes it the containing block for its `position: fixed`
  descendants. So the menu's `fixed inset-0` was resolving against the
  80px-tall header box instead of the viewport, collapsing its height to
  80px and leaving everything below that unpainted — real page content
  showed through under the nav links. Fixed by moving the `AnimatePresence`/
  menu panel to be a sibling of `<header>` instead of a child, wrapped in a
  fragment. Verified on a production build (`vite preview`) with iPhone
  viewport emulation, scrolled + menu open, before and after.
- **Fixed: hero's wires, inverter and "power" graphic were entirely missing
  on mobile.** `SunPathHero.tsx` gated all of `EnergyPulses` behind
  `!isMobile`, but that component bundles three separate things — the static
  DC wire paths, the inverter box graphic, and the animated amber pulse dots.
  The intent (per the mobile behavior described above) was only to drop the
  pulse animation; the wires and inverter should have stayed. `EnergyPulses`
  now takes a `pulses` prop so the wires/inverter always render and only the
  dot animation is desktop-only. Also nudged `WIRES`/`INVERTER`/`OUTPUT_WIRE`
  in `heroGeometry.ts` up by 30 units — they sat close enough to the bottom
  edge of `VIEWBOX_MOBILE` that the mobile `<svg>`'s `xMidYMid slice` crop
  could trim them on some phone aspect ratios.
- **Fixed: `PhotoFilmstrip` wasn't a carousel at all on mobile.** Below
  768px `.filmstrip` had no media query, so it just stacked every image
  full-width in a vertical column with a barely-visible fade — no swipe, no
  motion. `/projects`' 7-image gallery made this obvious. It's now a real
  horizontal scroll-snap carousel below 768px (`flex-direction: row`,
  `scroll-snap-type: x mandatory`, one frame at a time with a peek of the
  next); the desktop "expanding frame" layout is unchanged. `PhotoFilmstrip.tsx`
  syncs `active` to whichever frame is actually swiped into view (via an
  `IntersectionObserver` scoped to the strip itself) and scrolls the active
  frame into view on tap/keyboard/auto-advance — skipping that scroll on the
  very first mount, since a filmstrip further down the page isn't visible
  yet and `block: 'nearest'` would otherwise drag the whole page down to it
  on load.
- **Fixed: an internal status note was rendering as live copy on
  `/projects`.** `projects.photoStatus` in `content.ts` ("Photos below are
  confirmed for project 05...") was never in `CONTENT.md` — it was a
  dev-facing tracking note that got wired into `Projects.tsx` instead of
  staying in this README, where the equivalent note already correctly lives
  (see "Projects 1–4 remain text-only..." above). Removed from both files.
- **Tightened footer phone list spacing.** Each `tel:` link keeps its
  44px-minimum tap target (`PROMPT.md`'s tap-target rule), but the `<li>`s
  now overlap into that target's own empty padding via a negative margin
  instead of leaving the full 50px pitch between rows — the numbers read as
  a list again, not a spaced-out stack.
- **Contact form needs real EmailJS credentials.** The form now sends via
  `@emailjs/browser` (client-side, no backend) instead of the old Formspree
  `fetch` call — see `emailConfig` in `content.ts`. `serviceId`, `templateId`
  and `publicKey` are still the literal `REPLACE_WITH_...` placeholders; the
  code detects this and throws before attempting to send, so every
  submission currently hits the failure state. Create an EmailJS account, an
  email service and a template (reading `name`, `phone`, `city`,
  `system_type`, `message`) and drop the three real values in. Note the
  public key is visible in client-side code by design of this approach — low
  risk for a quote form, but worth knowing.
- **The bifacial toggle described in `PROMPT.md` §5.5 and `CONTENT.md` §2.5
  was never built** — deliberately replaced with the `PhotoFilmstrip` gallery
  at commit `16de35e`. **Decision: keep the photo filmstrip**, no further
  action.
- **Google Maps iframe added to `/contact`, a scoped exception to
  `PROMPT.md`'s "no Google Maps iframe" rule.** That rule was written about
  the homepage Coverage section, which keeps its custom SVG map unchanged —
  this is a different job (turn-by-turn directions to the actual office)
  that the SVG map was never meant to do. One visual trade-off worth knowing:
  the no-API-key embed URL (`google.com/maps?...&output=embed`) doesn't
  support custom/dark map styling, so it renders as a light-mode Google Maps
  panel inside an otherwise dark page. If that clash bothers you, options are
  a static, styled map image (needs a Maps Static API key + billing) or
  dropping the inline map and keeping just the "Get directions" link.

## Outstanding client asks (from the original asset pack)

1. **A vector logo.** `public/brand/logo-royaleye-light.png` is an 847px
   raster lifted from a Canva export. Still outstanding.
2. **Real product photography — resolved for batteries, still open for
   inverters.** The battery section now uses real REX lithium and Royal Eye
   tubular product photos, extracted and background-removed from the
   brochure (`src/assets/images/battery/`). The inverter section still uses
   an AI-generated illustrative render (`public/images/inverter-wall-unit.*`)
   — see "Still open" #2 in the v2 update above for why a brochure photo
   wasn't substituted directly.
3. **A regenerated OG card.** `public/images/og-image.jpg` was typeset in
   Poppins, not Sora. Still outstanding.

## Notes

- `SOLAR POWER` under the logo is live type (Inter 500, uppercase, `0.24em`),
  not part of the logo image.
- The Kerala map is a stylised hand digitisation, fine as a design element and
  inappropriate as navigation — hence the "Map is indicative" footnote. There
  is deliberately no Google Maps embed.
- Two figures are load-bearing and exact: the bifacial gain is **5–30%,
  depending on installation conditions**, and the REX battery warranty is
  **84 months**. Don't round or merge them.
- As of this update, the site's primary phone CTA is **95395 33852** (direct
  enquiry / WhatsApp), not 70340 22604 — check any external material (ads,
  business cards, prior screenshots) for consistency before this goes live.
