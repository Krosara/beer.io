import React from 'react';
import Main from './components/Main/Main';
import Register from './pages/RegisterPage';
import LandingPage from './pages/LandingPage';
import Login from './pages/LoginPage';
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
    <div className="font-work subpixel-antialiased">
      <Router>
        {/* <Main players={state} /> */}
        <Navbar />
        <Switch>
          <div>
            <Logo className=" mb-14 pl-2 mx-auto small:w-9/12 small:h-3/4" />
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
          </div>
        </Switch>
      </Router>
    </div>
  );
};

export default Application;
