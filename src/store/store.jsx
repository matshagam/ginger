import React from 'react';
import '../styles/App.css';

import { fetchData } from '../helpers/functions';

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
    const linkClass = {
      home: '.nav-home',
      galery: '.nav-galery',
      blog: '.nav-blog'
    };

    const homeLocation = document.querySelector(linkClass.home);
    let windowLocation = sessionStorage.getItem('windowLocation');

    if (
      windowLocation === null ||
      windowLocation === 'http://localhost:3000/'
    ) {
      homeLocation.classList.add('active');
    } else {
      windowLocation = windowLocation.replace(/^[^]+\//g, '');

      if (windowLocation === 'blog' && this.state.dataBlog.length === 0) {
        this._getDataBlog();
      }

      if (windowLocation === 'galery' && this.state.dataGalery.length === 0) {
        this._getDataGalery();
      }

      for (let name in linkClass) {
        if (name === windowLocation) {
          windowLocation = document.querySelector(linkClass[name]);
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

    if (
      e.target.className.includes('nav-blog') &&
      this.state.dataBlog.length === 0
    ) {
      this._getDataBlog();
    }

    if (
      e.target.className.includes('nav-galery') &&
      this.state.dataGalery.length === 0
    ) {
      this._getDataGalery();
    }

    if (this.state.show) {
      this._showMenu();
    }

    sessionStorage.setItem('windowLocation', e.target.href);

    if (!e.target.className.indexOf('nav')) {
      e.target.classList.add('active');
    }

    navLinks.forEach(function(link) {
      if (link !== e.target && !e.target.className.indexOf('nav')) {
        link.classList.remove('active');
      }
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
