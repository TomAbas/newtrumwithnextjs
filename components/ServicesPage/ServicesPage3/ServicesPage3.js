import React from 'react'
import styles from "../../../styles/ServicesPage3.module.css"
import ItemService from './components/ItemService/ItemService'

const ServicesPage3 = ({ dataServices }) => {
  const { listService, subTitle } = dataServices
  const mainTitle = {
    mainTitle: 'SERVICES',
    description: subTitle
  }
  const newData = [mainTitle, ...listService];
  return (
    <div className={styles.service3Container}>
      {
        newData.map((item, idx) => {
          return <ItemService key={idx} desc={item.description} title={item.mainTitle} subTitle={item.title} />
        })
      }
    </div>
  )
}

export default ServicesPage3