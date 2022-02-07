import React from 'react';
import PropTypes from 'prop-types';
import styles from './SectionTitle.module.css';
import SectionHeader from '../../atoms/SectionHeader/SectionHeader';
import SectionSubHeader from '../../atoms/SectionSubHeader/SectionSubHeader';

function SectionTitle({ header, subHeader }) {
  return (
    <div className={styles.sectionHeader__titles}>
      <SectionHeader header={header} />
      <SectionSubHeader subHeader={subHeader} />
    </div>
  );
}

SectionTitle.defaultProps = {
  header: '',
  subHeader: '',
};

SectionTitle.propTypes = {
  header: PropTypes.string,
  subHeader: PropTypes.string,
};

export default SectionTitle;
