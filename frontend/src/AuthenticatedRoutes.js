import { LandingPage, ProfilePage } from './pages';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { ReactComponent as Logo } from './assets/logo+text.svg';

export const AuthenticatedRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Logo className=" mb-14 small:mb-6 small:-mt-2 pl-2 mx-auto small:w-9/12 small:h-3/4" />
      <Switch>
        <Route exact path="/" component={LandingPage}></Route>
        <Route path="/profile" component={ProfilePage}></Route>
      </Switch>
    </Router>
  );
};
