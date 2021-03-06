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
      this.state.dataBlog.length === 0 || this.state.dataGalery.length === 0
        ? (windowLocation === 'blog' ? this._getDataBlog() : null,
          windowLocation === 'galery' ? this._getDataGalery() : null)
        : null;

      for (let name in LINK_CLASS) {
        name === windowLocation
          ? ((windowLocation = document.querySelector(LINK_CLASS[name])),
            windowLocation.classList.add('active'))
          : null;
      }
    }
  };

  _windowResized = () => {
    window.innerWidth > 730 && this.state.show
      ? (this.setState({ show: true }), this._showMenu())
      : null;
  };

  _linkClicked = e => {
    e.preventDefault();

    const navLinks = document.querySelectorAll('.nav a');

    !e.target.className.indexOf('nav')
      ? (e.target.classList.add('active'),
        navLinks.forEach(function(link) {
          link !== e.target ? link.classList.remove('active') : null;
        }))
      : null;

    this.state.dataBlog.length === 0 || this.state.dataGalery.length === 0
      ? (e.target.className.includes('nav-blog') ? this._getDataBlog() : null,
        e.target.className.includes('nav-galery')
          ? this._getDataGalery()
          : null)
      : null;

    this.state.show ? this._showMenu() : null;

    sessionStorage.setItem('windowLocation', e.target.href);
  };

  _showMenu = () => {
    const navLinks = document.querySelectorAll('.nav a');
    const navMenu = document.querySelector('.nav');

    !this.state.show
      ? (navMenu.classList.add('show'),
        navLinks.forEach(function(link) {
          link.classList.add('show');
        }),
        this.setState({
          show: true
        }))
      : (navMenu.classList.remove('show'),
        navLinks.forEach(function(link) {
          link.classList.remove('show');
        }),
        this.setState({
          show: false
        }));
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
