import { createUseStyles } from 'react-jss';

export default createUseStyles(theme => ({
  toggleNotificationButton: {
    display: 'flex',
    cursor: 'pointer',
    position: 'relative',
    '& [class^=icon-]': { fontSize: 18, color: theme.textGray2 },
    '&:hover [class^=icon-]': { color: theme.color },
  },
  badge: {
    position: 'absolute',
    top: -13,
    right: -7,
  },
}));
