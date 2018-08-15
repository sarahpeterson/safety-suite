import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Home from './pages/home';
import HRForms from './pages/hrForms';
import ConfidentialChecklist from './pages/confidentialChecklist';
import Employees from './pages/employees';
import DQChecklist from './pages/dqChecklist';

class App extends Component {
  render() {
    return (
      <Router>
      	<Switch>
      		<Route exact path="/" component={Home} />
          <Route exact path="/hrforms" component={HRForms} />
          <Route exact path="/confidentialchecklist" component={ConfidentialChecklist} />
          <Route exact path="/employees" component={Employees} />
          <Route exact path="/dqchecklist" component={DQChecklist} />
      	</Switch>
      </Router>
    );
  }
}

export default App;
