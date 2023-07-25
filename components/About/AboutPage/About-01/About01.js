import React from 'react';
import styles from '../../../../styles/AboutStyles.module.css';

const AboutVideoPage = ({ aboutData }) => {
  const { video } = aboutData;
  return (
    <>
      {video && (
        <div className={styles.aboutVideoContainer}>
          <div className={styles.aboutVideoWrapper}>
            <video autoPlay playsInline muted>
              <source src={video} type='video/mp4' />
            </video>
          </div>
          <div className={styles.textAbout1}>TRUM</div>
          <div className={`${styles.textAbout2} ${styles.fadeInUpS}`}>
            Opening <br />
            worlds.
          </div>
        </div>
      )}
    </>
  );
};

export default AboutVideoPage;
