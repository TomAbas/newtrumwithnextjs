import React from "react";
import styles from "../../../../styles/AboutV2Styles.module.css";
import icon1 from "../../../../public/imgs/logo1.svg";
import icon2 from "../../../../public/imgs/logo2.svg";
import icon3 from "../../../../public/imgs/logo3.svg";
import icon4 from "../../../../public/imgs/logo4.svg";
import Image from "next/image";

const About06 = ({ aboutData }) => {
  const { about03 } = aboutData;
  console.log(about03, "about03");
  const partners = [icon1, icon2, icon3, icon4];
  return (
    <div className={styles.about06Container}>
      <div className={styles.about06Content}>
        <h3>{about03?.title}</h3>

        <div className={styles.partnerBox}>
          {about03.listBrand?.slice(0, 4).map((item, idx) => (
            <div className={styles.partner} key={idx}>
              <Image src={item.image} alt="icon" width={200} height={100} />
            </div>
          ))}
        </div>
        <div className={styles.partnerBox}>
          {about03.listBrand?.slice(4, 8).map((item, idx) => (
            <div className={styles.partner} key={idx}>
              <Image src={item.image} alt="icon" width={200} height={100} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About06;
