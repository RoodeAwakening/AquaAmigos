import React from 'react';
import styles from './UserIconBlock.module.css';

function UserIconBlock() {
  return (
    <div className={styles.UserIconBlock_container} id="userIconBlock_container">
      <div className={styles.UserIconBlock_icon}>
        <span id="userIconBlock_icon">
          <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" alt="user icon" />
        </span>
      </div>
      <div className={styles.UserIconBlock_name}>
        <h2 id="userIconBlock_name">test</h2>
      </div>
      <div className={styles.UserIconBlock_logout_button}>
        <button type="button" id="userIconBlock_logout_button">logout button</button>
      </div>

    </div>
  );
}

export default UserIconBlock;
