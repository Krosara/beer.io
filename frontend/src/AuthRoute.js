import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const AuthRoute = ({ isAuth: token, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        console.log(token);
        if (token) {
          return <Component />;
        } else {
          return (
            <Redirect
              to={{ pathname: '/login', state: { from: props.location } }}
            />
          );
        }
      }}
    />
  );
};

export default AuthRoute;
