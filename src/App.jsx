import React, { Component } from 'react';
import Contacts from './components/Contacts/Contacts.jsx';
import Galery from './components/Galery/Galery.jsx';
import Cover from './components/Cover/Cover.jsx';
import Header from './components/Header/Header';

import './styles/App.css';

export const CoverContext = React.createContext();

export default class App extends Component {
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
      <div>
        <Header />
        <CoverContext.Provider value={this._showMenu}>
          <Cover />
        </CoverContext.Provider>
        <Contacts />
        <Galery />
      </div>
    );
  }
}
