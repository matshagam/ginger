import React from 'react';
import '../styles/App.css';

import { fetchData } from '../helpers/functions';
import { LINK_CLASS } from '../helpers/configs';

export const Context = React.createContext();

export default class UserStore extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      dataBlog: [],
      dataGalery: []
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this._windowResized);
    this._windowLocation();
  }

  _windowLocation = () => {
    const homeLocation = document.querySelector(LINK_CLASS.home);
    let windowLocation = sessionStorage.getItem('windowLocation');
    windowLocation = windowLocation.replace(/^[^]+\//g, '');

    if (windowLocation === null || windowLocation === '') {
      homeLocation.classList.add('active');
    } else {
      windowLocation === 'blog' && this.state.dataBlog.length === 0
        ? this._getDataBlog()
        : null;

      windowLocation === 'galery' && this.state.dataGalery.length === 0
        ? this._getDataGalery()
        : null;

      for (let name in LINK_CLASS) {
        if (name === windowLocation) {
          windowLocation = document.querySelector(LINK_CLASS[name]);
          windowLocation.classList.add('active');
        }
      }
    }
  };

  _windowResized = () => {
    if (window.innerWidth > 730 && this.state.show) {
      this.setState({ show: true });
      this._showMenu();
    }
  };

  _linkClicked = e => {
    const navLinks = document.querySelectorAll('.nav a');
    e.preventDefault();

    e.target.className.includes('nav-blog') && this.state.dataBlog.length === 0
      ? this._getDataBlog()
      : null;

    e.target.className.includes('nav-galery') &&
    this.state.dataGalery.length === 0
      ? this._getDataGalery()
      : null;

    this.state.show ? this._showMenu() : null;

    sessionStorage.setItem('windowLocation', e.target.href);

    !e.target.className.indexOf('nav')
      ? e.target.classList.add('active')
      : null;

    navLinks.forEach(function(link) {
      link !== e.target && !e.target.className.indexOf('nav')
        ? link.classList.remove('active')
        : null;
    });
  };

  _showMenu = () => {
    const navLinks = document.querySelectorAll('.nav a');
    const navMenu = document.querySelector('.nav');

    if (!this.state.show) {
      navMenu.classList.add('show');
      navLinks.forEach(function(link) {
        link.classList.add('show');
      });
      this.setState({
        show: true
      });
    } else {
      navMenu.classList.remove('show');
      navLinks.forEach(function(link) {
        link.classList.remove('show');
      });
      this.setState({
        show: false
      });
    }
  };

  _getDataBlog = () => {
    fetchData()
      .then(data => {
        this.setState({
          dataBlog: data.posts
        });
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  _getDataGalery = () => {
    fetchData()
      .then(data => {
        this.setState({
          dataGalery: data.images
        });
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  render() {
    console.log(this.state.error ? this.state.error : 'данные получены');
    return (
      <Context.Provider
        value={{
          images: this.state.dataGalery,
          post: this.state.dataBlog,
          show: this.state.show,
          onLinkClicked: this._linkClicked,
          onShowMenu: this._showMenu
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}
