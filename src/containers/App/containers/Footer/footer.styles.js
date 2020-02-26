import { createUseStyles } from 'react-jss';
import { BREAKPOINTS } from '@/constants';

export const HEIGHT = { XXXL: 90, XXL: 90, XL: 90, LG: 90, MD: 90, SM: 60 };

export default createUseStyles(theme => ({
  container: {
    height: HEIGHT.XXXL,
    padding: [0, 50],
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'transparent',
    justifyContent: 'space-between',
    borderTop: '1px solid #d7d7d7',
    userSelect: 'none',
  },
  copyRight: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: '21px',
    color: theme.textGray,
    flex: 1,
  },
  list: {
    flex: 1,
    display: 'flex',
    margin: 0,
    textAlign: 'right',
    justifyContent: 'flex-end',
  },
  listItem: {
    listStyleType: 'none',
    position: 'relative',
    '& + $listItem': {
      paddingLeft: 8,
      marginLeft: 8,
      '&:before': {
        content: '"|"',
        position: 'absolute',
        left: -2,
      },
    },
  },
  item: {
    fontSize: 13,
    fontWeight: 400,
    lineHeight: '21px',
    color: theme.color,
    '&:hover': { color: theme.colorHover },
  },

  [`@media (max-width: ${BREAKPOINTS.MAX_XL})`]: {
    container: { padding: [0, 40] },
  },
  [`@media (max-width: ${BREAKPOINTS.MAX_MD})`]: {
    container: { padding: [0, 15] },
  },
  [`@media (max-width: ${BREAKPOINTS.MAX_SM})`]: {
    container: { height: HEIGHT.SM },
  },
}));
