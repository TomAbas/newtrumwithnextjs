import Image from "next/image";
import React, { useState } from "react";
import imgCircle from "../../../../public/imgs/img-circle.webp";
import styles from "../../../../styles/ItemNewPageDetail3.module.css";
import Link from "next/link";
import icMinus from "../../../../public/imgs/icMinus.svg"
import icPlus from "../../../../public/imgs/icPlus.svg"

const ItemNewPageDetail3 = ({ title, desc, subTitle }) => {
  const [expand, setExpand] = useState(false);

  const handleClick = () => {
    setExpand(!expand);
  };
  return (
    <div onClick={handleClick} className={styles.wrapItemService}>
      <div className={styles.wrapTextCard}>
        <h3 className={styles.titleCard}>Research & Creative Strategy</h3>
        <h5 className={`${styles.subTitleCard} ${expand ? `${styles.activeExpand}` : ""}`}>
          The artistic direction, inspired in part by the style of artist David Hockney, required colossal work in modeling and textures and makes viewers feel like they are inside a three dimension, living, painting. The project features several innovative real-time approaches and technologies, including volumetric capture of actors, motion capture, as well as physics and fluids simulations.
          The artistic direction, inspired in part by the style of artist David Hockney.
        </h5>
        <span className={styles.desc}>{desc}</span>
      </div>
      <div className={styles.wrapCircle}>
        {
          expand ?
            <Image src={icMinus} alt="circle" />
            :

            <Image src={icPlus} alt="circle" />
        }
      </div>
    </div>
  );
};

export default ItemNewPageDetail3;
