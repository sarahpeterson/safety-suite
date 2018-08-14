import React, { Component } from 'react';
import '../App.css';
import Menu from './menu';

class Header extends Component {
  render() {
    return (
      <header className="site-header">
        <h1>Explore Safety Suite</h1>
        <Menu />
      </header>
    );
  }
}

export default Header;
