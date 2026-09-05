import { useEffect } from 'react';
import type { MotionValue } from 'framer-motion';

/**
 * Pipes a MotionValue into a CSS custom property on an element. Subscription
 * only — the value never passes through React state, so no frame re-renders.
 */
export function useCssVar<T extends string | number>(
  ref: React.RefObject<SVGElement | HTMLElement>,
  name: string,
  value: MotionValue<T>,
) {
  useEffect(() => {
    const apply = (v: T) => ref.current?.style.setProperty(name, String(v));
    apply(value.get());
    return value.on('change', apply);
  }, [ref, name, value]);
}
