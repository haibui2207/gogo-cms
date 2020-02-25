import { createUseStyles } from 'react-jss';
import { BREAKPOINTS } from '@/constants';

export default createUseStyles((theme) => ({
  container: {
    width: '100%',
    maxWidth: '60%',
    padding: 80,
    userSelect: 'none',
    backgroundColor: theme.background,
    transition: 'padding 0.5s linear, margin 0.5s linear',
  },
  logo: { marginBottom: 60 },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  [`@media (max-width: ${BREAKPOINTS.MAX_LG})`]: {
    container: { maxWidth: '100%', padding: 60 },
  },
  [`@media (max-width: ${BREAKPOINTS.MAX_SM})`]: {
    container: { padding: [35, 30] },
    logo: { marginBottom: 20 },
  },
}));
