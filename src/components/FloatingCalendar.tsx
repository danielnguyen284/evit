'use client';

import React from 'react';
import styles from './FloatingCalendar.module.css';

export default function FloatingCalendar() {
  const handleClick = () => {
    // Scroll back to top or trigger consultation booking
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button 
      className={styles.floatingBtn} 
      onClick={handleClick}
      aria-label="Book a free consultation calendar"
    >
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v2h-5v-2zm0 4h5v2h-5v-2zm-4-4h3v2H8v-2zm0 4h3v2H8v-2z"/>
      </svg>
    </button>
  );
}
