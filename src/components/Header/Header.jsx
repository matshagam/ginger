import React from 'react';

import { Nav } from './components/Nav.jsx';
import { Social } from './components/Social.jsx';
import { NavButton } from './components/NavButton.jsx';

export const Header = () => {
  return (
    <header className="menu container">
      <NavButton />
      <Nav />
      <Social />
    </header>
  );
};
