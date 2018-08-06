import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <div className="nav" id="nav">
      <Link to="home">Home</Link>
      <Link to="galery">Galery</Link>
      <Link to="contacts">Contacts</Link>
    </div>
  );
};
