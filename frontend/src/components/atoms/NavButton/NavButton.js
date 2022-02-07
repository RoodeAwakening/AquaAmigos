import React from 'react';
import PropTypes from 'prop-types';
import styles from './NavButton.module.css';

function NavButton({ children, onClick }) {
  return (
    <button type="button" className={styles.btn} onClick={onClick}>
      {children}
    </button>
  );
}

export default NavButton;

NavButton.defaultProps = {
  onClick: {},
};

NavButton.propTypes = {
  onClick: PropTypes.func,
};
