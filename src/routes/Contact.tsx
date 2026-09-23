import { ArrowUpRight, Navigation, Phone as PhoneIcon } from 'lucide-react';
import { QuoteForm } from '../components/QuoteForm';
import { Reveal } from '../components/Reveal';
import { branches, contact, directPhone, headOffice, officePhones, routeMeta } from '../lib/content';
import { useSeo } from '../lib/seo';

export default function Contact() {
  useSeo('/contact', routeMeta['/contact'].title, routeMeta['/contact'].description);

  return (
    <>
      <section className="grid-field pb-20 pt-36 md:pb-24 md:pt-44">
        <div className="shell">
          <p className="eyebrow">{contact.header.eyebrow}</p>
          <h1 className="mt-6 max-w-[22ch] text-display-xl">{contact.header.h1}</h1>
          <p className="measure mt-8 text-body-lg text-fg-secondary">{contact.header.sub}</p>
        </div>
      </section>

      <section className="border-t border-line-subtle py-20 md:py-24">
        <div className="shell grid gap-16 lg:grid-cols-[7fr_5fr] lg:gap-20">
          <div>
            <Reveal>
              <h2 className="text-display-md">{contact.call.h2}</h2>
              <p className="measure mt-5 text-body text-fg-secondary">{contact.call.intro}</p>
            </Reveal>

            <Reveal delay={0.08} className="mt-10">
              <a
                href={directPhone.href}
                className="group flex min-h-[88px] flex-wrap items-center justify-between gap-x-6 gap-y-2 rounded-card border border-amber-400/40 bg-amber-400/[0.06] px-6 py-6 transition-colors duration-200 hover:border-amber-400"
              >
                <span className="flex items-center gap-3 font-mono text-display-md text-fg-primary transition-colors group-hover:text-amber-300">
                  <PhoneIcon strokeWidth={1.5} size={22} className="text-amber-400" aria-hidden="true" />
                  {directPhone.display}
                </span>
                <span className="text-caption uppercase tracking-[0.12em] text-amber-100">{directPhone.label}</span>
              </a>
            </Reveal>

            <Reveal delay={0.1}>
              <h3 className="eyebrow mt-10">{contact.call.officeHeading}</h3>
              <ul className="mt-4 border-t border-line-subtle">
                {officePhones.map((phone) => (
                  <li key={phone.href}>
                    <a
                      href={phone.href}
                      className="group flex min-h-[72px] flex-wrap items-center justify-between gap-x-6 gap-y-1 border-b border-line-subtle py-4 transition-colors duration-200 hover:border-line"
                    >
                      <span className="font-mono text-display-md text-fg-primary transition-colors group-hover:text-amber-300">
                        {phone.display}
                      </span>
                      <span className="text-caption uppercase tracking-[0.12em] text-fg-muted">{phone.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.12} className="mt-14">
              <h2 className="eyebrow">{contact.branchBlock.h2}</h2>
              <ul className="mt-6 flex flex-wrap gap-x-3 gap-y-2 border-t border-line-subtle pt-6">
                {branches.map((branch) => (
                  <li
                    key={branch}
                    className="rounded-pill border border-line-subtle px-3.5 py-1.5 text-caption text-fg-primary"
                  >
                    {branch}
                  </li>
                ))}
              </ul>
              <p className="mt-5 max-w-[40ch] text-caption text-fg-muted">{contact.branchBlock.note}</p>
            </Reveal>
          </div>

          <div className="flex flex-col gap-14">
            <Reveal>
              <h2 className="eyebrow">{contact.channels.heading}</h2>
              <ul className="mt-6 flex flex-col gap-7 border-t border-line-subtle pt-7">
                {contact.channels.items.map((channel) => (
                  <li key={channel.name}>
                    <h3 className="font-display text-body font-medium text-fg-primary">{channel.name}</h3>
                    {channel.body !== channel.linkLabel && (
                      <p className="mt-1.5 max-w-[38ch] text-body text-fg-secondary">{channel.body}</p>
                    )}
                    <a
                      href={channel.href}
                      target={channel.href.startsWith('http') ? '_blank' : undefined}
                      rel={channel.href.startsWith('http') ? 'noreferrer' : undefined}
                      className="btn-text mt-1.5"
                    >
                      {channel.linkLabel}
                      <ArrowUpRight strokeWidth={1.5} size={15} aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="eyebrow">{contact.office.h2}</h2>
              <address className="mt-6 flex flex-col gap-1 border-t border-line-subtle pt-6 not-italic text-body-lg text-fg-secondary">
                {headOffice.lines.map((line, i) => (
                  <span key={line} className={i === 0 ? 'font-display text-fg-primary' : undefined}>
                    {line}
                  </span>
                ))}
              </address>

              <a
                href={headOffice.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-text mt-4"
              >
                Get directions
                <Navigation strokeWidth={1.5} size={15} aria-hidden="true" />
              </a>

              <div className="mt-5 overflow-hidden rounded-card border border-line-subtle">
                <iframe
                  title="Royal Eye Solar Power head office location"
                  src={`https://www.google.com/maps?q=${headOffice.coordinates.lat},${headOffice.coordinates.lng}&z=16&output=embed`}
                  width="100%"
                  height="260"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block border-0"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="quote" className="grid-field scroll-mt-28 border-t border-line-subtle bg-ink-900/30 py-24 md:py-28">
        <div className="shell grid gap-14 lg:grid-cols-[5fr_7fr] lg:gap-20">
          <Reveal>
            <h2 className="text-display-lg">{contact.form.h2}</h2>
            <p className="measure mt-6 text-body-lg text-fg-secondary">{contact.form.sub}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <QuoteForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
