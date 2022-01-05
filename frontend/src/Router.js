import React from 'react';
import { BrowserRouter as ReactRouter, Route, Switch } from 'react-router-dom';
import { LoginPage, RegisterPage, ProfilePage, LandingPage } from './pages';
import Navbar from './components/Navbar/Navbar';
import AuthRoute from './AuthRoute';

const Router = () => {
  // const [logged, setLogged] = useState(authContext);

  // useEffect(() => {
  //   console.log(user.user ? true : false);
  // }, [user]);

  return (
    <ReactRouter>
      <Navbar />
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <AuthRoute exact path="/" component={LandingPage} />
        <AuthRoute path="/profile" component={ProfilePage} />
      </Switch>
    </ReactRouter>
  );
};

export default Router;
