'use client';

import React from 'react';
import styles from './BestFit.module.css';

const bestFitItems = [
  'IT service /products businesses with a minimum 10 employees, that want more clients and need a predictable pipeline.',
  'Teams seeking a predictable sales pipeline, not referrals.',
  'Companies ready to build scalable sales processes',
];

const notFitItems = [
  'Teams expecting instant results without investment.',
  'Businesses looking for "magic tricks".',
  'Companies under 10 people or 100.000$ revenue.',
];

export default function BestFit() {
  return (
    <section className={`${styles.section} reveal`}>
      <div className="container">
        <div className={styles.fitSection}>
          <div className={styles.bestFitCard}>
            <h2 className={styles.fitTitle}>BEST FIT</h2>
            <ul className={styles.fitList}>
              {bestFitItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className={styles.notFitBlock}>
            <h2 className={styles.fitTitle}>NOT A FIT</h2>
            <ul className={styles.fitList}>
              {notFitItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
