import React from "react";
import styles from "../../../styles/ProjectStyles.module.css";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
const ListJobPage = ({ arrayListJob, amountJob }) => {
  // console.log(arrayListJob);
  const createItem = () => {
    let b = arrayListJob.map((job, idxo) => {
      // console.log(job);
      let a = (
        <div className={styles.listJobBox}>
          {job.map((job, idx) => {
            // console.log("job in side", job);
            // console.log(idxo);
            return (
              <>
                {idx === 0 ? (
                  <Link href={`/projects/${job.postId}`}>
                    <Parallax
                      translateY={[-20, -50]}
                      speed={-20}
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
                      translateY={[0, -100]}
                      speed={30}
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
          <div className={`${styles.listJobOuterBox} ${styles.outerMove}`}>
            {createItem()}
          </div>
        </div>
      </ParallaxProvider>
    </>
  );
};

export default ListJobPage;
