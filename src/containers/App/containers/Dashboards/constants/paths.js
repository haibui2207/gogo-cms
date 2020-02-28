import { routes } from '@/utils';

const ROOT = '/dashboards';

const PATHS = {
  ROOT,
  ROUTES_NOT_REGISTERED: routes.combineRoutePath(ROOT, '**'),
};

export default PATHS;
