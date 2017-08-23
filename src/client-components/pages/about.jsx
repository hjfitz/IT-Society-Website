import React from 'react';
import Grid from 'material-ui/Grid';
import { CircularProgress } from 'material-ui/Progress';

import { AvatarCard } from '../components/partial';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      committeeMembers: (<CircularProgress color="accent" size={50} />),
    };
  }
  componentWillMount() {
    fetch('/api/contentful/committee/2017').then(res => {
      return res.json();
    }).then(json => {
      return json[0].fields.committeeMembers;
    }).then(committee => {
      this.setState({
        committeeMembers: committee.map(member => {
          return (
            <AvatarCard
              key={member.sys.id}
              imgSrc={`https:${member.fields.memberPicture.fields.file.url}`}
              email={member.fields.memberEmailAddress}
              name={member.fields.memberName}
              role={member.fields.memberRole}
            />
          );
        }),
      });
    });
  }

  render() {
    return (
      <Grid
        container
        spacing={40}
        align="center"
        justify="center"
        className="opening-content"
        style={{ marginTop: '100px;' }}
      >
        {this.state.committeeMembers}
      </Grid>
    );
  }
}

export default About;
