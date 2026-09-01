import type { Metadata } from 'next';
import Link from 'next/link';
import { SERVICES, site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Site development, flat work, shell, masonry, beam forming and framing — one licensed crew serving builders across Southwest Florida.',
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Services</span>
        <h1 className="page-hero-title">Site work through framing. One crew.</h1>
        <p className="page-hero-sub">
          From site prep to final finish, our crew pours, forms and finishes to plan — so the trades that follow us
          never have to fix our work.
        </p>
      </section>

      <section className="section">
        {SERVICES.map((s, i) => (
          <div className="svc-detail rv" id={s.slug} key={s.slug}>
            <div>
              <span className="svc-detail-index">{String(i + 1).padStart(2, '0')} / Channel Mark Shell</span>
              <h2 className="svc-detail-title">{s.name}</h2>
            </div>
            <div>
              <p className="svc-detail-desc">{s.description}</p>
              <div className="svc-points">
                {s.points.map((p) => (
                  <div className="svc-point" key={p}>
                    {p}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="cta-band">
        <p className="cta-eyebrow">Quality construction from the ground up.</p>
        <h2 className="cta-title">Not sure where your project fits?</h2>
        <p className="cta-sub">Send us the scope and we&apos;ll get you a number — site work through framing.</p>
        <div className="cta-actions">
          <Link href="/contact" className="btn-teal">
            Get a Free Quote
          </Link>
          <a href={site.phoneHref} className="btn-outline">
            Call {site.phone}
          </a>
        </div>
      </section>
    </>
  );
}
