import React from 'react';
import i18next from 'i18next';
import PropTypes from 'prop-types';
import styles from './SectionHeader.module.css';

function SectionHeader({ header }) {
  return <h1 className={styles.sectionHeader__title}>{i18next.t(header)}</h1>;
}

export default SectionHeader;

SectionHeader.defaultProps = {
  header: '',
};

SectionHeader.propTypes = {
  header: PropTypes.string,
};
