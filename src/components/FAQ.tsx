'use client';

import React from 'react';
import styles from './FAQ.module.css';

const faqs = [
  {
    question: 'Do you specialize in IT services or general business expansion?',
    answer: 'We focus on IT service providers selling B2B services and products',
  },
  {
    question: "What's included in your global expansion work?",
    answer: 'Audit, plan, best sales strategies designed for your company, sales process, channel plan, lead gen approach, sales process, execution rhythm.',
  },
  {
    question: 'How fast can we see qualified meetings?',
    answer: 'You usually see signals in weeks, but stable results require consistent weekly execution.',
  },
  {
    question: 'Which markets do you support?',
    answer: 'Europe (Nordic, DACH, Poland, Czech Republic, France, Holland, UK) , US, Canada, APAC (Singapore, Thailand, South Korea, Australia, New Zealand, Hong Kong)',
  },
  {
    question: 'Do you provide leads or build our system?',
    answer: 'We provide system + coaching so you can generate leads independently.',
  },
  {
    question: 'Can you train our sales team?',
    answer: 'Yes--training modules for different seniority levels.',
  },
  {
    question: 'How do you measure success?',
    answer: 'Meetings, qualified leads, pipeline value, win rate, and deal cycle time.',
  },
  {
    question: 'Do you help with proposals and pricing?',
    answer: 'Yes--templates + scope control + pricing logic',
  },
  {
    question: 'What do you need from our side?',
    answer: 'One owner, weekly time, fast feedback, and execution discipline.',
  },
  {
    question: 'What makes EVIT different?',
    answer: 'We are 100% focused on working with IT service and products companies.',
  },
];

export default function FAQ() {
  return (
    <section className={`${styles.section} reveal`}>
      <div className="container">
        <div className={styles.heading}>
          <span className={styles.eyebrow}>FAQs</span>
          <h2 className={styles.title}>FREQUENTLY ASKED QUESTIONS</h2>
        </div>

        <div className={styles.grid}>
          {faqs.map((faq) => (
            <article key={faq.question} className={styles.card}>
              <div className={styles.questionRow}>
                <h3>{faq.question}</h3>
                <span aria-hidden="true">x</span>
              </div>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
