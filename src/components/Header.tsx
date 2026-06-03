'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${isSticky ? styles.headerSticky : ''}`}>
      <div className={`${styles.navContainer} container`}>
        {/* Logo */}
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          <Image
            src="/assets/logo.png"
            alt="EVIT Logo"
            width={120}
            height={48}
            className={styles.logoImage}
            style={{ width: 'auto', height: '48px' }}
            priority
          />
        </Link>

        {/* Menu Navigation */}
        <nav>
          <ul className={`${styles.navMenu} ${isMenuOpen ? styles.navMenuActive : ''}`}>
            <li>
              <Link href="/" className={`${styles.navLink} ${styles.navLinkActive}`} onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link href="#services" className={styles.navLink} onClick={closeMenu}>
                Our Services
              </Link>
            </li>
            <li>
              <Link href="#case-studies" className={styles.navLink} onClick={closeMenu}>
                Case Studies
              </Link>
            </li>
            <li>
              <Link href="#resources" className={styles.navLink} onClick={closeMenu}>
                Resources
              </Link>
            </li>
            <li>
              <Link href="#about" className={styles.navLink} onClick={closeMenu}>
                About Us
              </Link>
            </li>
            {/* Mobile View CTA */}
            <li className={styles.rightSectionMobile}>
              <button className="btn-primary" onClick={closeMenu}>
                Book Free Consultation
                <span className="arrow">→</span>
              </button>
            </li>
          </ul>
        </nav>

        {/* Desktop CTA */}
        <div className={styles.rightSection}>
          <button className="btn-primary">
            Book Free Consultation
            <span className="arrow">→</span>
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className={`${styles.mobileToggle} ${isMenuOpen ? styles.mobileToggleActive : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle Navigation Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
