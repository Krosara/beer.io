import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from './context/AuthContext';

const AuthRoute = ({ children, ...rest }) => {
  let { user } = useContext(AuthContext);
  console.log(user);
  return <Route {...rest}>{user ? children : <Redirect to="/login" />}</Route>;
};

export default AuthRoute;
