import React, { Component } from 'react';
import '../App.css';
import Header from '../components/header';

class Home extends Component {
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
