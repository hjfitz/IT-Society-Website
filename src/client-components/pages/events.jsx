import React from 'react';
import moment from 'moment';

import { Partial } from '../components';
import { markdownToReact } from '../util';

const sortEvents = (ev1, ev2) => {
  if (ev1.fields.startTime > ev2.fields.startTime) {
    return 1;
  }
  if (ev1.fields.startTime < ev2.fields.startTime) {
    return -1;
  }
  return 0;
};

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: 'unpopulated',
    };
  }

  async componentWillMount() {
    const rawEvents = await fetch('/api/contentful/events');
    const events = await rawEvents.json();
    this.setState({ events });
  }

  generateEvents() {
    if (this.state.events !== 'unpopulated') {
      const events = this.state.events;
      return events.map(ev => (
        <Partial.Evnt
          key={ev.sys.id}
          eventName={ev.fields.eventName}
          eventLength={ev.fields.startTime}
          eventDate={moment(ev.fields.startTime).format('D')}
          price={ev.fields.eventPrice}
          type={ev.fields.eventType}
          description={markdownToReact(ev.fields.additionalDetails)}
        />
      ));
    }
    return <p>Loading events...</p>;
  }

  render() {
    return (
      <section>
        <Partial.Card className="opening-content" width="12">
          {this.generateEvents()}
        </Partial.Card>
      </section>
    );
  }
}

export default Events;
