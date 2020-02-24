import React, { memo } from 'react';
import { useTheme } from 'react-jss';
import { PATHS } from '@/constants';

import useStyles from './forgotPassword.styles';

const ForgotPassword = () => {
  const classes = useStyles({ theme: useTheme() });

  return (
    <a href={PATHS.FORGOT_PASSWORD} className={classes.container}>
      Forgot password?
    </a>
  );
};

export default memo(ForgotPassword);
