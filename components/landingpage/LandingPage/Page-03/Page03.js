import React, { useState, useEffect } from "react";
import { useInView } from "framer-motion";
import styles from "../../../../styles/Page03Styles.module.css";
import { useRef } from "react";
import aniStyles from "../../../../styles/Animation.module.css";
const Page03 = ({ page3Data }) => {
  const spanRef = useRef();
  const inViewSpan = useInView(spanRef);

  const renderAnim = () => {
    return page3Data.map((item, oIdx) => {
      return (
        <>
          <div
            ref={spanRef}
            className={
              inViewSpan
                ? `${styles.textContent} ${styles.effect}`
                : styles.textContent
            }
          >
            {item.content.split(" ").map((word, idx) => {
              if (item.effect.indexOf(idx) !== -1) {
                return (
                  <h2
                    key={idx}
                    className={
                      inViewSpan
                        ? `${styles.textContent} ${styles.effect}`
                        : styles.textContent
                    }
                    ref={spanRef}
                  >
                    <span> {word} </span>
                  </h2>
                );
              } else {
                return (
                  <h2
                    key={idx}
                    ref={spanRef}
                    className={
                      inViewSpan
                        ? `${styles.textContent} ${styles.effect}`
                        : styles.textContent
                    }
                  >
                    {word}
                  </h2>
                );
              }
            })}
          </div>
        </>
      );
    });
  };

  return (
    <>
      <div className={styles.page03Container}>
        <div className={styles.page03Content} ref={spanRef}>
          {renderAnim()}
        </div>
      </div>
    </>
  );
};

export default Page03;

//effect
