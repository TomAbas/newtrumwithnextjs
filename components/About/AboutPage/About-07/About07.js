import React from "react";
import styles from "../../../../styles/AboutV2Styles.module.css";
import icon1 from "../../../../public/imgs/logo1.svg";
import icon2 from "../../../../public/imgs/logo2.svg";
import icon3 from "../../../../public/imgs/logo3.svg";
import icon4 from "../../../../public/imgs/logo4.svg";
import Image from "next/image";
const About07 = () => {
  const partners = [icon1, icon2, icon3, icon4];
  return (
    <div className={styles.about06Container}>
      <div className={styles.about06Content}>
        <h3>Meet our team</h3>

        <div className={styles.teamBox}>
          {partners.map((item, idx) => (
            <div className={styles.memberItem} key={idx}>
              <div className={styles.memberInfo}>
                <h4>John Doe</h4>
                <p>CEO</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.teamBox}>
          {partners.map((item, idx) => (
            <div className={styles.memberItem} key={idx}>
              <div className={styles.memberInfo}>
                <h4>John Doe</h4>
                <p>CEO</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About07;
