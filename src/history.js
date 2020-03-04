import { createBrowserHistory } from 'history';
import { PATHS } from '@/constants';

/**
 * Initial browser history
 */
const history = createBrowserHistory({ basename: PATHS.ROOT });

export default history;
