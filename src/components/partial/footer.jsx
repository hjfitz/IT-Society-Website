import React from 'react';
import propTypes from 'prop-types';
import { Footer as MaterialFooter } from 'react-materialize';

const copyleftStyle = {
  display: 'inline-block',
  transform: 'rotate(180deg)',
};

const Footer = (props) => {
  const footerClass = `${props.color} example`;

  const copyleft = (
    <div>
      <span style={copyleftStyle}>&copy; </span>
      {' 2017 - The IT Society'}
    </div>
  );

  const links = (
    <ul>
      <li><a className="grey-text text-lighten-3" href="#!">Events</a></li>
      <li><a className="grey-text text-lighten-3" href="#!">About</a></li>
    </ul>
  );

  return (
    <MaterialFooter
      className={footerClass}
      copyrights={copyleft}
      links={links}
    >
      <h5 className="white-text">The IT Society</h5>
      <p className="grey-text text-lighten-4">
        social icons go here
      </p>
    </MaterialFooter>
  );
};

Footer.propTypes = {
  color: propTypes.string.isRequired,
};

export default Footer;
