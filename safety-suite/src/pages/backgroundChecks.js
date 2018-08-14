import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import BackgroundCheck from '../data/BackgroundChecks.json';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import FormItem from '../components/formItem';
import Header from '../components/header';

class BackgroundChecks extends Component {
  renderChecklist() {
    return BackgroundCheck.values.map((item, i) => {
      return(
        <FormItem
          fileType={item.name}
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

export default BackgroundChecks;
