import React, { useEffect, useRef, useState } from "react";
import styles from "../../../../styles/AboutStyles.module.css";
import AddIcon from "@mui/icons-material/Add";
import { useInView } from "framer-motion";
import { set } from "react-hook-form";
import Image from "next/image";
import ImgPlus from "../../../../public/imgs/plus-img.webp";

const ItemNumber = ({ start = 0, end, timer = 1000, title }) => {
  const numberRef = useRef();
  const isNumberInview = useInView(numberRef);
  const [number, setNumber] = useState(0);
  const ref = useRef(start);
  const accumulator = end / 10;

  useEffect(() => {
    if (isNumberInview && ref.current < end) {
      const interval = setInterval(() => {
        if (ref.current >= end) return;
        ref.current += accumulator;
        setNumber(Math.floor(ref.current));
      }, timer);
      return () => clearInterval(interval);
    } else {
      setNumber(0);
      ref.current = 0;
    }
  }, [isNumberInview]);

  return (
    <>
      <div className={styles.wrapItemNumber}>
        <div className={styles.number}>
          <p>{number}</p>
        </div>
        <div className={styles.content} ref={numberRef}>
          <div className={styles.wrapDesc}>
            <Image src={ImgPlus} alt="#" className={styles.icon} />
            <p>{title}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemNumber;
