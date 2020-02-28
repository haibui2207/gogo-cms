import { createUseStyles } from 'react-jss';
import { BREAKPOINTS } from '@/constants';

import { MAIN_MENU_WIDTH, SUB_MENU_WIDTH } from '../../config';

export default createUseStyles(theme => ({
  subMenu: {
    position: 'absolute',
    zIndex: 1,
    width: 230,
    left: -(SUB_MENU_WIDTH.XXXL - MAIN_MENU_WIDTH.XXXL),
    top: 0,
    padding: [10, 0],
    height: '100%',
    backgroundColor: theme.background,
    transition: 'margin-left .3s, left .3s',
    borderLeft: `1px solid ${theme.borderColor2}`,
    boxShadow: '0 3px 30px rgba(0,0,0,.1), 0 3px 20px rgba(0,0,0,.1)',
    '&.active': { left: MAIN_MENU_WIDTH.XXXL },
  },

  [`@media (max-width: ${BREAKPOINTS.MAX_XXL})`]: {
    subMenu: {
      left: -(SUB_MENU_WIDTH.XXL - MAIN_MENU_WIDTH.XXL),
      '&.active': { left: MAIN_MENU_WIDTH.XXL },
    },
  },
  [`@media (max-width: ${BREAKPOINTS.MAX_XL})`]: {
    subMenu: {
      left: -(SUB_MENU_WIDTH.XL - MAIN_MENU_WIDTH.XL),
      '&.active': { left: MAIN_MENU_WIDTH.XL },
    },
  },
  [`@media (max-width: ${BREAKPOINTS.MAX_MD})`]: {
    subMenu: {
      left: -(SUB_MENU_WIDTH.MD - MAIN_MENU_WIDTH.MD),
      '&.active': { left: MAIN_MENU_WIDTH.MD },
    },
  },
}));
