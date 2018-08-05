import React from 'react';

export default class Nav extends React.Component {
  render() {
    return (
      <div className="nav" id="nav">
        <a href="home">Home</a>
        <a href="galery">Galery</a>
        <a href="contacts">Contacts</a>
      </div>
    );
  }
}
