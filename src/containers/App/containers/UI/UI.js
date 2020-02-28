import React, { memo } from 'react';

import useStyles from './ui.styles';

const UI = () => {
  const classes = useStyles();

  return <div className={classes.container}>UI</div>;
};

export default memo(UI);
