import React from "react";
import styles from "../../../../styles/AboutV2Styles.module.css";
import icon from "../../../../public/imgs/HeaderIcon.svg";
import Image from "next/image";
const About04 = () => {
  const datatest = [
    "Product/Service Explainers",
    "Startup Video Pitches",
    "Promotions",
    "Video Marketings",
    "Videos",
    "View all",
  ];
  return (
    <div className={styles.about4Container}>
      <div className={styles.about4bg}>
        <div className={styles.about4Content}>
          <div className={styles.about4Left}>
            <p>We create Motion</p>
            <p> Graphics from the</p>
            <p>ground up for your:</p>
          </div>
          <div className={styles.about4Right}>
            <div className={styles.itemBox}>
              {datatest.slice(0, 3).map((data, index) => {
                if (data === "View all") {
                  return (
                    <p key={index} className={styles.viewAll}>
                      {data}
                    </p>
                  );
                }
                return <p key={index}>{data}</p>;
              })}
            </div>
            <div className={styles.itemBox}>
              {datatest.slice(3).map((data, index) => {
                if (data === "View all") {
                  return (
                    <p key={index} className={styles.viewAll}>
                      View all{" "}
                      <Image src={icon} width={15} height={15} alt="icon" />
                    </p>
                  );
                }
                return <p key={index}>{data}</p>;
              })}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.overlay}></div>
    </div>
  );
};

export default About04;
