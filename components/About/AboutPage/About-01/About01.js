import React from 'react';
import styles from '../../../../styles/AboutStyles.module.css';

const AboutVideoPage = () => {
  return (
    <div className={styles.aboutVideoContainer}>
      <div className={styles.aboutVideoWrapper}>
        <video autoPlay playsInline muted>
          <source
            src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
            type='video/mp4'
          />
        </video>
      </div>
      <div className={styles.textAbout1}>
        TRUM
      </div>
      <div className={styles.textAbout2}>
        Opening <br />
        worlds.
      </div>
    </div>
  );
};

export default AboutVideoPage;