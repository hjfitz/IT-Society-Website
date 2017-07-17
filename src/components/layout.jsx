import React from 'react';
import Nav from './partial/nav.jsx';
import Footer from './partial/footer.jsx';

const color = 'purple darken-4';

const Layout = (props) => {
  return (
    <div>
      <Nav color={color} />
      <div className="container">
        {props.children}
      </div>
      <Footer color={color} />
    </div>
  );
};

export default Layout;
