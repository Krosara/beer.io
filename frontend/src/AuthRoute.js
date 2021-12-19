import React from 'react';
import { LandingPage } from './pages';
import { Route, Redirect } from 'react-router-dom';

const AuthRoute = ({ component: Component, isAuth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(routerProps) => {
        return !isAuth ? (
          <Component {...routerProps} />
        ) : (
          <Redirect to={{ pathname: LandingPage }} />
        );
      }}
    />
  );
};

export default AuthRoute;
