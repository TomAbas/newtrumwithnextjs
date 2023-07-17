import React, { useState } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useEffect } from "react";
import Image from "next/future/image";
import styles from "../../styles/ProjectPage03Styles.module.css";

import slide4Img from "/public/imgs/slideImgs/MultiMediaProduction6.webp";
import slide5Img from "/public/imgs/slideImgs/MultiMediaProduction7.webp";

const ProjectPage03 = ({ openTitle, subTitle, content, img }) => {
  const [subTitleAr, setSubTitleAr] = useState([]);
  const arrWordRef = useRef();
  const isArrWordIn = useInView(arrWordRef);

  const animationWords = () => {
    let b = subTitle?.split("").map((word, idx) => {
      let delay = { animationDelay: `${idx / 10 + 0.5}s` };
      return (
        <h1
          key={idx}
          className={isArrWordIn ? `${styles.fadeInUp0}` : " "}
          style={delay}
          ref={arrWordRef}
        >
          {word}
        </h1>
      );
    });
    return b;
  };

  return (
    <>
      <div className={styles.newsPage03Box}>
        <div className={styles.newsContentBox}>
          <div className={styles.newsContent01}>
            <div className={styles.newsContent01Img}>
              {slide4Img && (
                <Image
                  src={img}
                  alt='brand-img'
                  className={styles.brandImg}
                  layout='responsive'
                  width={1000}
                  height={1000}
                />
              )}
            </div>
            <div className={styles.newsContent01Text}>
              <div className={styles.test0}>
                <div className={styles.test0H1} ref={arrWordRef}>
                  {animationWords()}
                </div>
                <div dangerouslySetInnerHTML={{ __html: content }} />
              </div>
            </div>
          </div>
          <div className={`${styles.newsContent00} ${styles.fadeTopDown}`}>
            <p>{openTitle}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectPage03;
