import React, { Component } from 'react';

export default class Galery extends Component {
  render() {
    return (
      <div className="galery container">
        <h1>Galery</h1>
        <div className="galery-presentation">
          <div className="presentation-1">
            <figure className="image-one">
              <img
                src="https://picsum.photos/500/500/?random"
                alt="presentation"
              />
            </figure>
            <figure className="image-double">
              <img
                src="https://picsum.photos/500/500/?random"
                alt="presentation"
              />
              <img
                src="https://picsum.photos/500/500/?random"
                alt="presentation"
              />
            </figure>
          </div>
          <figure className="image-wide">
            <img
              src="https://picsum.photos/500/500/?random"
              alt="presentation"
            />
          </figure>
        </div>
      </div>
    );
  }
}
