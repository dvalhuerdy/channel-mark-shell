import type { Metadata } from 'next';
import Link from 'next/link';
import { SERVICES, site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Site work, flat work, shell, masonry, beam forming and framing — one licensed crew serving builders across Southwest Florida.',
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Services</span>
        <h1 className="page-hero-title">Site work through framing. One crew.</h1>
        <p className="page-hero-sub">
          Six trades under one license and one call. Every scope is set to plan, checked to tolerance, and handed
          off ready for the next crew — no gaps, no re-work, no surprises at phase inspection.
        </p>
      </section>

      <section className="section">
        {SERVICES.map((s, i) => (
          <div className="svc-detail rv" id={s.slug} key={s.slug}>
            <div>
              <span className="svc-detail-index">{String(i + 1).padStart(2, '0')} / Shell Division</span>
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
        <h2 className="cta-title">Not sure where your project fits?</h2>
        <p className="cta-sub">
          Send the plans and we&apos;ll scope it — site work through framing, one number back in three business
          days.
        </p>
        <div className="cta-actions">
          <Link href="/contact" className="btn-red">
            Request a Quote
          </Link>
          <a href={site.phoneHref} className="btn-outline">
            Call {site.phone}
          </a>
        </div>
      </section>
    </>
  );
}
