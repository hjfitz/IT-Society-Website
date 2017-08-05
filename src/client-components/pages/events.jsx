import React from 'react';

import { Partial } from '../components';


class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: 'unpopulated',
    };
  }

  componentWillMount() {
    fetch('/api/fields')
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
            <p className="eventPrice">{ev.fields.eventPrice}</p>
            <p className="eventType">{ev.fields.eventType}</p>
            <p className="eventStartTime">{ev.fields.startTime}</p>
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
