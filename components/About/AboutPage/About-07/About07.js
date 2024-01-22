import React from "react";
import styles from "../../../../styles/AboutV2Styles.module.css";
import icon1 from "../../../../public/imgs/logo1.svg";
import icon2 from "../../../../public/imgs/logo2.svg";
import icon3 from "../../../../public/imgs/logo3.svg";
import icon4 from "../../../../public/imgs/logo4.svg";
const About07 = ({ aboutData }) => {
  const partners = [icon1, icon2, icon3, icon4];
  const { about04 } = aboutData;
  return (
    <div className={styles.about06Container}>
      <div className={styles.about06Content}>
        <h3>{about04?.title}</h3>

        <div className={styles.teamBox}>
          {about04?.people?.slice(0, 4).map((item, idx) => (
            <div
              className={styles.memberItem}
              key={idx}
              style={{
                backgroundImage: `url(${item.image})`,
              }}
            >
              <div className={styles.memberInfo}>
                <h4>{item.name}</h4>
                <p>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.teamBox}>
          {about04?.people?.slice(4, 8).map((item, idx) => (
            <div
              className={styles.memberItem}
              key={idx}
              style={{
                backgroundImage: `url(${item.image})`,
              }}
            >
              <div className={styles.memberInfo}>
                <h4>{item.name}</h4>
                <p>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About07;
