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
      target: false
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this._windowResized);
    this._windowLocation();
  }

  _windowLocation = () => {
    const linkClass = {
      home: '.nav-home',
      galery: '.nav-galery',
      contacts: '.nav-contacts'
    };
    let windowLocation = sessionStorage.getItem('windowLocation');
    const homeLocation = document.querySelector(linkClass.home);

    if (
      windowLocation === null ||
      windowLocation === 'http://localhost:3000/'
    ) {
      homeLocation.classList.add('active');
    } else {
      windowLocation = windowLocation.replace(/^[^]+\//g, '');

      for (let elem in linkClass) {
        if (elem === windowLocation) {
          windowLocation = document.querySelector(linkClass[elem]);
          windowLocation.classList.add('active');
        }
      }
    }
  };

  _windowResized = () => {
    if (window.innerWidth > 730 && this.state.show) {
      this.setState({ show: true });
      this._showMenu();
    }
  };

  _linkClicked = e => {
    e.preventDefault();

    const navLink = document.querySelectorAll('.nav a');

    sessionStorage.setItem('windowLocation', e.target.href);
    if (e.target.className !== 'nav show' && e.target.className !== 'nav') {
      e.target.classList.add('active');
    }

    navLink.forEach(function(item) {
      if (
        item !== e.target &&
        (e.target.className !== 'nav show' && e.target.className !== 'nav')
      ) {
        item.classList.remove('active');
      }
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
