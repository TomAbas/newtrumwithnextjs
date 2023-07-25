import React, { useCallback, useMemo, useRef } from 'react';
import styles from '../../../styles/ServicesPage2.module.css';
import aniStyles from '../../../styles/Animation.module.css';

import { useInView } from 'framer-motion';

const ServicesPage2 = ({ dataServices }) => {
  const textRef = useRef();
  const isTextIn = useInView(textRef);
  const render = useCallback(() => {
    if (!dataServices.title.content) return <></>;
    const br = dataServices.title.content.replaceAll(/\n/g, '<br/>');
    let arr = br.split(' ').map((item, idx) => {
      if (dataServices.title.effect.indexOf(idx) !== -1) {
        return `<span>${item}</span>`;
      }
      return item;
    });
    let newArr = arr.join(' ');
    return <div dangerouslySetInnerHTML={{ __html: newArr }} />;
  }, [dataServices]);

  return (
    <div className={styles.service2Container}>
      <div
        className={`${styles.service2IntroText} ${
          isTextIn && aniStyles.fadeInUp
        }`}
        ref={textRef}
      >
        {render()}
      </div>
    </div>
  );
};

export default ServicesPage2;
