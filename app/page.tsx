import Link from 'next/link';
import BeaconField from '@/components/BeaconField';
import { SERVICES, STATS, site } from '@/lib/site';

const PILLARS = [
  {
    mark: '01',
    title: 'Set the Mark',
    desc: 'Precision as the product. Elevations, lines, square corners, plumb block — we talk about tolerances, not adjectives.',
  },
  {
    mark: '02',
    title: 'Built to Stay',
    desc: 'Post-Ian Florida means wind resistance, flood elevation, and phase inspections done right the first time.',
  },
  {
    mark: '03',
    title: 'One Crew, Start to Finish',
    desc: 'Site work through framing under one license, one number, one office — nothing gets lost between trades.',
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <BeaconField />
        <div className="hero-overlay" />
        <div className="hero-inner">
          <div className="hero-eyebrow">Cape Coral · Southwest Florida</div>
          <h1 className="hero-h1">
            SET <span className="accent">THE MARK.</span>
          </h1>
          <p className="hero-sub">
            Site work, flat work, shell, masonry, beam forming and framing for builders and developers across
            Southwest Florida — the structure everything else is built on.
          </p>
          <div className="hero-ctas">
            <Link href="/contact" className="btn-red">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              Request a Quote
            </Link>
            <Link href="/services" className="btn-outline">
              Our Services
            </Link>
          </div>
        </div>
        <div className="hero-bottom">
          <a href={site.phoneHref} className="hero-phone">
            <svg viewBox="0 0 24 24">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z" />
            </svg>
            {site.phone}
          </a>
          <span className="hero-loc">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7z" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
            {site.serviceArea}
          </span>
          <div className="hero-badges">
            <span className="hero-badge">Licensed</span>
            <span className="hero-badge">Insured</span>
            <span className="hero-badge">30+ Years</span>
          </div>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div className="t-track">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i}>
              {SERVICES.map((s) => (
                <span key={s.slug}>
                  <span className="t-item">{s.name}</span>
                  <span className="t-item t-dot">·</span>
                </span>
              ))}
              <span className="t-item">Licensed {site.license}</span>
              <span className="t-item t-dot">·</span>
              <span className="t-item">Cape Coral · SWFL</span>
              <span className="t-item t-dot">·</span>
            </span>
          ))}
        </div>
      </div>

      <div className="stats">
        {STATS.map((s, i) => (
          <div key={s.label} className={`stat rv d${i}`}>
            <div className={`stat-n${s.n.length > 3 ? ' stat-n-sm' : ''}`}>
              {s.n}
              <span className="stat-sfx">{s.sfx}</span>
            </div>
            <div className="stat-lbl">{s.label}</div>
            <div className="stat-sub">{s.sub}</div>
          </div>
        ))}
      </div>

      <section className="section">
        <div className="section-head left">
          <span className="eyebrow">What We Build</span>
          <h2 className="section-title">Site work through framing. One crew.</h2>
          <p className="section-lede">
            Six trades, one number to call. Every scope below is set to plan, checked to tolerance, and handed off
            ready for the next crew.
          </p>
        </div>
        <div className="svc-grid">
          {SERVICES.map((s, i) => (
            <Link href={`/services#${s.slug}`} key={s.slug} className={`svc-card rv d${i % 3}`}>
              <div className="svc-num">{String(i + 1).padStart(2, '0')}</div>
              <div className="svc-name">{s.name}</div>
              <p className="svc-short">{s.short}</p>
              <span className="svc-link">
                View scope
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section section-navy" style={{ padding: 0 }}>
        <div className="section-head left" style={{ padding: '90px 5vw 0', margin: 0 }}>
          <span className="eyebrow">Why Channel Mark</span>
          <h2 className="section-title">Precision that nobody notices until it&apos;s missing.</h2>
        </div>
        <div className="pillars" style={{ marginTop: 48 }}>
          {PILLARS.map((p) => (
            <div className="pillar rv" key={p.mark}>
              <div className="pillar-mark">{p.mark}</div>
              <div className="pillar-title">{p.title}</div>
              <p className="pillar-desc">{p.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ height: 90 }} />
      </section>

      <section className="section">
        <div className="mark-block">
          <div className="rv">
            <span className="eyebrow">The Name</span>
            <p className="mark-quote">
              A channel marker is the fixed beacon that shows every captain where the <span className="accent">safe water</span> is.
              It doesn&apos;t move. It doesn&apos;t guess.
            </p>
          </div>
          <div className="mark-copy rv d1">
            <p>
              Everything downstream of it depends on it being exactly where it says it is — which is precisely what a
              shell contractor does for a builder. Footers, block, and beams set square the first time keep every
              trade behind us on schedule.
            </p>
            <p>
              We&apos;re Channel Mark Shell: a licensed general contractor (CGC1529824) with over 30 years in the
              field, based in Cape Coral and working across Southwest Florida.
            </p>
            <Link href="/about" className="svc-link" style={{ marginTop: 20, color: 'var(--navy)' }}>
              Read our story
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <h2 className="cta-title">Send us the plans.</h2>
        <p className="cta-sub">
          You&apos;ll have a number back in three business days. Certificate of insurance on request, same day.
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
