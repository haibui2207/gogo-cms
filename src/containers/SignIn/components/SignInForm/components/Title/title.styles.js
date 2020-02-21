import { BREAKPOINTS } from '@/styles';

export default {
  container: {
    color: '#303030',
    marginBottom: 24,
    fontSize: 18,
    lineHeight: 1.5,
    transition: '0.5s linear',
  },

  [`@media (max-width: ${BREAKPOINTS.MAX_MD})`]: {
    container: { fontSize: 15, lineHeight: 1.2 },
  },
};
