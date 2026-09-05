import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Phone } from 'lucide-react';
import { hero } from '../lib/content';
import { easeOut } from '../lib/motion';
import { useCssVar } from '../lib/useCssVar';
import { useIsMobile } from '../lib/useMedia';
import { EnergyPulses } from './EnergyPulses';
import { SunArc, SunRays } from './SunArc';
import { PanelRow } from './PanelRow';
import {
  ARRAY_FOCUS,
  DESKTOP_ROWS,
  MOBILE_ROWS,
  VIEW,
  VIEWBOX_DESKTOP,
  VIEWBOX_MOBILE,
  arcPoint,
} from './heroGeometry';
import { useSunLoop } from './useSunLoop';



export function SunPathHero() {
  const rootRef = useRef<HTMLElement>(null);
  const arrayRef = useRef<SVGGElement>(null);
  const isMobile = useIsMobile();
  const t = useSunLoop(rootRef);

  const sunCx = useTransform(t, (v) => arcPoint(v).x);
  const sunCy = useTransform(t, (v) => arcPoint(v).y);

  /** One intensity envelope. Everything optical hangs off this. */
  const intensity = useTransform(t, [0, 0.07, 0.5, 0.93, 1], [0, 0.72, 1, 0.72, 0]);

  const glowScale = useTransform(intensity, [0, 1], isMobile ? [0.5, 0.78] : [0.72, 1.16]);
  const coreOpacity = useTransform(t, [0, 0.04, 0.96, 1], [0, 1, 1, 0]);
  const cellColor = useTransform(intensity, [0, 1], ['#22315F', '#41508F']);
  const sheenOpacity = useTransform(intensity, [0, 1], [0.02, 0.3]);
  const rayOpacity = useTransform(intensity, [0, 0.45, 1], [0, 0.22, 0.5]);

  const rayRotate = useTransform(t, (v) => {
    const p = arcPoint(v);
    return (Math.atan2(ARRAY_FOCUS.y - p.y, ARRAY_FOCUS.x - p.x) * 180) / Math.PI;
  });
  const rayScaleX = useTransform(t, (v) => {
    const p = arcPoint(v);
    return Math.hypot(ARRAY_FOCUS.x - p.x, ARRAY_FOCUS.y - p.y) / 620;
  });

  /** Shadows shorten toward noon and flip side as the sun crosses the apex. */
  const shadowScaleX = useTransform(t, [0, 0.5, 1], [2.6, 0.85, 2.6]);
  const shadowSkew = useTransform(t, [0, 0.5, 1], [46, 0, -46]);
  const shadowOpacity = useTransform(intensity, [0, 1], [0.15, 0.55]);

  useCssVar(arrayRef, '--cell', cellColor);
  useCssVar(arrayRef, '--sheen-opacity', sheenOpacity);

  const rows = isMobile ? MOBILE_ROWS : DESKTOP_ROWS;
  const words = (isMobile ? hero.h1Mobile : hero.h1).split(' ');

  return (
    <section
      ref={rootRef}
      data-running="false"
      className="grid-field relative isolate min-h-[100svh] overflow-hidden bg-ink-950"
    >
      <svg
        className="absolute inset-x-0 top-0 h-[40%] w-full md:inset-0 md:h-full"
        viewBox={isMobile ? VIEWBOX_MOBILE : VIEWBOX_DESKTOP}
        preserveAspectRatio="xMidYMid slice"
        role="img"
        aria-label={hero.ariaLabel}
      >
        <defs>
          <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFE9BF" stopOpacity="1" />
            <stop offset="18%" stopColor="#FFC94D" stopOpacity="0.92" />
            <stop offset="42%" stopColor="#FFB020" stopOpacity="0.42" />
            <stop offset="70%" stopColor="#FFB020" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#FFB020" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="rayFade" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FFC94D" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#FFB020" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="groundFade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0A0E1A" stopOpacity="0" />
            <stop offset="100%" stopColor="#05070F" stopOpacity="0.9" />
          </linearGradient>
          <clipPath id="skyClip">
            <rect width={VIEW.w} height={VIEW.h} />
          </clipPath>
        </defs>

        <g clipPath="url(#skyClip)">
          <SunArc cx={sunCx} cy={sunCy} glowScale={glowScale} coreOpacity={coreOpacity} />
          {!isMobile && (
            <SunRays cx={sunCx} cy={sunCy} rotate={rayRotate} scaleX={rayScaleX} opacity={rayOpacity} />
          )}

          <rect y={VIEW.h * 0.52} width={VIEW.w} height={VIEW.h * 0.48} fill="url(#groundFade)" />

          <g
            ref={arrayRef}
            style={
              {
                '--glass': '#080E24',
                '--frame': '#9AA8CC',
                '--busbar': 'rgba(210,226,255,0.42)',
                '--sheen': '#FFC94D',
              } as React.CSSProperties
            }
          >
            {rows.map((row) => (
              <PanelRow
                key={row.y}
                row={row}
                shadowScaleX={shadowScaleX}
                shadowSkew={shadowSkew}
                shadowOpacity={shadowOpacity}
              />
            ))}
          </g>

          {!isMobile && <EnergyPulses />}
        </g>
      </svg>

      {/* Contrast floor for the text block, held at every frame including the brightest. */}
      {/* Blends the mobile band into the ink below it; on desktop it guards the bottom edge. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[31%] h-[11%] bg-gradient-to-b from-transparent to-ink-950 md:inset-x-0 md:bottom-0 md:top-auto md:h-1/5 md:bg-gradient-to-t md:from-ink-950 md:to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden md:block md:bg-[linear-gradient(to_right,#05070F_0%,#05070F_42%,rgba(5,7,15,0.93)_56%,transparent_66%)]"
      />

      <div className="shell relative flex min-h-[100svh] flex-col justify-end pb-16 pt-[48svh] md:justify-center md:pb-40 md:pt-40">
        <motion.p
          className="eyebrow mb-7 font-mono"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          {hero.eyebrow}
        </motion.p>

        <h1 className="max-w-[15ch] text-display-xl text-fg-primary">
          {words.map((word, i) => (
            <span key={`${word}-${i}`} className="inline-block overflow-hidden pb-[0.06em] align-bottom">
              <motion.span
                className="inline-block"
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.7, delay: 0.06 + i * 0.03, ease: easeOut }}
              >
                {word}
                {i < words.length - 1 ? ' ' : ''}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          className="measure mt-8 text-body-lg text-fg-secondary"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12, ease: easeOut }}
        >
          {hero.sub}
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.22, ease: easeOut }}
        >
          <a href={hero.primary.href} className="btn-amber">
            <Phone strokeWidth={1.5} size={18} aria-hidden="true" />
            {hero.primary.label}
          </a>
          <Link to={hero.secondary.href} className="btn-ghost">
            {hero.secondary.label}
          </Link>
        </motion.div>
      </div>

      <ScrollCue />
    </section>
  );
}

function ScrollCue() {
  const { scrollY } = useScroll();
  /* Gone after 8px of scroll — a cue, not a decoration. */
  const opacity = useTransform(scrollY, [0, 8], [1, 0]);

  return (
    <motion.div
      className="pointer-events-none absolute bottom-8 left-6 hidden md:block md:left-10"
      style={{ opacity }}
    >
      <motion.span
        className="block font-mono text-eyebrow uppercase tracking-[0.18em] text-fg-muted"
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.1, ease: easeOut }}
      >
        {hero.scrollCue}
      </motion.span>
    </motion.div>
  );
}
