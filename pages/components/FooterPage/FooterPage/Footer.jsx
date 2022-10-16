import React from "react";
import Image from 'next/future/image'
import styles from '../../../../styles/FooterStyles.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import footerLogo from "../../../../public/imgs/footer-logo.svg";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
const Footer = () => {
  return (
    <>
      <div className={styles.landingPageIcon}>
        <div className={styles.leftIconBox}>
          <Image src={footerLogo} alt='footer-logo' className={styles.iconLeft}/>
          <p>about</p>
        </div>
        <div className={styles.rightIconBox}>
          <div className={styles.leftIconBoxInside}>
            <p>En</p>
          </div>
          <div className={styles.rightIconBoxInside}>
            <FontAwesomeIcon icon={faPaperPlane} className={styles.iconRight}/>
            <p>Contact Us</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
