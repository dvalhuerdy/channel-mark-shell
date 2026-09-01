import type { Metadata } from 'next';
import Link from 'next/link';
import { TRUST_POINTS, site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Channel Mark Shell is a licensed general contractor based in Cape Coral, FL with over 30 years in the field, serving builders and developers across Southwest Florida.',
};

const VOCAB = [
  'Square',
  'Plumb',
  'Elevation',
  'Tie Beam',
  'Lintel',
  'Footer',
  'Tolerance',
  'On Schedule',
  'Phase Inspection',
  'Shell Package',
  'Poured',
  'Set',
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">About</span>
        <h1 className="page-hero-title">The mark everything else is built on.</h1>
        <p className="page-hero-sub">
          Channel Mark Shell is a licensed general contractor based in Cape Coral, working site work through
          framing for builders and developers across Southwest Florida.
        </p>
      </section>

      <section className="section">
        <div className="mark-block">
          <div className="rv">
            <span className="eyebrow">The Name</span>
            <p className="mark-quote">
              A channel marker is the fixed beacon that shows every captain in a Cape Coral canal where the{' '}
              <span className="accent">safe water</span> is.
            </p>
          </div>
          <div className="mark-copy rv d1">
            <p>
              It doesn&apos;t move. It doesn&apos;t guess. Everything downstream of it depends on it being exactly
              where it says it is — in a city built on 400 miles of canals, by a company already named after the
              thing that gets it right.
            </p>
            <p>
              That&apos;s what a shell contractor does for a builder: footers, block, and beams set square the first
              time, so every trade behind us stays on schedule. We don&apos;t sell adjectives. We talk in
              tolerances — elevations, plumb lines, and inspections passed.
            </p>
            <p>
              Channel Mark Shell is a licensed general contractor (CGC1529824) with over 30 years in the field,
              based in Cape Coral and working across Southwest Florida.
            </p>
          </div>
        </div>
      </section>

      <div className="term-strip">
        {VOCAB.map((v) => (
          <span className="term" key={v}>
            {v}
          </span>
        ))}
      </div>

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

      <section className="section section-navy">
        <div className="section-head left">
          <span className="eyebrow">How We Work</span>
          <h2 className="section-title">Three pillars, every project.</h2>
        </div>
        <div className="mark-block" style={{ gridTemplateColumns: '1fr 1fr 1fr', gap: 32 }}>
          <div className="rv">
            <p className="pillar-mark">01</p>
            <p style={{ fontFamily: 'var(--f-disp)', fontWeight: 700, textTransform: 'uppercase', fontSize: '1.2rem', color: 'var(--white)' }}>
              Set the Mark
            </p>
            <p style={{ color: 'var(--formboard)', marginTop: 10, fontSize: '0.94rem' }}>
              Precision as the product — elevations, lines, square corners, plumb block.
            </p>
          </div>
          <div className="rv d1">
            <p className="pillar-mark">02</p>
            <p style={{ fontFamily: 'var(--f-disp)', fontWeight: 700, textTransform: 'uppercase', fontSize: '1.2rem', color: 'var(--white)' }}>
              Built to Stay
            </p>
            <p style={{ color: 'var(--formboard)', marginTop: 10, fontSize: '0.94rem' }}>
              Post-Ian Florida: wind resistance, flood elevation, and phase inspections done right the first time.
            </p>
          </div>
          <div className="rv d2">
            <p className="pillar-mark">03</p>
            <p style={{ fontFamily: 'var(--f-disp)', fontWeight: 700, textTransform: 'uppercase', fontSize: '1.2rem', color: 'var(--white)' }}>
              One Crew, Start to Finish
            </p>
            <p style={{ color: 'var(--formboard)', marginTop: 10, fontSize: '0.94rem' }}>
              Site work through framing under one license, one number, one office.
            </p>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <h2 className="cta-title">Work with a crew that sets the mark.</h2>
        <p className="cta-sub">CGC1529824 · Certificate of insurance on request, same day.</p>
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
