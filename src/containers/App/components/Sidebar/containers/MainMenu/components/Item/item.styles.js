import { createUseStyles } from 'react-jss';
import BREAKPOINTS from '@/constants/breakpoints';

export default createUseStyles(theme => ({
  itemContainer: {
    width: '100%',
    height: 110,
    listStyleType: 'none',
    position: 'relative',
    transition: 'height .3s',
    '&:not(:last-child)': { borderBottom: `1px solid ${theme.borderColor2}` },
    '&.active': {
      '& $item': { color: theme.color },
      '&:after': {
        content: '""',
        backgroundColor: theme.color,
        borderRadius: 10,
        position: 'absolute',
        width: 6,
        height: 90,
        top: '50%',
        transition: 'width .3s, height .3s',
        transform: 'translateY(-50%)',
        left: 0,
      },
    },
  },
  item: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.textBlack,
    '& [class^=icon-]': { fontSize: 30, lineHeight: '42px' },
    '&:hover': { textDecoration: 'none', color: theme.color },
  },
  label: {
    fontSize: 13,
    fontWeight: 400,
    lineHeight: '14px',
  },

  [`@media (max-width: ${BREAKPOINTS.MAX_MD})`]: {
    itemContainer: {
      height: 90,
      '&.active': { '&:after': { width: 3, height: 60 } },
    },
    item: { '& [class^=icon-]': { fontSize: 25, lineHeight: '38px' } },
  },
}));
