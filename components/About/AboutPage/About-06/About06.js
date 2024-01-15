import React from "react";
import styles from "../../../../styles/AboutV2Styles.module.css";
import icon1 from "../../../../public/imgs/logo1.svg";
import icon2 from "../../../../public/imgs/logo2.svg";
import icon3 from "../../../../public/imgs/logo3.svg";
import icon4 from "../../../../public/imgs/logo4.svg";
import Image from "next/image";

const About06 = () => {
  const partners = [icon1, icon2, icon3, icon4];
  return (
    <div className={styles.about06Container}>
      <div className={styles.about06Content}>
        <h3>Clients & Partners</h3>

        <div className={styles.partnerBox}>
          {partners.map((item, idx) => (
            <div className={styles.partner} key={idx}>
              <Image src={item} alt="icon" width={200} height={100} />
            </div>
          ))}
        </div>
        <div className={styles.partnerBox}>
          {partners.reverse().map((item, idx) => (
            <div className={styles.partner} key={idx}>
              <Image src={item} alt="icon" width={200} height={100} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About06;
