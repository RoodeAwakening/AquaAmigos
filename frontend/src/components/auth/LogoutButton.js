import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../actions/sessionActions';

const LogoutButton = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const onLogout = async (e) => {
    await dispatch(logout());
  };

  return <button type="button" onClick={onLogout}>Logout</button>;
};

export default LogoutButton;
