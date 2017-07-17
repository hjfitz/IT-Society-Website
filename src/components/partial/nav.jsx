import React from 'react';
import propTypes from 'prop-types';
import { Navbar, NavItem } from 'react-materialize';

const Nav = (props) => {
  return (
    <Navbar className={props.color} brand="The IT Society" right>
      <NavItem href="get-started.html">Events</NavItem>
      <NavItem href="components.html">About</NavItem>
    </Navbar>
  );
};

Nav.propTypes = {
  color: propTypes.string.isRequired,
};

export default Nav;
