import React from 'react'
import BtnSubmit from '../../Form/BtnSubmit'
import styles from "../../../styles/ServicesPage5.module.css"
import { useRouter } from 'next/router'

const ServicesPage5 = () => {
  const router = useRouter()
  return (
    <div className={styles.service5Container}>
      <div className={styles.wrapBtn}>
        <BtnSubmit onClick={() => router.push("/projects")} label="ALL PROJECT" />
        <BtnSubmit onClick={() => router.push("/contact")} label="BOOK YOUR CALL" />
      </div>
    </div>
  )
}

export default ServicesPage5