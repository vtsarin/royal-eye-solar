import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { about } from '../lib/content';
import { Reveal } from '../components/Reveal';

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const raw = useTransform(scrollYProgress, [0, 1], ['6svh', '-6svh']);
  const y = useSpring(raw, { stiffness: 90, damping: 24, mass: 0.6 });

  return (
    <section id="about" className="grid-field pb-20 pt-28 md:pb-24 md:pt-36 lg:pt-44">
      <div className="shell grid gap-16 lg:grid-cols-[7fr_5fr] lg:gap-20">
        <div>
          <Reveal>
            <p className="eyebrow">{about.eyebrow}</p>
            <h2 className="mt-6 max-w-[28ch] text-display-lg">{about.h2}</h2>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="measure mt-10 flex flex-col gap-6 text-body-lg text-fg-secondary">
              {about.body.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>

        <div ref={ref} className="relative flex flex-col gap-10">
          <div className="relative">
            <motion.div style={{ y }} className="relative">
              <picture>
                <source
                  type="image/webp"
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  srcSet={`${about.image.webpSmall} 800w, ${about.image.webp} 1600w`}
                />
                <img
                  src={about.image.jpg}
                  alt={about.image.alt}
                  width={about.image.width}
                  height={about.image.height}
                  loading="lazy"
                  decoding="async"
                  className="h-auto w-full rounded-card border border-line-subtle object-cover"
                />
              </picture>
            </motion.div>
            {/* Amber frame, offset down-right of the image edge. */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 translate-x-3 translate-y-3 rounded-card border border-amber-400/70"
            />
          </div>

          <Reveal delay={0.12}>
            <blockquote className="border-l border-amber-400 pl-6">
              <p className="font-display text-display-md text-fg-primary">{about.pullQuote}</p>
            </blockquote>
            <p className="mt-6 text-body text-fg-secondary">{about.supporting}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
