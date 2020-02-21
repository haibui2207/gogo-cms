/* eslint-disable no-unused-vars */
import React, { useState, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { signIn, getToken } from '@/redux/ducks/auth.duck';
import backgroundImage from '@/assets/images/sign-in/background.jpg';

import ImageSide from './components/ImageSide';
import SignInForm from './components/SignInForm';
import styles from './signIn.styles';

const SignIn = ({ classes }) => {
  const [state, setState] = useState({
    email: 'eve.holt@reqres.in',
    password: 'cityslicka',
  });
  console.log(backgroundImage);
  const token = useSelector(getToken, shallowEqual);
  const dispatch = useDispatch();

  const handleInputChange = useCallback(({ target: { name, value } }) => {
    setState({ ...state, [name]: value });
  }, []);

  const handleSubmit = () => {
    dispatch(signIn(state));
  };

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

SignIn.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default injectSheet(styles)(SignIn);
