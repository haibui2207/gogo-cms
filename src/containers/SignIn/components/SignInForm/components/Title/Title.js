import React, { memo } from 'react';
import { useTheme } from 'react-jss';

import useStyles from './title.styles';

const Title = () => {
  const classes = useStyles({ theme: useTheme() });

  return <p className={classes.container}>Login</p>;
};

export default memo(Title);
