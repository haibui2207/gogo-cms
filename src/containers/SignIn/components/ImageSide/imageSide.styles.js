import { createUseStyles } from 'react-jss';
import backgroundImage from '@/assets/images/sign-in/balloon.jpg';
import { BREAKPOINTS } from '@/constants';

export default createUseStyles((theme) => ({
  container: {
    width: '100%',
    maxWidth: '40%',
    padding: [80, 40],
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${backgroundImage})`,
    color: theme.textWhite,
    transition: 'padding 0.5s linear',
  },
  title: {
    fontSize: 32,
    fontWeight: 500,
    marginBottom: 8,
    lineHeight: 1.2,
    transition: '0.5s linear',
  },
  description: {
    fontSize: 14,
    fontWeight: 400,
    marginBottom: 0,
    lineHeight: 1.5,
  },
  link: {
    color: 'currentColor',
    '&:hover': { textDecoration: 'none', color: 'currentColor' },
  },

  [`@media (max-width: ${BREAKPOINTS.MAX_LG})`]: {
    container: { maxWidth: '100%', padding: 60 },
  },
  [`@media (max-width: ${BREAKPOINTS.MAX_MD})`]: {
    title: { fontSize: 25 },
  },
  [`@media (max-width: ${BREAKPOINTS.MAX_SM})`]: {
    container: { padding: [35, 30] },
    title: { fontSize: 23 },
  },
}));
