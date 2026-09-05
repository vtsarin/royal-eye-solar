import { Marquee } from '../components/Marquee';
import { Reveal } from '../components/Reveal';
import { marquee } from '../lib/content';

export function BrandMarquee() {
  return (
    <section className="border-y border-line-subtle bg-ink-900/40 py-16" aria-label="Authorised dealer brands">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">{marquee.eyebrow}</p>
        </Reveal>
      </div>
      <div className="mt-9">
        <Marquee items={marquee.names} />
      </div>
      <div className="shell mt-9">
        <p className="measure text-caption text-fg-muted">{marquee.caption}</p>
        <p className="sr-only-live">{marquee.names.join(', ')}</p>
      </div>
    </section>
  );
}
