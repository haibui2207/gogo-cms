import { createUseStyles } from 'react-jss';

export default createUseStyles((theme) => ({
  container: {
    color: theme.textBlack,
    fontSize: 13,
    lineHeight: 1.5,
    '&:hover': { textDecoration: 'none', color: theme.color },
  },
}));
