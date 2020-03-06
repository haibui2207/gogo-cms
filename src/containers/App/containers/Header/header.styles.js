import { createUseStyles } from 'react-jss';
import { BREAKPOINTS } from '@/constants';
import { MAIN_MENU_WIDTH } from '@/containers/App/containers/Sidebar/config';

export const HEIGHT = { XXXL: 100, XXL: 90, XL: 80, MD: 70, SM: 70 };

export default createUseStyles(theme => ({
  container: {
    height: HEIGHT.XXXL,
    zIndex: 1030,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.background,
    transition: 'height .3s',
    boxShadow: '0 1px 15px rgba(0,0,0,.04), 0 1px 6px rgba(0,0,0,.04)',
  },
  leftHeader: { display: 'flex', alignItems: 'center' },
  sidebarButton: {
    flex: 'none',
    transition: 'width .3s, margin .3s',
    width: MAIN_MENU_WIDTH.XXXL,
  },
  logo: { width: 110 },
  rightHeader: {
    display: 'flex',
    alignItems: 'center',
  },

  [`@media (max-width: ${BREAKPOINTS.MAX_XXL})`]: {
    container: { height: HEIGHT.XXL },
    sidebarButton: { width: MAIN_MENU_WIDTH.XXL },
  },
  [`@media (max-width: ${BREAKPOINTS.MAX_XL})`]: {
    container: { height: HEIGHT.XL },
    sidebarButton: { width: MAIN_MENU_WIDTH.XL },
  },
  [`@media (max-width: ${BREAKPOINTS.MAX_MD})`]: {
    container: { height: HEIGHT.MD },
    sidebarButton: { width: 20, margin: [0, 15] },
    logo: { width: 80 },
  },
  [`@media (max-width: ${BREAKPOINTS.MAX_SM})`]: {
    container: { height: HEIGHT.SM },
    sidebarBut: { width: MAIN_MENU_WIDTH.SM },
  },
}));
