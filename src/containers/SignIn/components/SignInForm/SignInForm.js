import React, { memo } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import Logo from '@/components/Logo';
import Input from '@/components/Input';
import Button from '@/components/Button';

import Title from './components/Title';
import ForgotPassword from './components/ForgotPassword';
import styles from './signInForm.styles';

const SignInForm = ({ classes }) => (
  <div className={classes.container}>
    <Logo className={classes.logo} />
    <Title />
    <form>
      <Input
        name="email"
        label="E-mail"
        placeholder="E-mail"
        value="demo@gogo.com"
      />
      <Input
        name="password"
        label="Password"
        type="password"
        value="gogo123"
        placeholder="Password"
      />
      <div className={classes.footer}>
        <ForgotPassword />
        <Button>Login</Button>
      </div>
    </form>
  </div>
);

SignInForm.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default memo(injectSheet(styles)(SignInForm));
