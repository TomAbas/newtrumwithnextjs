import React from 'react'
import styles from "../../../styles/ServicesPage3.module.css"
import ItemService from './components/ItemService/ItemService'

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