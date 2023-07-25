import React from 'react';
import styles from '../../../styles/ServicesPage1.module.css';
import aniStyles from '../../../styles/Animation.module.css';
const ServicesPage1 = () => {
  return (
    <div className={styles.service1Container}>
      <h1 className={`${styles.serviceTitle} ${aniStyles.fadeInUp}`}>
        SERVICES
      </h1>
    </div>
  );
};

export default ServicesPage1;
