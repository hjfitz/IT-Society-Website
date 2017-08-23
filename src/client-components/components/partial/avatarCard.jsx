import React from 'react';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';


const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 200,
    backgroundPosition: 'center',
  },
};

/**
 * Simple card with an image
 * @param {Object} props AvatarCard properties
 */
const AvatarCard = props => {
  const classes = props.classes;
  return (
    <Grid item xs={12} sm={6} md={4} className={classes.card}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={props.imgSrc}
          title={props.name}
        />
        <CardContent>
          <Typography type="headline" component="h2">
            <a href={`mailto:${props.email}`}>{props.name}</a>
          </Typography>
          <Typography type="body1" component="p">
            {props.role}
          </Typography>
        </CardContent>
      </Card>
    </Grid>

  );
};

export default withStyles(styles)(AvatarCard);
