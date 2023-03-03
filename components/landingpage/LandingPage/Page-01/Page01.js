import React, { useState } from "react";
import { useInView } from "framer-motion";

import styles from "../../../../styles/Page01Styles.module.css";
import { useRef } from "react";
import { useEffect } from "react";

const Page01 = ({ page1Data }) => {
  const arrWordRef = useRef();
  const isArrWordIn = useInView(arrWordRef);
  let pArr = [0, 3];
  const renderAnim = () => {
    return page1Data.map((item, idx) => {
      if (pArr.indexOf(idx) !== -1) {
        return (
          <p className={styles.topTextP} ref={arrWordRef} key={idx}>
            {item.content}
          </p>
        );
      } else {
        return (
          <div className={styles.page01WrapperEffect} key={idx}>
            <h1 className={styles.h1Word}> {item.content}</h1>
          </div>
        );
      }
    });
  };

  return (
    <>
      <div className={styles.page01Container}>
        <div
          ref={arrWordRef}
          className={
            isArrWordIn && `${styles.page01Content} ${styles.scaleIn1}`
          }
        >
          <div className={styles.topText}>{renderAnim()}</div>
        </div>
      </div>
    </>
  );
};

export default Page01;
