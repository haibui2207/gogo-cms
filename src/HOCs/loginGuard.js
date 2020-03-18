import React from 'react';
import { useSelector } from 'react-redux';
import { getToken } from '@/redux/ducks/auth.duck';
import history from '@/history';
import { PATHS } from '@/constants';

/**
 * @function loginGuard
 * @param {*} Component
 * @description Not allow user access this component if they was not logged in
 * @returns React Component || Redirect to sign in page
 */
const loginGuard = (Component) => props => {
  const token = useSelector(getToken);

  if (!token) {
    history.push(PATHS.SIGN_IN);
    return null;
  }

  return <Component {...props} />;
};

export default loginGuard;
