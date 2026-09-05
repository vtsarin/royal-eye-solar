import { motion, type MotionValue } from 'framer-motion';

interface Props {
  cx: MotionValue<number>;
  cy: MotionValue<number>;
  glowScale: MotionValue<number>;
  coreOpacity: MotionValue<number>;
}

/** Sun core plus its glow. Gradient stops lifted from svg/sun-glow.svg. */
export function SunArc({ cx, cy, glowScale, coreOpacity }: Props) {
  return (
    <motion.g style={{ x: cx, y: cy }}>
      <motion.g style={{ scale: glowScale, opacity: coreOpacity }}>
        <circle r="360" fill="url(#sunGlow)" />
      </motion.g>
      <motion.circle r="34" fill="#FFE9BF" style={{ opacity: coreOpacity }} />
      <motion.circle r="52" fill="none" stroke="#FFC94D" strokeWidth="1" style={{ opacity: coreOpacity }} opacity={0.35} />
    </motion.g>
  );
}

interface RayProps {
  cx: MotionValue<number>;
  cy: MotionValue<number>;
  rotate: MotionValue<number>;
  scaleX: MotionValue<number>;
  opacity: MotionValue<number>;
}

/** A fan of light rays aimed from the sun at the array. Desktop only. */
export function SunRays({ cx, cy, rotate, scaleX, opacity }: RayProps) {
  return (
    <motion.g style={{ x: cx, y: cy, rotate, scaleX, opacity }} aria-hidden="true">
      {[-13, -6.5, 0, 6.5, 13].map((angle, i) => (
        <g key={angle} transform={`rotate(${angle})`}>
          <line
            x1="70"
            y1="0"
            x2="620"
            y2="0"
            stroke="url(#rayFade)"
            strokeWidth={i === 2 ? 2.4 : 1.4}
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
      ))}
    </motion.g>
  );
}
