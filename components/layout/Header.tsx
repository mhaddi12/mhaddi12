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
        <Link href="#top" className="brand">
          <span className="dot">MH</span>
          Muhammad Haddi
        </Link>

        <nav className={`nav-links${menuOpen ? ' open' : ''}`} id="navLinks">
          <Link href="#about" onClick={closeMenu}>About</Link>
          <Link href="#skills" onClick={closeMenu}>Skills</Link>
          <Link href="#experience" onClick={closeMenu}>Experience</Link>
          <Link href="#projects" onClick={closeMenu}>Projects</Link>
          <Link href="#contact" className="nav-cta" onClick={closeMenu}>Get in touch</Link>
        </nav>

        <button
          className={`burger${menuOpen ? ' x' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
