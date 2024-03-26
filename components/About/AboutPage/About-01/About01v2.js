import React from "react";
import styles from "../../../../styles/AboutV2Styles.module.css";
import icon from "../../../../public/imgs/HeaderIcon.svg";
import Image from "next/image";

const About01v2 = ({ aboutData }) => {
  const { video, about01 } = aboutData;
  const { title } = about01;

  return (
    <div className={styles.about1Container}>
      <div className={styles.about1Bg}>
        <div className={styles.about1Content}>
          <h1>{title?.title}</h1>
          <div>
            <p style={{ whiteSpace: "pre-line" }}>{title?.description}</p>
          </div>

          <span className={styles.btn}>
            contact now <Image src={icon} width={15} height={15} alt="icon" />
          </span>
        </div>

        <div className={styles.overlay}></div>
        {video && (
          <div className={styles.about1Video}>
            <video autoPlay playsInline muted>
              <source src={video} type="video/mp4" />
            </video>
          </div>
        )}
      </div>
    </div>
  );
};

export default About01v2;
