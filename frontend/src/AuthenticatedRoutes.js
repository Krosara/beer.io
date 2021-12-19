import { LandingPage, ProfilePage } from './pages';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { ReactComponent as Logo } from './assets/logo+text.svg';

export const AuthenticatedRoutes = () => {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route exact path="/" component={LandingPage}></Route>
        <Route path="/profile" component={ProfilePage}></Route>
      </Switch>
    </Router>
  );
};
