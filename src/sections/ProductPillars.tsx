import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { productPillars } from '../lib/content';
import { cardHover, entrance, viewportOnce } from '../lib/motion';
import { Reveal } from '../components/Reveal';

/* Two large, two small, at differing vertical offsets — deliberately not a 4-up grid. */
const layout: Record<string, string> = {
  '01': 'lg:col-span-7 lg:row-start-1',
  '02': 'lg:col-span-5 lg:row-start-1 lg:mt-12',
  '03': 'lg:col-span-4 lg:row-start-2 lg:-mt-2',
  '04': 'lg:col-span-6 lg:col-start-6 lg:row-start-2 lg:mt-10',
};

/* Cutout height follows the card's column span, not its size label, so the
 * narrower slots keep enough width for their copy. */
const imageHeight: Record<string, string> = {
  '01': 'h-[190px]',
  '02': 'h-[150px]',
  '03': 'h-[125px]',
  '04': 'h-[150px]',
};

export function ProductPillars() {
  return (
    <section className="py-24 md:py-32">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">{productPillars.eyebrow}</p>
          <h2 className="mt-6 max-w-[22ch] text-display-lg">{productPillars.h2}</h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:gap-7 lg:grid-cols-12">
          {productPillars.items.map((pillar) => (
            <motion.div
              key={pillar.index}
              className={layout[pillar.index]}
              variants={entrance}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <motion.div whileHover={cardHover}>
                {/*
                 * Copy sits beside the cutout rather than under it: cards hug their
                 * content and neither axis is left with an empty quadrant.
                 */}
                <Link to={pillar.href} className="surface-card group relative flex flex-col p-7 md:p-9">
                  <span className="font-mono text-caption text-amber-400">{pillar.index}</span>

                  {/* Title takes the full card width so it never rags in a narrow slot. */}
                  <h3
                    className={`mt-5 text-fg-primary ${
                      pillar.size === 'large' ? 'text-display-md' : 'text-title font-display'
                    }`}
                  >
                    {pillar.title}
                  </h3>

                  {/* Copy beside the cutout, so neither axis is left with an empty quadrant. */}
                  <div className="mt-4 flex flex-col-reverse gap-5 sm:flex-row sm:items-start sm:gap-7">
                    <p className="flex-1 text-body text-fg-secondary">{pillar.body}</p>
                    <div className="flex shrink-0 justify-end sm:justify-center">
                      <img
                        src={pillar.image.src}
                        alt=""
                        aria-hidden="true"
                        width={pillar.image.width}
                        height={pillar.image.height}
                        loading="lazy"
                        decoding="async"
                        className={`w-auto max-w-full object-contain transition-transform duration-[350ms] ease-snap group-hover:scale-[1.04] ${imageHeight[pillar.index]}`}
                      />
                    </div>
                  </div>

                  <ArrowUpRight
                    strokeWidth={1.5}
                    size={20}
                    aria-hidden="true"
                    className="absolute right-7 top-7 text-fg-muted transition-colors duration-200 group-hover:text-amber-400 md:right-9 md:top-9"
                  />
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
