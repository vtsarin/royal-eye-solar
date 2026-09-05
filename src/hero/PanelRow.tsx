import { motion, type MotionValue } from 'framer-motion';
import SolarPanel from '../assets/svg/solar-panel.svg?react';
import { ARRAY_ORIGIN_X, PANEL, rowPanelOffsets, type RowSpec } from './heroGeometry';

interface Props {
  row: RowSpec;
  shadowScaleX: MotionValue<number>;
  shadowSkew: MotionValue<number>;
  shadowOpacity: MotionValue<number>;
}

export function PanelRow({ row, shadowScaleX, shadowSkew, shadowOpacity }: Props) {
  const offsets = rowPanelOffsets(row.panels);

  return (
    <g transform={`translate(${ARRAY_ORIGIN_X} ${row.y}) scale(${row.scale})`} opacity={row.opacity}>
      {offsets.map((x) => (
        <motion.g
          key={x}
          style={{ scaleX: shadowScaleX, skewX: shadowSkew, opacity: shadowOpacity }}
          transform={`translate(${x + PANEL.w / 2} 14)`}
        >
          <ellipse rx={PANEL.w * 0.44} ry="9" fill="#05070F" />
        </motion.g>
      ))}

      <g transform={`skewX(${row.shear}) scale(1 ${PANEL.squash})`}>
        {offsets.map((x) => (
          <g key={x} transform={`translate(${x} ${-PANEL.h})`}>
            <SolarPanel width={PANEL.w} height={PANEL.h} preserveAspectRatio="none" />
          </g>
        ))}
      </g>

      {/* Mounting legs, nearest rows only — depth cue without extra nodes far away. */}
      {row.scale > 0.7 &&
        offsets.map((x) => (
          <g key={`leg-${x}`} stroke="#3A4568" strokeWidth="3">
            <line x1={x + 30} y1="0" x2={x + 46} y2="-34" />
            <line x1={x + PANEL.w - 30} y1="0" x2={x + PANEL.w - 14} y2="-34" />
          </g>
        ))}
    </g>
  );
}
