import React, { memo } from 'react';

import useStyles from './home.styles';

const Home = () => {
  const classes = useStyles();

  return <div className={classes.container}>Dashboard Home</div>;
};

export default memo(Home);
