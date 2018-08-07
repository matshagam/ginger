import React from 'react';

import { MainTitle } from './components/MainTitle.jsx';
import { Background } from './components/Background.jsx';

export default class Cover extends React.Component {
  render() {
    return (
      <div className="cover">
        <Background />
        <MainTitle />
      </div>
    );
  }
}
