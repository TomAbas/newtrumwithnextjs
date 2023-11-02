import React from 'react';
import styles from '../../styles/ProjectStyles.module.css';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

import Link from 'next/link';
import { useEffect } from 'react';
const ListJobPage = ({ arrayListJob }) => {
  const [deviceWidth, setDeviceWidth] = React.useState(0);
  useEffect(() => {
    setDeviceWidth(window?.innerWidth);
  }, []);
  const createItem = () => {
    let b = arrayListJob.map((job, idx) => {
      let a = (
        <div className={styles.listJobBox} key={idx}>
          {job.map((job, idx) => {
            return (
              <>
                {idx === 0 ? (
                  <Link href={`/projects/${job.title}`} key={idx}>
                    <a>
                      <Parallax
                        // scale={[0.95, 1]}
                        className={styles.jobBox}
                        // speed={1}
                      >
                        <div
                          className={styles.innerBox}
                          style={{ backgroundImage: `url(${job.mainImage})` }}
                        >
                          {/* <h1>{job.title}</h1>
                          <p>{job.category}</p> */}
                        </div>
                      </Parallax>
                    </a>
                  </Link>
                ) : (
                  <Link href={`/projects/${job.title}`} key={idx}>
                    <a>
                      <Parallax
                        // speed={0}
                        // scale={[0.95, 1]}
                        // translateY={deviceWidth > 768 && [0, -50]}
                        className={styles.jobBox}
                      >
                        <div
                          className={styles.innerBox}
                          style={{ backgroundImage: `url(${job.mainImage})` }}
                        >
                          {/* <h1>{job.title}</h1>
                          <p>{job.category}</p> */}
                        </div>
                      </Parallax>
                    </a>
                  </Link>
                )}
              </>
            );
          })}
        </div>
      );
      return a;
    });

    return b;
  };
  return (
    <>
      <ParallaxProvider>
        <div className={styles.listJobContainer}>
          <div className={styles.listJobTitlePage}>
            <h1 className={`${styles.project} ${styles.fadeInUp0}`}>
              Projects.
            </h1>
          </div>
          <div className={` ${styles.outerMove}`}>{createItem()}</div>
        </div>
      </ParallaxProvider>
    </>
  );
};

export default ListJobPage;
