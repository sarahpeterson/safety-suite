import React, { Component } from 'react';
import '../App.css';
import Employee from '../data/Employee.json';
import FormItem from '../components/formItem';
import Header from '../components/header';

class Employees extends Component {
  renderChecklist() {
    return Employee.template.fields.map((item, i) => {
      return(
        <FormItem
          fileType={item.label}
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
            <h2>Important Employee Information</h2>
            {this.renderChecklist()}
          </div>
          <div className="grid-item-2">
            <h2>Important Employee Forms</h2>
            <p><a href="/hrforms" className="grid-item-link"> HR Forms </a></p>
            <p><a href="/dqchecklist" className="grid-item-link"> DQ Checklist </a></p>
            <p><a href="/confidentialchecklist" className="grid-item-link"> Confidential Checklist </a></p>
            <br/>
            <p><a href="/employees" className="grid-item-link"> Return to Employee Information </a></p>
          </div>
        </div>
      </div>
    );
  }
}

export default Employees;
