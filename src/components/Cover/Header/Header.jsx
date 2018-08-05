import React from 'react';

import Nav from './components/Nav.jsx';
import { Social } from './components/Social.jsx';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  _showMenu = () => {
    const navigationMenu = document.querySelector('.nav');
    const navLink = document.querySelectorAll('.nav a');

    if (!this.state.show) {
      navLink.forEach(function(item) {
        item.classList.add('show');
      });
      navigationMenu.classList.add('show');
      this.setState({
        show: true
      });
    } else {
      navLink.forEach(function(item) {
        item.classList.remove('show');
      });
      navigationMenu.classList.remove('show');
      this.setState({
        show: false
      });
    }
  };

  render() {
    return (
      <header className="menu container">
        <Nav />
        <Social onClick={this._showMenu} />
      </header>
    );
  }
}
