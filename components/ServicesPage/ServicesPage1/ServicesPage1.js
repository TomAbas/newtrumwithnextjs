import React from "react";
import styles from "../../../styles/ServicesPage1.module.css";
import aniStyles from "../../../styles/Animation.module.css";
import img from "/public/imgs/Services..svg";
import Image from "next/image";
const ServicesPage1 = () => {
  return (
    <div className={styles.service1Container}>
      <h1 className={`${styles.serviceTitle} `}>
        <Image
          src={img}
          alt="Picture of the author"
          width={600}
          height={500}
          className={aniStyles.fadeInUp}
        />
      </h1>
    </div>
  );
};

export default ServicesPage1;
