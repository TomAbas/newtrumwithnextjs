import React from 'react';
import Image from 'next/future/image';
import brandLogo from '../../../public/imgs/logo-white.png';
import styles from '../../../styles/FooterStyles.module.css';
import Link from 'next/link';

const FooterPage01 = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerTop}>
        <div className={styles.footerNav}>
          <div className={styles.footerNavItem}>
            <Link href='/'>Home</Link>
          </div>
          <div className={styles.footerNavItem}>
            <Link href='/'>Project</Link>
          </div>
          <div className={styles.footerNavItem}>
            <Link href='/'>service</Link>
          </div>
          <div className={styles.footerNavItem}>
            <Link href='/'>about</Link>
          </div>
          <div className={styles.footerNavItem}>
            <Link href='/'>news</Link>
          </div>
        </div>
        <div className={styles.footerMedia}>
          <div className={styles.footerNavItem}>
            <Link href='/'>facebook</Link>
          </div>
          <div className={styles.footerNavItem}>
            <Link href='/'>linkedin</Link>
          </div>
          <div className={styles.footerNavItem}>
            <Link href='/'>instagram</Link>
          </div>
          <div className={styles.footerNavItem}>
            <Link href='/'>tiktok</Link>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.footerLogo}>
          <Image src={brandLogo} alt='trum-logo' className='logoImg' />
        </div>
        <div className={styles.footerInfo}>
          <p>contact us: contact@trumagency.com</p>
          <p>call us: +84903079937</p>
        </div>
      </div>
    </div>
  );
};

export default FooterPage01;
