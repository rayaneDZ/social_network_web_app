import React from 'react';
import LogSign from './components/logsign/LogSign.jsx';
import Home from './components/home/Home.jsx';
import Profile from './components/profile/Profile.jsx';
import NotFound from './components/NotFound.jsx';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
      <Router>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route exact path="/" component={LogSign} />
          <Route component={NotFound}/>
        </Switch>
      </Router>
  );
}

export default App;
