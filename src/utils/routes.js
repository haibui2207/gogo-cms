import { APP_NAME } from '@/configs';

const combineRoutePath = (root, path) => [root, path]
  .join('/')
  .replace(/\/+/g, '/') // replace multiple slashes with single slash
  // eslint-disable-next-line no-useless-escape
  .replace(/[\/]+$/, ''); // remove end slash

const combineAppNameWithTitle = (title) => [APP_NAME, title].join(' - ');

export default { combineRoutePath, combineAppNameWithTitle };
