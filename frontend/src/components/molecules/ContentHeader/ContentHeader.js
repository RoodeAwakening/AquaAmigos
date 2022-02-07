import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContentHeader.module.css';
import SectionHeader from '../../atoms/SectionHeader/SectionHeader';
import SectionSubHeader from '../../atoms/SectionSubHeader/SectionSubHeader';

function ContentHeader({ header, subHeader }) {
  return (
    <div className={styles.sectionHeader__titles}>
      <SectionHeader header={header} />
      <SectionSubHeader subHeader={subHeader} />
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
