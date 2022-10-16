import React, { useState } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useEffect } from "react";
import Image from "next/future/image";
import styles from "../../styles/ProjectPage03Styles.module.css";

const ProjectPage03 = ({ openTitle, subTitle, youtubeUrl, content, img }) => {
  const [subTitleAr, setSubTitleAr] = useState([]);
  const arrWordRef = useRef();
  const isArrWordIn = useInView(arrWordRef);

  const produceArray = () => {
    if (subTitle) {
      let subTitleArr = subTitle.split("");
      // console.log(subTitleArr);
      setSubTitleAr(subTitleArr);
    }
  };
  const animationWords = () => {
    let b = subTitleAr.map((word, idx) => {
      let delay = { animationDelay: `${idx / 5 + 0.5}s` };
      return (
        <h1 className={isArrWordIn ? "fadeInUp0 " : " "} style={delay}>
          {word}
        </h1>
      );
    });
    return b;
  };

  useEffect(() => {
    produceArray();
  }, [subTitle]);
  return (
    <>
      {" "}
      <div className={styles.newsPage03Box}>
        <div className={styles.page03VideoBox}>
          <div className={styles.videoBranding}>
            <iframe
              width='100%'
              height='100%'
              src={youtubeUrl}
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className={styles.newsContentBox}>
          <div className={`${styles.newsContent00} ${styles.fadeTopDown}`}>
            <p>{openTitle}</p>
          </div>
          <div className={styles.newsContent01}>
            <div className={styles.newsContent01Img}>
              <Image
                src={img}
                alt='brand-img'
                className={styles.brandImg}
                layout='responsive'
                width={1000}
                height={1000}
              />
              {/* <img src={pic0} alt='brand-img' className={styles.brandImg} /> */}
            </div>
            <div className={styles.newsContent01Text}>
              <div className={styles.test0}>
                {/* <h1 className='fadeTopDown'>concept</h1> */}
                <div className={styles.test0H1} ref={arrWordRef}>
                  {animationWords()}
                </div>

                <div dangerouslySetInnerHTML={{ __html: content }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectPage03;
