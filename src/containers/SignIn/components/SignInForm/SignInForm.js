import React, { useState, memo } from 'react';
import { useTheme } from 'react-jss';
import { useDispatch } from 'react-redux';
import Logo from '@/components/Logo';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { signIn } from '@/redux/ducks/auth.duck';

import Title from './components/Title';
import ForgotPassword from './components/ForgotPassword';
import useStyles from './signInForm.styles';

const SignInForm = () => {
  const classes = useStyles({ theme: useTheme() });
  const dispatch = useDispatch();
  const [state, setState] = useState({
    email: 'eve.holt@reqres.in',
    password: 'gogo123',
  });

  const handleInputChange = ({ target: { name, value } }) => {
    setState({ ...state, [name]: value });
  };

  const handleSubmit = () => {
    dispatch(signIn(state));
  };

  return (
    <div className={classes.container}>
      <Logo className={classes.logo} />
      <Title />
      <Input
        name="email"
        label="E-mail"
        placeholder="E-mail"
        value={state.email}
        onChange={handleInputChange}
      />
      <Input
        name="password"
        label="Password"
        type="password"
        value={state.password}
        onChange={handleInputChange}
      />
      <div className={classes.footer}>
        <ForgotPassword />
        <Button onClick={handleSubmit}>Login</Button>
      </div>
    </div>
  );
};

export default memo(SignInForm);
