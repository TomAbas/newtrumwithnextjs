import React from "react";
import styles from "../../../../styles/AboutV2Styles.module.css";

const About05 = () => {
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
          <p className={styles.about05RightTitle}>Lorem ipsum dolor sit amet</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About05;
