import React, { memo } from 'react';
import oopsBg from '@/assets/images/not-found/bg.jpg';

import useStyles from './notFound.styles';

const NotFound = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.notFound}>
        <h1
          style={{ backgroundImage: `url(${oopsBg})` }}
          className={classes.title}
        >
          Oops!
        </h1>
        <h2 className={classes.subTitle}>404 - Page not found</h2>
        <p className={classes.description}>
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable.
        </p>
        <a className={classes.button} href="/">
          Go To Homepage
        </a>
      </div>
    </div>
  );
};

export default memo(NotFound);
