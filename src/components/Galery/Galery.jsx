import React, { Component } from 'react';

export default class Galery extends Component {
  render() {
    return (
      <div className="galery container">
        <h1>Galery</h1>
        <div className="galery-presentation">
          <figure className="image-cube-big">
            <img
              src={require('../../img/9RdgHHUHwPg.jpg')}
              alt="presentation"
            />
          </figure>
          <figure className="image-cube-litle">
            <img
              src={require('../../img/DPWTHWtcgSk.jpg')}
              alt="presentation"
            />
            <img
              src={require('../../img/Jbp7UctNgN0.jpg')}
              alt="presentation"
            />
          </figure>
          <figure className="image-wide">
            <img
              src={require('../../img/SkVf61A_nrk.jpg')}
              alt="presentation"
            />
          </figure>
        </div>
      </div>
    );
  }
}
