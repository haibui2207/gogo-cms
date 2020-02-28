import { routes } from '@/utils';
import { PATHS as APP_PATHS } from '@/constants';

import Home from '../containers/Home';

import PATHS from './paths';

/**
 * Using generate user page routes
 */
export default [
  {
    path: PATHS.ROOT,
    title: routes.combineAppNameWithTitle('Redirecting to dashboards'),
    component: Home,
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
