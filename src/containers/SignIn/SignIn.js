import React, { memo } from 'react';

import ImageSide from './components/ImageSide';
import SignInForm from './components/SignInForm';
import useStyles from './signIn.styles';

const SignIn = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.contentWrapper}>
        <div className={classes.content}>
          <ImageSide />
          <SignInForm />
        </div>
      </div>
    </div>
  );
};

export default memo(SignIn);
