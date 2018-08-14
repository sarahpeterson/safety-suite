import React, { Component } from 'react';
import '../App.css';
import Menu from './menu';

class Footer extends Component {
  render() {
    return (
      <footer className="site-footer">
        <Menu />
      </footer>
    );
  }
}

export default Footer;
