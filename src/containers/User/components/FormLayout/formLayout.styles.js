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
  title: {
    color: theme.textBlack,
    marginBottom: 24,
    fontSize: 18,
    lineHeight: 1.5,
    transition: 'font-size 0.5s linear',
  },

  [`@media (max-width: ${BREAKPOINTS.MAX_LG})`]: {
    container: { maxWidth: '100%', padding: 60 },
  },
  [`@media (max-width: ${BREAKPOINTS.MAX_MD})`]: {
    title: { fontSize: 15, lineHeight: 1.2 },
  },
  [`@media (max-width: ${BREAKPOINTS.MAX_SM})`]: {
    container: { padding: [35, 30] },
    logo: { marginBottom: 20 },
  },
}));
