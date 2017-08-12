import React from 'react';
import moment from 'moment';

import { Partial } from '../components';
import { markdownToReact } from '../util';


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
      console.log(Partial);
      return events.map(ev => {
        return (
          <Partial.Evnt
            key={ev.sys.id}
            eventName={ev.fields.eventName}
            eventLength={ev.fields.startTime}
            eventDate={moment(ev.fields.startTime).format('D')}
            price={ev.fields.eventPrice}
            type={ev.fields.eventType}
            description={markdownToReact(ev.fields.additionalDetails)}

          />

        );
      });
    }
    return (
      <p>Loading events...</p>
    );
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
