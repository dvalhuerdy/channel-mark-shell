import Link from 'next/link';
import Image from 'next/image';
import { SERVICES, STATS, PERSONALITY_TAGS, BRAND_ONE_PAGE, site } from '@/lib/site';

const TAG_STYLES: Record<string, string> = {
  Dependable: 'tag-harbor',
  Precise: 'tag-teal',
  Hardworking: 'tag-sand',
  Local: 'tag-outline',
};

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-panel">
          <div className="hero-eyebrow-row">
            <span className="hero-rule" />
            <span>Cape Coral · Southwest Florida</span>
          </div>
          <div className="hero-mid">
            <h1 className="hero-h1">
              Quality construction
              <br />
              from the ground up
            </h1>
            <p className="hero-sub">
              Site work, shell, concrete and masonry across Southwest Florida. Licensed general contractor{' '}
              {site.license} · 30+ years in the field.
            </p>
            <div className="hero-ctas">
              <Link href="/contact" className="btn-teal">
                Get a Free Quote
              </Link>
              <Link href="/services" className="btn-outline">
                Our Services
              </Link>
            </div>
          </div>
          <div className="hero-strip">
            <a href={site.phoneHref} className="hero-phone">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z" />
              </svg>
              {site.phone}
            </a>
            <span className="hero-loc">{site.serviceArea}</span>
          </div>
        </div>
        <div className="hero-photo">
          <Image src="/photos/slab.jpg" alt="Rebar slab prep on the water, Cape Coral" fill priority sizes="(max-width: 900px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
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
              <span className="t-item">30+ Years in the Field</span>
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
            From site prep to final finish, our crew pours, forms and finishes to plan — so the trades that follow
            us never have to fix our work.
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

      <section className="section section-harbor">
        <div className="quote-block rv">
          <p className="quote-text">
            &ldquo;Built tough. Finished right.&rdquo; Channel Mark Shell is the crew builders call when the
            foundation has to be perfect — because everything above it depends on us.
          </p>
        </div>
        <div className="bop-grid">
          {BRAND_ONE_PAGE.map((b, i) => (
            <div className={`bop-card rv d${i}`} key={b.label}>
              <div className="bop-label">{b.label}</div>
              <p className="bop-copy">{b.copy}</p>
            </div>
          ))}
        </div>
        <div className="tag-row rv">
          {PERSONALITY_TAGS.map((t) => (
            <span key={t} className={`tag ${TAG_STYLES[t]}`}>
              {t}
            </span>
          ))}
        </div>
      </section>

      <section className="section photo-section">
        <div className="section-head left">
          <span className="eyebrow">On the Job</span>
          <h2 className="section-title">Real jobsites. Real crew.</h2>
        </div>
        <div className="photo-grid">
          <div className="photo-tile photo-tile-lg rv">
            <Image src="/photos/pour.jpg" alt="Crew placing concrete" fill sizes="(max-width: 900px) 100vw, 66vw" style={{ objectFit: 'cover' }} />
          </div>
          <div className="photo-tile rv d1">
            <Image src="/photos/block.jpg" alt="Block wall construction" fill sizes="(max-width: 900px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
          </div>
        </div>
        <div className="photo-banner rv">
          <Image src="/photos/trucks.jpg" alt="Channel Mark Shell wrapped fleet trucks" fill sizes="100vw" style={{ objectFit: 'cover' }} />
          <div className="photo-banner-caption">You&apos;ve probably already seen our trucks.</div>
        </div>
      </section>

      <section className="cta-band">
        <p className="cta-eyebrow">Quality construction from the ground up.</p>
        <h2 className="cta-title">Built tough. Finished right.</h2>
        <p className="cta-sub">Site work, shell, concrete and masonry across Southwest Florida.</p>
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
