import React from 'react';
import NavBar from '../NavBar/NavBar';
import styles from './PageHeader.module.css';
// import logo2 from '../../images/logo2.png';
import logo from '../../../images/logo.jpg';

function PageHeader() {
  return (
    <div className={styles.pageHeader_container}>
      <div className={styles.pageHeader_top}>
        {/* this will hold a searchbar at some point */}
      </div>
      <div className={styles.pageHeader_middle}>
        <div className={styles.pageHeader_middle_logo}>
          {/* <img src={logo2} alt="logo" /> */}
          <img src={logo} alt="logo" />
        </div>
        <div className={styles.pageHeader_middle_user_icon}>
          {/* { i18next.t(msg_edit_profile) } */}
          <span>
            <h2>user</h2>
            <h2>placeholder</h2>
          </span>
        </div>
      </div>
      <div className={styles.pageHeader_nav}>
        <NavBar />
      </div>
    </div>


  );
}

export default PageHeader;
