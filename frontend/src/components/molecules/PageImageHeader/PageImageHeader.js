import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

import SectionTitle from '../SectionTitle/SectionTitle';
import styles from './PageImageHeader.module.css';

function PageImageHeader({ imgSrc, title, subTitle }) {
  return (
    <Slider>
      <div className={styles.pageImageHeader_container}>
        <div className={styles.pageImageHeader_image_container}>
          <img src={imgSrc} alt="Page-Header" />
        </div>
        <div className={styles.pageImageHeader_title_container}>
          <SectionTitle header={title} subHeader={subTitle} />
        </div>
      </div>
    </Slider>
  );
}

export default PageImageHeader;

PageImageHeader.defaultProps = {
  imgSrc: '',
  title: '',
  subTitle: '',
};

PageImageHeader.propTypes = {
  imgSrc: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
};
