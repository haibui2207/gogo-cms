import React, { memo } from 'react';
import { useTheme } from 'react-jss';

import useStyles from './loading.styles';

const Loading = () => {
  const classes = useStyles({ theme: useTheme() });

  return (
    <div className={classes.container}>
      <span className={classes.effect} />
    </div>
  );
};

export default memo(Loading);
