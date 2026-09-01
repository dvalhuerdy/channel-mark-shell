'use client';

import { useState, type FormEvent } from 'react';
import { site } from '@/lib/site';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await res.json();

      if (!res.ok) {
        setErrorMessage(result.error || 'Something went wrong. Please call us instead.');
        setStatus('error');
        return;
      }

      setStatus('success');
    } catch {
      setErrorMessage('Something went wrong. Please call us instead.');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="info-card rv on">
        <div className="info-card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 12l2 2 4-4M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
          </svg>
        </div>
        <div className="info-card-name">Request Received</div>
        <div className="info-card-desc">
          Thanks — we&apos;ll follow up shortly. For anything urgent, call us directly at{' '}
          <a href={site.phoneHref}>{site.phone}</a>.
        </div>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="field-row">
        <div className="field">
          <label htmlFor="name">Full Name</label>
          <input id="name" name="name" type="text" required placeholder="Jane Smith" />
        </div>
        <div className="field">
          <label htmlFor="company">Company</label>
          <input id="company" name="company" type="text" placeholder="Smith Builders LLC" />
        </div>
      </div>
      <div className="field-row">
        <div className="field">
          <label htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" required placeholder="(239) 555-0100" />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required placeholder="jane@email.com" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="service">Scope Needed</label>
        <select id="service" name="service" defaultValue="">
          <option value="" disabled>
            Select a scope
          </option>
          <option value="site-work">Site Work</option>
          <option value="flat-work">Flat Work</option>
          <option value="shell">Shell (Footers / Stem Wall / Tie Beam)</option>
          <option value="masonry">Masonry</option>
          <option value="beam-forming">Beam Forming</option>
          <option value="framing">Framing</option>
          <option value="other">Other / Not Sure</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="message">Project Details</label>
        <textarea id="message" name="message" required placeholder="Address or subdivision, plan set status, target start date..." />
      </div>
      {status === 'error' && (
        <p className="form-note form-note-error">{errorMessage}</p>
      )}
      <button type="submit" className="btn-red" style={{ justifyContent: 'center' }} disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending…' : 'Send Project Details'}
      </button>
      <p className="form-note">
        We typically respond within one business day. Send plans and you&apos;ll have a number back in three
        business days. For anything urgent, call{' '}
        <a href={site.phoneHref} className="form-note-link">
          {site.phone}
        </a>{' '}
        directly.
      </p>
    </form>
  );
}
