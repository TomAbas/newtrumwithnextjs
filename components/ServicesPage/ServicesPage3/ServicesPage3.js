import React from 'react'
import styles from "../../../styles/ServicesPage3.module.css"
import imgCircle from "../../../public/imgs/img-circle.webp"
import Image from 'next/image'

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

const ServicesPage3 = () => {
  const listCardServices = [
    {
      title: 'SERVICES',
      desc: "We combine creativity and technology to help our clients invent the future and engage audiences in the physical and digital worlds in which they live."
    },
    {
      subtitle: 'Research & Creative Strategy',
      desc: "Uncover issues, opportunities, and plot a path forward."
    },
    {
      subtitle: 'Research & Creative Strategy',
      desc: "Uncover issues, opportunities, and plot a path forward."
    },
    {
      subtitle: 'Research & Creative Strategy',
      desc: "Uncover issues, opportunities, and plot a path forward."
    },
    {
      subtitle: 'Research & Creative Strategy',
      desc: "Uncover issues, opportunities, and plot a path forward."
    },
    {
      subtitle: 'Research & Creative Strategy',
      desc: "Uncover issues, opportunities, and plot a path forward."
    }
    , {
      subtitle: 'Research & Creative Strategy',
      desc: "Uncover issues, opportunities, and plot a path forward."
    }
  ]
  return (
    <div className={styles.service3Container}>
      {
        listCardServices.map((item, idx) => {
          return <ItemService key={idx} desc={item.desc} subTitle={item.subtitle} title={item.title} />
        })
      }
    </div>
  )
}

export default ServicesPage3