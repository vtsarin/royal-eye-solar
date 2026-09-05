# Royal Eye Solar Power — website

Static marketing site for Royal Eye Solar Power, Thrissur. Vite + React 18 +
TypeScript + Tailwind + Framer Motion. Three routes (`/`, `/products`,
`/contact`) plus a 404. No backend.

## Local development

```bash
npm install
cp .env.example .env.local   # then fill in VITE_FORM_ENDPOINT
npm run dev                  # http://localhost:5173
```

```bash
npm run build       # type-checks, builds to dist/, copies index.html to 404.html
npm run preview     # serve the built output
npm run typecheck
```

## Environment variables

| Variable | Required | Purpose |
|---|---|---|
| `VITE_FORM_ENDPOINT` | For a working quote form | Endpoint the `/contact` form POSTs to as `multipart/form-data`. Built against Formspree; anything accepting a form POST and returning 2xx works. Unset, the form still validates but every submission lands on the failure state. |
| `VITE_SITE_URL` | No | Absolute origin for `canonical` and `og:*` URLs. Defaults to `https://royaleyesolar.com`. Set this if the site is served from another domain. |

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
               BranchMap BifacialToggle QuoteForm
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
uses the shorter headline from `CONTENT.md` §2.1. This is deliberate: on a 320px
screen there is no way to keep type off the lit sky and still hold 4.5:1.

## Swapping images

Photographs and cutouts live in `public/images/`, referenced from
`src/lib/content.ts` (`about.image`, `products.panels.image`,
`products.materials.images`). To replace one:

1. Drop the new file into `public/images/`, WebP plus a JPEG or PNG fallback.
2. Update the path, `width`, `height` and `alt` in `content.ts`.

Keep `width`/`height` accurate — they reserve layout space and are what holds
CLS down. Everything renders through `<picture>` with WebP first.

## Outstanding client asks

1. **A vector logo.** `public/brand/logo-royaleye-light.png` is an 847px raster
   lifted from a Canva export. It holds at nav and footer size but will soften
   on any larger treatment or in print.
2. **A REX battery photograph.** The brochure's battery shot is a competitor's
   Century Lithium Pro unit, so it was deliberately excluded. The batteries
   section on `/products` carries the `84 months` warranty figure
   typographically instead of an image.
3. **A regenerated OG card.** `public/images/og-image.jpg` was typeset in
   Poppins because Sora was unavailable when the asset pack was built. Worth
   regenerating in Sora to match the site.
4. **Confirm "twenty" in the materials copy.** The supplied `CONTENT.md` listed
   twenty installation-material line items but described them as "nineteen" in
   two places (the product pillar on the homepage and the closing line on
   `/products`). Both now read "twenty" to match the list. Worth confirming with
   the client whether the count or the list was wrong.

## Notes

- `SOLAR POWER` under the logo is live type (Inter 500, uppercase, `0.24em`), not
  part of the logo image.
- The Kerala map is a stylised hand digitisation, fine as a design element and
  inappropriate as navigation — hence the "Map is indicative" footnote. There is
  deliberately no Google Maps embed.
- Two figures are load-bearing and exact: the bifacial gain is **5–30%,
  depending on installation conditions**, and the REX battery warranty is
  **84 months**. Don't round or merge them.
