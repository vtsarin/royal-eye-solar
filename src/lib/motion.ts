import type { Variants } from 'framer-motion';
import Lenis from '@studio-freight/lenis';

export const easeOut = [0.16, 1, 0.3, 1] as const;
export const easeSnap = [0.3, 0.0, 0.2, 1] as const;
export const spring = { type: 'spring', stiffness: 220, damping: 26, mass: 0.9 } as const;

export const viewportOnce = { once: true, margin: '-12% 0px' } as const;

export const entrance: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
};

export const staggerContainer = (staggerChildren = 0.07, delayChildren = 0): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren, delayChildren } },
});

export const pageTransition: Variants = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.24, ease: easeOut } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.24, ease: easeSnap } },
};

export const cardHover = { y: -4, transition: { duration: 0.25, ease: easeSnap } } as const;
export const pressTap = { scale: 0.985 } as const;

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let lenis: Lenis | null = null;

export function initLenis(): Lenis | null {
  if (prefersReducedMotion()) return null;
  lenis = new Lenis({ lerp: 0.09 });
  const raf = (time: number) => {
    lenis?.raf(time);
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);
  return lenis;
}

export const getLenis = () => lenis;
