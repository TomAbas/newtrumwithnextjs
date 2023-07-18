import React from 'react'
import ServicesPage1 from './ServicesPage1/ServicesPage1'
import ServicesPage2 from './ServicesPage2/ServicesPage2'
import ServicesPage3 from './ServicesPage3/ServicesPage3'
import ServicesPage4 from './ServicesPage4/ServicesPage4'
import styles from "../../styles/ServicesPage.module.css"

const ServicesPage = () => {
  return (
    <div className={styles.serviceContainer}>
      <ServicesPage1 />
      <ServicesPage2 />
      <ServicesPage3 />
      <ServicesPage4 />
    </div>
  )
}

export default ServicesPage