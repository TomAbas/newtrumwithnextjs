import React, { useEffect, useState } from "react";
import styles from "../../../../styles/AboutStyles.module.css";
import { Fragment } from "react";
import ItemNumber from "./ItemNumber";

const About02 = ({ aboutData }) => {
  const { list } = aboutData.about01;

  return (
    <div className={styles.aboutNumberContainer}>
      <div className={styles.aboutPictureContainer}>
        <div className={styles.aboutWrapper}>
          <div className={styles.aboutContentNumber}>
            <div className={styles.aboutRow1}>
              {list?.slice(0, 3).map((item, idx) => {
                return (
                  <Fragment key={idx}>
                    <ItemNumber
                      title={item.title}
                      start={0}
                      end={item.number}
                      timer={50}
                    />
                  </Fragment>
                );
              })}
            </div>
            <div className={styles.aboutRow2}>
              {list?.slice(3, 6).map((item, idx) => {
                return (
                  <Fragment key={idx}>
                    <ItemNumber
                      title={item.title}
                      start={0}
                      end={item.number}
                      timer={50}
                    />
                  </Fragment>
                );
              })}
            </div>
          </div>
        </div>
        <div className={styles.overlay}></div>
      </div>
    </div>
  );
};

export default About02;
