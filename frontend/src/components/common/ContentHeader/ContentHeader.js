import React from 'react';
import i18next from 'i18next';
import PropTypes from 'prop-types';
import styles from './ContentHeader.module.css';

function ContentHeader({ header, subHeader }) {
  return (
    <div className={styles.sectionHeader__titles}>
      <h1>{i18next.t(header)}</h1>
      <h4>{i18next.t(subHeader)}</h4>
    </div>
  );
}

ContentHeader.defaultProps = {
  header: '',
  subHeader: '',
};

ContentHeader.propTypes = {
  header: PropTypes.string,
  subHeader: PropTypes.string,
};

export default ContentHeader;
