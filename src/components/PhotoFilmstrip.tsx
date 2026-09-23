import { useCallback, useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { useIsMobile } from '../lib/useMedia';

export interface FilmstripImage {
  webp: string;
  webpSmall: string;
  jpg: string;
  width: number;
  height: number;
  alt: string;
}

interface Props {
  images: readonly FilmstripImage[];
  /** Milliseconds each frame holds before focus advances. */
  dwell?: number;
}

/**
 * All frames stay in place; focus moves between them, and the focused frame takes
 * the space. Advances on a timer that stops on hover, on keyboard focus, when the
 * strip leaves the viewport, and entirely under reduced motion.
 */
export function PhotoFilmstrip({ images, dwell = 5000 }: Props) {
  const [active, setActive] = useState(0);
  const [held, setHeld] = useState(false);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const isMobile = useIsMobile();
  const running = inView && !held && !reduced;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!running) return;
    const id = window.setInterval(() => setActive((i) => (i + 1) % images.length), dwell);
    return () => window.clearInterval(id);
  }, [running, dwell, images.length]);

  /**
   * Mobile is a swipeable strip, not a stack — the active frame (timer, tap,
   * keyboard) scrolls into view. Skips the initial mount: the strip may be
   * far down the page and not yet visible, and `block: 'nearest'` would drag
   * the whole page down to it before the reader has scrolled anywhere near it.
   */
  const mounted = useRef(false);
  useEffect(() => {
    if (!isMobile) return;
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    const frame = ref.current?.querySelectorAll<HTMLButtonElement>('.frame')[active];
    frame?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }, [active, isMobile]);

  /** A manual swipe moves the scroll position without setting `active` — keep the index/dwell UI honest. */
  useEffect(() => {
    if (!isMobile) return;
    const container = ref.current;
    if (!container) return;
    const frames = Array.from(container.querySelectorAll<HTMLButtonElement>('.frame'));
    const io = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries.reduce<IntersectionObserverEntry | null>(
          (best, entry) => (entry.intersectionRatio > (best?.intersectionRatio ?? 0.6) ? entry : best),
          null,
        );
        if (!mostVisible) return;
        const index = frames.indexOf(mostVisible.target as HTMLButtonElement);
        if (index !== -1) setActive(index);
      },
      { root: container, threshold: [0.6] },
    );
    frames.forEach((frame) => io.observe(frame));
    return () => io.disconnect();
  }, [isMobile, images.length]);

  const onKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
      event.preventDefault();
      const step = event.key === 'ArrowRight' ? 1 : -1;
      const next = (active + step + images.length) % images.length;
      setActive(next);
      ref.current?.querySelectorAll<HTMLButtonElement>('.frame')[next]?.focus();
    },
    [active, images.length],
  );

  return (
    <div
      ref={ref}
      className="filmstrip"
      data-running={running}
      onMouseEnter={() => setHeld(true)}
      onMouseLeave={() => setHeld(false)}
      onFocusCapture={() => setHeld(true)}
      onBlurCapture={() => setHeld(false)}
      onKeyDown={onKeyDown}
    >
      {images.map((image, i) => (
        <button
          key={image.webp}
          type="button"
          className={`frame${i === active ? ' is-active' : ''}`}
          aria-pressed={i === active}
          onClick={() => setActive(i)}
          onFocus={() => setActive(i)}
        >
          <picture>
            <source
              type="image/webp"
              sizes="(min-width: 768px) 60vw, 100vw"
              srcSet={`${image.webpSmall} 900w, ${image.webp} 1600w`}
            />
            <img
              src={image.jpg}
              alt={image.alt}
              width={image.width}
              height={image.height}
              loading="lazy"
              decoding="async"
            />
          </picture>
          <span className="frame-index" aria-hidden="true">
            {String(i + 1).padStart(2, '0')}
          </span>
          {/* Restarts on each advance because the key changes with the active frame. */}
          {i === active && <span key={active} className="frame-dwell" aria-hidden="true" />}
        </button>
      ))}
    </div>
  );
}
