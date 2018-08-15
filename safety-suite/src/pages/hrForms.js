import React, { Component } from 'react';
import '../App.css';
import HRChecklist from '../data/HRChecklist.json';
import DQChecklistStatuses from '../data/DQChecklistStatuses.json';
import FormItem from '../components/formItem';
import Header from '../components/header';

class HRForms extends Component {
  renderChecklist() {
    return HRChecklist.map((item, i) => {
      return(
        <FormItem
          fileType={item.fields.fileType}
        />
      )
    })
  }
  renderStatuses() {
    return DQChecklistStatuses.values.map((item, i) => {
      return(
        <FormItem
          fileType={item.display}
        />
      )
    })
  }

  render() {
    return (
      <div className="site">
        <Header />
        <div className="site-main">
          <div className="grid-item-1">
            <h2>Important Employee Forms</h2>
            {this.renderChecklist()}
          </div>
          <div className="grid-item-2">
            <h2>Employee Form Statuses</h2>
            {this.renderStatuses()}
            <br/>
            <p><a href="/employees" className="grid-item-link"> Return to Employee Information </a></p>
          </div>
        </div>
      </div>
    );
  }
}

export default HRForms;
