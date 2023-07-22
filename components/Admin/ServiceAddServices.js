import React from 'react';
import styles from '../../styles/Admin.module.css';
import { useState } from 'react';
import { Fragment } from 'react';

const ServiceAddServices = () => {
  const [serviceArr, setSerivceArr] = useState([]);
  return (
    <div>
      <div className={styles.partnerDisplay}>
        {serviceArr.map((item, idx) => {
          return <Fragment key={idx}></Fragment>;
        })}
      </div>
      <form>
        <div className={styles.row1}>
          <div className={styles.titleEdit}>
            <h3>Service Title </h3>
            <textarea
              type='text'
              className={styles.inputField}
              name='content3Line2'
            />
            {/* <p>{errors.content3Line2?.message}</p> */}
          </div>
          <div className={styles.titleEdit}>
            <h3>Service Description </h3>
            <textarea
              type='text'
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

export default ServiceAddServices;
