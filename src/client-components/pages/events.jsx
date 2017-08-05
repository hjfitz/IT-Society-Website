import React from 'react';
import moment from 'moment';

import { Partial } from '../components';
import { intToMoney } from '../util';


class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: 'unpopulated',
    };
  }

  componentWillMount() {
    fetch('/api/contentful/fields')
    .then(data => {
      return data.json();
    }).then(data => {
      this.setState({
        events: data,
      });
    });
  }

  generateEvents() {
    if (this.state.events !== 'unpopulated') {
      const events = this.state.events;
      return events.map(ev => {
        return (
          <Partial.Card key={ev.sys.id} header={ev.fields.eventName}>
            <p className="eventPrice">{intToMoney(ev.fields.eventPrice)}</p>
            <p className="eventType">{ev.fields.eventType}</p>
            <p className="eventStartTime">{moment(ev.fields.startTime).format('MMMM Do YYYY, hh:mm')}</p>
          </Partial.Card>
        );
      });
    }
    return (
      <Partial.Card header="Loading">
        <p>Loading events...</p>
      </Partial.Card>
    );
  }


  render() {
    return (
      <section>
        {this.generateEvents()}
      </section>
    );
  }
}

export default Events;
