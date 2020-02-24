import { createUseStyles } from 'react-jss';
import { BREAKPOINTS } from '@/constants';

export default createUseStyles((theme) => ({
  container: {
    color: theme.textBlack,
    marginBottom: 24,
    fontSize: 18,
    lineHeight: 1.5,
    transition: 'font-size 0.5s linear',
  },

  [`@media (max-width: ${BREAKPOINTS.MAX_MD})`]: {
    container: { fontSize: 15, lineHeight: 1.2 },
  },
}));
