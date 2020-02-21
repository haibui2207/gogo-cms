import React, { memo } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { PATHS } from '@/constants';

import styles from './forgotPassword.styles';

const ForgotPassword = ({ classes }) => (
  <a href={PATHS.FORGOT_PASSWORD} className={classes.container}>
    Forgot password?
  </a>
);

ForgotPassword.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default memo(injectSheet(styles)(ForgotPassword));
