import React from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCalendar from '@/components/FloatingCalendar';
import styles from './services.module.css';

const servicesData = [
  {
    id: 'global-expansion',
    title: 'GLOBAL EXPANSION SERVICE',
    subtitle: 'Market entry planning + execution support: target markets, channels, lead generation, USP, and risk control.',
    desc: 'Global expansion is more than just entering a new market—it is about developing a sustainable and scalable growth strategy that includes the right sales channels, compliance with international business laws, and effectively managing global teams. At EVIT Organization, our Custom Design Consulting Services are designed to guide businesses through every critical step of this process, ensuring a smooth, efficient, and successful market entry.',
    image: '/assets/daa7591f467f07ac34cf81f8dd257db99985d118.jpg',
    imageAlt: 'Global expansion concept showing map and connectivity',
    icon: '/assets/service-icon (2).png',
    iconAlt: 'Global expansion icon',
  },
  {
    id: 'god-sales-system',
    title: 'G.O.D. SALES SYSTEM',
    subtitle: 'Step-by-step sales system for IT services: lead generation, qualification, meetings, negotiation, proposals, closing, upsell, cross-sell.',
    desc: 'Our online course covers everything you need to win more deals. From lead qualification and meeting strategy to negotiation, proposal building, and practical worksheets. Step-by-step tested formula that just needs to be implemented to your selling activities.',
    image: '/assets/2e869bba8104d15adef7f148438a7cd633820ab4.jpg',
    imageAlt: 'Business sales strategy meeting',
    icon: '/assets/service-icon (1).png',
    iconAlt: 'G.O.D. sales system icon',
  },
  {
    id: 'marketing-services',
    title: 'MARKETING SERVICES',
    subtitle: 'Marketing funnel, Website + conversion + automation workflows to improve lead flow and conversion.',
    desc: 'Many businesses struggle to scale their marketing due to a lack of a clear strategy, outdated tactics, ineffective online presence, unaligned activities, poor analytics and execution. Even if they have existing marketing efforts, they often need to optimize these processes to drive conversions. As a result, businesses waste their budget on ineffective strategies, fail to fully utilize their marketing potential, and lose money and potential clients.',
    image: '/assets/540048d82298a1c0a80ba59038a0eef747a8965c.jpg',
    imageAlt: 'Marketing funnel and connected business network',
    icon: '/assets/service-icon.png',
    iconAlt: 'Marketing services icon',
  },
];

export default function ServicesPage() {
  return (
    <div className={styles.page}>
      {/* Global Header */}
      <Header />

      {/* Global background wave */}
      <div className={styles.bgWave}>
        <Image
          src="/assets/Vector (2).png"
          alt="Background wave pattern"
          width={1920}
          height={1080}
          priority
          style={{ width: '100%', height: 'auto' }}
        />
      </div>

      {/* Services Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Go Global, Expand<br />Your Reach and Grow Worldwide
          </h1>
        </div>
      </section>

      {/* Detailed Services list */}
      <div className={styles.servicesContainer}>
        <div className="container">
          {servicesData.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <section
                key={service.id}
                id={service.id}
                className={styles.serviceSection}
              >
                <div className={`${styles.grid} ${!isEven ? styles.gridReverse : ''}`}>
                  {/* Left Column (or Right on alternate) - Image */}
                  <div className={styles.imageCol}>
                    <div className={styles.imageFrame}>
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        width={540}
                        height={380}
                        className={styles.serviceImage}
                      />
                    </div>
                  </div>

                  {/* Right Column (or Left on alternate) - Content */}
                  <div className={styles.textCol}>
                    <div className={styles.iconWrapper}>
                      <Image
                        src={service.icon}
                        alt={service.iconAlt}
                        width={32}
                        height={32}
                        className={styles.icon}
                      />
                    </div>
                    <h2 className={styles.serviceTitle}>{service.title}</h2>
                    <p className={styles.serviceSubtitle}>{service.subtitle}</p>
                    <div className={styles.divider}></div>
                    <p className={styles.serviceDesc}>{service.desc}</p>
                    <button className={`btn-primary ${styles.ctaButton}`}>
                      Learn More
                      <span className="arrow">→</span>
                    </button>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>

      {/* Global Footer and Calendar */}
      <Footer />
      <FloatingCalendar />
    </div>
  );
}
