import React from "react";
import styles from "../../../styles/NewPage1.module.css";

const NewPage1 = ({ title, mainImage }) => {
  return (
    <div className={styles.newPage1Container}>
      <>
        <div
          className={styles.headlineNewsBox}
          style={{
            background: `url(${mainImage}) no-repeat center center/cover`,
          }}
        >
          <div className={styles.backgroundImgBox}>
            <div className={styles.headlineContent}>
              <>
                <div className={styles.headlineWordBox}>
                  <div className={styles.wrapperText}>{title}</div>
                </div>
                {/* <div className={styles.clientShortInfo}>Go Round</div> */}
              </>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default NewPage1;
