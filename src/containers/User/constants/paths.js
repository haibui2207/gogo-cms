import { routes } from '@/utils';

const ROOT = '/user';

const PATHS = {
  ROOT,
  ACCOUNT: routes.combineRoutePath(ROOT, 'account'),
  SIGN_IN: routes.combineRoutePath(ROOT, 'sign-in'),
  SIGN_UP: routes.combineRoutePath(ROOT, 'sign-up'),
  FORGOT_PASSWORD: routes.combineRoutePath(ROOT, 'forgot-password'),
  RESET_PASSWORD: routes.combineRoutePath(ROOT, 'reset-password'),
  ROUTES_NOT_REGISTERED: routes.combineRoutePath(ROOT, '**'),
};

export default PATHS;
