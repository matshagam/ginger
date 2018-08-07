import React from 'react';

import { Nav } from './components/Nav.jsx';
import { Social } from './components/Social.jsx';
import { NavButton } from './components/NavButton.jsx';

export default class Header extends React.Component {
  render() {
    return (
      <header className="menu container">
        <NavButton />
        <Nav />
        <Social />
      </header>
    );
  }
}
