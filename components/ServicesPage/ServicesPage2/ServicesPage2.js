import React from 'react';
import styles from '../../../styles/ServicesPage2.module.css';

const ServicesPage2 = () => {
  return (
    <div className={styles.service2Container}>
      <div className={styles.service2IntroText}>
        We design and produce{' '}
        <span className={styles.service2IntroTextHighlight}>interactive</span>{' '}
        and
        <br /> immersive{' '}
        <span className={styles.service2IntroTextHighlight}>
          experiences
        </span>{' '}
        <br />
        that mesh the{' '}
        <span className={styles.service2IntroTextHighlight}>virtual</span>
        <br /> and{' '}
        <span className={styles.service2IntroTextHighlight}>physical</span>,
        <br /> generating{' '}
        <span className={styles.service2IntroTextHighlight}>
          wonder
        </span> and <br />
        <span className={styles.service2IntroTextHighlight}>engagement</span>.
      </div>
    </div>
  );
};

export default ServicesPage2;
