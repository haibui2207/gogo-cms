import App from '@/containers/App';
import User from '@/containers/User';
import NotFound from '@/containers/NotFound';
import { routes } from '@/utils';
import { PATHS as USER_PATHS } from '@/containers/User/constants';
import { loginGuard, denyLoggedIn } from '@/HOCs';

import PATHS from './paths';

/**
 * Using generate app routes
 */
export default [
  {
    path: PATHS.ROOT,
    title: routes.combineAppNameWithTitle('Welcome'),
    redirect: true,
    to: USER_PATHS.SIGN_IN,
    exact: true,
  },
  {
    path: PATHS.APP,
    title: routes.combineAppNameWithTitle('Admin Template'),
    component: loginGuard(App),
    exact: false,
  },
  {
    path: PATHS.USER,
    title: routes.combineAppNameWithTitle('User'),
    component: denyLoggedIn(User),
    exact: false,
  },
  {
    path: PATHS.SIGN_IN,
    title: routes.combineAppNameWithTitle('Redirecting to sign in'),
    redirect: true,
    to: USER_PATHS.SIGN_IN,
    exact: true,
  },
  {
    path: PATHS.SIGN_UP,
    title: routes.combineAppNameWithTitle('Redirecting to sign up'),
    redirect: true,
    to: USER_PATHS.SIGN_UP,
    exact: true,
  },
  {
    path: PATHS.FORGOT_PASSWORD,
    title: routes.combineAppNameWithTitle('Redirecting to forgot password'),
    redirect: true,
    to: USER_PATHS.FORGOT_PASSWORD,
    exact: true,
  },
  {
    path: PATHS.RESET_PASSWORD,
    title: routes.combineAppNameWithTitle('Redirecting to reset password'),
    redirect: true,
    to: USER_PATHS.RESET_PASSWORD,
    exact: true,
  },
  {
    path: PATHS.NOT_FOUND,
    title: routes.combineAppNameWithTitle('Page not found'),
    component: NotFound,
    exact: true,
  },
  {
    path: PATHS.ROUTES_NOT_REGISTERED,
    title: routes.combineAppNameWithTitle('Redirecting'),
    redirect: true,
    to: PATHS.NOT_FOUND,
    exact: true,
  },
];
