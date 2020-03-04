import { createUseStyles } from 'react-jss';
import BREAKPOINTS from '@/constants/breakpoints';

import { MAIN_MENU_WIDTH, SUB_MENU_WIDTH } from '../../config';

export default createUseStyles(theme => ({
  mainMenu: {
    padding: [10, 0],
    margin: [0, 0, 0, -MAIN_MENU_WIDTH.XXXL],
    width: MAIN_MENU_WIDTH.XXXL,
    height: '100%',
    position: 'relative',
    zIndex: 2,
    transition: 'margin-left .3s, width .3s',
    backgroundColor: theme.background,
    overflow: 'hidden',
    '-ms-overflow-style': 'none', // hide scroll bar on IE
    '&::-webkit-scrollbar': { display: 'none' }, // hide scroll bar
    '&.active': { marginLeft: 0, overflow: 'auto' },
    // hide sub menu if main menu not active
    '&:not(.active) + div': { left: -SUB_MENU_WIDTH.XXXL, boxShadow: 'none' },
  },

  [`@media (max-width: ${BREAKPOINTS.MAX_XXL})`]: {
    mainMenu: { width: MAIN_MENU_WIDTH.XXL },
  },
  [`@media (max-width: ${BREAKPOINTS.MAX_XL})`]: {
    mainMenu: { width: MAIN_MENU_WIDTH.XL },
  },
  [`@media (max-width: ${BREAKPOINTS.MAX_MD})`]: {
    mainMenu: { width: MAIN_MENU_WIDTH.MD },
  },
  [`@media (max-width: ${BREAKPOINTS.MAX_SM})`]: {
    mainMenu: { width: MAIN_MENU_WIDTH.SM },
  },
}));
