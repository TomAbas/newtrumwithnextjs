import React from 'react';
import styles from '../../../../styles/AboutStyles.module.css';
import { Fragment } from 'react';
import { useInView } from 'framer-motion';
import ItemNumber from './ItemNumber';
import { useRef } from 'react';

const About02 = ({ mainImage }) => {
  const numberRef = useRef();
  const isNumberInview = useInView(numberRef);
  return (
    <div className={styles.aboutNumberContainer}>
      <div
        className={styles.aboutPictureContainer}
        style={{
          backgroundImage: mainImage && `url(${mainImage})`,
        }}
      >
        <div className={styles.aboutWrapper}>
          <div className={styles.aboutContentNumber}>
            <div className={styles.aboutRow1}>
              {new Array(3).fill(null).map((item, idx) => {
                return (
                  <Fragment key={idx}>
                    <ItemNumber
                      title={'brand đã hợp tác'}
                      start={0}
                      end={6969}
                      timer={50}
                    />
                  </Fragment>
                );
              })}
            </div>
            <div className={styles.aboutRow2}>
              {new Array(2).fill(null).map((item, idx) => {
                return (
                  <Fragment key={idx}>
                    <ItemNumber
                      title={'sản phẩm đã truyền thông'}
                      start={0}
                      end={6969}
                      timer={50}
                    />
                  </Fragment>
                );
              })}
            </div>
          </div>
          <div className={styles.aboutContentText}>
            <p>
              We operate an extensive network of community channels and
              influencers, all managed professionally. Our services are trusted
              by top companis in the industry, as well as independent artists
            </p>
          </div>
        </div>
        <div className={styles.overlay}></div>
      </div>
    </div>
  );
};

export default About02;
