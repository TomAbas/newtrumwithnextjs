import React, { Fragment } from 'react';
import styles from '../../../../styles/AboutStyles.module.css';
import Image from 'next/future/image';
import logo from '../../../../public/imgs/slideImgs/MultiMediaProduction1.webp';
export const Brand = ({ title = 'BrandName' }) => {
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
        <p>{title}</p>
      </div>
    </div>
  );
};
const About03 = () => {
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
        Trusted by multinational companies, local entrepreneurs, and cultural
        organizations.
      </p>
      <div className={styles.brandContainer}>
        {new Array(10).fill(null).map((item, idx) => {
          return <Fragment key={idx}>{<Brand />}</Fragment>;
        })}
      </div>
      {/* <div className={styles.brandContainer}>
        {new Array(5).fill(null).map((item, idx) => {
          return <Fragment key={idx}>{<Brand />}</Fragment>;
        })}
      </div> */}
    </div>
  );
};

export default About03;
