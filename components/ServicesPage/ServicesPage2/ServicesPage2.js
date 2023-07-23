import React, { useCallback, useMemo } from 'react';
import styles from '../../../styles/ServicesPage2.module.css';

const ServicesPage2 = ({ dataServices }) => {
  const test = useCallback(() => {
    if (!dataServices.title.content) return <></>;
    console.log(dataServices.title.content);
    const br = dataServices.title.content.replaceAll(/\n/g, '<br/>');
    console.log(br);
    let arr = br.split(' ').map((item, idx) => {
      if (dataServices.title.effect.indexOf(idx) !== -1) {
        return `<span>${item}</span>`;
      }
      return item;
    });
    let newArr = arr.join(' ');
    console.log(newArr);
    return <div dangerouslySetInnerHTML={{ __html: newArr }} />;
  }, [dataServices]);
  return (
    <div className={styles.service2Container}>
      <div className={styles.service2IntroText}>
        {/* We design and produce{' '}
        <span className={styles.service2IntroTextHighlight}>interactive</span>{' '}
        and
        <br /> immersive{' '}
        <span className={styles.service2IntroTextHighlight}>
          experiences
        </span>{' '}
        <br />
        that mesh the{' '}
        <span className={styles.service2IntroTextHighlight}>virtual</span>
        <br /> and{' '}
        <span className={styles.service2IntroTextHighlight}>physical</span>,
        <br /> generating{' '}
        <span className={styles.service2IntroTextHighlight}>
          wonder
        </span> and <br />
        <span className={styles.service2IntroTextHighlight}>engagement</span>. */}
        {/* <div dangerouslySetInnerHTML={{ __html: test }} /> */}
        {test()}
      </div>
    </div>
  );
};

export default ServicesPage2;
