import { useEffect, useRef, useState } from 'react';
import KeralaBranches from '../assets/svg/kerala-branches.svg?react';
import { coverage } from '../lib/content';

export function BranchMap() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [activeCity, setActiveCity] = useState<string | null>(null);

  /* Markers pulse in sequence the first time the map is seen. */
  useEffect(() => {
    const wrap = wrapRef.current;
    const svg = wrap?.querySelector('svg');
    if (!wrap || !svg) return;

    svg.querySelectorAll<SVGGElement>('.branch').forEach((group, i) => {
      group.style.setProperty('--pulse-delay', `${i * 90}ms`);
    });

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        svg.setAttribute('data-in-view', 'true');
        io.disconnect();
      },
      { threshold: 0.25 },
    );
    io.observe(wrap);
    return () => io.disconnect();
  }, []);

  const onActivate = (e: React.SyntheticEvent) => {
    const city = (e.target as Element).closest<SVGGElement>('.branch')?.dataset.city;
    if (city) setActiveCity(city);
  };

  const active = coverage.cities.find((city) => city.name === activeCity);

  return (
    <div ref={wrapRef} className="relative">
      <div
        onMouseOver={onActivate}
        onFocus={onActivate}
        onMouseLeave={() => setActiveCity(null)}
        onBlur={() => setActiveCity(null)}
      >
        <KeralaBranches
          className="mx-auto h-auto w-full max-w-[520px]"
          style={
            {
              '--map-fill': 'rgba(255,255,255,0.035)',
              '--map-stroke': 'rgba(255,255,255,0.22)',
              '--map-leader': 'rgba(255,255,255,0.16)',
              '--map-dot': '#FFB020',
              '--map-label': '#F3F5FB',
              '--map-hq': '#FFB020',
            } as React.CSSProperties
          }
        />
      </div>

      <p aria-live="polite" className="mt-6 min-h-[3rem] text-body text-fg-secondary md:absolute md:bottom-4 md:left-0 md:mt-0 md:max-w-[19rem]">
        {active ? (
          <>
            <span className="block font-display text-title text-fg-primary">{active.name}</span>
            <span className="text-caption text-fg-secondary">{active.reveal}</span>
          </>
        ) : null}
      </p>
    </div>
  );
}
