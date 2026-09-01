import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { TRUST_POINTS, site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Channel Mark Shell is a licensed general contractor based in Cape Coral with over 30 years in the field, serving builders and developers across Southwest Florida.',
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">About</span>
        <h1 className="page-hero-title">Built tough. Finished right.</h1>
        <p className="page-hero-sub">
          Channel Mark Shell is a licensed general contractor based in Cape Coral, working site work through
          framing for builders and developers across Southwest Florida.
        </p>
      </section>

      <section className="section">
        <div className="svc-detail" style={{ borderBottom: 'none', paddingBottom: 0 }}>
          <div className="rv">
            <span className="eyebrow">Who We Are</span>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.1rem)' }}>
              Where concrete strength meets craftsmanship.
            </h2>
          </div>
          <div className="rv d1">
            <p className="svc-detail-desc">
              Channel Mark Shell has spent over 30 years pouring foundations under Southwest Florida homes and
              commercial builds — site development, flat work, shell, masonry, beam forming, and framing, all under
              one crew. We&apos;re a licensed general contractor ({site.license}) based in Cape Coral, working
              across Cape Coral, Fort Myers and greater SWFL.
            </p>
            <p className="svc-detail-desc" style={{ marginTop: 16 }}>
              We talk like the trade, not the marketing department: forms set, rebar tied, inspection passed. The
              work is the proof.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-head left">
          <span className="eyebrow">Credentials</span>
          <h2 className="section-title">Proof, not adjectives.</h2>
        </div>
        <div className="trust-grid">
          {TRUST_POINTS.map((t, i) => (
            <div className={`trust-item rv d${i % 3}`} key={t.label}>
              <div className="trust-label">{t.label}</div>
              <div className="trust-value">{t.value}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head left">
          <span className="eyebrow">The Fleet</span>
          <h2 className="section-title">You&apos;ve probably already seen us.</h2>
        </div>
        <div className="photo-banner rv">
          <Image src="/photos/trucks.png" alt="Channel Mark Shell wrapped fleet trucks" fill sizes="100vw" style={{ objectFit: 'cover' }} />
          <div className="photo-banner-caption">Site · Flat Work · Shell · Masonry · Beam Forming · Framing</div>
        </div>
      </section>

      <section className="cta-band">
        <p className="cta-eyebrow">Quality construction from the ground up.</p>
        <h2 className="cta-title">Work with a crew that shows up.</h2>
        <p className="cta-sub">
          {site.license} · Certificate of insurance on request.
        </p>
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
