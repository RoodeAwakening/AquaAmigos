/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { useSelector } from 'react-redux';

const ProtectedRoute = (props) => {
  const user = useSelector(state => state.session.user);
  // todo add user role admin
  return (
    <div>
      {(user) ? props.children : null }
    </div>
  );
};


export default ProtectedRoute;
