import React from 'react';
import * as Partial from '../components/partial';

const color = 'purple darken-4';

const Layout = (props) => {
  return (
    <div>
      <Partial.Nav color={color} />
      <div className="container">
        {props.children}
      </div>
      <Partial.Footer color={color} />
    </div>
  );
};

export default Layout;
