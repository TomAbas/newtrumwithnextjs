import React, { useState } from "react";
import styles from "../../../../styles/LandingPageStyles.module.css";
import { useRef } from "react";
import { useEffect } from "react";
import landingpagepic from "/public/imgs/landingpagepic.png";
const LandingPage = ({ landingPageData }) => {
  const refWord0 = useRef();
  const renderAnim = () => {
    return landingPageData?.map((item, oIdx) => {
      return (
        <>
          <div className={styles.wrapperEffect}>
            {item.content.split(" ").map((word, idx) => {
              let delay = { animationDelay: `${oIdx / 2 + idx / 10}s` };
              if (item.effect.indexOf(idx) !== -1) {
                return (
                  <h1
                    key={idx}
                    className={styles.fadeInUp0}
                    style={delay}
                    ref={refWord0}
                  >
                    <span>{word}</span>
                  </h1>
                );
              } else {
                return (
                  <h1
                    key={idx}
                    className={styles.fadeInUp0}
                    style={delay}
                    ref={refWord0}
                  >
                    {word}
                  </h1>
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
      <div className={styles.test}>
        <div className={styles.landingPageContainer}>
          <div className={styles.loganContainer}>{renderAnim()}</div>
        </div>
      </div>
      <div className={styles.picLandingPage}>
        <div
          className={styles.landingPagePicInside}
          style={{
            backgroundImage: landingPageData && `url(${landingpagepic.src})`,
          }}
        ></div>
      </div>
    </>
  );
};

export default LandingPage;
