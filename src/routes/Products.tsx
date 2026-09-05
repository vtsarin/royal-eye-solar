import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { products, routeMeta } from '../lib/content';
import { useSeo } from '../lib/seo';
import { Reveal, RevealGroup, RevealItem } from '../components/Reveal';

function AnchorNav() {
  const [active, setActive] = useState<string>(products.anchors[0].id);

  useEffect(() => {
    const sections = products.anchors
      .map((anchor) => document.getElementById(anchor.id))
      .filter((el): el is HTMLElement => el !== null);

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-40% 0px -50% 0px' },
    );
    sections.forEach((section) => io.observe(section));
    return () => io.disconnect();
  }, []);

  return (
    <nav
      className="sticky top-20 z-30 border-y border-line-subtle bg-ink-950/85 backdrop-blur-xl"
      aria-label="Product sections"
    >
      <div className="shell flex gap-1 overflow-x-auto py-3">
        {products.anchors.map((anchor) => (
          <a
            key={anchor.id}
            href={`#${anchor.id}`}
            aria-current={active === anchor.id ? 'true' : undefined}
            className={`shrink-0 rounded-pill px-4 py-2 text-caption font-medium transition-colors duration-200 ${
              active === anchor.id ? 'bg-white/[0.06] text-amber-400' : 'text-fg-secondary hover:text-fg-primary'
            }`}
          >
            {anchor.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default function Products() {
  useSeo('/products', routeMeta['/products'].title, routeMeta['/products'].description);
  const { header, panels, inverters, batteries, materials, cta } = products;

  return (
    <>
      <section className="grid-field pb-16 pt-36 md:pb-20 md:pt-44">
        <div className="shell">
          <p className="eyebrow">{header.eyebrow}</p>
          <h1 className="mt-6 max-w-[24ch] text-display-xl">{header.h1}</h1>
          <p className="measure mt-8 text-body-lg text-fg-secondary">{header.sub}</p>
        </div>
      </section>

      <AnchorNav />

      {/* Panels */}
      <section id="panels" className="scroll-mt-36 py-24 md:py-28">
        <div className="shell grid gap-14 lg:grid-cols-[7fr_5fr] lg:gap-16">
          <div>
            <Reveal>
              <h2 className="text-display-lg">{panels.h2}</h2>
              <p className="measure mt-7 text-body-lg text-fg-secondary">{panels.lead}</p>
            </Reveal>

            <Reveal delay={0.08}>
              <h3 className="eyebrow mt-14">{panels.techHeading}</h3>
              <dl className="mt-6 border-t border-line-subtle">
                {panels.tech.map((tech) => (
                  <div key={tech.name} className="grid gap-2 border-b border-line-subtle py-5 md:grid-cols-[5fr_7fr] md:gap-8">
                    <dt className="font-display text-body font-medium text-fg-primary">{tech.name}</dt>
                    <dd className="text-body text-fg-secondary">{tech.effect}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="measure mt-12 flex flex-col gap-6 text-body text-fg-secondary">
                {panels.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="flex flex-col gap-12">
            <Reveal>
              <picture>
                <source srcSet={panels.image.webp} type="image/webp" />
                <img
                  src={panels.image.png}
                  alt={panels.image.alt}
                  width={panels.image.width}
                  height={panels.image.height}
                  loading="lazy"
                  decoding="async"
                  className="h-auto w-full"
                />
              </picture>
            </Reveal>

            <Reveal delay={0.08}>
              <h3 className="eyebrow">{panels.configHeading}</h3>
              <ul className="mt-6 flex flex-col gap-5 border-t border-line-subtle pt-6">
                {panels.configurations.map((config) => (
                  <li key={config.name}>
                    <span className="font-display text-body font-medium text-fg-primary">{config.name}</span>
                    <p className="mt-1.5 text-body text-fg-secondary">{config.body}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Inverters */}
      <section id="inverters" className="grid-field scroll-mt-36 border-t border-line-subtle bg-ink-900/30 py-24 md:py-28">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-[5fr_7fr] lg:gap-16">
            <Reveal>
              <h2 className="text-display-lg">{inverters.h2}</h2>
              <p className="mt-7 text-body-lg text-fg-secondary">{inverters.lead}</p>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="measure text-body text-fg-secondary lg:pt-4">{inverters.body}</p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="mt-16 overflow-x-auto">
              <table className="w-full min-w-[42rem] border-collapse text-left">
                <caption className="sr-only-live">{inverters.table.caption}</caption>
                <thead>
                  <tr>
                    <th scope="col" className="w-[22%] border-b border-line-strong py-4 pr-6 text-caption font-medium uppercase tracking-[0.14em] text-fg-muted">
                      <span className="sr-only-live">Attribute</span>
                    </th>
                    {inverters.table.columns.map((column) => (
                      <th
                        key={column}
                        scope="col"
                        className="border-b border-line-strong py-4 pr-6 font-display text-title font-medium text-fg-primary"
                      >
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {inverters.table.rows.map((row) => (
                    <tr key={row.label}>
                      <th
                        scope="row"
                        className="border-b border-line-subtle py-4 pr-6 align-top text-caption font-medium uppercase tracking-[0.12em] text-fg-muted"
                      >
                        {row.label}
                      </th>
                      {row.values.map((value, i) => (
                        <td
                          key={`${row.label}-${i}`}
                          className="border-b border-line-subtle py-4 pr-6 align-top font-mono text-caption text-fg-secondary"
                        >
                          {value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="measure mt-12 text-body-lg text-fg-secondary">{inverters.guidance}</p>
          </Reveal>
        </div>
      </section>

      {/* Batteries */}
      <section id="batteries" className="scroll-mt-36 py-24 md:py-32">
        <div className="shell grid gap-14 lg:grid-cols-[7fr_5fr] lg:gap-20">
          <div>
            <Reveal>
              <h2 className="text-display-lg">{batteries.h2}</h2>
              <p className="mt-7 text-body-lg text-fg-secondary">{batteries.lead}</p>
              <p className="measure mt-10 text-body text-fg-secondary">{batteries.body}</p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-12 border-l border-amber-400 pl-6">
                <h3 className="font-display text-title text-fg-primary">{batteries.whyHeading}</h3>
                <p className="measure mt-4 text-body text-fg-secondary">{batteries.whyBody}</p>
              </div>
            </Reveal>
          </div>

          <div className="flex flex-col gap-14">
            <Reveal>
              {/* No REX product photo exists — the warranty figure carries the section instead. */}
              <div className="border-y border-line-subtle py-10">
                <p className="flex items-baseline gap-3">
                  <span className="font-mono text-display-xl leading-none text-amber-400">{batteries.figure.value}</span>
                  <span className="font-mono text-display-md text-fg-secondary">{batteries.figure.unit}</span>
                </p>
                <p className="mt-5 text-caption uppercase tracking-[0.14em] text-fg-muted">{batteries.figure.caption}</p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h3 className="eyebrow">{batteries.doesHeading}</h3>
              <ul className="mt-6 border-t border-line-subtle">
                {batteries.does.map((item) => (
                  <li key={item} className="border-b border-line-subtle py-4 text-body text-fg-secondary">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Installation materials */}
      <section id="materials" className="grid-field scroll-mt-36 border-t border-line-subtle bg-ink-900/30 py-24 md:py-28">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-[5fr_7fr] lg:gap-16">
            <Reveal>
              <h2 className="text-display-lg">{materials.h2}</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="measure text-body-lg text-fg-secondary">{materials.lead}</p>
            </Reveal>
          </div>

          <RevealGroup className="mt-16 grid gap-x-10 gap-y-12 border-t border-line-strong pt-10 sm:grid-cols-2 lg:grid-cols-4" stagger={0.06}>
            {materials.groups.map((group) => (
              <RevealItem key={group.category}>
                <h3 className="font-mono text-caption uppercase tracking-[0.14em] text-amber-400">{group.category}</h3>
                <ul className="mt-5">
                  {group.items.map((item) => (
                    <li key={item} className="border-b border-line-subtle py-2.5 text-body text-fg-secondary">
                      {item}
                    </li>
                  ))}
                </ul>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.1}>
            <p className="mt-14 max-w-[46ch] font-display text-display-md text-fg-primary">{materials.closing}</p>
          </Reveal>

          <RevealGroup className="mt-16 grid gap-8 sm:grid-cols-3" stagger={0.07}>
            {materials.images.map((image) => (
              <RevealItem key={image.webp}>
                <picture>
                  <source srcSet={image.webp} type="image/webp" />
                  <img
                    src={image.png}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    loading="lazy"
                    decoding="async"
                    className="h-auto w-full"
                  />
                </picture>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="border-t border-line-subtle py-24 md:py-28">
        <div className="shell grid gap-10 lg:grid-cols-[7fr_5fr] lg:items-end">
          <Reveal>
            <h2 className="max-w-[20ch] text-display-lg">{cta.h2}</h2>
            <p className="measure mt-6 text-body-lg text-fg-secondary">{cta.sub}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="flex flex-wrap items-center gap-4">
              <a href={cta.primary.href} className="btn-amber">
                <Phone strokeWidth={1.5} size={18} aria-hidden="true" />
                {cta.primary.label}
              </a>
              <Link to={cta.secondary.href} className="btn-ghost">
                {cta.secondary.label}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
