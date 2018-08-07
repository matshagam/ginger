import React from 'react';

import { Main } from './Main/Main.jsx';
import { Background } from './Background.jsx';

export default class Cover extends React.Component {
  render() {
    return (
      <div className="cover">
        <Background />
        <Main />
      </div>
    );
  }
}
