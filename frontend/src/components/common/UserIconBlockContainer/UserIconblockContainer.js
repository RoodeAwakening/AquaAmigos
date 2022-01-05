/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styles from './UserIconBlockContainer.module.css';

function UserIconblock({ profilePhoto, username }) {
  console.log('profilePhoto', profilePhoto);
  console.log('userName', username);
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
          <button type="button" id="userIconBlock_logout_button">logout</button>
        </div>
      </div>
    </div>
  );
}


export default UserIconblock;
