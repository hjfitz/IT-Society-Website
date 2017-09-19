import React from 'react';
import { CircularProgress } from 'material-ui/Progress';


const Loading = () => (
  <div style={{ width: '50px', margin: '1% auto' }}>
    <CircularProgress color="accent" size={50} />
  </div>
);

export default Loading;
