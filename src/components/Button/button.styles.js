import { createUseStyles } from 'react-jss';

export default createUseStyles((theme) => ({
  container: {
    lineHeight: 1.5,
    fontWeight: 700,
    letterSpacing: 0.8,
    color: theme.textWhite,
    fontSize: 13,
    textTransform: 'uppercase',
    backgroundColor: theme.color,
    padding: [12, 40, 10],
    borderRadius: 50,
    border: `1px solid ${theme.color}`,
    boxShadow: '0 1px 2px 0 rgba(0,0,0,.15),0 1px 3px 1px rgba(0,0,0,.15)',
    '&:hover': {
      borderColor: theme.colorHover,
      backgroundColor: theme.colorHover,
      boxShadow: '0 1px 3px 0 rgba(0,0,0,.15),0 4px 6px 2px rgba(0,0,0,.15)',
    },
    '&:focus': { outline: 'none' },
  },
}));
