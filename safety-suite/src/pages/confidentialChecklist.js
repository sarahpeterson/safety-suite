import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import ConfidentialChecklists from '../data/ConfidentialChecklist.json';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import FormItem from '../components/formItem';
import Header from '../components/header';

class ConfidentialChecklist extends Component {
  renderChecklist() {
    return ConfidentialChecklists.map((item, i) => {
      return(
        <FormItem
          fileType={item.fields.fileType}
        />
      )
    })
  }
  render() {
    return (
      <div className="site">
        <Header />
        <div className="site-main">
          {this.renderChecklist()}
        </div>
      </div>
    );
  }
}

export default ConfidentialChecklist;
