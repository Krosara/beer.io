import { RegisterPage, LoginPage } from './pages';
import Navbar from './components/Navbar/Navbar';
import { ReactComponent as Logo } from './assets/logo+text.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export const UnauthenticatedRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Logo className=" mb-14 small:mb-6 small:-mt-2 pl-2 mx-auto small:w-9/12 small:h-3/4" />
      <Switch>
        <Route exact path="/login" component={LoginPage}></Route>
        <Route exact path="/register" component={RegisterPage}></Route>
      </Switch>
    </Router>
  );
};
