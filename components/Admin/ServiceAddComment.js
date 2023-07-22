import React from 'react';
import { Fragment } from 'react';
import styles from '../../styles/Admin.module.css';

const ServiceAddComment = () => {
  const [brandLogo, setBrandLogo] = useState([]);
  return (
    <Fragment>
      <div className={styles.partnerDisplay}>
        {brandLogo.map((item, idx) => {
          return <Fragment key={idx}>{/* <Brand /> */}</Fragment>;
        })}
      </div>
      <div className={styles.row1}>
        <div className={styles.titleEdit}>
          <h3>About 04 : User Name </h3>
          <textarea
            type='text'
            className={styles.inputField}
            name='content3Line2'
          />
          {/* <p>{errors.content3Line2?.message}</p> */}
        </div>
        <div className={styles.titleEdit}>
          <h3>About 04 : User Position </h3>
          <textarea
            type='text'
            className={styles.inputField}
            name='content3Line2'
          />
          {/* <p>{errors.content3Line2?.message}</p> */}
        </div>
        <div className={styles.titleEdit}>
          <h3>About 04 : User Logo </h3>
          <input
            type='file'
            accept='image/*'
            className={styles.inputField}
            name='image3'
          />
          {/* <p>{errors.content3Line2?.message}</p> */}
        </div>
      </div>
    </Fragment>
  );
};

export default ServiceAddComment;
