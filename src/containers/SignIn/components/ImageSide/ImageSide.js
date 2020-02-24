import React, { memo } from 'react';
import { useTheme } from 'react-jss';

import useStyles from './imageSide.styles';

const ImageSide = () => {
  const classes = useStyles({ theme: useTheme() });

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>MAGIC IS IN THE DETAILS</h1>
      <p className={classes.description}>
        Please use your credentials to login.
        <br />
        If you are not a member, please&nbsp;
        <a className={classes.link} href="/register">
          register
        </a>
        .
      </p>
    </div>
  );
};

export default memo(ImageSide);
