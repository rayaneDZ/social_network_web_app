import React from 'react';
import LogSign from './components/logsign/LogSign.jsx';
import Home from './components/home/Home.jsx';
import Profile from './components/profile/Profile.jsx';
import NotFound from './components/NotFound.jsx';
import InDevelopment from './components/InDevelopment.jsx';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={LogSign} />
          <Route exact path="/home" component={Home} />
          <Route path="/profile/:username" component={Profile} />
          <Route path="/messages" component={InDevelopment}/>
          <Route component={NotFound}/>
        </Switch>
      </Router>
  );
}

export default App;
