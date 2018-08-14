import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import TrafficTicket from '../reducers/TrafficTicketTypes.json';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import FormItem from '../components/formItem';
import Header from '../components/header';

class TrafficTickets extends Component {
  renderChecklist() {
    return TrafficTicket.values.map((item, i) => {
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

export default TrafficTickets;
