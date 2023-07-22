import React, { useEffect, useRef, useState } from 'react';
import styles from '../../../../styles/AboutStyles.module.css';
import AddIcon from '@mui/icons-material/Add';
import { useInView } from 'framer-motion';
import { set } from 'react-hook-form';
import Image from 'next/image';
import ImgPlus from "../../../../public/imgs/plus-img.webp"

const ItemNumber = ({ start = 0, end, timer = 1000, title }) => {
  const numberRef = useRef();
  const isNumberInview = useInView(numberRef);
  const [number, setNumber] = useState(null);
  const ref = useRef(start);
  const accumulator = end / 5;

  const updateCounterState = () => {
    if (ref.current < end) {
      const result = Math.ceil(ref.current + accumulator);
      if (result > end) {
        setNumber(end);
      }
      setNumber(result);

      ref.current = result;
    }
    // setTimeout(updateCounterState, timer);
  };

  useEffect(() => {
    if (!isNumberInview) {
      setNumber(null);
      ref.current = 0;
      clearInterval(updateCounterState);
      return;
    }
    let isMouted = true;
    if (isMouted && isNumberInview) {
      let test = setInterval(updateCounterState, timer);
      //   updateCounterState();
    }

    return () => {
      isMouted = false;
      // clearInterval(test);
    };
  }, [end, start, isNumberInview]);

  return (
    <>
      <div className={styles.wrapItemNumber}>
        <div className={styles.number}>
          <p>{number}</p>
        </div>
        <div className={styles.content} ref={numberRef}>
          <div className={styles.wrapDesc}>
            <Image src={ImgPlus} alt='#' className={styles.icon} />
            <p>{title}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemNumber;
