import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Contacts from './components/Contacts/Contacts.jsx';
import Galery from './components/Galery/Galery.jsx';
import Cover from './components/Cover/Cover.jsx';
import Header from './components/Header/Header';

import './styles/App.css';

export const Context = React.createContext();

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
      <Router>
        <Context.Provider value={this._showMenu}>
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
