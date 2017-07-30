import React from 'react';
import propTypes from 'prop-types';
import { Navbar, NavItem } from 'react-materialize';
import { Link } from 'react-router-dom';

class Nav extends React.Component {

  componentDidMount() {
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
      const scrollPos = document.body.scrollTop;
      if (scrollPos > this.props.scrollPos) {
        nav.classList = 'center grey lighten-5 blue-grey-text text-darken-4';
      } else {
        nav.classList = 'center transparent';
      }
    });
  }

  render() {
    return (
      <Navbar className={`center ${this.props.className}`} brand="The IT Society" right fixed>
        <NavItem><Link to="/events">Events</Link></NavItem>
        <NavItem><Link to="/about">About</Link></NavItem>
      </Navbar>
    );
  }
}


Nav.propTypes = {
  color: propTypes.string.isRequired,
};

export default Nav;
