import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter as ReactRouter, Route, Switch } from 'react-router-dom';
import { LoginPage, RegisterPage, ProfilePage, LandingPage } from './pages';
import Navbar from './components/Navbar/Navbar';
import { useAuth } from './context/AuthContext';
import AuthRoute from './AuthRoute';

const Router = () => {
  // const [logged, setLogged] = useState(authContext);

  const [user] = useAuth();
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    if (user) {
      setLogged(true);
    }
  }, []);

  console.log(user);

  return (
    <ReactRouter>
      <Navbar />
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <AuthRoute exact path="/" component={LandingPage} isAuth={logged} />
        <AuthRoute
          path="/profile"
          component={ProfilePage}
          isAuth={user ? true : false}
        />
      </Switch>
    </ReactRouter>
  );
};

export default Router;
