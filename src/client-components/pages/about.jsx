import React from 'react';
import Grid from 'material-ui/Grid';
import { CircularProgress } from 'material-ui/Progress';

import { AvatarCard } from '../components/partial';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      committeeMembers: <CircularProgress color="accent" size={50} />,
    };
  }

  async componentWillMount() {
    const rawCommittee = await fetch('/api/contentful/committee/2017');
    const committee = await rawCommittee.json();
    const rawMembers = committee[0].fields.committeeMembers;
    this.setState({
      committeeMembers: rawMembers.map(member => (
        <AvatarCard
          key={member.sys.id}
          imgSrc={`https:${member.fields.memberPicture.fields.file.url}`}
          email={member.fields.memberEmailAddress}
          name={member.fields.memberName}
          role={member.fields.memberRole}
        />
      )),
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
        style={{ marginTop: '100px', marginBottom: '20px' }}
      >
        {this.state.committeeMembers}
      </Grid>
    );
  }
}

export default About;
