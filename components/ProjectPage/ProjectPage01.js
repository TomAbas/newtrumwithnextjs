import React, { useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import styles from "../../styles/ProjectPage01Styles.module.css";
import slide4Img from "/public/imgs/slideImgs/MultiMediaProduction6.webp";
const ProjectPage01 = ({ title, category, bannerImg }) => {
  const animationWords = () => {
    let b = title?.split(" ").map((word, idx) => {
      let delay = { animationDelay: `${idx / 5 + 0.5}s` };
      return (
        <h1
          key={idx}
          className={`${styles.headlineWord} ${styles.fadeInUp0}`}
          style={delay}
        >
          {word}
        </h1>
      );
    });
    return b;
  };

  return (
    <>
      <div
        className={styles.headlineNewsBox}
        style={{
          background: `url(${bannerImg}) no-repeat center
    center/cover`,
        }}
      >
        <div className={styles.backgroundImgBox}>
          <div className={styles.headlineContent}>
            {/* <div className={styles.headlineWordBox}>
              <div className={styles.wrapperText}> {animationWords()}</div>
            </div>
            <div className={styles.clientShortInfo}>
              <h5>{category}</h5>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectPage01;
