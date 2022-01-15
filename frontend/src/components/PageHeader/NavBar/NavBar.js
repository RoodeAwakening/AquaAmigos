import { NavLink } from 'react-router-dom';
import i18next from 'i18next';
import React from 'react';
import MembersOnly from '../../securityRoutes/MembersOnly/MembersOnly';
import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <nav className={styles.NavBar_container}>
      <ul>
        <li>
          <NavLink to="/" exact activeClassName="active">
            <button type="button" className={styles.btn}>
              {i18next.t('msg_home')}
            </button>
          </NavLink>
        </li>
        <MembersOnly>
          <li>
            <NavLink to="/topics" exact activeClassName="active">
              <button type="button" className={styles.btn}>
                {i18next.t('msg_message_board')}
              </button>
            </NavLink>
          </li>
        </MembersOnly>
        <li>
          <NavLink to="/media" exact activeClassName="active">
            <button type="button" className={styles.btn}>
              {i18next.t('msg_media')}
            </button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/events" exact activeClassName="active">
            <button type="button" className={styles.btn}>
              {i18next.t('msg_events')}
            </button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/news" exact activeClassName="active">
            <button type="button" className={styles.btn}>
              {i18next.t('msg_news')}
            </button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/about-us" exact activeClassName="active">
            <button type="button" className={styles.btn}>
              {i18next.t('msg_about')}
            </button>
          </NavLink>
        </li>
        <MembersOnly>
          <li>
            <NavLink to="/users" exact activeClassName="active">
              <button type="button" className={styles.btn}>
                {i18next.t('msg_members')}
              </button>
            </NavLink>
          </li>
        </MembersOnly>
        <MembersOnly>
          <li>
            <NavLink to="/email" exact activeClassName="active">
              <button type="button" className={styles.btn}>
                {i18next.t('msg_email')}
              </button>
            </NavLink>
          </li>
        </MembersOnly>

      </ul>
    </nav>
  );
};

export default NavBar;
