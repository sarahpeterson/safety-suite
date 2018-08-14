import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import HRChecklist from '../reducers/HRChecklist.json';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import FormItem from '../components/formItem';
import Header from '../components/header';
import Footer from '../components/footer';
import { hrChecklist } from '../actions/hrActions';

class Home extends Component {
  render() {
    return (
      <div className="site">
        <Header />
          <div className="site-main">
            <p>Keep your company and your employees safe with Safety Suite.</p>
            <a href="/hrforms">Important documents for your employees to complete</a>
            <a href="/backgroundchecks">Understand who you are hiring with the right background checks</a>
            <a href="/traffictickets">Understand current employees performance</a>
        </div>
      </div>
    );
  }
}
export default Home;
