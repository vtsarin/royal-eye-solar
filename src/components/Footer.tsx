import { Link } from 'react-router-dom';
import { brand, contactDetails, footer, headOffice, phones } from '../lib/content';

export function Footer() {
  return (
    <footer className="border-t border-line-subtle bg-ink-950">
      <div className="shell grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-10">
        <div>
          <img src={brand.logo} alt={brand.name} width={160} height={36} className="h-[30px] w-auto" />
          <span className="mt-1 block pl-[2px] font-sans text-[0.5625rem] font-medium uppercase tracking-[0.24em] text-fg-secondary">
            {brand.lockupSub}
          </span>
          <p className="mt-6 max-w-[38ch] text-body text-fg-secondary">{footer.blurb}</p>
        </div>

        {footer.columns.map((column) => (
          <div key={column.heading}>
            <h2 className="eyebrow mb-5">{column.heading}</h2>
            <ul className="flex flex-col gap-3">
              {column.items.map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="text-body text-fg-secondary transition-colors hover:text-amber-300">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h2 className="eyebrow mb-5">{footer.reachHeading}</h2>
          <ul className="flex flex-col gap-1.5">
            {phones.map((phone) => (
              <li key={phone.href}>
                <a
                  href={phone.href}
                  className="inline-flex min-h-[44px] items-center font-mono text-body text-fg-primary transition-colors hover:text-amber-300"
                >
                  {phone.display}
                  <span className="sr-only-live">{phone.label}</span>
                </a>
              </li>
            ))}
          </ul>
          <a
            href={`mailto:${contactDetails.email}`}
            className="mt-4 inline-flex min-h-[44px] items-center text-body text-fg-secondary transition-colors hover:text-amber-300"
          >
            {contactDetails.email}
          </a>
          <address className="mt-4 not-italic text-body text-fg-secondary">
            {headOffice.lines.slice(1).map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
        </div>
      </div>

      <div className="border-t border-line-subtle">
        <div className="shell flex flex-col gap-3 py-7 text-caption text-fg-muted md:flex-row md:items-center md:justify-between">
          <p>{footer.bottom.copyright}</p>
          <p>{footer.bottom.dealers}</p>
        </div>
      </div>
    </footer>
  );
}
