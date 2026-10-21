'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`nav${scrolled ? ' scrolled' : ''}`} id="nav">
      <div className="wrap nav-inner">
        <Link href="/#top" className="brand">
          <span className="dot">MH</span>
          Muhammad Haddi
        </Link>

        <nav className={`nav-links${menuOpen ? ' open' : ''}`} id="navLinks" aria-label="Main navigation">
          <Link href="/#about" onClick={closeMenu}>About</Link>
          <Link href="/#projects" onClick={closeMenu}>Projects</Link>
          <Link href="/#learning" onClick={closeMenu}>Learning</Link>
          <Link href="/#services" onClick={closeMenu}>Services</Link>
          <Link href="/#skills" onClick={closeMenu}>Tech Stack</Link>
          <Link href="/blog" onClick={closeMenu}>Blog</Link>
          <Link href="/#contact" className="nav-cta" onClick={closeMenu}>Get in touch</Link>
        </nav>

        <button
          className={`burger${menuOpen ? ' x' : ''}`}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="navLinks"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
