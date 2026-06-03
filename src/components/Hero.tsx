'use client';

import React from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`${styles.heroContent} container`}>
        <h1 className={styles.heading}>
          Get More Clients
          <span className={styles.headingHighlight}>With A Proven Sales System</span>
          <span className={styles.headingHighlight}>For IT Service Providers</span>
        </h1>
        <p className={styles.subtext}>
          EVIT helps IT service providers scale revenue and expand globally. We install a proven IT sales & lead generation system—so founders and small sales teams build a predictable pipeline and get more clients.
        </p>
        <div className={styles.ctaContainer}>
          <button className="btn-primary">
            Book Free Consultation
            <span className="arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
