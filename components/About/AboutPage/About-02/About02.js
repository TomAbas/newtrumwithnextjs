import React, { useEffect, useState } from 'react';
import styles from '../../../../styles/AboutStyles.module.css';
import { Fragment } from 'react';
import { useInView } from 'framer-motion';
import ItemNumber from './ItemNumber';
import { useRef } from 'react';
import { getAboutData } from '../../../../ApiUrl/about/aboutApi';

const About02 = ({ aboutData, mainImage }) => {
 
  const { description, image, list } = aboutData.about01
  const numberRef = useRef();
  const isNumberInview = useInView(numberRef);



  return (
    <div className={styles.aboutNumberContainer}>
      <div
        className={styles.aboutPictureContainer}
        style={{
          backgroundImage: image && `url(${image})`,
        }}
      >
        <div className={styles.aboutWrapper}>
          <div className={styles.aboutContentNumber}>
            <div className={styles.aboutRow1}>
              {list?.slice(0, 3).map((item, idx) => {
                return (
                  <Fragment key={idx}>
                    <ItemNumber
                      title={item.title}
                      start={0}
                      end={item.number}
                      timer={50}
                    />
                  </Fragment>
                );
              })}
            </div>
            <div className={styles.aboutRow2}>
              {list?.slice(3, 5).map((item, idx) => {
                return (
                  <Fragment key={idx}>
                    <ItemNumber
                      title={item.title}
                      start={0}
                      end={item.number}
                      timer={50}
                    />
                  </Fragment>
                );
              })}
            </div>
          </div>
          <div className={styles.aboutContentText}>
            <p>
              {description}
            </p>
          </div>
        </div>
        <div className={styles.overlay}></div>
      </div>
    </div>
  );
};

export default About02;
