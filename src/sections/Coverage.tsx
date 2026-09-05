import { BranchMap } from '../components/BranchMap';
import { Reveal } from '../components/Reveal';
import { coverage } from '../lib/content';

export function Coverage() {
  return (
    <section id="coverage" className="grid-field py-24 md:py-32">
      <div className="shell grid gap-16 lg:grid-cols-[5fr_7fr] lg:items-center lg:gap-20">
        <div>
          <Reveal>
            <p className="eyebrow">{coverage.eyebrow}</p>
            <h2 className="mt-6 max-w-[18ch] text-display-lg">{coverage.h2}</h2>
            <p className="measure mt-8 text-body-lg text-fg-secondary">{coverage.sub}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="mt-10 flex flex-col border-t border-line-subtle">
              {coverage.cities.map((city) => (
                <li
                  key={city.name}
                  className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-line-subtle py-3.5"
                >
                  <span className="font-display text-body font-medium text-fg-primary">{city.name}</span>
                  <span className={`max-w-[24ch] text-right text-caption ${city.isHq ? 'text-amber-400' : 'text-fg-muted'}`}>{city.reveal}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-caption italic text-fg-muted">{coverage.footnote}</p>
          </Reveal>
        </div>

        <Reveal delay={0.06}>
          <BranchMap />
        </Reveal>
      </div>
    </section>
  );
}
