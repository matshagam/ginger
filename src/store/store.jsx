import React from 'react';
import '../styles/App.css';

export const RoomContext = React.createContext();

export default class UserStore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
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
      contacts: '.nav-contacts'
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

    if (this.state.show) {
      this._showMenu();
    }

    sessionStorage.setItem('windowLocation', e.target.href);

    if (e.target.className !== 'nav show' && e.target.className !== 'nav') {
      e.target.classList.add('active');
    }

    navLinks.forEach(function(link) {
      if (
        link !== e.target &&
        (e.target.className !== 'nav show' && e.target.className !== 'nav')
      ) {
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

  render() {
    return (
      <RoomContext.Provider
        value={{
          show: this.state.show,
          onLinkClicked: this._linkClicked,
          onShowMenu: this._showMenu
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}
