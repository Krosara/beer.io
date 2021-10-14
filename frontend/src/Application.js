import React from 'react';
import Main from './components/Main/Main';
import Register from './pages/RegisterPage';
import Landing from './pages/LandingPage';
import Login from './pages/LoginPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

const Application = () => {
  // const [state, setState] = React.useState(null);

  // React.useEffect(() => {
  //   playerAPI.getPlayers().then((players) => setState(players));
  // }, []);
  // console.log(state);

  return (
    <Router>
      <div>
        {/* <Main players={state} /> */}
        <Navbar />
        <Switch>
          <Route exact path="/">
            {/* <Landing /> */}
          </Route>
          <Route path="/login">{/* <Login /> */}</Route>
          <Route path="/register">{/* <Register /> */}</Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Application;
