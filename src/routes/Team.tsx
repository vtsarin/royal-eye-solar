import { Phone } from 'lucide-react';
import { team, routeMeta, whatsapp } from '../lib/content';
import { useSeo } from '../lib/seo';
import { Reveal } from '../components/Reveal';

/** Template page — `team.members` is empty until the client sends real names, roles and photos. */
export default function Team() {
  useSeo('/team', routeMeta['/team'].title, routeMeta['/team'].description);

  return (
    <>
      <section className="grid-field flex min-h-[70svh] items-center py-32">
        <div className="shell">
          <Reveal>
            <p className="eyebrow">{team.header.eyebrow}</p>
            <h1 className="mt-6 max-w-[20ch] text-display-xl">{team.header.h1}</h1>
            <p className="measure mt-8 text-body-lg text-fg-secondary">{team.header.sub}</p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line-subtle py-24 md:py-28">
        <div className="shell grid gap-10 lg:grid-cols-[7fr_5fr] lg:items-end">
          <Reveal>
            <h2 className="max-w-[20ch] text-display-lg">{team.cta.h2}</h2>
            <p className="measure mt-6 text-body-lg text-fg-secondary">{team.cta.sub}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="flex flex-wrap items-center gap-4">
              <a href={team.cta.primary.href} className="btn-amber">
                <Phone strokeWidth={1.5} size={18} aria-hidden="true" />
                {team.cta.primary.label}
              </a>
              <a href={whatsapp.href} className="btn-ghost">
                {team.cta.secondary.label}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
