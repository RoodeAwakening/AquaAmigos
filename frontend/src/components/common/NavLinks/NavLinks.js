import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './NavLinks.module.css';


function NavLinks({ link, linkName }) {
  return (
    <Link to={link}>
      <h2 className={styles.navLinks_title}>{linkName}</h2>
    </Link>
  );
}

NavLinks.propTypes = {
  link: PropTypes.string.isRequired,
  linkName: PropTypes.string.isRequired,
};


export default NavLinks;
