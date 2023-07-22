import Image from 'next/image'
import React from 'react'
import imgCircle from "../../../../../public/imgs/img-circle.webp"
import styles from "../../../../../styles/ServicesPage3.module.css"

const ItemService = ({ title, desc, subTitle }) => {
  return <div className={styles.wrapItemService}>
    <div className={styles.wrapTextCard}>
      <h3 className={styles.titleCard}>{title}</h3>
      <h5 className={styles.subTitleCard}>{subTitle}</h5>
      <span className={styles.desc}>{desc}</span>
    </div>
    {
      subTitle && <div className={styles.wrapCircle}>
        <Image src={imgCircle} alt="circle" className={styles.imgCircle} />
      </div>
    }
  </div>
}

export default ItemService