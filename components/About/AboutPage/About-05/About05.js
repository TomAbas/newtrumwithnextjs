import React from "react";
import styles from "../../../../styles/AboutV2Styles.module.css";

const About05 = ({ aboutData }) => {
  const { description01, description02 } = aboutData;
  return (
    <div className={styles.about05Container}>
      <div className={styles.about05Content}>
        <div className={styles.about05Left}>
          <iframe
            className={styles.video}
            src={
              "https://www.youtube.com/embed/z9e8CPULjW4?si=i-oNX590GuXII1W4"
            }
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className={styles.about05Right}>
          <p className={styles.about05RightTitle}>{description01}</p>
          <p
            style={{
              whiteSpace: "pre-line",
            }}
          >
            {description02}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About05;
