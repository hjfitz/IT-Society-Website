import React from 'react';

import { Card, Loading } from '../partial';

class Home extends React.Component {
  static async populatePage() {
    const rawPosts = await fetch('/api/facebook/posts');
    const facebookPosts = await rawPosts.json();
    const rawEvents = await fetch('/api/contentful/events');
    const events = await rawEvents.json();

    console.log(facebookPosts);
    console.log(events);
    // TODO: render these in react for the homepage
  }

  constructor(props) {
    super(props);
    this.state = { children: <Loading /> };
  }

  componentWillMount() {
    Home.populatePage();
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
