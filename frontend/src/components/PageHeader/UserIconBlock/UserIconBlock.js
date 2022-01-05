/* eslint-disable react/destructuring-assignment */

// import React from 'react';
import React from 'react';
import UserIconblock from '../../common/UserIconBlockContainer/UserIconblockContainer';
// import styles from './UserIconBlock.module.css';

function UserIconBlock(sessionUser) {
  const profilePhoto = 'https://icons-for-free.com/iconfiles/png/512/business+costume+male+man+office+user+icon-1320196264882354682.png';
  const ifUser = () => {
    if (sessionUser.id) {
      return (
        <UserIconblock
          profilePhoto={profilePhoto}
          username={sessionUser.username}
        />
      );
    }
    return (
      <UserIconblock
        profilePhoto="https://www.w3schools.com/howto/img_avatar.png"
        username="Create an Account"
      />
    );
  };

  return <>{ifUser()}</>;
}

UserIconBlock.defaultProps = {
  sessionUser: {
    id: null,
    username: '',
  },
};

export default UserIconBlock;
