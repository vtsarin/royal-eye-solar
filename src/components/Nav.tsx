import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Phone, X } from 'lucide-react';
import { brand, nav, phones } from '../lib/content';
import { easeSnap } from '../lib/motion';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';

    const panel = panelRef.current;
    const focusables = panel?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
    focusables?.[0]?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        triggerRef.current?.focus();
        return;
      }
      if (e.key !== 'Tab' || !focusables?.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ease-snap ${
          scrolled ? 'border-b border-line-subtle bg-ink-900/85 backdrop-blur-xl' : 'border-b border-transparent'
        }`}
      >
      <div className="shell flex h-20 items-center justify-between gap-6">
        <Link to="/" className="flex shrink-0 flex-col gap-1" aria-label={`${brand.name} — home`}>
          <img src={brand.logo} alt={brand.name} width={150} height={33} className="h-[26px] w-auto md:h-[30px]" />
          <span className="pl-[2px] font-sans text-[0.5rem] font-medium uppercase tracking-[0.24em] text-fg-secondary md:text-[0.5625rem]">
            {brand.lockupSub}
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
          {nav.links.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                `font-display text-body font-medium transition-colors duration-200 ${
                  isActive ? 'text-fg-primary' : 'text-fg-secondary hover:text-fg-primary'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <a href={nav.cta.href} className="btn-amber !px-5 !py-2.5">
            <Phone strokeWidth={1.5} size={16} aria-hidden="true" />
            {nav.cta.label}
          </a>
        </nav>

        <button
          ref={triggerRef}
          type="button"
          onClick={() => setOpen(true)}
          className="flex h-11 w-11 items-center justify-center rounded-control border border-line-subtle text-fg-primary md:hidden"
          aria-label="Open menu"
          aria-expanded={open}
        >
          <Menu strokeWidth={1.5} size={20} aria-hidden="true" />
        </button>
      </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="fixed inset-0 z-50 flex flex-col bg-ink-950 px-6 pb-10 pt-6 md:hidden"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.32, ease: easeSnap }}
          >
            <div className="flex items-center justify-between">
              <img src={brand.logo} alt={brand.name} width={140} height={31} className="h-[26px] w-auto" />
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  triggerRef.current?.focus();
                }}
                className="flex h-11 w-11 items-center justify-center rounded-control border border-line-subtle text-fg-primary"
                aria-label="Close menu"
              >
                <X strokeWidth={1.5} size={20} aria-hidden="true" />
              </button>
            </div>

            <nav className="mt-14 flex flex-col gap-2" aria-label="Primary">
              {nav.links.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="border-b border-line-subtle py-4 font-display text-display-md text-fg-primary"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-auto pt-10">
              <p className="eyebrow mb-4">Call us</p>
              <ul className="flex flex-col gap-1">
                {phones.map((phone) => (
                  <li key={phone.href}>
                    <a
                      href={phone.href}
                      className="flex min-h-[52px] items-center justify-between gap-4 border-b border-line-subtle font-mono text-title text-fg-primary"
                    >
                      {phone.display}
                      <span className="font-sans text-caption text-fg-muted">{phone.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
