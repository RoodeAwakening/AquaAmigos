/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// eslint-disable-next-line import/no-unresolved
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import * as sessionActions from './actions/sessionActions';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(sessionActions.authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <h1>My Home Page</h1>
        </Route>
        <Route path="/login" exact>
          <LoginForm />
        </Route>
        <Route path="/sign-up" exact>
          <SignUpForm />
        </Route>
        <ProtectedRoute path="/users" exact>
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId" exact>
          <User />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
