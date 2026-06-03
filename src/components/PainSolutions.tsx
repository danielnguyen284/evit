'use client';

import React from 'react';
import Image from 'next/image';
import styles from './PainSolutions.module.css';

interface RowData {
  id: number;
  type: 'pain' | 'solution';
  label: string;
  title: string;
  desc: string;
  image: string;
  imageAlt: string;
}

const rowsData: RowData[] = [
  {
    id: 1,
    type: 'pain',
    label: 'PAIN 1',
    title: 'REVENUE DEPENDS ON THE FOUNDER',
    desc: 'Every deal flows through you. Your network built this company, but now it is the ceiling. When you stop selling, the pipeline stops. You are the business development, the closer, and the strategy all in one. Your company cannot outgrow what you personally can handle.',
    image: '/assets/pain-founder.png',
    imageAlt: 'Revenue depends on the founder 3D illustration',
  },
  {
    id: 2,
    type: 'solution',
    label: 'Solution 1',
    title: 'PREDICTABLE OUTBOUND ENGINE',
    desc: 'Gain a structured pipeline generating qualified opportunities on a consistent basis. This enables predictable revenue growth and business scalability independent of individual contributors.',
    image: '/assets/solution-growth.png',
    imageAlt: 'Predictable outbound engine 3D illustration',
  },
  {
    id: 3,
    type: 'pain',
    label: 'PAIN 2',
    title: 'NO GROWTH, REVENUE STAGNATION',
    desc: "Revenue flatlined. Referrals dried up, hired sales reps didn't deliver, and outbound efforts go nowhere. You are doing great work for existing clients but there is no system bringing new ones in. The company plateaued and nothing you have tried so far has broken through it.",
    image: '/assets/pain-founder.png',
    imageAlt: 'No growth, revenue stagnation 3D illustration',
  },
  {
    id: 4,
    type: 'solution',
    label: 'Solution 2',
    title: 'MORE CLIENTS & SUSTAINABLE GROWTH',
    desc: 'Consistently attract and convert ideal clients through data-driven targeting and strategic positioning. The outcome is sustainable, compounding growth that operates independently of referral networks or individual effort.',
    image: '/assets/solution-growth.png',
    imageAlt: 'More clients and sustainable growth 3D illustration',
  },
];

export default function PainSolutions() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.rowsContainer}>
          {rowsData.map((row) => {
            const isReverse = row.id === 3 || row.id === 4;
            return (
              <div
                key={row.id}
                className={`${styles.row} ${isReverse ? styles.rowReverse : ''} reveal`}
              >
                {/* Image Column */}
                <div className={styles.imageCol}>
                  <div className={`${styles.imageWrapper} ${row.type === 'pain' ? styles.painGlow : styles.solutionGlow}`}>
                    <Image
                      src={row.image}
                      alt={row.imageAlt}
                      width={450}
                      height={380}
                      className={styles.image}
                      priority={row.id <= 2}
                    />
                  </div>
                </div>

                {/* Text Column */}
                <div className={styles.textCol}>
                  <span className={styles.label}>{row.label}</span>
                  <h2 className={styles.title}>{row.title}</h2>
                  <p className={styles.desc}>{row.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
