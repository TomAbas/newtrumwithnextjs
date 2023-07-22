import React, { useEffect, useState } from 'react';
import styles from '../../../../styles/AboutStyles.module.css';
import { getAboutData } from '../../../../ApiUrl/about/aboutApi';

const AboutVideoPage = ({ aboutData }) => {
  const { video } = aboutData
  return (
    <div className={styles.aboutVideoContainer}>
      <div className={styles.aboutVideoWrapper}>
        <video autoPlay playsInline muted>
          <source
            src={video}
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
