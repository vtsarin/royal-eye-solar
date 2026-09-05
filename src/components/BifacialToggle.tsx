import { useEffect, useRef, useState } from 'react';
import BifacialDiagram from '../assets/svg/bifacial-diagram.svg?react';
import { whyRoyalEye } from '../lib/content';

type State = 'front' | 'both';

const { labels, states, note } = whyRoyalEye.bifacialToggle;

export function BifacialToggle() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [state, setState] = useState<State>('front');
  const active = states[state];

  /* Text content can't be swapped from CSS, so the readout is written directly. */
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    svg.querySelector('#yield-value')?.replaceChildren(active.value);
    svg.querySelector('#yield-caption')?.replaceChildren(active.caption);
  }, [active]);

  return (
    <div className="rounded-card border border-line-subtle bg-ink-900/60 p-6 md:p-9">
      <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Bifacial capture comparison">
        {(['front', 'both'] as const).map((key) => (
          <button
            key={key}
            type="button"
            onClick={() => setState(key)}
            aria-pressed={state === key}
            className={`min-h-[44px] rounded-pill px-5 py-2.5 font-sans text-body font-medium transition-colors duration-200 ease-snap ${
              state === key
                ? 'bg-amber-400 text-ink-950'
                : 'border border-line-subtle text-fg-secondary hover:border-line hover:text-fg-primary'
            }`}
          >
            {labels[key]}
          </button>
        ))}
      </div>

      <div className="mt-8">
        <BifacialDiagram
          ref={svgRef}
          className="bifacial-svg h-auto w-full"
          data-state={state}
          style={
            {
              '--sun': '#FFB020',
              '--lime': '#8FD14F',
              '--cell-front': '#1B2A66',
              '--cell-rear': '#111C42',
              '--frame': '#68769C',
              '--line': 'rgba(255,255,255,0.20)',
              '--fg': '#F3F5FB',
              '--secondary': '#9BA3BC',
              '--muted': '#646C87',
            } as React.CSSProperties
          }
        />
      </div>

      <p aria-live="polite" className="sr-only-live">
        {labels[state]}: {active.rays}. Total output {active.value}, {active.caption}.
      </p>

      <div className="mt-7 flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3 border-t border-line-subtle pt-6">
        <p className="font-mono text-caption uppercase tracking-[0.14em] text-fg-muted">{active.rays}</p>
        <p className="max-w-[52ch] text-caption text-fg-muted">{note}</p>
      </div>
    </div>
  );
}
