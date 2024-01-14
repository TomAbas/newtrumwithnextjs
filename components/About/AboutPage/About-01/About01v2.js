import React from "react";
import styles from "../../../../styles/AboutV2Styles.module.css";
import icon from "../../../../public/imgs/HeaderIcon.svg";
import Image from "next/image";

const About01v2 = () => {
  return (
    <div className={styles.about1Container}>
      <div className={styles.about1Bg}>
        <div className={styles.about1Content}>
          <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
            </p>
            <p> eiusmod tempor incididunt ut.</p>
          </div>

          <span className={styles.btn}>
            contact now <Image src={icon} width={15} height={15} alt="icon" />
          </span>
        </div>


        <div className={styles.overlay}></div>
      </div>
    </div>
  );
};

export default About01v2;
