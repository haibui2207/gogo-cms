import { createUseStyles } from 'react-jss';

export default createUseStyles(theme => ({
  container: {
    width: 110,
    height: '100%',
    zIndex: 1030,
    flex: 'none',
    padding: [10, 0],
    display: 'inline-block',
    overflow: 'auto',
    boxShadow: '0 3px 30px rgba(0,0,0,.1), 0 3px 20px rgba(0,0,0,.1)',
    '-ms-overflow-style': 'none', // hide scroll bar
    '&::-webkit-scrollbar': { display: 'none' }, // hide scroll bar
  },
  list: {
    padding: 0,
    backgroundColor: theme.background,
  },
  listItem: {
    width: '100%',
    height: 110,
    listStyleType: 'none',
    position: 'relative',
    '&:not(:last-child)': { borderBottom: '1px solid #f3f3f3' },
    '&.active:after': {
      content: '""',
      backgroundColor: theme.color,
      borderRadius: 10,
      position: 'absolute',
      width: 6,
      height: 90,
      top: '50%',
      transform: 'translateY(-50%)',
      left: 0,
    },
  },
  itemWrapper: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.textBlack,
    '& [class^=icon-]': { fontSize: 35, lineHeight: '42px' },
    '&:hover': { textDecoration: 'none', color: theme.color },
  },
  itemLabel: {
    fontSize: 13,
    fontWeight: 400,
    borderBottom: '1px solid #f3f3f3',
    lineHeight: '14px',
  },
}));
