import React, { useState, useEffect } from "react";
import { useInView } from "framer-motion";
import styles from "../../../../styles/Page03Styles.module.css";
import { useRef } from "react";

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
              if (oIdx === 0) {
                item.effect = [4];
              }
              if (oIdx === 1) {
                item.effect = [4];
              }
              if (oIdx === 2) {
                item.effect = [1, 2, 3];
              }
              if (oIdx === 3) {
                item.effect = [0, 3, 4, 5];
              }
              if (oIdx === 4) {
                item.effect = [4];
              }
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
