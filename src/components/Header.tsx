'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState(pathname === '/services' ? 'services' : 'home');

  useEffect(() => {
    const handleScrollSticky = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScrollSticky);
    return () => window.removeEventListener('scroll', handleScrollSticky);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -50% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    const handleScrollSpy = () => {
      if (window.scrollY < 100) {
        setActiveLink('home');
      }
    };
    window.addEventListener('scroll', handleScrollSpy);

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      window.removeEventListener('scroll', handleScrollSpy);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLinkClick = (id: string) => {
    setActiveLink(id);
    closeMenu();
  };

  const menuItems = [
    { id: 'home', label: 'Home', href: '/#home' },
    { id: 'services', label: 'Our Services', href: '/services' },
    { id: 'case-studies', label: 'Case Studies', href: '/#case-studies' },
    { id: 'resources', label: 'Resources', href: '/#resources' },
    { id: 'about', label: 'About Us', href: '/#about' },
  ];

  return (
    <header className={`${styles.header} ${isSticky ? styles.headerSticky : ''}`}>
      <div className={`${styles.navContainer} container`}>
        {/* Logo */}
        <Link href="/#home" className={styles.logo} onClick={() => handleLinkClick('home')}>
          <Image
            src="/assets/logo.png"
            alt="EVIT Logo"
            width={180}
            height={72}
            className={styles.logoImage}
            style={{ width: 'auto' }}
            priority
          />
        </Link>

        {/* Menu Navigation */}
        <nav>
          <ul className={`${styles.navMenu} ${isMenuOpen ? styles.navMenuActive : ''}`}>
            {menuItems.map((item) => {
              if (item.id === 'services') {
                return (
                  <li key={item.id} className={styles.hasDropdown}>
                    <Link
                      href={item.href}
                      className={`${styles.navLink} ${activeLink === item.id ? styles.navLinkActive : ''}`}
                      onClick={() => handleLinkClick(item.id)}
                    >
                      {item.label}
                      <span className={styles.dropdownArrow}>▼</span>
                    </Link>
                    <ul className={styles.dropdownMenu}>
                      <li>
                        <Link href="/services#global-expansion" onClick={closeMenu}>
                          Global Expansion Service
                        </Link>
                      </li>
                      <li>
                        <Link href="/services#god-sales-system" onClick={closeMenu}>
                          G.O.D. Sales System
                        </Link>
                      </li>
                      <li>
                        <Link href="/services#marketing-services" onClick={closeMenu}>
                          Marketing Services
                        </Link>
                      </li>
                    </ul>
                  </li>
                );
              }
              return (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className={`${styles.navLink} ${activeLink === item.id ? styles.navLinkActive : ''}`}
                    onClick={() => handleLinkClick(item.id)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
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
