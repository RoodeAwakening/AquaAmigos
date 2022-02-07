import { NavLink } from 'react-router-dom';
import i18next from 'i18next';
import React from 'react';
import PropTypes from 'prop-types';
import MembersOnly from '../../securityRoutes/MembersOnly/MembersOnly';
import navLinks from './links';
import styles from './NavBar.module.css';
import NavButton from '../../atoms/NavButton/NavButton';

const NavBar = ({ showMenu }) => {
//  a list of link routes and titles to map through
// if you need to add another link please add it to the links.js file
  const links = navLinks.map((link) => {
    return (
      link.memberOnly ? (
        <MembersOnly>
          <li>
            <NavLink to={link.link} exact activeClassName="active">
              <NavButton onClick={showMenu}>
                {i18next.t(link.title)}
              </NavButton>
            </NavLink>
          </li>
        </MembersOnly>
      ) : (
        <li>
          <NavLink to={link.link} exact activeClassName="active">
            <NavButton onClick={showMenu}>
              {i18next.t(link.title)}
            </NavButton>
          </NavLink>
        </li>
      )
    );
  });

  return (
    <nav className={styles.NavBar_container}>
      <ul>
        {links}
      </ul>
    </nav>
  );
};

NavBar.defaultProps = {
  showMenu: {},
};

NavBar.propTypes = {
  showMenu: PropTypes.func,
};

export default NavBar;
