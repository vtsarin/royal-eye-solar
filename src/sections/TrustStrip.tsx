import { BatteryCharging, CalendarDays, HardHat, MapPin, type LucideIcon } from 'lucide-react';
import { StatNumber } from '../components/StatNumber';
import { trustStrip } from '../lib/content';

/* Decorative markers — the label text carries the meaning, so they stay aria-hidden. */
const icons: Record<string, LucideIcon> = {
  'Operating since': CalendarDays,
  'Years in the field': HardHat,
  'Locations across Kerala': MapPin,
  'Month battery warranty': BatteryCharging,
};

/** A rule, not a section — tight vertical padding by design. */
export function TrustStrip() {
  return (
    <section className="border-y border-line-subtle bg-ink-900/40" aria-label="Royal Eye in numbers">
      <dl className="shell grid grid-cols-2 divide-line-subtle md:grid-cols-4 md:divide-x">
        {trustStrip.map((stat, i) => {
          const Icon = icons[stat.label];
          return (
            <div
              key={stat.label}
              className={`flex flex-col gap-1.5 py-8 md:py-9 ${i % 2 === 1 ? 'border-l border-line-subtle pl-6 md:border-l-0 md:pl-8' : 'md:pl-8'} ${
                i < 2 ? 'border-b border-line-subtle md:border-b-0' : ''
              } ${i === 0 ? 'md:pl-0' : ''}`}
            >
              <dd className="font-mono text-display-md text-fg-primary">
                <StatNumber value={stat.value} />
              </dd>
              <dt className="flex items-center gap-2 text-caption text-fg-muted">
                {Icon && <Icon strokeWidth={1.5} size={15} aria-hidden="true" className="shrink-0 text-amber-400/70" />}
                {stat.label}
              </dt>
            </div>
          );
        })}
      </dl>
    </section>
  );
}
