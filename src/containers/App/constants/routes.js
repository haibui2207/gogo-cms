import { routes } from '@/utils';
import { PATHS as APP_PATHS } from '@/constants';

import Dashboards from '../containers/Dashboards';
import Pages from '../containers/Pages';
import UI from '../containers/UI';
import Menu from '../containers/Menu';

import PATHS from './paths';

/**
 * Using generate user page routes
 */
export default [
  {
    path: PATHS.ROOT,
    title: routes.combineAppNameWithTitle('Redirecting to dashboards'),
    redirect: true,
    to: PATHS.DASHBOARDS,
    exact: true,
  },
  {
    path: PATHS.DASHBOARDS,
    title: routes.combineAppNameWithTitle('App - Dashboards'),
    component: Dashboards,
    exact: false,
  },
  {
    path: PATHS.PAGES,
    title: routes.combineAppNameWithTitle('App - Pages'),
    component: Pages,
    exact: false,
  },
  {
    path: PATHS.UI,
    title: routes.combineAppNameWithTitle('App - UI'),
    component: UI,
    exact: false,
  },
  {
    path: PATHS.MENU,
    title: routes.combineAppNameWithTitle('App - Menu'),
    component: Menu,
    exact: false,
  },
  {
    path: PATHS.ROUTES_NOT_REGISTERED,
    title: routes.combineAppNameWithTitle('Redirecting'),
    redirect: true,
    to: APP_PATHS.NOT_FOUND,
    exact: true,
  },
];
