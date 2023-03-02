import React, { useState, useEffect } from "react";
import { useInView } from "framer-motion";
import styles from "../../../../styles/Page03Styles.module.css";
import { useRef } from "react";

const Page03 = ({ page3Data }) => {
  const [line01, setLine01] = useState([]);
  const [line02, setLine02] = useState([]);
  const [line03, setLine03] = useState([]);
  const [line04, setLine04] = useState([]);
  const [line05, setLine05] = useState([]);
  const spanRef = useRef(null);
  const inViewSpan = useInView(spanRef);
  const spanRef1 = useRef(null);
  const inViewSpan1 = useInView(spanRef1);
  const spanRef2 = useRef(null);
  const inViewSpan2 = useInView(spanRef2);
  const spanRef3 = useRef(null);
  const inViewSpan3 = useInView(spanRef3);
  const spanRef4 = useRef(null);
  const inViewSpan4 = useInView(spanRef4);
  const spanRef5 = useRef(null);
  const inViewSpan5 = useInView(spanRef5);
  const produceArray = () => {
    if (page3Data) {
      // let firstLine = JSON.stringify(page3Data.firstLine);
      // let secondLine = JSON.stringify(page3Data.secondLine);
      // let thirdLine = JSON.stringify(page3Data.thirdLine);
      // let fourthLine = JSON.stringify(page3Data.fourthLine);
      // let fifthLine = JSON.stringify(page3Data.fifthLine);
      let firstLine = "Our approach is unapologetically human-centric,   ";
      let secondLine = "user experience being at the core of a process of";
      let thirdLine = "relentless exploration, experimentation and";
      let fourthLine = "iteration that combines expertise in design,";
      let fifthLine = " technological research and entertainment.";
      if (firstLine) {
        let arrayWords = firstLine.replace(/"/g, "").split(" ");
        setLine01(arrayWords);
        let arrayWords1 = secondLine.replace(/"/g, "").split(" ");
        setLine02(arrayWords1);
        let arrayWords2 = thirdLine.replace(/"/g, "").split(" ");
        setLine03(arrayWords2);
        let arrayWords3 = fourthLine.replace(/"/g, "").split(" ");
        setLine04(arrayWords3);
        let arrayWords4 = fifthLine.replace(/"/g, "").split(" ");
        setLine05(arrayWords4);
      }
    }
  };
  const animationWord = () => {
    let b = line01.map((word, idx) => {
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
          {idx === 4 ? <span> {word} </span> : word}
        </h2>
      );
    });

    return b;
  };
  const animationWord1 = () => {
    let b = line02.map((word, idx) => {
      return (
        <h2
          key={idx}
          className={
            inViewSpan1
              ? `${styles.textContent} ${styles.effect}`
              : styles.textContent
          }
          ref={spanRef}
        >
          {word}
        </h2>
      );
    });

    return b;
  };
  const animationWords2 = () => {
    let b = line03.map((word, idx) => {
      return (
        <h2
          key={idx}
          className={
            inViewSpan2
              ? `${styles.textContent} ${styles.effect}`
              : styles.textContent
          }
          ref={spanRef}
        >
          {idx !== 0 ? <span> {word} </span> : word}
        </h2>
      );
    });

    return b;
  };
  const animationWords3 = () => {
    let b = line04.map((word, idx) => {
      return (
        <h2
          key={idx}
          className={
            inViewSpan3
              ? `${styles.textContent} ${styles.effect}`
              : styles.textContent
          }
          ref={spanRef}
        >
          {idx === 1 || idx === 2 ? word : <span> {word} </span>}
        </h2>
      );
    });

    return b;
  };
  const animationWords4 = () => {
    let b = line05.map((word, idx) => {
      return (
        <h2
          key={idx}
          className={
            inViewSpan4
              ? `${styles.textContent} ${styles.effect}`
              : styles.textContent
          }
        >
          {word}
        </h2>
      );
    });

    return b;
  };
  useEffect(() => {
    produceArray();
  }, [page3Data]);
  return (
    <>
      <div className={styles.page03Container}>
        <div className={styles.page03Content}>
          
          <h2
            className={
              inViewSpan
                ? `${styles.textContent} ${styles.effect}`
                : styles.textContent
            }
          >
            {animationWord()}
          </h2>
          <h2 className={styles.textContent} ref={spanRef1}>
            {animationWord1()}
          </h2>
          <h2
            className={
              inViewSpan1
                ? `${styles.textContent} ${styles.effect}`
                : styles.textContent
            }
            ref={spanRef2}
          >
            {animationWords2()}
          </h2>
          <h2
            className={
              inViewSpan3
                ? `${styles.textContent} ${styles.effect}`
                : styles.textContent
            }
            ref={spanRef3}
          >
            {animationWords3()}
          </h2>
          <h2 className={styles.textContent} ref={spanRef4}>
            {animationWords4()}
          </h2>
        </div>
      </div>
    </>
  );
};

export default Page03;

//effect
