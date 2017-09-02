import React from 'react';
import { CircularProgress } from 'material-ui/Progress';

import { Card } from '../components/partial';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    children: (<div style={{ width: '50px', margin: '1% auto'}}><CircularProgress color="accent" size={50} /></div>),
    };
  }

  componentWillMount() {
    this.populatePage();
  }

  componentDidMount() {
    const googleSearch = document.getElementById('googleSearch');
    googleSearch.addEventListener('keypress', ev => {
      if (ev.keyCode === 13) {
        const query = ev.target.value;
        const encQuery = encodeURIComponent(query);
        window.location = `https://www.google.co.uk/search?q=${encQuery}`;
      }
    });
  }



  async populatePage() {
    const rawFacebookPosts = await fetch('/api/facebook/posts');
    const facebookPosts = await rawFacebookPosts.json();
    const rawEvents = await fetch('/api/contentful/events');
    const events = await rawEvents.json();

    console.log(facebookPosts);
    console.log(events);
    // TODO: render these in react for the homepage
  }

  render() {
    return (
      <section>
        <Card className="opening-content" width="12" >
          {this.state.children}
          <input id="googleSearch" type="text" placeholder="Search Google" />
        </Card>
      </section>
    );
  }

}

export default Home;
