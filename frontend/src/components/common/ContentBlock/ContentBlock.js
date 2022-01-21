import React from 'react';
import PropTypes from 'prop-types';
import i18next from 'i18next';
import styles from './ContentBlock.module.css';

function ContentBlock({
  title, description, articleImage, writtenBy,
}) {
  // this cuts down the length of strings
  const truncate = (str, n) => {
    return str?.length > n ? `${str.substr(0, n - 1)}...` : str;
  };
  return (
    <div className={styles.contentBlock_container}>
      <img src={articleImage} alt="article" className={styles.contentBlock__image} />
      <div className={styles.contentBlock__text_top}>
        <h2>{truncate(title, 50)}</h2>
      </div>
      <div className={styles.contentBlock__text_bottom}>
        <p>{truncate(description, 100)}</p>
        <p>{ `${i18next.t('msg_news_post_writtenBy')} ${writtenBy}`}</p>
      </div>
    </div>
  );
}

ContentBlock.defaultProps = {
  title: '',
  description: '',
  articleImage: '',
  writtenBy: '',
};

ContentBlock.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  articleImage: PropTypes.string,
  writtenBy: PropTypes.string,
};

export default ContentBlock;
