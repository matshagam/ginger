import React from 'react';

import { MainTitle } from './components/MainTitle.jsx';
import { Background } from './components/Background.jsx';

export const Cover = () => {
  return (
    <div className="cover">
      <Background />
      <MainTitle />
    </div>
  );
};
