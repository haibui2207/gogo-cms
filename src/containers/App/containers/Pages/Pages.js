import React, { memo } from 'react';

import useStyles from './pages.styles';

const Pages = () => {
  const classes = useStyles();

  return <div className={classes.container}>Pages</div>;
};

export default memo(Pages);
