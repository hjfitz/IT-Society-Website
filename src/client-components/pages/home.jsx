import React from 'react';
import { Card } from '../components/partial';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('home');
    const xhr = new XMLHttpRequest();
    fetch('/api/fields')
    .then((data) => {
      return data.json();
    }).then((data) => {
      // object rendering goes here!
      console.log(data);
    });
  }

  render() {
    return (
      <section>
        <Card className="opening-content" width="12">
          <p>Spicy jalapeno bacon ipsum dolor amet swine alcatra ground round, boudin salami frankfurter ham hock. Kielbasa pastrami pork loin, ground round jowl pork belly chicken shankle drumstick flank picanha doner landjaeger turducken. Sirloin strip steak doner ball tip spare ribs pork loin. Bresaola short ribs cow, doner cupim sirloin shoulder pig chuck t-bone flank bacon. Cow pancetta sausage pork belly short ribs sirloin chicken shankle. Pastrami tenderloin venison, biltong pork belly rump shank turducken bacon ham capicola beef ribs meatloaf ribeye pork loin.</p>
          <p>Pork chop t-bone boudin salami. Salami short loin spare ribs t-bone meatloaf pork chop jowl shank tail. Burgdoggen fatback hamburger pork chop turducken, jerky sirloin. Boudin salami beef ribs turducken andouille shank fatback tri-tip. Drumstick boudin shoulder, ball tip cow landjaeger turkey beef chuck jerky. Meatball tongue cupim biltong, bacon bresaola fatback frankfurter jerky hamburger leberkas rump beef ribs ribeye.</p>
          <p>Spicy jalapeno bacon ipsum dolor amet swine alcatra ground round, boudin salami frankfurter ham hock. Kielbasa pastrami pork loin, ground round jowl pork belly chicken shankle drumstick flank picanha doner landjaeger turducken. Sirloin strip steak doner ball tip spare ribs pork loin. Bresaola short ribs cow, doner cupim sirloin shoulder pig chuck t-bone flank bacon. Cow pancetta sausage pork belly short ribs sirloin chicken shankle. Pastrami tenderloin venison, biltong pork belly rump shank turducken bacon ham capicola beef ribs meatloaf ribeye pork loin.</p>
          <p>Pork chop t-bone boudin salami. Salami short loin spare ribs t-bone meatloaf pork chop jowl shank tail. Burgdoggen fatback hamburger pork chop turducken, jerky sirloin. Boudin salami beef ribs turducken andouille shank fatback tri-tip. Drumstick boudin shoulder, ball tip cow landjaeger turkey beef chuck jerky. Meatball tongue cupim biltong, bacon bresaola fatback frankfurter jerky hamburger leberkas rump beef ribs ribeye.</p>
          <p>Spicy jalapeno bacon ipsum dolor amet swine alcatra ground round, boudin salami frankfurter ham hock. Kielbasa pastrami pork loin, ground round jowl pork belly chicken shankle drumstick flank picanha doner landjaeger turducken. Sirloin strip steak doner ball tip spare ribs pork loin. Bresaola short ribs cow, doner cupim sirloin shoulder pig chuck t-bone flank bacon. Cow pancetta sausage pork belly short ribs sirloin chicken shankle. Pastrami tenderloin venison, biltong pork belly rump shank turducken bacon ham capicola beef ribs meatloaf ribeye pork loin.</p>
          <p>Pork chop t-bone boudin salami. Salami short loin spare ribs t-bone meatloaf pork chop jowl shank tail. Burgdoggen fatback hamburger pork chop turducken, jerky sirloin. Boudin salami beef ribs turducken andouille shank fatback tri-tip. Drumstick boudin shoulder, ball tip cow landjaeger turkey beef chuck jerky. Meatball tongue cupim biltong, bacon bresaola fatback frankfurter jerky hamburger leberkas rump beef ribs ribeye.</p>

        </Card>
      </section>
    );
  }

}

export default Home;
