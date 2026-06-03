'use client';

import React from 'react';
import Image from 'next/image';
import styles from './CoreSolutions.module.css';

interface CoreSolution {
  id: number;
  title: string;
  subtitle: string;
  desc: string;
  image: string;
  imageAlt: string;
  icon: string;
  iconAlt: string;
}

const solutions: CoreSolution[] = [
  {
    id: 1,
    title: 'GLOBAL EXPANSION SERVICE',
    subtitle: 'Market entry planning + execution support: target markets, channels, lead generation, USP, and risk control.',
    desc: 'Global expansion is more than just entering a new market--it is about developing a sustainable and scalable growth strategy that includes the right sales channels, compliance with international business laws, and effectively managing global teams. At EVIT Organization, our Custom Design Consulting Services are designed to guide businesses through every critical step of this process, ensuring a smooth, efficient, and successful market entry.',
    image: '/assets/daa7591f467f07ac34cf81f8dd257db99985d118.jpg',
    imageAlt: 'Business network and growth dashboard',
    icon: '/assets/service-icon (2).png',
    iconAlt: 'Global expansion icon',
  },
  {
    id: 2,
    title: 'G.O.D. SALES SYSTEM',
    subtitle: 'Step-by-step sales system for IT services: lead generation, qualification, meetings, negotiation, proposals, closing, upsell, cross-sell.',
    desc: 'Our online course covers everything you need to win more deals. From lead qualification and meeting strategy to negotiation, proposal building, and practical worksheets. Step-by-step tested formula that just needs to be implemented to your selling activities.',
    image: '/assets/2e869bba8104d15adef7f148438a7cd633820ab4.jpg',
    imageAlt: 'Sales analytics dashboard with global data',
    icon: '/assets/service-icon (1).png',
    iconAlt: 'Sales system icon',
  },
  {
    id: 3,
    title: 'MARKETING SERVICES',
    subtitle: 'Marketing funnel, Website + conversion + automation workflows to improve lead flow and conversion.',
    desc: 'Many businesses struggle to scale their marketing due to a lack of a clear strategy, outdated tactics, ineffective online presence, unaligned activities, poor analytics and execution. Even if they have existing marketing efforts, they often need to optimize these processes to drive conversions. As a result, businesses waste their budget on ineffective strategies, fail to fully utilize their marketing potential, and lose money and potential clients.',
    image: '/assets/540048d82298a1c0a80ba59038a0eef747a8965c.jpg',
    imageAlt: 'Marketing funnel and connected business network',
    icon: '/assets/service-icon.png',
    iconAlt: 'Marketing services icon',
  },
];

export default function CoreSolutions() {
  return (
    <section id="services" className={styles.section}>
      <div className="container">
        <div className={styles.heading}>
          <span className={styles.eyebrow}>OUR SERVICES</span>
          <h2 className={styles.title}>OUR CORE SOLUTIONS</h2>
        </div>

        <div className={styles.cards}>
          {solutions.map((solution) => (
            <article key={solution.id} className={styles.card}>
              <div className={styles.imageFrame}>
                <Image
                  src={solution.image}
                  alt={solution.imageAlt}
                  width={380}
                  height={260}
                  className={styles.image}
                />
              </div>

              <div className={styles.content}>
                <Image
                  src={solution.icon}
                  alt={solution.iconAlt}
                  width={58}
                  height={58}
                  className={styles.icon}
                />
                <h3 className={styles.cardTitle}>{solution.title}</h3>
                <p className={styles.subtitle}>{solution.subtitle}</p>
                <p className={styles.desc}>{solution.desc}</p>
                <button className={styles.readMore} type="button">
                  READ MORE
                  <span aria-hidden="true">-&gt;</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
