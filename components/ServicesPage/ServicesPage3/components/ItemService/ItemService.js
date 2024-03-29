import Image from "next/image";
import React from "react";
import imgCircle from "../../../../../public/imgs/img-circle.webp";
import styles from "../../../../../styles/ServicesPage3.module.css";
import Link from "next/link";

const ItemService = ({ title, desc, subTitle }) => {
  return (
    <Link
      href={title !== "SERVICES" ? `/services/${subTitle}` : ""}
      className={styles.wrapItemService}
    >
      <div className={styles.wrapItemService}>
        <div className={styles.wrapTextCard}>
          <h3 className={styles.titleCard}>{title}</h3>

          <span
            className={styles.desc}
            dangerouslySetInnerHTML={{ __html: desc }}
          ></span>
        </div>
        {subTitle && (
          <div className={styles.wrapCircle}>
            <Image src={imgCircle} alt="circle" className={styles.imgCircle} />
          </div>
        )}
      </div>
    </Link>
  );
};

export default ItemService;
