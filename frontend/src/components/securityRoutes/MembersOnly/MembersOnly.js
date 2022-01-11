/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { useSelector } from 'react-redux';

const MembersOnly = (props) => {
  const user = useSelector(state => state.session.user);
  return (
    <div>
      {(user) ? props.children : null }
    </div>
  );
};


export default MembersOnly;
