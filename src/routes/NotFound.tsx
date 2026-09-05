import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { notFound } from '../lib/content';
import { useSeo } from '../lib/seo';

export default function NotFound() {
  useSeo('/404', `Page not found — Royal Eye Solar Power`, notFound.sub);

  return (
    <section className="grid-field flex min-h-[80svh] items-center py-32">
      <div className="shell">
        <h1 className="max-w-[18ch] text-display-xl">{notFound.h1}</h1>
        <p className="measure mt-8 text-body-lg text-fg-secondary">{notFound.sub}</p>
        <div className="mt-12 flex flex-wrap items-center gap-4">
          {notFound.buttons.map((button, i) =>
            button.href.startsWith('tel:') ? (
              <a key={button.href} href={button.href} className="btn-amber">
                <Phone strokeWidth={1.5} size={18} aria-hidden="true" />
                {button.label}
              </a>
            ) : (
              <Link key={button.href} to={button.href} className={i === 0 ? 'btn-ghost' : 'btn-text'}>
                {button.label}
              </Link>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
