import { createUseStyles } from 'react-jss';

export default createUseStyles(theme => ({
  badge: {
    fontSize: 9,
    color: theme.color,
    border: `1px solid ${theme.color}`,
    borderRadius: 10,
    width: 18,
    height: 15,
    textAlign: 'center',
    fontWeight: 700,
    lineHeight: '14px',
  },
}));
