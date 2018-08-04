import React from 'react';
import Header from './Header/Header.jsx';
import Main from './Main/Main.jsx';
import Background from './Background.jsx';

export default class Cover extends React.Component {
  render() {
    return (
      <div className="cover">
        <Background />
        <Header />
        <Main />
      </div>
    );
  }
}
