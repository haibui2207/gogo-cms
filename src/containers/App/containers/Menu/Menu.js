import React, { memo } from 'react';

import useStyles from './menu.styles';

const Menu = () => {
  const classes = useStyles();

  return <div className={classes.container}>Menu</div>;
};

export default memo(Menu);
