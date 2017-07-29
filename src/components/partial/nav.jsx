import React from 'react';
import propTypes from 'prop-types';
import { Navbar, NavItem } from 'react-materialize';
import { Link } from 'react-router-dom';

const Nav = (props) => {
  return (
    <Navbar className={`center ${props.className}`} brand="The IT Society" right fixed>
      <NavItem><Link to="/events">Events</Link></NavItem>
      <NavItem><Link to="/about">About</Link></NavItem>
    </Navbar>
  );
};

Nav.propTypes = {
  color: propTypes.string.isRequired,
};

export default Nav;
