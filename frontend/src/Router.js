import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouteController from './RouteController';
import { LandingPage, LoginPage, RegisterPage } from './pages';

const Router = ({ isAuth }) => {
  return (
    <BrowserRouter>
      <RouteController
        routeType={'auth'}
        isAuth={isAuth}
        component={LoginPage}
        path={'/login'}
        exact
      />
      <RouteController
        routeType={'auth'}
        isAuth={isAuth}
        component={RegisterPage}
        path={'/register'}
        exact
      />
      <RouteController
        routeType={'protected'}
        isAuth={isAuth}
        component={LandingPage}
        path={'/register'}
        exact
      />
    </BrowserRouter>
  );
};

export default Router;
