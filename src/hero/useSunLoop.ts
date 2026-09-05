import { useEffect } from 'react';
import { useMotionValue } from 'framer-motion';
import { prefersReducedMotion } from '../lib/motion';

const CYCLE_MS = 20_000;
/** Apex of the arc — the single frame the hero holds under reduced motion. */
const STATIC_FRAME = 0.5;

/**
 * One rAF loop, one value. Everything in the hero derives from the returned
 * MotionValue, so no frame ever triggers a React render.
 */
export function useSunLoop(rootRef: React.RefObject<HTMLElement>) {
  const t = useMotionValue(STATIC_FRAME);

  useEffect(() => {
    if (prefersReducedMotion()) {
      t.set(STATIC_FRAME);
      rootRef.current?.setAttribute('data-running', 'false');
      return;
    }

    const root = rootRef.current;
    const paused = { offscreen: false, hidden: document.hidden };
    const isPaused = () => paused.offscreen || paused.hidden;

    let frame: number | undefined;
    let elapsed = 0;
    let last: number | null = null;

    const publish = () => root?.setAttribute('data-running', String(!isPaused()));

    const tick = (ts: number) => {
      if (isPaused()) {
        frame = undefined;
        last = null;
        return;
      }
      if (last !== null) elapsed += ts - last;
      last = ts;
      t.set((elapsed % CYCLE_MS) / CYCLE_MS);
      frame = requestAnimationFrame(tick);
    };

    const resume = () => {
      if (frame === undefined && !isPaused()) {
        last = null;
        frame = requestAnimationFrame(tick);
      }
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        paused.offscreen = !entry.isIntersecting;
        publish();
        resume();
      },
      { threshold: 0.15 },
    );
    if (root) io.observe(root);

    const onVisibility = () => {
      paused.hidden = document.hidden;
      publish();
      resume();
    };
    document.addEventListener('visibilitychange', onVisibility);

    elapsed = STATIC_FRAME * CYCLE_MS;
    publish();
    frame = requestAnimationFrame(tick);

    return () => {
      io.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
      if (frame !== undefined) cancelAnimationFrame(frame);
    };
  }, [rootRef, t]);

  return t;
}
