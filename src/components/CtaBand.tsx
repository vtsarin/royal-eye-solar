import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Phone } from 'lucide-react';
import { ctaBand } from '../lib/content';
import { Reveal } from './Reveal';

export function CtaBand() {
  return (
    <section className="relative isolate overflow-hidden border-y border-line-subtle bg-ink-900">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_120%_at_18%_0%,rgba(255,176,32,0.16),transparent_62%)]"
      />
      <div className="shell relative grid gap-12 py-28 md:py-36 lg:grid-cols-[7fr_5fr] lg:items-end lg:gap-20">
        <Reveal>
          <h2 className="max-w-[16ch] text-display-lg">{ctaBand.h2}</h2>
          <p className="measure mt-7 text-body-lg text-fg-secondary">{ctaBand.sub}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-col items-start gap-5">
            <a href={ctaBand.primary.href} className="btn-amber w-full !py-4 text-title sm:w-auto sm:!px-9">
              <Phone strokeWidth={1.5} size={20} aria-hidden="true" />
              {ctaBand.primary.label}
            </a>
            <a href={ctaBand.secondary.href} target="_blank" rel="noreferrer" className="btn-ghost">
              <MessageCircle strokeWidth={1.5} size={18} aria-hidden="true" />
              {ctaBand.secondary.label}
            </a>
            <Link to={ctaBand.tertiary.href} className="btn-text">
              {ctaBand.tertiary.label}
              <ArrowRight strokeWidth={1.5} size={16} aria-hidden="true" />
            </Link>
            <p className="mt-2 max-w-[42ch] text-caption text-fg-muted">{ctaBand.reassurance}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
