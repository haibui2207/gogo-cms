import React, { memo } from 'react';

import useStyles from './dashboards.styles';

const Dashboards = () => {
  const classes = useStyles();

  return <div className={classes.container}>Dashboards</div>;
};

export default memo(Dashboards);
