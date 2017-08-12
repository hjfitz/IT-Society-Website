import React from 'react';
import { intToMoney } from '../../util';

const Evnt = props => {
  return (
    <div className="event">
      <div className="event-left">
        <header>{props.eventName}</header>
        <div className="event-left-time">{props.eventLength}</div>
        <div className="event-left-date-cost">
          <span className="event-left-date">{props.eventDate}</span>
          <span className="event-left-cost">{intToMoney(props.price)}</span>
        </div>
      </div>
      <div className="event-description">
        {props.description.map(desc => {
          return <p>{desc}</p>;
        })}
      </div>
    </div>
  );
};

export default Evnt;
