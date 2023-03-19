import React from "react";

import styles from "../../styles/ProjectPage002Styles.module.css";
import { useInView } from "framer-motion";
import { useState } from "react";
import { useEffect, useRef } from "react";
import axios from "axios";
import { urlListContributorIdPost } from "../../ApiUrl/Api";

const ProjectPage02 = ({ tagLine, contributor, projectsidx }) => {
  const arrWordRef = useRef();
  const isArrWordIn = useInView(arrWordRef);
  const arrWordRef1 = useRef();
  const isArrWordIn1 = useInView(arrWordRef1);

  const animationWords = () => {
    let b = tagLine?.split(" ").map((word, idx) => {
      let delay = { animationDelay: `${idx / 5 + 0.5}s`, opacity: 0 };
      return (
        <h1
          className={isArrWordIn ? `${styles.fadeInUp0}` : " "}
          style={delay}
          key={idx}
        >
          {word}
        </h1>
      );
    });
    return b;
  };

  const contributorList = () => {
    if (contributor) {
      return Object.keys(contributor).map((key, idx) => {
        return (
          <p key={idx}>
            {key} by : {contributor[key]}
          </p>
        );
      });
    }
  };

  return (
    <>
      <div className={styles.newsPage02Box}>
        {/* <div className={styles.newsTitleBox}> */}
        {/* <div className={styles.newsTitle}>
            <div className={styles.newsTitleH1} ref={arrWordRef}>
              {animationWords()}
            </div>
          </div> */}
        {/* <div className={styles.newsCredits}>
            <div className={styles.newsCreditsWrapper}>
              <p>credits</p>
              <div className={styles.creditsBoxWrapper}>
                <div className={styles.creditsBox0}>{contributorList()}</div>
                <div className={styles.creditsBox1}></div>
              </div>
            </div>
          </div> */}
        {/* </div> */}
      </div>
    </>
  );
};

export default ProjectPage02;
