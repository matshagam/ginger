import React from 'react';

import Header from './Header/Header.jsx';
import { Main } from './Main/Main.jsx';
import { Background } from './Background.jsx';

export default class Cover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  _showMenu = () => {
    const navLink = document.querySelectorAll('.nav a');
    const navMenu = document.querySelector('.nav');

    if (!this.state.show) {
      navMenu.classList.add('show');
      navLink.forEach(function(item) {
        item.classList.add('show');
      });
      this.setState({
        show: true
      });
    } else {
      navMenu.classList.remove('show');
      navLink.forEach(function(item) {
        item.classList.remove('show');
      });
      this.setState({
        show: false
      });
    }
  };

  render() {
    return (
      <div className="cover">
        <Background />
        <Header />
        <Main onClick={this._showMenu} />
      </div>
    );
  }
}
