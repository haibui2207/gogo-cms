import { createUseStyles } from 'react-jss';
import BREAKPOINTS from '@/constants/breakpoints';

export default createUseStyles(theme => ({
  toggleSidebarButton: {
    display: 'flex',
    cursor: 'pointer',
    '& [class^=icon-]': {
      margin: 'auto',
      fontSize: 20,
      color: theme.textGray2,
    },
  },

  [`@media (max-width: ${BREAKPOINTS.MAX_MD})`]: {
    toggleSidebarButton: { '&.active': { pointerEvents: 'none' } },
  },
}));
