import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

const copyleftStyle = {
  display: 'inline-block',
  transform: 'rotate(180deg)',
};

const Footer = () => {
  const copyleft = (
    <p>
      <span style={copyleftStyle}>&copy; </span>
      {' 2017 - The IT Society'}
    </p>
  );

  const links = (
    <ul>
      <li>
        <Link className="grey-text text-lighten-3" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="grey-text text-lighten-3" to="/events">
          Events
        </Link>
      </li>
      <li>
        <Link className="grey-text text-lighten-3" to="/about">
          About
        </Link>
      </li>
    </ul>
  );

  return (
    <footer className="page-footer blue-grey darken-3">
      <div className="container">
        <div className="row">
          <div className="white-text col l6 s12">
            <h5>The IT Soceity</h5>
            <p>
              Proudly sponsored by{' '}
              <a href="https://www.spectrumit.co.uk/">Spectrum IT</a>
            </p>
            <p>social icons go here</p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Links</h5>
            {links}
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">{copyleft}</div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  color: propTypes.string.isRequired,
};

export default Footer;
