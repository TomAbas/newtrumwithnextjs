import React, { Fragment } from 'react';
import styles from '../../../../styles/AboutStyles.module.css';
import Image from 'next/future/image';
import logo from '../../../../public/imgs/slideImgs/MultiMediaProduction1.webp';
export const Brand = ({ item }) => {
  return (
    <div className={styles.wrapperBrand}>
      <div className={styles.logoBrand}>
        <Image
          layout='responsive'
          width={100}
          height={100}
          src={logo}
          alt='logo'
        />
      </div>
      <div className={styles.brandName}>
        <p>{item?.title}</p>
      </div>
    </div>
  );
};
const About03 = ({ aboutData }) => {
  const { listBrand, title } = aboutData.about03
  // const Brand = () => {
  //   return (
  //     <div className={styles.wrapperBrand}>
  //       <div className={styles.logoBrand}>
  //         <Image
  //           layout='responsive'
  //           width={100}
  //           height={100}
  //           src={logo}
  //           alt='logo'
  //         />
  //       </div>
  //       <div className={styles.brandName}>
  //         <p>Brand Name</p>
  //       </div>
  //     </div>
  //   );
  // };
  return (
    <div className={styles.aboutContainer03}>
      <p className={styles.about03TitleBrand}>
        {title}
      </p>
      <div className={styles.brandContainer}>
        {listBrand?.map((item, idx) => {
          return <Fragment key={idx}>{<Brand item={item} />}</Fragment>;
        })}
      </div>
      {/* <div className={styles.brandContainer}>
        {listBrand?.map((item, idx) => {
          return <Fragment key={idx}>{<Brand item={item} />}</Fragment>;
        })}
      </div> */}
    </div>
  );
};

export default About03;
