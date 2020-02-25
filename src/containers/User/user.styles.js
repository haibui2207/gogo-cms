import { createUseStyles } from 'react-jss';
import BREAKPOINTS from '@/constants/breakpoints';
import backgroundImage from '@/assets/images/sign-in/background.jpg';

export default createUseStyles(({
  container: {
    height: '100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: '50%',
    position: 'relative',
    minWidth: 320,
    overflow: 'hidden',
  },
  contentWrapper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    transition: '0.5s linear',
    width: '100%',
    padding: [0, 15],
    maxWidth: 1200,
  },
  content: {
    display: 'flex',
    borderRadius: 12,
    overflow: 'hidden',
    boxShadow: '0 1px 15px rgba(0,0,0,.04), 0 1px 6px rgba(0,0,0,.04)',
  },

  [`@media (max-width: ${BREAKPOINTS.MAX_XXL})`]: {
    contentWrapper: { maxWidth: 950 },
  },
  [`@media (max-width: ${BREAKPOINTS.MAX_LG})`]: {
    contentWrapper: { maxWidth: 600 },
    content: { flexDirection: 'column' },
  },
  [`@media (max-width: ${BREAKPOINTS.MAX_MD})`]: {
    contentWrapper: { maxWidth: 540 },
  },
  [`@media (max-width: ${BREAKPOINTS.MAX_SM})`]: {
    contentWrapper: { maxWidth: 400 },
  },
}));
