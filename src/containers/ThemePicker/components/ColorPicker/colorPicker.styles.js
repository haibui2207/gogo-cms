import { createUseStyles } from 'react-jss';

export default createUseStyles((theme) => ({
  container: { marginBottom: 24 },
  colorTitle: {
    color: theme.textGray,
    marginBottom: 8,
    fontSize: 13.5,
    fontWeight: 400,
    lineHeight: 1.5,
  },
  colors: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));
