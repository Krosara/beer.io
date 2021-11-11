import React from 'react';
import Main from './components/Main/Main';
import Register from './pages/RegisterPage';
import LandingPage from './pages/LandingPage';
import Login from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import GamePage from './pages/GamePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

import { ReactComponent as Logo } from './assets/logo+text.svg';

const Application = () => {
  // const [state, setState] = React.useState(null);

  // React.useEffect(() => {
  //   playerAPI.getPlayers().then((players) => setState(players));
  // }, []);
  // console.log(state);

  return (
    <Router>
      <Navbar />
      <Logo className=" mb-14 small:mb-6 small:-mt-2 pl-2 mx-auto small:w-9/12 small:h-3/4" />
      <Switch>
        <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/register" component={Register}></Route>
        <Route path="/profile" component={ProfilePage}></Route>
        <Route exact path="/play" component={GamePage} />
      </Switch>
    </Router>
  );
};

export default Application;
