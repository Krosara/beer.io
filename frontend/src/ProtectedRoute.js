import { LoginPage } from './pages';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, isAuth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(routerProps) =>
        isAuth ? (
          <Component {...routerProps} />
        ) : (
          <Redirect to={{ pathname: LoginPage }} />
        )
      }
    />
  );
};

export default ProtectedRoute;
