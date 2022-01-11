import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as sessionActions from '../../actions/sessionActions';

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state?.session?.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(sessionActions.login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <form onSubmit={onLogin}>
      <div>
        {errors.map((error, ind) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div>
        <label htmlFor="email_input">
          Email
          <input
            name="email"
            type="text"
            id="email_input"
            placeholder="Email"
            value={email}
            onChange={updateEmail}
          />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          Password
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={updatePassword}
          />
        </label>
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default LoginForm;
