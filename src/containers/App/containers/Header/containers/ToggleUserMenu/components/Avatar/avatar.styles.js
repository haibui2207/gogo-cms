import { createUseStyles } from 'react-jss';
import BREAKPOINTS from '@/constants/breakpoints';

export default createUseStyles(theme => ({
  avatar: {
    borderRadius: '50%',
    width: 40,
    height: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    cursor: 'pointer',
    background: theme.background2,
    '& > img': { width: '100%' },
    '& [class^=icon-]': { fontSize: 15, color: theme.textGray2 },
    '&:hover [class^=icon-]': { color: theme.color },
  },

  [`@media (max-width: ${BREAKPOINTS.MAX_MD})`]: {
    avatar: {
      width: 30,
      height: 30,
      '& [class^=icon-]': { fontSize: 13 },
    },
  },
}));
