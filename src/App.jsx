import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './styles/App.css';

import Cover from './components/Cover/Cover.jsx';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Cover />
      </BrowserRouter>
    );
  }
}

export default App;
