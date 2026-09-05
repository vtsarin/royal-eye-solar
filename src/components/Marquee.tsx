interface Props {
  items: readonly string[];
}

/** Duplicated track, CSS transform only, paused on hover and under reduced motion. */
export function Marquee({ items }: Props) {
  const track = [...items, ...items];

  return (
    <div className="marquee relative overflow-hidden py-2" aria-hidden="true">
      <div className="marquee-track">
        {track.map((name, i) => (
          <span key={`${name}-${i}`} className="flex shrink-0 items-center">
            <span className="px-8 font-display text-display-md text-fg-secondary md:px-12">{name}</span>
            <span className="h-1 w-1 rounded-pill bg-amber-400/60" />
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink-950 to-transparent md:w-40" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink-950 to-transparent md:w-40" />
    </div>
  );
}
