import { createUseStyles } from 'react-jss';

export default createUseStyles((theme) => ({
  container: {
    backgroundColor: theme.background,
    padding: [13.5, 4.5],
    border: 'none',
    borderRadius: [4, 0, 0, 4],
    boxShadow: '-2px 0 5px rgba(0,0,0,.04)',
    cursor: 'pointer',
    zIndex: 1,
    '& [class^=icon-]': { fontSize: 25, color: theme.color },
    '&:focus': { outline: 'none' },
  },
}));
