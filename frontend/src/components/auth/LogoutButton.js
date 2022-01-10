import React from 'react';
import { useDispatch } from 'react-redux';
import toastr from 'toastr';
import { logout } from '../../actions/sessionActions';

const LogoutButton = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const onLogout = async () => {
    await dispatch(logout());
    toastr.success('Success messages');
  };

  return <button type="button" onClick={onLogout}>Logout</button>;
};

export default LogoutButton;
