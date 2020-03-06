import { createUseStyles } from 'react-jss';

export default createUseStyles(theme => ({
  toggleApplicationsButton: {
    display: 'flex',
    cursor: 'pointer',
    position: 'relative',
    '& [class^=icon-]': { fontSize: 18, color: theme.textGray2 },
    '&:hover [class^=icon-]': { color: theme.color },
  },
}));
