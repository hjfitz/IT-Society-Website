import React from 'react';

import * as Partial from '../components/partial';
import { updateNav } from '../util.js';

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  /**
   * When we change page, we want to ensure that the nav is the right color
   * We can check for a change of url here - and if there is, hook a function
   * @param {Object} nextProps Next props assigned to this component
   */
  componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname != this.props.location.pathname) {
      updateNav();
    }
  }

  render() {
    return (
      <div className="main-container">
        <Partial.Nav className="transparent" scrollPos={250} />
        <div className="container">
          {this.props.children}
        </div>
        <Partial.Footer color="blue-grey darken-3" />
      </div>
    );
  }
};

export default Layout;
