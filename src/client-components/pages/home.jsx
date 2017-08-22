import React from 'react';
import { Card } from '../components/partial';
import { intToMoney } from '../util';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
  }

  componentWillMount() {
    fetch('/api/contentful/events')
    .then(data => {
      return data.json();
    }).then(data => {
      this.setState({
        events: data,
      });
    });
  }

  generateEvents() {
    const events = this.state.events;
    if (events.length > 0) {
      return events.map(ev => {
        return (
          <div key={ev.sys.id}>
            <h4>{ev.fields.eventName}</h4>
            <p className="flow-text">{`${ev.fields.eventType} :: ${intToMoney(ev.fields.eventPrice)}`}</p>
            <div className="divider" />
          </div>
        );
      });
    }
    return (<h3>Loading...</h3>);
  }

  render() {
    return (
      <section>
        <Card className="opening-content" width="12">
          <p>facebook, twitter and events to appear here</p>
        </Card>
      </section>
    );
  }

}

export default Home;
