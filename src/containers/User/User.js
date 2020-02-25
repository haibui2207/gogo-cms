import React, { memo } from 'react';
import { Switch } from 'react-router';
import generateRoutes from '@/utils/generateRoutes';

import useStyles from './user.styles';
import { ROUTES } from './constants';

const User = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.contentWrapper}>
        <div className={classes.content}>
          <Switch>{generateRoutes(ROUTES)}</Switch>
        </div>
      </div>
    </div>
  );
};

export default memo(User);
