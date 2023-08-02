import React from 'react'
import BtnSubmit from '../../Form/BtnSubmit'
import styles from "../../../styles/ServicesPage5.module.css"

const ServicesPage5 = () => {
  return (
    <div className={styles.service5Container}>
      <div className={styles.wrapBtn}>
        <BtnSubmit label="ALL PROJECT" />
        <BtnSubmit label="BOOK YOUR CALL" />
      </div>
    </div>
  )
}

export default ServicesPage5