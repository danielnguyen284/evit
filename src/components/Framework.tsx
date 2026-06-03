'use client';

import React from 'react';
import Image from 'next/image';
import styles from './Framework.module.css';

interface FrameworkStep {
  id: number;
  title: string;
  items: string[];
  icon: 'foundation' | 'execution' | 'scaling';
}

const frameworkSteps: FrameworkStep[] = [
  {
    id: 1,
    title: 'FOUNDATIONS FIRST',
    icon: 'foundation',
    items: [
      'Plan, Strategy, Sales Channels, Unique Offer, Potential Clients Profile (ICP)',
    ],
  },
  {
    id: 2,
    title: 'EXECUTION',
    icon: 'execution',
    items: [
      'Implementation of the system, focus on numbers, conversions + KPIs and tracking system.',
      'New leads, meetings and revenue generated',
    ],
  },
  {
    id: 3,
    title: 'SCALING',
    icon: 'scaling',
    items: [
      'Removing the CEO from sales activities.',
      'Adding resources, automating, and scaling the sales department.',
      'Growing leads, conversions, and revenue.',
    ],
  },
];

function FrameworkIcon({ type }: { type: FrameworkStep['icon'] }) {
  let src = '/assets/Component 2.png';
  let altText = 'Foundations First Icon';
  if (type === 'execution') {
    src = '/assets/Component 2 (1).png';
    altText = 'Execution Icon';
  } else if (type === 'scaling') {
    src = '/assets/Component 2 (2).png';
    altText = 'Scaling Icon';
  }

  return (
    <Image
      src={src}
      alt={altText}
      width={106}
      height={106}
      className={styles.frameworkIcon}
      priority
    />
  );
}

export default function Framework() {
  return (
    <section id="resources" className={styles.section}>
      <div className="container">
        <span className={styles.frameworkEyebrow}>HOW IT WORKS</span>
        <h2 className={styles.frameworkTitle}>EVIT 3- STEP FRAMEWORK</h2>

        <div className={styles.frameworkGrid}>
          {frameworkSteps.map((step) => (
            <article key={step.id} className={styles.frameworkCard}>
              <FrameworkIcon type={step.icon} />
              <h3 className={styles.frameworkCardTitle}>{step.title}</h3>
              <ul className={styles.frameworkList}>
                {step.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
