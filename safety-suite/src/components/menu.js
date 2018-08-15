import React, { Component } from 'react';
import '../App.css';

class Menu extends Component {
  render() {
    return (
      <div className="site-menu">
        <ul className="site-menu-list">
          <li className="site-menu-item">
            <a href="/" className="site-menu-link">HOME</a>
          </li>
          <li className="site-menu-item">
            <a href="/hrforms" className="site-menu-link">HR FORMS</a>
          </li>
          <li className="site-menu-item">
            <a href="/confidentialchecklist" className="site-menu-link">CONFIDENTIAL CHECKLIST</a>
          </li>
          <li className="site-menu-item">
            <a href="/employees" className="site-menu-link">EMPLOYEE</a>
          </li>
          <li className="site-menu-item">
            <a href="/dqchecklist" className="site-menu-link">DQ CHECKLIST</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Menu;
