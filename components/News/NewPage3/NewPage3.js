import React from "react";
import styles from "../../../styles/NewPage3.module.css";
import Image from "next/image";
import imgContent from "../../../public/imgs/img-banner-new.webp";

const NewPage3 = ({ data }) => {
  return (
    <div className={styles.NewPage3Container}>
      <div className={styles.LeftContent}>
        <Image src={data.sliderImages?.[0]} alt="#" />
      </div>

      <div className={styles.RightContent}>
        <div className={styles.TitleRightContent}>Credits</div>
        {data.credits.creditList.map((item, idx) => {
          return (
            <div key={idx} className={styles.DescRightContent}>
              {item.title} by: {item.description}
            </div>
          );
        })}
        {/* <div className={styles.DescRightContent}>
          Directed by: Benjamin Steiger-Levine
        </div>
        <div className={styles.DescRightContent}>
          Written by: Benjamin Steiger-Levine & Gregory Kaufman
        </div>
        <div className={styles.DescRightContent}>
          Produced by: Item 7, Belga Films, Arte
        </div>
        <div className={styles.DescRightContent}>
          Producers: Audrey Pacard, Paul-E. Audet, Pierre Even, Alain-Gilles
          Viellevoye
        </div>
        <div className={styles.DescRightContent}>
          Actors: Léane Labrèche-Dor, Emmanuel Schwartz
        </div>
        <div className={styles.DescRightContent}>Sound design: Cosounders</div>
        <div className={styles.DescRightContent}>
          Motion capture studio: Studio du Château
        </div>{" "}
        <div className={styles.DescRightContent}>
          Additional animation: Zest Studio
        </div> */}
      </div>
    </div>
  );
};

export default NewPage3;
