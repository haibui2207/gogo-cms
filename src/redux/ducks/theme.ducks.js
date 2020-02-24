import { createAction, handleActions } from 'redux-actions';
import { MODES, COLORS, HOVER_COLORS } from '@/constants';

/**
 * Setup state and prefix
 */
const initialStates = {
  mode: MODES.WHITE,
  color: COLORS.PURPLE,
  colorHover: HOVER_COLORS.PURPLE,
};
const PREFIX = 'THEME';

/**
 * Actions - using for calling, getting, setting from component
 */
export const setTheme = createAction(`${PREFIX}/SET_THEME`);

export const getTheme = (state) => state.theme;

/**
 * Reducers - using for redux store
 */
export default handleActions(
  new Map([
    [
      setTheme,
      (state, { payload }) => ({
        ...state,
        ...payload,
      }),
    ],
  ]),
  {
    ...initialStates,
  },
);
