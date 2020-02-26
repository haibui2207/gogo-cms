import { routes } from '@/utils';

const ROOT = '/';

const PATHS = {
  ROOT,
  APP: routes.combineRoutePath(ROOT, 'app'),
  USER: routes.combineRoutePath(ROOT, 'user'),
  SIGN_IN: routes.combineRoutePath(ROOT, 'sign-in'),
  SIGN_UP: routes.combineRoutePath(ROOT, 'sign-up'),
  FORGOT_PASSWORD: routes.combineRoutePath(ROOT, 'forgot-password'),
  RESET_PASSWORD: routes.combineRoutePath(ROOT, 'reset-password'),
  NOT_FOUND: routes.combineRoutePath(ROOT, 'not-found'),
  ROUTES_NOT_REGISTERED: routes.combineRoutePath(ROOT, '**'),
};

export default PATHS;
