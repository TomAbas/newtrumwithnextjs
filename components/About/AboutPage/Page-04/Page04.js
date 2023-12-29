import React from "react";
import styles from "../../../../styles/AboutStyles.module.css";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/future/image";

const Page04 = ({ aboutData }) => {
  const { description, image, title } = aboutData.about02;
  const h1Ref1 = useRef();
  const inViewH1ref1 = useInView(h1Ref1);
  const descriptionRef = useRef();
  const inViewDescriptionRef = useInView(descriptionRef);
  const descriptionRef2 = useRef();
  const inViewDescriptionRef2 = useInView(descriptionRef2);

  const animationWords = () => {
    let b = title?.split(" ").map((word, idx) => {
      let delay = { animationDelay: `${idx / 5 + 0.5}s` };
      return (
        <h1
          key={idx}
          className={
            inViewH1ref1
              ? `${styles.fadeInUpS} ${styles.h1Word}`
              : styles.h1Word
          }
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
      <div className={styles.page04Container}>
        {/* <div className={styles.page04Content00}>
          <p
            ref={descriptionRef}
            className={inViewDescriptionRef && `${styles.fadeInUpS}`}
          >
            {aboutData.description01}
          </p>
        </div> */}
        <div className={styles.page04Content1}>
          <div className={styles.page04ContentText1}>
            <div className={styles.page04Img1}>
              <div className={styles.imgBox}>
                <Image
                  layout="responsive"
                  width={800}
                  height={800}
                  // src={page4Data[1]?.image}
                  src={image}
                  alt="weare"
                />
              </div>
            </div>
            <div className={styles.contentText1}>
              <div className={styles.h1EffectBox} ref={h1Ref1}>
                {animationWords()}
              </div>
              <div className={styles.textBox}>
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.page04Content2}>
          {/* <p
            ref={descriptionRef2}
            className={inViewDescriptionRef2 && `${styles.fadeInUpS}`}
          >
            {aboutData.description02}
          </p> */}
        </div>
      </div>
    </>
  );
};

export default Page04;
