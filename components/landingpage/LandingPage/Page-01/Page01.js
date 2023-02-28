import React, { useState } from "react";
import { useInView } from "framer-motion";

import styles from "../../../../styles/Page01Styles.module.css";
import { useRef } from "react";
import { useEffect } from "react";

const Page01 = ({ page1Data }) => {
  const [line01, setLine01] = useState("");
  const [line02, setLine02] = useState([]);
  const [line03, setLine03] = useState([]);
  const [line04, setLine04] = useState("");
  const [line05, setLine05] = useState([]);
  const [line06, setLine06] = useState([]);
  const arrWordRef = useRef();
  const isArrWordIn = useInView(arrWordRef);
  const arrWordRef1 = useRef();
  const isArrWordIn1 = useInView(arrWordRef1);
  const arrWordRef3 = useRef();
  const isArrWordIn3 = useInView(arrWordRef3);
  const arrWordRef4 = useRef();
  const isArrWordIn4 = useInView(arrWordRef4);

  const produceArray = () => {
    if (page1Data) {
      // let firstLine = JSON.stringify(page1Data.firstLine);
      // let secondLine = JSON.stringify(page1Data.secondLine);
      // let thirdLine = JSON.stringify(page1Data.thirdLine);
      // let fourthLine = JSON.stringify(page1Data.fourthLine);
      // let fifthLine = JSON.stringify(page1Data.fifthLine);
      // let sixthLine = JSON.stringify(page1Data.sixthLine);
      let firstLine = "We design and produce";
      let secondLine = "As an ICON, the crowd will be";
      let thirdLine = "faithful to your owned brand";
      let fourthLine = "to";
      let fifthLine = "As an ICON, Brand designs an extreme ";
      let sixthLine = "DESIRES that MAD about your label.";
      // console.log(sixthLine);

      if (firstLine) {
        let arrayWords = firstLine.replace(/"/g, "");
        setLine01(arrayWords);
        let arrayWords1 = secondLine.replace(/"/g, "").split(" ");
        setLine02(arrayWords1);
        let arrayWords2 = thirdLine.replace(/"/g, "").split(" ");
        setLine03(arrayWords2);
        let arrayWords3 = fourthLine.replace(/"/g, "");
        setLine04(arrayWords3);
        let arrayWords4 = fifthLine.replace(/"/g, "").split(" ");
        setLine05(arrayWords4);
        let arrayWords5 = sixthLine.replace(/"/g, "").split(" ");
        setLine06(arrayWords5);
      }
    }
  };

  const animationWords = () => {
    let b = line02.map((word, idx) => {
      let delay = { animationDelay: `${idx / 5 + 0.5}s` };
      return (
        <h1
          key={idx}
          className={
            isArrWordIn1
              ? `${styles.fadeInUp0} ${styles.h1Word}`
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
    let b = line03.map((word, idx) => {
      let delay = { animationDelay: `${idx / 5 + 1.2}s` };
      return (
        <h1
          key={idx}
          className={
            isArrWordIn1
              ? `${styles.fadeInUp1} ${styles.h1Word}`
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
  const animationWords2 = () => {
    let b = line05.map((word, idx) => {
      let delay = { animationDelay: `${idx / 5 + 0.5}s` };
      return (
        <h1
          key={idx}
          className={
            isArrWordIn4
              ? `${styles.fadeInUp1} ${styles.h1Word}`
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
  const animationWords3 = () => {
    let b = line06.map((word, idx) => {
      let delay = { animationDelay: `${idx / 5 + 1.2}s` };
      return (
        <h1
          key={idx}
          className={
            isArrWordIn4
              ? `${styles.fadeInUp1} ${styles.h1Word}`
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
  useEffect(() => {
    // console.log(inViewTopH1ref);
    produceArray();
  }, [page1Data]);
  return (
    <>
      <div className={styles.page01Container}>
        <div className={styles.page01Content}>
          <div className={styles.topText}>
            <p className={isArrWordIn && styles.topTextP} ref={arrWordRef}>
              {line01}
            </p>
            <div className={styles.page01WrapperEffect} ref={arrWordRef1}>
              {animationWords()}
            </div>
            <div className={styles.page01WrapperEffect} ref={arrWordRef1}>
              {animationWords1()}
            </div>
          </div>
          <div className={styles.bottomText}>
            <p className={isArrWordIn3 && styles.topTextP} ref={arrWordRef3}>
              {line04}
            </p>
            <div className={styles.page01WrapperEffect} ref={arrWordRef4}>
              {animationWords2()}
            </div>
            <div className={styles.page01WrapperEffect} ref={arrWordRef4}>
              {animationWords3()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page01;
// page-01-wrapper-effect
