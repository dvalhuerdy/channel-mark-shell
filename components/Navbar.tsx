'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINKS } from '@/lib/site';
import Logo from './Logo';

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav id="nav" className={scrolled ? 'scrolled' : ''}>
      <Link href="/" className="nav-logo" aria-label="Channel Mark Shell">
        <Logo variant="mascot" height={48} priority />
      </Link>
      <ul className="nav-links">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className={pathname === link.href ? 'active' : ''}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/contact" className="nav-cta">
        Free Quote
      </Link>
    </nav>
  );
}
