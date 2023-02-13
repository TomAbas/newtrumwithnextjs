import React, { useState } from "react";
import styles from "../../../../styles/LandingPageStyles.module.css";
import { useRef } from "react";
import { useEffect } from "react";

const LandingPage = ({ landingPageData }) => {
  const [line01, setLine01] = useState([]);
  const [line02, setLine02] = useState([]);
  const [line03, setLine03] = useState([]);
  const refWord0 = useRef();

  const produceArray = () => {
    // if (landingPageData) {
      // let firstLine = JSON.stringify(landingPageData.firstLine);
      // let secondLine = JSON.stringify(landingPageData.secondLine);
      // let thirdLine = JSON.stringify(landingPageData.thirdLine);
      let firstLine = 'We are expert in...';
      let secondLine = 'turning your brand into';
      let thirdLine = 'the catchy icon';
      if (firstLine) {
        let arrayWords = firstLine.replace(/"/g, "").split(" ");
        setLine01(arrayWords);
        let arrayWords1 = secondLine.replace(/"/g, "").split(" ");
        setLine02(arrayWords1);
        let arrayWords2 = thirdLine.replace(/"/g, "").split(" ");
        setLine03(arrayWords2);
      }
    // }
  };
  const animationWords = () => {
    let b = line01.map((word, idx) => {
      let delay = { animationDelay: `${idx / 8 + 0.5}s` };
      return ( 
        <h1  key={idx} className={styles.fadeInUp0} style={delay} ref={refWord0}>
          {word}
        </h1>
      );
    });

    return b;
  };
  const animationWords1 = () => {
    let b = line02.map((word, idx) => {
      let delay = { animationDelay: `${idx / 12 + 1.3}s` };
      return (
        <h1 key={idx} className={styles.fadeInUp0} style={delay} ref={refWord0}>
          {idx === 0 ? <span>{word}</span> : word}
        </h1>
      );
    });
    return b;
  };
  const animationWords2 = () => {
    let b = line03.map((word, idx) => {
      let delay = { animationDelay: `${idx / 15 + 1.6}s` };
      return (
        <h1 key={idx} className={styles.fadeInUp0} style={delay} ref={refWord0}>
          {idx === 1 ? (
            <span>{word}</span>
          ) : idx === 2 ? (
            <span>{word}</span>
          ) : (
            word
          )}
        </h1>
      );
    });
    return b;
  };
  useEffect(() => {
    produceArray();
  }, [landingPageData]);
  return (
    <>
      <div className={styles.test}>
        <div className={styles.landingPageContainer}>
          <div className={styles.loganContainer}>
            <div className={styles.wrapperEffect}>{animationWords()}</div>
            <div className={styles.wrapperEffect}>{animationWords1()}</div>
            <div className={styles.wrapperEffect}>{animationWords2()}</div>
          </div>
        </div>
      </div>

      <div className={styles.picLandingPage}>
        <div
          className={styles.landingPagePicInside}
          style={{
            background:
              landingPageData &&
              `url(${landingPageData.img}) no-repeat fixed center
    center/cover`,
          }}
        ></div>
      </div>
    </>
  );
};

export default LandingPage;
