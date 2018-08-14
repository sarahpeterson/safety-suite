import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import HRChecklist from '../data/HRChecklist.json';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import FormItem from '../components/formItem';
import Header from '../components/header';

class Home extends Component {
  renderChecklist() {
    return HRChecklist.map((item, i) => {
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
          
        </div>
      </div>
    );
  }
}

export default Home;
