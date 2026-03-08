'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 10);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isHome = pathname === '/';
  const isAbout = pathname === '/about';
  const isContact = pathname === '/contact';
  const isClasses = pathname === '/classes';
  const isLearn =
    pathname === '/appliance-repair' ||
    pathname === '/electronics-fundamentals' ||
    pathname === '/control-board-repair' ||
    pathname === '/diagnostic-tools' ||
    pathname === '/appliance-troubleshooting';

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      <div className="container nav-wrapper">
        <Link href="/" className="nav-logo" aria-label="NIT Home">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
          </svg>
          NIT
        </Link>

        <nav className="nav-links" aria-label="Main navigation">
          <Link href="/" className={isHome ? 'active' : ''}>Home</Link>
          <Link href="/about" className={isAbout ? 'active' : ''}>About</Link>
          <Link href="/classes" className={isClasses ? 'active' : ''}>Classes</Link>
          <Link href="/appliance-repair" className={isLearn ? 'active' : ''}>Learn</Link>
          <Link href="/contact" className={isContact ? 'active' : ''}>Contact</Link>
        </nav>

        <button
          className={`nav-toggle${mobileOpen ? ' nav-open' : ''}`}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((o) => !o)}
        >
          <svg className="icon-open" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
          <svg className="icon-close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      <nav id="mobile-nav" className={`mobile-nav${mobileOpen ? ' open' : ''}`} aria-label="Mobile navigation">
        <Link href="/" className={isHome ? 'active' : ''} onClick={closeMobile}>Home</Link>
        <Link href="/about" className={isAbout ? 'active' : ''} onClick={closeMobile}>About</Link>
        <Link href="/classes" className={isClasses ? 'active' : ''} onClick={closeMobile}>Classes</Link>
        <Link href="/appliance-repair" className={isLearn ? 'active' : ''} onClick={closeMobile}>Learn</Link>
        <Link href="/contact" className={isContact ? 'active' : ''} onClick={closeMobile}>Contact</Link>
      </nav>
    </header>
  );
}
