import React from "react";
import styles from "../../../../styles/Page04Styles.module.css";
// import facePic from "../../../../public/imgs/slideImgs/image21.webp";
// import wePic from "../../../../public/imgs/weare.webp";
// import ncc from "../../../../public/imgs/ncc.jpg";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/future/image";

const Page04 = ({ page4Data }) => {
  const contentBoxref = useRef();
  const inViewContentBoxref = useInView(contentBoxref);
  const h1Ref1 = useRef();
  const inViewH1ref1 = useInView(h1Ref1);
  const h1Ref2 = useRef();
  const inViewH1ref2 = useInView(h1Ref2);

  const animationWords = () => {
    let b = page4Data[1]?.content.split(" ").map((word, idx) => {
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
  const animationWords1 = () => {
    let b = page4Data[2]?.content.split(" ").map((word, idx) => {
      let delay = { animationDelay: `${idx / 5 + 0.5}s` };
      return (
        <h1
          key={idx}
          className={
            inViewH1ref2
              ? `${styles.fadeInUpS} ${styles.h1Word}`
              : styles.h1Word
          }
          // className={inViewH1ref2 ? "fadeInUpS h1-word" : " h1-word"}
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
        <div className={styles.page04Content0}>
          <div className={styles.page04ContentText}>
            <p>{page4Data[0]?.content}</p>
            <div
              className={
                inViewContentBoxref
                  ? `${styles.contentTextBox} ${styles.scaleIn1}`
                  : styles.contentTextBox
              }
              ref={contentBoxref}
            >
              <h1>{page4Data[0]?.description}</h1>
            </div>
          </div>
          <div className={styles.page04Img}>
            <div className={styles.imgBox}>
              <Image
                layout='responsive'
                width={1000}
                height={1000}
                // src={page04Img}
                src={page4Data[0]?.image}
                alt='facee'
              />
            </div>
          </div>
        </div>
        <div className={styles.page04Content1}>
          <div className={styles.page04ContentText1}>
            <div className={styles.page04Img1}>
              <div className={styles.imgBox}>
                <Image
                  layout='responsive'
                  width={800}
                  height={800}
                  src={page4Data[1]?.image}
                  alt='weare'
                />
              </div>
            </div>
            <div className={styles.contentText1}>
              <div className={styles.h1EffectBox} ref={h1Ref1}>
                {animationWords()}
              </div>
              <div className={styles.textBox}>
                <p>{page4Data[1]?.description}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.page04Content2}>
          <div className={styles.page04ContentText2}>
            <div className={styles.contentText2}>
              <div className={styles.h1EffectBox1} ref={h1Ref2}>
                {animationWords1()}
              </div>

              <div className={styles.textBox1}>
                <p
                  dangerouslySetInnerHTML={{
                    __html: page4Data[2]?.description,
                  }}
                />
                {/* {page4Data[2]?.description} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page04;
