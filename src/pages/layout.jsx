import React from 'react';
import * as Partial from '../components/partial';


const Layout = (props) => {
  return (
    <div className="main-container">
      <Partial.Nav className="transparent-nav" />
      <div className="container">
        {props.children}
      </div>
      <Partial.Footer color="blue-grey darken-3" />
    </div>
  );
};

export default Layout;
