'use client';

import React from 'react';
import Image from 'next/image';
import styles from './CaseStudies.module.css';

interface Study {
  id: number;
  quote: React.ReactNode;
  name: string;
  role: string;
  avatar: string;
  avatarAlt: string;
}

const studies: Study[] = [
  {
    id: 1,
    quote: (
      <>
        EVIT gave us a <span>clear sales roadmap</span> and practical guidance on how to do it. As a result, our sales team has improved week by week and is now much more confident working independently with clients.
      </>
    ),
    name: 'Mr. Nguyen Van Tuan',
    role: 'Chief Executive Officer (CEO)',
    avatar: '/assets/540048d82298a1c0a80ba59038a0eef747a8965c.jpg',
    avatarAlt: 'Client portrait',
  },
  {
    id: 2,
    quote: (
      <>
        Working with EVIT <span>helped us achieve our first real results</span>. With the right sales method, strategy, and mindset from EVIT, we are confident we can continue to improve and achieve greater success in the future.
      </>
    ),
    name: 'Ms. Faustrina',
    role: 'Sales Representative',
    avatar: '/assets/daa7591f467f07ac34cf81f8dd257db99985d118.jpg',
    avatarAlt: 'Sales representative portrait',
  },
  {
    id: 3,
    quote: (
      <>
        EVIT&apos;s service model helped us clearly understand the real expectations of international clients in Vietnam-insights that would have been very difficult to gain on our own. We see EVIT as a <span>long-term strategic partner</span> for our growth.
      </>
    ),
    name: 'Mrs. Nguyen Thi Bich Hien',
    role: 'Chief Executive Officer (CEO)',
    avatar: '/assets/2e869bba8104d15adef7f148438a7cd633820ab4.jpg',
    avatarAlt: 'Founder portrait',
  },
  {
    id: 4,
    quote: (
      <>
        Their team rebuilt our outbound process from the ground up. The weekly reviews made every number visible, and our pipeline became <span>predictable instead of accidental</span>.
      </>
    ),
    name: 'Mr. Daniel Park',
    role: 'Growth Director',
    avatar: '/assets/hero-bg.jpg',
    avatarAlt: 'Growth director portrait',
  },
  {
    id: 5,
    quote: (
      <>
        Before EVIT, we had marketing activity but no clear conversion path. The new funnel and follow-up workflow helped us <span>turn more leads into booked meetings</span>.
      </>
    ),
    name: 'Ms. Linh Tran',
    role: 'Marketing Lead',
    avatar: '/assets/93399949fe72f74d48c8ac9828123999f81ce7b2.png',
    avatarAlt: 'Marketing lead portrait',
  },
  {
    id: 6,
    quote: (
      <>
        The framework was simple enough for our small team to implement and strong enough to scale. EVIT helped us focus on the <span>sales actions that actually move revenue</span>.
      </>
    ),
    name: 'Mr. Hoang Minh',
    role: 'Managing Partner',
    avatar: '/assets/b111d46df729ec4085b067064109d2ae015e59ae.png',
    avatarAlt: 'Managing partner portrait',
  },
];

const scrollingStudies = [...studies, ...studies];

export default function CaseStudies() {
  return (
    <section id="case-studies" className={`${styles.section} reveal`}>
      <div className="container">
        <div className={styles.heading}>
          <span className={styles.eyebrow}>Case Studies</span>
          <h2 className={styles.title}>REAL RESULTS, REAL GROWTH</h2>
          <p className={styles.desc}>
            A collection of success stories where EVIT&apos;s mindset and strategy transformed businesses performance. These case studies demonstrate our commitment to delivering practical value and long-term excellence for every client.
          </p>
        </div>

        <div className={styles.carousel} aria-label="Client feedback carousel">
          <div className={styles.track}>
          {scrollingStudies.map((study, index) => (
            <article key={`${study.id}-${index}`} className={styles.card}>
              <div className={styles.avatarWrap}>
                <Image
                  src={study.avatar}
                  alt={study.avatarAlt}
                  width={58}
                  height={58}
                  className={styles.avatar}
                />
              </div>

              <blockquote className={styles.quote}>
                &quot;{study.quote}&quot;
              </blockquote>

              <div className={styles.meta}>
                <div>
                  <strong>{study.name}</strong>
                  <span>{study.role}</span>
                </div>
                <Image
                  src="/assets/logo.png"
                  alt="EVIT client logo"
                  width={76}
                  height={24}
                  className={styles.logo}
                />
              </div>

              <button className={styles.button} type="button">
                SEE CASE STUDY
                <span aria-hidden="true">-&gt;</span>
              </button>
            </article>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
