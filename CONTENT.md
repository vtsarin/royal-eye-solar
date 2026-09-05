# Royal Eye Solar Power — Website Content

**Source:** rewritten from `ROYAL_EYE_BROCHURE.pdf` (6-page company profile, Aug 2025).
**Status:** final copy. Use verbatim. Do not paste brochure prose over it.
**Companion files:** `PROMPT.md` (build brief) · `royal-eye-assets.zip` (images, logo, SVGs)

---

## 0. Voice and rules

Indian English. Sentence case for every heading, button and label. No exclamation
marks. No emoji. Contractions are fine in body copy, avoided in headings.

Homeowners are the primary reader; commercial and industrial buyers are secondary.
Lead each section with the household outcome, then let the technical depth signal
competence to the commercial reader further down the page.

**Never invent:** prices, subsidy amounts, project counts, installed capacity,
customer numbers, testimonials, efficiency percentages beyond those stated here, or
certifications. Where a stat would help but doesn't exist below, cut the element
rather than filling it.

**Two figures are load-bearing and must stay exact:** the bifacial gain is
**5–30%, depending on installation conditions**, and the battery warranty is
**84 months**. Both come from the client. Don't round, average or restate them as
a single number.

**Corrections already applied** from the brochure source: "84 warranty minths" →
84 months; "NUTRAL LINK" → neutral link; "WIRING PYPE" → wiring pipe; "ISOLATER" →
isolator; "equipment's" → equipment; "ONGRID/HYBRID/OFFGRID" → on-grid, hybrid and
off-grid.

**Terms:** Calicut (not Kozhikode — matches the client's own brochure).
Trivandrum (not Thiruvananthapuram). Topcon. Bifacial. On-grid, off-grid, hybrid.
ACDB and DCDB expand on first use.

---

## 1. Global

### Brand
- Name: **Royal Eye Solar Power**
- Logo lockup: wordmark + `SOLAR POWER` in letterspaced caps beneath
- Positioning line: **Solar energy solutions for a sustainable tomorrow**
- Short descriptor: Kerala's end-to-end solar partner since 2000

### Navigation
| Label | Route |
|---|---|
| Home | `/` |
| Products | `/products` |
| Contact | `/contact` |

Nav CTA (amber pill, `tel:+917034022604`): **Call now**

### Phone numbers
Present as a group of four. Labels are for screen readers and the contact page only.

| Number | `tel:` href | Label |
|---|---|---|
| 70340 22604 | `tel:+917034022604` | Sales — primary |
| 70340 22606 | `tel:+917034022606` | Sales |
| 70340 22602 | `tel:+917034022602` | Service and installation |
| 98468 22578 | `tel:+919846822578` | Enquiries |

WhatsApp: `https://wa.me/917034022604?text=Hi%20Royal%20Eye%20Solar%2C%20I%27d%20like%20a%20quote%20for%20a%20solar%20system.`

### Head office
Manoharan Building, Edamuttam
Near SBI, Thrissur, Kerala 680568

### Branches
Vadakara · Calicut · Kottayam · Pathanamthitta · Trivandrum

### Contact
royaleyesolar@gmail.com · royaleyesolar.com

### Footer

**Column 1 — brand**
Logo, then:
> End-to-end solar for Kerala homes and businesses. Panels, inverters, batteries
> and every component in between — supplied, installed and serviced since 2000.

**Column 2 — Products**
Solar panels · Solar inverters · Lithium and tubular batteries · Installation materials · Solar water heaters · Street and garden lights

**Column 3 — Company**
About Royal Eye · Coverage · Contact · Request a quote

**Column 4 — Reach us**
The four numbers, the email, the head office address.

**Bottom bar**
`© 2026 Royal Eye Solar Power. Thrissur, Kerala.`
`Authorised dealer — Vikram · Adani · ReNew · Goldi · UTL · Solaire · INVT · Sofar · Deye`

---

## 2. Homepage

### 2.1 Hero

- Eyebrow: `KERALA · SINCE 2000`
- H1: **The sun shows up every day. We make sure your roof is ready for it.**
- Sub: Royal Eye Solar Power has supplied and installed solar across Kerala for 25 years — panels, inverters, batteries and every component the system needs, from one team that answers the phone afterwards.
- Primary button: **Call now** → `tel:+917034022604`
- Secondary button: **See what we supply** → `/products`
- Scroll cue: `Scroll`

*Alternate H1 if a shorter line is needed for the mobile layout:*
**25 years of Kerala rooftops.**

### 2.2 Trust strip

Four cells, hairline dividers, animated counters on the numerals.

| Figure | Label |
|---|---|
| 2000 | Operating since |
| 25 | Years in the field |
| 6 | Locations across Kerala |
| 84 | Month battery warranty |

### 2.3 About — asymmetric 7/5

- Eyebrow: `WHO WE ARE`
- H2: **An end-to-end solar company, which in practice means nobody else to call.**

Body:

> Royal Eye Solar Power began trading in 2000 as a manufacturer and supplier of
> quality solar equipment. Twenty-five years later we handle the whole chain —
> sourcing and distributing panels, moving them to site, installing on-grid,
> hybrid and off-grid systems, and servicing them afterwards.
>
> That covers solar panels and inverters, lithium and solar batteries, solar water
> heaters, street lights and garden lights, and the full inventory of installation
> equipment. Across Kerala and into the rest of India.

Pull quote, set large beside the image:
> **Repeat orders are the only review that counts.**

Supporting line under the pull quote:
> Customers come back for the illumination capacity, the cost per unit, the power
> saving and the simplicity of the install. Where a standard configuration doesn't
> fit, we build to the requirement instead.

Image: `installer-at-work.webp` — alt text: *A Royal Eye technician fitting a rooftop solar panel array.*

### 2.4 Product pillars — staggered, not a 4-up grid

- Eyebrow: `WHAT WE SUPPLY`
- H2: **Four things to get right. We stock all four.**

**01 · Solar panels** *(large card)*
Vikram, Adani, ReNew, Goldi and UTL. Topcon cells and bifacial construction, specified for Indian heat and Indian grid conditions.
→ `/products#panels`

**02 · Solar inverters** *(large card)*
Solaire, INVT, Sofar, Deye and UTL. String, micro and hybrid — chosen against your shading, orientation and backup needs, not against a price list.
→ `/products#inverters`

**03 · Batteries** *(small card)*
REX, our own brand, in both lithium and lead-acid. Backed for 84 months.
→ `/products#batteries`

**04 · Installation materials** *(small card)*
Every cable, clamp, connector and enclosure a compliant install needs. Nineteen line items, one supplier.
→ `/products#materials`

### 2.5 Why Royal Eye — the technical section

- Eyebrow: `THE TECHNICAL CASE`
- H2: **A panel is not a panel. The cell architecture decides what you actually get.**

Intro:
> Solar hardware has moved quickly, and most of the gain has been inside the cell
> rather than on the spec sheet headline. Three developments matter for a Kerala
> roof.

**Topcon cells**
Hold their efficiency in the two conditions Kerala guarantees — low light through
the monsoon, and high panel temperatures the rest of the year. Nameplate output
means little if it only holds at 25°C.

**Bifacial panels**
A conventional panel collects light on its front face and wastes what bounces off
the roof. A bifacial panel collects that reflected light on its rear face too. The
gain is **5–30%**, depending on surface, tilt and clearance.

**N-type IBC cells**
Back-contact cells move the contacts off the front face entirely, so no active
area is lost to shading from the busbars. The most efficient cell type in
production.

**Interactive element — bifacial toggle**
Uses `svg/bifacial-diagram.svg`. Two states:

| State | Rays shown | Readout | Caption |
|---|---|---|---|
| Front only | Direct sun on front face | `Baseline` | Conventional monofacial panel |
| Front + rear | Direct sun plus ground-reflected | `+5–30%` | Bifacial capture, both faces |

Toggle labels: **Front face only** / **Both faces**
Note beneath: *Actual gain depends on ground surface, mounting height and tilt. We measure yours before quoting.*

Closing line:
> Our products are suited to Indian weather and grid conditions, which is what
> makes solar work out techno-commercially rather than just technically.

### 2.6 Benefits — numbered editorial list, hairline dividers

- Eyebrow: `WHY SOLAR`
- H2: **Four reasons, in the order homeowners actually rank them.**

**01 — Your electricity bill drops**
The meter runs slower from the first day of generation. On a well-sized system the monthly saving is the whole argument.

**02 — Power that doesn't depend on the grid**
With batteries, an outage stops being an event. Your own generation and your own storage, independent of what the line is doing.

**03 — Almost nothing to maintain**
No moving parts. Occasional cleaning, an annual check, and the system does its job for decades.

**04 — Genuinely clean**
Renewable generation on your own roof, with no fuel, no emissions and no noise. Global demand for renewables keeps growing for a reason.

### 2.7 Brand marquee

- Eyebrow: `AUTHORISED DEALER`
- Track: `Vikram · Adani · ReNew · Goldi · UTL · Solaire · INVT · Sofar · Deye`
- Caption: Panels and inverters from the manufacturers whose warranties are worth having.

### 2.8 Coverage — Kerala map

- Eyebrow: `WHERE WE WORK`
- H2: **Six locations, one state, no subcontractors.**
- Sub: Head office at Edamuttam in Thrissur, with branches down the length of Kerala. The team that quotes your system is the team that installs it.

Uses `svg/kerala-branches.svg`. Marker hover/focus reveals:

| Marker | Reveal text |
|---|---|
| Thrissur | Head office — Manoharan Building, Edamuttam, Near SBI |
| Vadakara | Branch |
| Calicut | Branch |
| Kottayam | Branch |
| Pathanamthitta | Branch |
| Trivandrum | Branch |

Footnote: *Map is indicative. Service extends across Kerala and into neighbouring states.*

### 2.9 CTA band

- H2: **Make the switch to solar.**
- Sub: Tell us your roof and your monthly bill. We'll tell you what the system needs to be — and what it will actually save.
- Primary: **Call now** → `tel:+917034022604`
- Secondary: **WhatsApp us** → `wa.me` link
- Tertiary text link: **Request a written quote** → `/contact`
- Reassurance line: Site visit and quotation at no cost. Thrissur, Vadakara, Calicut, Kottayam, Pathanamthitta and Trivandrum.

---

## 3. `/products`

### Header
- Eyebrow: `PRODUCTS`
- H1: **Everything the system needs, from one supplier.**
- Sub: Panels, inverters, storage and the full installation inventory. Dealer-supplied where the manufacturer's warranty matters, our own brand where we can do it better.
- Anchor nav: Panels · Inverters · Batteries · Installation materials

### 3.1 Solar panels `#panels`

H2: **Solar panels**
Lead: We are a major dealer for **Vikram, Adani, ReNew, Goldi and UTL** — a broad portfolio of renewable technologies, products and solutions supplied to clients globally.

**Cell and panel technology**

| Technology | What it changes |
|---|---|
| Topcon cells | Consistent efficiency in low light and at high panel temperatures |
| Bifacial construction | Rear face captures ground-reflected light — 5–30% more output |
| N-type IBC cells | Contacts moved off the front face; highest efficiency in production |

Body:
> Panel efficiency comes down to cell type, design and configuration. Bifacial
> construction is the clearest recent step forward: instead of collecting light on
> one face and discarding what reflects off the surface below, the panel works on
> both sides. How much you gain depends on the ground surface, the mounting height
> and the tilt — which is why we look at the roof before we quote it.
>
> Everything we stock is specified for Indian weather and Indian grid conditions.

Configurations: **On-grid · Hybrid · Off-grid** — with a one-line description each:
- **On-grid** — Generation feeds the house and exports the surplus. Lowest cost, no backup during an outage.
- **Hybrid** — Grid-connected with battery storage. Bill savings plus backup.
- **Off-grid** — Fully independent generation and storage, for sites the grid doesn't reach or can't be relied on.

Image: `panel-array-render.png` — alt: *Three solar panels shown at an angle, cell grid visible.*

### 3.2 Solar inverters `#inverters`

H2: **Solar inverters**
Lead: Dealer for **Solaire, INVT, Sofar, Deye and UTL**.

Body:
> The inverter is the part of a grid-connected system that does the translating.
> Panels generate DC; your house and your appliances run on AC. Converting one to
> the other is the inverter's primary job, and it's the component that most often
> decides whether a system performs to its specification.

**Comparison table** — three columns, mono spec values:

| | String | Micro | Hybrid |
|---|---|---|---|
| Architecture | One inverter for a panel string | One inverter per panel | String inverter plus battery management |
| Handles shading | Poorly — the weakest panel sets the string | Well — panels operate independently | Same as string |
| Mixed orientations | Not ideal | Handles them | Not ideal |
| Battery ready | No | No | Yes |
| Backup during outage | No | No | Yes |
| Relative cost | Lowest | Highest | Middle to high |
| Suits | Unshaded roof, single plane, no storage planned | Shaded or multi-plane roofs | Any roof where backup or storage matters |

Guidance:
> Choosing between them comes down to your shading, your panel orientation, whether
> you want storage, and whether you need power during an outage — set against your
> budget. Talk it through with an installer who has seen the roof. We do that
> before quoting, not after.

### 3.3 Batteries `#batteries`

H2: **Lithium and tubular batteries**
Lead: **REX** — our own brand, available in both lithium and lead-acid.

Feature figure: **84 months** — Warranty on REX batteries

Body:
> Until around 2014 most storage was deep-cycle lead-acid. Lithium-ion has taken
> over since, and for good reasons: lighter, scalable, more efficient, longer
> life. The market now runs from large rack-mounted modular systems for off-grid
> sites down to compact portable units. We supply both chemistries because both
> still have a place — lead-acid remains the sensible choice on some budgets and
> some duty cycles.

**Why households actually buy storage**
> For most people the deciding factor isn't the economics. It's the feel-good
> factor, or backup power in an emergency — and in our view self-sufficiency and
> energy security are perfectly good reasons on their own.

What a battery does:
- Raises the energy independence of your solar system
- Provides backup power during an outage
- Stores excess solar generation instead of exporting it, cutting grid usage
- Supports the grid at peak times and contributes to grid stability

### 3.4 Installation materials `#materials`

H2: **Installation materials**
Lead: We are a leading dealer for solar system installation equipment. The full list, because a system is only as compliant as its smallest component.

Catalogue index — dense multi-column, hairline separated:

**Generation and conversion**
Solar panels · Solar inverters · Lithium batteries · Solar lights

**Distribution and protection**
ACDB (AC distribution box) · DCDB (DC distribution box) · MC4 connectors · Isolators · Lightning arrestors

**Earthing**
Earth pit chambers · Earth rods · Earth benches · Earth cable · Neutral links

**Cabling and containment**
DC cable · AC cable · LA cable · Wiring pipe · Clamps · Aluminium sections

Closing line: Nineteen categories, one purchase order, one delivery, one point of accountability.

Images: `dcdb-enclosure.png` (alt: *DC distribution box with breakers and surge protection.*), `mounting-clamps.png` (alt: *Aluminium mid-clamps and end-clamps for panel mounting.*), `dc-cable-coil.png` (alt: *Coil of green solar DC cable.*)

### Products page CTA
- H2: **Not sure what your roof needs?**
- Sub: That's the normal starting point. A site visit and a written quotation cost nothing.
- Buttons: **Call now** · **Request a quote**

---

## 4. `/contact`

### Header
- Eyebrow: `CONTACT`
- H1: **Call us. It's the fastest way to a straight answer.**
- Sub: Four lines, six locations and a team that quotes from the roof rather than from a catalogue.

### Call block
H2: **Phone**
Four numbers as large tap targets with their labels from §1. Above them:
> Weekdays and Saturdays. If a line is busy, try the next one — they reach the
> same team.

### Other channels
- **WhatsApp** — Send a photo of your roof and your last electricity bill. Often enough for a first estimate. → `wa.me` link
- **Email** — royaleyesolar@gmail.com
- **Website** — royaleyesolar.com

### Head office
H2: **Head office**
> Royal Eye Solar Power
> Manoharan Building, Edamuttam
> Near SBI, Thrissur, Kerala 680568

### Branches
H2: **Branches**
Vadakara · Calicut · Kottayam · Pathanamthitta · Trivandrum
Line beneath: Each branch handles supply, installation and service for its district.

### Quote form

H2: **Request a quote**
Sub: Five fields. We'll come back to you with what the system needs to be and what it costs.

| Field | Type | Label | Placeholder | Required |
|---|---|---|---|---|
| name | text | Your name | Anil Kumar | yes |
| phone | tel | Phone number | 98460 00000 | yes |
| city | text | Town or district | Thrissur | yes |
| systemType | select | What are you looking for? | — | yes |
| message | textarea | Anything else we should know | Roof area, monthly bill, whether you need backup during outages | no |

`systemType` options: On-grid system · Hybrid system with battery · Off-grid system · Battery only · Solar water heater · Street or garden lights · Not sure yet — advise me

Submit button: **Send enquiry** → in-flight label: **Sending…**

Validation messages:
- name empty: `Tell us your name`
- phone empty: `We need a number to call you back on`
- phone invalid: `Check the number — 10 digits, or with +91`
- city empty: `Which town or district?`
- systemType empty: `Pick the closest option`

Success state — replaces the form:
> **Got it, we'll call you.**
> Your enquiry is with the team. Expect a call on the number you gave us, usually
> the same working day. In a hurry? Call 70340 22604.

Failure state:
> That didn't send. Call 70340 22604 or WhatsApp us and we'll pick it up straight away.

Privacy line under the form: Your number is used to respond to this enquiry. Nothing else.

---

## 5. Metadata

### `/`
- Title: `Royal Eye Solar Power — Solar panels, inverters and batteries in Kerala`
- Description: `End-to-end solar since 2000. Panels, inverters, batteries and installation across Thrissur, Vadakara, Calicut, Kottayam, Pathanamthitta and Trivandrum. Call 70340 22604.`
- OG image: `images/og-image.jpg`

### `/products`
- Title: `Products — Solar panels, inverters, batteries, installation materials | Royal Eye Solar`
- Description: `Vikram, Adani, ReNew, Goldi and UTL panels. Solaire, INVT, Sofar, Deye and UTL inverters. REX lithium and tubular batteries with 84-month warranty, plus the full installation inventory.`

### `/contact`
- Title: `Contact — Royal Eye Solar Power, Thrissur`
- Description: `Call 70340 22604. Head office at Manoharan Building, Edamuttam, Near SBI, Thrissur 680568. Branches in Vadakara, Calicut, Kottayam, Pathanamthitta and Trivandrum.`

### JSON-LD — LocalBusiness
Emit on every route. Fields: `name` Royal Eye Solar Power · `@type` LocalBusiness
with `additionalType` https://www.wikidata.org/wiki/Q17048507 · `foundingDate`
2000 · `telephone` all four numbers · `email` · `url` ·
`address` streetAddress "Manoharan Building, Edamuttam, Near SBI",
addressLocality Thrissur, addressRegion Kerala, postalCode 680568,
addressCountry IN · `areaServed` Kerala plus the six town names ·
`makesOffer` solar panels, solar inverters, lithium batteries, solar water
heaters, solar street lights, solar garden lights, solar installation.

Do not emit `aggregateRating`, `review` or `priceRange` — no source data exists for
any of them.

### Hero `aria-label`
`Animated illustration of a solar panel array with the sun tracking across the sky and energy flowing to an inverter.`

### 404
- H1: **That page isn't here.**
- Sub: It may have moved. The products and contact pages are below, or call 70340 22604.
- Buttons: **Home** · **Products** · **Call now**
