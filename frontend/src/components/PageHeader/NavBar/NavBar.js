import i18next from 'i18next';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <nav className={styles.NavBar_container}>
      <ul>
        <li>
          <NavLink to="/" exact activeClassName="active">
            {i18next.t('msg_home')}
          </NavLink>
        </li>
        <li>
          <NavLink to="/users" exact activeClassName="active">
            {i18next.t('msg_users')}
          </NavLink>
        </li>

      </ul>
    </nav>
  );
};

export default NavBar;
