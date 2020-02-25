import { routes } from '@/utils';
import { PATHS as APP_PATHS } from '@/constants';

import Account from '../containers/Account';
import SignIn from '../containers/SignIn';
import SignUp from '../containers/SignUp';
import ForgotPassword from '../containers/ForgotPassword';
import ResetPassword from '../containers/ResetPassword';

import PATHS from './paths';

/**
 * Using generate user page routes
 */
export default [
  {
    path: PATHS.ROOT,
    title: routes.combineAppNameWithTitle('User'),
    redirect: true,
    to: PATHS.SIGN_IN,
    exact: true,
  },
  {
    path: PATHS.ACCOUNT,
    title: routes.combineAppNameWithTitle('User Account'),
    component: Account,
    exact: true,
  },
  {
    path: PATHS.SIGN_IN,
    title: routes.combineAppNameWithTitle('Sign In'),
    component: SignIn,
    exact: true,
  },
  {
    path: PATHS.SIGN_UP,
    title: routes.combineAppNameWithTitle('Sign Up'),
    component: SignUp,
    exact: true,
  },
  {
    path: PATHS.FORGOT_PASSWORD,
    title: routes.combineAppNameWithTitle('Forgot Password'),
    component: ForgotPassword,
    exact: true,
  },
  {
    path: PATHS.RESET_PASSWORD,
    title: routes.combineAppNameWithTitle('Reset Password'),
    component: ResetPassword,
    exact: true,
  },
  {
    path: PATHS.ROUTES_NOT_REGISTERED,
    title: routes.combineAppNameWithTitle('Redirecting'),
    redirect: true,
    to: APP_PATHS.NOT_FOUND,
    exact: true,
  },
];
