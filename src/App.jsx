import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Contacts from './components/Contacts/Contacts.jsx';
import Galery from './components/Galery/Galery.jsx';
import { Cover } from './components/Cover/Cover.jsx';
import { Header } from './components/Header/Header';

import './styles/App.css';

export const Context = React.createContext();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      windowLocation: {
        home: '.nav-home',
        galery: '.nav-galery',
        contacts: '.nav-contacts'
      }
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this._windowResized);
    this._windowLocation();
  }

  _windowLocation = () => {
    let windowLocation = sessionStorage.getItem('windowLocation');

    if (
      windowLocation === null ||
      windowLocation === 'http://localhost:3000/'
    ) {
      const homeLocation = document.querySelector(
        this.state.windowLocation.home
      );
      homeLocation.classList.add('active');
    } else {
      windowLocation = windowLocation.replace(/^[^]+\//g, '');

      Object.keys(this.state.windowLocation).map(name => {
        if (name === windowLocation) {
          windowLocation = document.querySelector(
            `${this.state.windowLocation[name]}`
          );
          windowLocation.classList.add('active');
        }
      });
    }
  };

  _windowResized = () => {
    if (window.innerWidth > 730 && this.state.show) {
      this.setState({ show: true });
      this._showMenu();
    }
  };

  _linkClicked = e => {
    sessionStorage.setItem('windowLocation', e.target.href);
    e.preventDefault();
    e.target.classList.add('active');

    const navLink = document.querySelectorAll('.nav a');
    navLink.forEach(function(item) {
      if (item !== e.target) item.classList.remove('active');
    });
  };

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
      <Router>
        <Context.Provider
          value={{
            show: this.state.show,
            onLinkClicked: this._linkClicked,
            onShowMenu: this._showMenu
          }}
        >
          <Header />
          <Switch>
            <Route path="/galery" component={Galery} />
            <Route path="/contacts" component={Contacts} />
            <Route path="/" component={Cover} />
          </Switch>
        </Context.Provider>
      </Router>
    );
  }
}
