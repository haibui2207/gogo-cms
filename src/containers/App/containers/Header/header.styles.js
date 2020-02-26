import { createUseStyles } from 'react-jss';
import { BREAKPOINTS } from '@/constants';

export const HEIGHT = { XXXL: 100, XXL: 90, XL: 80, MD: 70, SM: 70 };

export default createUseStyles(theme => ({
  container: {
    height: HEIGHT.XXXL,
    zIndex: 1030,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.background,
    boxShadow: '0 1px 15px rgba(0,0,0,.04), 0 1px 6px rgba(0,0,0,.04)',
  },
  leftHeader: {
    display: 'flex',
    alignItems: 'center',
  },
  rightHeader: {
    display: 'flex',
    alignItems: 'center',
  },

  [`@media (max-width: ${BREAKPOINTS.MAX_XXL})`]: {
    container: { height: HEIGHT.XXL },
  },
  [`@media (max-width: ${BREAKPOINTS.MAX_XL})`]: {
    container: { height: HEIGHT.XL },
  },
  [`@media (max-width: ${BREAKPOINTS.MAX_MD})`]: {
    container: { height: HEIGHT.MD },
  },
}));
