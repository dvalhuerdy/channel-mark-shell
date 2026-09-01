import Link from 'next/link';
import { site, SERVICES } from '@/lib/site';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer>
      <div className="ft">
        <div className="ft-brand">
          <Logo variant="stacked" markSize={44} className="ft-brand-logo" />
          <p className="fs">
            Licensed shell &amp; structural contractor serving builders and developers across Southwest Florida.
          </p>
          <div className="ft-c">
            <a href={site.phoneHref}>{site.phone}</a>
          </div>
          <div className="ft-c">{site.address}</div>
          <div className="ft-c">{site.hours}</div>
        </div>
        <div className="ft-col">
          <h4>Pages</h4>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="ft-col">
          <h4>Services</h4>
          <ul>
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link href={`/services#${s.slug}`}>{s.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="ft-col">
          <h4>Service Area</h4>
          <ul>
            <li>
              <Link href="/contact">Cape Coral</Link>
            </li>
            <li>
              <Link href="/contact">Fort Myers</Link>
            </li>
            <li>
              <Link href="/contact">Punta Gorda</Link>
            </li>
            <li>
              <Link href="/contact">Port Charlotte</Link>
            </li>
            <li>
              <Link href="/contact">Naples</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="fb">
        <span className="fb-copy">
          &copy; {new Date().getFullYear()} {site.legalName} · License {site.license} · All rights reserved.
        </span>
        <div className="fb-badges">
          <span>Licensed</span>
          <span>Insured</span>
          <span>SWFL Local</span>
        </div>
      </div>
    </footer>
  );
}
