export const VIEW = { w: 1600, h: 900 } as const;

/* Narrow screens crop the window onto the composition rather than move every element. */
export const VIEWBOX_DESKTOP = `0 0 ${VIEW.w} ${VIEW.h}`;
export const VIEWBOX_MOBILE = '640 40 960 900';
export const HORIZON = 560;

/*
 * The arc lives right of the text column and both ends sit low, behind the panel
 * array — the sun rises and sets behind the panels rather than behind a scrim.
 */
const ARC = {
  p0: { x: 1050, y: 790 },
  p1: { x: 1250, y: -400 },
  p2: { x: 1570, y: 770 },
} as const;

/** Quadratic Bézier — the sun's path. One value in, a point out. */
export function arcPoint(t: number) {
  const u = 1 - t;
  return {
    x: u * u * ARC.p0.x + 2 * u * t * ARC.p1.x + t * t * ARC.p2.x,
    y: u * u * ARC.p0.y + 2 * u * t * ARC.p1.y + t * t * ARC.p2.y,
  };
}

/** Where the rays and the sun's attention are aimed. */
export const ARRAY_FOCUS = { x: 1010, y: 800 } as const;

export interface RowSpec {
  scale: number;
  y: number;
  panels: number;
  opacity: number;
  shear: number;
}

export const DESKTOP_ROWS: RowSpec[] = [
  { scale: 0.32, y: 678, panels: 5, opacity: 0.5, shear: -30 },
  { scale: 0.48, y: 742, panels: 4, opacity: 0.7, shear: -29 },
  { scale: 0.7, y: 826, panels: 3, opacity: 0.88, shear: -27 },
  { scale: 1.0, y: 948, panels: 3, opacity: 1, shear: -26 },
];

export const MOBILE_ROWS: RowSpec[] = [
  { scale: 0.5, y: 764, panels: 3, opacity: 0.72, shear: -28 },
  { scale: 0.92, y: 908, panels: 2, opacity: 1, shear: -26 },
];

/** Array sits right of the text column and bleeds off the bottom edge. */
export const ARRAY_ORIGIN_X = 1010;

export const PANEL = { w: 187, h: 303, gap: 16, squash: 0.44 } as const;

export function rowPanelOffsets(count: number): number[] {
  const total = count * PANEL.w + (count - 1) * PANEL.gap;
  const start = -total / 2;
  return Array.from({ length: count }, (_, i) => start + i * (PANEL.w + PANEL.gap));
}

export const INVERTER = { x: 1392, y: 670, w: 84, h: 116 } as const;

/**
 * Wire runs from the array's DC side across to the inverter. Kept clear of
 * the y=900-940 band that the mobile viewBox's slice-crop can trim on
 * shorter/wider phone aspect ratios.
 */
export const WIRES: string[] = [
  'M 1232 876 C 1322 876, 1362 822, 1392 772',
  'M 1222 812 C 1312 812, 1356 782, 1392 746',
  'M 1204 770 C 1300 766, 1350 740, 1392 722',
];

export const OUTPUT_WIRE = 'M 1434 786 C 1434 842, 1452 862, 1520 866';
