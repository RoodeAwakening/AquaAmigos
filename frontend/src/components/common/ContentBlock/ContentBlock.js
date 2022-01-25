import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContentBlock.module.css';

function ContentBlock({
  title, description, articleImage,
}) {
  // this cuts down the length of strings
  const truncate = (str, n) => {
    return str?.length > n ? `${str.substr(0, n - 1)}...` : str;
  };
  return (
    <div className={styles.contentBlock__frame}>
      <img
        src={articleImage}
        alt="content_image"
      />
      <h4 className={styles.title}>{truncate(title, 50)}</h4>
      <div className={styles.contentBlock__frame__in_out_alert}>
        <h5 className={styles.description}>{truncate(description, 100)}</h5>
      </div>
    </div>
  );
}

ContentBlock.defaultProps = {
  title: '',
  description: '',
  articleImage: '',
};

ContentBlock.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  articleImage: PropTypes.string,
};

export default ContentBlock;
