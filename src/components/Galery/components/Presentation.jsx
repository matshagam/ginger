import React from 'react';
import { Context } from '../../../store/store.jsx';

export const Presentation = () => {
  return (
    <Context.Consumer>
      {({ images }) => (
        <div className="galery-presentation">
          <div className="presentation-1">
            <figure className="image-one">
              <img src={images[0]} alt="presentation" />
            </figure>
            <figure className="image-double">
              <img src={images[1]} alt="presentation" />
              <img src={images[2]} alt="presentation" />
            </figure>
          </div>
          <figure className="image-wide">
            <img src={images[3]} alt="presentation" />
          </figure>
        </div>
      )}
    </Context.Consumer>
  );
};
