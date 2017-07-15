import React from 'react';
import { NavBar, NavItem } from 'react-materialize';

const Nav = () => {
  return (
    <nav className="purple darken-4">
      <div className="nav-wrapper">
        <a className="brand-logo">The IT Society</a>
        <NavItems />
        <NavItems mobile />
      </div>
    </nav>
  );
};

const Layout = (props) => {
  return (
    <div>
      <Nav />
      <div className="container">
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
