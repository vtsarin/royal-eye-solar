import { MessageCircle } from 'lucide-react';
import { whatsapp } from '../lib/content';

/**
 * Persistent across every route. The nav's amber "Call now" pill is already
 * always visible, so this is ghost-styled (no fill) to avoid a second amber
 * fill on screen at once.
 */
export function FloatingWhatsApp() {
  return (
    <a
      href={whatsapp.href}
      target="_blank"
      rel="noreferrer"
      aria-label={whatsapp.label}
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-pill border border-line-default bg-ink-900/90 text-fg-primary shadow-[0_8px_24px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-colors duration-200 ease-snap hover:border-amber-400/60 hover:text-amber-300"
    >
      <MessageCircle strokeWidth={1.5} size={24} aria-hidden="true" />
    </a>
  );
}
