import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import i18next from 'i18next';
import styles from './ContentBlock.module.css';

function ContentBlock({
  title, description, articleImage, key, link,
}) {
  // this cuts down the length of strings
  const truncate = (str, n) => {
    return str?.length > n ? `${str.substr(0, n - 1)}...` : str;
  };
  return (
    <div className={styles.contentBlock__frame} key={key}>
      <img
        src={articleImage}
        alt="content_image"
      />
      <h4 className={styles.title}>{truncate(title, 50)}</h4>
      <div className={styles.contentBlock__frame__in_out_alert}>
        <h5 className={styles.description}>{truncate(description, 100)}</h5>
        {link
          && (
          <NavLink to={link}>
            {i18next.t('msg_learn_more')}
          </NavLink>
          )
        }
      </div>
    </div>
  );
}

ContentBlock.defaultProps = {
  title: '',
  description: '',
  articleImage: '',
  key: '',
  link: '',
};

ContentBlock.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  articleImage: PropTypes.string,
  key: PropTypes.number,
  link: PropTypes.string,
};

export default ContentBlock;
