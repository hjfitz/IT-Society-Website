import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { updateNav } from '../util';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageContent: '',
    };
  }


  componentDidMount() {
    window.addEventListener('scroll', updateNav);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', updateNav);
  }


  render() {
    const links = [
      <div key="links">
        <li key="about"><Link className="nav-link" to="/about">About</Link></li>
        <li key="events"><Link className="nav-link" to="/events">Events</Link></li>
        <li key="moodle"><a className="nav-link" href="https://google.co.uk">Google</a></li>
        <li key="google"><a className="nav-link" href="https://moodle.port.ac.uk">Moodle</a></li>

      </div>,
    ];
    return (
      <div className="navbar-fixed">
        <nav className="transparent">
          <div className="nav-wrapper">
            <Link
              to="/"
              className={`center brand-logo nav-text ${this.props.className}`}
            >The IT Society</Link>
            <a
              href="#"
              data-activates="mobile-demo"
              className="button-collapse"
            >
              <i className="material-icons">menu</i>
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              {links}
            </ul>
            <ul className="side-nav" id="mobile-demo">
              {links}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
