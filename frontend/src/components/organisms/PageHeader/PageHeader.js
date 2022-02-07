import React, { useEffect, useState } from 'react';
import NavBar from '../../molecules/NavBar/NavBar';
import styles from './PageHeader.module.css';
// import logo2 from '../../images/logo2.png';
import logo from '../../../images/logo.jpg';
import UserIconBlock from '../../molecules/UserIconBlock/UserIconBlock';

function PageHeader(sessionUser) {
  const [isOpen, setIsOpen] = useState(false);

  const showMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // update menu settings based on device size.
    if (window.innerWidth > 768) {
      const mobileMenuButton = document.getElementById('mobileButton');
      mobileMenuButton.style.display = 'none';
    }
    if (window.innerWidth < 768) {
      const pageHeaderContainer = document.getElementById('pageHeader_container');
      if (isOpen) {
        pageHeaderContainer.style.display = 'block';
      } else {
        pageHeaderContainer.style.display = 'none';
      }
    }
  }, [isOpen]);

  return (
    <div className="toast-top-center">
      <div className={styles.pageHeader_mobile}>
        <div>
          <img src={logo} alt="logo" className={styles.pageHeader_mobile__logo} />
        </div>
        <div>
          <button type="button" className={styles.btn_mobile} onClick={showMenu}>
            <i className="fas fa-bars" />
          </button>
        </div>
      </div>
      <div className={styles.pageHeader_container} id="pageHeader_container">
        <div className={styles.pageHeader_middle_logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={styles.pageHeader_mobile__button} id="mobileButton">
          <button type="button" className={styles.btn_mobile} id="btn_mobile" onClick={showMenu}>
            <i className="fas fa-bars" />
          </button>
        </div>
        <div className={styles.pageHeader_nav}>
          <NavBar
            {...sessionUser}
            showMenu={showMenu}
          />
        </div>
        <div className={styles.pageHeader_middle_user_icon}>
          {/* { i18next.t(msg_edit_profile) } */}
          <UserIconBlock {...sessionUser} />
        </div>
      </div>
    </div>
  );
}

export default PageHeader;
