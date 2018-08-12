import React, {
  Component,
  ListView
} from 'react';
import logo from './logo.svg';
import './App.css';
import HRChecklist from './reducers/HRChecklist.json';

class App extends Component {
  renderChecklist() {
    return HRChecklist.map((item, i) => {
      return(
        <p>
          {item.fields.fileType}
        </p>
      )
    })
  }
  render() {
    console.log(HRChecklist)
    return (
      <div className="site">
        <header>
          <h1>Welcome to Safety Suite</h1>
        </header>
        <p>
          Here you will find a list ...
        </p>
        <div>
          {this.renderChecklist()}
        </div>
      </div>
    );
  }
}

export default App;
