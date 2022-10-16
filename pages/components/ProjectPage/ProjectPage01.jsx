import React, { useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import styles from "../../../styles/ProjectPage01Styles.module.css";

const ProjectPage01 = ({ title, title1, category, bannerImg }) => {
  const [headline, setHeadline] = useState([]);
  const [headline1, setHeadline1] = useState([]);
  const headLineRef = useRef();
  const isHeadLineIn = useInView(headLineRef);
  const headLineRef1 = useRef();
  const isHeadLineIn1 = useInView(headLineRef1);
  // console.log(title);
  const produceArray = () => {
    if (title) {
      let titleArr = title.split(" ");
      setHeadline(titleArr);
      if (title1) {
        let titleArr1 = title1.split(" ");
        setHeadline1(titleArr1);
      }
    }
  };
  const animationWords = () => {
    // console.log(headline);
    if (headline) {
      let b = headline.map((word, idx) => {
        // console.log("123");
        let delay = { animationDelay: `${idx / 5 + 0.5}s` };
        return (
          <h1
            className={
              isHeadLineIn
                ? `${styles.headlineWord} ${styles.fadeInUp0}`
                : styles.headlineWord
            }
            style={delay}
          >
            {word}
          </h1>
        );
      });
      return b;
    }
  };
  const animationWords1 = () => {
    if (headline1) {
      let b = headline1.map((word, idx) => {
        let delay = { animationDelay: `${idx / 5 + 0.9}s` };
        return (
          <h1
            className={
              isHeadLineIn1
                ? `${styles.headlineWord} ${styles.fadeInUp0}`
                : styles.headlineWord
            }
            style={delay}
          >
            {word}
          </h1>
        );
      });
      return b;
    }
  };

  useEffect(() => {
    produceArray();
  }, [title]);
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
            <div className={styles.headlineWordBox}>
              <div className={styles.wrapperText} ref={headLineRef}>
                {" "}
                {headline && animationWords()}
              </div>
              <div className={styles.wrapperText} ref={headLineRef1}>
                {headline1 && animationWords1()}
              </div>
            </div>
            <div className={styles.clientShortInfo}>
              <h5>{category}</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectPage01;
