import React from 'react';
import styles from '../../../styles/NavPageStyles.module.css';
import brandLogo from '../../../public/imgs/logo-white.png';
import Image from 'next/future/image';
import Link from 'next/link';
import useScroll from '../../../hooks/useScroll';
const NavPage = () => {
  const { scrollDir } = useScroll();
  return (
    <>
      <div
        className={` ${styles.navContainer} ${
          scrollDir === 'down' ? styles.navMoveUp : styles.navMoveDown
        }`}
      >
        <Link href='/'>
          <a>
            <div className={styles.navBrandLogo}>
              <Image src={brandLogo} alt='trum-logo' className='logoImg' />
            </div>
          </a>
        </Link>
        <div className={styles.navBox}>
          <ul>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/'>project</Link>
            </li>
            <li>
              <Link href='/'>sevices</Link>
            </li>
            <li>
              <Link href='/'>about</Link>
            </li>
            <li>
              <Link href='/'>news</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavPage;