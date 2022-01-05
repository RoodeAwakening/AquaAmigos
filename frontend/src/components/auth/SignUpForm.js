import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signUp } from '../../actions/sessionActions';

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data);
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <form onSubmit={onSignUp}>
      <div>
        {errors.map((error, ind) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div>
        <label htmlFor="username">
          User Name
          <input
            type="text"
            name="username"
            onChange={updateUsername}
            value={username}
          />
        </label>
      </div>
      <div>
        <label htmlFor="email">
          Email
          <input
            type="text"
            name="email"
            onChange={updateEmail}
            value={email}
          />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            onChange={updatePassword}
            value={password}
          />
        </label>
      </div>
      <div>
        <label htmlFor="repeat_password">
          Repeat Password
          <input
            type="password"
            name="repeat_password"
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required
          />
        </label>
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpForm;
