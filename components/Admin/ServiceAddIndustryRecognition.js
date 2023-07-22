import React from 'react';
import { useState } from 'react';
import { Fragment } from 'react';
import styles from '../../styles/Admin.module.css';

const ServiceAddIndustryRecognition = () => {
  const [industryArr, setIndustryArr] = useState([]);
  return (
    <div>
      <div className={styles.partnerDisplay}>
        {industryArr.map((item, idx) => {
          return <Fragment key={idx}></Fragment>;
        })}
      </div>
      <form>
        <div className={styles.row1}>
          <div className={styles.titleEdit}>
            <h3>Logo Brand </h3>
            <textarea
              type='text'
              className={styles.inputField}
              name='content3Line2'
            />
            {/* <p>{errors.content3Line2?.message}</p> */}
          </div>
          <div className={styles.titleEdit}>
            <h3>Brand Description </h3>
            <textarea
              type='text'
              className={styles.inputField}
              name='content3Line2'
            />
            {/* <p>{errors.content3Line2?.message}</p> */}
          </div>
          <div className={styles.titleEdit}>
            <h3>Time </h3>
            <input
              type='date'
              className={styles.inputField}
              name='content3Line2'
            />
            {/* <p>{errors.content3Line2?.message}</p> */}
          </div>
        </div>
      </form>
    </div>
  );
};

export default ServiceAddIndustryRecognition;
