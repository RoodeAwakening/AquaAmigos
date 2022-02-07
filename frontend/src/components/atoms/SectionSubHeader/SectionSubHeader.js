import React from 'react';
import i18next from 'i18next';
import PropTypes from 'prop-types';
import styles from './SectionSubHeader.module.css';

function SectionSubHeader({ subHeader }) {
  return <h4 className={styles.sectionSubHeader__title}>{i18next.t(subHeader)}</h4>;
}

export default SectionSubHeader;

SectionSubHeader.defaultProps = {
  subHeader: '',
};

SectionSubHeader.propTypes = {
  subHeader: PropTypes.string,
};
