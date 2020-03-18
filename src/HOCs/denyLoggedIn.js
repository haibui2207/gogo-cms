import React from 'react';
import { useSelector } from 'react-redux';
import { getToken } from '@/redux/ducks/auth.duck';
import history from '@/history';
import { PATHS } from '@/constants';

/**
 * @function loginGuard
 * @param {*} Component
 * @description If user was logged in, not allow to access this component
 * @returns React Component || Redirect to dashboard page
 */
const denyLoggedIn = Component => props => {
  const token = useSelector(getToken);

  if (token) {
    history.push(PATHS.DASHBOARD);
    return null;
  }

  return <Component {...props} />;
};

export default denyLoggedIn;
