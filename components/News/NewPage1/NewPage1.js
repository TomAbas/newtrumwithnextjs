import React from 'react'
import styles from '../../../styles/NewPage1.module.css';

const NewPage1 = () => {
  return (
    <div className={styles.newPage1Container}>
      <>
        <div
          className={styles.headlineNewsBox}
          ư
        >
          <div className={styles.backgroundImgBox}>
            <div className={styles.headlineContent}>
              <>
                <div className={styles.headlineWordBox}>
                  <div className={styles.wrapperText}>
                    Marco & Polo
                  </div>
                </div>
                <div className={styles.clientShortInfo}>
                  Go Round
                </div>
              </>
            </div>
          </div>
        </div>
      </>
    </div>
  )
}

export default NewPage1