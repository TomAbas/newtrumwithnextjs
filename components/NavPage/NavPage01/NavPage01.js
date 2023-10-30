import React from 'react';
import styles from '../../../styles/NavPageStyles.module.css';
import brandLogo from '../../../public/imgs/logo-white.png';
import Image from 'next/future/image';
import Link from 'next/link';
import useScroll from '../../../hooks/useScroll';
import { useTranslation } from 'react-i18next';
import i18n from '../../../i18n';

const NavPage = () => {
  const { scrollDir } = useScroll();
  const { t } = useTranslation('translation');

  const handleChangeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <>

      <div
        className={` ${styles.navContainer} ${scrollDir === 'down' ? styles.navMoveUp : styles.navMoveDown
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
              <Link href='/'>
                {t('home')}
              </Link>
            </li>
            <li>
              <Link href='/projects'>
                {t('projects')}
              </Link>
            </li>
            <li>
              <Link href='/service'>
                {t('services')}
              </Link>
            </li>
            <li>
              <Link href='/about'>
                {t('about')}
              </Link>
            </li>
            <li>
              <Link href='/news'>
                {t('news')}
              </Link>
            </li>
            <select
              className={styles.language}
              defaultValue={"en"}
              onChange={handleChangeLanguage}
            >
              <option
                value="en"> EN</option>
              <option
                value="vi">
             VI
              </option>
            </select>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavPage;
