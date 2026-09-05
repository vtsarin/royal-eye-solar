/** All site copy, from CONTENT.md. Section numbers below match that file. */

export interface Phone {
  display: string;
  href: string;
  label: string;
}

export interface Cta {
  label: string;
  href: string;
}

/* ---------- 1. Global ---------- */

export const brand = {
  name: 'Royal Eye Solar Power',
  lockupSub: 'Solar power',
  positioning: 'Solar energy solutions for a sustainable tomorrow',
  descriptor: "Kerala's end-to-end solar partner since 2000",
  logo: './brand/logo-royaleye-light.png',
} as const;

export const nav = {
  links: [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Contact', href: '/contact' },
  ],
  cta: { label: 'Call now', href: 'tel:+917034022604' },
} as const;

export const phones: Phone[] = [
  { display: '70340 22604', href: 'tel:+917034022604', label: 'Sales — primary' },
  { display: '70340 22606', href: 'tel:+917034022606', label: 'Sales' },
  { display: '70340 22602', href: 'tel:+917034022602', label: 'Service and installation' },
  { display: '98468 22578', href: 'tel:+919846822578', label: 'Enquiries' },
];

export const whatsapp = {
  href: "https://wa.me/917034022604?text=Hi%20Royal%20Eye%20Solar%2C%20I%27d%20like%20a%20quote%20for%20a%20solar%20system.",
  label: 'WhatsApp us',
} as const;

export const headOffice = {
  lines: ['Royal Eye Solar Power', 'Manoharan Building, Edamuttam', 'Near SBI, Thrissur, Kerala 680568'],
} as const;

export const branches = ['Vadakara', 'Calicut', 'Kottayam', 'Pathanamthitta', 'Trivandrum'] as const;

export const contactDetails = {
  email: 'royaleyesolar@gmail.com',
  website: 'royaleyesolar.com',
} as const;

export const footer = {
  blurb:
    'End-to-end solar for Kerala homes and businesses. Panels, inverters, batteries and every component in between — supplied, installed and serviced since 2000.',
  columns: [
    {
      heading: 'Products',
      items: [
        { label: 'Solar panels', href: '/products#panels' },
        { label: 'Solar inverters', href: '/products#inverters' },
        { label: 'Lithium and tubular batteries', href: '/products#batteries' },
        { label: 'Installation materials', href: '/products#materials' },
        { label: 'Solar water heaters', href: '/products' },
        { label: 'Street and garden lights', href: '/products' },
      ],
    },
    {
      heading: 'Company',
      items: [
        { label: 'About Royal Eye', href: '/#about' },
        { label: 'Coverage', href: '/#coverage' },
        { label: 'Contact', href: '/contact' },
        { label: 'Request a quote', href: '/contact#quote' },
      ],
    },
  ],
  reachHeading: 'Reach us',
  bottom: {
    copyright: '© 2026 Royal Eye Solar Power. Thrissur, Kerala.',
    dealers: 'Authorised dealer — Vikram · Adani · ReNew · Goldi · UTL · Solaire · INVT · Sofar · Deye',
  },
} as const;

/* ---------- 2.1 Hero ---------- */

export const hero = {
  eyebrow: 'KERALA · SINCE 2000',
  h1: 'The sun shows up every day. We make sure your roof is ready for it.',
  h1Mobile: '25 years of Kerala rooftops.',
  sub: 'Royal Eye Solar Power has supplied and installed solar across Kerala for 25 years — panels, inverters, batteries and every component the system needs, from one team that answers the phone afterwards.',
  primary: { label: 'Call now', href: 'tel:+917034022604' } as Cta,
  secondary: { label: 'See what we supply', href: '/products' } as Cta,
  scrollCue: 'Scroll',
  ariaLabel:
    'Animated illustration of a solar panel array with the sun tracking across the sky and energy flowing to an inverter.',
} as const;

/* ---------- 2.2 Trust strip ---------- */

export const trustStrip = [
  { value: 2000, label: 'Operating since' },
  { value: 25, label: 'Years in the field' },
  { value: 6, label: 'Locations across Kerala' },
  { value: 84, label: 'Month battery warranty' },
] as const;

/* ---------- 2.3 About ---------- */

export const about = {
  eyebrow: 'WHO WE ARE',
  h2: 'An end-to-end solar company, which in practice means nobody else to call.',
  body: [
    'Royal Eye Solar Power began trading in 2000 as a manufacturer and supplier of quality solar equipment. Twenty-five years later we handle the whole chain — sourcing and distributing panels, moving them to site, installing on-grid, hybrid and off-grid systems, and servicing them afterwards.',
    'That covers solar panels and inverters, lithium and solar batteries, solar water heaters, street lights and garden lights, and the full inventory of installation equipment. Across Kerala and into the rest of India.',
  ],
  pullQuote: 'Repeat orders are the only review that counts.',
  supporting:
    "Customers come back for the illumination capacity, the cost per unit, the power saving and the simplicity of the install. Where a standard configuration doesn't fit, we build to the requirement instead.",
  image: {
    webp: './images/installer-at-work.webp',
    webpSmall: './images/installer-at-work-800.webp',
    jpg: './images/installer-at-work.jpg',
    width: 1600,
    height: 1067,
    alt: 'A Royal Eye technician fitting a rooftop solar panel array.',
  },
} as const;

/* ---------- 2.4 Product pillars ---------- */

export interface Pillar {
  index: string;
  title: string;
  body: string;
  href: string;
  size: 'large' | 'small';
}

export const productPillars = {
  eyebrow: 'WHAT WE SUPPLY',
  h2: 'Four things to get right. We stock all four.',
  items: [
    {
      index: '01',
      title: 'Solar panels',
      body: 'Vikram, Adani, ReNew, Goldi and UTL. Topcon cells and bifacial construction, specified for Indian heat and Indian grid conditions.',
      href: '/products#panels',
      size: 'large',
    },
    {
      index: '02',
      title: 'Solar inverters',
      body: 'Solaire, INVT, Sofar, Deye and UTL. String, micro and hybrid — chosen against your shading, orientation and backup needs, not against a price list.',
      href: '/products#inverters',
      size: 'large',
    },
    {
      index: '03',
      title: 'Batteries',
      body: 'REX, our own brand, in both lithium and lead-acid. Backed for 84 months.',
      href: '/products#batteries',
      size: 'small',
    },
    {
      index: '04',
      title: 'Installation materials',
      body: 'Every cable, clamp, connector and enclosure a compliant install needs. Twenty line items, one supplier.',
      href: '/products#materials',
      size: 'small',
    },
  ] satisfies Pillar[],
} as const;

/* ---------- 2.5 Why Royal Eye ---------- */

export interface TechCell {
  title: string;
  body: string;
  figure?: string;
}

export const whyRoyalEye = {
  eyebrow: 'THE TECHNICAL CASE',
  h2: 'A panel is not a panel. The cell architecture decides what you actually get.',
  intro:
    'Solar hardware has moved quickly, and most of the gain has been inside the cell rather than on the spec sheet headline. Three developments matter for a Kerala roof.',
  cells: [
    {
      title: 'Topcon cells',
      body: 'Hold their efficiency in the two conditions Kerala guarantees — low light through the monsoon, and high panel temperatures the rest of the year. Nameplate output means little if it only holds at 25°C.',
    },
    {
      title: 'Bifacial panels',
      body: 'A conventional panel collects light on its front face and wastes what bounces off the roof. A bifacial panel collects that reflected light on its rear face too. The gain is 5–30%, depending on surface, tilt and clearance.',
      figure: '5–30%',
    },
    {
      title: 'N-type IBC cells',
      body: 'Back-contact cells move the contacts off the front face entirely, so no active area is lost to shading from the busbars. The most efficient cell type in production.',
    },
  ] satisfies TechCell[] as TechCell[],
  bifacialToggle: {
    labels: { front: 'Front face only', both: 'Both faces' },
    states: {
      front: {
        rays: 'Direct sun on front face',
        value: 'Baseline',
        caption: 'Conventional monofacial panel',
      },
      both: {
        rays: 'Direct sun plus ground-reflected',
        value: '+5–30%',
        caption: 'Bifacial capture, both faces',
      },
    },
    note: 'Actual gain depends on ground surface, mounting height and tilt. We measure yours before quoting.',
  },
  closing:
    'Our products are suited to Indian weather and grid conditions, which is what makes solar work out techno-commercially rather than just technically.',
} as const;

/* ---------- 2.6 Benefits ---------- */

export const benefits = {
  eyebrow: 'WHY SOLAR',
  h2: 'Four reasons, in the order homeowners actually rank them.',
  items: [
    {
      index: '01',
      title: 'Your electricity bill drops',
      body: 'The meter runs slower from the first day of generation. On a well-sized system the monthly saving is the whole argument.',
    },
    {
      index: '02',
      title: "Power that doesn't depend on the grid",
      body: 'With batteries, an outage stops being an event. Your own generation and your own storage, independent of what the line is doing.',
    },
    {
      index: '03',
      title: 'Almost nothing to maintain',
      body: 'No moving parts. Occasional cleaning, an annual check, and the system does its job for decades.',
    },
    {
      index: '04',
      title: 'Genuinely clean',
      body: 'Renewable generation on your own roof, with no fuel, no emissions and no noise. Global demand for renewables keeps growing for a reason.',
    },
  ],
} as const;

/* ---------- 2.7 Brand marquee ---------- */

export const marquee = {
  eyebrow: 'AUTHORISED DEALER',
  names: ['Vikram', 'Adani', 'ReNew', 'Goldi', 'UTL', 'Solaire', 'INVT', 'Sofar', 'Deye'],
  caption: 'Panels and inverters from the manufacturers whose warranties are worth having.',
} as const;

/* ---------- 2.8 Coverage ---------- */

export const coverage = {
  eyebrow: 'WHERE WE WORK',
  h2: 'Six locations, one state, no subcontractors.',
  sub: 'Head office at Edamuttam in Thrissur, with branches down the length of Kerala. The team that quotes your system is the team that installs it.',
  cities: [
    { name: 'Thrissur', isHq: true, reveal: 'Head office — Manoharan Building, Edamuttam, Near SBI' },
    { name: 'Vadakara', isHq: false, reveal: 'Branch' },
    { name: 'Calicut', isHq: false, reveal: 'Branch' },
    { name: 'Kottayam', isHq: false, reveal: 'Branch' },
    { name: 'Pathanamthitta', isHq: false, reveal: 'Branch' },
    { name: 'Trivandrum', isHq: false, reveal: 'Branch' },
  ],
  footnote: 'Map is indicative. Service extends across Kerala and into neighbouring states.',
} as const;

/* ---------- 2.9 CTA band ---------- */

export const ctaBand = {
  h2: 'Make the switch to solar.',
  sub: "Tell us your roof and your monthly bill. We'll tell you what the system needs to be — and what it will actually save.",
  primary: { label: 'Call now', href: 'tel:+917034022604' } as Cta,
  secondary: { label: 'WhatsApp us', href: whatsapp.href } as Cta,
  tertiary: { label: 'Request a written quote', href: '/contact' } as Cta,
  reassurance:
    'Site visit and quotation at no cost. Thrissur, Vadakara, Calicut, Kottayam, Pathanamthitta and Trivandrum.',
} as const;

/* ---------- 3. Products ---------- */

export const products = {
  header: {
    eyebrow: 'PRODUCTS',
    h1: 'Everything the system needs, from one supplier.',
    sub: "Panels, inverters, storage and the full installation inventory. Dealer-supplied where the manufacturer's warranty matters, our own brand where we can do it better.",
  },
  anchors: [
    { id: 'panels', label: 'Panels' },
    { id: 'inverters', label: 'Inverters' },
    { id: 'batteries', label: 'Batteries' },
    { id: 'materials', label: 'Installation materials' },
  ],
  panels: {
    h2: 'Solar panels',
    lead: 'We are a major dealer for Vikram, Adani, ReNew, Goldi and UTL — a broad portfolio of renewable technologies, products and solutions supplied to clients globally.',
    techHeading: 'Cell and panel technology',
    tech: [
      { name: 'Topcon cells', effect: 'Consistent efficiency in low light and at high panel temperatures' },
      { name: 'Bifacial construction', effect: 'Rear face captures ground-reflected light — 5–30% more output' },
      { name: 'N-type IBC cells', effect: 'Contacts moved off the front face; highest efficiency in production' },
    ],
    body: [
      'Panel efficiency comes down to cell type, design and configuration. Bifacial construction is the clearest recent step forward: instead of collecting light on one face and discarding what reflects off the surface below, the panel works on both sides. How much you gain depends on the ground surface, the mounting height and the tilt — which is why we look at the roof before we quote it.',
      'Everything we stock is specified for Indian weather and Indian grid conditions.',
    ],
    configHeading: 'Configurations',
    configurations: [
      {
        name: 'On-grid',
        body: 'Generation feeds the house and exports the surplus. Lowest cost, no backup during an outage.',
      },
      { name: 'Hybrid', body: 'Grid-connected with battery storage. Bill savings plus backup.' },
      {
        name: 'Off-grid',
        body: "Fully independent generation and storage, for sites the grid doesn't reach or can't be relied on.",
      },
    ],
    image: {
      webp: './images/panel-array-render.webp',
      png: './images/panel-array-render.png',
      width: 1200,
      height: 1183,
      alt: 'Three solar panels shown at an angle, cell grid visible.',
    },
  },
  inverters: {
    h2: 'Solar inverters',
    lead: 'Dealer for Solaire, INVT, Sofar, Deye and UTL.',
    body: "The inverter is the part of a grid-connected system that does the translating. Panels generate DC; your house and your appliances run on AC. Converting one to the other is the inverter's primary job, and it's the component that most often decides whether a system performs to its specification.",
    table: {
      caption: 'Comparison of string, micro and hybrid solar inverters',
      columns: ['String', 'Micro', 'Hybrid'],
      rows: [
        {
          label: 'Architecture',
          values: ['One inverter for a panel string', 'One inverter per panel', 'String inverter plus battery management'],
        },
        {
          label: 'Handles shading',
          values: ['Poorly — the weakest panel sets the string', 'Well — panels operate independently', 'Same as string'],
        },
        { label: 'Mixed orientations', values: ['Not ideal', 'Handles them', 'Not ideal'] },
        { label: 'Battery ready', values: ['No', 'No', 'Yes'] },
        { label: 'Backup during outage', values: ['No', 'No', 'Yes'] },
        { label: 'Relative cost', values: ['Lowest', 'Highest', 'Middle to high'] },
        {
          label: 'Suits',
          values: [
            'Unshaded roof, single plane, no storage planned',
            'Shaded or multi-plane roofs',
            'Any roof where backup or storage matters',
          ],
        },
      ],
    },
    guidance:
      'Choosing between them comes down to your shading, your panel orientation, whether you want storage, and whether you need power during an outage — set against your budget. Talk it through with an installer who has seen the roof. We do that before quoting, not after.',
  },
  batteries: {
    h2: 'Lithium and tubular batteries',
    lead: 'REX — our own brand, available in both lithium and lead-acid.',
    figure: { value: '84', unit: 'months', caption: 'Warranty on REX batteries' },
    body: 'Until around 2014 most storage was deep-cycle lead-acid. Lithium-ion has taken over since, and for good reasons: lighter, scalable, more efficient, longer life. The market now runs from large rack-mounted modular systems for off-grid sites down to compact portable units. We supply both chemistries because both still have a place — lead-acid remains the sensible choice on some budgets and some duty cycles.',
    whyHeading: 'Why households actually buy storage',
    whyBody:
      "For most people the deciding factor isn't the economics. It's the feel-good factor, or backup power in an emergency — and in our view self-sufficiency and energy security are perfectly good reasons on their own.",
    doesHeading: 'What a battery does',
    does: [
      'Raises the energy independence of your solar system',
      'Provides backup power during an outage',
      'Stores excess solar generation instead of exporting it, cutting grid usage',
      'Supports the grid at peak times and contributes to grid stability',
    ],
  },
  materials: {
    h2: 'Installation materials',
    lead: 'We are a leading dealer for solar system installation equipment. The full list, because a system is only as compliant as its smallest component.',
    groups: [
      { category: 'Generation and conversion', items: ['Solar panels', 'Solar inverters', 'Lithium batteries', 'Solar lights'] },
      {
        category: 'Distribution and protection',
        items: [
          'ACDB (AC distribution box)',
          'DCDB (DC distribution box)',
          'MC4 connectors',
          'Isolators',
          'Lightning arrestors',
        ],
      },
      { category: 'Earthing', items: ['Earth pit chambers', 'Earth rods', 'Earth benches', 'Earth cable', 'Neutral links'] },
      {
        category: 'Cabling and containment',
        items: ['DC cable', 'AC cable', 'LA cable', 'Wiring pipe', 'Clamps', 'Aluminium sections'],
      },
    ],
    closing: 'Twenty categories, one purchase order, one delivery, one point of accountability.',
    images: [
      {
        webp: './images/dcdb-enclosure.webp',
        png: './images/dcdb-enclosure.png',
        width: 900,
        height: 631,
        alt: 'DC distribution box with breakers and surge protection.',
      },
      {
        webp: './images/mounting-clamps.webp',
        png: './images/mounting-clamps.png',
        width: 800,
        height: 790,
        alt: 'Aluminium mid-clamps and end-clamps for panel mounting.',
      },
      {
        webp: './images/dc-cable-coil.webp',
        png: './images/dc-cable-coil.png',
        width: 800,
        height: 494,
        alt: 'Coil of green solar DC cable.',
      },
    ],
  },
  cta: {
    h2: 'Not sure what your roof needs?',
    sub: "That's the normal starting point. A site visit and a written quotation cost nothing.",
    primary: { label: 'Call now', href: 'tel:+917034022604' } as Cta,
    secondary: { label: 'Request a quote', href: '/contact#quote' } as Cta,
  },
} as const;

/* ---------- 4. Contact ---------- */

export const contact = {
  header: {
    eyebrow: 'CONTACT',
    h1: "Call us. It's the fastest way to a straight answer.",
    sub: 'Four lines, six locations and a team that quotes from the roof rather than from a catalogue.',
  },
  call: {
    h2: 'Phone',
    intro: 'Weekdays and Saturdays. If a line is busy, try the next one — they reach the same team.',
  },
  channels: {
    heading: 'Other channels',
    items: [
      {
        name: 'WhatsApp',
        body: 'Send a photo of your roof and your last electricity bill. Often enough for a first estimate.',
        href: whatsapp.href,
        linkLabel: 'Open WhatsApp',
      },
      {
        name: 'Email',
        body: contactDetails.email,
        href: `mailto:${contactDetails.email}`,
        linkLabel: contactDetails.email,
      },
      {
        name: 'Website',
        body: contactDetails.website,
        href: `https://${contactDetails.website}`,
        linkLabel: contactDetails.website,
      },
    ],
  },
  office: { h2: 'Head office' },
  branchBlock: {
    h2: 'Branches',
    note: 'Each branch handles supply, installation and service for its district.',
  },
  form: {
    h2: 'Request a quote',
    sub: "Five fields. We'll come back to you with what the system needs to be and what it costs.",
    fields: {
      name: { label: 'Your name', placeholder: 'Anil Kumar' },
      phone: { label: 'Phone number', placeholder: '98460 00000' },
      city: { label: 'Town or district', placeholder: 'Thrissur' },
      systemType: { label: 'What are you looking for?' },
      message: {
        label: 'Anything else we should know',
        placeholder: 'Roof area, monthly bill, whether you need backup during outages',
      },
    },
    systemTypeOptions: [
      'On-grid system',
      'Hybrid system with battery',
      'Off-grid system',
      'Battery only',
      'Solar water heater',
      'Street or garden lights',
      'Not sure yet — advise me',
    ],
    submit: 'Send enquiry',
    submitting: 'Sending…',
    validation: {
      name: 'Tell us your name',
      phoneEmpty: 'We need a number to call you back on',
      phoneInvalid: 'Check the number — 10 digits, or with +91',
      city: 'Which town or district?',
      systemType: 'Pick the closest option',
    },
    success: {
      heading: "Got it, we'll call you.",
      body: 'Your enquiry is with the team. Expect a call on the number you gave us, usually the same working day. In a hurry? Call 70340 22604.',
    },
    failure: "That didn't send. Call 70340 22604 or WhatsApp us and we'll pick it up straight away.",
    privacy: 'Your number is used to respond to this enquiry. Nothing else.',
  },
} as const;

/* ---------- 5. Metadata ---------- */

export const siteUrl = (import.meta.env.VITE_SITE_URL ?? 'https://royaleyesolar.com').replace(/\/$/, '');

export const routeMeta = {
  '/': {
    title: 'Royal Eye Solar Power — Solar panels, inverters and batteries in Kerala',
    description:
      'End-to-end solar since 2000. Panels, inverters, batteries and installation across Thrissur, Vadakara, Calicut, Kottayam, Pathanamthitta and Trivandrum. Call 70340 22604.',
  },
  '/products': {
    title: 'Products — Solar panels, inverters, batteries, installation materials | Royal Eye Solar',
    description:
      "Vikram, Adani, ReNew, Goldi and UTL panels. Solaire, INVT, Sofar, Deye and UTL inverters. REX lithium and tubular batteries with 84-month warranty, plus the full installation inventory.",
  },
  '/contact': {
    title: 'Contact — Royal Eye Solar Power, Thrissur',
    description:
      'Call 70340 22604. Head office at Manoharan Building, Edamuttam, Near SBI, Thrissur 680568. Branches in Vadakara, Calicut, Kottayam, Pathanamthitta and Trivandrum.',
  },
} as const;

export const ogImage = './images/og-image.jpg';

export const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  additionalType: 'https://www.wikidata.org/wiki/Q17048507',
  name: 'Royal Eye Solar Power',
  foundingDate: '2000',
  telephone: ['+917034022604', '+917034022606', '+917034022602', '+919846822578'],
  email: contactDetails.email,
  url: `https://${contactDetails.website}`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Manoharan Building, Edamuttam, Near SBI',
    addressLocality: 'Thrissur',
    addressRegion: 'Kerala',
    postalCode: '680568',
    addressCountry: 'IN',
  },
  areaServed: ['Kerala', 'Thrissur', 'Vadakara', 'Calicut', 'Kottayam', 'Pathanamthitta', 'Trivandrum'],
  makesOffer: [
    'Solar panels',
    'Solar inverters',
    'Lithium batteries',
    'Solar water heaters',
    'Solar street lights',
    'Solar garden lights',
    'Solar installation',
  ].map((name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } })),
};

/* ---------- 404 ---------- */

export const notFound = {
  h1: "That page isn't here.",
  sub: 'It may have moved. The products and contact pages are below, or call 70340 22604.',
  buttons: [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Call now', href: 'tel:+917034022604' },
  ] satisfies Cta[],
} as const;
