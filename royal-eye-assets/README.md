# Royal Eye Solar — asset pack

Extracted from `ROYAL_EYE_BROCHURE.pdf` and generated to match. Drop the whole
tree into `public/` so paths resolve as `/images/...`, `/brand/...`, `/svg/...`.

Companion files: `PROMPT.md` (build brief) · `CONTENT.md` (final copy).

---

## brand/

| File | Size | Use |
|---|---|---|
| `logo-royaleye-light.png` | 847×189, alpha | **Nav and footer.** Ink lifted to near-white, red "Eye" preserved. This is the one for the dark theme. |
| `logo-royaleye-dark.png` | 847×189, alpha | Original extraction. For light backgrounds only — the black "Royal" disappears on ink.900. |
| `favicon.svg` | 64 viewBox | Primary favicon |
| `favicon.ico` | 16/32/48 | Legacy |
| `favicon-32.png`, `favicon-64.png` | | |
| `apple-touch-icon.png` | 180×180 | |
| `icon-192.png`, `icon-512.png` | | Web app manifest |

**The logo is a wordmark only.** `SOLAR POWER` sits beneath it in the brochure as
live type, not artwork — set it in Inter, weight 500, uppercase, `0.24em` tracking,
in `fg.secondary`. Do not try to bake it into the image.

**Ask the client for a vector logo.** This is a 847px raster lifted from a Canva
export. It holds up at nav size (render at ~150px wide) but will soften on a large
footer treatment or print. Flag it in the project README as an outstanding item.

---

## images/

Photographs — WebP plus JPEG fallback at each width.

| File | Widths | Subject |
|---|---|---|
| `panels-city-sun` | 2400, 1200 | Panel array, city skyline, sun overhead. Highest quality photo in the set — use it for the about section or a full-bleed band. |
| `panels-city-dusk` | 2000, 1000 | Panel array against a dusk skyline with planting. |
| `installer-at-work` | 1600, 800 | Technician fitting a rooftop array. The only human in the set — use it where trust matters. |

Cutouts — transparent PNG plus WebP, alpha composited from the PDF's soft masks.

| File | Size | WebP | PNG | Subject |
|---|---|---|---|---|
| `panel-array-render` | 1200×1183 | 159KB | 1.1MB | Three panels at an angle, cell grid visible |
| `dcdb-enclosure` | 900×631 | 69KB | 441KB | DC distribution box, breakers and SPD |
| `mounting-clamps` | 800×790 | 139KB | 722KB | Aluminium mid and end clamps |
| `dc-cable-coil` | 800×494 | 73KB | 409KB | Coil of green DC cable |

**Serve the WebP.** The PNG fallbacks are heavy — the alpha masks carry soft drop
shadows, which PNG cannot compress well at any setting. Use `<picture>` with the
WebP first and treat the PNG as a legacy-Safari fallback that most visitors never
download. If you'd rather not ship the PNGs at all, WebP alpha has been supported
since Safari 14 and you can drop them.

Social card.

| File | Size |
|---|---|
| `og-image.jpg` / `.png` | 1200×630 |

The OG card was typeset in Poppins because Sora wasn't available in the build
environment. If you want it exactly on-brand, regenerate it once Sora is installed
— the layout is a photo at 68% ink blend, a bottom-up scrim, the light logo at
268px, and the headline at 68px.

### Excluded on purpose

- **The battery product shot** in the brochure is a **Century Lithium Pro** unit —
  a competitor's branding, on a page selling Royal Eye's own REX brand. Left out.
  Ask the client for a REX photo; until then use the `84 months` figure as a
  typographic feature instead of an image.
- **Decorative Canva filler** — floating leaves, a tree, an orange starburst, a
  lightbulb-with-panel-inside graphic. All eco-clipart, all omitted.
- **A dark tabular graphic** on page 5 that carries burned-in unreadable text.

### Assets still needed

No network access in the environment that built this pack, so nothing was
sourced from Unsplash or Pexels. If a section needs a photo that isn't here —
a Kerala home with a rooftop install, a lithium rack, a wide solar farm — pull it
at build time. Subjects worth searching: `rooftop solar india`, `solar installer`,
`lithium battery rack`, `solar farm aerial`.

---

## svg/

All hand-built, all themeable through CSS custom properties, all with `role="img"`
plus `<title>`/`<desc>` where they carry meaning and `aria-hidden` where they don't.

### `solar-panel.svg`
One panel: 6×10 cell grid, busbars on both axes, frame, and an overlay `#sheen`
rect for the light sweep. **This is the hero's building block** — import it as a
React component and instance it per row rather than redrawing it.

Variables: `--cell` `--glass` `--frame` `--busbar` `--sheen` `--sheen-opacity`.
Drive `--cell` and `--sheen-opacity` off the hero's sun-angle motion value to make
the faces warm as the sun climbs.

### `kerala-branches.svg`
560×780. Kerala outline with all six locations marked, leader lines running out to
label gutters at x=104 and x=456 so no label crosses the landmass. Thrissur carries
the larger marker, the outer ring and a `HEAD OFFICE` sublabel.

Each marker is `<g class="branch" data-city="…" tabindex="0" role="button">` with
`.halo`, `.dot` and `.leader` children — wire hover and focus to the halo radius
and the label colour. `.is-hq` marks the head office.

Variables: `--map-fill` `--map-stroke` `--map-leader` `--map-dot` `--map-label`
`--map-hq`.

**Stylised, not survey-accurate.** The outline is a 51-point hand digitisation and
the markers are placed from approximate lat/long. Fine as a design element,
inappropriate as navigation. Keep the *"Map is indicative"* footnote from
`CONTENT.md`.

### `bifacial-diagram.svg`
680×400. Tilted panel in cross-section, sun upper-left, ground plane with hatching.
Two toggleable groups: `#front-capture` (solid amber rays onto the front face) and
`#rear-capture` (dashed lime rays reflecting off the ground onto the rear). The
`#readout` group holds `#yield-value` and `#yield-caption` for swapping between
`Baseline` and `+5–30%`.

Variables: `--sun` `--lime` `--cell-front` `--cell-rear` `--frame` `--busbar`
`--line` `--fg` `--secondary` `--muted`.

### `sun-glow.svg`
Five-stop radial gradient, amber core to transparent. Use as the hero's sun, or
lift the gradient stops into an inline `<radialGradient>` in the animated hero so
one element can be transformed by the rAF loop.

### `grid-texture.svg`
72px tile at 3% and 1.5% white. Reference as a CSS `background-image` and mask it
with a radial gradient so it fades at section edges. This is the cheapest thing in
the pack and does more for the "dark tech" read than anything else.

---

## Notes for the build

- Every photograph here came out of a 34MB PDF. Almost none of that weight needs
  to reach the browser: the full WebP set totals roughly 1.6MB across every image
  in the pack, and no single WebP exceeds 400KB. Ship WebP, lazy-load below the
  fold, and serve the `-1200` / `-1000` / `-800` variants wherever the layout
  doesn't need full width.
- Cutout PNGs sit on a dark ground with no white edge, so they need no extra
  treatment. Give them room; they read as product photography.
- All SVGs are inert markup with no scripts and no external references. Set the
  `--` variables on an ancestor, or import them through `vite-plugin-svgr` as
  components and pass motion values in directly.
- The SVGs in this zip are clean. If you re-export them through a tool that adds
  a `<metadata>` provenance block, strip it before inlining — it adds ~8KB per
  file to your bundle for no rendering benefit.
