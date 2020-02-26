import { routes } from '@/utils';

const ROOT = '/app';

const PATHS = {
  ROOT,
  DASHBOARDS: routes.combineRoutePath(ROOT, 'dashboards'),
  PAGES: routes.combineRoutePath(ROOT, 'pages'),
  APPLICATIONS: routes.combineRoutePath(ROOT, 'applications'),
  UI: routes.combineRoutePath(ROOT, 'ui'),
  MENU: routes.combineRoutePath(ROOT, 'menu'),
  ROUTES_NOT_REGISTERED: routes.combineRoutePath(ROOT, '**'),
};

export default PATHS;
