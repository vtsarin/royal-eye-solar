import { howItWorks } from '../lib/content';
import { Reveal, RevealGroup, RevealItem } from '../components/Reveal';

/** A numbered editorial list, same treatment as Benefits. Not cards. */
export function HowItWorks() {
  return (
    <section className="border-t border-line-subtle py-24 md:py-28">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">{howItWorks.eyebrow}</p>
          <h2 className="mt-6 max-w-[24ch] text-display-lg">{howItWorks.h2}</h2>
        </Reveal>

        <RevealGroup className="mt-16 border-t border-line-subtle" stagger={0.08}>
          {howItWorks.items.map((item) => (
            <RevealItem key={item.index}>
              <div className="grid gap-3 border-b border-line-subtle py-9 md:grid-cols-[auto_5fr_7fr] md:gap-10 md:py-11">
                <span className="font-mono text-caption text-amber-400 md:pt-2">{item.index}</span>
                <h3 className="font-display text-display-md text-fg-primary md:max-w-[16ch]">{item.title}</h3>
                <p className="measure text-body-lg text-fg-secondary md:pt-2">{item.body}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
