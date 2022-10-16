import React from "react";
import styles from "../../../../styles/NavPageStyles.module.css";
import brandLogo from "../../../../public/imgs/logo-white.png";
import projectLogo from "../../../../public/imgs/project-log.svg";
import Image from "next/future/image";
import Link from "next/link";
const NavPage = () => {
  return (
    <>
      <div className={styles.navContainer}>
        <Link href='/'>
          <div className={styles.navBrandLogo}>
            <Image src={brandLogo} alt='trum-logo' className='logoImg' />
          </div>
        </Link>
        <Link href='/projects'>
          <div className={styles.navProject}>
            <Image
              src={projectLogo}
              alt='project-logo'
              className={styles.projectLogo}
            />
            <p>Projects</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default NavPage;
