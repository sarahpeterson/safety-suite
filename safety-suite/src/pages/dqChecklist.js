import React, { Component } from 'react';
import '../App.css';
import DQChecklists from '../data/DQChecklist.json';
import DQChecklistStatuses from '../data/DQChecklistStatuses.json';
import FormItem from '../components/formItem';
import Header from '../components/header';

class DQChecklist extends Component {
  renderChecklist() {
    return DQChecklists.map((item, i) => {
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
          <h2>Employee Form Status</h2>
            {this.renderStatuses()}
          </div>
        </div>
      </div>
    );
  }
}

export default DQChecklist;