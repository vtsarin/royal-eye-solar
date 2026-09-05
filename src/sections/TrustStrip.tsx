import { StatNumber } from '../components/StatNumber';
import { trustStrip } from '../lib/content';

/** A rule, not a section — tight vertical padding by design. */
export function TrustStrip() {
  return (
    <section className="border-y border-line-subtle bg-ink-900/40" aria-label="Royal Eye in numbers">
      <dl className="shell grid grid-cols-2 divide-line-subtle md:grid-cols-4 md:divide-x">
        {trustStrip.map((stat, i) => (
          <div
            key={stat.label}
            className={`flex flex-col gap-1.5 py-8 md:py-9 ${i % 2 === 1 ? 'border-l border-line-subtle pl-6 md:border-l-0 md:pl-8' : 'md:pl-8'} ${
              i < 2 ? 'border-b border-line-subtle md:border-b-0' : ''
            } ${i === 0 ? 'md:pl-0' : ''}`}
          >
            <dd className="font-mono text-display-md text-fg-primary">
              <StatNumber value={stat.value} />
            </dd>
            <dt className="text-caption text-fg-muted">{stat.label}</dt>
          </div>
        ))}
      </dl>
    </section>
  );
}
