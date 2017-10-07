import React from 'react';
import moment from 'moment';

import { intToMoney } from '../../util';

/**
 * Statelett evnt element
 * @param {Object} props Object properties
 */
const Evnt = props => {
  const formatDate = date => (
    <div className="event-left-date">
      <span className="event-date-item">
        {moment(date).format('MMMM Do YYYY')}
      </span>
      <span className="event-date-item">{moment(date).format('dddd')}</span>
      <span className="event-date-item">{moment(date).format('h:mm a')}</span>
    </div>
  );

  return (
    <div className="event">
      <div className="event-left">
        <header className="truncate">{props.eventName}</header>
        <div className="event-left-date-cost">
          {formatDate(props.eventLength)}
          <span className="event-left-cost">{intToMoney(props.price)}</span>
        </div>
      </div>
      <div className="event-description">
        {props.description.map((desc, idx) => <span key={idx}>{desc}</span>)}
      </div>
    </div>
  );
};

export default Evnt;
