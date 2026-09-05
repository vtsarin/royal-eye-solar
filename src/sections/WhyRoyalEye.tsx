import { BifacialToggle } from '../components/BifacialToggle';
import { Reveal, RevealGroup, RevealItem } from '../components/Reveal';
import { whyRoyalEye } from '../lib/content';

export function WhyRoyalEye() {
  return (
    <section className="grid-field border-t border-line-subtle bg-ink-900/30 py-24 md:py-28">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-[7fr_5fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">{whyRoyalEye.eyebrow}</p>
            <h2 className="mt-6 text-display-lg">{whyRoyalEye.h2}</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="measure text-body-lg text-fg-secondary lg:pt-4">{whyRoyalEye.intro}</p>
          </Reveal>
        </div>

        <RevealGroup className="mt-20 grid gap-px overflow-hidden border-y border-line-subtle md:grid-cols-3 md:bg-line-subtle" stagger={0.08}>
          {whyRoyalEye.cells.map((cell) => (
            <RevealItem key={cell.title} className="bg-ink-950 px-0 py-9 md:px-8">
              <h3 className="font-display text-title text-fg-primary">{cell.title}</h3>
              {cell.figure ? (
                <p className="mt-5 font-mono text-display-lg text-amber-400">{cell.figure}</p>
              ) : null}
              <p className="mt-5 text-body text-fg-secondary">{cell.body}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <div className="mt-20 grid gap-12 lg:grid-cols-[7fr_5fr] lg:items-center lg:gap-16">
          <Reveal>
            <BifacialToggle />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="measure text-body-lg text-fg-secondary">{whyRoyalEye.closing}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
