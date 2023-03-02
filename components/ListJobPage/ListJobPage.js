import React from "react";
import styles from "../../styles/ProjectStyles.module.css";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

import Link from "next/link";
const ListJobPage = ({ arrayListJob }) => {
  const createItem = () => {
    let b = arrayListJob.map((job) => {
      let a = (
        <div className={styles.listJobBox}>
          {job.map((job, idx) => {
            return (
              <>
                {idx === 0 ? (
                  <Link href={`/projects/${job.postId}`}>
                    <Parallax
                      scale={[0.95, 1]}
                      translateY={[-20, -30]}
                      easing='easeOutCubic'
                      className={styles.jobBox}
                    >
                      <div
                        className={styles.innerBox}
                        style={{ backgroundImage: `url(${job.banner})` }}
                      >
                        <h1>{job.title}</h1>
                        <p>{job.category}</p>
                      </div>
                    </Parallax>
                  </Link>
                ) : (
                  <Link href={`/projects/${job.postId}`}>
                    <Parallax
                      scale={[0.95, 1]}
                      translateY={[0, -70]}
                      easing='easeOutCubic'
                      className={styles.jobBox}
                    >
                      <div
                        className={styles.innerBox}
                        style={{ backgroundImage: `url(${job.banner})` }}
                      >
                        <h1>{job.title}</h1>
                        <p>{job.category}</p>
                      </div>
                    </Parallax>
                  </Link>
                )}
              </>
            );
          })}
        </div>
      );
      // console.log(a);
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
