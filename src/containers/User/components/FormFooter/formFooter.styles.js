import { createUseStyles } from 'react-jss';

export default createUseStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  link: {
    color: theme.textBlack,
    fontSize: 13,
    lineHeight: 1.5,
    '&:hover': { textDecoration: 'none', color: theme.color },
  },
  button: {},
}));
