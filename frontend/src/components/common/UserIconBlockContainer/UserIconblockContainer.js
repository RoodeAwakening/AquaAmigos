/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import i18next from '../../../utils/i18n';
import LogoutButton from '../../auth/LogoutButton';
import styles from './UserIconBlockContainer.module.css';

function UserIconblock({ profilePhoto, username }) {
  const login = () => {
    window.location.href = '/login';
  };

  const signup = () => {
    window.location.href = '/sign-up';
  };

  return (
    <div className={styles.UserIconBlock_container} id="userIconBlock_container">
      <div className={styles.UserIconBlock_icon}>
        <div id="userIconBlock_icon_user">
          <img src={profilePhoto} alt="user icon" />
        </div>
      </div>
      <div>
        <div className={styles.UserIconBlock_name}>
          <h2 id="userIconBlock_name">{username}</h2>
        </div>
        <div className={styles.UserIconBlock_logout_button}>
          { username !== i18next.t('msg_Create_account')
            ? (
              <div className={styles.UserIconBlock_logout} id="userIconBlock_logout_button">
                <LogoutButton />
              </div>

            )
            : (
              <div className={styles.UserIconBlock_signUp_signIn} id="userIconBlock_signUp_signIn">
                <button type="button" id="userIconBlock_logout_button" onClick={login}>
                  {i18next.t('msg_login')}
                </button>
                <button type="button" id="userIconBlock_logout_button" onClick={signup}>
                  {i18next.t('msg_signup')}
                </button>
              </div>
            )

          }
        </div>
      </div>
    </div>
  );
}

UserIconblock.defaultProps = {
  profilePhoto: 'https://www.w3schools.com/howto/img_avatar.png',
  username: '',
};

UserIconblock.propTypes = {
  profilePhoto: PropTypes.string,
  username: PropTypes.string,
};


export default UserIconblock;
