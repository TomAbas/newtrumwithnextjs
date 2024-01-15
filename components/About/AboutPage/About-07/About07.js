import React from "react";
import styles from "../../../../styles/AboutV2Styles.module.css";
import icon1 from "../../../../public/imgs/logo1.svg";
import icon2 from "../../../../public/imgs/logo2.svg";
import icon3 from "../../../../public/imgs/logo3.svg";
import icon4 from "../../../../public/imgs/logo4.svg";
import septrung from "../../../../public/imgs/septrung.webp";
import Image from "next/image";
const About07 = () => {
  const partners = [icon1, icon2, icon3, icon4];
  return (
    <div className={styles.about06Container}>
      <div className={styles.about06Content}>
        <h3>Meet our team</h3>

        <div className={styles.teamBox}>
          {partners.map((item, idx) => (
            <div
              className={styles.memberItem}
              key={idx}
              style={{
                backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/trum-project.appspot.com/o/web%2FSepTrung.webp?alt=media&token=0fbec390-5874-44eb-a3d8-65c77eb88d30')`,
              }}
            >
              <div className={styles.memberInfo}>
                <h4>Sếp Trung</h4>
                <p>CEO</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.teamBox}>
          {partners.map((item, idx) => (
            <div
              className={styles.memberItem}
              key={idx}
              style={{
                backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/trum-project.appspot.com/o/web%2FSepTrung.webp?alt=media&token=0fbec390-5874-44eb-a3d8-65c77eb88d30')`,
              }}
            >
              <div className={styles.memberInfo}>
                <h4>Sếp Trung</h4>
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
