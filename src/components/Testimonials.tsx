'use client';

import React from 'react';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    quote: 'Working with EVIT helped us achieve our first real results. With the right sales method, strategy, and mindset from EVIT, we are confident we can continue to improve and achieve greater success in the future.',
    name: 'Faustina',
    role: 'Sales Representative',
  },
  {
    quote: 'Partnering with EVIT has been a turning point for our business. By implementing their systematic sales methodology and data-driven strategies, we have seen immediate, tangible growth. We now possess the clear roadmap necessary to scale our operations and achieve even greater milestones ahead.',
    name: 'Faustina',
    role: 'Sales Representative',
  },
  {
    quote: 'EVIT provided more than just a sales plan; they delivered a fundamental shift in our strategic mindset. The initial results have exceeded our expectations, proving that their approach works in real-world conditions. We are confident that this new foundation will drive our continued success and market leadership.',
    name: 'Faustina',
    role: 'Sales Representative',
  },
  {
    quote: 'Working with EVIT allowed us to streamline our sales process and secure our first significant wins. The combination of their practical execution tactics and high-level strategy gave our team the tools to perform at a higher level. We look forward to sustaining this momentum and reaching new heights in the future.',
    name: 'Faustina',
    role: 'Sales Representative',
  },
];

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.intro}>
            <span className={styles.eyebrow}>Testimonials</span>
            <h2 className={styles.title}>WHAT PEOPLE SAY ABOUT EVIT</h2>
            <p className={styles.desc}>
              Real feedback from professionals who have experienced the EVIT method firsthand. Discover how our tailored approach leads to greater success and sustainable business growth.
            </p>
          </div>

          <div className={styles.cards}>
            {testimonials.map((testimonial) => (
              <article key={testimonial.quote} className={styles.card}>
                <blockquote>&quot;{testimonial.quote}&quot;</blockquote>
                <div className={styles.footer}>
                  <div>
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.role}</span>
                  </div>
                  <div className={styles.stars} aria-label="5 star rating">
                    <span aria-hidden="true">★</span>
                    <span aria-hidden="true">★</span>
                    <span aria-hidden="true">★</span>
                    <span aria-hidden="true">★</span>
                    <span aria-hidden="true">★</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
