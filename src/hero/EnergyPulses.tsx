import { INVERTER, OUTPUT_WIRE, WIRES } from './heroGeometry';

const DOTS_PER_WIRE = 3;

interface Props {
  /** Animated amber dots along the wires. Off on mobile — wires and the inverter stay. */
  pulses?: boolean;
}

/**
 * The DC wires and inverter graphic are the "power/connection" half of the
 * array; the amber pulses running along them are a separate, optional layer
 * driven by CSS offset-path, deliberately outside the rAF loop. Negative
 * delays start each dot pre-offset so they never march in lockstep.
 */
export function EnergyPulses({ pulses = true }: Props) {
  return (
    <g aria-hidden="true">
      <g fill="none" stroke="#2A3A9E" strokeWidth="2" opacity="0.5">
        {WIRES.map((d) => (
          <path key={d} d={d} />
        ))}
        <path d={OUTPUT_WIRE} stroke="#8FD14F" opacity="0.4" />
      </g>

      {pulses &&
        WIRES.map((d, wireIndex) =>
          Array.from({ length: DOTS_PER_WIRE }, (_, dotIndex) => {
            const duration = 2.4 + wireIndex * 0.45;
            const delay = -(duration / DOTS_PER_WIRE) * dotIndex - wireIndex * 0.31;
            return (
              <circle
                key={`${wireIndex}-${dotIndex}`}
                className="pulse-dot"
                cx={0}
                cy={0}
                r={wireIndex === 0 ? 5 : 4}
                fill="#FFB020"
                style={
                  {
                    '--wire': `path('${d}')`,
                    '--pulse-duration': `${duration}s`,
                    '--pulse-delay': `${delay}s`,
                  } as React.CSSProperties
                }
              />
            );
          }),
        )}

      <g transform={`translate(${INVERTER.x} ${INVERTER.y})`}>
        <rect
          width={INVERTER.w}
          height={INVERTER.h}
          rx="6"
          fill="#0E1422"
          stroke="rgba(255,255,255,0.20)"
          strokeWidth="1.5"
        />
        <rect x="14" y="16" width={INVERTER.w - 28} height="26" rx="3" fill="#141B2D" />
        <circle cx="26" cy="29" r="4" fill="#8FD14F" />
        <g stroke="rgba(255,255,255,0.16)" strokeWidth="1.5">
          <line x1="14" y1="60" x2={INVERTER.w - 14} y2="60" />
          <line x1="14" y1="74" x2={INVERTER.w - 14} y2="74" />
          <line x1="14" y1="88" x2={INVERTER.w - 30} y2="88" />
        </g>
      </g>
    </g>
  );
}
