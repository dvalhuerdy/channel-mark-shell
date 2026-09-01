import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get a free quote from Channel Mark Shell. Call (239) 984-2678 or send your project details online.',
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Contact</span>
        <h1 className="page-hero-title">Get a free quote.</h1>
        <p className="page-hero-sub">
          Tell us about your project and we&apos;ll follow up shortly. For anything urgent, call us directly.
        </p>
      </section>

      <section className="section">
        <div className="contact-layout">
          <ContactForm />
          <div className="info-stack">
            <div className="info-card rv">
              <div className="info-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z" />
                </svg>
              </div>
              <div className="info-card-name">Call or Email</div>
              <div className="info-card-desc">
                <a href={site.phoneHref}>{site.phone}</a>
                <br />
                <a href={`mailto:${site.email}`}>{site.email}</a>
                <br />
                Ask for {site.contactName}
              </div>
            </div>
            <div className="info-card rv d1">
              <ul className="info-list">
                <li>
                  <span className="il-label">Office</span>
                  <span className="il-value">{site.address}</span>
                </li>
                <li>
                  <span className="il-label">Hours</span>
                  <span className="il-value">{site.hours}</span>
                </li>
                <li>
                  <span className="il-label">License</span>
                  <span className="il-value">{site.license}</span>
                </li>
                <li>
                  <span className="il-label">Service Area</span>
                  <span className="il-value">Cape Coral, Fort Myers, Punta Gorda, Port Charlotte, Naples</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
