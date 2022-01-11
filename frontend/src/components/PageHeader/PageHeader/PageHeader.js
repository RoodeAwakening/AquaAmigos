import React from 'react';
import NavBar from '../NavBar/NavBar';
import styles from './PageHeader.module.css';
// import logo2 from '../../images/logo2.png';
import logo from '../../../images/logo.jpg';
import UserIconBlock from '../UserIconBlock/UserIconBlock';

function PageHeader(sessionUser) {
  return (
    <div className="toast-top-center">
      <div className={styles.pageHeader_container}>
        <div className={styles.pageHeader_middle_logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={styles.pageHeader_nav}>
          <NavBar {...sessionUser} />
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
