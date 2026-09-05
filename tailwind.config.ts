import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: { 950: '#05070F', 900: '#0A0E1A', 850: '#0E1422', 800: '#141B2D' },
        navy: { 700: '#16205C', 500: '#2A3A9E', 300: '#5A6BD6' },
        amber: { 400: '#FFB020', 300: '#FFC94D', 100: '#FFE9BF' },
        lime: { 400: '#8FD14F' },
        fg: { primary: '#F3F5FB', secondary: '#9BA3BC', muted: '#646C87' },
        line: {
          subtle: 'rgba(255,255,255,0.07)',
          DEFAULT: 'rgba(255,255,255,0.12)',
          strong: 'rgba(255,255,255,0.20)',
        },
      },
      fontFamily: {
        display: ['Sora', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'display-xl': ['var(--fs-display-xl)', { lineHeight: '0.95', letterSpacing: '-0.035em' }],
        'display-lg': ['var(--fs-display-lg)', { lineHeight: '1.02', letterSpacing: '-0.03em' }],
        'display-md': ['var(--fs-display-md)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        title: ['1.25rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'body-lg': ['1.0625rem', { lineHeight: '1.7' }],
        body: ['0.9375rem', { lineHeight: '1.7' }],
        caption: ['0.8125rem', { lineHeight: '1.5' }],
        eyebrow: ['0.6875rem', { lineHeight: '1.5', letterSpacing: '0.18em' }],
      },
      borderRadius: { control: '4px', card: '10px', pill: '999px' },
      maxWidth: { content: '1240px', measure: '68ch' },
      borderColor: { DEFAULT: 'rgba(255,255,255,0.07)' },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.16, 1, 0.30, 1)',
        snap: 'cubic-bezier(0.30, 0.00, 0.20, 1)',
      },
    },
  },
  plugins: [],
} satisfies Config;
