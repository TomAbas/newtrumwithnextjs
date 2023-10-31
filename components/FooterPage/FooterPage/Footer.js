import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import styles from "../../../styles/FooterStyles.module.css";
const Footer = () => {
  return (
    <>
      <div className={styles.landingPageIcon}>
        <div className={styles.leftIconBox}></div>
        <div className={styles.rightIconBox}>
          <div className={styles.leftIconBoxInside}></div>
          <Link href="/contact">
            <a className={styles.rightIconBoxInside}>
              <div className={styles.rightIconBoxInside}>
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  className={styles.iconRight}
                />
                <p>Contact Us</p>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
