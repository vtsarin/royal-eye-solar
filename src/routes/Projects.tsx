import { Phone } from 'lucide-react';
import { projects, routeMeta } from '../lib/content';
import { useSeo } from '../lib/seo';
import { Reveal, RevealGroup, RevealItem } from '../components/Reveal';
import { StatNumber } from '../components/StatNumber';
import { PhotoFilmstrip } from '../components/PhotoFilmstrip';

export default function Projects() {
  useSeo('/projects', routeMeta['/projects'].title, routeMeta['/projects'].description);

  return (
    <>
      <section className="grid-field pb-16 pt-36 md:pb-20 md:pt-44">
        <div className="shell">
          <p className="eyebrow">{projects.header.eyebrow}</p>
          <h1 className="mt-6 max-w-[22ch] text-display-xl">{projects.header.h1}</h1>
          <p className="measure mt-8 text-body-lg text-fg-secondary">{projects.header.sub}</p>
        </div>
      </section>

      <section className="border-y border-line-subtle bg-ink-900/40" aria-label="Projects in numbers">
        <dl className="shell grid grid-cols-2 divide-x divide-line-subtle">
          {projects.stats.map((stat, i) => (
            <div key={stat.label} className={`flex flex-col gap-1.5 py-8 md:py-9 ${i === 0 ? '' : 'pl-6 md:pl-8'}`}>
              <dd className="font-mono text-display-md text-fg-primary">
                <StatNumber value={stat.value} />
                {stat.unit && <span className="ml-1 text-fg-secondary">{stat.unit}</span>}
              </dd>
              <dt className="text-caption text-fg-muted">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </section>

      <section className="border-b border-line-subtle py-16 md:py-20">
        <div className="shell">
          <Reveal>
            <PhotoFilmstrip images={projects.gallery} />
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-28">
        <div className="shell">
          <RevealGroup className="border-t border-line-subtle" stagger={0.07}>
            {projects.items.map((project) => (
              <RevealItem key={project.index}>
                <div className="grid gap-4 border-b border-line-subtle py-10 md:grid-cols-[auto_5fr_7fr] md:items-baseline md:gap-10">
                  <p className="flex items-baseline gap-2 font-mono text-display-md text-amber-400 md:flex-col md:items-start md:gap-0">
                    {project.capacityKw}
                    <span className="text-title text-fg-secondary md:mt-1">kW</span>
                  </p>
                  <div>
                    <h2 className="font-display text-title text-fg-primary">{project.title}</h2>
                    <p className="mt-1.5 text-body text-fg-secondary">{project.site}</p>
                  </div>
                  <p className="text-caption uppercase tracking-[0.1em] text-fg-muted md:pt-1">{project.services}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.1} className="mt-16">
            <p className="eyebrow">{projects.workGallery.eyebrow}</p>
            <h2 className="mt-3 max-w-[28ch] text-display-md text-fg-primary">{projects.workGallery.caption}</h2>
            <div className="mt-6">
              <PhotoFilmstrip images={projects.workGallery.images} />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line-subtle py-24 md:py-28">
        <div className="shell grid gap-10 lg:grid-cols-[7fr_5fr] lg:items-end">
          <Reveal>
            <h2 className="max-w-[20ch] text-display-lg">{projects.cta.h2}</h2>
            <p className="measure mt-6 text-body-lg text-fg-secondary">{projects.cta.sub}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="flex flex-wrap items-center gap-4">
              <a href={projects.cta.primary.href} className="btn-amber">
                <Phone strokeWidth={1.5} size={18} aria-hidden="true" />
                {projects.cta.primary.label}
              </a>
              <a href={projects.cta.secondary.href} className="btn-ghost">
                {projects.cta.secondary.label}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
