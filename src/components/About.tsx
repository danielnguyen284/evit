'use client';

import React from 'react';
import Image from 'next/image';
import styles from './About.module.css';

interface CardItem {
  id: number;
  line1: string;
  line2: string;
}

const cardsData: CardItem[] = [
  { id: 1, line1: 'RIGHT', line2: 'APPROACH' },
  { id: 2, line1: 'RIGHT', line2: 'SALES CHANNELS' },
  { id: 3, line1: 'RIGHT', line2: 'SERVICE OFFERINGS' },
  { id: 4, line1: 'RIGHT', line2: 'CLIENTS' },
];

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <span className={styles.category}>About Company</span>
        <h2 className={styles.title}>EVIT Organization</h2>
        
        <p className={styles.desc}>
          At EVIT Organization, we transform global expansion from a daunting task into a step-by-step journey. 
          With a proven framework, we specialize in creating sustainable, scalable growth strategies that provide:
        </p>

        {/* 4 Cards Grid */}
        <div className="about-grid">
          {cardsData.map((card) => (
            <div key={card.id} className="glow-card">
              <div className={styles.iconContainer}>
                <Image
                  src="/assets/icon-checkmark.png"
                  alt="Checkmark Icon"
                  width={84}
                  height={84}
                  className={styles.iconImage}
                />
              </div>
              <h3 className="card-title">
                <span className={styles.titleLine1}>{card.line1}</span>
                <span className={styles.titleLine2}>{card.line2}</span>
              </h3>
            </div>
          ))}
        </div>

        <p className={styles.bottomText}>
          Our Guaranteed Consulting Services guide you through every critical stage—from planning to execution—ensuring 
          an efficient, successful market entry and long-term growth. Partner with EVIT Organization to unlock your global potential.
        </p>

        <div className={styles.ctaContainer}>
          <button className="btn-primary">
            Our Services
            <span className="arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
