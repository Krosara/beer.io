import React from 'react';
import { BrowserRouter as ReactRouter, Route, Switch } from 'react-router-dom';
import { LoginPage, RegisterPage, ProfilePage, LandingPage } from './pages';
import ProtectedRoute from './ProtectedRoute';
import Navbar from './components/Navbar/Navbar';
const Router = () => {
  return (
    <ReactRouter>
      <Navbar />
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <ProtectedRoute exact path="/" component={LandingPage} />
        <ProtectedRoute path="/profile" component={ProfilePage} />
      </Switch>
    </ReactRouter>
  );
};

export default Router;
