import React from 'react';
import styles from './eventBanner.module.css';
import eventImage from '../../images/event.jpg';
import iconRight from '../../images/icon-swiper-2.svg';
import iconLeft from '../../images/icon-swiper-1.svg';

export const EventBanner = () => {
  return (
    <article
      className={styles.banner}
      style={{
        backgroundImage: `url(${eventImage})`,
        backgroundSize: '100%',
      }}
    >
      <div className={styles.right}>
        <img src={iconRight} alt="right" />
      </div>
      <div className={styles.left}>
        <img src={iconLeft} alt="left" />
      </div>
    </article>
  );
};
