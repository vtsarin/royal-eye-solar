import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { productPillars } from '../lib/content';
import { cardHover, entrance, viewportOnce } from '../lib/motion';
import { Reveal } from '../components/Reveal';

/* Two large, two small, at differing vertical offsets — deliberately not a 4-up grid. */
const layout: Record<string, string> = {
  '01': 'lg:col-span-7 lg:row-start-1',
  '02': 'lg:col-span-5 lg:row-start-1 lg:mt-20',
  '03': 'lg:col-span-4 lg:row-start-2 lg:-mt-2',
  '04': 'lg:col-span-6 lg:col-start-6 lg:row-start-2 lg:mt-14',
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
              <motion.div whileHover={cardHover} className="h-full">
                <Link
                  to={pillar.href}
                  className={`surface-card group flex h-full flex-col justify-between gap-6 p-7 md:p-9 ${
                    pillar.size === 'large' ? 'lg:min-h-[23rem]' : 'lg:min-h-[18rem]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-6">
                    <span className="font-mono text-caption text-amber-400">{pillar.index}</span>
                    <ArrowUpRight
                      strokeWidth={1.5}
                      size={20}
                      aria-hidden="true"
                      className="text-fg-muted transition-colors duration-200 group-hover:text-amber-400"
                    />
                  </div>

                  {/* Product cutout, right-aligned so it plays against the left-set type. */}
                  <div className="flex justify-end">
                    <img
                      src={pillar.image.src}
                      alt=""
                      aria-hidden="true"
                      width={pillar.image.width}
                      height={pillar.image.height}
                      loading="lazy"
                      decoding="async"
                      className={`h-auto w-auto object-contain transition-transform duration-[350ms] ease-snap group-hover:scale-[1.03] ${
                        pillar.size === 'large' ? 'max-h-[172px]' : 'max-h-[124px]'
                      }`}
                    />
                  </div>

                  <div>
                    <h3
                      className={`text-fg-primary ${
                        pillar.size === 'large' ? 'text-display-md' : 'text-title font-display'
                      }`}
                    >
                      {pillar.title}
                    </h3>
                    <p className={`mt-4 text-body text-fg-secondary ${pillar.size === 'large' ? 'max-w-[44ch]' : 'max-w-[38ch]'}`}>
                      {pillar.body}
                    </p>
                  </div>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
