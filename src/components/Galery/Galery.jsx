import React from 'react';
import { Context } from '../../store/store.jsx';

export const Galery = () => {
  return (
    <div className="galery container">
      <h1>Galery</h1>
      <Context.Consumer>
        {({ galery }) => (
          <div className="galery-presentation">
            <div className="presentation-1">
              <figure className="image-one">
                <img src={galery[0]} alt="presentation" />
              </figure>
              <figure className="image-double">
                <img src={galery[1]} alt="presentation" />
                <img src={galery[2]} alt="presentation" />
              </figure>
            </div>
            <figure className="image-wide">
              <img src={galery[3]} alt="presentation" />
            </figure>
          </div>
        )}
      </Context.Consumer>
    </div>
  );
};
