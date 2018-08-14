import React, { Component } from 'react';
import './App.css';
import HRChecklist from './reducers/HRChecklist.json';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import Home from './pages/home';
import HRForms from './pages/hrForms';
import ConfidentialChecklist from './pages/confidentialChecklist';
import TrafficTickets from './pages/trafficTickets';
import BackgroundChecks from './pages/backgroundChecks';

class App extends Component {
  render() {
    return (
      <Router>
      	<Switch>
      		<Route exact path="/" component={Home} />
          <Route exact path="/hrforms" component={HRForms} />
          <Route exact path="/confidentialchecklist" component={ConfidentialChecklist} />
          <Route exact path="/traffictickets" component={TrafficTickets} />
          <Route exact path="/backgroundchecks" component={BackgroundChecks} />
      	</Switch>
      </Router>
    );
  }
}

export default App;
